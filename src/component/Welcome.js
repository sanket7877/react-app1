import {Link, Route, Switch, useRouteMatch} from "react-router-dom";

export default function Welcome() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { path, url } = useRouteMatch();
    return (
        <div>
            <h3>Welcome to the nested world</h3>

            <Link to={`${url}/welcome`}>welcome</Link>
            <Switch>
                <Route path={`${path}/welcome`}><Welcome/></Route>
            </Switch>
        </div>
    );
}
