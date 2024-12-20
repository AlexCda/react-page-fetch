import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isBoolean, setIsBoolean] = useState(false)
  const [state, setState] = useState(false)
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      setContacts(data)
    })
  },[])
  return (
    <div className="App">
      {
        contacts.map(contact => <p key={contact.id}>{contact.name}</p>)
      }
      
    </div>
  );
}

export default App;
