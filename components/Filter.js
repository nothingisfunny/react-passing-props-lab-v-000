import React from 'react';
import { Component } from 'react';

const Filter = (props) => {
  console.log(props)
  return(
    <select onChange={props.handleChange}>
      <option value='all'>All</option>
      {props.filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
    )
}

Filter.defaultProps = {
  filters: [],
  handleChange: null
}

export default Filter;

// class Filter extends Component {
//   constructor() {
//     super();

//     this.state = {
//       filters: []
//     };

//     this.fetchFilters = this.fetchFilters.bind(this);
//   }

//   componentWillMount() {
//     this.fetchFilters();
//   }

//   fetchFilters() {
//     
//   }

//   render() {
//     return (
//       <select onChange={this.props.handleChange} defaultValue='all'>
//         <option value='all'>All</option>
//         {this.state.filters.map(filter =>
//           <option key={filter} value={filter}>{filter}</option>
//         )}
//       </select>
//     );
//   }
// }


