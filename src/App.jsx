import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [state, setState] = useState(() => {
    const savedState = JSON.parse(localStorage.getItem('numbers'));
    return savedState || { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = feedbackType => {
    switch (feedbackType) {
      case 'good':
        setState(prevState => ({ ...prevState, good: prevState.good + 1 }));
        break;
      case 'neutral':
        setState(prevState => ({
          ...prevState,
          neutral: prevState.neutral + 1,
        }));
        break;
      case 'bad':
        setState(prevState => ({ ...prevState, bad: prevState.bad + 1 }));
    }
  };

  const { good, neutral, bad } = state;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  const resetFeedback = () => {
    setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem('numbers', JSON.stringify(state));
  }, [state]);

  return (
    <>
      <Description />
      <Options
        feedback={updateFeedback}
        total={totalFeedback}
        reset={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          state={state}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
