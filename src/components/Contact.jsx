import * as React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { StylesContext } from '@mui/styles';

import emailjs from '@emailjs/browser';


// import NavButton from './design/Button';

// import { serverQuery } from '../utilities/helpers';

import { styled } from '@mui/material/styles';

const Icon = styled(ArrowForwardIcon)(() => ({
  // backgroundColor: 'grey',
  position: 'relative',
  top: '7px',
  backgroundSize: '10px',
}))

const NavButton = styled(Button)(() => ({
	minWidth: '0px',
	padding: '0px',
  margin: '0px 0px',
  border: 'none',
  background: 'none',
  position: 'relative',
  display: 'flex',
  fontWeight: 400,
  fontSize: '14px',
  gap: '0.5rem',
  alignItems: 'center',

	'p': {
		margin: 0,
		position: 'relative',
		color: '#32292F',
	},

	'&::after': {
		position: 'absolute',
		content: '""',
		width: 0,
		left: 0,
		bottom: '-7px',
		background: '#6E7DAB',
		height: '2px',
		transition: '0.3s ease-out',
	},

	'&:hover': {
		background: 'none',
	},

	'&:hover p': {
		color: '#6E7DAB',
		transition: '0.5s ease-in-out',
	},

	'&:hover::after': {
		width: '100%',
	},
}))

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#6E7DAB',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#6E7DAB',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6E7DAB',
    },
  },
});

const validateEmail = (email) => {
  // Regular expression to match email pattern
  const emailRegex = /^[^\s@]+@[^\s@]+$/;
  return emailRegex.test(email);
}

const displayAlert = () => {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      The message was sent successfully.
    </Alert>
  )
}

function Contact ({ setActiveLink }) {
  const navigate = useNavigate();

  const [firstError, setFirstError] = React.useState(false);
  const [lastError, setLastError] = React.useState(false);
  const [emailError, setEmailError] = React.useState('');
  const [messageError, setMessageError] = React.useState(false);

  const [formState, setFormState] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const user = {
      email: data.get('email', '').toString().trim(),
      firstName: data.get('firstName', '').toString(),
      lastName: data.get('lastName', '').toString(),
			message: data.get('message', '').toString(),
    };

    // const value = Object.fromEntries(data.entries());

    let error = false;

    // Perform client-side validation
    if (!validateEmail(user.email)) {
      error = true;
      setEmailError('Invalid Email');
    }
    if (user.firstName.length === 0) {
      error = true;
      setFirstError(true);
    }
    if (user.lastName.length === 0) {
      error = true;
      setLastError(true);
    }
    if (user.message.length === 0) {
      error = true;
      setMessageError(true);
    }
    if (error) return;

    emailjs.sendForm('service_pxs4h07', 'template_qs2x30y', event.currentTarget, { publicKey: 'fbuDiw0NsG1Tb8d6k' })
    .then((response) => {
            console.log('success!', response.status, response.text);
            // display success notification
            setFormState(true);
            // displayAlert();
          },
          (err) => {
            console.log('failed...', err)
            // display error notification
            setFormState(false);
          });

    // resent the whole form
    event.currentTarget.reset();
  };

  // listens to a click anywhere on the page and removes the success alert
  // TODO: change to respond only to a click within the form !
  React.useEffect(() => {
    const handleClick = () => {
      setFormState(false);
    }
    document.addEventListener('mousedown', handleClick);
  }, []);

  const handleClick = () => {

  }

	return (
		<Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <Typography component="h1"
        sx={{
          fontSize: '28px',
          marginBottom: '0px',
          fontWeight: '300',
        }}
      >
        Questions? Suggestions?
      </Typography>
      <Typography component="h2"
        sx={{
          fontSize: '28px',
          marginBottom: '-40px',
          fontWeight: '300',
        }}
      >
        Send a message
      </Typography>

      <Box component="form" name='register-form' noValidate onSubmit={handleSubmit} sx={{ mt: 3, padding: '40px', backgroundColor: '' }}>

        <Grid container spacing={2} sx={{ background: '' }}>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              aria-label='first name input field'
              autoFocus
              required
              fullWidth
              size='small'
              id="firstName"
              name="firstName"
              label="First Name"
              autoComplete="given-name"
              error={firstError}
              helperText={firstError ? 'First name can\'t be empty' : null}
              onChange={() => setFirstError(false)}
              onClick={handleClick}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              aria-label='last name input field'
              required
              fullWidth
              size='small'
              id="lastName"
              name="lastName"
              label="Last Name"
              autoComplete="family-name"
              error={lastError}
              helperText={lastError ? 'Last name can\'t be empty' : null}
              onChange={() => setLastError(false)}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              aria-label='email input field'
              required
              fullWidth
              size='small'
              id="email"
              name="email"
              label="Email Address"
              autoComplete="email"
              error={emailError !== ''}
              helperText={emailError}
              onChange={() => setEmailError('')}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              aria-label='message input field'
              required
              fullWidth
              id="message"
              name="message"
              label="Message"
              type="message"
              autoComplete="new-message"
              error={messageError}
              helperText={messageError ? 'Message field can\'t be empty' : null}
              onChange={() => setMessageError(false)}
              multiline={true}
              inputProps={{ style: { height: '100px' } }}
              sx={{ marginBottom: '10px' }}
            />
          </Grid>
        </Grid>

        <Box
          display={'flex'}
          justifyContent={'right'}
          sx={{ backgroundColor: '', width: '100%' }}
        >
          <NavButton
            type='submit'
            disableRipple={true}
            // onClick={() => handleSubmit()}
            sx={{ backgroundColor: '' }}
          >
            <p>Submit <Icon viewBox='0 0 18 24'/></p>
          </NavButton>
          {/* <NavButton type='submit' text={'Submit'} setActiveLink={setActiveLink} arrow={true} customStyle={{ fontWeight: '300', textTransform: 'capitalize', fontSize: '16px' }}/> */}
        </Box>

        <Box sx={{ marginTop: '30px' }}>
          { formState ? displayAlert() : null }
        </Box>

      </Box>
    </Box>
	)
}

export default Contact;