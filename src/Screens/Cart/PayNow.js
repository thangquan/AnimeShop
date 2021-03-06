import {formatNumber} from '../../utils';

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from "@react-navigation/native";

export default function PayNow() {
    const navigation = useNavigation();
  const dispatch = useDispatch();
  const dataCart = useSelector(state => state.cart);
  const handleOnPayNow =() => {
      navigation.navigate('Payment')
  }
  const showTotalPrice = (dataCart) =>{
      var total= 0;
      if(dataCart.length >0)
        {
          for (let index = 0; index < dataCart.length; index++) {
              total = dataCart[index].product.priceNew * dataCart[index].quantity + total;
          }
        }
      return formatNumber(total);
  }
  const showTotalQuantity = (dataCart) =>{
      var total= 0;
      if(dataCart.length >0)
        {
          for (let index = 0; index < dataCart.length; index++) {
              total = dataCart[index].quantity + total;
          }
        }
      return Intl.NumberFormat().format(total);
  }
  return (
    <View style={styles.payNowContainer}>
      <View style={styles.total}>
        <View style={styles.totalProduct}>
          <Text style={styles.totalProductQuantity}>{showTotalQuantity(dataCart)}</Text>
          <Text>Sản phẩm</Text>
        </View>
        <View style={styles.totalPrice}>
          <Text>Thành tiền: </Text>
          <Text style={styles.totalPriceNumber}>{showTotalPrice(dataCart)} đ</Text>
        </View>
      </View>
      <Button
        onPress={() =>handleOnPayNow()}
        buttonStyle={styles.buttonPay}
        titleStyle={styles.buttonPayTitle}
        title={'Tiến hàng đặt hàng'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  payNowContainer: {
    // justifyContent:'space-around',
    backgroundColor: 'white',
    padding: 20,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  totalProduct: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalProductQuantity: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingRight: 6,
  },
  totalPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalPriceNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  buttonPay: {
    borderRadius: 10,
    backgroundColor: '#09bff2'
  },
  buttonPayTitle: {
    fontSize: 16,
  },
});
