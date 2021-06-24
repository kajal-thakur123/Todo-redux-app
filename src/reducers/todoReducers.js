const initialData = {
   list:[]
}
const todoReducers = (state=initialData, action) => {
   switch (action.type) {
      case "ADD_TODO":
         const {id, data } = action.payload;
         
         //user not clicked if data is not in input field
         //if(data)
         // if(data  && data.length>2){
         if(data.length > 2) {
           return {
               ...state,
               list: [
                  ...state.list,
                  {
                     id:id,
                  data:data
                  }
               ]
            }
        }
        
      // eslint-disable-next-line no-fallthrough
      case "DELETE_TODO":
     const newList  = state.list.filter((elem)=>elem.id !== action.id) //if not match returm 
         return {
            ...state,
            list:newList
         }
      case "REMOVE_TODO": return {
         ...state,
         list:[]
       }
      default: return state;

   }
   }
export default todoReducers;