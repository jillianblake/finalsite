import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAbout from '../components/BannerAbout'

import pic26 from '../assets/images/pic26.jpg'
import pic28 from '../assets/images/pic28.jpg'
import pic29 from '../assets/images/pic29.jpg'
import pic30 from '../assets/images/pic30.jpg'
import pic31 from '../assets/images/pic31.jpg'
import pic32 from '../assets/images/pic32.jpg'



const About = (props) => (
    <Layout>
        <Helmet>
            <title>About</title>
            <meta name="description" content="Victory Gallery" />
        </Helmet>

        <BannerAbout />

        <div id="main">
            <section id="one">
                <div className="inner">
                   
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/gallery" className="image">
                        <img src={pic26} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Cancellation of Removal, Arlington (2022)</h3>
                                <i><h3>Cancelación de Deportación, Arlington (2022)</h3></i>
                            </header>
                      
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/gallery" className="image">
                        <img src={pic28} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Adjustment of Status (Residency), Arlington (2022)</h3>
                                <i><h3>Ajuste de Estatus (Residencia), Arlington (2022)</h3></i>
                            </header>
                            
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/gallery" className="image">
                        <img src={pic29} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Asylum, Arlington (2022)</h3>
                                <i><h4>Asilo, Arlington (2022)</h4></i>
                            </header>
                            
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/gallery" className="image">
                        <img src={pic30} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                               <h3>Adjustment of Status (Residency), Arlington (2021)</h3>
                                <i><h3>Ajuste de Estatus (Residencia), Arlington (2021)</h3></i>
                            </header>
                          
                        </div>
                    </div>
                </section>
                    <section>
                    <Link to="/gallery" className="image">
                        <img src={pic31} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Humanitarian Asylum, Arlington (2021)</h3>
                            <i><h3>Asilo Humanitario, Arlington (2021)</h3></i>
                            </header>
                           
                        </div>
                    </div>
                </section>

<section>
                    <Link to="/gallery" className="image">
                        <img src={pic32} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                               <h3>Adjustment of Status (Residency), Arlington (2021)</h3>
                                <i><h3>Ajuste de Estatus (Residencia), Arlington (2021)</h3></i>
                            </header>
                            
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default About
