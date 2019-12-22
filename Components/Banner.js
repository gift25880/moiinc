import React from 'react'
import styled from 'styled-components'

const ImgParallax = styled.div`
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../static/img/bg1.jpg') center center no-repeat fixed;
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
                <h1>Conférence #1 au Québec</h1>
                <h4>
                    Les conférences ont un impact réel et de façon durable
                    <br/>
                    sur les spectateurs.
                </h4>
            </BannerText>
        </ImgParallax>
);

export default ParallaxImage;
