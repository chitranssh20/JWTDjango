import React, { StrictMode } from 'react'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import  axiosInstance  from './Axios'
import Logout from './Logout'
export const Login = () => {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    
    let navigate = useNavigate();

    const onlogout = () =>{
        // useEffect(() => {
            // const response = axiosInstance.post('logout/blacklist/', {
            //   refresh_token: localStorage.getItem('refresh_token'),
            // } );
            // localStorage.removeItem("access_token");
            // localStorage.removeItem("refresh_token");
          
            // axiosInstance.defaults.headers['Authorization'] = null;
            // navigate("login/")
        //   })
          const response = axiosInstance.post('logout/blacklist/', {
            refresh_token: localStorage.getItem('refresh_token'),
          } );
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
        
          axiosInstance.defaults.headers['Authorization'] = null;
          navigate("/post")
          }
        
    const loginSubmit = (e) =>{
        e.preventDefault();
        console.log("Hellow how are you"); 
        let fd = new FormData();
        fd.append('username', username);
        fd.append('password', password);
        axiosInstance.post('api/token/', fd).then(res =>{
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
          axiosInstance.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access_token');
        //   navigate('/')
        }).catch(err =>{
            console.log(err);
        })

    }


  return (
    <>
    {/* <StrictMode> */}
        <button onClick={onlogout} >Logout</button>
        <form  encType='multipart/form-data' onSubmit={loginSubmit} >
            <label htmlFor='username' >Username: </label>
            <input id = 'username' type = 'text'  value={username} name = 'username' onChange={(e)=>{
                setusername(e.target.value)
            }}  >
                </input>
                <br></br>
            <label htmlFor='password' >Password: </label><br></br>
            <input id = 'password' type = 'text' value={password} name = 'password' onChange={(e)=>{
                setpassword(e.target.value)
            }} >
                </input>
                <button type='submit' >Submit</button>
        </form>
                {/* </StrictMode> */}
    </>
  )
        }
