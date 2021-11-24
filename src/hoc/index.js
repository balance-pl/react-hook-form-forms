/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'

export const withValue =
  (Component, valuePropName = 'value', defaultValue = null) =>
  (props) => {
    const [valuePropValue, change] = useState(
      props[valuePropName] || defaultValue
    )

    const handleChange = (value) => change(value)

    useEffect(() => {
      handleChange(props[valuePropName])
    }, [props[valuePropName]])

    const componentProps = {
      ...props,
      [valuePropName]: valuePropValue,
      onChange: handleChange,
    }

    return <Component {...componentProps} />
  }
