import { PHONE_REGEXP } from '../constants/regexps'

export const validatePhone = (value) => PHONE_REGEXP.test(value)
