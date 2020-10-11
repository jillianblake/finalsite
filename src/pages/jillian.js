import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic08 from '../assets/images/pic08.jpg'

const Jillian = (props) => (
    <Layout>
        <Helmet>
            <title>Jillian</title>
            <meta name="description" content="Jillian Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Jillian Blake, Esq.</h1>
                    </header>
                    <span className="image main"><img src={pic08} alt="" /></span>
                    <p>Jillian Blake is an attorney and owner of Blake Immigration Law since 2015. She grew up in San Francisco, California and earned her bachelor’s degree in international studies from Johns Hopkins University and master’s degree in international relations from the Johns Hopkins School of Advanced International Studies (SAIS). She then obtained her law degree from the University of Michigan Law School. During law school she discovered her passion for immigration and asylum law while interning at Asylum Access—Ecuador and Capital Area Immigrants’ Rights (CAIR) Coalition. Jillian is a member of the Maryland State Bar and the American Immigration Lawyers Association (AILA). She is also currently an adjunct professor of immigration law at George Mason University Law School in Arlington, Virginia. In her free time Jillian enjoys watching movies, writing, watching Cleveland Browns football and Nationals baseball, and spending time with her dog, Cha Cha.</p>
                    
                </div>
            </section>
        </div>

    </Layout>
)

export default Jillian
