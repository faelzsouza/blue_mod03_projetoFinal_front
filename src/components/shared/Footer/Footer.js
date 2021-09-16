import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="rodape">
            <p>
                © Copyright {new Date().getFullYear()} AtumVegan - All rights
                reserved
            </p>
        </footer>
    );
};

export default Footer;
