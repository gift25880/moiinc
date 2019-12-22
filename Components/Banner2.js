import React from 'react'
import styled from 'styled-components'

const ImgParallax = styled.div`
    background: url('../static/img/pic.jpg') center center no-repeat fixed;
    background-size: cover;
    width: 100%;
`

const BannerText = styled.div`
    text-align: right;
    color: white;
    padding: 20% 0;
`

const ParallaxImage = () => (
        <ImgParallax>
            <BannerText className="container">
                <h1>
                    Sylvain Boudreau 
                    <br/>
                    conférencier.
                </h1>
                <a href="/" style={{color: 'white'}}>DECOUVRIR</a>
            </BannerText>
        </ImgParallax>
);

export default ParallaxImage;
