import React, { useState, useEffect } from 'react';

import api from './services/api';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

/**
 * Componente
 * Propriendade
 * Estado
 */

function App(){
  /** useState
   *    retorna um array com 2 posições
   *    1. Variável com o seu valor iniciaal
   *    2. Função para atualizarmos esse valor
   */

  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject(){
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Filipe'
    });

    setProjects([...projects, response.data]);
  }

  return <>
    <Header title="Projects" />

    {/* <img width="300" src={backgroundImage} alt="Carpas"/> */}

    <ul>
      {projects.map(project => (<li key={project.id}>{project.title}</li>))}
    </ul>

    <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
  </>
}

export default App;