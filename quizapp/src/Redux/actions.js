export const setter=(value)=>{
    return {
      type: "set",
      val:value
    };
}

export const list_setter = (value) => {
  return {
    type: "listset",
    arr: value,
  };
};
export const question_list = (value) => {
  return {
    type: "question_list",
    arr2: value,
  };
};