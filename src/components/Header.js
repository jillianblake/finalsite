import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import icon from '../assets/images/website-icon.png'

const Header = (props) => (
    <header id="header" className="alt">
         <img src={icon} alt="" />
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
