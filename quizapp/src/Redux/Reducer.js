



const initial_state={val:0,arr:[],questi_l:[]};
// const initial_state = 0;

const reducer=(state=initial_state,action)=>{
    if (action.type==="set"){
        console.log(action)
        // return (state = parseInt(action.val));
        return {
          ...state,
          ["val"]: parseInt(action.val),
        };
    }
    else if (action.type === "listset") {
      console.log(action);
      return {
        ...state,
        ["arr"]: action.arr,
      };
    } else if (action.type === "question_list") {
      var c=([action.arr2]);
      console.log(c);
      return {
        ...state,
        ["questi_l"]: c,
      };
        // return state;
    } 
    else {
      return state;
    }
}
export default reducer;