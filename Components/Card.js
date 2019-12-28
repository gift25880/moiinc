import React from 'react';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import '../static/css/index.css'



const StyledCard = styled(Card)`
	border-radius: 29px;
 
  
  flex-shrink: 0;
  
  
`




const CardFront = (props) => {
	return (

		<div className="card-side front">
		<StyledCard>
			<CardImg top width="100%" src={props.src} alt="Card image cap" style={{ padding: '5%' }} />
			<CardBody>
				<CardTitle>Card title</CardTitle>
				<CardSubtitle>Card subtitle</CardSubtitle>
				<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
				<Button>Button</Button>
			</CardBody>
		</StyledCard>
		</div>

	);
};

const CardBack = (props) => {
	return (

		<div className="card-side back">
		<StyledCard>
			<CardImg top width="100%" src={props.src} alt="Card image cap" style={{ padding: '5%' }} className="img-flip"/>
			<CardBody className="back-text">
				<CardTitle>Back</CardTitle>
				<CardSubtitle>Card subtitle</CardSubtitle>
				<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
				<Button>Button</Button>
			</CardBody>
		</StyledCard>
		</div>

	);
};

const Card1 = (props) => {
	return (

		<div className='card-container'>
			<div className='card-body'>
				<CardBack src={props.srcBack} />
				<CardFront src={props.srcFront} />
			</div>
		</div>

	);
};

export default Card1;





CardFront.propsTypes = {
	srcFront: PropTypes.string.isRequired
};

CardBack.propsTypes = {
	srcBack: PropTypes.string.isRequired
};

