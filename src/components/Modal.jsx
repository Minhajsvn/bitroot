/* eslint-disable react/prop-types */
import "../components/Modal.css";

export default function Modal({ id, data, setIsOpen }) {
  const modalData = data.find((item) => item.id === id);

  return (
    <div className="modalBg" onClick={() => {
        setIsOpen(false);
      }}>
      <div className="centered">
        <div
          className="modal"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            className="modalImg"
            src={modalData.thumbnail.large}
            alt={modalData.title}
            width="100%"
            height="70%"
          />

          <div className="modalContent">
            <h2>{modalData.title}</h2>
            <p>{modalData.content}</p>
          </div>
          <div className="modalDetails">
            {modalData.author.avatar && <img src={modalData.author.avatar} alt="avatar" />}
            <p>
              {modalData.author.name} - {modalData.author.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
