import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerGallery from '../components/BannerGallery'

import pic26 from '../assets/images/pic26.jpg'
import pic28 from '../assets/images/pic28.jpg'


const About = (props) => (
    <Layout>
        <Helmet>
            <title>Victory Gallery</title>
            <meta name="description" content="Victory Gallery" />
        </Helmet>

        <BannerGallery />

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
                                <h3>Cancellation of Removal, Arlington Immigration Court (2022)</h3>
                                <i><h3>Cancelación de Deportación, Corte de Inmigración de Arlington(2022)</h3></i>
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
                                <h3>Adjustment of Status, Arlington Immigration Court (2022)</h3>
                                <i><h3>Ajuste de Estatus, Corte de Inmigración de Arlington(2022)</h3></i>
                            </header>
                         
                        </div>
                    </div>
                </section>

            </section>
        </div>

    </Layout>
)

export default Gallery
