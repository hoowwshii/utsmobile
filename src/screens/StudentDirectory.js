import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
];

export default function StudentDirectory() {
  const [keyword, setKeyword] = useState('');

  const filtered = DAFTAR_MAHASISWA.filter((m) =>
    m.nama.toLowerCase().includes(keyword.trim().toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Cari nama mahasiswa..."
        placeholderTextColor="#64748b"
        value={keyword}
        onChangeText={setKeyword}
      />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.nama.charAt(0)}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.nama}>{item.nama}</Text>
              <Text style={styles.prodi}>{item.prodi}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Data tidak ditemukan!</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: {
    backgroundColor: '#1e293b',
    color: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 14,
    fontSize: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#6366f1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: { color: '#fff', fontWeight: '800', fontSize: 18 },
  info: { flex: 1 },
  nama: { color: '#f1f5f9', fontSize: 16, fontWeight: '700' },
  prodi: { color: '#94a3b8', marginTop: 2 },
  empty: { textAlign: 'center', marginTop: 30, color: '#94a3b8', fontSize: 15 },
});
