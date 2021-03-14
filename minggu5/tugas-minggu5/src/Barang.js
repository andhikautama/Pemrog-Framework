import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

export default function Barang() {
    return ( <
        Router >
        <
        div >
        <
        ul >
        <
        li >
        <
        Link to = "/erigo" > Erigo < /Link> <
        /li> <
        li >
        <
        Link to = "/zara" > Zara < /Link> <
        /li> <
        li >
        <
        Link to = "/uniqlo" > Uniqlo < /Link> <
        /li> <
        li >
        <
        Link to = "/screamous" > Screamous < /Link> <
        /li> <
        /ul> <
        hr / >

        <
        Switch >
        <
        Route path = "/erigo" >
        <
        Erigo / >
        <
        /Route> <
        Route path = "/zara" >
        <
        Zara / >
        <
        /Route> <
        Route path = "/uniqlo" >
        <
        Uniqlo / >
        <
        /Route> <
        Route path = "/screamous" >
        <
        Screamous / >
        <
        /Route> <
        /Switch> <
        /div> <
        /Router>
    );
}

function Erigo() {

    let { path, url } = useRouteMatch();
    return ( <
        div >
        <
        h2 > Erigo < /h2> <
        ul >
        <
        li >
        <
        Link to = { `${url}/Nouthern Navy, Custombike` } > Kaos < /Link> <
        /li> <
        li >
        <
        Link to = { `${url}/Idaena Kaeru` } > Jaket < /Link> <
        /li> <
        /ul>

        <
        Switch >
        <
        Route exact path = { path } >
        <
        h3 > Please select an item. < /h3> <
        /Route> <
        Route path = { `${path}/:topicId` } >
        <
        Topic / >
        <
        /Route> <
        /Switch> <
        /div>
    );
}

function Zara() {

    let { path, url } = useRouteMatch();
    return ( <
        div >
        <
        h2 > Zara < /h2> <
        ul >
        <
        li >
        <
        Link to = { `${url}/Basic Medium` } > Kaos < /Link> <
        /li> <
        li >
        <
        Link to = { `${url}/Cotton Jacket` } > Jaket < /Link> <
        /li> <
        /ul>

        <
        Switch >
        <
        Route exact path = { path } >
        <
        h3 > Please select an item. < /h3> <
        /Route> <
        Route path = { `${path}/:topicId` } >
        <
        Topic / >
        <
        /Route> <
        /Switch> <
        /div>
    );
}

function Uniqlo() {

    let { path, url } = useRouteMatch();
    return ( <
        div >
        <
        h2 > Uniqlo < /h2> <
        ul >
        <
        li >
        <
        Link to = { `${url}/Denim Oversized, Fine Cloth Dry` } > Kemeja < /Link> <
        /li> <
        li >
        <
        Link to = { `${url}/Kashiwa Sato` } > Kaos < /Link> <
        /li> <
        /ul>

        <
        Switch >
        <
        Route exact path = { path } >
        <
        h3 > Please select an item. < /h3> <
        /Route> <
        Route path = { `${path}/:topicId` } >
        <
        Topic / >
        <
        /Route> <
        /Switch> <
        /div>
    );
}

function Screamous() {

    let { path, url } = useRouteMatch();
    return ( <
        div >
        <
        h2 > Screamous < /h2> <
        ul >
        <
        li >
        <
        Link to = { `${url}/Tiny Crown` } > Hoodie < /Link> <
        /li> <
        li >
        <
        Link to = { `${url}/Hometown Pride, Scfolks` } > Kaos < /Link> <
        /li> <
        /ul>

        <
        Switch >
        <
        Route exact path = { path } >
        <
        h3 > Please select an item. < /h3> <
        /Route> <
        Route path = { `${path}/:topicId` } >
        <
        Topic / >
        <
        /Route> <
        /Switch> <
        /div>
    );
}

function Topic() {
    let { topicId } = useParams();

    return ( <
        div >
        <
        h3 > { topicId } < /h3> <
        /div>
    );
}