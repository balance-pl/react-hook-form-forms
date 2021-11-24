import PropTypes from 'prop-types'

// Components
import Option from './option'

import styles from './suggest.module.scss'

function Suggest(props) {
  const {
    activeOptionId,
    optionSearchMask,
    options,
    value,
    formatOption,
    onChange,
    onItemHover,
  } = props

  // Handlers
  function handleOptionClick(id) {
    onChange(options.find((o) => o.id === id))
  }

  function handleMouseOver(id) {
    onItemHover(options.find((o) => o.id === id))
  }

  const optionSearchMaskPrepared = optionSearchMask
    ? optionSearchMask
        .trim()
        .replace(
          /(\*|\.|\+|\{|\}|\(|\)|\$|\?|\^|\[|\]|;|:|,|\/|-|_|=)/g,
          '\\$1'
        )
    : null

  return (
    <div className={styles.Suggest}>
      <ul className={styles.Suggest__Options}>
        {options.map((option) => {
          const { id, name = '' } = option

          let nameWithHighlights = [name]
          if (optionSearchMaskPrepared) {
            const regexp = new RegExp(optionSearchMaskPrepared, 'ig')
            const match = name.match(regexp)

            if (Array.isArray(match)) {
              const nameParts = name.split(regexp)
              nameWithHighlights = []

              let matchIndex = 0
              nameParts.forEach((part) => {
                nameWithHighlights.push(part)
                if (matchIndex < match.length) {
                  nameWithHighlights.push(
                    <i key={matchIndex}>{match[matchIndex]}</i>
                  )
                  matchIndex += 1
                }
              })
            }
          }

          return (
            <li key={id} className={styles.Suggest__Option}>
              <Option
                id={id}
                isActive={id === activeOptionId}
                isValue={id === value}
                onClick={handleOptionClick}
                onMouseOver={handleMouseOver}
              >
                {formatOption(nameWithHighlights, option)}
              </Option>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

Suggest.propTypes = {
  activeOptionId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  optionSearchMask: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.shape({}),
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
    })
  ),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  formatOption: PropTypes.func,
  onChange: PropTypes.func,
  onItemHover: PropTypes.func,
}
Suggest.defaultProps = {
  activeOptionId: null,
  optionSearchMask: '',
  options: [],
  value: null,
  formatOption: (name, option) => name,
  onChange: (option) => {},
  onItemHover: (option) => {},
}

export default Suggest
