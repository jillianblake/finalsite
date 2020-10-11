import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerContact from '../components/BannerContact'

const Contact = (props) => (
    <Layout>
        <Helmet>
            <title>Services</title>
            <meta name="description" content="Services Page" />
        </Helmet>
    
<BannerContact />
   
 
                

        
    </Layout>
)

export default Contact
