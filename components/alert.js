const Alert = ({ showAlert, handleClose }) => {
  return showAlert ? (
    <div className="alert">
      <div onClick={handleClose}>
        <p>This film is now in your Favourites!</p>
      </div>
      <style jsx>{`
        width: 100%;
        text-align: center;
        background-color: #0652dd;
        border-bottom: 1px solid #ffffff;
        position: absolute;
        top: 0;
        left: 0;
        height: 35px;
        color: white;
      `}</style>
    </div>
  ) : null;
};

export default Alert;
