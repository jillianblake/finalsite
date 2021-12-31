import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic24 from '../assets/images/pic24.jpg'

const Shane= (props) => (
    <Layout>
        <Helmet>
            <title>Shane</title>
            <meta name="description" content="Shane Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Shane Ivey, Esq.</h1>
    <h3>Associate Attorney</h3>
                    </header>
                    <img src={pic24} alt="" />
                    <p>Content English</p>
    <i><p>Content Spanish</p></i> 
            
    </div>
            </section>
        </div>

    </Layout>


export default Shane
