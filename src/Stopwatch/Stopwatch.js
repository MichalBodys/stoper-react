
import styles from './Stopwatch.module.scss'

const Stopwatch = (props) => {
return(
    <div className={styles.wrapper}>
        <p className={styles.stopwatch}>00:00:00.000</p>
        <div className={styles.buttons}>
            <button>Start</button>
            <button>Stop</button>
            <button>Reset</button>
        </div>
    </div>
   );
}

export default Stopwatch