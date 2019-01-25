import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";


const  changList =(data) =>(
    {
        type :constants.CHANG_LIST,
        data:fromJS(data)
    }
);



export const searchFocus =() =>({
    type: constants.SEARCH_FOCUS,

});

export const searchBlur=() =>({
    type: constants.SEARCH_BLUR,

});



export const getList =() =>{
  return (dispatch)=>{
      axios.get("/api/headerList.json")
          .then((res) =>{
              console.log("success "+res.data);
              const data = res.data;
              const action = changList(data.data);
              dispatch(action);
          })
          .catch(()=>{
              console.log("error");
          })
  }
};

