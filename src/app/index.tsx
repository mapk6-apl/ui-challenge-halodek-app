import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View, Pressable, Text, Image, Modal } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { TabBar } from '../components/TabBar';
import { Ionicons } from '@expo/vector-icons';
import { ChatItem, ChatData } from '../components/ChatItem';

const CHAT_DATA: ChatData[] = [
  { id: '1', name: 'Faza Dzikrulloh', time: '14.30', message: 'Typing...', isTyping: true, avatar: require('../../assets/images/Faza.jpg'), unreadCount: 0 },
  { id: '2', name: 'Hatypo Studio', time: '14.30', message: 'Can you help me to do with new project...', sender: 'Faza', avatar: require('../../assets/images/Hatypo-studio.jpeg'), unreadCount: 2 },
  { id: '3', name: 'Zhofran A', time: '14.00', message: 'I think we should upgrade the social media...', avatar: require('../../assets/images/Zhofran.jpg'), unreadCount: 2 },
  { id: '4', name: 'Vito Arvy', time: '13.40', message: "Okay adhit, I'll tell faza about it 👍🏼", avatar: require('../../assets/images/Vito.jpg'), unreadCount: 0 },
  { id: '5', name: 'Raul', time: 'Yesterday', message: 'Thanks Raul! 🙏🏼✨', avatar: require('../../assets/images/Raul.jpg'), unreadCount: 0, isRead: true },
  { id: '6', name: 'Farhan Bagas', time: '29/08/22', message: "Great work farhan! 👍🏼 I'll tell faza about logo...", avatar: require('../../assets/images/Farhan.jpg'), unreadCount: 0, isRead: true },
  { id: '7', name: 'Abdull', time: '28/08/22', message: 'Perfecto!🔥 I will check it later', avatar: require('../../assets/images/Abdull.jpg'), unreadCount: 0, isRead: true },
  { id: '8', name: 'Ibe hatypo', time: '27/08/22', message: 'nicely done bro!🤙🏻', avatar: require('../../assets/images/Ibe.jpg'), unreadCount: 0 }

]

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('Chat');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<ChatData | null>(null);

  // here we filter the chat by name or message content
  const filteredChats = CHAT_DATA.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* rendering the Header component */}
        <Header searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          isSearching={isSearching}
          onToggleSearch={() => {
            setIsSearching(!isSearching);
            if (isSearching)
              setSearchQuery('');
          }} />
        {/* tab bar with state selection callback */}
        <TabBar tabs={['Chat', 'Status', 'Calls']} 
        activeTab={activeTab} 
        onSelectTab={(tab) => setActiveTab(tab)} />

{/* filtered chat list */}
        <FlatList
          data={filteredChats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (<ChatItem item={item} onPressAvatar={(user) => setSelectedUser(user)}/>)}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listPadding}
          showsVerticalScrollIndicator={false} 
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No chats found for "{searchQuery}"</Text>
            </View>
          }/>

        {/* the Add action button; FAB-floating action button */}
        <Pressable style={styles.fab}>
          <Ionicons name="add" size={32} color="#FFFFFF" />
        </Pressable>

        {/* WhatsApp-style centered profile pic (when opened); Android style lol🙈*/}
        <Modal visible={selectedUser !== null} transparent animationType="fade" onRequestClose={() => setSelectedUser(null)}>
          <Pressable style={styles.modalOverlay} onPress={() => setSelectedUser(null)}>
            <Pressable style={styles.avatarCard} onPress={(e) => e.stopPropagation()}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{selectedUser?.name}</Text>
              </View>

              {selectedUser && (
                <Image source={selectedUser.avatar} style={styles.largeAvatar} />
              )}

              {/* Quick Action Icons */}
              <View style={styles.cardActions}>
                <Pressable style={styles.actionBtn} onPress={() => setSelectedUser(null)}>
                  <Ionicons name="chatbubble-ellipses" size={22} color="#F25822" />
                </Pressable>
                <Pressable style={styles.actionBtn} onPress={() => setSelectedUser(null)}>
                  <Ionicons name="call" size={22} color="#F25822" />
                </Pressable>
                <Pressable style={styles.actionBtn} onPress={() => setSelectedUser(null)}>
                  <Ionicons name="information-circle" size={22} color="#F25822" />
                </Pressable>
                </View>
                </Pressable>
          </Pressable>
          </Modal> 
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
    backgroundColor: '#F86320',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  }, emptyContainer: { 
    paddingTop: 40, 
    alignItems: 'center'
  }, emptyText: { 
    fontSize: 14, 
    color: '#8E8E93'
  }, modalOverlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'center', 
    alignItems: 'center' 
  }, avatarCard: { 
    width: 260, 
    backgroundColor: '#FFFFFF',
     borderRadius: 16, 
     overflow: 'hidden', 
     alignItems: 'center', 
     elevation: 10, 
     shadowColor: '#000', 
     shadowOffset: { 
      width: 0, 
      height: 5 
    }, shadowOpacity: 0.3, 
    shadowRadius: 10
  }, cardHeader: { 
    width: '100%', 
    paddingVertical: 10, 
    paddingHorizontal: 14, 
    backgroundColor: 'rgba(0,0,0,0.03)'
  }, cardTitle: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#1A1A1A'
  }, largeAvatar: { 
    width: 260, 
    height: 260, 
    resizeMode: 'cover'
  }, cardActions: { 
    flexDirection: 'row', 
    width: '100%', 
    justifyContent: 'space-around', 
    paddingVertical: 12, 
    backgroundColor: '#FFFFFF'
  }, actionBtn: { 
    padding: 8
  }
});
