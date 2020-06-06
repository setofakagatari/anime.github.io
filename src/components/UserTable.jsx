import React from 'react'

const UserTable = (props) => {
    console.log(props.users)
    return (
        <table class="viewtable">
            <thead>
             <tr>
                <th><p>name</p></th>
                <th><p>username</p></th>
                <th><p>actions</p></th>
             </tr>
            </thead>
            <tbody>
                {
                    
                    props.users.map(user => (
                        <tr key={user.id}>
                            <td class="tdb"><p>{user.name}</p></td>
                            <td class="tdb"><p>{user.username}</p></td>
                            <td>
                            <button class="casillano" onClick={() => {props.editrow(user)}}><p>edit</p></button><br></br>
                            <button class="casillano" onClick={() => {props.deleteUser(user.id)}}><p>delete</p></button>
                            </td>
                        </tr>
                        ))
                }
                
            </tbody>
        </table>
    );
}
export default UserTable;