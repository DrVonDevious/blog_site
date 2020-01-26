
import React, { Component } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Body from './Body'

const GlobalStyle = createGlobalStyle`
	body {
		background-color: #202020;
	}	
`

const Section = styled.section`
        background-color: #353535;
        color: #bb4302;
        min-height: 80px;
        margin: -15px;
        padding: 4px;
        box-shadow: 5px 10px 10px #101010;
`

const H1 = styled.h1`
        text-align: center;
        font-size: 40px;
        text-shadow: 1px 1px 4px #000000;
`

const Jumbotron = () => {

        return (
                <Section className="header-section">
                        <div className="container">
                                <div className="row">
                                        <div className="col">
                                                <div className="site-name">
                                                        <H1>Devious Programmer</H1>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </Section>
        )

}

class Blog extends Component {

	render() {
		return (
			<div>
				<GlobalStyle/>
				<Jumbotron/>
				<Body/>
			</div>
		)
	}
}

export default Blog
