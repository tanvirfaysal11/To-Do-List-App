import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';

interface Task {
  id: string;
  title: string;
  isFavorite: boolean;
}

interface TaskItemProps {
  task: Task;
  onDelete: () => void;
  onToggleFavorite: () => void;
}

export default function TaskItem({ task, onDelete, onToggleFavorite }: TaskItemProps) {
  return (
    <Animated.View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onToggleFavorite} style={styles.iconWrapper}>
          <Image
            source={
              task.isFavorite
                ? require('../../assets/icons/star-filled.png')
                : require('../../assets/icons/star.png')
            }
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} activeOpacity={0.6}>
          <Image
            source={require('../../assets/icons/trash.png')}
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#44444E',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  title: { fontSize: 16, color: '#333', flex: 1 },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  icon: { width: 26, height: 26 },
  deleteIcon: { width: 26, height: 26 },
});
