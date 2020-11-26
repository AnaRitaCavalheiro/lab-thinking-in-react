import React from 'react';
import data from '../data.json'
class SearchBar extends React.Component {

    state={
        data: data,
        searchQuery: ''
    }
    handleChange = (event) => {

      //  let {name, value} = event.target
        

        this.setState({
            //it's just one so i could do
            searchQuery: event.target.value},
            () => {
                this.props.onFilter(this.state.searchQuery);
            })
           // [name]: value
    }

    handleSearchSubmit = (event) => {
        event.preventDefault();

        this.props.searchProduct(this.state);

        this.setState({
            data : data
        })
    }

/*  searchHandler = (dataFromJson) => {
        let dataCopy = this.state.data.cancat(dataFromJson);
        this.setState({
            data:dataCopy
        })
    }*/

    render() {
        return(
            <div>
                <h3>Search</h3>
                <form onSubmit={this.handleSearchSubmit}>
                <input name="searchQuery" type="text" value={this.state.searchQuery}
                placeholder="search for product"
                key="product.id" style={{width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"}}
                onChange={this.handleChange} />
                <button>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;