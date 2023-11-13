import './Button.css';
function Button({ text, handleOnclick }) {
    return (
        <>
            <button className="form-btn" onClick={handleOnclick}>
                {text}
            </button>
        </>
    );
}

export default Button;
