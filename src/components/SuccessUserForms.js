import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

export class SuccessUserForms extends Component {
  reset = (e) => {
    e.preventDefault();
    this
      .props
      .resetStep();
  }

  render() {
    return (
      <div>
        <h1>Terima kasih telah meluangkan waktu anda untuk mengisi formuli ini</h1>
        <p>Anda akan menerima informasi lebih lanjut melalui email anda</p>
        <Button
          style={{
          margin: '15px'
        }}
          variant="contained"
          color="primary"
          onClick={this.reset}>
          Ulangi
        </Button>
      </div>
    )
  }
}

export default SuccessUserForms
