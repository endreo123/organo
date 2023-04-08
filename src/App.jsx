import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

    const times = [
        {
            nome: 'Programação',
            corPrimaria: '#57C278',
            corSecundaria: '#D9F7E9'
        },
        {
            nome: 'Front-End',
            corPrimaria: '#82cffa',
            corSecundaria: '#e8f8ff'
        },
        {
            nome: 'Data-Science',
            corPrimaria: '#a6d157',
            corSecundaria: '#f0f8d2'
        },
        {
            nome: 'Devops',
            corPrimaria: '#e06b69',
            corSecundaria: '#fde7e8'
        },
        {
            nome: 'Ux e Design',
            corPrimaria: '#d86ebf',
            corSecundaria: '#eae9f5'
        },
        {
            nome: 'Mobile',
            corPrimaria: '#ffba05',
            corSecundaria: '#fff5d9'
        },
        {
            nome: 'Inovação e Gestão',
            corPrimaria: '#ff8a29',
            corSecundaria: '#ffeedf'
        }
    ]

    const [colaboradores, setColaborares] = useState([]);

    const aoNovoColaboradorAdicionado = (colaborador) =>{
        setColaborares([...colaboradores, colaborador])
    }

  return (
    <>
        <Banner />
        <Formulario 
            times={times.map(time =>time.nome)}
            aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        />

        {times.map(time => <Time 
            key={time.nome} 
            nome={time.nome} 
            corPrimaria={time.corPrimaria} 
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter( colaborador => colaborador.time === time.nome)}
            />
        )}
    </>
  );
}

export default App;
