import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import './styles/footer.scss'
import  { Message, Form } from 'semantic-ui-react'


const Footer = () => {
    const [email, setEmail] = useState("")
    const handleSubmit = e => {
        e.preventDefault()
        addToMailchimp(email)
        .then((data) => (
            console.log(data.msg)
        ))
        .catch(() => {
            console.log(email)
        })
    }
    const handleEmailChange = e => {
        setEmail(e.currentTarget.value)
    }
    return (
      <footer className="bg-gray-100">
        <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
          <div className="p-5 w-49 ">
            <div className="text-xs uppercase text-gray-500 font-medium text-left">Get in touch</div>
                <p className="my-4 block">Adress: 2 avenue Paul Veralaine,<br />
                    94190 villeneuve-st-georges
                </p>
                <p className="my-3 block font-weight-bold" >Phone :<span className="text-teal-600 px-2 ">(+33)762196004</span></p>
                <p className="my-3 block font-weight-bold">Email:<span className="text-teal-600 px-2">gabyngoune@yahoo.fr</span></p>
                <a className="my-3 block" href="/#">Prix <span className="text-teal-600 text-xs p-1"></span></a>
          </div>
          <div className="p-5 w-49 ">
            <div className="text-xs uppercase text-gray-500 font-medium">Informations</div>
            <a className="my-4 block link" href="/#">My Account</a>
            <a className="my-4 block link" href="/#">About us</a>
            <a className="my-4 block link" href="/#">Contact us <span className="text-teal-600 text-xs p-1">New</span></a>
            <a className="my-4 block link" href="/#">Checkout</a>
          </div>
        
          <div className="p-5 w-49 ">
            <div className="text-xs uppercase text-gray-500 font-medium">Our Newsletter</div>
            <p className="my-4">Receive all our latest products by subscribing to our newsletter</p>
            <Form onSubmit={handleSubmit} className="my-3 block">
                <Form.Group className="flex">
                <Form.Input
                    placeholder='Email'
                    name='email'
                    onChange={handleEmailChange}
                />
                <Form.Button 
                content='Submit'
                className="ui primary button"
                />
                
                </Form.Group>
            </Form>
            
          </div>
        
      
        </div>
      </footer>
    )
  }

export default Footer