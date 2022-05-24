import MintContainer from '../containers/mint';
import { ModalProvider } from 'styled-react-modal'
import useTimer from '../hooks/usetimer';

export default function Mint(){

    return (
        <>
            <ModalProvider>
                <MintContainer/>
            </ModalProvider>
        </>
        )
}