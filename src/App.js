import React, { Fragment, useState } from 'react'
import Formulario from './componets/Formulario'

function App() {

  const [appointments, setAppointments] = useState([])

  const addAppointment = appointment => {
    setAppointments([...appointments, appointment])
  }

  return (

    <Fragment>

      <h1>Administrador de Pacientes</h1>

      <div className="conainer">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              addAppointment = {addAppointment}
            />
          </div>
          <div className="one-half column"></div>
        </div>
      </div>

    </Fragment>

  );
}

export default App;
