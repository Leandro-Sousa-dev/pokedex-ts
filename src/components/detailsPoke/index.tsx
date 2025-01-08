import { useParams } from 'react-router'
import { Details } from '../details/index.js'
import { useDetails } from '../../hooks/useDetails'
import { ThemeContext } from "../../contexts/theme";
import { useContext } from "react"
import { BackToHome, PokeContainer, Section } from './styles.ts';
import { PokeDetailsProps } from '../../interfaces/PokeData.ts';

export const DetailsPoke = () => {
    window.scroll(0, 0)

    const { theme } = useContext(ThemeContext)
    const { name } = useParams()
    const { data, isLoading, isError } = useDetails(name as string)

    return (
        <Section theme={theme}>
            <BackToHome to='/home'>Home</BackToHome>

            <PokeContainer>
                {!isLoading ? <Details data={data as PokeDetailsProps} /> : <p>LOADING...</p>}
                {isError && <p>request FAILED</p>}

            </PokeContainer>

        </Section>
    )
}