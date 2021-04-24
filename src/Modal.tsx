import React from 'react';

export default function Modal() {
  return (
    <div>
      {/*Delete Modal*/}

      <div className="backgroundPrompt" style={{ display: 'none' }}>
        {' '}
      </div>
      <div className="ModalPrompt" style={{ display: 'none' }}>
        <h3>Confirm Deletion</h3>
        {/* ADD ID */}
        <p>Are you sure you want to delete invoice </p>
        <p>This action cannot be undone.</p>

        <div
          className="buttons--large"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '20px',
          }}
        >
          <button
            style={{
              background: '#F9FAFE',
              color: '#7E88C3',
            }}
          >
            Edit
          </button>
          <button
            style={{
              background: '#EC5757',
              color: 'white',
            }}
          >
            Delete
          </button>
        </div>
      </div>
      {/*Delete Modal end*/}
    </div>
  );
}
