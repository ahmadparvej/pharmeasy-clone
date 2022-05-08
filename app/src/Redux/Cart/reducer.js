
const initcount = {count:0}

export const cartCountReducer = (state=initcount,action)=>{
    const prev = JSON.parse(localStorage.getItem("cart"))||[]
    switch (action.type) {
        case "INCREMENT":{
            return {...state,count:prev.length+action.payload}
        }
        case "DECREMENT":{
            return {...state,count:prev.length+action.payload}
        }
        default:
            return {...state,count:prev.length};
    }
}