import React, {Component} from 'react';
import Gif from './gif.jsx';

// Destructuring
const GifsList = ({gifs, selectGif}) => {
    //console.log(props);
    return (
    <div className="gif-list">
      {gifs.map(({id}) => <Gif id={id} key={id} selectGif={selectGif} />)}
    </div>
    );
}

export default GifsList;
