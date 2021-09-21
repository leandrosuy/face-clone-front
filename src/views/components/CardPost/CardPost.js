import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './CardPostStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function App() {
  return(
    <View style={styles.container}>
      <Image
        style={styles.fotoAvatar} 
        source={{
          uri: 'https://scontent.fbel12-1.fna.fbcdn.net/v/t39.30808-6/242233596_392375812410448_4615417442131514643_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YxgXSdIrV1YAX8UCSgT&_nc_ht=scontent.fbel12-1.fna&oh=b8111020f591b5e7ea982f1b105a3a70&oe=614EA29C'
        }}
      />
      <View>
      <Text style={styles.texto}>Leandro Dantas</Text>
      <Text>10 hrs</Text>
      </View>
      <AntDesign 
        name="ellipsis1"
        size={30}
        color={"black"}
      />
    </View>
  )
}