import { Link } from 'react-router-dom'
import '../CSS/Header.css'

const Header = () => {
    return (
        <>
            <div className="container">
                <div className="top-head">
                    <p>Welcome, Guest 
                        <Link to='#' className='ml-2 underline text-gray-400'>Login</Link>
                        <Link to='#' className='ml-1 underline text-gray-400'>SignUp</Link>
                    </p>
                    <p>Stay Updated:<Link to='#' className=' underline text-gray-400'>Subscribe via RSS Email Updates</Link></p>
                </div>
                <div className="description">
                    <h1>My Blog</h1>
                    <p>Description of my blog</p>
                </div>
            </div>
        </>
    )
}

export default Header