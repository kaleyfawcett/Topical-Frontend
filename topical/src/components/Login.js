/* globals localStorage */

import React from 'react'
// import axios from 'axios'

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      username: localStorage.getItem('login_username') || '',
      password: '',
      token: localStorage.getItem('login_auth_token'),
      error: null
    }  

export default Login
