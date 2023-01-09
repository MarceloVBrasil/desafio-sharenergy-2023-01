import { useEffect, useState } from "react"
import { axiosInstanceDogsAPI } from "../../utils/axiosInstance"
import "./Dogs.scss"
import Button from "../Button"
import PetsIcon from '@mui/icons-material/Pets';

export default function Dogs() {
    const [dogURL, setDogURL] = useState<string>('')
    const [dogId, setDogId] = useState<number | undefined>(undefined)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        getDog()
    }, [])
    return (
        <div className="dogs">
            <h1 className="dogs__title">{dogId ? `Dog #${dogId}` : `Dog`}</h1>
            {isLoading ? <PetsIcon className="dogs__loading" /> :
                <img src={dogURL} alt="random dog" className="dogs__image" />}
            <div className="dogs-buttons">
                <Button text="woof" onClick={getDog} />
            </div>
        </div>
    )

    async function getDog() {
        try {
            setIsLoading(true)
            const response = await axiosInstanceDogsAPI.get("/woof.json")
            if (response.data.url.includes(".mp4")) getDog()
            setDogURL(response.data.url)
            setTimeout(() => {
                setIsLoading(false)
                setDogId(response.data.fileSizeBytes)
            }, 4000)

        } catch (error: any) {

        }
    }
}
