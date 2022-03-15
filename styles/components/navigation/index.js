import React from 'react';

import { NavigationFrame, NavigationInner, NavigationLeft, TabText, ConnectButton, NavigationRight} from './styles/navigation';


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