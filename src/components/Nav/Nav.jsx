import Nav from "react-bootstrap/Nav";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import Profile from "./Profile";
import Shop from "./Shop";
import ShoppingCart from "./ShoppingCart";

export default function NavBar(props) {
  const { form } = props;

  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(form);
  });

  const images = [
    "https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_960_720.jpg",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_640.jpg",
    "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_640.jpg",
    "https://images.unsplash.com/photo-1570993492903-ba4c3088f100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  ];
  
  const [counter, setCounter] = useState([0, 0, 0, 0, 0]);
  const [boolean,setBoolean] = useState([false,false,false,false,false])
  const prices = [700, 600, 800, 500, 300];

  const increase = (idx) => {
    const newCounter = [...counter];
    newCounter[idx] += 1;
    setCounter(newCounter);
  };
  const decrease = (idx) => {
    const newCounter = [...counter];
    if (newCounter[idx] > 0) {
      newCounter[idx] -= 1;
      setCounter(newCounter);
    }
  };
  const addtoCart=(idx)=>{
    const newCounter = [...counter];
    if(newCounter[idx]>0){
      const newBoolean = [...boolean];
      newBoolean[idx] = true;
      setBoolean(newBoolean)
    }
  }
  const removeFromCart=(idx)=>{
    const newCounter = [...counter];
    const newBoolean = [...boolean];
    newBoolean[idx] = false;
    newCounter[idx] = 0;
    setBoolean(newBoolean)
    setCounter(newCounter);
  }
  

  const data = {
    images: images,
    prices: prices,
    counter: counter,
    increase: increase,
    decrease: decrease,
    boolean:boolean,
    addtoCart:addtoCart,
    removeFromCart:removeFromCart,
  };

  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item className="nav-link">
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item className="nav-link">
          <Link to="/about">About</Link>
        </Nav.Item>
        <Nav.Item className="nav-link">
          <Link to="/contact">Contact</Link>
        </Nav.Item>
        {!user.length ? (
          <>
            <Nav.Item className="nav-link">
              <Link to="/register">Register</Link>
            </Nav.Item>
            <Nav.Item className="nav-link">
              <Link to="login">Login</Link>
            </Nav.Item>
          </>
        ) : (
          <>
            <Nav.Item className="nav-link">
              <Link to="/profile">
                {user.map((u) => {
                  return (
                    <i className="fa-solid fa-user" key={1}>
                      <span className="ms-2">
                        {u.name} {u.lastName}
                      </span>
                    </i>
                  );
                })}
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-link">
              <Link to="/shop">Shop</Link>
            </Nav.Item>
            <Nav.Item className="nav-link">
              <Link to="/shoppingCart">
                <i className="fa-solid fa-cart-shopping" key={2}></i>
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-link">
              <Link to="/" onClick={() => props.onClick()}>
                Logout
              </Link>
            </Nav.Item>
          </>
        )}
      </Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile form={form} />}></Route>
        <Route path="shop" element={<Shop data={data} />} />
        <Route path="shoppingCart" element={<ShoppingCart data={data} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
