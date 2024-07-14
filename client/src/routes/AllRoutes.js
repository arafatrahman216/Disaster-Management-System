
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Header } from '../components/Header';
import Map from '../components/Map';

export const AllRoutes = () => {
    const username= 'Arafat';
    const locations = [
      { position: [23.7264, 90.3925], popupText: 'Marker 1' },
      { position: [23.73, 90.40], popupText: 'Marker 2' },
      { position: [23.72, 90.45], popupText: 'Marker 3' }
    ];
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/map" element={<Map locations={locations} />} />
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