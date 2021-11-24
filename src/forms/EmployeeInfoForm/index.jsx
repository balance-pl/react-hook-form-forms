import { useEffect } from 'react'

import {
  createFormField,
  createFormState,
  FormField,
  FormStateProvider,
  useFormState,
  Validations,
} from '@balance-pl/form-state'

// API
import {
  getAddresses,
  getCompanies,
  getNames,
  getPatronymics,
  getSurnames,
} from '../../api/dadata'

// Components
import Button from '../../components/Button'
import FormRow from '../../components/FormRow'
import { Col, Row } from '../../components/Grid'
import H from '../../components/H'
import Input from '../../components/Input'
import InputDate from '../../components/InputDate'
import InputSuggest from '../../components/InputSuggest'
import SelectBox from '../../components/SelectBox'

const INITIAL_STATE = createFormState({
  address: createFormField(),
  birthday: createFormField({
    validations: [Validations.required],
  }),
  email: createFormField(),
  employerName: createFormField(),
  gender: createFormField({
    validations: [Validations.required],
  }),
  name: createFormField({
    validations: [Validations.required],
  }),
  patronymic: createFormField(),
  phone: createFormField(),
  surname: createFormField({
    validations: [Validations.required],
  }),
})

function EmployeeInfoForm() {
  const [state, actions] = useFormState(INITIAL_STATE)

  // Effects
  useEffect(() => {
    if (state.isValidated) {
      actions.validateState(state)
    }
  }, [state.gender.value])

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
      <form autoComplete="off" onSubmit={handleSubmit}>
        <H size="1">Информация о сотруднике</H>
        <FormField field={state.surname}>
          {(value, { error }) => (
            <FormRow>
              <InputSuggest
                error={error}
                getOptionsMethod={getSurnames}
                label="Фамилия *"
                name="surname"
                value={value}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </FormRow>
          )}
        </FormField>
        <FormField field={state.name}>
          {(value, { error }) => (
            <FormRow>
              <InputSuggest
                error={error}
                getOptionsMethod={getNames}
                label="Имя *"
                name="name"
                value={value}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </FormRow>
          )}
        </FormField>
        <FormField field={state.patronymic}>
          {(value, { error }) => (
            <FormRow>
              <InputSuggest
                error={error}
                getOptionsMethod={getPatronymics}
                label="Отчество"
                name="patronymic"
                value={value}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </FormRow>
          )}
        </FormField>
        <Row>
          <FormField field={state.gender}>
            {(value, { error }) => (
              <Col>
                <FormRow>
                  <SelectBox
                    error={error}
                    label="Пол *"
                    name="gender"
                    options={[
                      { id: 'male', name: 'мужской' },
                      { id: 'female', name: 'женский' },
                    ]}
                    value={value}
                    onChange={handleChange}
                  />
                </FormRow>
              </Col>
            )}
          </FormField>
          <FormField field={state.birthday}>
            {(value, { error }) => (
              <Col>
                <FormRow>
                  <InputDate
                    error={error}
                    label="Дата рождения *"
                    name="birthday"
                    value={value}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </FormRow>
              </Col>
            )}
          </FormField>
          <FormField field={state.phone}>
            {(value, { error }) => (
              <Col>
                <FormRow>
                  <Input
                    error={error}
                    label="Мобильный телефон *"
                    mask="+7 (999) 999-99-99"
                    name="phone"
                    value={value}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </FormRow>
              </Col>
            )}
          </FormField>
          <FormField field={state.email}>
            {(value, { error }) => (
              <Col>
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
              </Col>
            )}
          </FormField>
        </Row>
        <FormField field={state.address}>
          {(value, { error }) => (
            <FormRow>
              <InputSuggest
                error={error}
                getOptionsMethod={getAddresses}
                label="Адрес постоянной регистрации"
                name="address"
                value={value}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </FormRow>
          )}
        </FormField>
        <FormField field={state.employerName}>
          {(value, { error }) => (
            <FormRow>
              <InputSuggest
                error={error}
                getOptionsMethod={getCompanies}
                label="Наименование работодателя"
                name="employerName"
                value={value}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </FormRow>
          )}
        </FormField>
        <Row>
          <Col />
          <Col>
            <Button variant="primary">Сохранить</Button>
          </Col>
        </Row>
      </form>
    </FormStateProvider>
  )
}

export default EmployeeInfoForm
