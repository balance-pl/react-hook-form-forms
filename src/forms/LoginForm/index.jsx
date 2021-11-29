import React from 'react'
import { useForm, Controller } from 'react-hook-form'

// Components
import Button from '../../components/Button'
import FormRow from '../../components/FormRow'
import H from '../../components/H'
import Input from '../../components/Input'

import styles from './styles.module.scss'

// const customValidation = (value) => {
//   console.log('value -> ', value)
//
//   if (!value) {
//     return 'Обязательное поле'
//   }
//   return null
// }

function LoginForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: (values) => {
      return {
        // TODO - можно придумать резолвер...
        errors: {
          email: '123',
        },
        values: {
          ...values,
        },
      }
    },
  })

  const onSubmit = (data) => {
    console.log('Отправлено -> ', data)
  }

  return (
    <form
      autoComplete="on"
      className={styles.LoginForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.LoginForm__Fields}>
        <H size="1">Вход в систему</H>
        <FormRow>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Input label="Email" {...field} error={fieldState.error} />
            )}
          />
        </FormRow>
        <FormRow>
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <Input label="Пароль" type="password" {...field} />
            )}
          />
        </FormRow>
        <Button variant="primary">Войти</Button>
      </div>
    </form>
  )
}

export default LoginForm
