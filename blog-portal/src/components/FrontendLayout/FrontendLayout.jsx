import React from "react";
import "../../assets/frontend/css/bootstrap.min.css";
import { Link, Outlet } from "react-router-dom";
import { UnAuthenticatedRoutesNames } from "../../utilities/util.constant";

function FrontendLayout(){
    return (
        <>
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to={UnAuthenticatedRoutesNames.Home}>
                Home
              </Link>
              <Link className="navbar-brand" to={UnAuthenticatedRoutesNames.Login}>
                Login
              </Link>
            </div>
  
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
               <li></li>
              </ul>
            </div>
          </div>
        </nav>
  
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Outlet />
            </div>
  
            <div className="col-md-4">
              <div className="well">
                <h4>Blog Search</h4>
                <div className="input-group">
                  <input type="text" className="form-control" />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <span className="glyphicon glyphicon-search"></span>
                    </button>
                  </span>
                </div>
              </div>
  
              <div className="well">
                <h4>Blog Categories</h4>
                <div className="row">
                  <div className="col-lg-12">
                    <ul className="list-unstyled">
                     <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <hr />
  
          <footer>
            <div className="row">
              <div className="col-lg-12">
                <p>Copyright &copy; Your Website 2014</p>
              </div>
            </div>
          </footer>
        </div>
      </>
    )
};

export default FrontendLayout;