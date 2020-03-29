import React                              from 'react';
import                                         './App.css';
import {GOOGLE_CLIENT_ID,FACEBOOK_APP_ID,
        GITHUB_CLIENT_ID}                 from './constants/apiConstants.js';
import GoogleLogin                        from 'react-google-login';

import FacebookLogin                      from 'react-facebook-login';
import GitHubLogin                        from 'react-github-login';


class App extends React.Component {

  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log(response);
    }

    const responseGithub = (response) => {
      console.log(response);
    }

    return (
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

      <FacebookLogin
        appId= {FACEBOOK_APP_ID}
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />


      <GoogleLogin
        clientId= {GOOGLE_CLIENT_ID}
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      <GitHubLogin clientId={GITHUB_CLIENT_ID}
        redirectUri=""
        onSuccess={responseGithub}
        onFailure={responseGithub}/>
      </div>
    );
  }
}

export default App;
