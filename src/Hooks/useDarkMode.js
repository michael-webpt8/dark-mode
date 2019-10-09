import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage('toggle', false);

  useEffect(() => {
    const appendMode = document.querySelector('body');
    if (darkMode) {
      appendMode.classList.add('dark-mode');
    } else {
      appendMode.classList.remove('dark-mode');
    }
  }, [darkMode]);
  return [darkMode, setDarkMode];
}
export default useDarkMode;
