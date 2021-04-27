import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic22 from '../assets/images/pic22.jpg'

const Diana= (props) => (
    <Layout>
        <Helmet>
            <title>Diana Maravilla</title>
            <meta name="description" content="Diana Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Diana Maravilla</h1>
    <h3>Receptionist/Administrative Assistant</h3>
                    </header>
                    <img src={pic22} alt="" />
                    <p> </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Diana
