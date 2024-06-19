import React from 'react'
import './emailConfirmation-custom.css'

const EmailConfirmation = () => {
  return (
    <div id="confirmationcontainer" className="emailConfirmation-custom">
      <img src="mdi_email-plus.svg" /> 
      <h3>We've Sent Your Results</h3>
      <p>Make sure to keep your results in a safe spot and to review before any upcoming opportunities!</p>
    </div>
  ) 
}

export default EmailConfirmation 