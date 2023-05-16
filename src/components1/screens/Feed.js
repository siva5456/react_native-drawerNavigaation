import { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Alert, TextInput } from 'react-native';
// import { useContext } from 'react';
// import { OPenContext } from '../../../App';
// const { IsOpen:isOpen,SetIsOpen:setIsOpen}=useContext(OPenContext)
// console.log(isOpen);

export default function Feed({ navigation }) {

  const [inputVal, setInputval] = useState({ Name: "", Password: "" })
  const { Name, Password } = inputVal


  // console.log('====================================');
  // console.log(inputVal);

  const myAlert = () => {

    Alert.alert(
      'open side nav',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later presopenDrawersed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK', onPress: () => (navigation.openDrawer(), console.log('OK Pressed'))
        },
      ],
      { cancelable: false },
    )
  }



  return (
    <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#fff" }} >
      <TouchableOpacity
        onLongPress={() => navigation.openDrawer()}
        onPress={() => navigation.openDrawer()}
        style={{ width: 12, backgroundColor: "#fff" }} ></TouchableOpacity>
      <View style={{ width: 381, backgroundColor: "#fff", justifyContent: 'center', alignItems: 'center' }} >
        <Text>{Name}</Text>


        <TextInput
          style={{ height: 50, width: 190, borderWidth: 1, borderColor: "purple", borderRadius: 5, padding: 10, fontSize: 17 }}
          placeholder='Enter name'
          defaultValue={Name}
          onChangeText={(val) => { setInputval({ ...inputVal, Name: val }) }}

        />

        <View style={{ margin: 10 }} />
        {/* {Password && <Text style={{ color: 'red' }} >Enter Rest Of {12 - Password.length} charectors</Text>
        } */}

        <TextInput
          style={{ height: 50, width: 190, borderWidth: 1, borderColor: "purple", borderRadius: 5, padding: 10, fontSize: 17 }}
          placeholder={'Enter name'}
          secureTextEntry
          defaultValue={Password}
          onChangeText={(val) => { setInputval({ ...inputVal, Password: val }) }}
        />
        <View style={{ margin: 10 }} />

        <Button title='alert Button' onPress={myAlert} />

      </View>

    </View>
  );
}
