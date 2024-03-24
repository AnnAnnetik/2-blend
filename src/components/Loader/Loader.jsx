import style from './Loader.module.css';
import { Audio } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={style.backdrop}>
      <Audio />
    </div>
  );
};
