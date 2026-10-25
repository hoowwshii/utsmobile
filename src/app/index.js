import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Alert, StatusBar, StyleSheet } from 'react-native';
import InfoCard from '../components/InfoCard';
import StudentDirectory from '../screens/StudentDirectory';

export default function App() {
  const [tab, setTab] = useState('q1');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      <Text style={styles.header}>UTS Pemrograman Mobile</Text>

      <View style={styles.tabs}>
        {[
          ['q1', 'InfoCard'],
          ['q2', 'Direktori'],
        ].map(([key, label]) => (
          <TouchableOpacity
            key={key}
            style={[styles.tab, tab === key && styles.tabActive]}
            onPress={() => setTab(key)}
          >
            <Text style={[styles.tabText, tab === key && styles.tabTextActive]}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.body}>
        {tab === 'q1' ? (
          <>
            <InfoCard
              title="Laporan Praktikum Mobile"
              status="selesai"
              onPress={() => Alert.alert('Detail', 'Laporan Praktikum Mobile - selesai')}
            />
            <InfoCard
              title="Project Akhir Semester"
              status="proses"
              onPress={() => Alert.alert('Detail', 'Project Akhir Semester - proses')}
            />
          </>
        ) : (
          <StudentDirectory />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0f172a', paddingTop: 40 },
  header: { color: '#f1f5f9', fontSize: 22, fontWeight: '800', textAlign: 'center', marginBottom: 16 },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 4,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  tab: { flex: 1, paddingVertical: 10, borderRadius: 9, alignItems: 'center' },
  tabActive: { backgroundColor: '#6366f1' },
  tabText: { color: '#94a3b8', fontWeight: '700' },
  tabTextActive: { color: '#fff' },
  body: { flex: 1, paddingHorizontal: 16 },
});
