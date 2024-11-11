import Nav from './components/Nav';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books';
import BooksInfo from "./pages/BookInfo"
import { books } from "./data"


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books} />} />
      <Route path="/books/1" render={() => <BooksInfo books={books} />} />
      <Footer />
    </div>
    </Router>
  ); 
}

export default App;
