import React, { Component } from 'react';
class Photo extends Component {
  constructor(props){
    super(props)
    this.state= {
      displayModal:false}
      }

  render() {
    const {title, farm, server ,id , secret } = this.props;
    const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}`;
    const photoUrl = `${url}.jpg`;
    const modalUrl =`${url}_b.jpg`;
    return (
      <div>
      <div className="photo-container">
          <img onClick={()=>this.setState({displayModal:true })}
          src={photoUrl} className="photo-item" alt={title}/>
      </div>
    {this.state.displayModal &&
      <div onClick={()=>this.setState({displayModal:false })}
           className="modal-space">

          <img src={modalUrl} className="modal-photo-item" alt={title}/>
       </div>}
       </div>
    );
  }
}

export default Photo;
