// import logo from './logo.svg';
import './App.css';
import {
  
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Navbar from './Components/Navbar';
import Register from './pages/Register';
import Profile from './pages/Profile';

//toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminEditProduct from './pages/admin/AdminEditProduct';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import AdminOrders from './pages/admin/AdminOrders';
import Search from './pages/Search';
import ForgotPassword from './pages/ForgotPassword';
import UserRoute from './protected/UserRoute';
import AdminRoute from './protected/AdminRoute';



function App() {
  return (
   <Router>
    <Navbar/>
    <ToastContainer/>
    <Routes>
      <Route path ='/' element={<Homepage/>} />
      <Route path ='/about' element={<AboutUs/>} />
      <Route path ='/login' element={<Login/>} />
      <Route path ='/register' element={<Register/>} />
      <Route path ='/profile' element={<Profile/>}/>
      <Route path ='/cart' element={<Cart/>}/>
      <Route path='/myorders' element={<Orders/>}/>
      <Route path='/search/:query' element={<Search/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>

      <Route path ='/product/details/:id' element={<ProductDetails/>}/>



      {/*Admin route */ }
      <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
      <Route path ='/admin/edit/:id' element={<AdminEditProduct/>}/>
      <Route path='/admin/orders' element={<AdminOrders/>}/>

      <Route element= {<UserRoute/>}>
       <Route path ='/profile' element={<Profile/>}/>
       <Route path='/myorders' element={<Orders/>}/>
       <Route path ='/cart' element={<Cart/>}/>

      </Route>
      <Route element={<AdminRoute/>}>
      <Route path ='/profile' element={<Profile/>}/>
      <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
      <Route path ='/admin/edit/:id' element={<AdminEditProduct/>}/>
      <Route path='/admin/orders' element={<AdminOrders/>}/>

      </Route>
          <Route path ='*' element={<h1>404 Not found</h1>}/>

    </Routes>

   </Router>
  );
}

export default App;
