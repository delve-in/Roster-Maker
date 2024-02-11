
import { useState } from 'react';
import { Modal,Button } from 'antd';
import { QUERY_SHIFT } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { ADD_SCHEDULE } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Schedule = () => {
    const names = [
        {
          "username": 'Max',
        },
        {
          "username": 'Kanat',
        },
        {
          "username": 'Alexander',
        },
        {
          "username": 'Max Kanat-Alexander',
        }
      ];
      
    const [showNextWeek, setShowNextWeek] = useState(false);
    const [dateState, setDateState] = useState("");
    const [timeState, setTimeState] = useState("");
    const [dayState, setDayState] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [userState, setUserState] = useState("");

    const [addSchedule, { error }] = useMutation(ADD_SCHEDULE);

    const toggleNextWeek = () => {
        setShowNextWeek(!showNextWeek);
    };
    const { loading, data } = useQuery( QUERY_SHIFT , {
        variables: { date: dateState, time: timeState},
      });
     const test = data?.username || [];
     console.log(`this is test ${test}`);
   
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = async(name) => {

    console.log(`Clicked on ${name} ${timeState} ${dateState} ${dayState}`);
    try {
      const schedule = await addSchedule({
        variables: { date: dateState, day: dayState, time: timeState, username: name},
      });

      console.log(`Schedule added ${schedule}`);
    } catch (err) {
      console.error(err);
    }

  }

    function handleClick(period, item) {
        
        setTimeState(period);
        setDateState(item.date);
        setDayState(item.day);
        setIsModalOpen(true);
        // console.log(`Clicked on ${period} of Date: ${item.date} and Day: ${item.day}`);
    }

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
            <Button type="primary" onClick={toggleNextWeek} icon={<LeftOutlined />} disabled={!showNextWeek} size="default" />
             <Button type="primary" onClick={toggleNextWeek} icon={<RightOutlined />} disabled={showNextWeek} size="default" />
            <div className='wrapper'>
            {getWeekDates().map((Item, index) => (
                <div className='subcontainer' key={index}>
                    <div className='date'>{Item.date}</div>
                    <div className='day'>{Item.day}</div> 
                    <div className='morning' onClick={() => handleClick('Morning', Item)}>Morning</div>
                    <div className='morning'  onClick={() => handleClick('Afternoon', Item)}>Afternoon</div>
                </div>
            ))}
            </div>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div>{names.map((name, index) => (
        <div onClick={() => handleModalClick(name.username)} key={index}>{name.username}</div>
      ))}</div>
      </Modal>
      <Button type="primary" size="default">
            Sent
          </Button>
          <div>
            {loading ? (<div>Loading...</div>
            ):(<div className='morning'> {test} </div>)}
          </div>
        </div>
    );
};

export default Schedule;