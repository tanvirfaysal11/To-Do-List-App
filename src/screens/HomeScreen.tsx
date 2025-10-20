import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import TaskItem from '../components/TaskItem';
import { saveData, loadData } from '../utils/storage';
import { useNavigation } from '@react-navigation/native';
import EmptyList from '../components/EmptyList';

interface Task {
    id: string;
    title: string;
    isFavorite: boolean;
}

export default function HomeScreen() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const navigation = useNavigation<any>();

    useEffect(() => {
        const fetchTasks = async () => {
            const saved = await loadData('tasks');
            setTasks(saved);
        };
        fetchTasks();
    }, []);

    const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const addTask = (title: string) => {
        const newTask: Task = { id: generateId(), title, isFavorite: false };
        const updated = [...tasks, newTask];
        setTasks(updated);
        saveData('tasks', updated);
    };

    const deleteTask = (id: string) => {
        const updated = tasks.filter(t => t.id !== id);
        setTasks(updated);
        saveData('tasks', updated);
    };

    const toggleFavorite = (id: string) => {
        const updated = tasks.map(t =>
            t.id === id ? { ...t, isFavorite: !t.isFavorite } : t
        );
        setTasks(updated);
        saveData('tasks', updated);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TaskItem
                        task={item}
                        onDelete={() => deleteTask(item.id)}
                        onToggleFavorite={() => toggleFavorite(item.id)}
                    />
                )}
                ListEmptyComponent={<EmptyList />}
                contentContainerStyle={tasks.length === 0 ? { flex: 1 } : {}}
            />
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate('AddTask', { addTask })}
            >
                <Text style={styles.fabText}>＋</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f9f9f9', padding: 16 },
    fab: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        backgroundColor: '#4f46e5',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    fabText: { color: '#fff', fontSize: 28 },
});
