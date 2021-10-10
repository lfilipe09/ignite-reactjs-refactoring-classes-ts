import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

interface props {
  isOpen: boolean;
  setIsOpen: () => void;
  children: React.ReactNode
}

export function Modal(props: props) {
  const [modalStatus, setModalStatus] = useState(props.isOpen)
  const { children, setIsOpen } = props;

  useEffect(() => {
    if (modalStatus !== props.isOpen) setModalStatus(props.isOpen);
  }, [props.isOpen]);

  /*
  useEffect(() => {
    function componentDidUpdate(prevProps: boolean) {
      const { isOpen } = props;

      if (prevProps !== isOpen) {
        console.log(props)
        setModalStatus(isOpen)
      }
    }
    componentDidUpdate(modalStatus)
  })
  */

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
}



