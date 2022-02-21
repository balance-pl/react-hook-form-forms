import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import Input from '../../components/Input'
import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import Row from '../../components/Grid/Row'
import { Col } from '../../components/Grid'
import FormRow from '../../components/FormRow'

const ApproximatelyCalculateForm = () => {
  useForm({
    defaultValues: {
      fio: undefined,
      phone: undefined,
      withPassportData: false,
      serialNumber: undefined,
      monthlySalary: undefined,
    },
  })

  return (
    <div>
      <h1>Примерный расчёт</h1>

      <form>
        <FormRow>
          <Row>
            <Col>
              <Controller name="fio" render={() => <Input label="ФИО*" />} />
            </Col>

            <Col>
              <Input label="Телефон*" />
            </Col>
          </Row>
        </FormRow>

        <FormRow>
          <Checkbox>По паспорту</Checkbox>
        </FormRow>

        <FormRow>
          <Input label="Серия и номер паспорта*" />
        </FormRow>

        <FormRow>
          <Input label="Ежемесячный доход*" />
        </FormRow>

        <Row>
          <Col />
          <Col>
            <Button variant="primary">Отправить</Button>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default ApproximatelyCalculateForm
