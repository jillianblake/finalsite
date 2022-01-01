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
import pic22 from '../assets/images/pic22.jpg'
import pic25 from '../assets/images/pic25.jpg'


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
                            <p>Jillian has been an attorney at Blake Immigration Law since 2015. She grew up in San Francisco, California and earned her B.A. and M.A. in international relations from Johns Hopkins University. She received her J.D. from the University of Michigan Law School. <a href="https://blakeimmigration.netlify.app/jillian/">Read more about Jillian...</a></p>
    <i><p>Jillian ha sido abogada en Blake Immigration Law desde 2015. Creció en San Francisco, California y obtuvo su B.A. y M.A. en relaciones internacionales de la Universidad Johns Hopkins. Obtuvo su J.D. de la Facultad de Derecho de la Universidad de Michigan. <a href="https://blakeimmigration.netlify.app/jillian/">Leer más sobre Jillian ...</a></p></i>
                            <ul className="actions">
                                <li><a href="mailto:jillian@blakeimmigration.com" className="button fit">jillian@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/amelia" className="image">
                        <img src={pic19} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Amelia Wester, Esq.</h3>
                                <h4>Associate Attorney</h4>
                            </header>
                            <p> Amelia has been an attorney at Blake Immigration Law since 2021. She grew up outside of Cleveland, Ohio and earned her B.A. in international studies and Latin American studies from Miami University. She received her J.D. from Case Western Reserve University School of Law. <a href="https://blakeimmigration.netlify.app/amelia/">Read more about Amelia...</a></p>
                            <i><p>Amelia ha sido abogada en Blake Immigration Law desde 2021. Creció en el norte de Ohio y obtuvo su B.A. en estudios internacionales y estudios latinoamericanos de la Universidad de Miami. Obtuvo su J.D. de la Facultad de Derecho de la Universidad Case Western Reserve. <a href="https://blakeimmigration.netlify.app/amelia/">Leer más sobre Amelia ...</a></p></i>
                            <ul className="actions">
                                <li><a href="mailto:amelia@blakeimmigration.com" className="button fit">amelia@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/shane" className="image">
                        <img src={pic25} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Shane Ivey, Esq.</h3>
                                <h4>Associate Attorney</h4>
                            </header>
                            <p> Shane has been an attorney at Blake Immigration Law since 2021. He grew up outside of Dallas, Texas and earned his B.A. in political science and psychology from the University of North Texas. He received his J.D. from George Mason University.<a href="https://blakeimmigration.netlify.app/shane/">Read more about Shane...</a></p>
                            <i><p>Shane ha sido abogado en Blake Immigration Law desde 2021. Creció cerca de Dallas, Texas y obtuvo su B.A. en ciencias politicas y psicología de la Universidad del Norte de Texas. Obtuvo su J.D. de la Facultad de Derecho de la Universidad George Mason.<a href="https://blakeimmigration.netlify.app/shane/">Leer más sobre Shane ...</a></p></i>
                            <ul className="actions">
                                <li><a href="mailto:shane@blakeimmigration.com" className="button fit">shane@blakeimmigration.com</a></li>
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
                            <p>Jennifer has been a paralegal at Blake Immigration Law since 2017. She grew up in northern Virginia and earned her B.A. in political science from the Pennsylvania State University. <a href="https://blakeimmigration.netlify.app/jennifer/">Read more about Jennifer...</a></p>
    <i><p>Jennifer ha sido paralegal en Blake Immigration Law desde 2017. Creció en el norte de Virginia y obtuvo su B.A. en ciencias políticas de la Universidad Estatal de Pensilvania. <a href="https://blakeimmigration.netlify.app/jennifer/">Leer más sobre Jennifer ... </a></p></i>
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
                            <p>Karina has been a paralegal at Blake Immigration Law since 2017. She grew up in northern Virginia and earned her A.A. in liberal arts from Northern Virginia Community College. <a href="https://blakeimmigration.netlify.app/karina/">Read more about Karina...</a></p>
    
    
<i><p>Karina ha sido paralegal en Blake Immigration Law desde 2017. Creció en el norte de Virginia y obtuvo su título de A.A. en artes liberales del Colegio Comunitario de Virginia del Norte. <a href="https://blakeimmigration.netlify.app/karina/">Leer más sobre Karina ...</a></p></i>
                            <ul className="actions">
                           <li><a href="mailto:karina@blakeimmigration.com" className="button fit">karina@blakeimmigration.com</a></li>

                            </ul>
                        </div>
                    </div>
                </section>

<section>
                    <Link to="/diana" className="image">
                        <img src={pic22} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Diana Maravilla</h3>
                                <h4>Paralegal</h4>
                            </header>
                            <p> Diana has worked at Blake Immigration Law since 2021, first as an administrative assistant and now as a paralegal. Diana grew up in Arlington, Virginia and earned her Immigration Law Specialist Paralegal Certificate at the Washington Online Learning Institute. <a href="https://blakeimmigration.netlify.app/diana/">Read more about Diana...</a> </p>
    <i><p>Diana ha trabajado en Blake Immigration Law desde 2021 como asistente administrativa y ahora como paralegal. Diana creció en Arlington, Virginia y obtuvo su Certificado de asistente legal de especialista en derecho de inmigración en el Washington Online Learning Institute. <a href="https://blakeimmigration.netlify.app/diana/">Leer más sobre Diana... </a></p></i>
                            <ul className="actions">
                                <li><a href="mailto:diana@blakeimmigration.com" className="button fit">diana@blakeimmigration.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default About
