import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerServices from '../components/BannerServices'

import pic08 from '../assets/images/pic13.jpg'
import pic09 from '../assets/images/pic14.jpg'
import pic10 from '../assets/images/pic15.jpg'

const Services= (props) => (
    <Layout>
        <Helmet>
            <title>Services</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerServices />

        

    </Layout>
)

export default Services
