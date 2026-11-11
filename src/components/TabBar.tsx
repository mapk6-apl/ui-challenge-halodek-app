import React from 'react'; 
import { View, Text, Pressable, StyleSheet } from 'react-native';

// TabBar component props interface to define types for state management props passed from parent
interface TabBarProps{
    tabs: string[];
    activeTab: string;
    onSelectTab: (tab: string) => void;
}

// TabBar component to allow users to switch between Chat, Status and calls
// The Map Array Iteration generates tab buttons dynamically with unique 'key'props
export function TabBar({tabs, activeTab, onSelectTab}: TabBarProps){
    return(
        <View style={styles.tabContainer}>
            {tabs.map((tab) => {
                // Here we ceck if the current iteated tab matches the active state
                const isActive = activeTab === tab;
                return(
                    <Pressable key={tab} onPress={() => onSelectTab(tab)}
                    style={[styles.tabButton, isActive && styles.activeTabButton]}>
                        <Text style={[styles.tabText, isActive && styles.activeTabButton]}>{tab}</Text>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#FDF1EB',
        borderRadius: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        padding: 4
    },
})