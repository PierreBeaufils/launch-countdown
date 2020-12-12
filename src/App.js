import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import pinterest from './images/icon-pinterest.svg';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const formatTime = (time) => time < 10 ? `0${time}` : time;

      const dateNow = new Date();
      const christmas = new Date("December 24, 2020 23:59:59");
      const interval = christmas - dateNow;

      let day = Math.floor(interval / (1000 * 60 * 60 * 24));
      let hour = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minute = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
      let second = Math.floor((interval % (1000 * 60)) / 1000);

      setDays(formatTime(day));
      setHours(formatTime(hour));
      setMinutes(formatTime(minute));
      setSeconds(formatTime(second));

      if (interval < 0) {
        clearInterval(timer);
      }

    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div className="App">
      <div className="container">
        <div className="title">Christmas coutdown</div>
        <div className="countdown">
          <div className="countdown-section">
            <div className="countdown-section-number">
              {days}
            </div>
            <p>Days</p>
          </div>
          <div className="countdown-section">
            <div className="countdown-section-number">
              {hours}
            </div>
            <p>Hours</p>
          </div>
          <div className="countdown-section">
            <div className="countdown-section-number">
              {minutes}
            </div>
            <p>Minutes</p>
          </div>
          <div className="countdown-section">
            <div className="countdown-section-number">
              {seconds}
            </div>
            <p>Seconds</p>
          </div>
        </div>
        <div className="social">
          <img className="social-logo" src={facebook} alt="facebook social logo" />
          <img className="social-logo" src={instagram} alt="instagram social logo" />
          <img className="social-logo" src={pinterest} alt="pinterest social logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
