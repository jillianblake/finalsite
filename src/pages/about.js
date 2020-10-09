import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAbout from '../components/BannerAbout'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import pic11 from '../assets/images/pic11.jpg'
import pic12 from '../assets/images/pic12.jpg'


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
                    <header className="major">
                        <h2>We handle each case with compassion, diligence, and integrity.</h2>
                    </header>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Jillian Blake, Esq.</h3>
                            </header>
                            <p>Jillian Blake is an attorney and owner of Blake Immigration Law since 2015. She grew up in San Francisco, California and earned her bachelor’s degree in international studies from Johns Hopkins University and master’s degree in international relations from the Johns Hopkins School of Advanced International Studies (SAIS). She then obtained her law degree from the University of Michigan Law School. During law school she discovered her passion for immigration and asylum law while interning at Asylum Access—Ecuador and Capital Area Immigrants’ Rights (CAIR) Coalition. Jillian is a member of the Maryland State Bar and the American Immigration Lawyers Association (AILA). She is also currently an adjunct professor of immigration law at George Mason University Law School in Arlington, Virginia. In her free time Jillian enjoys watching movies, writing, watching Cleveland Browns football and Nationals baseball, and spending time with her dog, Cha Cha.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">E-mail Jillian</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Ami Patel, Esq.</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">E-mail Ami</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Jennifer Araujo</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">E-mail Jennifer</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                    <section>
                    <Link to="/generic" className="image">
                        <img src={pic11} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Karina Merchant</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">E-mail Karina</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
    <section>
                    <Link to="/generic" className="image">
                        <img src={pic12} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Jose Alvarado</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">E-mail Jose</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default About
