import react from 'react'

export default function Form(){



    return (
        <div>
            <h1>This is from Form.js</h1>
            <form>
                <label>Username
                    <input
                    name='username'
                    type='text'/>
                </label>
                <label>Email
                    <input
                    name='email'
                    type='text'
                    />
                </label>
                <label>Password
                    <input
                    name='password'
                    type='password'
                    />
                </label>
                <label>Terms of Service
                    <input
                    type='checkbox'
                    name='tos'
                    />
                </label>
            </form>
        </div>
    )
}