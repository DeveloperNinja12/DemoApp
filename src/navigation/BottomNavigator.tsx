import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import ProfileScreen from '../ProfileScreen';
import SavedPost from '../SavedPost';

const BottomTabNavigator = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        headerTitle: '',
      }}>
      <BottomTabNavigator.Screen name="Home" component={HomeScreen} />
      <BottomTabNavigator.Screen name="SavePost" component={SavedPost} />
      <BottomTabNavigator.Screen name="Profile" component={ProfileScreen} />
    </BottomTabNavigator.Navigator>
  );
};

export default BottomTab;
