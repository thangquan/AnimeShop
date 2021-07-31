import React,{useState,useEffect} from 'react';
import {StyleSheet, Text, View, Pressable, TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {fetchProductsSearch} from '../../redux/actions/productsSearch';
import {addItemSearch} from '../../redux/actions/historySearch';
import {useDispatch} from 'react-redux'
const Header = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [value, onChangeText] = useState('');
  return (
    <View style={styles.container}>
            <View style={styles.containerSearch}>
                <Icon style={{ padding: 5 }} name="search-outline" size={25} color="#000" />
                <TextInput
                    onChangeText={(text) =>{
                        onChangeText(text);
                    }}
                    onSubmitEditing={() =>{
                        if(value.trim()!=='')
                        {
                        dispatch(fetchProductsSearch(value));
                        navigation.navigate('SearchProductsOK',{value:value})
                         dispatch(addItemSearch(value));
                        }
                    }}
                    value={value}
                    style={{ flex: 1, paddingVertical: 5, fontFamily: 'Nunito-Bold', }} placeholder="Bạn tìm gì hôm nay?"></TextInput>
                {
                    value !== '' ? (
                        <TouchableOpacity
                            onPress={() => {
                                onChangeText('')
                            }}
                        >
                            <Icon style={{ padding: 5 }} name="close-outline" size={15} color="#000" />
                        </TouchableOpacity>
                    ) : null
                }
            </View>
            <Pressable
                onPress={()=>navigation.navigate('Home')}
            >
                <Text style={styles.txtCancel}>Cancel</Text>
            </Pressable>
        </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor:'#09bff2'

    },
    containerSearch: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginVertical: 10,
        marginRight: 10,
        borderRadius: 5,
    },
    txtCancel: { textAlign: 'center', color: '#000' }
});
