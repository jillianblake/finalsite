import React from 'react'
import pic16 from '../assets/images/pic16.jpg'


const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                
    <img src={pic16} width="200" height="200" alt="" />

            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto=jillian@blakeimmigration.com">jillian@blakeimmigration.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(703) 594-7857</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Addresses</h3>
                        <span><b>Mailing Address</b><br />
                            1727 King St. Ste 300<br />
                        Alexandria, VA 22314<br />
                        </span>
<span><b>Physical Address-Alexandria</b><br />
                            1517 King St.<br />
                        Alexandria, VA 22314<br />
                        </span>
<span><b>Physical Address-Baltimore</b><br />
                           10 E. North Ave.<br />
                        Baltimore, MD 21218<br />
                       </span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
