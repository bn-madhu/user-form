import React from 'react';

const ModlePreview = ({ show, onClose }) => {
  const btnRef = React.useRef(null);
  React.useEffect(() => {
    if (show) {
      btnRef.current.focus();
    }
  }, [show]);
  return (
    <>
      <div className="modal-backdrop" onClick={onClose}></div>

      <div className="modal">
        <button ref={btnRef} className="modal-close" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="auto">
            <rect width="24" height="24" fill="none"/><line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
            <line x1="96" y1="96" x2="160" y2="160" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
            <circle cx="128" cy="128" r="96" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
          </svg>
        </button>
        <h2 style={{marginBottom: "16px"}}>Preview:</h2>
        <p>Name: <strong>{show.fullName}</strong></p>
        <p>Email: <strong>{show.email}</strong></p>
        <p>Age: <strong>{show.age}</strong></p>
        <p>Gender: <strong>{show.gender}</strong></p>
        <p>Bio: <strong>{show.bio}</strong></p>
      </div>
    </>
  );
};

export default ModlePreview;