import './App.css'
import Home from './components/Home/home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EditUser from './components/Users/editUser'
import GetUser from './components/Users/getUser'
function App() {

  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/getUser/:id' element={<GetUser/>}/>
          <Route path='/editUser/:id' element={<EditUser/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
