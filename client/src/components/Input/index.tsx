import { InputType } from '../../types/input'
import "./Input.scss"

export default function Input({ label, type, error, fontSize, onChange, searchTerm, placeholder, value }: InputType) {
    return (
        <div className='input'>
            <label className='input__label' htmlFor={label} style={{ fontSize: fontSize }}>{label}</label>
            <input type={type} className='input__input' placeholder={placeholder || label} name={label} onChange={onChange} value={value || searchTerm} />
            {error && <p className='input__error'><span>!</span>{error}</p>}
        </div>
    )
}
