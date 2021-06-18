import React, { Component } from 'react'

export default class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            movies : props.posters
        }
    }

    render() {
        return (
            <div>
                {this.state.movies.map((imgSrc, index) => (<img src={imgSrc.src} key={index}/>))}
            </div>
        )
    }
}
