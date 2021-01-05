import React, { Fragment } from 'react';
import Formulario from './componets/Formulario'

function App() {

  return (

    <Fragment>

      <h1>Administrador de Pacientes</h1>

      <div className="conainer">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column"></div>
        </div>
      </div>

    </Fragment>

  );
}

export default App;
