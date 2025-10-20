import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function AddTaskScreen() {
    const [title, setTitle] = useState('');
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    const inputRef = useRef<TextInput>(null);
    const { addTask } = route.params;

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleAdd = () => {
        if (!title.trim()) return Alert.alert('Error', 'Task cannot be empty');
        addTask(title);
        navigation.goBack();
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TextInput
                ref={inputRef}
                placeholder="Enter task title"
                value={title}
                onChangeText={setTitle}
                style={styles.input}
            />
            <Button title="Add Task" onPress={handleAdd} />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, justifyContent: 'center' },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 14,
        marginBottom: 20,
        borderRadius: 10,
        fontSize: 16,
    },
});
