import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import increment  from './redux/actions';
import reducer from './redux/reducers';
import store from './redux/store';





// //dispatch
// store.dispatch(increment);

export default function App() {
  var [count,setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>number: {count}</Text>
      <Pressable style={{width:100, height:100, backgroundColor:'#bbb'}}  onPress={()=>{
        store.dispatch(increment);
        setCount(store.getState().count)
      }}
      >

      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
