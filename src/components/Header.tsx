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

    // for the menu button actions; 300ms delay when option is pressed so we see hover color; then menu closes
const handleMenuItemPress = (actionName: string) => {
    console.log(`${actionName} pressed`);
    setTimeout(() => {
        setIsMenuVisible(false);
    }, 300); //0.3 seconds delay
};

    return (
        <View style={styles.topBar}>
            {isSearching ? (
                // interactive search bar
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={22} color="#333333" style={styles.searchIcon} />
                    <TextInput style={styles.searchInput} placeholder="Search chats..." placeholderTextColor="#8E8E93" value={searchQuery} onChangeText={onSearchChange} autoFocus />
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
                </>
            )}

            {/* popup modal for menu button (3 dots) */}
            <Modal visible={isMenuVisible} transparent animationType="fade" onRequestClose={() => setIsMenuVisible(false)}>
                <Pressable style={styles.menuOverlay} onPress={() => setIsMenuVisible(false)}>
                    <View style={styles.menuCard}>
                        <Pressable style={styles.menuItem} onPress={() => setIsMenuVisible(false)}>
                            <Text style={styles.menuText}>New Group</Text>
                        </Pressable>
                        <Pressable style={styles.menuItem} onPress={() => setIsMenuVisible(false)}>
                            <Text style={styles.menuText}>New Broadcast</Text>
                        </Pressable>
                        <Pressable style={styles.menuItem} onPress={() => setIsMenuVisible(false)}>
                            <Text style={styles.menuText}>Starred Messages</Text>
                        </Pressable>
                        <Pressable style={styles.menuItem} onPress={() => setIsMenuVisible(false)}>
                            <Text style={styles.menuText}>Settings</Text>
                        </Pressable>
                    </View>
                </Pressable>
                style={({ pressed }) => [styles.menuItem, pressed && styles.menuItemPressed]} onPress={() => console.log('Chat pressed')
            </Modal>
        </View>
    );
}

// styling the elements; Native doesn't use .css or inline styling
const styles = StyleSheet.create({
    topBar: {
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
    headerIcons: {
        flexDirection: 'row',
        gap: 16 //the space between the search and the menu icons
    },
    iconText: {
        fontSize: 20,
        color: '#333333'
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        paddingHorizontal: 12,
        height: 40
    },
    searchIcon: {
        marginRight: 8
    },
    searchInput: {
        flex: 1,
        fontSize: 15,
        color: '#333333'
    },
    menuOverlay
        : {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.15)',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingTop: 50,
        paddingRight: 20
    },
    menuCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingVertical: 8,
        width: 180,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6
    },
    menuItem: {
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    menuText: {
        fontSize: 15,
        color: '#333333',
    }
});