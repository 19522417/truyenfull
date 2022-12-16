import React from 'react'
import "../css/Header.css";

export default function Header() {
  return (
    <header className="header">
        <h1 className="logo"><a href="./">TRUYENfull</a></h1>
        <nav>
            <ul className="main-nav">
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                <li><span href="#" className="user-name">Hello, Truc</span></li>
                <li><a href="/">Sign out</a></li>
            </ul>
        </nav>
    </header>
  )
}
