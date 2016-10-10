import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContainer from './ListContainer'

class Board extends Component {
  render() {
    
      return (
      <div>
            <p>{this.props.title}</p>
            {
            this.props.lists.map((list ,i)=>{
             let key = Object.keys(list)[0];
            return <ListContainer title={key} cards={list[key]} />;
        })
      }
      </div>
    );
  }
}

export default Board;
