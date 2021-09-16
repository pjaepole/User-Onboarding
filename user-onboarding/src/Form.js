import react from 'react'

export default function Form(props){
    const {
        values,
        change,
        submit,
        disabled,
        errors,
    } =props

    const onSubmit = evt =>{
        evt.preventDefault()
        submit()
    }

    const onChange = evt =>{
        const {name, value,checked, type}=evt.target;
        const valueToUse=type==='checkbox'? checked:value;
        change(name,valueToUse);
    }
    return (
        <div>
            <h1>This is from Form.js</h1>
            <form onSubmit={onSubmit}>
                <button disabled={disabled}>submit</button>
                <div>
                    <div>{errors.username}</div>
                    <div>{errors.first_name}</div>
                    <div>{errors.last_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.tos}</div>
                </div>
                <label>Username
                    <input
                    value={values.username}
                    onChange={onChange}
                    name='username'
                    type='text'/>
                </label>
                <label>Firstname
                    <input
                    values={values.first_name}
                    onChange={onChange}
                    name='first_name'
                    type='text'/>
                </label>
                <label>Lastname
                    <input
                    values={values.last_name}
                    onChange={onChange}
                    name='last_name'
                    type='text'/>
                </label>
                <label>Email
                    <input
                     values={values.email}
                     onChange={onChange}
                    name='email'
                    type='text'
                    />
                </label>
                <label>Password
                    <input
                     values={values.password}
                     onChange={onChange}
                    name='password'
                    type='password'
                    />
                </label>
                <label>Terms of Service
                    <input
                    type='checkbox'
                    name='tos'
                    checked={values.tos}
                    onChange={onChange}
                    />
                </label>
            </form>
        </div>
    )
}