import "../styles/message.css";

const Message = ({ message }) => {
  return (
    <>
      {message === "deleted" && (
        <div className="deleted-box">
          <p className="text deleted-text">Trip Deleted!</p>
        </div>
      )}
      {message === "created" && (
        <div className="message-box">
          <p className="text message-text">New trip created!</p>
        </div>
      )}
    </>
  );
};

export default Message;
