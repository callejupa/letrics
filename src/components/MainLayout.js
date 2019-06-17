import React from 'react'
import { Link } from 'react-router-dom'
import Router from '../Routes/Routes'

function MainLayout (props){
    const children = props.children
        return( <React.Fragment>
            <div className="container-fluid">
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand container">
                <Link to="/" className="navbar-item title is-centered">
                    <i className="fab fa-napster"></i>> Letrics
                </Link>

                <a href="#" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <Link to="/Home" className="button is-white is-medium">
                        <strong>Tracks</strong>
                    </Link>
                    <Link to="/signup" className="button is-link is-medium">
                        <strong>Register</strong>
                    </Link>
                    <Link to="/login" className="button is-dark is-medium">
                        <strong>Log in <i className="fas fa-sign-in-alt"></i></strong>
                    </Link>
                    
                    </div>
                </div>
            </div>
        </nav>         
        </div>
        <Router/>
        {children}

        </React.Fragment>
        )    
}

export default MainLayout