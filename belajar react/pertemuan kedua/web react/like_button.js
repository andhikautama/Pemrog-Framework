// Starter Code
const e = React.createElement;

function LikeButton() {
    //display a "Like" <button>
    return e(
        'button', {
            onClick: () => alert('berhasil')
        },
        'Like'
    );


}

// const button=()=>{
// return <button>Like</button>
//}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);