import React from 'react'; 
import { View, Text, Pressable, StyleSheet } from 'react-native';

// TabBar component props interface to define types for state management props passed from parent
interface TabBarProps{
    tabs: string[];
    activeTab: string;
    onSelectTab: (tab: string) => void;
}