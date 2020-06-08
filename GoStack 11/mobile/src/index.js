import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

// Todos componentes possuem por padrão "display: flex"
// Não possuem valor semântico (significado)
// Não possuem estilização própria

// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
      console.log(response.data);
    })
  }, [])

  async function handleAddProject(){
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Filipe'
    })

    setProjects([...projects, response.data]);
  }

  return <>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    {/* <View style={styles.container}>
      <Text style={styles.title}>Hello GoStack</Text>
      {projects.map(project => <Text style={styles.project} key={project.id}>{project.title}</Text>)}
    </View> */}

    <SafeAreaView style={styles.container}>
      <FlatList       
        data={projects}
        keyExtractor={project => project.id}
        renderItem={({ item: project }) => (
          <Text style={styles.project}>{project.title}</Text>
        )}
      />

      <TouchableOpacity 
        activeOpacity={0.6} 
        style={styles.button}
        onPress={handleAddProject}
      >
        <Text styles={styles.buttonText}>Adicionar projeto</Text>
      </TouchableOpacity>
    </SafeAreaView>   
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
    // justifyContent: 'center',
    // alignItems: 'center'
  },

  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold'
  },

  project: {
    color: '#fff',
    fontSize: 20,
  },

  button: {
    backgroundColor: "#fff",
    margin: 20,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})