import React from 'react';
import ProductRow from './ProductRow';
class ProductTable extends React.Component {
    render() {
        return(
            <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {this.props.products.map((product) => {
                        return (
                            <ProductRow 
                                key={product.id} 
                                {...product}
                            />
                        )
                    })}
                </tbody>
            </table>
        )
    }
}
export default ProductTable;



/*import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {


    render() {
        return(
            <div> 
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <ProductRow products={this.props.products}
                    key={products.id} {...products}/>
                </table>
            </div>
        )
    }
}

 export default ProductTable;*/