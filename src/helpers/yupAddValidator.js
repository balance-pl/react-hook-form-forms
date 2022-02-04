import * as yup from 'yup'

export const addValidatorToYupString = (
  yupInstance,
  { nameMethod, prefixForTest = '' } = {},
  validatorCallback = (_) => _
) => {
  yupInstance.addMethod(yup.string, nameMethod, function (errorMessage) {
    return this.test(prefixForTest, errorMessage, function (value) {
      const { path, createError } = this

      return validatorCallback(value)
        ? true
        : createError({ path, message: errorMessage })
    })
  })

  return yupInstance
}
