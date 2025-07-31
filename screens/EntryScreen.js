import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Picker }from 'react-native';

export default function EntryScreen({ navigation, route }) {
    const [mood, setMood] = useState('Happy 😀');
    const [note, setNote] = useState('');

    const saveEntry = route.params?.saveEntry;

    const handleSave = () => {
        if (saveEntry) {
            saveEntry({ mood, note, date: new Date().toISOString() });
        }
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Write Your Mood</Text>
            <Text style={styles.label}>Select Mood:</Text>

            <Picker
                selectedValue={mood}
                onValueChange={(itemValue) => setMood(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Happy 😀" value="Happy 😀" />
                <Picker.Item label="Sad ☹️" value="Sad ☹️" />
                <Picker.Item label="Angry 😠" value="Angry 😠" />
                <Picker.Item label="Neutral 😐" value="Neutral 😐" />
            </Picker>

            <Text style={styles.label}>Add a note (optional):</Text>
            <TextInput
                style={styles.input}
                placeholder="Write something..."
                value={note}
                onChangeText={setNote}
                multiline
            />
            <View style={styles.buttonRow}>
                <Button title="Cancel" onPress={() => navigation.goBack()} />
                <Button title='Save' onPress={handleSave} />  
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        marginBottom: 15,
        fontWeight: '600',
    },
    label: {
        height: 30,
        width: '100%',
    },
    picker: {
        height: 40,
        width: '100%',
        marginBottom: 20,
    },
    input: {
        height: 80,
        borderColor: '#ccc',
        borderWidth: 1,
        marginTop: 2,
        padding: 8,
        borderRadius: 6,
        textAlignVertical: 'top',
    },
    buttonRow: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});