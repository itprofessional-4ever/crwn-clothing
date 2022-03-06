import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../src/pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { authentication } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = authentication.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'> 
      <Header currentUser={this.state.currentUser} />
       <Switch> 
         <Route exact path='/' component={HomePage} />
         <Route path='/shop' component={ShopPage} />
         <Route path='/signin' component={SignInAndSignUpPage} />
       </Switch>
     </div>
   )
  }  
}

export default App;
