import useTimer from '../hooks/usetimer';
import { Main }   from '../styles/components';

const TimeFrame = ()=>{
    // used to prevent reload of the entire main container each second
    const { time } = useTimer()
    return <Main.CountDownText>{time}&#x200b;</Main.CountDownText>
}


export default TimeFrame