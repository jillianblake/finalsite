import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic09 from '../assets/images/pic10.jpg'

const Jennifer = (props) => (
    <Layout>
        <Helmet>
            <title>Jennifer</title>
            <meta name="description" content="Jennifer Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Jennifer Araujo</h1>
    <h3>Senior Paralegal</h3>
                    </header>
                    <img src={pic09} alt="" />
                    <p> Jennifer is a senior paralegal at Blake Immigration Law and has worked at the firm since 2017. She was born and raised in northern Virginia and earned her bachelor’s degree in political science from the Pennsylvania State University. During college she studied abroad in Barcelona, Spain. Jennifer currently attends law school part-time at the University of the District of Columbia (UDC) David A. Clarke School of Law. Jennifer also volunteers at the UDC Immigration and Human Rights Legal Clinic processing applications for adjustment of status and conducting legal research. She is passionate about helping immigrants obtain legal status in the United States and likes interacting with people from different cultural backgrounds. In her free time Jennifer enjoys spending time with her family and baking cakes.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Jennifer
