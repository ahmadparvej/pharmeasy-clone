
let initState = {data:[]}

export const reducer = (state=initState,action)=>{
    switch (action.type) {
        case "GET_DATA":
            return {
                ...state,
                data:action.payload
            }
        default:
            return state
    }
}