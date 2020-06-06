import React, { useState } from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4} from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

function App() {

  const usersData = [
    { id: uuidv4(), name: 'camilo', username: `silva`},
    { id: uuidv4(), name: 'harry', username: `scheilmer`},
  ]

  const [users,setUsers] = useState(usersData);


  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])

  }

  const deleteUser = (id) =>{
    console.log(id)
    setUsers(users.filter(user => user.id !== id))

  }

  const [editing,setEditing] =useState(false);

  const [currentUser, setCurrentUser] =useState ({
    id:null, name: '', username:''
  });

  const editrow = (user) => {
    setEditing(true);
    setCurrentUser ({
      id:user.id, name:user.name, username:user.username
    })
  }

  const updateUser = (id, updateUser)=> {
    setEditing(false);
    setUsers(users.map(user=>(user.id === id ? updateUser : user)))
  }

  return (
    <div class="contenedor">
      <div class="header"><h1>anime network</h1></div>
        {
          editing ? (
          <div class="add">
            <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
          </div>
        ):(
          <div  class="add">
           <h2>añadir usuario </h2>
           <AddUserForm addUser={addUser}/>
          </div>
        )
        }
      
      <div class="view">
        <h2>ver usuario</h2><br></br>
        <UserTable users={users} deleteUser={deleteUser} editrow={editrow}/>
      </div>
      <div class="text"> 
        <h1>Anime</h1>
        <p><em>
        El anime es un tipo de animación nacida en Japón. A lo largo del tiempo se han presentado rumores acerca de este, como que sus dibujos son satánicos o que contienen mensajes subliminales y que este tipo de cosas cambia la conducta de los jóvenes, al investigar un poco más sobre él, surgió la siguiente pregunta:
¿El anime se encarga de cambiar la conducta para mal de los jóvenes que lo ven hoy en día?
No, por el hecho de ver anime, una persona no cambia su actitud, por ejemplo, hay padres que dicen que el anime ha tornado a sus hijos violentos, pero esto es mentira, ya que para un “Otaku” incluso para un “No-otaku” el anime es una forma de entretenimiento; además en más de un anime resaltan valores como la amistad, el amor, la perseverancia, etc. Por esta razón el anime no cambia para mal la conducta de los jóvenes de hoy en día.

Hoy en día, los padres acusan al anime de ser satánico y violento, decía una madre: “En mis tiempos las caricaturas eran más bonitas, más románticas, etc.” Pero ellos deben entender que los tiempos han cambiado, las historias y personajes en estas “caricaturas” también.
</em></p>
      </div>
      
      <div class="sidebar"></div>
      <img class="animg" src="https://i.pinimg.com/236x/ff/ef/aa/ffefaae0b8d7bf39959265f4247430e9.jpg"/>
      <div class="footer"><h1>footer</h1></div>
    </div>
  );
}

export default App;
