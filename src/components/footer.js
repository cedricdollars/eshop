import React from 'react'
import './styles/footer.scss'
const Footer = () => {
    return (
      <footer className="bg-gray-100">
        <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
          <div className="p-5 w-49 ">
            <div className="text-xs uppercase text-gray-500 font-medium text-left">Get in touch</div>
                <p className="my-3 block">Adress: 2 avenue Paul Veralaine,<br />
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
            <a className="my-4 block link" href="/#">Nos produits</a>
            <a className="my-4 block link" href="/#">Nos engagements</a>
            <a className="my-4 block link" href="/#">Fournisseurs <span className="text-teal-600 text-xs p-1">New</span></a>
            <a className="my-4 block link" href="/#">Partenaires <span className="text-teal-600 text-xs p-1">New</span></a>
          </div>
        
      
        </div>
      </footer>
    )
  }

export default Footer