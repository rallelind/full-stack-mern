import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import React from 'react'

const Calender = () => {

    const [dateStart, setDateStart] = useState();
    const [dateEnd, setDateEnd] = useState();

    function onChangeHandler(value) {
        setDateStart(value[0]);
        setDateEnd(value[1]);
    }

    return (
        <div id="calender">
                <DatePicker
                    id="dateStartEnd"
                    selectsRange={true}
                    startDate={dateStart}
                    endDate={dateEnd}
                    onChange={onChangeHandler}
                    dateFormat="dd MMM yyyy"
                    className={'form-control form-control-sm'}
                    showDisabledMonthNavigation
                    placeholderText="Pick A Date"
                />
        </div>
    )
}

export default Calender
