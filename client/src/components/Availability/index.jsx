import { Button, Radio } from 'antd';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_SHIFT } from '../../utils/mutations';
import './Availability.css'


const Availability = () => {

    

    const [shiftState, setShiftState] = useState([]);

    const [addShift, { error }] = useMutation(ADD_SHIFT);

    const handleChange = (date, day, time) => {
        let username = localStorage.getItem("username");
        const shiftValues = [...shiftState];
        const index = shiftValues.findIndex(item=>item.date === date && item.day === day);
        if(index !== -1) {
            shiftValues[index.time] = time;
        } else {
            shiftValues.push({ date, day, time, username });
        }
        setShiftState(shiftValues);
      };

      const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const ShiftInput = shiftState.map(shift => ({
                date: shift.date,
                day: shift.day,
                time: shift.time,
                username: shift.username
            }));
            console.log(ShiftInput);
          await addShift({
            variables: { shifts: ShiftInput },
          });

          console.log('Shifts added');
        } catch (err) {
          console.error(err);
        }
      }

    const getWeekDates = () => {
        const today = new Date();
        const start_of_current_week = new Date(today);
        start_of_current_week.setDate(today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1));

        const start_of_next_week = new Date(start_of_current_week);
        start_of_next_week.setDate(start_of_next_week.getDate() + 7);

        const week_dates = [];

        for (let i = 0; i < 7; i++) {
            const date = new Date(start_of_current_week);
            date.setDate(start_of_current_week.getDate() + i);
            week_dates.push(
                {
                    date: date.toISOString().slice(0, 10),
                    day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]
                });
        }

        return week_dates;
    };

    return (
        <div >
            <div className="box">
                {getWeekDates().map((Item, index) => (
                    <div className='wrap' key={index}>{Item.date} ({Item.day})
                    <div className='radio' onChange={(e) => handleChange(Item.date, Item.day, e.target.value)} ><Radio.Group defaultValue="Not Available" buttonStyle="solid">
                                <Radio.Button value="Morning">Morning</Radio.Button>
                                <Radio.Button value="Afternoon">Afternoon</Radio.Button>
                                <Radio.Button value="Not Available">Not Available</Radio.Button>
                            </Radio.Group></div> 
                    </div>))}
                    <Button type="primary" size='default' onClick={handleSubmit} >Submit</Button>
            </div>

        </div>
    );
};

export default Availability;