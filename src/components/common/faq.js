import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FAQ extends Component {
    render() {
        return (
            <div className="container">
                <Link to="/">Home</Link>
                <div className="row">
                    <div className="col-md-8">
                        <h2>Frequently Asked Questions</h2>
                        <p><strong>1. What is PickAGym?</strong></p>
                        <p>PickAGym is an online directory of gyms, health clubs, and fitness centers that want to give you the opportunity to get a free gym pass or try their gym out at a discounted rate. We provide video tours, testimonials, and class schedule information for gyms in your area. We give you the tools to narrow your gym search from the comfort of your computer, and even buy a membership at a discounted rate!</p>
                        
                        <p><strong>2. Why do I need PickAGym?</strong></p>
                        <p>PickAGym helps you to find the right gym for you, as well as the best gym membership deals in your local area.</p>
                        
                        <p><strong>3. Do I need to join a gym?</strong></p>
                        <p>That is a question that you need to answer yourself. We are here to help you find a gym and to get gym passes. We cannot tell you whether or not you need to join a gym. We give ourselves a simple test every once in a while you can try. Do jumping jacks for a minute. If you don't make it a minute then you should join a gym. If you made it and it was a major challenge then you should strongly consider joining a gym.  If you made it with ease then you can feel free to use our site to try out some different gyms with free passes!</p>
                        
                        <p><strong>4. How do I find a gym in my area?</strong></p>
                        <p>Just enter your zip code and press Go. You will be provided with gyms in your area in order of distance from the zip code entered. You can then refine your search by selecting different amenities and features of the gyms, compare gyms side by side, and view video tours and testimonials.</p>
                        
                        <p><strong>If you have any questions</strong> please <a href="mailto:support@pickagym.com">contact us</a></p>
                        <p><strong>If you would like to add your gym, fitness center, or health club</strong> please join the <a id="MainContent_lnkOwnerLogin" href="javascript:__doPostBack('ctl00$MainContent$lnkOwnerLogin','')">PickAGym.com Network</a>!</p>
                    </div>
                    <div className="col-md-4">
                        Pick A Gym near you
                        Enter ZIP Code
                        Submit
                        By Clicking this button you agree to our <Link to="/terms-and-conditions">Terms & Conditions</Link> and <Link to="/privacy-policy">Privacy Policy</Link>.
                    </div>
                </div>                
            </div>
        )
    }
}
