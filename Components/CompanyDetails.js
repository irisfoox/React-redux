import React from 'react';
import {connect} from 'react-redux';
import {actions} from './Store/actions';

function mapStateToProps(state){        //constructor for state+redux
    return{
        product:state.productReducer.product,
        company:state.companyReducer.company
    };
}
const mapDispatchToProps=(dispatch)=>({
    setCompanyName:(company_name)=>dispatch(actions.add$ToCompanyName(company_name))
})
export default connect(mapStateToProps,mapDispatchToProps)(function CompanyDetails(props){
    const {product,company,setCompanyName}=props;
    return(
        <>
        <div>
            Product name is: {product.name}
            made in {company.name}
            It costs: {product.price} shekels
            Its color is: {product.color}
            Its weight is: {product.weight}
            <br></br>
            <br></br>
            click ok to confirm these product details<br></br>
            <button>I confirm</button><br></br>
        </div>
        <div>
            company name: <input value={company.name} onChange={(e)=>setCompanyName(e.target.value)}></input>
        </div>
        </>
    );
})