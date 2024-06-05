import { Link, useNavigate } from 'react-router-dom'
import './users.css'
import { useState } from 'react'
import axios from 'axios';

export default function AddUser(){

    let navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    })

    const {name, username, email} = user;

    const inputChange = (e) =>{
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async(e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8080/addUser", user);
        navigate("/")
    }

    return(
        <div className='addUser'>
            <div className="add_form">
                <h2>Add new User</h2>
                <form className="add" onSubmit={(e) => onSubmit(e)}>
                    <input 
                    type="text" 
                    placeholder='name'
                    name='name'
                    value={name}
                    required
                    onChange={(e) => inputChange(e)}
                    />
                    <input 
                    type="text" 
                    placeholder='username'
                    name='username'
                    value={username}
                    onChange={(e) => inputChange(e)}
                    />
                    <input 
                    type="text" 
                    placeholder='email'
                    name='email'
                    value={email}
                    onChange={(e) => inputChange(e  )}
                    />
                    <div className="add_btn">
                        <button type='submit' className='users_btn'>Save</button>
                        <Link to="/" className='users_btn'>Close</Link>
                    </div>
                </form>  
            </div>
        </div>
    )
}