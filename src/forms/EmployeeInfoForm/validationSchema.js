import * as yup from 'yup'

import {
  ERROR_MESSAGE_INVALID_EMAIL,
  REQUIRED_MESSAGE,
  VALIDATION_PHONE_ERROR,
} from '../../constants/errors'

// Helpers
import { formatNumber } from '../../helpers/formatters'
import { validatePhone } from '../../helpers/validators'
import { addValidatorToYupString } from '../../helpers/yupAddValidator'

const yupWithValidators = addValidatorToYupString(
  yup,
  { nameMethod: 'checkPhoneNumber', prefixForTest: 'phoneNumber' },
  (value) => {
    if (value) {
      return validatePhone(formatNumber(value))
    }

    return true
  }
)

export const employerSchema = yupWithValidators.object({
  surname: yupWithValidators.string().required(REQUIRED_MESSAGE),
  name: yupWithValidators.string().required(REQUIRED_MESSAGE),
  gender: yupWithValidators.string().required(REQUIRED_MESSAGE),
  birthday: yupWithValidators.string().required(REQUIRED_MESSAGE),
  email: yupWithValidators.string().email(ERROR_MESSAGE_INVALID_EMAIL),
  phone: yupWithValidators
    .string()
    .checkPhoneNumber(VALIDATION_PHONE_ERROR)
    .required(REQUIRED_MESSAGE),
})
