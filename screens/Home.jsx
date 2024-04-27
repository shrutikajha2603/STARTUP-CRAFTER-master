import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header';
import Banners from '../components/home_comp/Banners';
import StartupCredentials from '../components/home_comp/StartupCredentials';
import Events from '../components/home_comp/Events';
import { useTheme } from '@react-navigation/native';

const  Home = ({navigation}) => {
    const {colors} = useTheme();
    const theme = useTheme();
    return (
        <View style={{ backgroundColor: '#EEEEEE', flex: 1, }}>
            <StatusBar barStyle={theme.dark ? "light-context" : "dark-content"}/>
                <Header home={true}  />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Banners />
                <StartupCredentials />
                <Events />
            </ScrollView>
        </View>
    );
}

export default Home;
