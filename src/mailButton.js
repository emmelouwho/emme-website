import React from "react";
import { Link } from "react-router-dom";

// <ButtonMailto label="Write me an E-Mail" mailto="mailto:no-reply@example.com" />

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            className='link'
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;