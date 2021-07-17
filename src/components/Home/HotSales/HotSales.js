import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Product from '../NewProducts/Product';
import { useNavigation } from '@react-navigation/native';
import {useSelector } from 'react-redux';
import Loading from '../../../Screens/Loading';

const HotSales = () => {
  const navigation = useNavigation();
  const dataProducts = useSelector(state => state.products.data);
  const loading = useSelector(state => state.products.loading);
  const result = [...dataProducts].sort((a, b) => (b.sale- a.sale));
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>😍 KHUYẾN MÃI SIÊU HOT!!!</Text>
        <TouchableOpacity style={styles.showAll}
          onPress={()=>navigation.navigate('ListProducts',{title:'😍 KHUYỄN MẠI SIÊU HOT!!!',data:result})}
        >
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>All</Text>
          <Icon name="chevron-forward-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          horizontal
          // pagingEnabled
          data={result}
          renderItem={({item, index}) => <Product item={item} />}
          keyExtractor={item => item._id}
        />
      )}
    </View>
  );
};

export default HotSales;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 5,
  },
  header: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  showAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
