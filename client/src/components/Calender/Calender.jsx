import './Calender.css'
import { useState } from 'react';

const Calender = () => {
    const [showNextWeek, setShowNextWeek] = useState(false);

    const toggleNextWeek = () => {
        setShowNextWeek(!showNextWeek);
    };

    const getWeekDates = () => {
        const today = new Date();
        const start_of_current_week = new Date(today);
        start_of_current_week.setDate(today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1));

        const start_of_next_week = new Date(start_of_current_week);
        start_of_next_week.setDate(start_of_next_week.getDate() + 7);

        const week_dates = [];

        if (showNextWeek) {
            for (let i = 0; i < 7; i++) {
                const date = new Date(start_of_next_week);
                date.setDate(start_of_next_week.getDate() + i);
                week_dates.push(
                    {
                        date: date.toISOString().slice(0, 10), 
                        day:['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]
                    });
            }
        } else {
            for (let i = 0; i < 7; i++) {
                const date = new Date(start_of_current_week);
                date.setDate(start_of_current_week.getDate() + i);
                week_dates.push(
                    {
                        date: date.toISOString().slice(0, 10),
                        day:['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]
                    });
            }
        }

        return week_dates;
    };

    return (
        <div >
            <button onClick={toggleNextWeek}>
                {showNextWeek ? 'Hide Current Week' : 'Show Next Week'}
            </button>
            <div className='container'>
            {getWeekDates().map((Item, index) => (
                <div className='subcontainer' key={index}>
                    <div className='date'>{Item.date}</div>
                    <div className='day'>{Item.day}</div> 
                    <div className='morning'>
                        Morning
                    </div>
                    <div className='afternoon'>
                        Afternoon
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Calender;