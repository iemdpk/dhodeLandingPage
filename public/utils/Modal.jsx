// @ts-nocheck
import React, { useCallback, useEffect, useRef } from "react";
import Transition from "./Transition";

const Modal = ({ children, id, ariaLabel, show, handleClose }) => {
  const modalContent = useRef(null);

  // Close the modal when click outside
  const clickHandler = useCallback(
    ({ target }) => {
      if (!show || modalContent?.current.contains(target)) return;
      handleClose();
    },
    [show, handleClose]
  );

  // Close the modal if esc key is pressed
  const keyHandler = useCallback(
    ({ keyCode }) => {
      if (keyCode !== 27) return;
      handleClose();
    },
    [handleClose]
  );

  useEffect(() => {
    document.addEventListener("click", clickHandler);
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [clickHandler, keyHandler]);

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
        show={show}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
        appear={false}
      />

      <Transition
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabel}
        show={show}
        enter="transition ease-out duration-200"
        enterStart="opacity-0 scale-95"
        enterEnd="opacity-100 scale-100"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100 scale-100"
        leaveEnd="opacity-0 scale-95"
        appear={false}>
        <div className="bg-white overflow-auto max-w-6xl w-full max-h-full" ref={modalContent}>
          {children}
        </div>
      </Transition>
    </>
  );
};

export default Modal;
