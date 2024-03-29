import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'


const Header = () => {

const authStatus = useSelector((state)=>state.auth.status)
const navigate = useNavigate();

const navItems =[
    {
        name: 'Home',
        slug:"/",
        active:true
    },
    {
        name: 'login',
        slug:"/login",
        active:!authStatus, 
       },
       {
        name: 'Signup',
        slug:"/signup",
        active:!authStatus, 
       },
       {
        name: 'All Posts',
        slug:"/all-posts",
        active:authStatus, 
       },
]


  return (
   <header className='py-3 shadow bg-gray-500'>
    <Container>
       <nav className='flex'>
        <div className='mr-4'>
            <Link to='/'>
                <Logo width='70px'/>
            </Link>
        </div>

        <ul className='flex ml-auto'>
         
         {navItems.map((item)=>
       item.active ? (<li key={item.name}>
        <button className='inline-block px-6 py-2'
        onClick={()=>navigate(item.slug)}
        >{item.name}</button>
       </li>): null
         )}
        {authStatus && (
            <li>
                <LogoutBtn/>
            </li>
        )}

        </ul>
        </nav> 
    </Container>
   </header>
  )
}

export default Header