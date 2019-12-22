import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import { Header, Content } from './Text'

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

const Image = styled.img`
    width: 120px;
`

const HrLine = styled.hr`
    border-color: #0000A0;
    border-width: 1.5px;
    width: 60%;
    margin: auto;
`

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
                        <Row className="text-center">
                            <Col lg="3">
                                <Image src="/static/img/scotland.png"/>
                                <br/>
                                <br/>
                                <Header headerText="+ de 4000" color="text-blue" />
                                <HrLine/>
                                <div className="mt-2">
                                    <Content content="conference presentees a travers le pays" color="text-blue"/>
                                </div>
                            </Col>
                            <Col lg="3">
                            <Image src="/static/img/tea-cup.png"/>
                                <br/>
                                <br/>
                                <Header headerText="+ de 500" color="text-blue" />
                                <HrLine/>
                                <div className="mt-2">
                                    <Content content="villes visitees" color="text-blue"/>
                                </div>
                            </Col>
                            <Col lg="3">
                            <Image src="/static/img/top-hat.png"/>
                                <br/>
                                <br/>
                                <Header headerText="1500000" color="text-blue" />
                                <HrLine/>
                                <div className="mt-2">
                                    <Content content="de km parcourus" color="text-blue"/>
                                </div>
                            </Col>
                            <Col lg="3">
                            <Image src="/static/img/umbrella.png"/>
                                <br/>
                                <br/>
                                <Header headerText="+ de 8000" color="text-blue" />
                                <HrLine/>
                                <div className="mt-2">
                                    <Content content="heures de conferences" color="text-blue"/>
                                </div>
                            </Col>
                        </Row>
                        <Row className="text-center mt-5">
                            <Col lg="3">
                            <Image src="/static/img/scotland.png"/>
                                <br/>
                                <br/>
                                <Header headerText="15" color="text-blue" />
                                <HrLine/>
                                <div className="mt-2">
                                    <Content content="conference presentees en une semaine (le record)!" color="text-blue"/>
                                </div>
                            </Col>
                            <Col lg="3">
                            <Image src="/static/img/tea-cup.png"/>
                                <br/>
                                <br/>
                                <Header headerText="200" color="text-blue" />
                                <HrLine/>
                                <div className="mt-2">
                                    <Content content="paniers remplis de produits regionaux recus" color="text-blue"/>
                                </div>
                            </Col>
                            <Col lg="3">
                            <Image src="/static/img/top-hat.png"/>
                                <br/>
                                <br/>
                                <Header headerText="1" color="text-blue" />
                                <HrLine/>
                                <div className="mt-2">
                                    <Content content="accident de voiture seulement!" color="text-blue"/>
                                </div>
                            </Col>
                            <Col lg="3">
                            <Image src="/static/img/umbrella.png"/>
                                <br/>
                                <br/>
                                <Header headerText="14 minutes" color="text-blue" />
                                <HrLine/>
                                <div className="mt-2">
                                    <Content content="la conference la plus courte" color="text-blue"/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </FirstDiv>
            </Parallax>
        )
    }
}
