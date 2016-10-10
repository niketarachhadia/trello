import React,{Component} from 'react';
 
 class Input extends Component{
 	render(){
 		return(
 			<input type="text" onChange={this.props.onChange} />
 		);
 	}
 }

 export default Input;