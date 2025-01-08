import { Abilities } from '../abilities/index.js'
import { ThemeContext } from "../../contexts/theme/index.js";
import { useContext } from "react"
import { AbilitiesContainer, PokeDetails, PokeDetailsContainer, PokeImg, PokeInfo, PokeMoves, TypeContainer } from './styles.ts';
import { AbilitiesProps, MovesProps, PokeDataDetailsProps, TypesProps } from '../../interfaces/PokeData.ts';

export const Details = (props: PokeDataDetailsProps) => {
    const { theme } = useContext(ThemeContext)

    return (
        <PokeDetailsContainer theme={theme}>
            <PokeInfo>
                <div>
                    <div>
                        <PokeImg src={props.data.img} alt={props.data.name} />
                    </div>
                </div>

                <PokeDetails theme={theme}>
                    <div>
                        <h2>{props.data.name.toUpperCase()}</h2>
                    </div>
                    <TypeContainer>
                        <h3>TYPE:</h3>
                        {props.data.types.map((t: TypesProps, i: number) => {
                            return (
                                <div key={i} style={{ backgroundColor: `${t.color}`, color: '#ffffff', textShadow: '1px 1px #000' }}>
                                    <p>{t.name.toUpperCase()}</p>
                                </div>
                            )
                        })}
                    </TypeContainer>

                    <div>
                        <h3>ABILITIES:</h3>
                        <AbilitiesContainer>
                            {props.data.abilities.map((a: AbilitiesProps, i: number) => {
                                return (
                                    <Abilities key={i} name={a.ability.name} url={a.ability.url}></Abilities>
                                )

                            })}

                        </AbilitiesContainer>
                    </div>
                </PokeDetails>
            </PokeInfo>

            <div>
                <h3>MOVES:</h3>
                <PokeMoves theme={theme}>
                    {props.data.moves.map((m: MovesProps, i: number) => {
                        return (
                            <li key={i}>
                                <p>{m.move.name.replace('-', ' ').toUpperCase()}</p>
                            </li>
                        )
                    })}
                </PokeMoves>
            </div>

        </PokeDetailsContainer>
    )
}