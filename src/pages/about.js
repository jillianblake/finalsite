import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAbout from '../components/BannerAbout'

import pic18 from '../assets/images/pic18.jpg'
import pic19 from '../assets/images/pic19.jpg'
import pic20 from '../assets/images/pic20.jpg'
import pic11 from '../assets/images/pic11.jpg'
import pic21 from '../assets/images/pic21.jpg'


const About = (props) => (
    <Layout>
        <Helmet>
            <title>About</title>
            <meta name="description" content="About Page" />
        </Helmet>

        <BannerAbout />

        <div id="main">
            <section id="one">
                <div className="inner">
                   
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/jillian" className="image">
                        <img src={pic18} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Jillian Blake, Esq.</h3>
                                <h4>Principal Attorney/Owner</h4>
                            </header>
                            <p>Jillian is an attorney and owner of Blake Immigration Law since 2015. The firm was originally founded as Blake & Wilson Immigration Law with partner Nicole Wilson and became Blake Immigration Law in 2020. Jillian grew up in San Francisco, California and earned her bachelor’s degree in international studies from Johns Hopkins University and master’s degree in international relations from the Johns Hopkins School of Advanced International Studies (SAIS). She then obtained her law degree from the University of Michigan Law School. During law school she discovered her passion for immigration and asylum law while interning at Asylum Access—Ecuador and Capital Area Immigrants’ Rights (CAIR) Coalition. Jillian is a member of the Maryland State Bar and the American Immigration Lawyers Association (AILA). She is also currently an adjunct professor of immigration law at George Mason University Law School in Arlington, Virginia. Jillian enjoys working in immigration law because she is able to meet people from all over the world and help families stay together. In her free time Jillian enjoys watching movies, writing, watching Cleveland Browns football and Nationals baseball, and spending time with her dog, Cha Cha.</p>
                            <ul className="actions">
                                <li><a href="mailto:jillian@blakeimmigration.com" className="button fit">jillian@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/ami" className="image">
                        <img src={pic19} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Ami Patel, Esq.</h3>
                                <h4>Associate Attorney</h4>
                            </header>
                            <p>Ami is an associate attorney at Blake Immigration Law. She has worked at the firm since 2018, starting as a law graduate clerk and becoming an associate attorney in 2019. Ami grew up in Louisville, Kentucky and earned her bachelor’s degree in international relations and affairs from American University. She then obtained her law degree from George Washington University Law School. During law school she participated in the George Washington University Law School Immigration Clinic. She also interned at the Open Society Institute in Cambodia, the American Immigration Council, and the American Bar Association. As the daughter of immigrants, Ami loves that her work helps others find safety in the United States. Ami is a member of the California State Bar and the American Immigration Lawyers Association (AILA). In her free time Ami likes to read, hike, and seek out new restaurants.</p>
                            <ul className="actions">
                                <li><a href="mailto:ami@blakeimmigration.com" className="button fit">ami@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/jennifer" className="image">
                        <img src={pic20} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Jennifer Araujo</h3>
<h4>Senior Paralegal</h4>
                            </header>
                            <p>Jennifer is a senior paralegal at Blake Immigration Law and has worked at the firm since 2017. She was born and raised in northern Virginia and earned her bachelor’s degree in political science from the Pennsylvania State University. During college she studied abroad in Barcelona, Spain. Jennifer currently attends law school part-time at the University of the District of Columbia (UDC) David A. Clarke School of Law. Jennifer also volunteers at the UDC Immigration and Human Rights Legal Clinic processing applications for adjustment of status and conducting legal research. She is passionate about helping immigrants obtain legal status in the United States and likes interacting with people from different cultural backgrounds. In her free time Jennifer enjoys spending time with her family and baking cakes.</p>
                            <ul className="actions">
                                <li><a href="mailto:jennifer@blakeimmigration.com" className="button fit">jennifer@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                    <section>
                    <Link to="/karina" className="image">
                        <img src={pic11} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Karina Merchant</h3>
                            <h4>Senior Paralegal</h4>
                            </header>
                            <p>Karina is a senior paralegal at Blake Immigration Law and has worked at the firm since 2017. She was born in Chihuahua, Mexico and immigrated to the United States with her family at the age of five. She then grew up in northern Virginia. Karina obtained her an associate’s degree from Northern Virginia Community College and is working towards her bachelor’s degree at George Mason University. Karina became interested in immigration law when she worked as an administrative assistant at another immigration law office and volunteered for the CARA Family Detention Protect. She feels humbled by the trust immigrants put in her to share their stories, especially about hardships they have endured. She enjoys the moment when she can see the direct impact her work has had on a client’s life because they have been able to gain legal status. She also really enjoys spending time with her dog, Stella.</p>
                            <ul className="actions">
                           <li><a href="mailto:karina@blakeimmigration.com" className="button fit">karina@blakeimmigration.com</a></li>

                            </ul>
                        </div>
                    </div>
                </section>
    <section>
                    <Link to="/jose" className="image">
                        <img src={pic21} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Jose Alvarado</h3>
<h4>Paralegal</h4>
                            </header>
                            <p>Jose is a paralegal at Blake Immigration Law and recently joined the firm in 2020. Jose was born in El Salvador and came to the United States with his family when he was eight years old. Jose earned his associate’s degree from Northern Virginia Community College and graduated with his bachelor’s degree in public administration from George Mason University. Jose interned at Just Neighbors, a non-profit organization that provides legal services to immigrants and worked at Grace Ministries, another non-profit organization that provides low-income immigrants with food and clothing. During college he was a member of Mason DREAMers, a student group that aids undocumented students in reaching their educational goals. Jose enjoys working in immigration law because he wants to help immigrants achieve their goals without fear of deportation. As a DACA recipient and first-generation college graduate himself, he knows how hard immigrants work to achieve their ambitions even with the obstacles they face. In his free time Jose likes to read, dance, and spend time with his pets. He and his family care for four dogs, one cat, and four birds.</p>
                            <ul className="actions">
                            <li><a href="mailto:jose@blakeimmigration.com" className="button fit">jose@blakeimmigration.com</a></li>

                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default About
