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
   

            
         
                    <div className="grid-wrapper">
               
                        <div className="col-4">
                            <h3>Removal Defense</h3>
                            <ul>
                                            <li>Asylum/Withholding of Removal</li>
                                            <li>Convention Against Torture (CAT) Protection </li>
                                            <li>Cancellation of Removal</li>
                                            <li>Bond Hearings</li>
                                            <li>Prosecutorial Disrection</li>
                                            <li>Termination</li>

                                        </ul>
                        </div>
                        <div className="col-4">
                            <h3>Humanitarian Visas</h3>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                        </div>
                        <div className="col-4">
                            <h3>Family-based Immigration and Naturalizatin </h3>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                        </div>
                    </div>

       
   
                   
   
                

        
    </Layout>
)

export default Services
