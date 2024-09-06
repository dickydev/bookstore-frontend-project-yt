import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <React.Fragment>
        <nav>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className="list">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Book List</a></li>
                    <li><a href="#">Chart</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Navbar