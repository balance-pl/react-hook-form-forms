import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './styles.module.scss'

function Button(props) {
  const { children, variant, ...otherProps } = props

  const className = cn(styles.Button, styles[`Button_variant_${variant}`])

  return (
    <button {...otherProps} className={className}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  variant: PropTypes.oneOf(['default', 'primary']),
}
Button.defaultProps = {
  variant: 'default',
}

export default Button
