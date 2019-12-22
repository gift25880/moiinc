import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components'
import { Header, Content, Header2 } from './Text'
import { Container, Row, Col } from 'reactstrap'

const ThirdSectionContent = styled.div`
    padding-top: 5%;
`

const Image = styled.img`
    width: 200px;
`
export default class ThirdSection extends Component {
    render() {
        return (
            <Parallax y={[10,0]}>
                <div style={{backgroundColor: 'white'}}>
                    <ThirdSectionContent className="container">
                        <span className="text-center">
                            <Header headerText="Nos conférences" color="text-primary" />
                        </span>
                        <br />
                        <Content content="Les Conférences Sylvain Boudreau propose des conférences «coup de poing». Des prises de conscience et une véritable expérience qui auront un impact sur votre vie et celle de vos équipes!" color="text-grey" />
                        <div style={{paddingTop: '5%'}}>
                            <Container>
                                <Row className="text-center">
                                    <Col lg="3">
                                        <Image src="/static/img/scotland.png" />
                                        <br />
                                        <br />
                                        <Header2 headerText="Le Moi Inc." color="text-grey" />
                                        <Content content="Chacun de nous est à la tête d’une entreprise dans laquelle nous devons investir." color="text-grey" />
                                    </Col>
                                    <Col lg="3">
                                        <Image src="/static/img/scotland.png" />
                                        <br />
                                        <br />
                                        <Header2 headerText="Le Moi Inc." color="text-grey" />
                                        <Content content="Chacun de nous est à la tête d’une entreprise dans laquelle nous devons investir." color="text-grey" />
                                    </Col>
                                    <Col lg="3">
                                        <Image src="/static/img/scotland.png" />
                                        <br />
                                        <br />
                                        <Header2 headerText="Le Moi Inc." color="text-grey" />
                                        <Content content="Chacun de nous est à la tête d’une entreprise dans laquelle nous devons investir." color="text-grey" /></Col>
                                    <Col lg="3">
                                        <Image src="/static/img/scotland.png" />
                                        <br />
                                        <br />
                                        <Header2 headerText="Le Moi Inc." color="text-grey" />
                                        <Content content="Chacun de nous est à la tête d’une entreprise dans laquelle nous devons investir." color="text-grey" />
                                    </Col>
                                </Row>

                            </Container>
                        </div>
                    </ThirdSectionContent> 
                </div>
            </Parallax>
        )
    }
}
