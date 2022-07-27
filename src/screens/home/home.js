import React from 'react';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { Card } from 'react-native-paper'
import styles from './styles_home';
import DATA from '../../api/list';
import Actions from '../../api/actions';
import MoodScreens from '../moodSelection/moodSelection';


const Item = ({ id, date, status, descript, actions, image, hour, navigation }) => {
  return (
    <TouchableOpacity>
      <Card style={styles.cardContainer}
        onPress={() => navigation.navigate('MoreDetails', { itemId: id })} >
        <View style={{ flexDirection: 'row' }}>

          <Image style={{ width: 57, height: 57, marginBottom: 10 }} source={image} />

          <View style={{ flexDirection: 'column' }}>

            <Text style={styles.Week}>{date}</Text>

            <View style={{ flexDirection: 'row' }}>

              <Text style={[styles.Status, { color: cores[status] }]}>{status}</Text>
              <Text style={styles.Hora}>{hour}</Text>
              
            </View>
          </View>
        </View>

        <Actions data={actions} />
        <Text style={styles.Descrip}>{descript.substring(0, 41) + '...'}</Text>

      </Card>
    </TouchableOpacity>
  )
};
const cores = {
  BEM: '#E24B4B',
  MAL: '#4B75E2',
  TRISTE: '##6EACE4',
  OK: '#FFA770',
  FELIZ: '#39B20F',
  INDIFERENTE: '#000000',
}

const Home = (props) => {
  const renderItem = ({ item }) => (
    <Item
      date={item.date}
      hour={item.hour}
      status={item.status}
      descript={item.descript}
      actions={item.actions}
      image={item.image}
      navigation={props.navigation}
      id={item.id}
    />
  );

return (
    <FlatList
      data={DATA}
      ListEmptyComponent={MoodScreens}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
);
}

export default Home
