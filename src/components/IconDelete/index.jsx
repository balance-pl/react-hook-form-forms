import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './styles.module.scss'

function IconDelete({ className, ...otherProps }) {
  return (
    <svg
      {...otherProps}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(styles.IconDelete, className)}
    >
      <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
      <line x1="18" y1="9" x2="12" y2="15"></line>
      <line x1="12" y1="9" x2="18" y2="15"></line>
    </svg>
  )
}

IconDelete.defaultProps = {
  className: '',
}

IconDelete.propTypes = {
  className: PropTypes.string,
}

export default IconDelete
