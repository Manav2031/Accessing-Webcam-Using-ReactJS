import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const Success = () => {
  const {logout} = useAuth0();

  return (
    <>
    <div>Success</div>
    <br /> <br />
    <button onClick={() => logout()}> Logout </button>
    </>
  )
}

export default Success