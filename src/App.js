import { useState } from 'react';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario';

function App() {

    const [colaboradores, setColaborares] = useState('');

    const aoNovoColaboradorAdicionado = (colaborador) =>{
        console.log(colaborador);
        setColaborares([...colaboradores, colaborador])
    }

  return (
    <>
        <Banner />
        <Formulario 
            aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        />
    </>
  );
}

export default App;
