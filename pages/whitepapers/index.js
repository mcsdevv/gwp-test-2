import React from 'react';
import Router from 'next/router'

class WhitePapers extends React.Component {

	constructor(props) {
		super(props);
	}

	async componentDidMount() {
		Router.push('/find')
	}

	render() {
		return null;
	}
}

export default WhitePapers;
