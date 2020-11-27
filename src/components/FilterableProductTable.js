/*import React from 'react';
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

    toggleStocked =() => {
        this.setState({
            stocked: !this.state.stocked
        })
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
*/
import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
class FilteredProductTable extends React.Component {
  state = {
    products: this.props.products.data,
    filteredProducts: this.props.products.data,
  };
  handleFilterProducts = (filter) => {
    let { searchQuery, inStock } = filter;
    let visibleProducts = [...this.state.products].filter((product) => {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    if (inStock) {
      visibleProducts = visibleProducts.filter((product) => {
        return product.stocked;
      });
    }
    this.setState({
      filteredProducts: visibleProducts,
    });
  };
  render() {
    return (
      <div>
        <SearchBar onFilter={this.handleFilterProducts} />
        <ProductTable filteredProducts={this.state.filteredProducts} />
      </div>
    );
  }
}
export default FilteredProductTable;
