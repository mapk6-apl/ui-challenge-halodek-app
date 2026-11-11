import { View, StyleSheet } from "react-native";
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {StatusBar} from 'expo-status-bar'
import {Header} from '../components/Header'
import {TabBar} from '../components/TabBar'
import {useState} from 'react'

const CHAT_DATA: ChatData[] = [
    { id: '1', name: 'Faza Dzikrulloh', time: '14.30', message: 'Typing...', isTyping: true, avatar: '', unreadCount: 0 },
  { id: '2', name: 'Hatypo Studio', time: '14.30', message: 'Can you help me to do with new project...', sender: 'Faza', avatar: '', unreadCount: 2 },
  { id: '3', name: 'Zhofran A', time: '14.00', message: 'I think we should upgrade the social media...', avatar: '', unreadCount: 2 },
  { id: '4', name: 'Vito Arvy', time: '13.40', message: "Okay adhit, I'll tell faza about it 👍🏽", avatar: '', unreadCount: 0 },
  { id: '5', name: 'Raul', time: 'Yesterday', message: 'Thanks Raul! 🙏🏽✨', avatar: '', unreadCount: 0, isRead: true },
  { id: '6', name: 'Farhan Bagas', time: '29/08/22', message: "Great work farhan! 👍🏽 I'll tell faza about logo...", avatar: '', unreadCount: 0, isRead: true },
  { id: '7', name: 'Abdull', time: '28/08/22', message: 'Perfecto!🔥 I will check it later', avatar: '', unreadCount: 0, isRead: true },
  { id: '8', name: 'Ibe hatypo', time: '27/08/22', message: 'nicely done bro!👍🏽', avatar: '', unreadCount: 0 }

]

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('Chat');
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
