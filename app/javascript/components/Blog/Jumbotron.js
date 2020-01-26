
import React, { Component } from 'react'
import styled from 'styled-components'

const Header = styled.section`
	background-color: teal;
` 

const Jumbotron = () => {

	return (
		<section className="header-section">
			<div className="container">
				<div className="row">
					<div className="col">
						<h1>The Devious Programmer</h1>
					</div>
				</div>
			</div>
		</section>
	)

}

export default Jumbotron
