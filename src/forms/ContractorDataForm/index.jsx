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
  getNames,
  getPatronymics,
  getSurnames,
} from '../../api/dadata'

// Components
import Button from '../../components/Button'
import FormRow from '../../components/FormRow'
import { Col, Row } from '../../components/Grid'
import H from '../../components/H'
import InputSuggest from '../../components/InputSuggest'
import SelectBox from '../../components/SelectBox'

const INITIAL_STATE = createFormState({
  address: createFormField({
    shouldRender: (state) => state.cityzenship.value === 2,
    shouldValidate: (state) => state.cityzenship.value === 2,
    validations: [Validations.required],
  }),
  cityzenship: createFormField({
    validations: [Validations.required],
  }),
  name: createFormField({
    validations: [Validations.required],
  }),
  patronymic: createFormField(),
  surname: createFormField({
    validations: [Validations.required],
  }),
})

function ContractorDataForm() {
  const [state, actions] = useFormState(INITIAL_STATE)

  // Effects
  useEffect(() => {
    if (state.isValidated) {
      actions.validateState(state)
    }
  }, [state.cityzenship.value])

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
        <Row>
          <FormField field={state.surname}>
            {(value, { error }) => (
              <Col>
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
              </Col>
            )}
          </FormField>
          <FormField field={state.name}>
            {(value, { error }) => (
              <Col>
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
              </Col>
            )}
          </FormField>
          <FormField field={state.patronymic}>
            {(value, { error }) => (
              <Col>
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
              </Col>
            )}
          </FormField>
          <FormField field={state.cityzenship}>
            {(value, { error }) => (
              <Col>
                <FormRow>
                  <SelectBox
                    error={error}
                    label="Гражданство *"
                    name="cityzenship"
                    options={[
                      { id: 1, name: 'Гражданство РФ' },
                      { id: 2, name: 'Иностранный гражданин' },
                    ]}
                    value={value}
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
                label="Адрес регистрации *"
                name="address"
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
            <Button variant="primary">Отправить на анализ</Button>
          </Col>
        </Row>
      </form>
    </FormStateProvider>
  )
}

export default ContractorDataForm
