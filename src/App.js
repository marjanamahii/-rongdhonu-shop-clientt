import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Orders from './components/Orders/Orders'
import Shipping from './components/Shipping/Shipping';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import AddReview from './components/Dashboard/AddReview/AddReview';
import ManageUsers from './components/Dashboard/ManageUsers/ManageUsers';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DashboardHome from './components/Dashboard/DashboardHome/DashBoardHome';
import Home from './components/Home/Home/Home';
import Payment from './components/Dashboard/Payment/Payment';
import Register from './components/Register/Register';
import AddProducts from './components/Dashboard/AddProducts/AddProducts';
import ManageOrders from './components/Dashboard/ManageOrders/ManageOrders';

function App() {
  return (
    <div>

      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/home" exact element={<Home />}>
            </Route>
            <Route path="/shop" element={<Shop />}>
            </Route>
            <Route path="/orderreview" element={<OrderReview />}>
            </Route>
            <Route path="/contact" element={<Contact />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route path="/placeorder" element={<PlaceOrder />}>
            </Route>
            <Route path="/shipping" element={<Shipping />}>
            </Route>
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }>
              <Route path="/dashboard/addreview" element={<AddReview />} />
              <Route path="/dashboard/manageusers" element={<ManageUsers />} />
              <Route path="/dashboard/payment/:productId" element={<Payment />} />
              <Route path="/dashboard/makeadmin" element={<MakeAdmin />} />
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="/dashboard/manageorders" element={<ManageOrders />} />
              <Route path="/dashboard/addproducts" element={<AddProducts />} />
              {/* <Route path="/dashboard/manageprojects" element={<AdminRoute><ManageProjects /></AdminRoute>} /> */}
              {/* <Route path="/dashboard/managereviews" element={<AdminRoute><ManageReviews /></AdminRoute>} /> */}
              {/* <Route path="/dashboard/manageteam" element={<AdminRoute><ManageTeam /></AdminRoute>} /> */}
              {/* <Route path="/dashboard/manageservices" element={<AdminRoute><ManageServices /></AdminRoute>} /> */}

              {/* <Route path="/dashboard/addreview" element={<AddReview />} /> */}
              {/* <Route path="/dashboard/addblog" element={<AdminRoute><AddBlogs /></AdminRoute>} /> */}
              <Route path="/dashboard/myorders" element={<Orders />} />

            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
