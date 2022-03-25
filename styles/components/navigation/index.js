import React from 'react';

import { NavigationFrame, NavigationInner, 
    NavigationLeft, TabText, ConnectButton, MetaMaskIcon, 
    NavigationRight, UserFrame, AddressText,
    UserFrameTop, UserFrameBottom, ConnectedText,
    HamburgerFrame,  Horizontal, DropDown, DropDownInner,
    XLineLeft, XLineRight} from './styles/navigation';


export default function Navigation({children, ...restProps}){

    return <NavigationFrame {...restProps}>{children}</NavigationFrame>

}

Navigation.NavigationInner = function NavigationNavigationInner({children, ...restProps}) {
    return <NavigationInner {...restProps}> {children}</NavigationInner>
}

Navigation.NavigationRight = function NavigationNavigationRight({children, ...restProps}) {
    return <NavigationRight {...restProps}> {children}</NavigationRight>
}


Navigation.TabText = function NavigationTabText({children, ...restProps}) {
    return <TabText {...restProps}> {children}</TabText>
}

Navigation.NavigationLeft = function NavigationNavigationLeft({children, ...restProps}) {
    return <NavigationLeft {...restProps}> {children}</NavigationLeft>
}

Navigation.ConnectButton = function NavigationConnectButton({children, ...restProps}) {
    return <ConnectButton {...restProps}> {children}</ConnectButton>
}

Navigation.MetaMaskIcon = function NavigationMetaMaskIcon({children, ...restProps}) {
    return <MetaMaskIcon {...restProps}></MetaMaskIcon>
}

Navigation.UserFrame = function NavigationUserFrame({children, ...restProps}) {
    return <UserFrame {...restProps}> {children}</UserFrame>
}

Navigation.UserFrameTop = function NavigationUserFrameTop({children, ...restProps}) {
    return <UserFrameTop {...restProps}> {children}</UserFrameTop>
}

Navigation.UserFrameBottom = function NavigationUserFrameBottom({children, ...restProps}) {
    return <UserFrameBottom {...restProps}> {children}</UserFrameBottom>
}

Navigation.AddressText = function NavigationAddressText({children, ...restProps}) {
    return <AddressText {...restProps}> {children}</AddressText>
}

Navigation.ConnectedText = function NavigationConnectedText({children, ...restProps}) {
    return <ConnectedText {...restProps}> {children}</ConnectedText>
}

Navigation.HamburgerFrame = function NavigationHamburgerFrame({children, ...restProps}) {
    return <HamburgerFrame {...restProps}> {children}</HamburgerFrame>
}

Navigation.Horizontal = function NavigationHorizontal({children, ...restProps}) {
    return <Horizontal {...restProps}> {children}</Horizontal>
}

Navigation.DropDown = function NavigationDropDown({children, ...restProps}) {
    return <DropDown {...restProps}> {children}</DropDown>
}

Navigation.DropDownInner = function NavigationDropDownInner({children, ...restProps}) {
    return <DropDownInner {...restProps}> {children}</DropDownInner>
}


Navigation.XLineLeft = function NavigationXLineLeft({children, ...restProps}) {
    return <XLineLeft {...restProps}> {children}</XLineLeft>
}

Navigation.XLineRight = function NavigationXLineRight({children, ...restProps}) {
    return <XLineRight {...restProps}> {children}</XLineRight>
}