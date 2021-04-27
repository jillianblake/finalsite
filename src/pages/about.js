import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAbout from '../components/BannerAbout'

import pic18 from '../assets/images/pic18.jpg'
import pic19 from '../assets/images/pic19.jpg'
import pic20 from '../assets/images/pic20.jpg'
import pic11 from '../assets/images/pic11.jpg'
import pic21 from '../assets/images/pic21.jpg'
import pic22 from '../assets/images/pic22.jpg'


const About = (props) => (
    <Layout>
        <Helmet>
            <title>About</title>
            <meta name="description" content="About Page" />
        </Helmet>

        <BannerAbout />

        <div id="main">
            <section id="one">
                <div className="inner">
                   
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/jillian" className="image">
                        <img src={pic18} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Jillian Blake, Esq.</h3>
                                <h4>Principal Attorney/Owner</h4>
                            </header>
                            <p></p>
                            <ul className="actions">
                                <li><a href="mailto:jillian@blakeimmigration.com" className="button fit">jillian@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/amelia" className="image">
                        <img src={pic19} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Amelia Wester, Esq.</h3>
                                <h4>Associate Attorney</h4>
                            </header>
                            <p> </p>
                            <ul className="actions">
                                <li><a href="mailto:amelia@blakeimmigration.com" className="button fit">amelia@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/jennifer" className="image">
                        <img src={pic20} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Jennifer Araujo</h3>
<h4>Senior Paralegal</h4>
                            </header>
                            <p></p>
                            <ul className="actions">
                                <li><a href="mailto:jennifer@blakeimmigration.com" className="button fit">jennifer@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                    <section>
                    <Link to="/karina" className="image">
                        <img src={pic11} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Karina Merchant</h3>
                            <h4>Senior Paralegal</h4>
                            </header>
                            <p></p>
                            <ul className="actions">
                           <li><a href="mailto:karina@blakeimmigration.com" className="button fit">karina@blakeimmigration.com</a></li>

                            </ul>
                        </div>
                    </div>
                </section>
    <section>
                    <Link to="/jose" className="image">
                        <img src={pic21} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Jose Alvarado</h3>
<h4>Paralegal</h4>
                            </header>
                            <p></p>
                            <ul className="actions">
                            <li><a href="mailto:jose@blakeimmigration.com" className="button fit">jose@blakeimmigration.com</a></li>

                            </ul>
                        </div>
                    </div>
                </section>
<section>
                    <Link to="/diana" className="image">
                        <img src={pic22} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Diana Maravilla</h3>
                                <h4>Receptionist/Administrative Assistant</h4>
                            </header>
                            <p> </p>
                            <ul className="actions">
                                <li><a href="mailto:diana@blakeimmigration.com" className="button fit">diana@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default About
