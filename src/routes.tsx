 
 type routsType={
     [key: string]: string
 }
 
 const routs: routsType={
    main: '/',
    about: '/about',
    login: '/login',
    signup: '/signup',
    profile: '/profile',
    contacts: '/contacts',
    conntactView: '/contacts/:contctId'
}

export default routs;