import React, { Component } from "react";
import './Televisi.css';
import PostKeranjang from "../../component/Televisi/PostKeranjang";

class Televisi extends Component {
    state = {
        listKeranjang: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3002/keranjang')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listKeranjang: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

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
        var no = 0;
        var total = 0;
        return (
            <div className="post-televisi">
                {
                /* <div className="form pb-2 border-bottom">
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div> */}
                <center><h2>Keranjang</h2></center>
                <div className="tgh">
                    <table border="1" cellpadding="5" width="100%">
                        <tr>
                            <th align="center">No</th>
                            <th align="center">ID Produk</th>
                            <th align="left">Nama</th>
                            <th align="center">Harga</th>
                            <th align="center">Qty</th>
                            <th align="center">Subtotal</th>
                        </tr>
                        {
                            this.state.listKeranjang.map(televisi => {
                                no += 1;
                                total+=televisi.harga*televisi.qty
                                return (
                                    <PostKeranjang
                                        no={no}
                                        key={televisi.id}
                                        id={televisi.id}
                                        nama={televisi.nama}
                                        harga={televisi.harga}
                                        gambar={televisi.gambar}
                                        stok={televisi.stok}
                                        qty={televisi.qty}
                                        tambahTelevisi={this.handleGetTelevisi} />
                                )
                            })
                        }
                        <tr>
                            <td colspan="5" align="right">Total : </td>
                            <td align="center">{total}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Televisi;