import React from 'react'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <>
      <div className="wrapper">

        <div className="hamburger" onclick="humburgerAction(this)">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <div id="sidebar" className="sidebar bg-dark">

          <div className="sidebar-heading">
            <div className="sidebar-logo text-danger">AD</div>
          </div>

          <div className="list-group list-group-flush">
            <NavLink
              to={'/'}
              className="list-group-item list-group-item-action bg-dark text-white"
            >
              Home
            </NavLink>

            <NavLink
              to={'/about'}
              className="list-group-item list-group-item-action bg-dark text-white"
            >
              About
            </NavLink>

            <NavLink
              to={'/resume'}
              className="list-group-item list-group-item-action bg-dark text-white"
            >
              Resume
            </NavLink>

            <NavLink
              to={'/portfolio'}
              className="list-group-item list-group-item-action bg-dark text-white"
            >
              Portfolio
            </NavLink>
          </div>

          <div className="contacts">
            <div className="contacts-heading text-white">
              Contact links
            </div>
            <div className="contact-links">
              <ul className="markers_social">

                <li className="social_icons">
                  <a href="https://github.com/JabroniHere" target="_blank" rel='noreferrer'>
                    <i className="fab fa-github-square social"></i>
                  </a>
                </li>

                <li className="social_icons">
                  <a href="https://discord.com/users/415110466315223041" target="_blank" rel='noreferrer'>
                    <i className="fab fa-discord social"></i>
                  </a>
                </li>

                <li className="social_icons">
                  <a href="https://t.me/dima_1582" target="_blank" rel='noreferrer'>
                    <i className="fab fa-telegram social"></i>
                  </a>
                </li>

              </ul>
            </div>
          </div>

          <div className="copyright text-white bg-danger">
            <div className="copyright-text">
              <p>COPYRIGHT © 2020</p>
              <p>ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
