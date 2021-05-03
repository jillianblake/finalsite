import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic20 from '../assets/images/pic20.jpg'

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
                    <img src={pic20} alt="" />
                    <p> Jennifer is a senior paralegal at Blake Immigration Law and has worked at the firm since 2017. She was born and raised in northern Virginia and earned her bachelor’s degree in political science from the Pennsylvania State University. During college she studied abroad in Barcelona, Spain. Jennifer currently attends law school part-time at the University of the District of Columbia (UDC) David A. Clarke School of Law. Jennifer also volunteers at the UDC Immigration and Human Rights Legal Clinic processing applications for adjustment of status and conducting legal research. She is passionate about helping immigrants obtain legal status in the United States and likes interacting with people from different cultural backgrounds. In her free time Jennifer enjoys spending time with her family and baking cakes.</p>
<i><p>Jennifer es paralegal senior en Blake Immigration Law y ha trabajado en el bufete desde 2017. Nació y creció en el norte de Virginia y obtuvo su licenciatura en ciencias políticas en la Universidad Estatal de Pensilvania. Durante la universidad estudió en el extranjero en Barcelona, España. Jennifer actualmente asiste a la Facultad de Derecho David A. Clarke de la Universidad del Distrito de Columbia (UDC) en tiempo parcial. Jennifer también es voluntaria en la Clínica Legal de Inmigración y Derechos Humanos de la UDC procesando solicitudes para el ajuste de estatus y realizando investigando legales. Le apasiona ayudar a los inmigrantes a obtener su estatus legal en los Estados Unidos y le gusta interactuar con personas de diferentes orígenes culturales. En su tiempo libre a ella le gusta pasar tiempo con su familia y hornear pasteles. 
</p></i>                
</div>
            </section>
        </div>

    </Layout>
)

export default Jennifer
