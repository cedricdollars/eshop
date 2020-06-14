import React from 'react'
import Navbar from '../components/navbar'
import { Helmet } from 'react-helmet'

const Contact = ()=> {
    return(
        <section className="bg-gray-100">
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet"/>
            </Helmet>
            <Navbar/>
            <form name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true" action="/success"
            className="w-full max-w-lg m-auto mt-10">
        <h1 className="my-10 text-xl font-bold text-gray-700 uppercase text-center">Formulaire de contact</h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="grid-first-name">
              Prénom
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name" type="text" placeholder="Marie" name="prenom"/>
            <p className="text-red-500 text-xs italic">Remplissez les champs requis.</p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="grid-last-name">
              Nom
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name" type="text" placeholder="Jeanne" name="nom"/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="grid-password">
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email" type="email" placeholder="bob@gmail.com" name="email"/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="grid-password">
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              name="message"/>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="flex w-full justify-end">
            <button
              className="shadow bg-blue hover:bg-blue-600 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded"
              type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
        </section>
    )
}
export default Contact