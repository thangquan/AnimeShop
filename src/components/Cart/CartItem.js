import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {deleteProductToCart,UpdateQuantityProductToCart} from '../../redux/actions/cart'
import {useDispatch} from 'react-redux'
export default function CartItem({item}) {
  const dispatch = useDispatch()
  const product = item.product;
  const currentPrice = Intl.NumberFormat().format(
    product.price - (product.price * product.sale) / 100,
  );
  const parentPrice = Intl.NumberFormat().format(product.price);
  return (
    <View style={styles.cartItem}>
      <Image
        style={styles.image}
        source={{
          uri: product.image,
        }}
      />
      <View style={styles.main}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {product.title}
        </Text>
        <View style={styles.price}>
          <Text style={styles.currentPrice}>{currentPrice} đ</Text>
          <Text style={styles.parentPrice}>{parentPrice} đ</Text>
        </View>
        <View style={styles.quantity}>
          <TouchableOpacity 
            style={styles.quantityDecrease}
            onPress={()=>{
              dispatch(UpdateQuantityProductToCart(product,-1))
            }}
            disabled={item.quantity >1 ?false:true}
            >
            <Icon name="caret-back-circle-outline" size={24} color={item.quantity >1 ?"black" : "#999"}/>
          </TouchableOpacity>
          <Text style={styles.quantityNumber}>{item.quantity}</Text>
          <TouchableOpacity 
            style={styles.quantityIncrease}
            onPress={()=>{
              dispatch(UpdateQuantityProductToCart(product,1))
            }}
            
            >
            <Icon name="caret-forward-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity 
          style={styles.deleteItem}
          onPress={()=>{
            dispatch(deleteProductToCart(product));
          }}
          >
        <Icon name="trash" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const WIDTH_IMAGE = windowWidth / 3.5;
const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 5,
    padding: 10,
    elevation: 1,
  },
  image: {
    width: WIDTH_IMAGE,
    height: WIDTH_IMAGE,
    borderRadius: 5,
    resizeMode: 'stretch',
  },
  main: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
  },
  price:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  currentPrice: {
    fontSize: 16,
    color: 'red',
  },
  parentPrice: {
    paddingHorizontal: 5,
    color: '#999',
    fontSize: 14,
    textDecorationLine: 'line-through',
    fontStyle: 'italic',
  },
  quantity: {
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityNumber: {
    fontSize: 16,
    paddingHorizontal: 8,
  },
  deleteItem: {
    alignSelf: 'center',
    paddingLeft: 10,
    color: 'black',
  },
});
