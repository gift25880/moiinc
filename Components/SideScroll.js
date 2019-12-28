import React, { Component, Fragment } from 'react'
import Card from './Card'
import styled from 'styled-components'
import '../static/css/index.css'

const Wrap = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
    width: 100%;
`

const cards = [
    { id: 1, srcFront: "/static/img/scotland.png", srcBack: "/static/img/scotland.png" },
    { id: 2, srcFront: "/static/img/tea-cup.png", srcBack: "/static/img/tea-cup.png" },
    { id: 3, srcFront: "/static/img/top-hat.png", srcBack: "/static/img/top-hat.png" },
    { id: 4, srcFront: "/static/img/umbrella.png", srcBack: "/static/img/umbrella.png" },
]

const cards2 = [
    { id: 5, srcFront: "/static/img/scotland.png", srcBack: "/static/img/scotland.png" },
    { id: 6, srcFront: "/static/img/tea-cup.png", srcBack: "/static/img/tea-cup.png" },
    { id: 7, srcFront: "/static/img/top-hat.png", srcBack: "/static/img/top-hat.png" },
    { id: 8, srcFront: "/static/img/umbrella.png", srcBack: "/static/img/umbrella.png" },
]




export default class SideScroll extends Component {
    render() {
        const elements = cards.map(c => {
            return (<div className="col-md-3"> <Card key={c.id} srcFront={c.srcFront} srcBack={c.srcBack} /> </div>);
        })
        const elements2 = cards2.map(c => {
            return (<div className="col-md-3"> <Card key={c.id} srcFront={c.srcFront} srcBack={c.srcBack} /> </div>);
        })
        return (
            <div className="bg-dark">

                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div style={{padding: '0 6%'}}>
                            <Wrap className="row mx-auto">
                                {elements}
                            </Wrap>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div style={{padding: '0 6%'}}>
                            <Wrap className="row mx-auto">
                                {elements2}
                            </Wrap>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

/*
export class SideScroll extends Component {



        render() {
return (
<Fragment>

        <Wrap id="scroll" className="container">


            {cards.map(c =>
                <Card key={c.id} srcFront={c.srcFront} srcBack={c.srcBack} />)}


        </Wrap>

    </Fragment>
    )
}
}*/
