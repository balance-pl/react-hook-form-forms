import PropTypes from 'prop-types'

import styles from './styles.module.scss'

function Col(props) {
  const { children } = props

  return <div className={styles.Col}>{children}</div>
}

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}
Col.defaultProps = {
  children: null,
}

export default Col
