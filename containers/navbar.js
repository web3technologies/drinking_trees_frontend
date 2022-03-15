import React from 'react'
import Link from 'next/link'
// component
import { Navigation } from '../styles/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


export default function NavigationContainer(props) {

    return (
        <Navigation>
            <Navigation.NavigationInner>
                <Navigation.NavigationLeft>
                    <Link href="/">
                        <Navigation.TabText>Home</Navigation.TabText>
                    </Link>

                    <Link href="/marketplace">
                        <Navigation.TabText>Marketplace</Navigation.TabText>
                    </Link>

                    <Link href="/my-assets">
                        <Navigation.TabText>My Trees</Navigation.TabText>
                    </Link>

                    <Link href="/mint">
                        <Navigation.TabText>Mint</Navigation.TabText>
                    </Link>
                </Navigation.NavigationLeft>
                <Navigation.NavigationRight>
                    {/* <FontAwesomeIcon icon={faUser} color="white"/>  */}
                    <Navigation.ConnectButton>Connect</Navigation.ConnectButton>
                </Navigation.NavigationRight>
            </Navigation.NavigationInner>           
        </Navigation>
    )
}