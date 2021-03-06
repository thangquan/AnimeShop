import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDataCart = () => async (dispatch) => {
  try {
    const jsonValue = await AsyncStorage.getItem('CART')
    const data =  jsonValue != null ? JSON.parse(jsonValue) : [];
    dispatch(setDataCart(data))
  } catch(e) {
    console.log(e)
  }
}

export const setDataCart =(data) => {
  return {
        type:'SET_DATA_CART',
        payload:data,
    }
}
export const addToCart = (product,quantity,model) => {
    return {
        type:'ADD_TO_CART',
        payload:product,
        quantity,
        model
    }
}

export const deleteProductToCart = (product,model) => {
    return {
        type:'DELETE_PRODUCT_TO_CART',
        payload:product,
        model,
    }
}

export const UpdateQuantityProductToCart = (product,quantity,model) => {
    return {
        type:'UPDATE_QUANTITY_PRODUCT_TO_CART',
        payload:product,
        quantity,
        model
    }
}
