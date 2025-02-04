import React from 'react'
import './MyProjects.css'
import firstprj from '../../image/food_del.png'
import secondprj from '../../image/big_basket.png'
const MyProjects = () => {
  return (
    <div className='projectcontainer'>
      <h1>Featured Projects</h1>
      <div className='firstprj'>
        <div className='prjinfo'>
        <h3>Online Food Odering App </h3>
        <ul>
            <li>User sign-up/login using JWT Authentication</li>
            <li>Display food items with images, descriptions, and prices</li>
            <li>Search & filter functionality</li>
            <li>Add/remove items from the cart</li>
            <li>Secure payment using Stripe</li>
            <li>Admin panel to Add/update/delete food items</li>
        </ul>
        <p>A MERN stack food delivery app enables users to browse restaurants, add food items to a cart, and place orders with secure payments. Key features include user authentication, live order status tracking, payment integration with Stripe, and an admin panel for managing orders and food items. Built with React.js (frontend), Node.js & Express.js (backend), and MongoDB (database), it supports JWT authentication, Redux for state management. The app offers a seamless user experience with real-time notifications and a mobile-friendly UI.</p>
        <a href='https://frontend-5e9v.onrender.com'><button>Check It Out</button></a>
        </div>
       <img src={firstprj} alt='img'></img>
      </div>
      


      <div className='secondprj'>
      <img src={secondprj} alt='img'></img>
        <div className='prjinfo'>
        <h3>Needs Grocery App</h3>
        <ul>
            <li>User roles: Customers, Admins</li>
            <li>Category-based filtering (Fruits, Vegetables, Dairy, Snacks)</li>
            <li>Cart updates with real-time price calculation with Offers and discount</li>
            <li>Manage oredrs through admin panel</li>
            
        </ul>
        <p>A MERN stack grocery app allows users to browse products, add items to a cart, and place orders. Key features include user authentication, product filtering, real-time order tracking, and an admin panel for managing orders. Built with React.js for frontend, local json server as backend database, it supports  Redux for state management.</p>
        <a href='https://github.com/kausik11/needs-grocery-app.git'><button>Check It Out</button></a>
        </div>
       
      </div>
    </div>
  )
}

export default MyProjects
