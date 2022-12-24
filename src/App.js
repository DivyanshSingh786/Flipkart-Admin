import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Routes,
  Route
} from "react-router-dom";
import { getInitialData, isUserLoggedIn } from './actions';
import './App.css';
import PrivateRoute from './components/HOC/PrivateRoute';
import Category from './containers/Category';
import Home from './containers/Home';
import Orders from './containers/Orders';
import Page from './containers/Page';
import Products from './containers/Products';
import Signin from './containers/Signin';
import Signup from './containers/Signup';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  // componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if(auth.authenticate){
      dispatch(getInitialData());
    }
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Routes>
        <Route exact
          path="/"
          element={
            <PrivateRoute>
              <ErrorBoundary>
              <Home />
              </ErrorBoundary>
            </PrivateRoute>
          }
        />
        <Route exact
          path="/page"
          element={
            <PrivateRoute>
              <ErrorBoundary>
              <Page />
              </ErrorBoundary>
            </PrivateRoute>
          }
        />
        <Route exact
          path="/category"
          element={
            <PrivateRoute>
              <ErrorBoundary>
              <Category />
              </ErrorBoundary>
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ErrorBoundary>
              <Products />
              </ErrorBoundary>
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <ErrorBoundary>
              <Orders />
              </ErrorBoundary>
            </PrivateRoute>
          }
        />

        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        {/* <Route exact path="/uploadimage" element={<UploadFile />} /> */}
      </Routes>
    </div>
  );
}

export default App;
