import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import pic13 from '../assets/images/pic13.jpg'
import BannerServices from '../components/BannerServices'

const Services = (props) => (
    <Layout>
        <Helmet>
            <title>Services</title>
            <meta name="description" content="Services Page" />
        </Helmet>
    
<BannerServices />
    
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                     <h4>Removal Defense</h4>
                                <p><span className="image left"><img src={pic013} alt="" /></span>Asylum/Withholding of Removal</p>
    <h4>Humanitarian Visas</h4>
                                
                </div>
            </section>
        </div>

    </Layout>
)

export default Services
