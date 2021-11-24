import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './styles.module.scss'

function H(props) {
  const { children, size, ...otherProps } = props

  const className = cn(styles.H, styles[`H_size_${size}`])

  if (size === 1 || size === '1') {
    return (
      <h1 {...otherProps} className={className}>
        {children}
      </h1>
    )
  }
  if (size === 2 || size === '2') {
    return (
      <h2 {...otherProps} className={className}>
        {children}
      </h2>
    )
  }
  if (size === 3 || size === '3') {
    return (
      <h3 {...otherProps} className={className}>
        {children}
      </h3>
    )
  }

  return null
}

H.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  size: PropTypes.oneOf([1, '1', 2, '2', 3, '3']).isRequired,
}

export default H
