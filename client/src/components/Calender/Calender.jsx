import './Calender.css'
import { useState } from 'react';
import { QUERY_SCHEDULE } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Calender = () => {
    let extractedData = "";
    const [showNextWeek, setShowNextWeek] = useState(false);

    const toggleNextWeek = () => {
        setShowNextWeek(!showNextWeek);
        refetch();
    };

    const { loading, data, refetch } = useQuery(QUERY_SCHEDULE);

    console.log(data);
    if (data) {
        extractedData = data.schedule.map(item => ({
            date: item.date,
            day: item.day,
            time: item.time,
            username: item.username
        }));
        console.log("this is the extracted data")
        console.log(extractedData);
    }




    function showNavigation() {
        if (extractedData) {
            return (
                <div>
                    <div className='wrapper'>
                        {getWeekDates().map((day, index) => (
                            <div className='subcontainer' key={index}>
                                <div className='date'>{day.date}</div>
                                <div className='day'>{day.day}</div>
                                <div className='morning'>
                                    <div className='shift'>Morning Shift</div>
                                    {extractedData
                                        .filter(data => data.date === day.date && data.time === 'Morning')
                                        .map((morningData, morningIndex) => (
                                            <div className="staff" key={morningIndex}>
                                                {morningData.username}
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='morning'>
                                    <div className='shift'>Afternoon Shift</div>
                                    {extractedData
                                        .filter(data => data.date === day.date && data.time === 'Afternoon')
                                        .map((afternoonData, afternoonIndex) => (
                                            <div className="staff" key={afternoonIndex}>
                                                {afternoonData.username}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            );
        } else {
            return (
                <div className='wrapper'>
                    {getWeekDates().map((Item, index) => (
                        <div className='subcontainer' key={index}>
                            <div className='date'>{Item.date}</div>
                            <div className='day'>{Item.day}</div>
                            <div className='afternoon'><div className='shift'>Morning Shiift</div></div>
                            <div className='afternoon'><div className='shift'>Afternoon Shiift</div></div>
                        </div>
                    ))}
                </div>
            );
        }
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
                        day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]
                    });
            }
        } else {
            for (let i = 0; i < 7; i++) {
                const date = new Date(start_of_current_week);
                date.setDate(start_of_current_week.getDate() + i);
                week_dates.push(
                    {
                        date: date.toISOString().slice(0, 10),
                        day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]
                    });
            }
        }

        return week_dates;
    };

    return (
        <div >
            <Button type="primary" onClick={toggleNextWeek} icon={<LeftOutlined />} disabled={!showNextWeek} size="default" />
            <Button type="primary" onClick={toggleNextWeek} icon={<RightOutlined />} disabled={showNextWeek} size="default" />
            <div>{loading ? (<div>Loading...</div>) : (showNavigation())}</div>

        </div>
    );
};

export default Calender;