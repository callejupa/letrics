import React, { useState } from 'react'

function Login() {

    const [count, setCount] = useState(0);

        return (<>
            <div className="container">
            <h1 className="title">Login</h1>
                <div class="field">
                    <label class="label">User</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="write your UserName"/>
                    </div>
                </div>

                <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="password" placeholder="Password"/>
                </div>
                </div>
                <button  className="button is-dark is-large">
                 Login
                </button>
            </div>
                
            </>
        )    
}

export default Login
