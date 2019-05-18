import React from "react";
import {inject, observer} from "mobx-react";
import {Redirect, Route} from "react-router-dom";
import {TOKEN_KEY} from "./stores/SessionStore";

// This way of doing was changed because of the async method of getting the token
/*
const PrivateRoute = inject("sessionStore")(observer(({sessionStore, component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      sessionStore.isAuthenticated() ?
        <Component {...props} />
        :
        <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
    }
  />
)));

export default PrivateRoute;
*/

class PrivateRoute extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isAuthenticated: false
    }
  }

  componentWillMount() {
    localStorage.removeItem(TOKEN_KEY);
    console.log(localStorage.getItem(TOKEN_KEY));



  }

  render() {
    const {component: Component, ...rest} = this.props;
    console.log("rendering");
    return (
      <Route
        {...rest}
        render={props =>
          this.props.sessionStore.authenticated ? (
            <Component {...props} />
          ) : (
            this.props.sessionStore.loading ? (
              <div className="animated fadeIn pt-1 text-center">Loading...</div>
            ) : (
              <Redirect to={{pathname: '/login', state: {from: this.props.location}}}/>
            )
          )
        }
      />
    )
  }

}

export default inject('sessionStore')(observer(PrivateRoute))
