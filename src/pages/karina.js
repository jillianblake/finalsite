import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Karina= (props) => (
    <Layout>
        <Helmet>
            <title>Karina</title>
            <meta name="description" content="Kafina Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Karina Merchant</h1>
    <h3>Senior Paralegal</h3>
                    </header>
                    <img src={pic11} alt="" />
                    <p>Karina is a senior paralegal at Blake Immigration Law and has worked at the firm since 2017. She was born in Chihuahua, Mexico and immigrated to the United States with her family at the age of five. She then grew up in northern Virginia. Karina obtained her an associate’s degree from Northern Virginia Community College and is working towards her bachelor’s degree at George Mason University. Karina became interested in immigration law when she worked as an administrative assistant at another immigration law office and volunteered for the CARA Family Detention Protect. She feels humbled by the trust immigrants put in her to share their stories, especially about hardships they have endured. She enjoys the moment when she can see the direct impact her work has had on a client’s life because they have been able to gain legal status. She also really enjoys spending time with her dog, Stella.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Karina
