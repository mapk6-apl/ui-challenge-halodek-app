import { View, StyleSheet } from "react-native";
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {StatusBar} from 'expo-status-bar'
import {Header} from '../components/Header'
import {TabBar} from '../components/TabBar'

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar style="dark"/>
      <View style={styles.container}>
        {/* rendering the Header component */}
        <Header/>
        {/* tab bar with state selection callback */}
        <TabBar tabs={['Chat', 'Status', 'Calls']} activeTab={activeTab} onSelectTab={(tab) => setActiveTab(tab)}/>
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, backgroundColor: "#FFFFFF"},
  safeContainer:{flex:1, backgroundColor: "#FFFFFF"}
});
