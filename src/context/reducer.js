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
                ColumnFilter:action.payload.filter,
                catogery:action.payload.catogery

            }
        }
        default:return {}
    }
}
