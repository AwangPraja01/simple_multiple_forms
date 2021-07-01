import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

export class ConfirmUserForms extends Component {
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
    const {
      firstName,
      lastName,
      email,
      city,
      occupation,
      bio
    } = this.props.values

    return (
      <div>
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem button>
            <ListItemText style={{textAlign: 'center'}} primary='FirstName' secondary={firstName}/>
          </ListItem>
          <ListItem button>
            <ListItemText style={{textAlign: 'center'}} primary='LastName' secondary={lastName}/>
          </ListItem>
          <ListItem button>
            <ListItemText style={{textAlign: 'center'}} primary='Email' secondary={email}/>
          </ListItem>
          <ListItem button>
            <ListItemText style={{textAlign: 'center'}} primary='City' secondary={city}/>
          </ListItem>
          <ListItem button>
            <ListItemText style={{textAlign: 'center'}} primary='Occupation' secondary={occupation}/>
          </ListItem>
          <ListItem button>
            <ListItemText style={{textAlign: 'center'}} primary='Bio' secondary={bio}/>
          </ListItem>
        </List>
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
          Konfirmasi
        </Button>

      </div>
    )
  }
}

export default ConfirmUserForms
