



const initial_state=0;
const reducer=(state=initial_state,action)=>{
    if (action.type==="set"){
        // console.log(action)
        return (state = parseInt(action.val));
    }
    else{
        return state;
    }
}
export default reducer;