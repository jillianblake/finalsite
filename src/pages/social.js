import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerSocial from '../components/BannerSocial'

const Social = (props) => (
    <Layout>
        <Helmet>
            <title>Social</title>
            <meta name="description" content="Social Page" />
        </Helmet>
    
<BannerSocial />
     <div id="main" className="alt">

            <section id="one">
                <div className="inner">
            
   <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0" nonce="Dogx0vy3"></script>
 <div class="fb-page" data-href="https://www.facebook.com/blakeimmigration/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/blakeimmigration/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/blakeimmigration/">Blake Immigration Law</a></blockquote></div>
                
</div>
    </section>
    </div>
        
    </Layout>
)

export default Social
