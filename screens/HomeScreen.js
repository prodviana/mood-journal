import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList }from 'react-native';

export default function HomeScreen({ navigation }) {
    const [entries, setEntries] = useState([]);

    const saveEntry = (entry) =>{
        setEntries((prev) => [entry, ...prev]);
    };
    
    return (
        <View style={styles.container}>         
            <Text style={styles.title}>Mood Tracker</Text>
            
            <Button
                title="Add Entry"
                onPress={() => navigation.navigate('Entry', { saveEntry })}
            />

            {entries.length === 0 ? (
                <Text style={styles.noEntriesText}>No entries yet</Text>
            ) : (
                <FlatList
                    data={entries}
                    keyExtractor={(item, index) => item.date + index}
                    renderItem={({ item }) => (
                        <View style={styles.entry}>
                            <Text style={styles.mood}>{item.mood}</Text>
                            {item.note ? <Text style={styles.note}>{item.note}</Text> : null}
                            <Text styles={styles.date}>{new Date(item.date).toLocaleString()}</Text>
                        </View>    
                    )}
                    style={{ marginTop: 20, width: '100%' }}
                />
            )}       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: '700',
    },
    noEntriesText: {
        marginTop: 30,
        fontSize: 16,
        color: '#667',
    },
    entry: {
        backgroundColor: '#f0f0f0',
        padding: 12,
        marginBottom: 12,
        borderRadius: 8,
    },
    mood: {
        fontWeight: '600',
        fontSize: 18,
    },
    note: {
        marginTop: 4,
        fontStyle: 'italic',
    },
    date: {
        marginTop: 6,
        fontSize: 12,
        color: '#999',
    },
});