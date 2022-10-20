import React, { StrictMode } from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import  axiosInstance  from './Axios'

export const Signup = () => {

    const [signusername, setsignusername] = useState('')
    const [signpassword, setsignpassword] = useState('')
    
    let navigate = useNavigate();

    const signSubmit = (e) =>{
        e.preventDefault();
        console.log("Hellow how are you"); 

        let fd = new FormData(); 
        fd.append('username', signusername);
        fd.append('password', signpassword);

        axiosInstance.post('reg/', fd ).then(res =>{
            navigate('/login')
            console.log(res);
            console.log(res.data);
        })
        .catch(err =>{
            console.log(err);
        })

    }


  return (
    <>
        
        <form  encType='multipart/form-data' onSubmit={signSubmit} >
            <label htmlFor='signusername' >Sign Username: </label>
            <input id = 'signusername' type = 'text'  value={signusername} name = 'signusername' onChange={(e)=>{
                setsignusername(e.target.value)
            }}  >
                </input>
                <br></br>
            <label htmlFor='signpassword' >Sign Password: </label>
            <input id = 'signpassword' type = 'text' value={signpassword} name = 'signpassword' onChange={(e)=>{
                setsignpassword(e.target.value)
            }} >
                </input>
                <button type='submit' >Submit</button>
        </form>
    </>
  )
}
