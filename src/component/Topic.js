import React from "react";

import {useParams} from "react-router-dom"


export default function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();

    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}


// class Topic extends React.Component{
//     render() {
//
//         return(
//
//             <div>
//                 <h3>hello nice to meet you</h3>
//             </div>
//         );
//     }
// }
//
// export default Topic;
