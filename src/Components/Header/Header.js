import React from 'react'
import Search from './Search'
import './Header.css'

const Header = ({onSearch, onHome, onAbout}) => {
    return (
        <div className = 'header'>
            <div style = {{position: 'relative'}}>
                <div className = 'pagetitle' onClick = {onHome}>myAnimepedia</div>
            </div>
            <div style = {{position: 'relative'}}>
                <div className = 'about' onClick = {onAbout}>about</div>
            </div>
            <div>
                <Search onSearch = {onSearch} />
            </div>
        </div>
    )
}

export default Header
