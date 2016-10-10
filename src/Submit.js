import React, { Component } from 'react';

class Submit extends Component{
	render(){
		return(
			<input type="submit" value="Submit" onClick={this.props.onSubmit}/>
			);
	}
}

export default Submit;