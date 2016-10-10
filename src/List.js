import React,{Component} from 'react';
import Card from './Card';
import Input from './Input';
import Submit from './Submit';

class List extends Component{


  render(){
   return(
      <div>
        <p>{this.props.title}</p>
        <ul>
        { 
          this.props.cards.map((card)=>{
            return <Card content={card} />
          })
        }
        </ul>
        <form>
            <Input onChange={this.props.onChange}/>
            <Submit onSubmit={this.props.onSubmit}/>
        </form>
      </div>
    );
  }
}

export default List;