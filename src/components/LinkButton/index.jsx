import PropTypes from 'prop-types'

import styles from './styles.module.scss'

function LinkButton(props) {
  const { children, ...otherProps } = props

  return (
    <button {...otherProps} className={styles.LinkButton}>
      {children}
    </button>
  )
}

LinkButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

export default LinkButton
