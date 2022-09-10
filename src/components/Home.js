import React, { Component } from 'react'
import Registration from './auth/Registration'

export default class Home extends Component {

  render() {
    return (
      <div className='d-flex flex-column align-items-center'>
        <h1>Home</h1>
        <Registration />
      </div>
    )
  }
}
