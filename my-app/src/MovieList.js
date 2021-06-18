import React, { Component } from 'react'
import axios from 'axios';
import Loader from 'react-loader-spinner';
import List from './List';
export default class MovieList extends Component {
    
    constructor(props){
        super(props);
        this.state = {loading:true,
                    posters: []            
        };
    }

    componentDidMount(){
        this.getMovie();
    }
    getMovie = async (data)=> {
        const options = {
            method: 'GET',
            url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
            params: {i: 'tt4154796', r: 'json'},
            headers: {
              'x-rapidapi-key': '97e23a51dbmshed540b46acfc569p1d79e1jsn6ce35c70b7de',
              'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              var data = response.data;
              var temp = [];
              temp.append(data["Poster"])
            this.setState({posters:temp})
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    }


    render() {

        if(this.state.loading === true){
            this.getMovie()
            this.setState({loading:false});
        }
        return (
            <div>

                    {

                        this.state.loading ? 
                          <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                          />
                          
                        :
                        <List
                        movies={this.state.posters}
                        />
                           
                   }
                

            </div>
        )
    }
}
