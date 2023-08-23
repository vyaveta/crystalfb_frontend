import HashLoader from 'react-spinners/HashLoader'
import styles from './loader.module.css'
import { stopEventPropagation } from '../../../utils/componentHelpers/common'
import { useRef } from 'react';

export const HashLoaderComponent = ({color, size, loading}) => {

  const overlayRef = useRef(null);

  const handleOverlayClick = (event) => {
    overlayRef.current.style.display = 'none';
  };

  return (
  <>
   {
    loading &&  <div className={`${styles.wrapper}`} ref={overlayRef}  onClick={handleOverlayClick} >
    <HashLoader color={color} size={size} loading={loading} />
  </div>
   }
  </>
  )
}

