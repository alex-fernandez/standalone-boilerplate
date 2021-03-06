import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout, onLogout } from '../actions/auth';


export const Header = ({ startLogout }) => (
   <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
         <h1>Platform Gov</h1>
        </Link>
        <button className="button button--no-bg-sd">Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
