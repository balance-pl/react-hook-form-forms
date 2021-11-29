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

function EmployeeInfoForm() {
  return (
    <form autoComplete="off">
      <H size="1">Информация о сотруднике</H>
      <FormRow>
        <InputSuggest
          getOptionsMethod={getSurnames}
          label="Фамилия *"
          name="surname"
        />
      </FormRow>
      <FormRow>
        <InputSuggest getOptionsMethod={getNames} label="Имя *" name="name" />
      </FormRow>
      <FormRow>
        <InputSuggest
          getOptionsMethod={getPatronymics}
          label="Отчество"
          name="patronymic"
        />
      </FormRow>
      <Row>
        <Col>
          <FormRow>
            <SelectBox
              label="Пол *"
              name="gender"
              options={[
                { id: 'male', name: 'мужской' },
                { id: 'female', name: 'женский' },
              ]}
            />
          </FormRow>
        </Col>
        <Col>
          <FormRow>
            <InputDate label="Дата рождения *" name="birthday" />
          </FormRow>
        </Col>
        <Col>
          <FormRow>
            <Input
              label="Мобильный телефон *"
              mask="+7 (999) 999-99-99"
              name="phone"
            />
          </FormRow>
        </Col>
        <Col>
          <FormRow>
            <Input label="Email" name="email" />
          </FormRow>
        </Col>
      </Row>
      <FormRow>
        <InputSuggest
          getOptionsMethod={getAddresses}
          label="Адрес постоянной регистрации"
          name="address"
        />
      </FormRow>
      <FormRow>
        <InputSuggest
          getOptionsMethod={getCompanies}
          label="Наименование работодателя"
          name="employerName"
        />
      </FormRow>
      <Row>
        <Col />
        <Col>
          <Button variant="primary">Сохранить</Button>
        </Col>
      </Row>
    </form>
  )
}

export default EmployeeInfoForm
