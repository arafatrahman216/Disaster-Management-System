
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Header } from '../components/Header';
import Map from '../components/Map';
import {Auth} from '../pages/Auth';

export const AllRoutes = () => {
    const username= 'Arafat';
    const locations = [
      { position: [23.7264, 90.3925], popupText: 'Marker 1' },
      { position: [23.696789, 90.399721], popupText: 'Marker 2' },
      { position: [23.704783, 90.398183], popupText: 'Marker 3' }
    ];
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/map" element={<Map locations={locations} />} />
        <Route path="/auth" element={<Auth/>} >
            <Route path='login' element={<h1>login</h1>} />8
            <Route path='register' element={<h1>Register</h1>} />
            <Route path='*' element={<Navigate to='/' />} />
        </Route>
        <Route path='/community/chat' element={<h1>chat</h1>} />
        <Route path='*' element={<h1>404 ! Page Not Found</h1>} />
       </Routes></>
  )
}