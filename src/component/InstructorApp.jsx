import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import HOme from "./HOme";
import Topics from "./Topics";

class  NestingExample extends React.Component {


    render() {
        return (
            <>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>

                    <hr/>

                    <Switch>
                        <Route exact path="/">
                            <HOme/>
                        </Route>
                        <Route path="/topics" render={(props)=>
                            <Topics{...props} />}/>
                    </Switch>
                </div>
            </>
        );
    }
}
export default NestingExample;

// function Home() {
//     return (
//         <div>
//             <h2>Home</h2>
//         </div>
//     );
// }

// function Topics() {
//     // The `path` lets us build <Route> paths that are
//     // relative to the parent route, while the `url` lets
//     // us build relative links.
//     let { path, url } = useRouteMatch();
//
//     return (
//         <div>
//             <h2>Topics</h2>
//             <ul>
//                 <li>
//                     <Link to={`${url}/rendering`}>Rendering with React</Link>
//                 </li>
//                 <li>
//                     <Link to={`${url}/components`}>Components</Link>
//                 </li>
//                 <li>
//                     <Link to={`${url}/props-v-state`}>Props v. State</Link>
//                 </li>
//             </ul>
//
//             <Switch>
//                 <Route exact path={path}>
//                     <h3>Please select a topic.</h3>
//                 </Route>
//                 <Route path={`${path}/:topicId`}>
//                     <Topic />
//                 </Route>
//             </Switch>
//         </div>
//     );
// }



// function Topic() {
//     // The <Route> that rendered this component has a
//     // path of `/topics/:topicId`. The `:topicId` portion
//     // of the URL indicates a placeholder that we can
//     // get from `useParams()`.
//     let { topicId } = useParams();
//
//     return (
//         <div>
//             <h3>{topicId}</h3>
//         </div>
//     );
// }


// class InstructorApp extends Component {
//     render() {
//         return (
//             <Router>
//                 <>
//                     <h1>Instructor Application</h1>
//                     <Switch>
//                         <Route path="/" exact component={ListCoursesComponent} />
//                         <Route path="/courses" exact component={ListCoursesComponent} />
//                         <Route path="/courses/:id" component={CourseComponent} />
//                     </Switch>
//                 </>
//             </Router>
//         )
//     }
// }
//
// export default InstructorApp

