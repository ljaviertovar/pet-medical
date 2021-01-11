import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = ({addAppointment}) => {

      // create state appointments
      const [appointment, setAppointment] = useState({
            pet : '',
            owner :'',
            date :'',
            hour: '',
            symptoms:''
      })

      const [error, setError] = useState(false)

      // get the values entered in the inputs
      const handleState = e => {

            setAppointment({
                  ...appointment,
                  [e.target.name]: e.target.value
            })
      }

      // extract values
      const { pet, owner, date, hour, symptoms } = appointment

      // send values
      const submitAppointment = e => {

            e.preventDefault()

            // validate values
            if(pet.trim() === '' || owner.trim() === '' || date.trim() === '' || hour.trim() === '' || symptoms.trim() === ''){
                  setError(true)
                  return 
            }

            setError(false)

            // set ID
            appointment.id = uuidv4()

            // create appointment
            addAppointment(appointment)

            // clean form 
            setAppointment({
                  pet : '',
                  owner :'',
                  date :'',
                  hour: '',
                  symptoms:''
            })

      }

      return (

            <Fragment>
                  <h2>Crear Cita</h2>

                  {
                        error 
                  ?  <p className="alerta-error">All fields are required.</p>
                  : null 
                  }

                  <form
                        onSubmit= {submitAppointment}
                  >

                  <label>Pet Name</label>
                  <input
                        type="text"
                        name="pet"
                        className="u-full-width"
                        placeholder="Pet name"
                        onChange={handleState}
                        value={pet}
                  />

                  <label>Pet Owner</label>
                  <input
                        type="text"
                        name="owner"
                        className="u-full-width"
                        placeholder="Pet Owner"
                        onChange={handleState}
                        value={owner}
                  />

                  <label>Date</label>
                  <input
                        type="date"
                        name="date"
                        className="u-full-width"
                        onChange={handleState}
                        value={date}
                  />

                  <label>Hour</label>
                  <input
                        type="time"
                        name="hour"
                        className="u-full-width"
                        onChange={handleState}
                        value={hour}
                  />

                  <label>Symptoms</label>
                  <textarea
                        className="u-full-width"
                        name="symptoms"
                        onChange={handleState}
                        value={symptoms}
                  ></textarea>

                  <button
                        type="submit"
                        className="u-full-width button-primary"
                  >Add Appointment</button>

                  </form>

            </Fragment>

      );

}



export default Form;