import React, {Component} from 'react';
import GifsList from './gifs-list.jsx';
import Search from './search.jsx';
import Gif from './gif.jsx';
import giphy from 'giphy-api';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null//"xT9IgDEI1iZyb2wqo8"
    }
  }

  search = (query) => {
    giphy ("K0OEARN25AQCKlv3ov5POW2yuk5zWnro").search({
        q: query,
    },
    (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render(){
    return(
    <div>
      <div className="left-scene">
        <Search searchfunction={this.search}/>
        <div className="selected-gif">
          <Gif id={this.state.selectedGifId}/>
        </div>
      </div>
      <div className="right-scene">
        <GifsList gifs= {this.state.gifs} selectGif={this.selectGif}/>
      </div>
    </div>
  )};
}

export default App;
