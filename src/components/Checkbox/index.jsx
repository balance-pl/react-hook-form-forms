import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './styles.module.scss'

function Checkbox(props) {
  const { checked, children, onChange, ...otherProps } = props

  // Handlers
  function handleChange(e) {
    onChange(e.target.checked, props)
  }

  const labelClass = cn(styles.Checkbox__Label, {
    [styles.Checkbox__Label_checked]: checked,
  })

  return (
    <div className={styles.Checkbox}>
      <label className={labelClass}>
        <input
          {...otherProps}
          checked={checked}
          type="checkbox"
          onChange={handleChange}
        />
        {children}
      </label>
    </div>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  onChange: PropTypes.func,
}
Checkbox.defaultProps = {
  checked: false,
  onChange: (checked, props) => {},
}

export default Checkbox
