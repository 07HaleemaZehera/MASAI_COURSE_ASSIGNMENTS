import { GET_JSON_PRODUCT_DATA ,SUCCESS_JSON_PRODUCT_SHOWN,FAILURE_JSON_PRODUCT_SHOWN,LOADING_JSON_PRODUCT_SHOWN, GET_JSON_MEN_DATA, GET_JSON_WOMEN_DATA} from "../ActionTypes/ActionTypes";
const initState={
products_data:[],
success:false,
loading:true,
failure:false,
}
export const getJson_reducer_Products=(state=initState,{type,payload})=>{
    console.log('payload', payload);
    switch(type){
        case GET_JSON_PRODUCT_DATA:
            return{...state,products_data:payload}
        case SUCCESS_JSON_PRODUCT_SHOWN:
            return{...state,success:true}
        case FAILURE_JSON_PRODUCT_SHOWN:
            return{...state,failure:true}
        case LOADING_JSON_PRODUCT_SHOWN:
            return{...state,loading:false}
            case GET_JSON_MEN_DATA:
                return{...state,products_data:payload}
                case GET_JSON_WOMEN_DATA:
                    return{...state,products_data:payload}
            default:
                return state
    }
}