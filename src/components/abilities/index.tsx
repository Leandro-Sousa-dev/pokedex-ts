import { useEffect, useState } from "react"
import { getDescAbility } from "../../services/getDescAbility"
import { Ability } from "./styles"
import { NameUrlProps } from "../../interfaces/PokeData.ts"

export const Abilities = (props: NameUrlProps) => {
    const [url, setUrl] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const desc = await getDescAbility(props.url)
            setUrl(desc)
        }
        fetchData()
        
    }, [])
    
    return (
        <li>
            <Ability>
                <div>
                    <p>{props.name.replace('-', ' ').toUpperCase()}:</p>
                </div>
                <div>
                    <p>{url}</p>
                </div>
            </Ability>
        </li>
    )
}