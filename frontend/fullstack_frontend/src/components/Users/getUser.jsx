import { useEffect, useState } from 'react'
import './users.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'



export default function GetUser(){


    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    })

    const {id} = useParams();
    
    useEffect(() =>{
        loadUser();
    }, []);

    const loadUser = async() =>{
        const res = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(res.data);
    }
    

    return(
        <div className='addUser'>
            <div className="add_form">
                <h2>User's Info: {user.id}</h2>
                <div className="user_info">
                    <label>Name: {user.name}</label>
                    <label>Username: {user.username}</label>
                    <label>Email:{user.email}</label>
                </div>
                <Link to="/" className='users_btn'>Back</Link>
            </div>
        </div>
    )
}
