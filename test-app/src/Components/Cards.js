import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import {Grid} from '@material-ui/core';

class CardImg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items:[],
            isLoaded:false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/recipes')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded:true,
                items:json,
            })
        })
    }

  render() {
    var { isLoaded, items} = this.state;

    if(!isLoaded) {
        return <div> ... Loading </div>;
    }

    else {
        return(
            <Grid Container spacing={4}>
                <Grid item md={12}>
                {items.map(item=>(
                   <ul key={item.uuid}>
                    <li>{item.title}</li>
                    <li>{item.description}</li>
                   </ul>
                   ))}
                </Grid>
            </Grid>
        )
    }
  }
}

export default CardImg;