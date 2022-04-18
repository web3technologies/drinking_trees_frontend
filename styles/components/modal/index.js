import React from 'react';
import { ModalFrame, ModalFrameLeft, ModalFrameRight, ModalMainText } from './styles/modal'


export default function Modal2({children, ...restProps}) {
    return <ModalFrame {...restProps}>{children}</ModalFrame>
}

Modal2.ModalFrameLeft = function ModalModalFrameLeft({children, ...restProps}) {
    return <ModalFrameLeft {...restProps}> {children}</ModalFrameLeft>
}

Modal2.ModalFrameRight = function ModalModalFrameRight({children, ...restProps}) {
    return <ModalFrameRight {...restProps}> {children}</ModalFrameRight>
}

Modal2.ModalMainText = function ModalModalMainText({children, ...restProps}) {
    return <ModalMainText {...restProps}> {children}</ModalMainText>
}