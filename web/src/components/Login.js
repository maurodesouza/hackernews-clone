import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { AUTH_TOKEN } from '../constants'

const Login = () => {
  const history = useHistory()

  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const _confirm = async data => {
    const { token } = login ? data.login : data.signup
    _saveUserData(token)
    history.push(`/`)
  }

  const _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }

  const SIGNUP_MUTATION = gql`
    mutation SignupMutation($email: String!, $password: String!, $name: String!) {
      signup(email: $email, password: $password, name: $name) {
        token
      }
    }
  `

  const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
      }
    }
  `

  return (
    <div>
      <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
      <div className="flex flex-column">
        {!login && (
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder="Your name"
            className="mb1"
          />
        )}
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          placeholder="Your email address"
          className="mb1"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
  
      <div className="flex mt3">
        <Mutation
          mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
          variables={{ email, password, name }}
          onCompleted={data => _confirm(data)}
        >
          {mutation => (
            <div className="pointer mr2 button" onClick={mutation}>
              {login ? 'login' : 'create account'}
            </div>
          )}
        </Mutation>
  
        <div
          className="pointer button"
          onClick={() => setLogin(!login)}
        >
          {login
            ? 'need to create an account?'
            : 'already have an account?'}
        </div>
      </div>
    </div>
  )
}

export default Login
