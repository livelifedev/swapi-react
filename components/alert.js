const Alert = ({ showAlert, handleClose }) => {
  return showAlert ? (
    <div className="alert">
      <div onClick={handleClose}>
        <p>This film in now Favourited</p>
      </div>
      <style jsx>{`
        width: 100%;
        text-align: center;
        background-color: aquamarine;
      `}</style>
    </div>
  ) : null;
};

export default Alert;
