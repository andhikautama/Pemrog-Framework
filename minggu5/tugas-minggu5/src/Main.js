import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import App from "./App";
import Barang from "./Barang";
import About from "./About";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return ( <
            HashRouter >
            <
            div >
            <
            h1 className = "title" > Baju Merk di Malang < /h1> <
            h3 className = "subtitle" > Penggila Baju Merk Wajib Mampir! < /h3> <
            ul className = "header" >
            <
            li > < NavLink to = "/" > App < /NavLink></li >
            <
            li > < NavLink to = "/barang" > Brand < /NavLink></li >
            <
            li > < NavLink to = "/about" > About Store < /NavLink></li >
            <
            li > < NavLink to = "/contact" > Contact < /NavLink></li >
            <
            /ul> <
            div className = "content" >
            <
            Route exact path = "/"
            component = { App }
            /> <
            Route exact path = "/barang"
            component = { Barang }
            /> <
            Route path = "/about"
            component = { About }
            /> <
            Route path = "/contact"
            component = { Contact }
            /> <
            /div> <
            /div> <
            /HashRouter>
        );
    }
}

export default Main;