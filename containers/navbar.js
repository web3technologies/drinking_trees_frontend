import React from 'react'
import Link from 'next/link'
// component
import { Navigation } from '../styles/components';
import  UserContainer  from './user'


export default function NavigationContainer({loadUser, user, chain, switchNetwork={switchNetwork}}) {

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
                    <UserContainer user={user} loadUser={loadUser} chain={chain} switchNetwork={switchNetwork}/>
                </Navigation.NavigationRight>
            </Navigation.NavigationInner>           
        </Navigation>
    )
}