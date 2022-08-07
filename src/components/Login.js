import axios from 'axios'
import React, { useState } from 'react'
import Admin from './Admin'

export default function Login() {
    const [login,setLogin] = useState("")
    const [password,setPassword] = useState("")
    const [auth,setAuth] = useState(0)
    const checkLogin = (e) => {
        e.preventDefault();
        axios.get(`http://127.0.0.1:3000/login/${login}/${password}`)
        .then(_data => console.log(_data))
        .catch(err => console.log(err))
    }
  return (
   <>
   
   { auth === 1 ? <Admin /> :
    <form onSubmit={(e)=>checkLogin(e)} className="m-5 p-5">
    <div className="mb-3">
         <label htmlFor="exampleInputEmail1" className="form-label">
           LOGIN
         </label>
         <input
           type="email"
           className="form-control"
           id="exampleInputEmail1"
           aria-describedby="emailHelp"
           onChange={(e) => setLogin(e.target.value)}
         />
       </div>
       <div className="mb-3">
         <label htmlFor="exampleInputEmail1" className="form-label">
           PASSWORD
         </label>
         <input
           type="password"
           className="form-control"
           id="exampleInputEmail2"
           aria-describedby="emailHelp"
           onChange={(e) => setPassword(e.target.value)}
         />
       </div>
       <button className='btn btn-lg btn-primary'>Connexion</button>
</form>}
   
   </>
  )
}
