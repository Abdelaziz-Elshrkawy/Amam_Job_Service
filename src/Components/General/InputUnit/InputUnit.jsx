import './InputUnit.css';

function InputUnit({ type, name, value, setValue, placeholder, accept, className }) {
    return (
        <div className="form-input-div">
            <input
                type={type ? type : 'text'}
                name={name}
                id={name}
                className={className ? 'form-input '+ className : 'form-input'}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                accept={accept}
            />
        </div>
    );
}

export default InputUnit;
