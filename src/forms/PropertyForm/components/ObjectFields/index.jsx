import React from 'react'
import PropTypes from 'prop-types'

import FormRow from '../../../../components/FormRow'
import Row from '../../../../components/Grid/Row'
import Col from '../../../../components/Grid/Col'
import { Controller } from 'react-hook-form'
import SelectBox from '../../../../components/SelectBox'
import Button from '../../../../components/Button'

import { sellerTypes, creditFunds, purchaseOfAgreement } from './fakeData'

function ObjectFields({ control, submitObjectData }) {
  return (
    <>
      <FormRow>
        <Row>
          <Col>
            <Controller
              control={control}
              name="object.sellerType"
              render={({ field, fieldState }) => (
                <SelectBox
                  {...field}
                  label="Тип продавца *"
                  options={sellerTypes}
                  error={fieldState.error?.message}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name="object.purchaseAgreement"
              render={({ field, fieldState }) => (
                <SelectBox
                  {...field}
                  label="Договор приобретения *"
                  options={purchaseOfAgreement}
                  error={fieldState.error?.message}
                />
              )}
            />
          </Col>
        </Row>
      </FormRow>
      <FormRow>
        <Row>
          <Col>
            <Controller
              control={control}
              name="object.gettingOfCreditFunds"
              render={({ field, fieldState }) => (
                <SelectBox
                  {...field}
                  label="Получение кредитных средств *"
                  options={creditFunds}
                  error={fieldState.error?.message}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name="object.creditingOfCreditFunds"
              render={({ field }) => (
                <SelectBox
                  {...field}
                  label="Зачисление кредитных средств"
                  options={creditFunds}
                />
              )}
            />
          </Col>
        </Row>
      </FormRow>
      <FormRow>
        <Row>
          <Col />
          <Col>
            <Button variant="default" onClick={submitObjectData}>
              Сохранить
            </Button>
          </Col>
        </Row>
      </FormRow>
    </>
  )
}

ObjectFields.propTypes = {
  control: PropTypes.object,
  submitObjectData: PropTypes.func,
}

export default ObjectFields
