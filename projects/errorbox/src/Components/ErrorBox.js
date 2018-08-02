import React from 'react'

const ErrorBox = (props) => {
  return <i className="fas fa-exclamation-triangle alert alert-danger text-center"><span className="pl-2">{props.children }</span></i>
}
export default ErrorBox