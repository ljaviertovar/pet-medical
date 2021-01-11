import React from 'react'
import PropTypes from 'prop-types' 

const Appointment = ({appointment, delteAppointment}) => (

    <div className="cita">
        <p>Pet: <span>{appointment.pet}</span></p>
        <p>Owner: <span>{appointment.owner}</span></p>
        <p>Date: <span>{appointment.date}</span></p>
        <p>Hour: <span>{appointment.hour}</span></p>
        <p>Symptoms: <span>{appointment.symptoms}</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={ () => delteAppointment(appointment.id) }
        >Delete &times;</button>
    </div>
)

Appointment.propTypes= {
    appointment: PropTypes.object.isRequired,
    delteAppointment: PropTypes.func.isRequired
}

export default Appointment