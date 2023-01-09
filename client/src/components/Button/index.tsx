import { ButtonType } from "../../types/button"
import "./Button.scss"

export default function Button({ text, onClick, type, disabled }: ButtonType) {
    return (
        <button className={`button ${type === "delete" ? 'button--delete' :
            `${type === 'cancel' ? 'button--cancel' : ''}`}`} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}
