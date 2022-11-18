import styles from './TimeFormater.module.scss'

const TimeFormater = ({time}) => {
    const parseTime = (time) =>{
        let hours = ('0' + Math.floor((time / 360000) % 24)).slice(-2);
        let minutes = ('0' + Math.floor((time / 6000)% 60)).slice(-2);
        let seconds = ('0' + Math.floor((time / 100)%60)).slice(-2);
        let miliiseconds = ('0' + (time / 0.1) % 1000).slice(-3)

        return String(`${hours}:${minutes}:${seconds}:${miliiseconds}`)
    }

    return(
        <div className={styles.container}>
            {parseTime(time)}
        </div>
    )


}

export default TimeFormater