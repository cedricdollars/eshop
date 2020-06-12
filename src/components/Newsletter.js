import React, { useState } from 'react'
import addToMailChimp from 'gatsby-plugin-mailchimp'
import { Form } from 'semantic-ui-react'


const Newsletter = () => {
    const [email, setEmail] = useState("")
    let messageBlock ;

    if(typeof window != "undefined") {
        messageBlock = document.getElementById('response');
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addToMailChimp(email)
            .then((data) => {
                if(data.msg.search('already subscribed') !== -1) {
                    messageBlock.innerHTML = "Cet email existe déja!"
                }
                else if (data.msg.search('thank you for subscribing') !== -1) {
                    messageBlock.innerHTML = "Inscription à la newsletter validée"
                }else {
                    messageBlock.innerHTML = "Une erreur est survenu lors de la soubscription, veuillez contacter l'équipe Mobelia"
                }
            }).catch(() => {
                console.log(email)
            })
           
    }
    const handleEmailChange = (e) => {
        setEmail(e.currentTarget.value)
    }
    return( 
        <section className="w-full px-32 pb-16 flex justify-center">
            <div className="container px-6 flex items-center justify-center flex-col">
                <div className="bg-gray-100 rounded-lg py-6 px-10 shadow-lg">
                    <h4 className="text-md text-center md:text-3xl pb-2"> Inscrivez vous à notre Newsletter</h4>
                    <h4 className="hidden md:flex text-lg pb-5 justify-center"> Soyez notifié lors de nos ventes privées et promotions !</h4>
                    <h4 className="md:flex text-lg pb-5 justify-center" id="response"/>
                    <Form onSubmit={handleSubmit} className="flex w-full justify-center">
                        <Form.Group className="flex justify-end">
                        <Form.Input
                            placeholder='Email'
                            name='email'
                            onChange={handleEmailChange}
                        />
                        <Form.Button content='Submit'/>
                        </Form.Group>
                    </Form>
                </div>
            </div>
    </section>
    )
}

export default Newsletter