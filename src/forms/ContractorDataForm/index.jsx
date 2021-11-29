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

function ContractorDataForm() {
  return (
    <form autoComplete="off">
      <H size="1">Данные исполнителя</H>
      <Row>
        <Col>
          <FormRow>
            <InputSuggest
              getOptionsMethod={getSurnames}
              label="Фамилия *"
              name="surname"
            />
          </FormRow>
        </Col>
        <Col>
          <FormRow>
            <InputSuggest
              getOptionsMethod={getNames}
              label="Имя *"
              name="name"
            />
          </FormRow>
        </Col>
        <Col>
          <FormRow>
            <InputSuggest
              getOptionsMethod={getPatronymics}
              label="Отчество"
              name="patronymic"
            />
          </FormRow>
        </Col>
        <Col>
          <FormRow>
            <SelectBox
              label="Гражданство *"
              name="cityzenship"
              options={[
                { id: 1, name: 'Гражданство РФ' },
                { id: 2, name: 'Иностранный гражданин' },
              ]}
            />
          </FormRow>
        </Col>
      </Row>
      <FormRow>
        <InputSuggest
          getOptionsMethod={getAddresses}
          label="Адрес регистрации *"
          name="address"
        />
      </FormRow>
      <Row>
        <Col />
        <Col>
          <Button variant="primary">Отправить на анализ</Button>
        </Col>
      </Row>
    </form>
  )
}

export default ContractorDataForm
