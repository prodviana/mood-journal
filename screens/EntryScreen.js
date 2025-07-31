import React from 'react';
import { View, Text, Button, StyleSheet }from 'react-native';

export default function EntryScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Write Your Mood</Text>
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    },
});