import './Error.css'

function Error({ errorText, id }) {
    return (
        <>
            <p id={id} className="error-p">
                {errorText}
            </p>
        </>
    );
}

export default Error;
