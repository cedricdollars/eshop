import React, { useState, useEffect } from 'react'
import Lit from './lit';
import imageLit from '../images/product3.jpg'
import imageChair from '../images/product4.jpg'
import imageTable from '../images/table.jpg'

const ListProduct = () => {

    const [lit, setLit] = useState(false);

    const showLit = () => {
        if(lit) {
            return (
                <Lit />
            )
        }
    }
    return (

    <div className="container container-product">  
        {showLit()}
        <div className="flex content-start flex-wrap h-48">
            <div className="w-1/3 p-2">   
                <article className="article col-xs-4">
                    <img src={imageLit} className="img-fluid" />
                    <div className="middle">
                        <button className="btn-product" >Voir le produit</button>
                    </div>
                </article>
            </div>

            <div className="w-1/3 p-2">   
                <article className="article col-xs-4">
                    <img src={imageChair} className="img-fluid" />
                    <div className="middle">
                        <button className="btn-product" >Voir le produit</button>
                    </div>
                </article>
            </div>
            <div className="w-1/3 p-2">   
                <article className="article col-xs-4">
                    <img src={imageTable} className="img-fluid" />
                    <div className="middle">
                        <button className="btn-product" >Voir le produit</button>
                    </div>
                    
                </article>
            </div>
        </div>
    </div> 
    )
}

export default ListProduct