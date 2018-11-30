import React, {Component} from 'react';

class Search extends Component{

  handleUpdate = (event) => {
    this.props.searchfunction(event.target.value);
  }
  render(){
    return(
    <input type="text" className="form-controle form-search" onChange={this.handleUpdate}/>
    )
  };

}

export default Search
