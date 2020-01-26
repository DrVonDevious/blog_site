
import React, { Component } from 'react'
import styled from 'styled-components'

const Section = styled.section`
	background-color: #fff3db;
	margin: 145px;
	padding-top: 1400px;
	padding-bottom: 1400px;
	text-align: center;
	box-shadow: 12px 12px 10px black;
` 
const Body = () => {
	return (
		<Section className="section-body">
			<div className="container">
				<p>Hello World</p>	
			</div>
		</Section>
	)
}

export default Body
