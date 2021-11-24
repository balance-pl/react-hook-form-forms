import PropTypes from 'prop-types'

import styles from './styles.module.scss'

function FormRow(props) {
  const { children } = props

  return <div className={styles.FormRow}>{children}</div>
}

FormRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}
FormRow.defaultProps = {
  children: null,
}

export default FormRow
