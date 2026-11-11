import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'

export interface ChatData {
    id: string;
    name: string;
    time: string;
    message: string;
    sender?: string;
    avatar: string;
    unreadCount: number;
    isTyping?: string;
    isRead: string;
}

interface ChatItemProps {
    item: ChatData;
}

export function ChatItem({ item }: ChatItemProps) {
    return (
        <Pressable style={styles.chatRow}>
            {/* profile pic */}
            <Image source={{ uri: item.avatar }} style={styles.avatar} />

            {/* message details */}
            <View style={styles.chatContent}>
                <View style={styles.chatHeader}>
                    <Text style={styles.contactName}>{item.name}</Text>
                    <Text style={styles.timeText}>{item.time}</Text>
                </View>

                <View style={styles.chatSubHeader}>
                    <Text style={[styles.messageText, item.isTyping && styles.typingText]} numberOfLines={1}>
                        {item.sender ? `${item.sender}: ${item.message}` : item.message}
                    </Text>

                    {/* badge for unread message */}
                    {item.unreadCount > 0 && (
                        <View style={styles.unreadBadge}>
                            <Text style={styles.unreadText}>{item.unreadCount}</Text>
                        </View>
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
})