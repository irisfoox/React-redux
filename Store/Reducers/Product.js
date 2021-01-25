import produce from 'immer';
import createReducer from './ReducersUtils';

const initialState={
    product:{
        name:"plate",
        price: 5,
        color:"white",
        weight: 1.5
    }
}
const products={     //updating object fields by action.payload
    setName(state,action){
        debugger
        state.product.name=action.payload;
    },
    setPrice(state,action){
        debugger
        state.product.price=action.payload;
    },
    setColor(state,action){
        debugger
        state.product.color=action.payload;
    },
    setWeight(state,action){
        debugger
        state.product.weight=action.payload;
    },
 };
export default produce((state,action)=>createReducer(state,action,products),initialState);