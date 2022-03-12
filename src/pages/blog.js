import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerBlog from '../components/BannerBlog'

const Blog = (props) => (
    <Layout>
        <Helmet>
            <title>Blog</title>
            <meta name="description" content="Blog" />
        </Helmet>
    
<BannerBlog />
   
 <div id="main" className="alt">

            <section id="one">
                <div className="inner">
   
                 Blog coming soon...
</section>
</div>
    </div>
                   
   
                

        
    </Layout>
)

export default Blog
