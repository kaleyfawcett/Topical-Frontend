// import React, { useState } from 'react'
// import axios from 'axios'
// // import { useHistory } from 'react-router-dom'

// function Register ({ token }) {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [email, setEmail] = useState('')
//   // const history = useHistory()

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     axios
//       .post('URLFORREGPOST', {
//         username: username,
//         password: password
//       })
//   }

//   return (
//     <div>
//       <h2 className='sansserif'>Welcome to Topical!</h2>
//       <p className='sansserif'>Topical is an app to </p>
//       <Form onSubmit={handleSubmit}>
//         <FormField name='username' label='username'>
//           <TextInput
//             value={username} onChange={event => setUsername(event.target.value)}
//           />
//         </FormField>
//         <FormField name='password' label='password'>
//           <TextInput
//             value={password}
//             type='password'
//             onChange={event => setPassword(event.target.value)}
//           />
//         </FormField>
//         <FormField name='email' label='email'>
//           <TextInput
//             value={email}
//             type='email'
//             onChange={event => setEmail(event.target.value)}
//           />
//         </FormField>
//         <Button type='submit' primary label='Register' onClick={() => history.goBack()} />
//       </Form>
//     </div>

//   )
// }

// export default Register
