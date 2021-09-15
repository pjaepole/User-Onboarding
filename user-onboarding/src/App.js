import './App.css';
import Form from './Form'

import schema from './validation/formSchema';
import * as yup from 'yup';
import axios from 'axios';

function App() {

  return (
    <div className="App">
      <Form/>
    </div>
  );
}

export default App;
