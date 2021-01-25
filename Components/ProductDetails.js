import React from 'react';
import { connect } from 'react-redux'  // red=auto filling import
import { actions } from './Store/actions';

function mapStateToProps(state){
    debugger
    return{
        product:state.productReducer.product,
    };
}
export default connect(mapStateToProps)(function productDetails(props){
    const {product}=props;
    return(
        <div>
            <label>Product name: </label>
            <input value={product.name}></input>
        </div>
    );
})