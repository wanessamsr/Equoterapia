import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Agenda.css";
import SearchBar from "./SearchBar.js";
import DateNavigator from './DateNavigator.js';

function Agenda() {
    const [agendaData, /*setAgendaData*/] = useState([
        { segunda: "08:00 - 09:00 | João Pedro Martins", terca: "08:00 - 09:00 | João Pedro Martins", quarta: "08:00 - 09:00 | Márcio da Silva", quinta: "08:00 - 09:00 | João Pedro Martins", sexta: "08:00 - 09:00 | Márcio da Silva" },
        { segunda: "09:00 - 10:00 | Márcio da Silva", terca: "", quarta: "09:00 - 10:00 | Carlos Batista dos Santos", quinta: "09:00 - 10:00 | César Abreu Pimenta", sexta: "09:00 - 10:00 | César Abreu Pimenta" },
        { segunda: "10:00 - 11:00 | Carlos Batista dos Santos", terca: "", quarta: "10:00 - 11:00 | Carlos Batista dos Santos", quinta: "", sexta: "" },
        { segunda: "11:00 - 12:00 | César Abreu Pimenta", terca: "", quarta: "", quinta: "", sexta: "" },
        { segunda: "", terca: "", quarta: "", quinta: "", sexta: "" },
        { segunda: "", terca: "", quarta: "", quinta: "", sexta: "" },
    ]);

    const [/*electedDate*/, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="container my-4">
            <div className='agenda mb-2'>
                Agenda
            </div>
            <div className='mb-4 d-flex justify-content-between align-items-center'>
                <div>
                <SearchBar />  
                </div>
                <div>
                <DateNavigator onDateChange={handleDateChange} />
                </div>
                <button className='btnCad btn' type="submit">Novo agendamento</button>
            </div>
            <table className="table table-bordered rounded tb">
                <thead>
                    <tr>
                        <th className="th">Segunda <p className='sub'>dia/mês</p> </th>
                        <th className="th">Terça <p className='sub'>dia/mês</p> </th>
                        <th className="th">Quarta <p className='sub'>dia/mês</p> </th>
                        <th className="th">Quinta <p className='sub'>dia/mês</p> </th>
                        <th className="th">Sexta <p className='sub'>dia/mês</p> </th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {agendaData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {["segunda", "terca", "quarta", "quinta", "sexta"].map((day) => {
                                const session = row[day];
                                const [time, patient] = session ? session.split(" | ") : ["", ""];

                                return (
                                    <td key={day} className={session ? "session-cell" : "empty-cell"}>
                                        {session ? (
                                            <>
                                                <small>{time}</small>
                                                <div>{patient}</div>
                                            </>
                                        ) : (
                                            <div>-</div>
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Agenda;
