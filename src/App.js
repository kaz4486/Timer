import Timer from './components/Timer/Timer';
import { useState, useEffect } from 'react';
import styles from './styles/global.scss';

function App() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);
  const [active, setActive] = useState(false);

  const start = () => {
    //if (!timer) {
    setActive(true);
    setTimer(
      setInterval(() => {
        setTime((time) => time + 1);
      }, 1)
    );
  };

  const stop = () => {
    setActive(false);
    if (timer) {
      clearInterval(timer);
    }
  };

  const reset = () => {
    setTime(0);
  };

  useEffect(() => {
    // code that runs once at the start
    return () => {
      // code that runs once at the end
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <Timer time={time} />
      <article className={styles.article}>
        <button className={styles.button} onClick={start} disabled={active}>
          Start
        </button>
        <button className={styles.button} onClick={stop} disabled={!active}>
          Stop
        </button>
        <button className={styles.button} onClick={reset}>
          Reset
        </button>
      </article>
    </div>
  );
}

export default App;
