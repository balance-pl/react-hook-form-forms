import {
  createFormField,
  createFormState,
  FormField,
  FormStateProvider,
  useFormState,
  Validations,
} from '@balance-pl/form-state'

// Components
import Button from '../../components/Button'
import FormRow from '../../components/FormRow'
import H from '../../components/H'
import Input from '../../components/Input'

import styles from './styles.module.scss'

const INITIAL_STATE = createFormState({
  email: createFormField({
    validations: [Validations.required, Validations.email],
  }),
  password: createFormField({
    validations: [Validations.required],
  }),
})

function LoginForm() {
  const [state, actions] = useFormState(INITIAL_STATE)

  // Handlers
  function handleBlur() {
    if (state.isValidated) {
      actions.validateState(state)
    }
  }
  function handleChange(value, { name: field }) {
    actions.changeField(field, value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    const validatedState = actions.validateState(state)
    if (validatedState.isValid()) {
      alert('Sending the form...')
    }
  }

  return (
    <FormStateProvider state={state}>
      <form className={styles.LoginForm} onSubmit={handleSubmit}>
        <div className={styles.LoginForm__Fields}>
          <H size="1">Вход в систему</H>
          <FormField field={state.email}>
            {(value, { error }) => (
              <FormRow>
                <Input
                  error={error}
                  label="Email"
                  name="email"
                  value={value}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </FormRow>
            )}
          </FormField>
          <FormField field={state.password}>
            {(value, { error }) => (
              <FormRow>
                <Input
                  error={error}
                  label="Пароль"
                  name="password"
                  type="password"
                  value={value}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </FormRow>
            )}
          </FormField>
          <Button variant="primary">Войти</Button>
        </div>
      </form>
    </FormStateProvider>
  )
}

export default LoginForm
