import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Title from './Header/Title';
import Nav from "./Header/Nav";
import Posts from "./Body/Posts";
import signup from './signup/signup';
import PostDetails from "./Body/PostDetails";
import axios from "axios";
class App extends Component {
  state = { 
    data: []
  }
  componentDidMount() {
    axios.get("/data")
      .then((res) => {
        this.setState({
          data: [...res.data]
        })
      })
  }
  render() {
  const {data}=this.state
    
    return (
      <div>
        <Title data={data}/>
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/Signup" component={signup}/>
        </Switch>
      </div>
    );
  }
}
export default App;


