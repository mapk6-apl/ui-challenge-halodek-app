import { Ionicons } from '@expo/vector-icons'; //for the orange ticks
import { Image, Pressable, StyleSheet, Text, View, ImageSourcePropType } from 'react-native';

export interface ChatData {
    id: string;
    name: string;
    time: string;
    message: string;
    sender?: string;
    avatar: ImageSourcePropType;
    unreadCount: number;
    isTyping?: boolean;
    isRead?: boolean;
}

interface ChatItemProps {
    item: ChatData;
    onPressAvatar: (item: ChatData) => void;
}

export function ChatItem({ item }: ChatItemProps) {
    return (
        <Pressable style={styles.chatRow}>
            {/* profile pic */}
            <Image source={item.avatar } style={{width: 50, height: 50, borderRadius: 25}} />

            {/* message details */}
            <View style={styles.chatContent}>
                <View style={styles.chatHeader}>
                    <Text style={styles.contactName}>{item.name}</Text>
                    <Text style={styles.timeText}>{item.time}</Text>
                </View>

                <View style={styles.chatSubHeader}>
                    <Text style={[styles.messageText, item.isTyping && styles.typingText]} numberOfLines={1}>
                        {item.sender && <Text style={styles.senderText}>{`${item.sender} `}</Text>}
                        {item.message}
                    </Text>

                    {/* badge for unread message */}
                    {item.unreadCount > 0 && (
                        <View style={styles.unreadBadge}>
                            <Text style={styles.unreadText}>{item.unreadCount}</Text>
                        </View>
                    )}

                    {/* double ticks icons for read/seen messages */}
                    {item.isRead && item.unreadCount === 0 && (
                        <Ionicons name="checkmark-done" size={18} color="#F25822"/>
                    )}
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    chatRow:{
        flexDirection: 'row',
        paddingVertical: 12,
        alignItems: 'center'
    },
    avatar:{
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: '#E1E1E1'
    },
    chatContent: {
        flex: 1,
        marginLeft: 14
    },
    chatHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4
    },
    contactName:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333'
    },
    timeText: {
        fontSize: 12,
        color: '#333333'
    },
    chatSubHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    messageText:{
        flex: 1,
        fontSize: 14,
        color: '#333333',
        marginRight: 8
    },
    typingText:{
        color: '#F86320',
        fontWeight:'600'
    },
    unreadBadge:{
        backgroundColor: '#F86320',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'space-between' ,
        alignItems: 'center'
    },
    unreadText:{
        color: '#FFFFFF',
        fontSize: 14,
    },
    senderText:{
        color: '#F86320'
    }
});