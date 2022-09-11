import React from 'react'
import { useHistory } from 'react-router'

function Content({loggedInStatus}) {
  const history = useHistory()

  function logged_in() {
    if (loggedInStatus === "NOT_LOGGED_IN") {
      history.push("/home")
    }
  }

  return (
    <button onClick={logged_in} className='btn btn-primary d-flex justify-content-center'>Content</button>
  )
}

export default Content