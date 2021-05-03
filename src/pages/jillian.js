import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic18 from '../assets/images/pic18.jpg'

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
    <h3>Principal Attorney/Owner</h3>
                    </header>
                    <img src={pic18} alt="" />
                    <p>Jillian is an attorney and owner of Blake Immigration Law since 2015. She grew up in San Francisco, California and earned her bachelor’s degree in international studies from Johns Hopkins University and master’s degree in international relations from the Johns Hopkins School of Advanced International Studies (SAIS). She then obtained her law degree from the University of Michigan Law School. During law school she discovered her passion for immigration and asylum law while interning at Asylum Access—Ecuador and Capital Area Immigrants’ Rights (CAIR) Coalition. Jillian is a member of the Maryland State Bar and the American Immigration Lawyers Association (AILA). She is also currently an adjunct professor of immigration law at George Mason University Law School in Arlington, Virginia. In her free time Jillian enjoys watching movies, writing, watching Cleveland Browns football and Nationals baseball, and spending time with her dog, Cha Cha.</p>
                    <i><p>Jillian Blake es abogada y propietaria de Blake Immigration Law desde 2015. Creció en San Francisco, California y obtuvo su licenciatura en estudios internacionales de la Universidad Johns Hopkins y una maestría en relaciones internacionales de la Escuela de Estudios Internacionales Avanzados de Johns Hopkins. Ella se graduó de la Facultad de Derecho de la Universidad de Michigan. Durante sus estudios de derecho ella descubrió su pasión por derecho migratorio y asilo y fue pasante en Asylum Access—Ecuador y la Coalición de Derechos de los Inmigrantes del Área Capital (CAIR, por sus siglas en ingles). Ella es miembro del Colegio de Abogados del Estado de Maryland y la Asociación de Estadounidense de Abogados de Inmigración. También ella es profesora adjunta de derecho de inmigración de la Facultad de Derecho de la Universidad George Mason en Arlington, Virginia. A Jillian le gusta ver las películas, escribir, ver futbol americano de los Cleveland Browns y béisbol de los Washington Nationals y pasar tiempo con su perrito, Cha Cha.</p></i>
                </div>
            </section>
        </div>

    </Layout>
)

export default Jillian
