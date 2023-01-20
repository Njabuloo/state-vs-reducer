import React, { useState } from 'react';


const initialState = {
        email : '',
        username : '',
        password : '',
        loading: false,
        error : '',
        registered : false
    }

const State = () => {

    const [state, setState] = useState(initialState);

    function handleChange(event) {
        const {name, value} = event.target

        setState( prevState => {
            return {...prevState, [name] : value}
        })
}

    function handleSubmit(event){
        event.preventDefault()
        
        setState({...state, loading : true})

    console.log({
      username: state.username,
      email: state.email,
      password: state.password
    })
        .then(() => setState({...state, registered : true}))
        .catch((value) => setState( {...state, error : value}))
    }

    if (state.registered) {
        return < Home />
    }

    if (state.loading) {
        return < Loading />
    }

  return (
    <section className='h-screen w-full flex justify-center items-center'>
        <form
            onSubmit={handleSubmit} 
            className='flex flex-col gap-y-2  border-gray-800 border-2 p-4 rounded-3xl'>
            <label className="text-sm font-medium text-gray-900 flex flex-col">
                Username
                <input
                className='border-2 border-gray-800 rounded-lg p-2 placeholder:text-gray-800'
                type='text'
                name='username'
                value={state.username}
                onChange={handleChange}
            />
            </label>
            
            <label className="text-sm font-medium text-gray-900 flex flex-col">
                Email
                <input
                className='border-2 border-gray-800 rounded-lg p-2 placeholder:text-gray-800'
                type='text'
                name='email'
                value={state.email}
                onChange={handleChange}
            />
            </label>
            
            <label className="text-sm font-medium text-gray-900 flex flex-col">
                Password
                <input
                className='border-2 border-gray-800 rounded-lg p-2 placeholder:text-gray-800'
                type='password'
                name='password'
                value={state.password}
                onChange={handleChange}
            />
            </label>
            
            <button
                className='text-white bg-gray-800 rounded-lg p-2 mt-2'
                type='submit'
            >
                Submit
            </button>
        </form>
    </section>
  )
}

export default State