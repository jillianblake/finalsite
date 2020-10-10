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
    
        <h3>Lists</h3>
                                <div className="grid-wrapper">
                                    <div className="col-6">

                                        <h4>Unordered</h4>
                                        <ul>
                                            <li>Dolor etiam magna etiam.</li>
                                            <li>Sagittis lorem eleifend.</li>
                                            <li>Felis dolore viverra.</li>
                                        </ul>

                                        <h4>Alternate</h4>
                                        <ul className="alt">
                                            <li>Dolor etiam magna etiam.</li>
                                            <li>Sagittis lorem eleifend.</li>
                                            <li>Felis feugiat viverra.</li>
                                        </ul>

                                    </div>
    </div>
    
        
    </Layout>
)

export default Services
