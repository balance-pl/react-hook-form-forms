import { useState } from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'
import cn from 'classnames'

import styles from './styles.module.scss'

function Input(props) {
  const {
    error,
    label,
    mask,
    value,
    onBlur,
    onChange,
    onFocus,
    ...otherProps
  } = props

  const [hasFocus, setHasFocus] = useState(false)

  // Handlers
  function handleBlur(...args) {
    setHasFocus(false)
    if (typeof onBlur === 'function') {
      onBlur(...args)
    }
  }
  function handleChange(e) {
    onChange(e.target.value, props)
  }
  function handleFocus(...args) {
    setHasFocus(true)
    if (typeof onFocus === 'function') {
      onFocus(...args)
    }
  }

  const inputClass = cn(styles.Input__Input, {
    [styles.Input__Input_error]: !!error,
  })

  const labelTextClass = cn(styles.Input__LabelText, {
    [styles.Input__LabelText_top]: !!value || hasFocus,
  })

  const inputProps = {
    ...otherProps,
    className: inputClass,
    value: value || '',
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus,
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Input__Label}>
        <span className={labelTextClass}>{label}</span>
        {!mask && <input {...inputProps} />}
        {!!mask && <InputMask {...inputProps} mask={mask} />}
      </label>
      {!!error && <div className={styles.Input__Error}>{error}</div>}
    </div>
  )
}

Input.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  mask: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
}
Input.defaultProps = {
  error: null,
  mask: null,
  value: null,
  onBlur: (props) => {},
  onChange: (name, props, data) => {},
  onFocus: (props) => {},
}

export default Input
