import React from 'react';
function ProductRow(props) {
    return(
        <tr>
            <td style={{color: props.stocked ? "black" : "red"}}>
                {props.name}
            </td> 
            <td>{props.price}</td>
        </tr>
    )
}
export default ProductRow;


/* import React from 'react';

class ProductRow extends React.Component {

   state = {
        stocked: true
    }

    outOfStock = () => {

        if (stocked !== true) {
            return
        
        }

        this.setState({
            stocked: !this.state.stocked
        })
    }

    render() {
        return(
            <div>
                <table>
                <tbody>
              {/* <ProductCategoryRow/> }
              {this.props.products.map(product => {
                  return (
                      <tr key={product.id}>
                         <td style={{color: props.stocked? "black" : "red"}} />
                          <td>
                           {product.name}    
                          </td>
                          <td>
                          {product.price}     
                          </td>
                    </tr>
              
                  )
              })}
              </tbody>
                </table>
            </div>
        )
    }
}

export default ProductRow;*/ 