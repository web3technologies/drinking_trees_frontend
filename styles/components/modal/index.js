import React from 'react';
import { ModalFrame, ModalFrameLeft, ModalFrameRight } from './styles/modal'


export default function Modal({children, ...restProps}) {
    return <ModalFrame {...restProps}>{children}</ModalFrame>
}

Modal.ModalFrameLeft = function ModalModalFrameLeft({children, ...restProps}) {
    return <ModalFrameLeft {...restProps}> {children}</ModalFrameLeft>
}

Modal.ModalFrameRight = function ModalModalFrameRight({children, ...restProps}) {
    return <ModalFrameRight {...restProps}> {children}</ModalFrameRight>
}