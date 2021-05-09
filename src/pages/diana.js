import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic22 from '../assets/images/pic22.jpg'

const Diana= (props) => (
    <Layout>
        <Helmet>
            <title>Diana Maravilla</title>
            <meta name="description" content="Diana Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Diana Maravilla</h1>
    <h3>Receptionist/Administrative Assistant</h3>
                    </header>
                    <img src={pic22} alt="" />
                    <p> Diana has been a receiptionist and administrative assistant at Blake Immigration Law since 2021. Diana grew up in Arlington, Virginia and earned her Immigration Law Specialist Paralegal Certificate at the Washington Online Learning Institute. She previously worked as a receptionist and assistant at medical and immigration law offices in northern Virginia. In her free time Diana likes to read, garden, and bake. She also likes to spend time with her family and friends, and her dog, Kiko. </p>
    <i><p>Diana ha sido recepcionista y asistente administrativa en Blake Immigration Law desde 2021. Diana creció en Arlington, Virginia y obtuvo su Certificado de asistente legal de especialista en derecho de inmigración del Washington Online Learning Institute. Anteriormente trabajó como recepcionista y asistente en oficinas médicas y de inmigración en el norte de Virginia. En su tiempo libre, a Diana le gusta leer, trabajar en el jardín, y hornear. También le gusta pasar tiempo con su familia y amigos, y con su perro, Kiko.</p></i>
                </div>
            </section>
        </div>

    </Layout>
)

export default Diana
