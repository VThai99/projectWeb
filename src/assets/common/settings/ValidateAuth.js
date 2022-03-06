import React from 'react'
import { useHistory } from 'react-router-dom'
function ValidateAuth() {
  let history = useHistory()
  const auth = localStorage.getItem('access_token')
  if (!auth) {
    history.push('/login')
  }
  return <div></div>
}

export default ValidateAuth
