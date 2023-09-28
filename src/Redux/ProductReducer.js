import { PRODUCT_ERROR, PRODUCT_FILTER, PRODUCT_LOADING, PRODUCT_SEARCH, PRODUCT_SUCESS, PRODUCT_SEARCH_FILTER, PRODUCT_FILTER_SEARCH } from "./ProductConstant"

const initialData = {
   fetchedData:[],
   filterData:[],
   loading:false,
   error:false
}
export const productReducer = (store = initialData, {type, payload}) => {
    switch(type){
        case PRODUCT_LOADING : return {...store, loading:true}
        case PRODUCT_ERROR : return {...store, loading:false,error:true}
        case PRODUCT_SUCESS : return {...store , fetchedData:[...payload] ,filterData:[...payload] , error:false,loading:false}
        case PRODUCT_FILTER : return {...store, filterData:[...filterHandler(store.fetchedData, payload)]}
        case PRODUCT_SEARCH : return {...store , filterData:[...searchDataHandler(store.fetchedData,payload)]}
        case PRODUCT_SEARCH_FILTER : return {...store , filterData:[...searchDataHandler(store.filterData,payload)]}
        case PRODUCT_FILTER_SEARCH : return {...store , filterData:[...filterHandler(store.filterData,payload)]}
        default : return store
    }

}

const filterHandler = (data , selectedValues)=>{
   // console.log(selectedValues + " ------> line 22 of product reducer");

   let color = [];
   selectedValues.filter((value) => {
      if(value === 'Red'){
         color.push('Red');
      }
      else if(value === 'Blue'){
         color.push('Blue')
      }
      else if(value === 'Green'){
         color.push('Green');
      }
   })
   // console.log(color);

   let gender = [];
   selectedValues.filter((value) => {
      if(value === "Men"){
         gender.push("Men");
      }
      else if(value === "Women"){
         gender.push("Women")
      }
   })
   // console.log(gender);

   let price = [];
   selectedValues.filter((value) => {
      if(value === "250"){
         price.push("250");
      }
      else if(value === "251"){
         price.push("251")
      }
      else if(value === "450"){
         price.push("450");
      }
   })
   // console.log(price);

   let type = [];
   selectedValues.filter((value) => {
      if(value === "Polo"){
         type.push("Polo");
      }
      else if(value === "Hoodie"){
         type.push("Hoodie")
      }
      else if(value === "Basic"){
         type.push("Basic");
      }
   })
   // console.log(type);

   let result = [];
   let newData = [...data];

   if(color.length !== 0){
      newData.filter((ele) => {
         if(color.includes(ele.color)){
            result.push(ele);
         }
      })
   }
   else{
      result = [...newData]
   }
   // console.log(result)

   newData = []
   newData = [...result]
   result = [];

   if(gender.length !== 0){
      newData.filter((ele) => {
         if(gender.includes(ele.gender)){
            result.push(ele);
         }
      })
   }
   else{
      result = [...newData]
   }
   // console.log(result)
   
   newData = []
   newData = [...result]
   result = [];

   if(type.length !== 0){
      newData.filter((ele) => {
         if(type.includes(ele.type)){
            result.push(ele);
         }
      })
   }
   else{
      result = [...newData]
   }
   // console.log(result)

   newData = []
   newData = [...result]
   result = [];

   if(price.length !== 0){
      newData.filter((e) => {
         if(price.includes("250")){
            if(e.price <= 250){
               result.push(e);
            }
         }

         if(price.includes("251")){
            if(e.price >= 251 && e.price < 450){
               result.push(e);
            }
         }

         if(price.includes("450")){
            if(e.price >= 450){
               result.push(e);
            }
         }
      })
   }
   else{
      result = [...newData]
   }

   // console.log(result);
   return result;
}

const searchDataHandler = (data, inputValues)=>{
      let arr = Object.values(inputValues);

      let result = [];
      data.filter((e) => {
         arr.forEach(ele => {
            if(((e.name).toLowerCase()).includes(ele)){
               result.push(e);
               return;
            }
            else if(((e.type).toLowerCase()).includes(ele)){
               result.push(e);
               return;
            }
            else if(((e.color).toLowerCase()).includes(ele)){
               result.push(e);
               return;
            }
            else if(((e.gender).toLowerCase()).includes(ele)){
               result.push(e);
               return;
            }
         });
      });

      // console.log(result)
      return result;
}