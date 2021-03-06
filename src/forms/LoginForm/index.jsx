import React from 'react'
import { Controller, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Constants
import {
  ERROR_MESSAGE_INVALID_EMAIL,
  REQUIRED_MESSAGE,
} from '../../constants/errors'

// Components
import Button from '../../components/Button'
import FormRow from '../../components/FormRow'
import H from '../../components/H'
import Input from '../../components/Input'

import styles from './styles.module.scss'

const loginSchema = yup.object({
  email: yup
    .string()
    .email(ERROR_MESSAGE_INVALID_EMAIL)
    .required(REQUIRED_MESSAGE),
  password: yup.string().required(REQUIRED_MESSAGE),
})

function LoginForm() {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <form
      autoComplete="off"
      className={styles.LoginForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.LoginForm__Fields}>
        <H size="1">Вход в систему</H>
        <FormRow>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <Input
                  label="Email"
                  {...field}
                  error={fieldState.error?.message}
                />
              )
            }}
          />
        </FormRow>
        <FormRow>
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                label="Пароль"
                type="password"
                {...field}
                error={fieldState.error?.message}
              />
            )}
          />
        </FormRow>
        <Button variant="primary">Войти</Button>
      </div>
    </form>
  )
}

export default LoginForm
