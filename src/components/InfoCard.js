import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const isDone = status === 'selesai';
  const color = isDone ? '#22c55e' : '#f59e0b';

  return (
    <View style={[styles.card, { borderLeftColor: color }]}>
      <View style={styles.row}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <View style={[styles.badge, { backgroundColor: color + '26', borderColor: color }]}>
          <View style={[styles.dot, { backgroundColor: color }]} />
          <Text style={[styles.badgeText, { color }]}>{status}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    borderLeftWidth: 5,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  title: { flex: 1, color: '#f1f5f9', fontSize: 16, fontWeight: '700', marginRight: 10 },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1,
  },
  dot: { width: 6, height: 6, borderRadius: 3, marginRight: 6 },
  badgeText: { fontSize: 12, fontWeight: '700', textTransform: 'uppercase' },
  button: {
    backgroundColor: '#6366f1',
    paddingVertical: 11,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '700', letterSpacing: 0.3 },
});
