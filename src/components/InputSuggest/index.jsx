import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

// Components
import Input from '../Input'
import Suggest from '../Suggest'

import styles from './styles.module.scss'

const KEY_UP = 38
const KEY_DOWN = 40
const KEY_ENTER = 13
const KEY_ESC = 27
const SUGGEST_CLOSING_DELAY = 200
const SUGGEST_GET_OPTIONS_DELAY = 200

const removeBackslash = (value) =>
  typeof value === 'string' ? value.replace(/\\/g, '') : value

class InputSuggest extends Component {
  constructor(props) {
    super(props)
    this._getOptionsTimeout = null

    this.state = {
      activeOptionId: null,
      isGettingOptions: false,
      isSuggestWrapperVisible: false,
      options: [],
    }

    this.handleInputBlur = this.handleInputBlur.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleSuggestChange = this.handleSuggestChange.bind(this)
    this.handleSuggestItemHover = this.handleSuggestItemHover.bind(this)
    this.callGetOptions = this.callGetOptions.bind(this)
    this.getOptions = this.getOptions.bind(this)
    this.makeNextSuggestOptionActive =
      this.makeNextSuggestOptionActive.bind(this)
    this.makePrevSuggestOptionActive =
      this.makePrevSuggestOptionActive.bind(this)
    this.scrollToActiveOption = this.scrollToActiveOption.bind(this)
    this.suggestClose = this.suggestClose.bind(this)
    this.suggestOpen = this.suggestOpen.bind(this)
    this.blur = this.blur.bind(this)
    this.focus = this.focus.bind(this)
  }

  // Input handlers
  handleInputBlur(props) {
    const { onBlur } = this.props
    setTimeout(() => {
      this.suggestClose()
      this.setState({ activeOptionId: null, options: [] })
      onBlur(props)
    }, SUGGEST_CLOSING_DELAY)
  }

  handleInputChange(value) {
    const valueFormat = removeBackslash(value)
    const { onChange, minLengthToCallGet } = this.props
    onChange(valueFormat, this.props)
    if (valueFormat && valueFormat.length >= minLengthToCallGet) {
      this.callGetOptions(valueFormat)
    } else {
      this.suggestClose()
      this.setState({ activeOptionId: null, options: [] })
    }
  }

  handleInputFocus() {
    const { value, minLengthToCallGet, onFocus } = this.props
    if (value && value.length >= minLengthToCallGet) {
      this.callGetOptions(value)
    }
    onFocus(this.props)
  }

  handleKeyDown(e) {
    const { isGettingOptions } = this.state
    if (isGettingOptions) {
      return false
    }
    const { onEnter, value } = this.props
    const { activeOptionId, isSuggestWrapperVisible, options } = this.state

    switch (e.keyCode) {
      case KEY_DOWN:
        e.preventDefault()
        if (isSuggestWrapperVisible) {
          this.makeNextSuggestOptionActive()
        }
        break
      case KEY_UP:
        e.preventDefault()
        if (isSuggestWrapperVisible) {
          this.makePrevSuggestOptionActive()
        }
        break
      case KEY_ENTER:
        e.preventDefault()

        // Саджест открыт
        if (isSuggestWrapperVisible) {
          const activeOption = options.find((o) => o.id === activeOptionId)
          // И есть выбранная опция
          if (activeOption) {
            this.handleSuggestChange(activeOption)
          } else {
            onEnter(value, false, this.props)
          }
          this.suggestClose()
        } else {
          onEnter(value, false, this.props)
        }
        this.inputWrapper.querySelector('input').blur()

        break
      case KEY_ESC:
        this.handleInputBlur()
        break
      default:
        break
    }
    return undefined
  }

  // Suggest handlers
  handleSuggestChange({ name, data = {} }) {
    const nameFormat = removeBackslash(name)
    const { onChange, onEnter } = this.props
    onChange(nameFormat, this.props, data)
    onEnter(nameFormat, true, this.props, data)
  }

  handleSuggestItemHover({ id }) {
    this.setState({ activeOptionId: id })
  }

  /* eslint-disable */
  // Options methods
  callGetOptions(value) {
    if (this._getOptionsTimeout) {
      clearTimeout(this._getOptionsTimeout)
    }
    this._getOptionsTimeout = setTimeout(() => {
      this.getOptions(value)
    }, SUGGEST_GET_OPTIONS_DELAY)
  }
  /* eslint-enable */

  getOptions(value) {
    this.setState({ isGettingOptions: true })
    const { getOptionsMethod, optionsToShow } = this.props

    getOptionsMethod(value, optionsToShow)
      .then((options) => {
        let stateProps = {
          activeOptionId: null,
          isGettingOptions: false,
          options,
        }
        if (options.length > 0) {
          this.suggestOpen()
          // Если список опций в "саджесте" НЕ пустой,
          // то выбираем первую опцию в качестве activeOptionId
          stateProps = {
            ...stateProps,
            activeOptionId: options[0].id,
          }
        }
        this.setState(stateProps, () => {
          this.scrollToActiveOption()
        })
      })
      .catch(() => {
        this.setState({
          activeOptionId: null,
          isGettingOptions: false,
          options: [],
        })
      })
  }

  makeNextSuggestOptionActive() {
    const { options, activeOptionId } = this.state

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
    const { options, activeOptionId } = this.state

    let activeOptionIndex = options.findIndex((o) => o.id === activeOptionId)
    if (activeOptionIndex > 0) {
      activeOptionIndex -= 1
      this.setState({ activeOptionId: options[activeOptionIndex].id }, () => {
        this.scrollToActiveOption()
      })
    }
  }

  scrollToActiveOption() {
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

      if (isActiveOptionOutOfTheBoxTop) {
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

  // Suggest methods
  suggestClose() {
    this.setState({
      activeOptionId: null,
      isSuggestWrapperVisible: false,
    })
  }

  suggestOpen() {
    this.setState({ isSuggestWrapperVisible: true })
  }

  // Input methods
  blur() {
    this.input.blur()
  }

  focus() {
    this.input.focus()
  }

  render() {
    const {
      error,
      label,
      minLengthToCallGet,
      optionsToShow,
      value,
      formatOption,
      getOptionsMethod,
      onBlur,
      onChange,
      onEnter,
      onFocus,
      ...inputProps
    } = this.props

    const { activeOptionId, isSuggestWrapperVisible, options } = this.state

    const componentClass = styles.InputSuggest

    const inputClass = styles.InputSuggest__Input

    const suggestWrapperClass = cn(styles.InputSuggest__SuggestWrapper, {
      [styles.InputSuggest__SuggestWrapper_visible]:
        isSuggestWrapperVisible && options.length > 0,
    })

    const suggestClass = styles.InputSuggest__Suggest

    return (
      <div
        ref={(el) => {
          this.element = el
          return this.element
        }}
        className={componentClass}
      >
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
            ref={(el) => {
              this.input = el
              return this.input
            }}
            value={value}
            onBlur={this.handleInputBlur}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            onKeyDown={this.handleKeyDown}
            {...inputProps}
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
            <Suggest
              activeOptionId={activeOptionId}
              optionSearchMask={value}
              options={options}
              value={value}
              formatOption={formatOption}
              onChange={this.handleSuggestChange}
              onItemHover={this.handleSuggestItemHover}
            />
          </div>
        </div>
      </div>
    )
  }
}

InputSuggest.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  minLengthToCallGet: PropTypes.number,
  optionsToShow: PropTypes.number,
  value: PropTypes.string,

  formatOption: PropTypes.func,
  getOptionsMethod: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  onFocus: PropTypes.func,
}

InputSuggest.defaultProps = {
  error: null,
  label: null,
  minLengthToCallGet: 2,
  optionsToShow: 5,
  value: null,

  formatOption: (name, option) => name,
  getOptionsMethod: (query, count) => Promise.resolve([]),
  onBlur: (props) => {},
  onChange: (name, props, data) => {},
  onEnter: (value, fromSuggest, props, data) => {},
  onFocus: (props) => {},
}

export default InputSuggest
