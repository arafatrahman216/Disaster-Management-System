
import { Routes, Route, Navigate } from 'react-router-dom';

export const AllRoutes = () => {
    const username= 'Arafat';
  return (
    <>
    <Routes>
        <Route path="/" element={<h1> hello home</h1>} />
        <Route path="/auth" element={<h1>Authorization</h1>} >
            <Route path='login' element={<h1>login</h1>} />
            <Route path='register' element={<h1>Register</h1>} />
            <Route path='*' element={<Navigate to='/' />} />
        </Route>
        <Route path='/community/chat' element={<h1>chat</h1>} />
        <Route path='*' element={<h1>404 ! Page Not Found</h1>} />
       </Routes></>
  )
}