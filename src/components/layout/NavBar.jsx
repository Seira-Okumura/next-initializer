import React, { Component } from "react";
import InfoIcon from '@material-ui/icons/InfoOutlined';
import Link from 'next/link';
import MailBoxIcon from '@material-ui/icons/MailOutline';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBIcon,
} from "mdbreact";

export default function Navbar() {
  return (
    <>
      <MDBNavbar expand="md">
        <MDBNavbarBrand>
          スマート選挙
        </MDBNavbarBrand>
        <MDBNavbarNav left>
          <MDBIcon icon="search" />
          <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <Link href="/user">
            <div className="notification">
              <PersonIcon />
              <span className="badge">1</span>
            </div>
          </Link>
          <Link href="/message">
            <div className="notification">
              <MailBoxIcon />
              <span className="badge">16</span>
            </div>
          </Link>
          <Link href="/info">
            <InfoIcon />
          </Link>
          <img src="https://i2.wp.com/is-factory.com/wp-content/uploads/2014/07/-2014-07-15-18.24.16-e1405421299511.jpg" width="30" height="30" />
        </MDBNavbarNav>
      </MDBNavbar>
      <style global jsx>{`
        .navbar {
          color: #333;
          background-color: #fff;
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 52px;
          z-index: 101;
          font-size: 14px;
          padding-right: 30px;
        }
        .navbar .MuiSvgIcon-root {
          font-size: 18px;
          margin: .4rem 20px .4rem .4rem;
        }
        .navbar-brand {
          font-size: 24px;
          width: 190px;
          margin: 0;
          text-align: center;
          padding-right: 1rem;
          margin-right: 2rem;
        }
        .navbar-nav input {
          height: 30px;
          width: 160px !important;
          background-color: #cfe2ff;
          border: none;
        }
        .fa.fa-search {
          padding-top: 0.7rem;
        }
        .navbar img {
          border-radius: 5px;
          width: 25px;
          height: 25px;
        }
        .notification {
          position: relative;
          display: inline-block !important;
        }
        .notification .badge {
          position: absolute;
          top: -3px;
          right: 6px;
          padding: 4px;
          border-radius: 50%;
          background: red;
          color: white;
          font-size: 10px;
          min-width: 2rem;
          height: 2rem;
          padding-top: 5px;
        }
      `}</style>
    </>
  );
}
