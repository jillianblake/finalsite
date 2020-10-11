import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic09 from '../assets/images/pic09.jpg'

const Ami = (props) => (
    <Layout>
        <Helmet>
            <title>Ami</title>
            <meta name="description" content="Ami Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Ami Patel, Esq.</h1>
    <h3>Associate Attroney</h3>
                    </header>
                    <img src={pic09} alt="" />
                    <p>Ami Patel is an associate attorney at Blake Immigration Law. She has worked at the firm since 2018, starting as a law graduate clerk and becoming an associate attorney in 2019. Ami grew up in Louisville, Kentucky and earned her bachelor’s degree in international relations and affairs from American University. She then obtained her law degree from George Washington University Law School. During law school she participated in the George Washington University Law School Immigration Clinic. She also interned at the Open Society Institute in Cambodia, the American Immigration Council, and the American Bar Association. As the daughter of immigrants, Ami loves that her work helps others find safety in the United States. Ami is a member of the California State Bar and the American Immigration Lawyers Association (AILA). In her free time Ami likes to read, hike, and seek out new restaurants.</p>
                    
                </div>
            </section>
        </div>

    </Layout>
)

export default Ami
