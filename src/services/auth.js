export const isBrowser = ()=> typeof window !== "undefined"

export const getUser = () =>
    isBrowser() && window.localStorage.getItem('gatsbyUser')
    ? JSON.parse(window.localStorage.getItem('gatsbyUser'))
    : {}

const setUser = () =>
    window.localStorage.setItem('gatsbyUser', JSON.stringify(user))

export const handleLogin = ({username, password}) => {
    if(username === 'cedric' && password === 'dollars'){
        return setUser({
            username: 'cedric',
            password : 'dollars',
            email: 'gabyngoune@yahoo.fr'
        })
    }
    return false
}

export const isLoggedIn = ()=> {
    const user = getUser()

    return !!user.username
}

export const logout = callback => {
    setUser({})
    callback()
}