import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Home from './components/Home.jsx'
// import ScoreBoard from './components/ScoreBoard.jsx'
import Register from './components/Register.jsx'
import Product from './components/Product.jsx'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Admin from './components/Admin.jsx'
import Users from './components/Users.jsx'
import Orders from './components/Orders.jsx'
import Login from './components/Login.jsx'
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'
import Order from './components/Order.jsx'

function App() {
  return (
    <div className='App-container'>
<BrowserRouter>
    <h1 style={{ backgroundColor:"orange"}}>MERN FRONTEND</h1>
    <Link to="/">Home</Link>-
    <Link to="/cart">My Cart</Link>-
    <Link to="/order">My Orders</Link>-
    <Link to="/admin">Admin</Link>-
    <Link to="/login">Login</Link>
    <Routes>
      <Route index element={<Product/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="order" element={<Order/>}/>
      <Route path="admin" element={<Admin/>}>
        <Route index element={<Users/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="orders" element={<Orders/>}/>
      </Route>
    </Routes>
    <h3>This is footer</h3>
</BrowserRouter>

    </div>
  )
}

export default App
