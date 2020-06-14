import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import  { Form } from 'semantic-ui-react'




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
                <p className="my-4 block">Adresse: 2 avenue Paul Veralaine,<br />
                    94190 villeneuve-st-georges
                </p>
                <p className="my-3 block font-weight-bold" >Tel :<span className="text-teal-600 px-2 ">(+33)762196004</span></p>
                <p className="my-3 block font-weight-bold">Email:<span className="text-teal-600 px-2">gabyngoune@yahoo.fr</span></p>
                
          </div>
          <div className="p-5 w-49 ">
            <div className="text-xs uppercase text-gray-500 font-medium">Informations</div>
            <a className="my-3 block link" href="/#">Compte</a>
            <a className="my-3 block link" href="/#">À propos</a>
            <a className="my-3 block link" href="/#">Nous contacter </a>
            <a className="my-3 block link" href="/#">Services</a>
          </div>
          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">Produit</div>
            <a className="my-3 block" href="/#">produits</a>
            <a className="my-3 block" href="/#">Livraisons</a>
            <a className="my-3 block" href="/#">Fournisseurs </a>
            <a className="my-3 block" href="/#">Partenaires</a>
          </div>
        
          <div className="p-5 w-49 ">
            <div className="text-xs uppercase text-gray-500 font-medium">Newsletter</div>
            <p className="my-3">Recevez nos dernières offres</p>
            <Form onSubmit={handleSubmit} className="my-3 block">
                <Form.Group className="flex">
                <Form.Input
                    placeholder='Email'
                    name='email'
                    onChange={handleEmailChange}
                />
                <Form.Button 
                content='Submit'
                />
                </Form.Group>
            </Form>   
          </div> 
        </div>
        <hr />
        <div className="footer-copyright text-center py-3">
            <strong>Copyright © 2020<span className="text-xs yellow">Mobelia</span></strong>
        </div>
      </footer>
    )
  }

export default Footer