import React from 'react'
import pic17 from '../assets/images/pic17.jpg'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
    <img src={pic17} width="100" height="25" alt="" />
    

            <header className="major">
                <h1>Hello, welcome to Blake Immigration Law.</h1>
            </header>
            <div className="content">
                <p>WE SPECIALIZE IN REMOVAL DEFENSE, ASYLUM, AND FAMILY-BASED IMMIGRATION.</p>
                <ul className="actions">
                    <li><a href="tel:7035947857" className="button next scrolly">Call Us (703) 594-7857</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
