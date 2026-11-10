import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native';

// This is the Header Component to display the app title and icon actions.
// I will use Flexbox 'row' to align the elements horizontally and justifyContent to plave the app name on the left, and icons to the right
export function Header(){
    return(
        <View style={styles.topBar}>
            {/* App Name */}
            <Text style={styles.appTitle}>HALODEK</Text>
            {/* icons */}
            <View style={styles.headerIcons}>
                <Text style={styles.iconText}></Text>
                <Text style={styles.iconText}></Text>
            </View>
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
    }
})