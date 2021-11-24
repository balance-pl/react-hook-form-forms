import PropTypes from 'prop-types'

// Components
import Input from '../Input'

// Icons
import IconCalendar from '../../icons/IconCalendar'

import styles from './styles.module.scss'

function InputDate(props) {
  return (
    <div className={styles.InputDate}>
      <Input {...props} mask="99.99.9999" />
      <div className={styles.InputDate__Icon}>
        <IconCalendar />
      </div>
    </div>
  )
}

InputDate.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
}
InputDate.defaultProps = {
  error: null,
  mask: null,
  value: null,
  onBlur: (props) => {},
  onChange: (name, props, data) => {},
  onFocus: (props) => {},
}

export default InputDate
