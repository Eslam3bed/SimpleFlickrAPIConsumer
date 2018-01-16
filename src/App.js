import React, { Component } from 'react';
import './App.css';
import Photo from './photo';
import flickrPhotos from './fetchPhotosPerPage';

class App extends Component {
  constructor(props){
    super(props)
    this.state= { photos : [] , page:0  }
  }
  fetchPhotosPerPage(page){
    flickrPhotos(page)
    .then(res=> res.json())
    .then(photos => {
      this.setState({
        photos:photos.photos.photo,
        page:photos.photos.page ,
        pages:photos.photos.pages})
    })
  }
componentDidMount(){
  this.fetchPhotosPerPage(this.state.page)
}

 page (n =0, searchText){
     this.fetchPhotosPerPage({page:this.state.page+n , searchText})
  }

  render() {
    return (
      <div className="App">

        <div className='gallary-header'>
          <input type='text' onKeyUp={(e)=> this.page(0,e.target.value)}
          className='search-box' placeholder='Search Through Flickr Photos'/>
        </div>

        <div className='gallary'>
        {this.state.photos.map((photo , id)=> (<Photo key={id} {...photo}/>))}
        </div>

        <div className='gallary-footer'>
          <span onClick={()=> this.page(-1)}><i className="fa fa-chevron-left page-nav" aria-hidden="true"></i></span>
          <span>{this.state.page}</span>
          <span onClick={()=>this.page(1)}><i className="fa fa-chevron-right page-nav" aria-hidden="true"></i></span>
        </div>
      </div>
    );
  }
}

export default App;
