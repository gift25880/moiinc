import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components'
import { Header, Content } from './Text'

const QuoteText = styled.div`
    padding: 8% 0;
`

export default class SecondSection extends Component {
    render() {
        return (
            <Parallax y={[10,0]}>
                <div style={{backgroundColor: 'white'}} className="container">
                    <QuoteText>
                        <Header headerText="&quot;Un moment privilégié de réflexion qui nous a permis de prendre conscience de notre valeur autant sur le plan professionnel que personnel.&quot;" color="text-grey"/>
                        <br />
                        <Content content="— GUY JOBIN; CONSEILLER EN COMMUNICATION VILLE DE QUÉBEC" color="text-grey"/>
                    </QuoteText>
                </div>
            </Parallax>
        )
    }
}
