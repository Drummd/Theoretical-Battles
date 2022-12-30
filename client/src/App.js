import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Universe from './pages/Universe';
import Battle from './pages/Battle';
import Footer from './pages/Footer';
import LoginForm from "./components/LoginForm/Login"

const httpLink = createHttpLink({
  uri: '/graphql',
});

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
          <Navigation />
          <Routes>
            <Route path="/LoginForm" 
              element={<LoginForm />} />
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/Universe"
              element={<Universe />}
            />
            <Route
              path="/Battle"
              element={<Battle />}
            />
            <Route
              path='*'
              element={<h1>Wrong page!</h1>}
            />
          </Routes>
          <Footer/>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
