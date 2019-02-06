import React from "react";
import "./style.css";

function ContactForm() {
    return (
        <div id="contactBox">
        <div className="row">
            <div className="col-md-6">
                <div id="contactInfo">
                    <p id="text">
                        Please fill out the contact form to the right and we will
                        get in contact with you ASAP! Please be sure to 
                        leave your name, email, and let us know a little 
                        about what we can help you with.
                    </p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-style-2">
                    <div className="form-style-2-heading">Provide your information</div>
                        <form action="send" method="POST">
                            <label htmlFor="field1"><span>Name <span className="required">*</span></span><input type="text" className="input-field" name="field1" /></label>
                            <label htmlFor="field2"><span>Email <span className="required">*</span></span><input type="text" className="input-field" name="field2" /></label>
                            <label htmlFor="field3"><span>Telephone <span className="required">*</span></span><input type="text" className="input-field" name="field3" placeholder="xxx-xxx-xxxx" /></label>
                            <label htmlFor="field4"><span>Regarding</span><select name="field4" className="select-field">
                                <option value="General Question">General</option>
                                <option value="Quote">Free Quote</option>
                                <option value="Window Cleaning">Window Cleaning</option>
                                <option value="Gutter Cleaning">Gutter Cleaning</option>
                                <option value="Other">Other</option>
                            </select></label>
                            <label htmlFor="field5"><span>Message <span className="required">*</span></span><textarea name="field5" className="textarea-field"></textarea></label>
                            <button type="submit">Submit</button>
                        </form>
                        
                </div>
            </div>
        </div>
           
        </div> 

    );
}

export default ContactForm;