import React, { Component, Fragment } from 'react';
import {BrowserRouter, Link, Route,Switch} from "react-router-dom"
import Writers from './Writers'
import {NotFound} from './Errors'

export default class extends Component {
    constructor(props){
        super(props)
        this.state={
            writers:[]
        }
    }
async componentDidMount() {
    const writers = await (await fetch('https://sleepy-beach-45496.herokuapp.com/writers?_embed=texts')).json()
    this.setState({writers})
}

 render(){
        const {writers}=this.state;
        console.log()
     return <BrowserRouter>
         <Fragment>
          <ul>
              <li>
                 <Link to="/">
                     Home
                 </Link>
              </li>
              <li>
                  <Link to="/writers">
                      Writers
                  </Link>
              </li>
          </ul>
             <hr/>
             <Switch>
             <Route exact path="/" render={()=><div>Home</div>} />
             <Route path="/writers" render={
                 props=><Writers {...props} writers={writers}/>
             } />
             <Route component={NotFound} />
             </Switch>
         </Fragment>
     </BrowserRouter>
 }
     }



