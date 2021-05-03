import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import pic13 from '../assets/images/pic13.jpg'
import BannerServices from '../components/BannerServices'

const Services = (props) => (
    <Layout>
        <Helmet>
            <title>Services</title>
            <meta name="description" content="Services Page" />
        </Helmet>
    
<BannerServices />
   
 <div id="main" className="alt">

            <section id="one">
                <div className="inner">
            
         
                    <div className="grid-wrapper">
               
                        <div className="col-6">
                            <h3>Removal Defense</h3>
                            <ul>
                                            <li>Asylum/Withholding of Removal</li>
                                            <li>Convention Against Torture (CAT) Protection </li>
                                            <li>Cancellation of Removal</li>
                                            <li>Bond Hearings</li>
                                            <li>Prosecutorial Disrection</li>
                                         

                                        </ul>
                        </div>
<div className="col-6">
                          <i>  <h3>Family-based Petitions</h3></i>
                           <ul>
                                           <i> <li>Permanent Residence
</li>
                                            <li>Adjustment of Status</li>
                                            <li>Provisional Waivers</li>
                                            <li>Criminal Waivers</li>
                                            <li>Petitions to Remove Conditions</li></i>
                                           

                                        </ul>
                        </div>
                        <div className="col-6">
                            <h3>Humanitarian Visas</h3>
                          <ul>
                                            <li>Special Immigrant Juvenile Status (SIJS)
</li>
                                            <li>Temporary Protected Status (TPS)</li>
                                            <li>U and T Visas</li>
                                            <li>Violence Against Women Act (VAWA)</li>
                                            <li>Deferred Action for Childhood Arrivals (DACA)</li>
                                           

                                        </ul>
                        </div>
                        
 <div className="col-6">
                            <h3>Naturalization</h3>
</div>
<div className="col-6">
                            <h3>Defensa Contra Deportación 
</h3>
                          <ul>
                                            <li>Asilo/Suspensión de Expulsión</li>
                                            <li>La Convención contra la Tortura (CAT) Protección </li>
                                            <li>Cancelación de Expulsión</li>
                                            <li>Discreción Fiscal</li>
                                            <li>Apelaciones de Inmigración</li>
                                           

                                        </ul>
                        </div>
                    </div>

       
   </div>
</section>
</div>
                   
   
                

        
    </Layout>
)

export default Services
