import PropTypes from 'prop-types'

import styles from './styles.module.scss'

function Row(props) {
  const { children } = props

  return <div className={styles.Row}>{children}</div>
}

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}
Row.defaultProps = {
  children: null,
}

export default Row
