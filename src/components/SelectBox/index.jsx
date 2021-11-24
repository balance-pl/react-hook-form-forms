import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import isEqual from 'lodash.isequal'

// Components
import Input from '../Input'
import Suggest from '../Suggest'

// Icons
import IconCode from '../../icons/IconCode'

import styles from './styles.module.scss'

const removeBackslash = (value) =>
  typeof value === 'string' ? value.replace(/\\/g, '') : value

const getStateData = ({ options, value }) => {
  const activeOption = options.find((o) => o.id === value)
  const activeOptionId = activeOption ? activeOption.id : null
  const inputPlaceholder = activeOption ? activeOption.name : ''
  const inputValue = removeBackslash(inputPlaceholder)
  return { activeOptionId, inputPlaceholder, inputValue }
}

const getFilteredOptions = (options, inputValue = '') => {
  const inputValuePrepared = inputValue
    .trim()
    .replace(/(\*|\.|\+|\{|\}|\(|\)|\$|\?|\^)/g, '\\$1')
  if (inputValuePrepared) {
    return options.filter((o) =>
      new RegExp(inputValuePrepared, 'ig').test(o.name)
    )
  }
  return options
}

const SUGGEST_CLOSING_DELAY = 200
const SUGGEST_OPENING_DELAY = 200
const KEY_UP = 38
const KEY_DOWN = 40
const KEY_ENTER = 13

class SelectBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeOptionId: null,
      inputValue: '',
      inputPlaceholder: '',
      // these props need to make a special className modifiers for 200ms opening/closing delay
      isSuggestWrapperClosing: false,
      isSuggestWrapperOpening: false,
      isSuggestWrapperVisible: false,
    }

    this.handleIconClick = this.handleIconClick.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleSuggestChange = this.handleSuggestChange.bind(this)
    this.handleSuggestItemHover = this.handleSuggestItemHover.bind(this)
    this.suggestClose = this.suggestClose.bind(this)
    this.suggestOpen = this.suggestOpen.bind(this)
    this.makeNextSuggestOptionActive =
      this.makeNextSuggestOptionActive.bind(this)
    this.makePrevSuggestOptionActive =
      this.makePrevSuggestOptionActive.bind(this)
    this.scrollToActiveOption = this.scrollToActiveOption.bind(this)
  }

  // Life Cycle
  componentDidMount() {
    const { isSuggestWrapperVisible = false } = this.props
    const { activeOptionId, inputPlaceholder, inputValue } = getStateData(
      this.props
    )
    this.setState({
      activeOptionId,
      inputPlaceholder,
      inputValue,
      isSuggestWrapperVisible,
    })
  }

  componentDidUpdate(prevProps) {
    // Изменился value или options извне
    const { value, options, isSuggestWrapperVisible } = this.props
    if (prevProps.value !== value || !isEqual(prevProps.options, options)) {
      const { activeOptionId, inputPlaceholder, inputValue } = getStateData(
        this.props
      )
      this.setState({ activeOptionId, inputPlaceholder, inputValue })
    }

    // Изменилась видимость саджеста извне
    if (prevProps.isSuggestWrapperVisible !== isSuggestWrapperVisible) {
      this.setState({ isSuggestWrapperVisible }) // eslint-disable-line
    }
  }

  // Icon handlers
  handleIconClick(e) {
    e.preventDefault()
    const { isSuggestWrapperVisible } = this.state
    if (!isSuggestWrapperVisible) {
      this.inputWrapper.querySelector('input').focus()
    }
  }

  // Input handlers
  handleInputBlur() {
    this.setState({ isSuggestWrapperClosing: true })

    // timeout нужен, чтобы успеть обработать клик по option ДО ТОГО,
    // как он скроется из-за события input onblur
    setTimeout(() => {
      this.suggestClose()
      const { value } = this.props
      const { activeOptionId, inputPlaceholder } = this.state
      this.setState({
        activeOptionId: value || activeOptionId,
        inputValue: removeBackslash(inputPlaceholder),
        isSuggestWrapperClosing: false,
      })
    }, SUGGEST_CLOSING_DELAY)
  }

  handleInputChange(inputValue) {
    const inputValueFormat = removeBackslash(inputValue)
    this.setState({ inputValue: inputValueFormat }, () => {
      const { value, options } = this.props

      const filteredOptions = getFilteredOptions(options, inputValueFormat)
      if (filteredOptions.length === 0) {
        return false
      }

      if (value) {
        const isFilteredOptionsContainValue = !!filteredOptions.find(
          (o) => o.id === value
        )
        if (isFilteredOptionsContainValue) {
          // Выделяем выбранную опцию
          this.setState({
            activeOptionId: value,
          })
        } else {
          // Выделяем первую опцию, если значения контрола (value)
          // НЕТ в списке отсортированных опций (filteredOptions)
          this.setState({
            activeOptionId: filteredOptions[0].id,
          })
        }
      } else {
        // Выделяем первую опцию, если ничего не выбрано
        this.setState({
          activeOptionId: filteredOptions[0].id,
        })
      }
      return undefined
    })
  }

  handleInputFocus() {
    this.setState({ inputValue: '', isSuggestWrapperOpening: true })
    this.suggestOpen()

    // timeout нужен для того, чтобы задать контролу класс opening на некоторое время (200ms)
    setTimeout(() => {
      this.setState({ isSuggestWrapperOpening: false })
    }, SUGGEST_OPENING_DELAY)
  }

  handleKeyDown(e) {
    const { isSuggestWrapperVisible, activeOptionId } = this.state
    const { options: optionsProps } = this.props
    const option = optionsProps.find((o) => o.id === activeOptionId)
    switch (e.keyCode) {
      case KEY_DOWN:
        e.preventDefault()
        if (isSuggestWrapperVisible) {
          this.makeNextSuggestOptionActive()
        } else {
          this.suggestOpen()
        }
        break
      case KEY_UP:
        e.preventDefault()
        if (isSuggestWrapperVisible) {
          this.makePrevSuggestOptionActive()
        } else {
          this.suggestOpen()
        }
        break
      case KEY_ENTER:
        if (option) {
          this.handleSuggestChange({ id: activeOptionId })
          this.suggestClose()
          this.inputWrapper.querySelector('input').blur()
        }
        break
      default:
        break
    }
  }

  // Suggest handlers
  handleSuggestChange({ id }) {
    const { onChange } = this.props
    onChange(id, this.props)
  }

  handleSuggestItemHover({ id }) {
    this.setState({ activeOptionId: id })
  }

  // Methods
  suggestClose() {
    this.setState({ isSuggestWrapperVisible: false })
  }

  suggestOpen() {
    const { options, value } = this.props
    const { inputValue } = this.state

    const filteredOptions = getFilteredOptions(options, inputValue)

    let newState = { isSuggestWrapperVisible: true }
    const isValueEmpty = value === undefined || value === null || value === ''

    if (isValueEmpty) {
      // Выделяем первую опцию, если ничего не выбрано
      if (filteredOptions.length > 0) {
        newState = {
          ...newState,
          activeOptionId: filteredOptions[0] ? filteredOptions[0].id : null,
        }
      }
    } else {
      const isFilteredOptionsContainValue = !!filteredOptions.find(
        (o) => o.id === value
      )
      // Выделяем первую опцию, если значения контрола (value)
      // НЕТ в списке отсортированных опций (filteredOptions)
      if (!isFilteredOptionsContainValue) {
        newState = {
          ...newState,
          activeOptionId: filteredOptions[0] ? filteredOptions[0].id : null,
        }
      }
    }

    this.setState(newState, () => {
      this.scrollToActiveOption(true)
    })
  }

  makeNextSuggestOptionActive() {
    const { inputValue, activeOptionId } = this.state
    const { options: optionsProps } = this.props
    const options = getFilteredOptions(optionsProps, inputValue)
    if (options.length === 0) {
      return
    }

    let activeOptionIndex = options.findIndex((o) => o.id === activeOptionId)
    if (activeOptionIndex === -1) {
      activeOptionIndex = 0
    } else if (activeOptionIndex + 1 < options.length) {
      activeOptionIndex += 1
    }

    this.setState({ activeOptionId: options[activeOptionIndex].id }, () => {
      this.scrollToActiveOption()
    })
  }

  makePrevSuggestOptionActive() {
    const { activeOptionId, inputValue } = this.state
    const { options: optionsProps } = this.props
    const options = getFilteredOptions(optionsProps, inputValue)
    if (options.length === 0) {
      return
    }

    let activeOptionIndex = options.findIndex((o) => o.id === activeOptionId)
    if (activeOptionIndex > 0) {
      activeOptionIndex -= 1
      this.setState({ activeOptionId: options[activeOptionIndex].id }, () => {
        this.scrollToActiveOption()
      })
    }
  }

  scrollToActiveOption(calledFromsuggestOpenMethod = false) {
    const { activeOptionId } = this.state
    const activeOptionDOM = this.element.querySelector(
      `#select_box_option_${activeOptionId}`
    )
    const suggestListDOM = this.suggest.querySelector('ul')

    if (activeOptionDOM && suggestListDOM) {
      const activeOptionClientRect = activeOptionDOM.getBoundingClientRect()
      const suggestListClientRect = suggestListDOM.getBoundingClientRect()
      const suggestClientRect = this.suggest.getBoundingClientRect()

      // вышли ЗА ВЕРХНЮЮ границу контейнера
      const isActiveOptionOutOfTheBoxTop =
        activeOptionClientRect.top < suggestClientRect.top

      // вышли ЗА НИЖНЮЮ границу контейнера
      const isActiveOptionOutOfTheBoxBottom =
        activeOptionClientRect.top + activeOptionClientRect.height >
        suggestClientRect.top + suggestClientRect.height

      if (calledFromsuggestOpenMethod) {
        // прокручиваем активный элемент К СЕРЕДИНЕ контейнера
        const scrollTop =
          activeOptionClientRect.top -
          suggestListClientRect.top -
          (suggestClientRect.height / 2 - activeOptionClientRect.height / 2)
        this.suggest.scrollTop = scrollTop
      } else if (isActiveOptionOutOfTheBoxTop) {
        // прокручиваем активный элемент К ВЕРХУ контейнера
        const scrollTop = activeOptionClientRect.top - suggestListClientRect.top
        this.suggest.scrollTop = scrollTop
      } else if (isActiveOptionOutOfTheBoxBottom) {
        // прокручиваем активный элемент К НИЗУ контейнера
        const scrollTop =
          activeOptionClientRect.top -
          suggestListClientRect.top -
          (suggestClientRect.height - activeOptionClientRect.height)
        this.suggest.scrollTop = scrollTop
      }
    }
  }

  render() {
    const { error, label, mask, notFoundText, options, value, formatOption } =
      this.props

    const {
      activeOptionId,
      inputPlaceholder,
      inputValue,
      isSuggestWrapperClosing,
      isSuggestWrapperOpening,
      isSuggestWrapperVisible,
    } = this.state

    const componentClass = styles.SelectBox

    const iconClass = cn(styles.SelectBox__Icon, {
      [styles.SelectBox__Icon_suggest_visible]: isSuggestWrapperVisible,
    })

    const inputClass = styles.SelectBox__Input

    console.log({
      isSuggestWrapperClosing,
      isSuggestWrapperOpening,
      isSuggestWrapperVisible,
    })
    const suggestWrapperClass = cn(styles.SelectBox__SuggestWrapper, {
      [styles.SelectBox__SuggestWrapper_closing]: isSuggestWrapperClosing,
      [styles.SelectBox__SuggestWrapper_opening]: isSuggestWrapperOpening,
      [styles.SelectBox__SuggestWrapper_visible]: isSuggestWrapperVisible,
    })

    const suggestClass = styles.SelectBox__Suggest

    const notFound = styles.SelectBox__NotFound

    const filteredOptions = getFilteredOptions(options, inputValue)

    return (
      <div
        ref={(el) => {
          this.element = el
          return this.element
        }}
        className={componentClass}
      >
        <div className={iconClass} onClick={this.handleIconClick}>
          <IconCode />
        </div>
        <div
          className={inputClass}
          ref={(el) => {
            this.inputWrapper = el
            return this.inputWrapper
          }}
        >
          <Input
            error={error}
            label={label}
            mask={mask}
            value={isSuggestWrapperClosing ? inputPlaceholder : inputValue}
            placeholder={inputPlaceholder}
            onBlur={this.handleInputBlur}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            onKeyDown={this.handleKeyDown}
          />
        </div>
        <div className={suggestWrapperClass}>
          <div
            className={suggestClass}
            ref={(el) => {
              this.suggest = el
              return this.suggest
            }}
          >
            {filteredOptions.length > 0 ? (
              <Suggest
                activeOptionId={activeOptionId}
                optionSearchMask={inputValue}
                options={filteredOptions}
                value={value}
                formatOption={formatOption}
                onChange={this.handleSuggestChange}
                onItemHover={this.handleSuggestItemHover}
              />
            ) : (
              <div className={notFound}>{notFoundText}</div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

SelectBox.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  label: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  notFoundText: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
    })
  ),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mask: PropTypes.string,
  isSuggestWrapperVisible: PropTypes.bool,
  formatOption: PropTypes.func,
  onChange: PropTypes.func,
}

SelectBox.defaultProps = {
  error: null,
  label: null,
  notFoundText: 'Совпадений не найдено',
  options: [],
  value: null,
  mask: null,
  isSuggestWrapperVisible: false,

  formatOption: (name, option) => name, // eslint-disable-line no-unused-vars
  onChange: (id, props) => {}, // eslint-disable-line no-unused-vars
}

export default SelectBox
