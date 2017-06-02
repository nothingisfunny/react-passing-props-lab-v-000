import React from 'react';
import { Component } from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
    return (
      <div className="fruit-basket">
        <Filter handleChange={props.updateFilterCallback} filters={props.filters}/>
        <FilteredFruitList fruit={props.fruit} filter={props.currentFilter}/>
      </div>
    );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters:[],
  currentFilter: null,
  updateFilterCallback: null
}
// class FruitBasket extends Component {
//   constructor() {
//     super();

//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };

//     this.handleFilterChange = this.handleFilterChange.bind(this);
//   }

//   handleFilterChange(e) {
//     console.log('new filter: ', e.target.value);
//     this.setState({ selectedFilter: e.target.value });
//   }

//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }

export default FruitBasket;
