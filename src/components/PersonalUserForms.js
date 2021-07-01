import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class PersonalUserForms extends Component {
  continue = (e) => {
    e.preventDefault();
    this
      .props
      .nextStep();
  }

  render() {
    const {values, handleChange} = this.props

    return (
      <div style={{
        marginTop: '20px'
      }}>
        <form noValidate autoComplete="off">
          <TextField
            style={{
            width: '500px',
            marginTop: '20px'
          }}
            id="standard-basic"
            label="FirstName"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}/>
          <br/>
          <TextField
            style={{
            width: '500px',
            marginTop: '20px'
          }}
            id="standard-basic"
            label="LastName"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}/>
          <br/>
          <TextField
            style={{
            width: '500px',
            marginTop: '20px'
          }}
            id="standard-basic"
            label="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}/>
          <br/>
          <Button
            style={{
            margin: '15px'
          }}
            variant="contained"
            color="primary"
            onClick={this.continue}>
            Lanjut
          </Button>
        </form>
      </div>
    )
  }
}

export default PersonalUserForms
