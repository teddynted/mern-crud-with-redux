import React, { Component } from 'react';
import Form from './form';

class Entry extends Component {
  constructor(props){
     super(props);
     this.state = { data: null };
  }
  render(){
    return(
      <div className="col-lg-12 col-md-12">
        <Form mode="new" row="[]" />
      </div>
    );
  }
}

export default Entry;