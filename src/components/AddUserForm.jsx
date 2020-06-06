import React from 'react'
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {
    const {register, errors, handleSubmit} = useForm();
    const onSubmit = (data, e)=>{
        //console.log(data)

        props.addUser(data)

        e.target.reset();
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <button class="casillano"><p>add new user</p></button>
        </form>
    );
}

export default AddUserForm;