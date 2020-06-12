import React from "react"
import { Link } from 'gatsby'

const Index = ()=> {
    return (
      <div>
       <p>Votre achat a été effectué avec succès ! </p> 
       <Link to="/products">Continuez le magazin</Link>
      </div>
    )
  }


export default Index