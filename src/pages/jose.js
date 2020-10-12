import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic12 from '../assets/images/pic12.jpg'

const Jose= (props) => (
    <Layout>
        <Helmet>
            <title>Jose</title>
            <meta name="description" content="Jose Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Jose Alvarado</h1>
    <h3>Senior Paralegal</h3>
                    </header>
                    <img src={pic12} alt="" />
                    <p>Jose is a paralegal at Blake Immigration Law and recently joined the firm in 2020. Jose was born in El Salvador and came to the United States with his family when he was eight years old. Jose earned his associate’s degree from Northern Virginia Community College and graduated with his bachelor’s degree in public administration from George Mason University. Jose interned at Just Neighbors, a non-profit organization that provides legal services to immigrants and worked at Grace Ministries, another non-profit organization that provides low-income immigrants with food and clothing. During college he was a member of Mason DREAMers, a student group that aids undocumented students in reaching their educational goals. Jose enjoys working in immigration law because he wants to help immigrants achieve their goals without fear of deportation. As a DACA recipient and first-generation college graduate himself, he knows how hard immigrants work to achieve their ambitions even with the obstacles they face. In his free time Jose likes to read, dance, and spend time with his pets. He and his family care for four dogs, one cat, and four birds.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Jose
