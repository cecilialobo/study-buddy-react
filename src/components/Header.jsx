import React from 'react';
import './Header.css';

const weekDayNumber = new Date().getDay()
const weekDays = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}

const monthNumber = new Date().getMonth()
const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
}

const dayOfMonth = new Date().getDate()

const daySufix = (dayOfMonth) => {
  console.log(dayOfMonth)
  if (dayOfMonth === 1) {
    return 'st'
  }
  if (dayOfMonth === 2) {
    return 'nd'
  }
  return 'th'
}

const Header = () => {
  return (
    <header>
      <h1>Study Buddy</h1>
      <i className="fas fa-dog" alt='dog icon'></i>
      <p className='currentDate'>{weekDays[weekDayNumber]}, {months[monthNumber]} {dayOfMonth}{daySufix(dayOfMonth)}</p>
    </header>
    )
}

export default Header;