import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux';

import {setFilter} from '../../AC';

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    handleDayClick = (day) => {
        const {setFilter} = this.props;
        const state = this.props.dateRange;
        let {dateRange} = state;
        dateRange = DateUtils.addDayToRange(day, dateRange);
        state.dateRange = dateRange;
        setFilter(state);
    }

    render() {
        const state = this.props.dateRange;
        const {dateRange} = state;
        const { from, to } = dateRange;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        debugger;
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect((state) => {
    console.log(state.filters);

    return { dateRange: state.filters }
}, {setFilter})(DateRange)