import React from 'react';

const copyrightYear = () => {
   let date = new Date(), year = date.getFullYear();
   return year;
}

const Footer = () => {
  let style = { 'margin': '10px', 'padding' : '8px', 'borderTop' : 'solid 3px #f1f2f3' }
  return(
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
       <p style={style}>&copy;&nbsp;MERN CRUD with Redux {copyrightYear()}.</p>
    </div>
  );
}

export default Footer;