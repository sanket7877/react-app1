import React, {Component} from 'react';
import './App.css';
import InstructorApp from "./component/InstructorApp";
import RouteConfigExample from "./component/InstructorApp";
import {Route, Switch, BrowserRouter as Router, Link} from "react-router-dom";
import NotFound from "./component/NotFound";
import NestingExample from "./component/InstructorApp";
import Topics from "./component/Topics";
import HOme from "./component/HOme";


class   App extends React.Component{
    render() {
        return(
            <Router>
                <div style={{width: 1000, margin: '0 auto'}}>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/topics'>Topics</Link></li>
                    </ul>

                    <hr />
                    <Switch>
                    <Route exact path='/' > <HOme/></Route>
                    <Route path='/topics' component={Topics} />
                        <Route path="*">
                            <NotFound/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
// export default function   App() {
//   return(
//       <div className="container">
//           <>
//               <Switch>
//                   <Route exact path="/" component={NestingExample}/>
//                   <Route path="*"  component={NotFound}/>
//               </Switch>
//           </>
//       </div>
//   );
//   }



