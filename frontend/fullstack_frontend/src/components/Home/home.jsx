import { useEffect, useState } from 'react'
import './home.css'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
export default function Home(){

    const [users, setUsers] = useState([])
    const {id} = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    })
    const [modal, setModal] = useState(false)
    const {name, username, email} = user;

    const inputChange = (e) =>{
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const onSubmit = async(e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8080/addUser", user);
    }

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const res = await axios.get("http://localhost:8080/getUser")
        setUsers(res.data)
    } 

    const deleteUser = async(id) =>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }
    return(
        <div className='home'>

            <div className="home_title">
                <h1>TODO LIST</h1>
            </div>

            <div className="add_btn">
                <button onClick={() => setModal(true)}>Add </button>
            </div>
            {modal && (
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
                            <br />
                            <input 
                            type="text" 
                            placeholder='username'
                            name='username'
                            value={username}
                            onChange={(e) => inputChange(e)}
                            />
                            <br />
                            <input 
                            type="text" 
                            placeholder='email'
                            name='email'
                            value={email}
                            onChange={(e) => inputChange(e  )}
                            />
                            <div>
                                <button type='submit'>Save</button>
                                <button onClick={() => setModal(false)}>Close</button>
                            </div>
                        </form>  
                    </div>
                </div>
            )}
            <table className='user_table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) =>(
                            <tr>
                                <th key={index}>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <div className="home_link">
                                        <Link to={`/getUser/${user.id}`}>
                                            <i className="fa-solid fa-circle-info"></i>
                                        </Link>
                                            
                                        <Link to={`/editUser/${user.id}`}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </Link>    

                                        <a onClick={() => deleteUser(user.id)}>
                                            <i className="fa-solid fa-trash"></i>
                                        </a>   
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}