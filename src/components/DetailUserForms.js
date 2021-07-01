import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class DetailUserForms extends Component {
  continue = (e) => {
    e.preventDefault();
    this
      .props
      .nextStep();
  }

  back = (e) => {
    e.preventDefault();
    this
      .props
      .prevStep();
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
            label="City"
            onChange={handleChange('city')}
            defaultValue={values.city}/>
          <br/>
          <TextField
            style={{
            width: '500px',
            marginTop: '20px'
          }}
            id="standard-basic"
            label="Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}/>
          <br/>
          <TextField
            style={{
            width: '500px',
            marginTop: '20px'
          }}
            id="standard-basic"
            label="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}/>
          <br/>
          <Button
            style={{
            margin: '15px'
          }}
            variant="contained"
            color="primary"
            onClick={this.back}>
            Kembali
          </Button>
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

export default DetailUserForms
