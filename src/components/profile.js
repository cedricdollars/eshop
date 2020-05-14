import React from 'react'
import { getUser } from "../services/auth"

const profile = ()=> (
    <>
        <h1>Your profile</h1>
        <ul>
            <li>
                Name : {getUser().name}
            </li>
            <li>
                Email : {getUser().email}
            </li>
        </ul>
    </>
)

export default profile