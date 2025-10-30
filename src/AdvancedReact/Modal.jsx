//Show something outside the page means main root in place of create new 
// div with model-root
import ReactDOM from 'react-dom'

function Modal({children}) {
  return ReactDOM.createPortal(
    <div
    style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "white",
        padding: "2rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        borderRadius: "10px",
      }}
    >
      {children}
    </div>,
    document.getElementById("modal-root")
  )
}

export default Modal
