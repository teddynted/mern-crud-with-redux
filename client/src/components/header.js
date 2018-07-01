import React from "react";
import { Link, Route } from "react-router-dom";
import Entry from "./directory/entry";
import List from "./directory/list";
import Edit from "./directory/edit";

const Header = () => {
    return(
      <div className="col-lg-12 col-md-12">
          <div className="page-header">
              <h1>MERN CRUD with Redux</h1>
          </div>
          <Link className="btn btn-info" to="/">Listings</Link>&nbsp;
          <Link className="btn btn-info" to="/entry">Entry</Link>
          <Route exact path="/" component={List} />
          <Route path="/entry" component={Entry} />
          <Route path="/edit/:id" component={Edit} />
      </div>
    );
}

export default Header;