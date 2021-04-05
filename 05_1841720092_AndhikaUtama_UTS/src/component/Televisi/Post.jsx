import React from "react";

const Post = (brg) => {
    return (

        <div className="televisi">
            <div className="konten-televisi">
                <div className="gambar-televisi"><img src={brg.gambar} width="150" height="150" alt="" /></div>
                <div className="isi-televisi">
                    ID : {brg.id}<br />
                    Nama : {brg.nama}<br />
                    Harga : {brg.harga}<br />
                    Stok : {brg.stok}
                </div>
                <button className="btn btn-sm btn-warning" onClick={brg.tambahTelevisi.bind(this, brg.id)}>Beli</button>
            </div>
        </div>

    )
}

export default Post;