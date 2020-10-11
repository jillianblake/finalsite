import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerVictories from '../components/BannerVictories'

const Victories = (props) => (
    <Layout>
        <Helmet>
            <title>Victories</title>
            <meta name="description" content="Victories Page" />
        </Helmet>
    
<BannerVictories />
   
 <div id="main" className="alt">

            <section id="one">
                <div className="inner">
            
         <h3>2020</h3>
                            <ul>
                                            <li>Violence Against Women Act (VAWA) petition approved by U.S. Citizenship and Immigration Services (USCIS) for Honduran client who was abused by her U.S. lawful permanent resident husband (2020).
</li>


                                        </ul>
                   
       <h3>2019</h3>
                            <ul>
                                            <li>Obtained custody and Special Immigrant Juvenile Status (SIJS) order in Charles County, Maryland Circuit Court for minor El Salvadoran client.</li>
                                            <li>Cancellation of Removal for Non-Legal Permanent Residents granted for detained Honduran client in Arlington Immigration Court based on the hardship his removal would cause his three U.S. citizen daughters.</li>
                                            <li>Asylum granted for Honduran client in Arlington Immigration Court based on domestic violence she suffered from her former partner including a violent stabbing and attempted murder.</li>
                                            <li>Affirmative application for asylum approved at the Arlington Asylum Office for Turkish client based on her fear of political persecution.</li>
                                           </ul>
                                         
   </div>
</section>
</div>
                   
   
                

        
    </Layout>
)

export default Victories
