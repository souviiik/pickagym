import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="container">
                <Link to="/">Home</Link>
                <h2>About Us</h2>
                <h3>What We Do</h3>
                <p>
                    Pick A Gym is an online directory of gyms, health clubs, and fitness centers that
                    want to give you the opportunity to get a free gym pass or try their gym out at
                    a discounted rate. Our detailed gym listings take the guesswork out of selecting
                    a fitness center, and pair users with fitness centers that meet their specific needs.
                    We provide video tours, testimonials, pricing, and class schedule information for
                    gyms in your area. We provide the tools to narrow your gym search from the comfort
                    of your computer, download free gym passes, and even buy a membership at a discounted
                    rate! Our site is the premier service for helping frequent travelers, new residents,
                    and all others choose the gym or fitness center that best meets their needs.</p>
                <p>
                    Pick A Gym is owned and operated by Gyms On Demand, LLC. We are headquartered in
                    Des Moines, Iowa. We encourage feedback from all customers and gym owners. Feel
                    free to <Link to="/ContactUs.aspx">contact us</Link> with any questions or comments.
                    Our Support Specialists will answer your emails promptly.</p>
                <p>
                    - Team Pick A Gym</p>
                <Link to="http://www.youtube.com/user/teampickagym/" target="_blank">
                    <img src="Images/Youtube-Button.jpg" width="45" height="45" alt="YouTube Icon" title="YouTube Icon"/></Link>
                <Link to="https://twitter.com/#!/teampickagym/" target="_blank">
                    <img src="Images/twitter-t.jpg" width="45" height="45" alt="Twitter Icon" title="Twitter Icon"/></Link>
                <Link to="http://www.facebook.com/pickagym" target="_blank">
                    <img src="Images/facebookf.png" width="45" height="45" alt="Facebook Icon" title="Facebook Icon"/></Link>
                <p>
                    Check out our article in The Business Record:</p>
                <p>
                    <Link to="http://businessrecord.com/main.asp?SectionID=36&amp;SubSectionID=99&amp;ArticleID=14386&amp;TM=54115.8" target="_blank">Gyms On Demand Working Out in Des Moines</Link></p>
                <img src="Images/business_record-786286.jpg" width="201" height="105" alt="Business Record Logo" title="Business Record Logo"/>
            </div>
        )
    }
}
