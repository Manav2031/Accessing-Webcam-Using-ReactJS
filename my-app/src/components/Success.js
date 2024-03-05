import React from 'react';
import '../styles/success.css';
import Camera from './Camera';
import FileUpload from './FileUpload';
import { useAuth0 } from '@auth0/auth0-react';

const Success = () => {
  const {logout} = useAuth0();

  return (
    <div className="success">
      <div className="containers">
      <div className="leftcontainer">
        <h1 className="lch1"> Asset </h1>
        <Camera />
        <br /> <br />
      </div>
      <div className="rightcontainer">
        <h1 className="rch1"> Invoice </h1>
        <br /> <br />
        <FileUpload />
        <br /> <br />
      </div>
      </div>
    <button onClick={() => logout()}> Logout </button>
    <br /> <br />
    <br /> <br />
  </div>
  )
}


export default Success
