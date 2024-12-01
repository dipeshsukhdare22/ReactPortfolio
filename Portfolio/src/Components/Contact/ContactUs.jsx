import React, { useState } from 'react'; // Import useState
import './ContactUs.css';
import 'remixicon/fonts/remixicon.css';

const ContactUs = () => {
    // State to manage form submission result
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b7f626c3-ddb8-48ab-9127-bb3e5595f5d3");
    
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
        
            const data = await response.json();
        
            if (data.success) {
                setResult("Form Submitted Successfully");
                alert(data.message);
                event.target.reset();
            } else {
                console.error("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Submission failed", error);
            setResult("An error occurred. Please try again.");
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>Get in touch</h1>
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Let's Talk</h1>
                    <p>
                        I'm currently available to take on new projects, so feel free to send me a message
                        about anything that you want me to work on. You can contact me anytime.
                    </p>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <i className="ri-mail-line"></i>
                            <p>dipeshsukhdare@gmail.com</p>
                        </div>
                        <div className='contact-detail'>
                            <i className="ri-phone-line"></i>
                            <p>+919820821050</p>
                        </div>
                        <div className='contact-detail'>
                            <i className="ri-map-pin-line"></i>
                            <p>Mumbai, Maharashtra, India</p>
                        </div>
                        <div className='contact-detail'>
                            <i className="ri-github-line"></i>
                            <p>github.com/dipeshsukhdare22</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder='Enter your name' name='name' />

                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder='Enter your email' name='email' />

                    <label htmlFor="message">Write your message here</label>
                    <textarea id="message" name='message' rows='8' placeholder='Enter your message'></textarea>

                    <div className="h-captcha" 
                         data-captcha="true" 
                         data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2">
                        <iframe
                            src="https://newassets.hcaptcha.com/captcha/v1/05c78a4/static/hcaptcha.html#frame=checkbox&amp;id=0m8y1oq1elx&amp;host=greatstack.in&amp;sentry=true&amp;reportapi=https%3A%2F%2Faccounts.hcaptcha.com&amp;recaptchacompat=off&amp;custom=false&amp;hl=en&amp;tplinks=on&amp;pstissuer=https%3A%2F%2Fpst-issuer.hcaptcha.com&amp;sitekey=50b2fe65-b00b-4b9e-ad62-3ba471098be2&amp;theme=light&amp;origin=https%3A%2F%2Fgreatstack.in"
                            title="Widget containing checkbox for hCaptcha security challenge"
                            frameBorder="0"
                            scrolling="no"
                            allow="private-state-token-issuance 'src'; private-state-token-redemption 'src'"
                            style={{
                                pointerEvents: "auto",
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                width: "303px",
                                height: "78px",
                                overflow: "hidden",
                            }}
                        ></iframe>
                        <textarea
                            id="h-captcha-response-0m8y1oq1elx"
                            name="h-captcha-response"
                            style={{ display: "none" }}
                        ></textarea>
                    </div>
                    <button type='submit' className='contact-submit'>Submit now  <i className="ri-arrow-right-line"></i></button>
                </form>
                {result && <p className="form-result">{result}</p>}
            </div>
        </div>
    );
};

export default ContactUs;
