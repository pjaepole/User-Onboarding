import './App.css';
import Form from './Form'
import React, { useState, useEffect} from 'react'
import schema from './validation/formSchema';
import * as yup from 'yup';
import axios from 'axios';
import SubmittedForm from './components/submittedform';
const initialFormValues={
username:'',
first_name:'',
last_name:'',
email:'',
password:'',
tos: false,
}
const initialFormErrors={
username:'',
first_name:'',
last_name:'',
email:'',
password:'',
}

const initialDisabled =true;

export default function App() {
  const [peoples, setPeoples]= useState([]);
  const [formValues, setFormValues]=useState(initialFormValues);
  const [disabled, setDisabled]= useState(initialDisabled)
  const [formErrors,setFormErrors]= useState(initialFormErrors)
  
  // getting data from api  
  const getData=()=>{
    axios.get('https://reqres.in/api/users')
    .then(res=>{
      
      setPeoples(res.data.data);
      
    }).catch(err=> console.error(err))
  }
  //putting new data to api add it in 
  const postNewData =newData =>{
    axios.post('https://reqres.in/api/users',newData)
    .then(res =>{
      setPeoples([res.data,...peoples]);
      setFormValues(initialFormValues);
    }).catch(err =>{
      console.error(err);
      setFormValues(initialFormValues);
    })
  }
  // when submit all the value inside input to add newimputdata to database
  const formSubmit =()=>{
    const newInputdata={
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos
    }
    postNewData(newInputdata);
    setFormValues(initialFormValues);
  }

  useEffect(()=>{
    getData()
  },[])
  useEffect(()=>{
    schema.isValid(formValues).then(valid=>setDisabled(!valid))
  },[formValues])

  const validate =(name,value)=>{
    yup.reach(schema,name)
    .validate(value)
    .then(()=>setFormErrors({...formErrors, [name]:''}))
    .catch(err => setFormErrors({...formErrors, [name]:err.errors[0]}))
  }
  const inputChange=(name, value)=>{
    validate(name, value);
    setFormValues({...formValues,[name]:value})
  }
  console.log("this",peoples)
  return (
    <div className="App">

      <Form
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      setFormValues={setFormValues}
      initialFormValues={initialFormValues}/>
     
      {peoples.map(function(people){
        return <SubmittedForm details={people}></SubmittedForm>
      })}
        
    
    </div>
  );
}


