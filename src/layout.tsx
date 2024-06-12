import {Outlet,Link} from 'react-router-dom'
import './nav_layout.css'
export default function Layout(){

    return (
        <>
            <nav className="nav-layout">
                    <p>Rabin Khulimuli</p>
                    <div className='in-nav-layout' >
                        <Link className='nav-b' to='/'>Home</Link>
                        <Link className='nav-b' to='skill' >Skills</Link>
                        <Link className='nav-b' to='opensource'>Open Source</Link>
                        <Link className='nav-b' to='project'>Projects</Link>
                        <Link className='nav-b' to='achievement'>Achievements</Link>
                        <Link className='nav-b' to='blog'>Blogs</Link>
                        <Link className='nav-b' to='talk'>Talks</Link>
                        <Link className='nav-b' to='contact' >Contact Me</Link>
                    </div>
            </nav>
            <Outlet/>
            <footer>Connect me on </footer>
        </>
    )
}