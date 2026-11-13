import { View, Text, StyleSheet, TextInput, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react'

interface HeaderProps {
    searchQuery: string;
    onSearchChange: (text: string) => void;
    isSearching: boolean;
    onToggleSearch: () => void;
}

// This is the Header Component to display the app title and icon actions.
// I will use Flexbox 'row' to align the elements horizontally and justifyContent to plave the app name on the left, and icons to the right
export function Header({ searchQuery, onSearchChange, isSearching, onToggleSearch }: HeaderProps) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <View style={styles.topBar}>
            {isSearching ? (
                // interactive search bar
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={22} color="#333333" style={styles.searchIcon} />
                    <TextInput styles={styles.searchInput} placeholder="Search chats..." placeholderTextColor="#8E8E93" value={searchQuery} onChangeText={onSearchChange} autoFocus />
                    {/* the hitslop is the additional distance outside of this view in which a press is detected */}
                    <Pressable onPress={onToggleSearch} hitSlop={10}>
                        <Ionicons name="close" size={24} color="#333333" />
                    </Pressable>
                </View>
            ) : (
                <>
                    {/* App Name */}
                    <Text style={styles.appTitle}>HALODEK</Text>
                    {/* icons */}
                    <View style={styles.headerIcons}>
                        {/* Native search icon */}
                        <Pressable onPress={onToggleSearch} hitSlop={8}>
                            <Ionicons name="search" size={22} color="#333333" />
                        </Pressable>
                        {/* Native menu/3 dots icons */}
                        <Pressable onPress={() => setIsMenuVisible(true)} hitSlop={8}>
                            <Ionicons name="ellipsis-vertical" size={22} color="#333333" />
                        </Pressable>
                    </View>
                    )



                </View>
            );
}

            // styling the elements; Native doesn't use .css or inline styling
            const styles = StyleSheet.create({
                topBar:{
                flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 12
    },
            appTitle: {
                fontSize: 26,
            fontWeight: 'bold',
            color: '#F86320',
            letterSpacing: 0.5
    },
            headerIcons:{
                flexDirection: 'row',
            gap: 16 //the space between the search and the menu icons
    },
            iconText:{
                fontSize: 20,
            color: '#333333'
    }
})