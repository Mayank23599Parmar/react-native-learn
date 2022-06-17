import { createNativeStackNavigator, NavigationContainer } from '@react-navigation/native-stack';
import Categoreis from '../screens/Categoreis';
import CategoresMeal from '../screens/CategoresMeal';
import MealDetails from '../screens/MealDetails';


export default function MealRouter() {
    return <NavigationContainer>
        <MealNavigation.Navigator initialRouteName="categories">
            <MealNavigation.Screen name='categories' component={Categoreis} />
            <MealNavigation.Screen name='categoresMeal' component={CategoresMeal} />
            <MealNavigation.Screen name='categoreMealDetailssMeal' component={MealDetails} />
        </MealNavigation.Navigator>
    </NavigationContainer>
}