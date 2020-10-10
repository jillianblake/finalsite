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
    
   
    
        
    </Layout>
)

export default Services
