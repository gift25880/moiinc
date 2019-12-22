import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import FirstSection from '../Components/FirstSection'

export default class index extends Component {
    render() {
        return (
            <Fragment>
                <ParallaxProvider>
                    <Navbar />
                    <Parallax y={[15,-20]}>
                        <Banner />
                        <FirstSection />
                    </Parallax>
                </ParallaxProvider>
            </Fragment>
        )
    }
}
