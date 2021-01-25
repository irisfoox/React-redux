function convertActionTypeToName(actionType){
    return actionType.toLowerCase().replace(/_(\w)/g,v=>v[1].toUpperCase());
}                                   //from SET_COMPANY_NAME to setCompanyName
export default function createReducer(state,action,handlers){
    debugger
    const key=convertActionTypeToName(action.type);
    const handler=handlers[key];

    if(handler){
        handler(state,action);
    }
}