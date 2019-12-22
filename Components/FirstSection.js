import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import Images from './ImgColumn';

const FirstDiv = styled.div`
    background-color: white;
`
const FirstSectionText = {
    paddingTop: '5%',
    paddingBottom: '2%'
}

const FirstSectionText2 = {
    paddingTop: '5%',
    paddingBottom: '2%',
    color: '#005CBF',
    textAlign: 'center'
}

export default class FirstSection extends Component {
    render() {
        return (
            <Parallax y={[20,-50]}>
                <FirstDiv>
                    <h4 className="container" style={FirstSectionText}>
                        AVEC PLUS DE 20 ANS D’EXPÉRIENCES CUMULÉES, L’ÉQUIPE DES CONFÉRENCES SYLVAIN BOUDREAU PROPOSE DES CONFÉRENCES STIMULANTES ET DYNAMIQUES QUI S'ADAPTENT AUX RÉALITÉS DES DIFFÉRENTES ENTREPRISES ET DE LEUR MILIEU.
                    </h4>
                    <h1 style={FirstSectionText2}>Quelques chiffres intéressants!</h1>
                    <Container>
                        <Row>
                            <Col lg="3">
                                <img src="/static/img/scotland.png"/>
                            </Col>
                            <Col lg="3"></Col>
                            <Col lg="3"></Col>
                            <Col lg="3"></Col>
                        </Row>
                        <Row>
                            <Col lg="3"></Col>
                            <Col lg="3"></Col>
                            <Col lg="3"></Col>
                            <Col lg="3"></Col>
                        </Row>
                    </Container>
                </FirstDiv>
            </Parallax>
        )
    }
}