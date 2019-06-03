import React from 'react'

class MainLayout extends React.Component{
    render(){
        return( <React.Fragment>
            <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item title" href="https://bulma.io">
                    Letrics
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                    <a class="button is-link">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-primary is-normal">
                        <strong>Log in</strong>
                    </a>
                    </div>
                </div>
            </div>
        </nav> 
        </React.Fragment>
        )
    }
}

export default MainLayout