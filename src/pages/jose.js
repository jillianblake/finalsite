import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic21 from '../assets/images/pic21.jpg'

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
    <h3>Paralegal</h3>
                    </header>
                    <img src={pic21} alt="" />
                    <p>Jose is a paralegal at Blake Immigration Law and joined the firm in 2020. Jose was born in El Salvador and came to the United States with his family when he was eight years old. Jose earned his associate’s degree from Northern Virginia Community College and graduated with his bachelor’s degree in public administration from George Mason University. Jose interned at Just Neighbors, a non-profit organization that provides legal services to immigrants and worked at Grace Ministries, another non-profit organization that provides low-income immigrants with food and clothing. During college he was a member of Mason DREAMers, a student group that aids undocumented students in reaching their educational goals. Jose enjoys working in immigration law because he wants to help immigrants achieve their goals without fear of deportation. As a DACA recipient and first-generation college graduate himself, he knows how hard immigrants work to achieve their ambitions even with the obstacles they face. In his free time Jose likes to read, dance, and spend time with his pets. He and his family care for four dogs, one cat, and four birds.</p>
    <i><p>José es paralegal en Blake Immigration Law y recientemente se unió al bufete en 2020. José nació en El Salvador y llegó a los Estados Unidos con su familia cuando tenía ocho años. José obtuvo su título de asociado del Northern Virginia Community College y se graduó con su licenciatura en administración pública de la Universidad George Mason. José hizo una pasantía en Just Neighbors, una organización sin fines de lucro que brinda servicios legales a inmigrantes y trabajó en Grace Ministries, otra organización sin fines de lucro que proporciona comida y ropa a inmigrantes de bajos ingresos. Durante la universidad fue miembro de Mason DREAMers, una organización estudiantil que ayuda a los estudiantes indocumentados a alcanzar sus metas educativas. A José le gusta trabajar en inmigración porque quiere ayudar a los inmigrantes a lograr sus metas en los Estados Unidos sin temor de deportación. Como beneficiario de DACA y graduado universitario de primera generación, él sabe lo duro que trabajan los inmigrantes para lograr sus ambiciones con los obstáculos que enfrentan. En su tiempo libre, a José le gusta leer, bailar, y pasar tiempo con sus mascotas. Él y su familia cuidan de cuatro perros, un gato, y cuatro pájaros.</p></i>             
    </div>
            </section>
        </div>

    </Layout>
)

export default Jose
