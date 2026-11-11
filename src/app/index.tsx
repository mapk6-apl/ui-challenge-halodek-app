import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View, Pressable } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { TabBar } from '../components/TabBar';
import { Ionicons } from '@expo/vector-icons';
import {ChatItem, ChatData} from '../components/ChatItem';

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
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* rendering the Header component */}
        <Header />
        {/* tab bar with state selection callback */}
        <TabBar tabs={['Chat', 'Status', 'Calls']} activeTab={activeTab} onSelectTab={(tab) => setActiveTab(tab)} />

        <FlatList
          data={CHAT_DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ChatItem item={item} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listPadding}
          showsVerticalScrollIndicator={false} />

        {/* the Add action button */}
        <Pressable style={styles.fab}>
          <Ionicons name="add" size={32} color="FFFFFF" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  safeContainer: { flex: 1, backgroundColor: "#FFFFFF" },
  listPadding: {
    paddingHorizontal: 16,
    paddingBottom: 80
  },
  separator: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginLeft: 66
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F25822',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  }
});
