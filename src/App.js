import React, { Fragment, useState, useEffect } from 'react'
import Appointment from './componets/Appointment'
import Form from './componets/Form'

function App() {

  // saved appointments
  let savedAppointments = JSON.parse(localStorage.getItem('appointments'))
  if(!savedAppointments){
    savedAppointments = []
  }

  const [appointments, setAppointments] = useState(savedAppointments)

  // to perform certain operations when thr stage changes  
  useEffect(() => {
    
  if(savedAppointments){

    localStorage.setItem('appointments', JSON.stringify(appointments))
  } else {
    localStorage.setItem('appointments', JSON.stringify([]))
  }

  }, [appointments])

  // takes current appointments and add another one 
  const addAppointment = appointment => {
    setAppointments([...appointments, appointment])
  }

  // delete an appointment by its id  
  const delteAppointment = id =>{
    const newAppointments = appointments.filter(appointment => appointment.id !== id)
    setAppointments(newAppointments)
  }

  const title = appointments.length === 0 ? 'No Appoinments yet' : 'Manageyour Appoinments'

  return (

    <Fragment>

      <h1>Administrador de Pacientes</h1>

      <div className="conainer">
        <div className="row">
          <div className="one-half column">
            <Form 
              addAppointment = {addAppointment}
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map(appointment => (
              <Appointment

                key={appointment.id}
                appointment={appointment}
                delteAppointment = {delteAppointment}

              />
            ))}
          </div>
        </div>
      </div>

    </Fragment>

  );
}

export default App;
