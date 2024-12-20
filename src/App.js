import Nav from './components/Nav';
import Footer from './components/Footer'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books';
import BooksInfo from "./pages/BookInfo"
import { books } from "./data"
import Cart from './pages/Cart';


function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, book])
   }

  useEffect(() =>{
    console.log(cart);
  }, [cart])

  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books} />} />
      <Route path="/books/:id" render={() => <BooksInfo books={books} addToCart={addToCart}/>} />
      <Route path="/cart" render={() => <Cart books={books} />} />
      <Footer />
    </div>
    </Router>
  ); 
}

export default App;
