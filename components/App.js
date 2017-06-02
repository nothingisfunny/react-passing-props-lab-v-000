import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			fruit: [],
			filters: [],
			currentFilter: null
		}
		this.handleFilterChange = this.handleFilterChange.bind(this)
	}
	handleFilterChange(e) {
     this.setState({ currentFilter: e.target.value });
    }

	componentWillMount() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => {this.setState({fruit: fruit})});
    fetch('/api/fruit_types')
       .then(res => res.json())
       .then(filters => this.setState({filters: filters}));

  	}

	render(){
		console.log(this.state)
		return (
   		 <FruitBasket fruit={this.state.fruit} currentFilter={this.state.currentFilter} filters={this.state.filters} updateFilterCallback={this.handleFilterChange}/>
  		);
	}
}

export default App;
