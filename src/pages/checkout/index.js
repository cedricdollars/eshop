import React from 'react'
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe("pk_test_RIDUdTWuuou63m8Tyuy2uQ6t007TdkLkpX")

const btnCheckout = async event => {
    event.preventDefault()
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
        items: [
            { sku: "sku_HKgjUX2mxboZXi", quantity: 1}
        ],
        successUrl: `http://localhost:8000/checkout/success`,
        cancelUrl: `http://localhost:8000/checkout/cancel`

    })

    if (error){
        console.warn("Error :", error)
    }
}

const Index = () => {
    return (
        <button onClick={btnCheckout}>
            PAY
        </button>
    )
}

export default Index