
import { useEffect, useState } from 'react';
import TimeFormater from '../TimeFormater/TimeFormater';
import styles from './Stopwatch.module.scss'


const Stopwatch = (props) => {
const [time, setTime] = useState(0);
const [timer, setTimer] = useState(null);


const start = () => {

    const timer = setInterval(() => {

        setTime(time => time +1)
    }, 1);

    setTimer(timer);


    console.log('start clicked');

}

const stop = () => {
    console.log('stop clicked');
    if(timer){clearInterval(timer)
    }
}

const reset = (props) => {
        console.log('reset clicked');
    setTime(0)
    stop()
 }

 useEffect(() => {
    return () => {
       clearInterval(timer);
    };
  }, [timer]);

return(
    <div className={styles.wrapper}>
        <TimeFormater time={time} />
        <div className={styles.buttons}>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
   );
}

export default Stopwatch