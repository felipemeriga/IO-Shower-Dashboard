import React from "react";
import {inject, observer} from "mobx-react";
import {Redirect, Route} from "react-router-dom";
import {TOKEN_KEY} from "./stores/SessionStore";
import getAuthToken from "./stores/SessionStore";

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

  isAuthenticated = () => {
    let currentState = {
      isAuthenticated: false,
      loading: true
    };
    localStorage.removeItem(TOKEN_KEY);
    console.log(localStorage.getItem(TOKEN_KEY));
    if (localStorage.getItem(TOKEN_KEY) !== null) {
      console.log("aee");
      currentState.isAuthenticated = true;
      currentState.loading = false;
      this.changeState(currentState);
    } else {
      getAuthToken().then((token) => {
        debugger;
        console.log("Entrou aqui!");
        debugger;
        console.log(token);
        if (token.data === "") {
          console.log("return false");
          currentState.isAuthenticated = false;
        } else {
          console.log("return true");
          localStorage.setItem(TOKEN_KEY, token);
          currentState.isAuthenticated = true;
        }
        currentState.loading = false;
        this.changeState(currentState);
      }).catch((err) => {
        console.log(err);
        currentState.isAuthenticated = false;
        currentState.loading = false;
        this.changeState(currentState);
      })
    }
  };

  componentWillMount() {
    this.isAuthenticated();
  }

  changeState = (result) => {
    this.setState({
      loading: result.loading,
      isAuthenticated: result.isAuthenticated
    })
  };

  render() {
    const {component: Component, ...rest} = this.props;
    console.log("rendering");
    return (
      <Route
        {...rest}
        render={props =>
          this.state.isAuthenticated ? (
            <Component {...props} />
          ) : (
            this.state.loading ? (
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
