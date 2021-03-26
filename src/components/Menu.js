import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">About Us <i>Acerca de</i></Link></li>
                <li><Link onClick={props.onToggleMenu} to="/services">Services<i>Servicios</i></Link></li>
                <li><Link onClick={props.onToggleMenu} to="/testimonials">Testimonials<i>Testimonios</i></Link></li>
    <li><Link onClick={props.onToggleMenu} to="/victories">Victories<i>Victorias</i></Link></li>
    <li><Link onClick={props.onToggleMenu} to="/social">Social Media<i>Redes Sociales</i></Link></li>
    <li><Link onClick={props.onToggleMenu} to="/contact">Contact Us<i>Contacto</i></Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="tel:7035947857" className="button special fit">Call Us (703) 594-7857</a></li>
                <li><a href="https://secure.lawpay.com/pages/blakeimmigration/trust" className="button special fit">Pay Online</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
