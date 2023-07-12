
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Pages/Home/Home';
import DNPInfo from './Pages/InfoEntry/DNPInfo';
import BookInfo from './Pages/Admin/Books/BookInfo';
import UpdateBookInfo from './Pages/Admin/Books/UpdateBookInfo';
import RequireAuth from './Pages/Login/RequireAuth';
import DNPReports from './Pages/Reports/DNPReports';
import DNPReportsList from './Pages/Reports/DNPReportsList';
import CollectionReports from './Pages/Reports/CollectionReports';
import KWReport from './Pages/Reports/KWReport';
import MyBill from './Pages/Users/MyBill';
import Login from './Pages/Login/Login';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import Users from './Pages/Admin/Users/Users';
import AddUser from './Pages/Admin/Users/AddUser';
import Books from './Pages/Admin/Books/Books';
import Offices from './Pages/Admin/Offices/Offices';
import SignUP from './Pages/Login/SignUP';
import Profile from './Pages/Admin/Users/Profile';
import Posting from './Pages/Admin/Users/Posting';
import Loading from './Pages/Shared/Loading';
import { useEffect, useState } from 'react';
import KWInfo from './Pages/InfoEntry/KWInfo';
import BillImport from './Pages/Import/BillImport';
import UserLogin from './Pages/Users/UserLogin';
import SignUp from './Pages/Users/SignUp';
import ConsumerImport from './Pages/Import/ConsumerImport';
import ForgotPassword from './Pages/Users/ForgotPassword';
import ArrearImport from './Pages/Import/ArrearImport';



function App() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Check if a token exists in localStorage or sessionStorage
    const storedToken = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
    }
  }, [localStorage.getItem('token')]);
  return (
    <>
      <div className="page-wrapper bg-gra-02  font-poppins">
        <Header></Header>
        <Routes>
          <Route path="/" element={< Home />}></Route>
          <Route path="/dnp-info" element={<RequireAuth><DNPInfo /></RequireAuth>}></Route>
          <Route path="/kw-info" element={<RequireAuth><KWInfo /></RequireAuth>}></Route>
          <Route path="/book-info" element={<RequireAuth><BookInfo /></RequireAuth>}></Route>
          <Route path="/books/:id" element={<RequireAuth><UpdateBookInfo /></RequireAuth>}></Route>
          <Route path="/collection-info-report" element={<RequireAuth><CollectionReports /></RequireAuth>}></Route>
          <Route path="/kw-sales-info-report" element={<RequireAuth><KWReport /></RequireAuth>}></Route>
          <Route path="/dnp-info-report" element={<RequireAuth><DNPReports /></RequireAuth>}></Route>
          <Route path="/dnp-report" element={<RequireAuth><DNPReportsList /></RequireAuth>}></Route>
          {
            (user?.role == 'officeHead' || user?.role == 'zonalAdmin' || user?.role == 'pbsAdmin' || user?.role == 'admin') ? <>
              <Route path="/users" element={<RequireAuth><Users /></RequireAuth>}></Route>
              <Route path="/books" element={<RequireAuth><Books></Books></RequireAuth>}></Route>
            </> : ""
          }
          <Route path="/importBill" element={<RequireAuth><BillImport /></RequireAuth>}></Route>
          <Route path="/importConsumer" element={<RequireAuth><ConsumerImport /></RequireAuth>}></Route>
          <Route path="/importArrear" element={<RequireAuth><ArrearImport /></RequireAuth>}></Route>
          {/* <Route path="/users" element={<Users />}></Route> */}

          <Route path="/offices" element={<RequireAuth><Offices></Offices></RequireAuth>}></Route>
          <Route path="/addUser" element={<RequireAuth><AddUser /></RequireAuth>}></Route>
          <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>}></Route>
          <Route path="/posting/:id" element={<RequireAuth><Posting /></RequireAuth>}></Route>
          <Route path="/users/mybill" element={<MyBill />}></Route>
          {/* <Route path="/login" element={<Login />}></Route> */}
          <Route path="/userLogin" element={<UserLogin />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          {/* <Route path="/signup" element={<SignUP />}></Route> */}
        </Routes>
        <Footer></Footer>
      </div >
      <ToastContainer />
    </>
  );
}

export default App;
