import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import './index.css';  
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RoomsList from './pages/RoomsList';
import Profile from './pages/Profile';
import RoomDetails from './pages/RoomDetails';



import AdminLayout from './pages/admin/AdminLayout';
import CreateRoom from './pages/admin/rooms/create';
import AdminAnalytics from './pages/admin/AdminAnalytics';
import HomePage from './pages/HomePage';



 
function App() {
  return (
    <Router>
      

      <Navbar />
           <main className="min-h-[80vh] px-4 py-6">


      <Routes>
 
     
        <Route path="/profile" element={<Profile />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/rooms" element={<RoomsList />} />
        <Route path="/" element={<HomePage />} />
       
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminLayout />} >
            <Route path="rooms/create" element={<CreateRoom />} />
            <Route path="analytics" element={<AdminAnalytics />} />
        </Route> 

        {/* <Route path="/admin" element={<AdminLayout />}>

            <Route index element={<AdminDashboard />} />
            <Route path="rooms" element={<AdminRooms />} />
            <Route path="rooms/create" element={<CreateRoom />} />
            <Route path="rooms/edit/:id" element={<e />} />
            <Route path="users" element={<admi />} />
            <Route path="analytics" element={<AdminAnalytics />} />

        </Route> */}


      </Routes>
      </main>
    <Footer  />

    </Router>
  );
} 

export default App;
