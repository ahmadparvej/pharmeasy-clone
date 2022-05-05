
export const getDataSuccess = (payload)=>({
    type:"GET_DATA",
    payload
})

export const getData =()=> async(dispatch)=>{
  try {
    const res = await fetch("http://localhost:8080/HealthCare_Products")
    const data = await res.json();
    dispatch(getDataSuccess(data));
  } catch (error) {
      console.log("err",error)
  }
}