import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteDirectoryEntry, directoryList } from '../../actions/index';
import { Link } from "react-router-dom";

class List extends Component {
   constructor(props){
     super(props);
     this.state = { list: [] };
     this.confirmDelete = this.confirmDelete.bind(this);
   }
   async getAList() {
     let results = await this.props.directoryList();
     this.setState({ list : results.payload.data });
   }
   componentDidMount(){
     this.getAList();
   }
   async confirmDelete(e){
     if ( window.confirm('Are you sure you wish to delete this item?') ) {
          let results = await this.props.deleteDirectoryEntry(e.target.id);
          if( results.payload.data.response === 'success' ) {
              this.getAList();
          }
     }
   }
   displayAList(){
     if( Object.keys(this.state.list).length > 0 ) {
         const row = this.state.list.map( ( item, i ) => {
            let rowNumber = i + 1;
            return <tr key={i}><th scope="row">{rowNumber}</th><td>{item.name}</td><td>{item.description}</td><td>{item.phone}</td><td>{item.email_address}</td><td>{item.physical_address}</td><td><Link className="btn btn-warning" to={"/edit/"+item._id}>Edit</Link>&nbsp;<Link id={item._id} onClick={this.confirmDelete} className="btn btn-danger" to="/">Delete</Link></td></tr>
         });
         return (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Edit / Delete</th>
                </tr>
              </thead>
              <tbody>
                { row }
              </tbody>
            </table>
         );
     } else {
         return <p><em>There are no listings at the moment.</em></p>;
     }
   }
   render(){
      return(
        <div className="col-lg-12 col-md-12">
          <h2>Listings</h2>
          { this.displayAList() }
        </div> 
      );
   }
}

const mapStateToDispatch = (dispatch) => {
  return bindActionCreators({ directoryList, deleteDirectoryEntry }, dispatch);
};

export default connect(null, mapStateToDispatch)(List);