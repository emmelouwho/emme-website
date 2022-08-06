import React from 'react';
import introPhoto from './images/intro-photo2.jpeg';
import githubSvg from './images/github.svg';
import linkdenSvg from './images/linkden.svg';
import ButtonMailto from './mailButton';

class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <div className='title'>
                    <p>hello, my name is emme and i am a junior computer student at ut austin. </p>
                </div>
                {/* <div className='intro'>
                    <div className='text'>
                        <h1>Hello</h1>
                        <h2>My name is Emme Erwin</h2>
                        <h3>words</h3>
                        <div className='buttons'>
                            <span>about me</span>
                        </div>
                    </div>
                    <img src={introPhoto} alt="Image of Me" />
                </div> */}
            </div>
        );
    }
}

export default Home;
