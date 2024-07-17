
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Community } from '../pages';
import { Header } from '../components/Header';
import Map from '../components/Map';
import  Footer  from '../components/Footer';

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
        <Route path="/auth" element={<h1>Authorization</h1>} >
            <Route path='login' element={<h1>login</h1>} />8
            <Route path='register' element={<h1>Register</h1>} />
            <Route path='*' element={<Navigate to='/' />} />
        </Route>
        <Route path='/community/:id' element={<Community/>} >
            <Route path='' element={<h1>Community Home</h1>} />
            <Route path='chat' element={<h1>Chat</h1>} />
            <Route path='announcement' element={<h1>Announcement</h1>} />
            <Route path='*' element={<h1>Access Denied !</h1>} />
        </Route>
        <Route path='/communities' element={<h1>Communities</h1>} />
        <Route path='*' element={<h1>404 ! Page Not Found</h1>} />
    </Routes>
    <Footer />
      </>
  )
}