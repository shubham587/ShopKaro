import React from 'react'

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="subscribe-email">
        <h2>Subscribe to our awesome emails.</h2>
        <p>Get our latest offers and news straight in your inbox.</p>
        <div className="email-input">
          <input type="email" placeholder="Please enter an email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
