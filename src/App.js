import React from 'react';
import './App.scss';
import Navbar from './navigation/Navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Services from './Pages/Services/Services';
import Products from './Pages/Products/Products';
import SignUp from './Pages/SignUp/SignUp';
import Footer from './navigation/Footer/Footer';

function App() {
   return (
      <Router>
         <Navbar />
         <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/products" component={Products} />
            {/*<Route path="/sign-up" component={SignUp} />*/}
         </Switch>
         <Footer />
      </Router>
   );
}

export default App;
