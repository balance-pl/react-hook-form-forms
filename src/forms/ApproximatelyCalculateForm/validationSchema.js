import * as Yup from 'yup'

import {
  REQUIRED_MESSAGE,
  VALIDATION_PHONE_ERROR,
} from '../../constants/errors'

import { validatePhone } from '../../helpers/validators'
import { formatNumber } from '../../helpers/formatters'

export const CalculateSchema = Yup.object({
  fio: Yup.string()
    .test('validateValueBySurname', 'Введите фамилию', (value) => {
      if (!value) return true
      const surname = value.split(' ')?.filter((val) => val.trim())[0]
      return !!surname
    })
    .test('validateValueByName', 'Введите имя', (value) => {
      if (!value) return true
      const name = value.split(' ').filter((val) => val.trim())[1]
      return !!name
    })
    .required(REQUIRED_MESSAGE),
  phone: Yup.string()
    .test('checkPhone', VALIDATION_PHONE_ERROR, (value) => {
      if (!value) return true
      return validatePhone(formatNumber(value))
    })
    .required(REQUIRED_MESSAGE),
  serialNumber: Yup.string().test(
    'checkSerialNumber',
    REQUIRED_MESSAGE,
    (value, schema) => {
      const withPassportData = schema.parent.withPassportData

      if (withPassportData) {
        return !!value
      }

      return true
    }
  ),
  monthlySalary: Yup.string().test(
    'checkMonthlySalary',
    REQUIRED_MESSAGE,
    (value, schema) => {
      const withPassportData = schema.parent.withPassportData

      if (withPassportData) {
        return !!value
      }

      return true
    }
  ),
})
