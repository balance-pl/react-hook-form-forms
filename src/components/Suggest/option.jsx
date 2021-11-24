import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './option.module.scss'

function Option(props) {
  const { children, id, isActive, isValue, onClick, onMouseOver } = props

  // Handlers
  function handleClick(e) {
    e.preventDefault()
    onClick(id)
  }
  function handleMouseOver() {
    onMouseOver(id)
  }

  const componentClass = cn(styles.Option, {
    [styles.Option_active]: isActive,
    [styles.Option_value]: isValue,
  })

  return (
    <div
      className={componentClass}
      id={`select_box_option_${id}`}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
    >
      {children}
    </div>
  )
}

Option.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isActive: PropTypes.bool,
  isValue: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
}
Option.defaultProps = {
  children: null,
  id: null,
  isActive: false,
  isValue: false,
  onClick: (id) => {},
  onMouseOver: (id) => {},
}

export default Option
