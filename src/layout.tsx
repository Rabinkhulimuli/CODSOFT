import {Outlet,Link} from 'react-router-dom'
import './nav_layout.css'
import React from 'react'
import Footer from './footer'
export default function Layout(){
    const styles={
        display:'flex'
    };
    const [open,setOpen]=React.useState(false)
    const toggle= ()=> setOpen((prev)=> prev?false:true)
    return (
        <>
            <nav className="nav-layout" style={open?{height:"fit-content"}:{}} >
                    <p>Rabin Khulimuli</p>
                   <div>
                   <div className="drop-down" style={open?{backgroundColor:"red",color:"white"}:{}} onClick={toggle} >Menu</div>
                    <div className='in-nav-layout' style={open?styles:{}} >
                        <Link onClick={()=> setOpen(false)} className='nav-b' to='/'>Home</Link>
                        <Link onClick={()=> setOpen(false)} className='nav-b' to='skill' >Skills</Link>
                        <Link onClick={()=> setOpen(false)} className='nav-b' to='project'>Projects</Link>
                        <Link onClick={()=> setOpen(false)} className='nav-b' to='about'>About</Link>
                        <Link onClick={()=> setOpen(false)} className='nav-b' to='contact' >Contact Me</Link>
                        <Link onClick={()=> setOpen(false)} className='nav-b' to='resume' >Resume</Link>
                    </div>
                   </div>
            </nav>
            <Outlet/>
            <Footer />
        </>
    )
}