import get from './modules/getElement.js'
import getUser from './modules/fetchUser.js'
import displayUser from './modules/displayUser.js'

const btn = get('.btn')

const showUser= ()=>{
 // get user from api
 getUser().then(person=>displayUser(person))
 // display user
}

window.addEventListener('DOMContentLoaded',showUser)
btn.addEventListener('click',showUser)