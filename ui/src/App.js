import React, {Fragment, useEffect , useState,} from 'react'
import Header from "./components/Layout/Headers/Header.js";
import Home from './components/Layout/Home/Home.js';
import Footer from './components/Layout/Footer/Footer.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetails from './components/Layout/product/ProductDetails.js';
// import Products from './components/Layout/product/Products.js';
import Search from './components/Layout/product/Search.js'
import Products from './components/Layout/pro/Products.js';
import LoginSignUp from './components/Layout/user/LoginSignUp';
import Store from './Store.js';
import { loadUser } from './actions/userAction.js';
import UserOptions from './components/Layout/Headers/UserOptions';
import { useSelector } from "react-redux";
import Profile from './components/Layout/user/Profile';
import ProtectedRoute from './components/Layout/Route/ProtectedRoute'
// import UpdateProfile from './components/Layout/user/UpdateProfile';
// import UpdatePassword from './components/Layout/user/UpdatePassword'
import ForgotPassword from './components/Layout/user/ForgotPassword.js';
import ResetPassword from './components/Layout/user/ResetPassword.js';
import Cart from './components/Layout/Cart/Cart.js';
import Shipping from './components/Layout/Cart/Shipping.js';
import ConfirmOrder from './components/Layout/Cart/ConfirmOrder';
import NotFound from './components/Layout/NotFound/NotFound.js';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';
import Payment from './components/Layout/Cart/Payment.js';
// import { Router } from '@material-ui/icons';
import OrderSuccess from './components/Layout/Cart/OrderSuccess.js';
import MyOrders from './components/Layout/Order/MyOrders.js';
import OrderDetails from './components/Layout/Order/OrderDetails.js';
import Dashboard from './components/Layout/Admin/Dashboard';
import ProductList from "./components/Layout/Admin/ProductList";
import NewProduct from './components/Layout/Admin/NewProduct.js';
import UpdateProduct from './components/Layout/Admin/UpdateProduct.js';
import OrderList from './components/Layout/Admin/OrderList.js';
import ProcessOrder from './components/Layout/Admin/ProcessOrder.js';
import UsersList from './components/Layout/Admin/UsersList.js';
import UpdateUser from './components/Layout/Admin/UpdateUser.js';
import ProductReviews from './components/Layout/Admin/ProductReviews.js';

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    Store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  return (


    <Router>
    <Header />
    {isAuthenticated && <UserOptions user={user} />}
    {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )}
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path='/' component={Home} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path='/Products' component={Products} />
      <Route exact path="/search" component={Search} /> 
       <Route path="/Products/:keyword" component={Products} /> 
      <Route exact path="/login" component={LoginSignUp} /> 
        <ProtectedRoute exact path="/account" component={Profile} /> 
         {/* <ProtectedRoute exact path="/me/update" component={UpdateProfile} /> 
       <ProtectedRoute exactpath="/password/update"component={UpdatePassword}/>     */}
       <Route exact path="/password/forgot" component={ForgotPassword} />
       <Route exact path="/password/reset/:token" component={ResetPassword} />
       <Route exact path="/cart" component={Cart} />
       <ProtectedRoute exact path="/shipping" component={Shipping} />
       
      
       <ProtectedRoute exact path="/success" component={OrderSuccess} />
       <ProtectedRoute exact path="/orders" component={MyOrders} />

       <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />
       <ProtectedRoute exact path="/order/:id" component={OrderDetails} />
       <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />
        <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />
        <ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder} 
          />
           <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />
          <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />
        <ProtectedRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
        />
       <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
        

      </Switch>
      

    <Footer />
  </Router>



    
    
  )
}

export default App