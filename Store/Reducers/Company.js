import produce from 'immer';
import createReducer from './ReducersUtils';
const initialState={
    company:{
        name:" "
    }
}
const company={
    setCompanyName(state,action){
        state.company.name=action.payload;
    },
};
export default produce((state,action)=>createReducer(state,action,company),initialState);