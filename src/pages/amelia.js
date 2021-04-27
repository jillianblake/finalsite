import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic19 from '../assets/images/pic19.jpg'

const Amelia = (props) => (
    <Layout>
        <Helmet>
            <title>Ami</title>
            <meta name="description" content="Ami Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Amelia Wester, Esq.</h1>
    <h3>Associate Attorney</h3>
                    </header>
                    <img src={pic19} alt="" />
                    <p> </p>
                    
                </div>
            </section>
        </div>

    </Layout>
)

export default Amelia
