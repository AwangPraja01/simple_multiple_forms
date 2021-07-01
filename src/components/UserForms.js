import React, {Component} from 'react';
import PersonalUserForms from './PersonalUserForms';
import DetailUserForms from './DetailUserForms';
import ConfirmUserForms from './ConfirmUserForms';
import SuccessUserForms from './SuccessUserForms';

export class UserForms extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    occupation: '',
    bio: ''
  }

  nextStep = () => {
    const {step} = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const {step} = this.state
    this.setState({
      step: step - 1
    })
  }

  resetStep = () => {
    this.setState({
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      occupation: '',
      bio: ''
    })
  }

  handleChange = (input) => (e) => {
    this.setState({[input]: e.target.value})
  }

  render() {
    const {step} = this.state
    const {
      firstName,
      lastName,
      email,
      city,
      occupation,
      bio
    } = this.state

    const values = {
      firstName,
      lastName,
      email,
      city,
      occupation,
      bio
    }
    switch (step) {
      case 1:
        return <PersonalUserForms
          values={values}
          nextStep={this.nextStep}
          handleChange={this.handleChange}/>

      case 2:
        return <DetailUserForms
          values={values}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}/>

      case 3:
        return <ConfirmUserForms
          values={values}
          nextStep={this.nextStep}
          prevStep={this.prevStep}/>

      case 4:
        return <SuccessUserForms values={values} resetStep={this.resetStep}/>

      default:
        break;
    }
  }
}

export default UserForms
