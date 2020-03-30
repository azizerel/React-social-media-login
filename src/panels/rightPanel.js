import React                              from 'react';
import TextField                          from '@material-ui/core/TextField';
import Checkbox                           from '@material-ui/core/Checkbox';
import FormControlLabel                   from '@material-ui/core/FormControlLabel';
import Button                             from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {GOOGLE_CLIENT_ID,FACEBOOK_APP_ID,
        GITHUB_CLIENT_ID}                 from '../constants/apiConstants.js';
import GoogleLogin                        from 'react-google-login';

import FacebookLogin                      from 'react-facebook-login';
import GitHubLogin                        from 'react-github-login';

import FacebookIcon from '@material-ui/icons/Facebook';

import { makeStyles } from '@material-ui/core/styles';
class RightPanel extends React.Component {




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
      <div className="rightPanel">

      <div className="div-center" style={{position: 'relative',display:'grid',width: '80%'}}>

           <TextField label="Name" className="register-input"/>

           <TextField label="Surname" className="register-input" />

           <TextField label="Password" type="password" className="register-input"/>

           <FormControlLabel className="register-checkbox" control={<Checkbox name="termCheck" color="primary"/>} label="I have read and accept Terms of Use and Privacy Policy"/>

           <Button variant="contained" className="register-button" endIcon={<ArrowForwardIcon />} color="primary" >
            Register
          </Button>

          <FacebookLogin
            appId= {FACEBOOK_APP_ID}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="facebook-button div-center"
            />
          </div>
      </div>
    );
  }
}

export default RightPanel;
