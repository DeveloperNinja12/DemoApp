//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPostsRequest} from './redux/reducers/postsReducer';
import {RootState} from './redux';

// create a component
const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {posts, loading, error} = useSelector(
    (state: RootState) => state.posts,
  );

  console.log('posts====', posts);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  const renderItem = ({item}: any) => {
    return (
      <Pressable onPress={() => navigation.navigate('SavePost')}>
        <View style={{marginRight: 6}}>
          <View
            style={{
              width: '95%',
              height: 200,
              backgroundColor: 'red',
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 20,
              }}>
              <Text>{item.tags[0]}</Text>
              <Text>{`${item.reactions.likes} likes, ${item.reactions.dislikes} dislikes`}</Text>
            </View>
          </View>
          <Text
            style={{
              width: '90%',
              fontWeight: '700',
              fontSize: 22,
              paddingVertical: 10,
            }}>
            {item.title}
          </Text>
        </View>
      </Pressable>
    );
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={{color: 'red'}}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: '700', fontSize: 28, paddingVertical: 30}}>
        Recommended
      </Text>
      <FlatList
        horizontal
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

//make this component available to the app
export default HomeScreen;
