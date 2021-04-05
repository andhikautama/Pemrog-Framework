import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Televisi from "./container/Televisi/Televisi";
import Keranjang from "./container/Televisi/Keranjang";

function App() {
    return ( <
        Router >
        <
        div >

        <
        ul className = "menu" >
        <
        li >
        <
        Link to = "/" > < span > Home < /span></Link >
        <
        /li> <
        li >
        <
        Link to = "/list-product" > < span > List Produk < /span></Link >
        <
        /li> <
        li >
        <
        Link to = "/keranjang" > < span > Keranjang < /span></Link >
        <
        /li> <
        li >
        <
        Link to = "/about" > < span > About < /span></Link >
        <
        /li> <
        /ul>

        <
        Switch >
        <
        Route exact path = "/" >
        <
        Home / >
        <
        /Route> <
        Route path = "/list-product" >
        <
        Products / >
        <
        /Route> <
        Route path = "/keranjang" >
        <
        Keranjangs / >
        <
        /Route> <
        Route path = "/about" >
        <
        About / >
        <
        /Route> <
        /Switch> <
        /div> <
        /Router>
    );
}

function Home() {
    return ( <
        div >
        <
        center > < h2 > Selamat Datang di Toko Televisi! < /h2></center >
        <
        /div>
    );
}

const About = () => {
    return ( <
        div >
        <
        center > < h2 > Biodata < /h2></center >
        <
        section class = "home_banner_area" >
        <
        div class = "container box_1620" >
        <
        div class = "banner_inner d-flex align-items-center" >
        <
        div class = "banner_content" >
        <
        div class = "media" >
        <
        div class = "d-flex" >
        <
        img src = { require('./a.JPG') }
        width = "300"
        alt = "" > < /img> <
        /div> <
        div class = "media-body" >
        <
        div class = "personal_text" >
        <
        h3 > Andhika Utama < /h3> <
        h4 > Mahasiswa Politeknik Negeri Malang < /h4> <
        p > < /p> <
        ul class = "list basic_info" >
        <
        li > < a href = "#" > < i class = "lnr lnr-calendar-full" > < /i> 04 Agustus 2000</a > < /li> <
        li > < a href = "#" > < i class = "lnr lnr-envelope" > < /i> andhikautamaa04@gmail.com</a > < /li> <
        /ul> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /section> <
        /div>
    );
}

function Products() {
    return ( <
        div >
        <
        Televisi / >
        <
        /div>
    )
}

function Keranjangs() {
    return ( <
        div >
        <
        Keranjang / >
        <
        /div>
    )
}

export default App;