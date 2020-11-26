import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
    state = {
        products:this.props.products,
        filteredProducts: this.props.products
    }

    handelFilterProducts = (query) => {
        let visibleProducts =
         [...this.state.products].filter((product) => {
            return product.name.toLowerCase().includes(query.toLowerCase());
        });

        this.setState({
            filteredProducts: visibleProducts
        });
    }

    render() {
        console.log(this.state.filteredProducts)
        return(
            <div>
                <h1>IronStore</h1>
                <SearchBar onFilter={this.handelFilterProducts} searchProduct={this.searchHandler}/>
                <ProductTable  products={this.state.filteredProducts}/>
            </div>
        )
    }
}




export default FilterableProductTable