import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic19 from '../assets/images/pic19.jpg'

const Amelia = (props) => (
    <Layout>
        <Helmet>
            <title>Amelia</title>
            <meta name="description" content="Ami Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Amelia Wester, Esq.</h1>
    <h3>Associate Attorney</h3>
                    </header>
                    <img src={pic19} alt="" />
                    <p>Amelia has been an associate attorney at Blake Immigration Law since 2021. She grew up outside of Cleveland, Ohio and earned her bachelor's degree in international studies and Latin American studies from Miami University. During college she studied abroad in Cali, Colombia. Amelia then received her law degree from Case Western Reserve University School of Law. During law school she participated in the Milton A. Kramer Law Clinic and interned at the UN High Commissioner for Refugees (UNHCR) in  Washington, DC. Amelia is a member of the American Immigration Lawyers Association (AILA) and the Ohio Bar. In her free time Amelia enjoys running and traveling.</p>
    <i><p>Amelia ha sido abogada asociada en Blake Immigration Law desde 2021. Creció fuera de Cleveland, Ohio y obtuvo su licenciatura en estudios internacionales y estudios latinoamericanos de la Universidad de Miami. Durante la universidad estudió en el extranjero en Cali, Colombia. Amelia luego recibió su doctorada en derecho de la Facultad de Derecho de la Universidad Case Western Reserve. Durante sus estudios de derecho, participó en la Clínica Jurídica Milton A. Kramer y realizó una pasantía en el Alto Comisionado de las Naciones Unidas para los Refugiados (ACNUR) en Washington, DC. Ella es miembro del Colegio de Abogados del Estado de Ohio y la Asociación de Estadounidense de Abogados de Inmigración. En su tiempo libre, Amelia disfruta corriendo y viajando.</p></i>
                    
                </div>
            </section>
        </div>

    </Layout>
)

export default Amelia
