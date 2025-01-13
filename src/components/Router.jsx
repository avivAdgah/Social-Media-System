import React from 'react'
import { Routes,Route,Link } from 'react-router-dom'

function Home(){
    return (
        <div>
            Home
        </div>
    )
}
function About(){
    return (
        <div>
            About
        </div>
    )
}
function Contact(){
    return (
        <div>
            Contact
        </div>
    )
}
function PageNotFound(){
    return (
        <div>
            PageNotFound
        </div>
    )
}


export default function Router() {
  return (
    <> 
    <nav>
        <ul style={{display:'flex' , listStyleType:'none' ,justifyContent:'space-around'}}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/contact'>contact</Link></li>
        </ul>
    </nav>


    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>

        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </>
  )
}  
