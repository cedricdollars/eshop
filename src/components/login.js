import React from "react"
import { Dropdown, Button, Icon } from "semantic-ui-react"
import { Link } from "gatsby"
import './styles/style.scss'

function handleClick() {
  try {
    window.netlifyIdentity.open()
  } catch (e) {
    console.error(e)
  }
}

function logOut() {
  window.netlifyIdentity.logout()
  window.location.reload()
}

function loggedOrNot() {
  if (typeof window !== "undefined" && typeof window.netlifyIdentity !== "undefined") {
    if (window.netlifyIdentity.store.user !== null) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

const toRender = loggedOrNot()
  ?
  <Dropdown icon="user circle" pointing='top right'>
    <Dropdown.Menu>
      <Link to="/compte" className="uppercase relative block py-6 px-2 lg:p-6 text-sm font-bold"> <Icon name='cart'/>Commandes</Link>
      <Link to="/parametres" className="uppercase relative block py-6 px-2 lg:p-6 text-sm font-bold"><Icon
        name='options'/>Paramètres</Link>
      <Button className="btn-account" icon='log out' iconPosition='left' onClick={logOut} content='Déconnexion'/>
    </Dropdown.Menu>
  </Dropdown>
  :
  <Dropdown icon="user" pointing='top left'>
    <Dropdown.Menu>
      <Button className="btn-account" onClick={handleClick}>Log In</Button>
    </Dropdown.Menu>
  </Dropdown>

const Login = () => {
  return (
    <div className={{color: 'white'}}>
      {toRender}
    </div>
  )
}
export default Login