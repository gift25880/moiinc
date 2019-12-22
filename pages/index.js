import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/index.css'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import FirstSection from '../Components/FirstSection'
import Banner2 from '../Components/Banner2'
import SecondSection from '../Components/SecondSection'
import Banner3 from '../Components/Banner3'
import ThirdSection from '../Components/ThirdSection'

export default class index extends Component {
    render() {
        return (
            <Fragment>
                <ParallaxProvider>
                    <Navbar />
                    <Parallax y={[10,-20]}>
                        <Banner />
                        <FirstSection />
                    </Parallax>
                    <Parallax y={[10,-40]}>
                        <Banner2/>
                        <SecondSection />
                    </Parallax>
                    <Parallax y={[10,-20]}>
                        <Banner3 />
                        <ThirdSection />
                    </Parallax>
                </ParallaxProvider>
            </Fragment>
        )
    }
}
