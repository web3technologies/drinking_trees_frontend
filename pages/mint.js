import MintContainer from '../containers/mint';
import { ModalProvider } from 'styled-react-modal'


export default function Mint(){


    return (
        <>
            <ModalProvider>
                <MintContainer/>
            </ModalProvider>
        </>
        )
}