import React, { useState, useEffect } from 'react'
import imageLit from '../images/product3.jpg'
import imageChair from '../images/product4.jpg'
import imageTable from '../images/table.jpg'
import imgHome from '../images/home.jpg'
import imgSofa from '../images/canapé.jpg'
import meuble from '../images/meubleTv.jpg'

const ListProduct = () => {
  

    return (
    <div className="container container-product">  
       
        <h2 className="text-center black">Tendances 2020 </h2>
        <p className="text-center mt-1">Découvrez nos sélections de produits de cet été</p>
        <div className="flex content-start flex-wrap h-48 mt-4">
            <div className="grid-container"> 
                <article className="article ">
                    <img src={imageLit} className="img-fluid" />
                    <div className="middle">
                        <a href="lit.js" className="btn-product" >Lits</a>
                    </div>
                </article>
   
                <article className="article ">
                    <img src={imageChair} className="img-fluid" />
                    <div className="middle">
                        <a href="./chaise.js" className="btn-product" >Chaises</a>
                    </div>
                </article>
             
                <article className="article ">
                    <img src={imageTable} className="img-fluid"  />
                    <div className="middle">
                        <button className="btn-product" >Tables</button>
                    </div>
                </article>

                <article className="article">
                    <img src={imgHome} className="img-fluid" id="imgHome" />
                    <div className="middle">
                        <button className="btn-product" >salon</button>
                    </div>
                </article>
                <article className="article">
                    <img src={imgSofa} className="img-fluid" />
                    <div className="middle">
                        <button className="btn-product" >Canapé</button>
                    </div>
                </article>
                <article className="article">
                    <img src={meuble} className="img-fluid" />
                    <div className="middle">
                        <button className="btn-product" >meuble tv</button>
                    </div>
                </article>
            </div> 
        </div>    
    </div> 
    
    )
}

export default ListProduct