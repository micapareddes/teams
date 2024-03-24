import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GroupParticipants } from '@screens/GroupParticipants'
import { Groups } from '@screens/Groups'
import { NewGroup } from '@screens/NewGroup'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name='groups'
                component={Groups}
            />
            <Screen
                name='new'
                component={NewGroup}
            />
            <Screen
                name='participants'
                component={GroupParticipants}
            />
        </Navigator>
    )
}