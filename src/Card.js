import React, { Component } from 'react';

class Card extends Component{
  render(){
    return(
        <li>{this.props.content}</li>
      );
  }
}

export default Card;