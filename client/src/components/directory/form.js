import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Formik, Field, Form } from 'formik';
import Yup from 'yup';
import { updateDirectoryEntry, newDirectoryEntry } from '../../actions/index';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Business name is required!'),
    description: Yup.string().required('Business description is required!'),
    phone: Yup.string().required('Phone is required!'),
    email_address: Yup.string().email('Invalid email address!').required('Email address is required!'),
    physical_address: Yup.string().required('Physical address is required!'),
});

class form extends Component {
   constructor(props){
      super(props);
      this.state = { id: typeof this.props.row._id !== 'undefined' ? this.props.row._id : '', name: typeof this.props.row.name !== 'undefined' ? this.props.row.name : '', description: typeof this.props.row.description !== 'undefined' ? this.props.row.description : '', phone: typeof this.props.row.phone !== 'undefined' ? this.props.row.phone : '', email_address: typeof this.props.row.email_address !== 'undefined' ? this.props.row.email_address : '', physical_address: typeof this.props.row.physical_address !== 'undefined' ? this.props.row.physical_address : '', redirect: false }
   }
   async createUpdateRecord(values){
      let results;
      if( this.props.mode === 'edit' ) {
        results = await this.props.updateDirectoryEntry(values);
        if( results.payload.data.response === 'success' ) {
            this.setState({ redirect: true });
        } else {
            console.log(results.payload.data.response);
        }
      } else {
        results = await this.props.newDirectoryEntry(values);
        if( results.payload.data.response === 'success' ) {
            this.setState({ redirect: true });
        } else {
            console.log(results.payload.data.response);
        }
      }
   }
   render(){
      if( this.state.redirect ) {
          return (
            <Redirect to="/" />
          );
      }
      return(
         <div>
           <Formik
             initialValues={{
               name: this.state.name,
               description: this.state.description,
               phone: this.state.phone,
               email_address: this.state.email_address,
               physical_address: this.state.physical_address,
               id: this.state.id
             }}
             validationSchema={validationSchema}
             onSubmit={ values => {
                this.createUpdateRecord(values);
             }}
             render={({ errors, touched }) => (
               <Form>
                 <div className="row">
                   <div className="col-lg-12 col-md-12">
                   <h2>{ this.props.mode === 'edit' ? 'Edit Entry' : 'New Entry' }</h2>
                   </div>
                 </div> 
                 <div className="row">
                   <div className={`form-group col-md-6 ${errors.name && touched.name && 'has-error'}`}>
                     <label htmlFor="name">Business Name</label>
                     <Field name="name" className="form-control" placeholder="Business Name" type="text" />
                      { errors.name && touched.name && <span className="help-block">{errors.name}</span> }
                   </div>
                   <div className={`form-group col-md-6 ${errors.description && touched.description && 'has-error'}`}>
                     <label htmlFor="description">Business Description</label>
                     <Field name="description" className="form-control" placeholder="Business Description" type="text" />
                      { errors.description && touched.description && <span className="help-block">{errors.description}</span> }
                   </div>
                 </div>
                 <div className="row">
                   <div className={`form-group col-md-6 ${errors.phone && touched.phone && 'has-error'}`}>
                     <label htmlFor="phone">Phone</label>
                     <Field name="phone" className="form-control" placeholder="Phone" type="text" />
                      { errors.phone && touched.phone && <span className="help-block">{errors.phone}</span> }
                   </div>
                   <div className={`form-group col-md-6 ${errors.email_address && touched.email_address && 'has-error'}`}>
                     <label htmlFor="email_address">Email Address</label>
                     <Field name="email_address" className="form-control" placeholder="Email Address" type="text" />
                      { errors.email_address && touched.email_address && <span className="help-block">{errors.email_address}</span> }
                   </div>
                 </div>
                 <div className="row">
                   <div className={`form-group col-md-12 ${errors.physical_address && touched.physical_address && 'has-error'}`}>
                     <label htmlFor="physical_address">Physical Address</label>
                     <Field name="physical_address" className="form-control" placeholder="Physical Address" type="text" />
                      { errors.physical_address && touched.physical_address && <span className="help-block">{errors.physical_address}</span> }
                   </div>
                 </div> 
                 <div className="row">
                   <div className="col-lg-12 col-md-12">
                      <button type="submit" className="btn btn-primary">Submit</button>
                   </div>
                 </div>
               </Form>
             )} />
         </div>
      );
   }
}

const mapStateToDispatch = (dispatch) => {
  return bindActionCreators({ updateDirectoryEntry, newDirectoryEntry }, dispatch);
};

export default connect(null, mapStateToDispatch)(form);