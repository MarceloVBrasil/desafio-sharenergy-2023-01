import { useEffect, useState } from "react"
import "./Cats.scss"
import Button from "../Button"
import PetsIcon from '@mui/icons-material/Pets';

export default function Cats() {
    const [catStatusCode, setCatStatusCode] = useState<number>(100)
    const [cat, setCat] = useState<number>(100)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        getCat()
    }, [])
    return (
        <div className="cats">
            <h1 className="cats__title">Cat</h1>
            {isLoading ? <PetsIcon className="cats__loading" /> :
                <img src={`https://http.cat/${cat}`} alt="cat status code" className="cats__image" />}
            <div className="cats-buttons">
                <input type={'number'} value={catStatusCode} onChange={(e) => setCatStatusCode(parseInt(e.target.value))}
                    className="cats-buttons__input" />
                <Button text="meow" onClick={getCat} />
            </div>
        </div>
    )

    async function getCat() {
        setIsLoading(true)
        if (catStatusCode) setCat(catStatusCode)
        setIsLoading(false)
    }
}
