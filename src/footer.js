import React from 'react';
import githubSvg from './images/github.svg';
import linkdenSvg from './images/linkden.svg';
import ButtonMailto from './mailButton';
import { ReactSVG } from 'react-svg';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <hr class="solid" />

                <div className="footer-buttons">
                    <ButtonMailto
                        label="email me"
                        mailto="mailto:emilyerwin@utexas.edu"
                    />

                    <div className="socials">
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/emilymarieerwin/"
                            rel="noreferrer"
                        >
                            <img src={linkdenSvg} alt="Linkden Logo" />
                        </a>
                        <a
                            target="_blank"
                            href="https://github.com/emmelouwho"
                            rel="noreferrer"
                        >
                            <img src={githubSvg} alt="Github Logo" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
