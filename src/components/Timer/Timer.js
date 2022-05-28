import styles from './Timer.module.scss';

const Timer = ({ time }) => {
  const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
  };
  const convertMilliseconds = (num) => {
    return num.toString().slice(1, -1);
  };

  const result = (milliseconds) => {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;
    const convertedMilliseconds = convertMilliseconds(milliseconds);

    /*const hours = parseInt((time / (1000 * 60 * 60)) % 24);
    const hoursText = hours.toString();
    const minutes = parseInt((time / (1000 * 60)) % 60);
    const seconds = parseInt((time / 1000) % 60);
    const miliseconds = parseInt((time % 1000) / 100);*/

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
      seconds
    )}:${padTo2Digits(convertedMilliseconds)}`;
  };

  //time.substr(0, 2);
  /*console.log(time);
  const ddd = new Date(time).toISOString().slice(11, 22);
  console.log(ddd);*/

  return <div className={styles.timer}>{result(time)}</div>;
};

export default Timer;
