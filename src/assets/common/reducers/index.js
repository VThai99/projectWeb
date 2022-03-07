import {ADDTOCART, REMOVE, UPDATEQUANTITY } from "../actions"

const countLocalStorage = JSON.parse(localStorage.getItem("count") || 0)
const cart = JSON.parse(localStorage.getItem("cart") || "[]")
const intiCount = {
   numberCart: countLocalStorage,
   Cart: cart
}
function reducer(state = intiCount, action) {
    console.log(action.newItem)
    switch (action.type) {
        case ADDTOCART :
            if(state.numberCart === 0)
            {
                let cart = {
                    id: action.newItem.id,
                    quantity: 1,
                    name: action.newItem.name,
                    price: action.newItem.price,
                    image: action.newItem.image,
                    total: action.newItem.price
                }
                state.Cart.push(cart);
            }
            else{
                let check = false;
                state.Cart.map((item,key)=>{
                    if(item.id === action.newItem.id)
                    {
                        state.Cart[key].quantity++;
                        state.Cart[key].total = state.Cart[key].price *   state.Cart[key].quantity;
                        check=true;
                    }
                    return 'ok';
                });
                if(check === false){
                    let cart = {
                        id: action.newItem.id,
                        quantity: 1,
                        name: action.newItem.name,
                        price: action.newItem.price,
                        image: action.newItem.image,
                        total: action.newItem.price
                    }
                    state.Cart.push(cart);
                }
            }
            return{
               ...state,
               numberCart: state.numberCart + 1
            }
        case UPDATEQUANTITY :
            let count = 0;
            let updateQuantity = parseInt(action.updateQuantity)
            state.Cart.map((item,key)=> {
                if(item.id === action.id)
                {
                    state.Cart[key].quantity = updateQuantity;
                    state.Cart[key].total = state.Cart[key].price  *  state.Cart[key].quantity;
                }
                return "ok"
            })
            state.Cart.map((item)=> {
                count += item.quantity;
                return count 
            })
            return {
                ...state,
                numberCart: count
            }
        case REMOVE:
            const numberMinus = [];
            state.Cart.map((item) => {
                if(item.id === action.id){
                    numberMinus.push(item)
                }
                return "okk";
            })
            console.log(numberMinus)
            return{
                ...state,
                Cart: state.Cart.filter(item => item.id !== action.id),
                numberCart: state.numberCart - numberMinus[0].quantity
            }
        default:
            return state;
    }
}

export default reducer;