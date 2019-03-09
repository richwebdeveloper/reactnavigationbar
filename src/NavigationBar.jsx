import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';


class NavigationBar extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <div>
              <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <div className="container-fluid">
                  <NavLink className="navbar-brand" exact to="/" >React Navbar</NavLink>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="nav navbar-nav">
                      <li className="nav-item">
                        <NavLink className="nav-link" exact to="/" >Home</NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-link" exact to="/dashboard" >Dashboard</NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-link" exact to="/about-us" >About Us</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="content">
              <Switch>
                <Route path="/" component={Home} exact />  
                <Route path="/dashboard" component={Dashboard} exact />
                <Route path="/about-us" component={AboutUs} exact />
              </Switch>
            </div>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default NavigationBar;
