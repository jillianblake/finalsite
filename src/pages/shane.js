import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic24 from '../assets/images/pic24.jpg'

const Shane = (props) => (
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
                    <p>Shane has been an associate attorney at Blake Immigration Law since 2021. He grew up outside of Dallas, Texas and earned his B.A. in political science and psychology from the University of North Texas. During college Shane helped coordinate the LGBT studies program and manage a research team focused on the mental health of LGBTQ people and those living with HIV/AIDS. He received his J.D. from George Mason University. During law school, he worked as an intern for the National Center for Lesbian Rights and the Capital Area Immigrants' Rights (CAIR) Coalition. Shane's interest in immigration came from growing up in Texas and focusing his studies on race, discrimination, and migration while in college. In his free time Shane enjoys playing video games, tabletop roleplaying games, and traveling. If you talk to him for too long, he will probably tell you that he is vegan.</p>
                    <i><p></p></i>
                </div>
            </section>
        </div>

    </Layout>
)

export default Shane
