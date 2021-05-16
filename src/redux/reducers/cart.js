
import { ADD_TO_CART, DECREASE_ITEM, INCREASE_ITEM, REMOVE_FROM_CART } from '../types/types'

const initialState = {
    products: []
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            let productInCart = false;
            const updatedProducts = state.products.map(product => {
                if (product.id === action.payload.product.id) {
                    productInCart = true;
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product;
                }
            })

            if (!productInCart) {
                return Object.assign({}, state, {
                    products: [
                        ...state.products,
                        {
                            ...action.payload.product,
                            quantity: 1
                        }
                    ]
                })
            } else {
                return Object.assign({}, state, {
                    products: updatedProducts
                });
            }
        case REMOVE_FROM_CART:
            const filteredProducts = state.products.filter(product => {
                return product.id !== action.payload.id
            });

            return Object.assign({}, state, {
                products: filteredProducts
            });
        case INCREASE_ITEM:
            let incResults = state.products.map(product=>{
                if(product.id===action.payload.id){
                    product={...product, quantity: product.quantity + 1}
                }
                return product
            })
            return {
                ...state.products,
                products: incResults
            };
        case DECREASE_ITEM:
            let decResults = state.products.map(product=>{
                if(product.id===action.payload.id){
                    product={...product, quantity: product.quantity===1 ? product.quantity=1 : product.quantity - 1}
                }
                return product;
            })
            return {
                ...state.products,
                products: decResults
            }
        default:
            return state;
    }
}

