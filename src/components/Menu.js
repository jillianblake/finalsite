import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">About Us</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/services">Services</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/testimonials">Testimonials</Link></li>
    <li><Link onClick={props.onToggleMenu} to="/victories">Victories</Link></li>
    <li><Link onClick={props.onToggleMenu} to="/social">Social Media</Link></li>
    <li><Link onClick={props.onToggleMenu} to="/contact">Contact Us</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="tel:7035947857" className="button special fit">Call Us (703) 594-7857</a></li>
                <li><a href="https://secure.lawpay.com/pages/blakeimmigration/trust" className="button fit">Pay Online</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
