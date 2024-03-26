import './App.css';
import React, { useState } from 'react';

function App() {

  const [events, setEvents] = useState([
    {
      eventName: "Music Festival",
      startDate: "2023-01-20",
      endDate: "2023-01-21",
      id: "30a1"
    },
    {
      eventName: "Food Festival",
      startDate: "2023-02-01",
      endDate: "2023-02-02",
      id: "30a8"
    }
  ]);

  return (
    <div className="App">
        <div class="header">
            <button id="add-event-row-btn">Add New Event</button>
        </div>
        <div class="event-table">
        <table>
            <thead>
                <tr>
                    <th>Event</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="event-body">
                  {events.map((event) => (
                    <tr key={event.id}>
                      <td>{event.eventName}</td>
                      <td>{event.startDate}</td>
                      <td>{event.endDate}</td>
                      <td>
                        <div className="action-buttons">
                          <button className="confirm-button">
                              <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 6V18M18 12H6" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                          </button>
                          <button className="cancel-button">
                              <svg focusable="false" aria-hidden="true" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path></svg>
                          </button>
                         </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
        </table>
    </div>
    </div>
  );
}

export default App;
