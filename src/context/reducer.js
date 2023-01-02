export const UserReducer=(state,action)=>{
    switch(action.type){
        case 'FILTER':{
            return {
                ...state,
                ColumnFilter: action.payload
            }
        }
        case 'ADD':{
            return{
                ...state,
                ColumnFilter:action.payload
            }
        }
        default:return {}
    }
}
