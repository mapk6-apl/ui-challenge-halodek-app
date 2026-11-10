import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native'

export interface ChatData {
    id: string;
    name: string;
    time: string;
    message: string;
    sender?: string;
    avatar: string;
    unreadCount: string;
    isTyping?: string;
    isRead: string;
}

interface ChatItemProps {
    item: ChatData;
}

export function ChatItem({item}: ChatItemProps){
    
}