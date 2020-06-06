import React from 'react'
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {
    //console.log(props.currentUser)
    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });
    
    setValue('name',props.currentUser.name)
    setValue('username',props.currentUser.username)

    const onSubmit = (data, e)=>{
        console.log(data)
        
        data.id=props.currentUser.id

        props.updateUser(props.currentUser.id, data)

        e.target.reset();
    }
    return (
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>  edit user</h1><br/>
            <label>name</label><br></br>
            <input class="accion" type="text" name="name" ref={
                register({
                    required: {value:true, message:'campo requerido'}
                })
            }/>
            <div>
                {errors?.name?.message}
            </div>
            <label>username</label><br></br>
            <input class="accion" type="text" name="username" ref={
                register({
                    required: {value:true, message:'campo requerido'}
                })
            }/>
            <div>
                {errors?.username?.message}
            </div>
            <button class="casillano"><p>edit user</p></button>
        </form>
    );
}

export default EditUserForm;