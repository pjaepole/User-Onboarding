import React from 'react'

function SubmittedForm(props){
    const {details}=props;
    
    if(!details){
        return <h2>fetching data</h2>
    }
    return(
        <div>
        <h2>{details.username}</h2>
        <p>first name:{details.first_name}</p>
        <p>last name:{details.last_name}</p>
        <p>email:{details.email}</p>
        <p>{details.password}</p>
        
        
        
        </div>
    )

}
export default SubmittedForm;