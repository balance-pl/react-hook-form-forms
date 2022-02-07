import * as yup from 'yup'

import {
  ERROR_MESSAGE_INVALID_EMAIL,
  REQUIRED_MESSAGE,
  VALIDATION_PHONE_ERROR,
} from '../../constants/errors'

// Helpers
import { formatNumber } from '../../helpers/formatters'
import { validatePhone } from '../../helpers/validators'

export const employerSchema = yup.object({
  surname: yup.string().required(REQUIRED_MESSAGE),
  name: yup.string().required(REQUIRED_MESSAGE),
  gender: yup.string().required(REQUIRED_MESSAGE),
  birthday: yup.string().required(REQUIRED_MESSAGE),
  email: yup.string().email(ERROR_MESSAGE_INVALID_EMAIL),
  phone: yup
    .string()
    .test('checkPhone', VALIDATION_PHONE_ERROR, (value, other) => {
      if (!value) return true
      return validatePhone(formatNumber(value))
    })
    .required(REQUIRED_MESSAGE),
})
