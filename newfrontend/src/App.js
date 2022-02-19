import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './screens/LandingPage/LandingPage';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';

const App =() => (
  <BrowserRouter>
   <Header />
   <main>
    <Routes>
   <Route  path="/" element={<LandingPage/>}/>
   <Route  path="/login" element={<LoginScreen/>}/>
   <Route  path="/profile" element={<ProfileScreen/>}/>
   <Route  path="/register" element={<RegisterScreen/>}/>
   
   </Routes>
   </main>
   <Footer />
  </BrowserRouter>
);

export default App;
