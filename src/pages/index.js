import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// --- COMPONENTE DO VÍDEO ---
function VideoCard({ titulo, urlYoutube }) {
  return (
    <div style={{ 
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      backgroundColor: '#fff' 
    }}>
      {/* Título com altura fixa para alinhar os cards vizinhos */}
      <h3 style={{ 
        marginBottom: '15px', 
        color: '#a41c82', 
        textAlign: 'center',
        height: '60px',        // Altura fixa
        display: 'flex',       // Flexbox para centralizar
        alignItems: 'center',  // Centro Vertical
        justifyContent: 'center' // Centro Horizontal
      }}>
        {titulo}
      </h3>

      <div style={{ 
        position: 'relative', 
        paddingBottom: '56.25%', 
        height: 0, 
        overflow: 'hidden', 
        borderRadius: '5px',
      }}>
        <iframe 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          src={urlYoutube} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Vídeos`}
      description="Videoteca do PSE">
      
      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1>Tutoriais disponíveis 🎬</h1>
          <p>Tire suas dúvidas!.</p>
        </div>

        {/* --- GRID FORÇADO 2 COLUNAS --- */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr', // Força 2 colunas iguais
          gap: '30px', 
          justifyContent: 'center'
        }}>
        
          <VideoCard 
            titulo="Aula 1: a" 
            urlYoutube="https://www.youtube.com/embed/SEU_ID_1" 
          />

          <VideoCard 
            titulo="Aula 2: " 
            urlYoutube="https://www.youtube.com/embed/SEU_ID_2" 
          />
          
          <VideoCard 
            titulo="Aula 3: " 
            urlYoutube="https://www.youtube.com/embed/SEU_ID_3" 
          />

           <VideoCard 
            titulo="Aula 4: " 
            urlYoutube="https://www.youtube.com/embed/SEU_ID_4" 
          />

        </div>

      </main>
    </Layout>
  );
}