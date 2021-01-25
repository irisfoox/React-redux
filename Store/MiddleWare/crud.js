import {actions} from './Store/actions';  //crud=create update & delete

export const add$ToCompanyName=({dispatch,getState})=>next=>action=>{
    debugger
    if(action.type==='ADD$_TO_COMPANY_NAME'){
        var productName=getState().productReducer.product.name;
        var newCompany=productName+" "+action.payload;
        dispatch(action.setCompanyName(newCompany));
    }
    return next(action); //important!
};