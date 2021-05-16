import {REMOVE_FROM_CART, ADD_TO_CART, INCREASE_ITEM, DECREASE_ITEM} from '../types/types'

export function addToCart(payload) {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export function removeFromCart(payload) {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}

export function increaseItem(payload) {
    return {
        type: INCREASE_ITEM,
        payload
    }
}

export function decreaseItem(payload){
    return  {
        type: DECREASE_ITEM,
        payload
    }
}