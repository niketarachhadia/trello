import React, { Component} from 'react';
import List from './List';

class ListContainer extends Component{
	
	constructor(props){
		super(props);
		
		this.state={
					textInput:'',
					cards:this.props.cards	
					}
	}
	onAddInputChanged(){
    console.log("Input change!!");
  }
  onAddSubmit(event){
    event.preventDefault();
    console.log("form submitted!!");
  }
	render(){
		return(
		<List cards={this.state.cards} onSubmit={this.onAddSubmit.bind(this)} onChange={this.onAddInputChanged.bind(this)}/>
		);
	}
}
export default ListContainer;