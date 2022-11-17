import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import Products from './pages/Products';
import Order from './pages/Order';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Evsr from './pages/Products/Evsr';
import H2p from './pages/Products/H2p';
import How2 from './pages/Products/How2';
import Wdb from './pages/Products/Wdb';
import Jsb from './pages/Products/Jsb';
import Js10 from './pages/Products/Js10';
import Hcfull from './pages/Products/Hcfull';
import Hc30 from './pages/Products/Hc30';
import Hcb from './pages/Products/Hcb';
import Pfull from './pages/Products/Pfull';
import P30 from './pages/Products/P30';
import Mdbb from './pages/Products/Mdbb';
import Efull from './pages/Products/Efull';
import R60 from './pages/Products/R60';
import Nfull from './pages/Products/Nfull';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/me" element={<Profile />} />
            <Route path="/users/:id" element={<Profile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/Evsr" element={<Evsr />} />
            <Route path="/product/H2p" element={<H2p />} />
            <Route path="/product/How2" element={<How2 />} />
            <Route path="/product/Wdb" element={<Wdb />} />
            <Route path="/product/Jsb" element={<Jsb />} />
            <Route path="/product/Js10" element={<Js10 />} />
            <Route path="/product/Hcfull" element={<Hcfull />} />
            <Route path="/product/Hc30" element={<Hc30 />} />
            <Route path="/product/Hcb" element={<Hcb />} />
            <Route path="/product/Pfull" element={<Pfull />} />
            <Route path="/product/P30" element={<P30 />} />
            <Route path="/product/Mdbb" element={<Mdbb />} />
            <Route path="/product/Efull" element={<Efull />} />
            <Route path="/product/R60" element={<R60 />} />
            <Route path="/product/Nfull" element={<Nfull />} />
          </Routes>
          <Footer />
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
