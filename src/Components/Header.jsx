import React from 'react'
import {Link} from 'react-router-dom';
import HeaderStyle from './Header.module.css'

const Header = () => {
  return (
    <header>
    <div className={HeaderStyle.top}>
        <Link to= '/' className={HeaderStyle.link}>Home</Link>
        <Link to= '/posts' className={HeaderStyle.link}>Post</Link>
    </div>
    </header>
  )
}

export default Header
