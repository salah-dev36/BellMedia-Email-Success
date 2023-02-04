import React from 'react'
import './header-styles.css'
import { ReactComponent  as Logo } from '../../assets/bell-media-logo.svg'

const Header = () => {
  return (
    <div className='header'>
        <Logo className='logo'/>
    </div>
  )
}

export default Header