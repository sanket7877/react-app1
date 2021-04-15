import React from "react";
import {Link, Route, Switch,useRouteMatch} from "react-router-dom";
import Topic from "./Topic";
import Welcome from "./Welcome";



export default  function Topics() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
                <li>
                    <Link to={`${url}/welcome`}>welcome</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                {/*<Route path={`${path}/:topicId`}>*/}
                {/*    <Topic />*/}
                {/*</Route>*/}

                <Route path={`${path}/welcome`}><Welcome/></Route>
            </Switch>
        </div>
    );
}


// class Topics extends React.Component{
//
//
//     constructor(props) {
//         super(props);
//         this.state={
//                 path:this.props.match.path,
//                 url:this.props.match.path
//         }
//     }
//
//     render() {
//
//
//
//         console.log(this.state.path);
//         console.log(this.state.url);
//         return(
//
//             <div>
//                 <h2>Topics</h2>
//                 <ul>
//                     <li>
//                         <Link to={`${this.state.url}/rendering`}>Rendering with React</Link>
//                     </li>
//                     <li>
//                         <Link to={`${this.state.url}/components`}>Components</Link>
//                     </li>
//                     <li>
//                         <Link to={`${this.state.url}/props-v-state`}>Props v. State</Link>
//                     </li>
//                 </ul>
//
//                 <Switch>
//                     <Route exact path={this.state.url}>
//                         <h3>Please select a topic.</h3>
//                     </Route>
//                     <Route path={`${this.state.url}/components`}>
//                         <Topic />
//                     </Route>
//                 </Switch>
//             </div>
//
//         );
//     }
// }
//
// export default Topics;
