/*import React from 'react';
class SearchBar extends React.Component {
  state = {
    searchQuery: '',
    stocked: true,
  };

  handleFilterCheckbox = (event) => {
    this.setState({
      stocked: event.target.checked,
    });
  };

  handleChange = (event) => {
    let { name, value, type } = event.target;

    if (type === 'checkbox') {
      value = event.target.checked;
    }

    this.setState(
      {
        //it's just one so i could do
        [name]: value,
      },
      () => {
        this.props.onFilter(this.state.searchQuery);
      }
    );
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();

    this.props.searchProduct(this.state);

    this.setState({
      stocked: true,
    });
  };

  /*  searchHandler = (dataFromJson) => {
        let dataCopy = this.state.data.cancat(dataFromJson);
        this.setState({
            data:dataCopy
        })
    }

  render() {
    return (
      <div>
        <h3>Search</h3>
        <form onSubmit={this.handleSearchSubmit}>
          <input
            name="searchQuery"
            type="text"
            value={this.state.searchQuery}
            placeholder="search for product"
            key="product.id"
            style={{
              width: '20rem',
              background: '#F2F1F9',
              border: 'none',
              padding: '0.5rem',
            }}
            onChange={this.handleChange}
          />
          <button>Search</button>
          <label>Stocked</label>
          <input
            type="checkbox"
            name="stocked"
            value={this.state.stocked}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;*/

import React from 'react';
class SearchBar extends React.Component {
  state = {
    searchQuery: '',
    inStock: true,
  };
  handleOnchange = (event) => {
    let { value, name, type } = event.target;
    if (type === 'checkbox') {
      value = event.target.checked;
    }
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.props.onFilter(this.state);
      }
    );
  };
  render() {
    return (
      <form>
        <input
          type="text"
          name="searchQuery"
          value={this.state.searchQuery}
          onChange={this.handleOnchange}
        />
        <input
          type="checkbox"
          name="inStock"
          value={this.state.inStock}
          onChange={this.handleOnchange}
        />
      </form>
    );
  }
}
export default SearchBar;
