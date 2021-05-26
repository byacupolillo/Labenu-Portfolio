import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Beatriz from './img/Beatriz.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';
import TevaPharm from './img/TevaPharm.JPG';
import Poliedro from './img/Poliedro.jfif';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ Beatriz }
          nome="Beatriz Cupolillo" 
          descricao="Olá, eu sou a Beatriz. Tenho 26 anos e atualmente faço o curso de Web Full Stack na Labenu com o objetivo de me tornar uma desenvolvedora."
        />
        <CardPequeno 
          nome="Contatos" 
          descricao="beatrizcupolillo@gmail.com"
        />
        <CardPequeno 
        nome="Endereço" 
        descricao="São Paulo/SP"
        />

        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Educação</h2>
        <CardGrande 
          imagem="http://www.scs.usp.br/identidadevisual/wp-content/uploads/2013/08/usp-logo-eps.jpg"
          nome="Universidade de São Paulo"
          descricao="Bacharela em Letras - Português e Japonês" 
        />
        
        <CardGrande 
          imagem="https://avatars2.githubusercontent.com/u/53058090?s=280"
          nome="Labenu" 
          descricao="Web Full Stack - Curso Integral" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ TevaPharm } 
          nome="Teva Farmacêutica" 
          descricao="Assistente de Eventos" 
        />
        
        <CardGrande 
          imagem={ Poliedro } 
          nome="Poliedro Educação" 
          descricao="Corretora de Redações Pré-Vestibular" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
