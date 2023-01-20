import React, { useReducer } from 'react';

function registerReducer(state, action) {
  if (action.type === 'login') {
    return {
      ...state,
      loading: true,
      error: ''
    }
  } else if (action.type === 'success') {
    return {
      ...state,
      loading: false,
      error: '',
      registered: true
    }
  } else if (action.type === 'error') {
    return {
      ...state,
      loading: false,
      error: action.error,
    }
  } else if (action.type === 'input') {
    return {
      ...state,
      [action.name]: action.value
    }
  } else {
    throw new Error(`This action type isn't supported.`)
  }
}

const initialState = {
        email : '',
        username : '',
        password : '',
        loading: false,
        error : '',
        registered : false
    }

const Reducer = () => {

    

    const [state, dispatch] = useReducer(
        registerReducer,
        initialState
    )

    const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({ type: 'login' })

    console.log({
      username: state.username,
      email: state.email,
      password: state.password
    })
        .then(() => dispatch({ type: 'success' }))
        .catch((error) => dispatch({
        type: 'error',
        error
        }))
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
                onChange={event => dispatch({
                    type : 'input',
                    name :'username',
                    value : event.target.value
                })}
            />
            </label>
            
            <label className="text-sm font-medium text-gray-900 flex flex-col">
                Email
                <input
                className='border-2 border-gray-800 rounded-lg p-2 placeholder:text-gray-800'
                type='text'
                name='email'
                value={state.email}
                onChange={event => dispatch({
                    type : 'input',
                    name :'email',
                    value : event.target.value
                })}
            />
            </label>
            
            <label className="text-sm font-medium text-gray-900 flex flex-col">
                Password
                <input
                className='border-2 border-gray-800 rounded-lg p-2 placeholder:text-gray-800'
                type='password'
                name='password'
                value={state.password}
                onChange={event => dispatch({
                    type : 'input',
                    name :'password',
                    value : event.target.value
                })}
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

export default Reducer