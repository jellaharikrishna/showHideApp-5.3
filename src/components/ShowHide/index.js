import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: '', lastName: '', firstClassname: '', lastClassname: ''}

  isClickedFirstname = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState(() => ({firstClassname: 'name', firstName: 'Joe'}))
    } else {
      this.setState(() => ({firstClassname: '', firstName: ''}))
    }
  }

  isClickedLastname = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState(() => ({lastClassname: 'name', lastName: 'Jonas'}))
    } else {
      this.setState(() => ({lastClassname: '', lastName: ''}))
    }
  }

  render() {
    const {firstClassname, lastClassname, firstName, lastName} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="fullname-card">
          <div className="name-card">
            <button
              type="button"
              className="button"
              onClick={this.isClickedFirstname}
            >
              Show/Hide Firstname
            </button>
            <p className={firstClassname}>{firstName}</p>
          </div>
          <div className="name-card">
            <button
              type="button"
              className="button"
              onClick={this.isClickedLastname}
            >
              Show/Hide Lastname
            </button>
            <p className={lastClassname}>{lastName}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
