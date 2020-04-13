import React from 'react';
import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

const Login = (props) => {


    const responseFacebook = (response) => {
        console.log(response);
      };
  
      const responseGoogle = (response) => {
        console.log(response);
      }

      return (
          
        <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

      <FacebookLogin
        appId="1293576440846584" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />


      <GoogleLogin
        clientId="148604530454-18oplo8i6d28jvtln3366gisua5oer9h.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>);
      
}

export default Login;