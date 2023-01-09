import { useState } from "react";
import "./DropDownMenu.scss";
import { DropDownMenuType } from "../../types/DropDownMenu";

export default function DropDownMenu({ error, selected, onChange }: DropDownMenuType) {
    const [isSelected, setIsSelected] = useState(selected)
    return (
        <div className="drop-down-menu">
            <label className="drop-down-menu__label">state</label>
            <select className="drop-down-menu__options" name="state"
                value={isSelected || selected} onChange={handleOnChange}>
                <option value={""} hidden>
                    Please Select
                </option>
                <option value={"AC"}>AC</option>
                <option value={"AL"}>AL</option>
                <option value={"AM"}>AM</option>
                <option value={"AP"}>AP</option>
                <option value={"BA"}>BA</option>
                <option value={"CE"}>CE</option>
                <option value={"DF"}>DF</option>
                <option value={"ES"}>ES</option>
                <option value={"GO"}>GO</option>
                <option value={"MA"}>MA</option>
                <option value={"MG"}>MG</option>
                <option value={"MS"}>MS</option>
                <option value={"MT"}>MT</option>
                <option value={"PA"}>PA</option>
                <option value={"PB"}>PB</option>
                <option value={"PE"}>PE</option>
                <option value={"PI"}>PI</option>
                <option value={"PR"}>PR</option>
                <option value={"RJ"}>RJ</option>
                <option value={"RN"}>RN</option>
                <option value={"RO"}>RO</option>
                <option value={"RR"}>RR</option>
                <option value={"RS"}>RS</option>
                <option value={"SC"}>SC</option>
                <option value={"SE"}>SE</option>
                <option value={"SP"}>SP</option>
                <option value={"TO"}>TO</option>
            </select>
            {error && (
                <p className="drop-down-menu__error">
                    <span>!</span> {error}
                </p>
            )}
        </div>
    );

    function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setIsSelected(e.target.value)
        onChange(e)
    }
}
