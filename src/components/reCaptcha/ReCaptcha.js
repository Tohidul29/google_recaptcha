import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (
        <div>
            <ReCAPTCHA
                sitekey="6LeuNJ0lAAAAAI6E67BOyMie7lGSTSCt1IhgPCZS"
                onChange={onChange}
            />
        </div>
    );
};

export default ReCaptcha;