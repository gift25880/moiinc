import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components'

const ImgParallax = styled.div`
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../static/img/bg1.jpg') center center no-repeat;
    background-size: cover;
    width: 100%;
`

const BannerText = styled.div`
    text-align: center;
    color: white;
    padding: 20% 0;
`

const ParallaxImage = () => (
        <ImgParallax>
            <BannerText>
            <Parallax y={[20,-50]}>
                <h1>Conférence #1 au Québec</h1>
                <h4>
                    Les conférences ont un impact réel et de façon durable
                    <br/>
                    sur les spectateurs.
                </h4>
            </Parallax>
            </BannerText>
        </ImgParallax>
);

export default ParallaxImage;
