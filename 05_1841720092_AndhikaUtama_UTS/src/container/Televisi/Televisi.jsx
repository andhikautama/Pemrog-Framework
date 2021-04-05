import React, { Component } from "react";
import './Televisi.css';
import Post from "../../component/Televisi/Post";
import PostKeranjang from "../../component/Televisi/PostKeranjang";

class Televisi extends Component {
    state = {
        listTelevisi: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/televisi')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listTelevisi: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleGetTelevisi = data => {
        fetch(`http://localhost:3001/televisi/${data}`, { method: "GET" })
            .then(response => response.json())
            .then(res => {
                // this.handleUpdateList(data, res);
                var dataTelevisi = { ...this.state.insertKeranjang };
                dataTelevisi["id"] = res["id"];
                dataTelevisi["nama"] = res["nama"];
                dataTelevisi["harga"] = res["harga"];
                dataTelevisi["stok"] = res["stok"];
                dataTelevisi["qty"] = 1;
                this.setState({
                    insertKeranjang: dataTelevisi
                });
            })
            .then(() => {
                this.handleCekKeranjang(data);
            })
            .then(() => {
                this.handleTombolSimpan();
            });
    };

    handleCekKeranjang = data => {
        fetch(`http://localhost:3002/keranjang/${data}`, { method: "GET" }).then(
            response => {
                if (response.ok) {
                    response.json().then(res => {
                        this.handleUpdateKeranjang(data, res);
                        this.ambilDataDariServerAPI();
                    });
                } else {
                    this.handleTombolSimpan();
                }
            }
        );
    };

    handleUpdateKeranjang = (data, res) => {
        fetch(`http://localhost:3002/keranjang/${data}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: res["id"],
                nama: res["nama"],
                harga: res["harga"],
                stok: res["stok"],
                qty: res["qty"] + 1
            })
        });
    };

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/keranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-televisi">
                {
                /* <div className="form pb-2 border-bottom">
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div> */}
                <center><h2>Daftar Barang</h2></center>
                <div className="tgh">
                    {
                        this.state.listTelevisi.map(televisi => {
                            return (
                                <Post
                                    key={televisi.id}
                                    id={televisi.id}
                                    nama={televisi.nama}
                                    harga={televisi.harga}
                                    gambar={televisi.gambar}
                                    stok={televisi.stok}
                                    tambahTelevisi={this.handleGetTelevisi} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Televisi;