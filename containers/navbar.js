import React from 'react'
// import Link from 'next/link'
import { Navigation } from '../styles/components';
import  UserContainer  from './user'
import {useState, useContext} from 'react'
// context
import { UserContext } from '../context/user';

import Link from './customlink'

export default function NavigationContainer() {

    const {loadUser, user, chain, hasMetaMask, switchNetwork} = useContext(UserContext)
    const [ isMobileOpen, setIsMobileOpen ] = useState(false)


    const toggleMobile = ()=>{
        setIsMobileOpen(!isMobileOpen)
    }


    return (
        <Navigation>
            <Navigation.NavigationInner>

                
                {
                    isMobileOpen ?
                    <>
                        <Navigation.HamburgerFrame onClick={toggleMobile}>
                            <Navigation.XLineLeft/>
                            <Navigation.XLineRight/>
                        </Navigation.HamburgerFrame>
                        <Navigation.DropDown>
                            <Navigation.DropDownInner>
                                <Link href="/">
                                    <Navigation.TabText onClick={toggleMobile}>Home</Navigation.TabText>
                                </Link>
                                <Link href="/mint" >
                                    <Navigation.TabText onClick={toggleMobile}>Mint</Navigation.TabText>
                                </Link>
                                <Link href="/my-trees">
                                    <Navigation.TabText onClick={toggleMobile}>My Trees</Navigation.TabText>
                                </Link>
                                <Link href="/marketplace" >
                                    <Navigation.TabText onClick={toggleMobile}>Marketplace</Navigation.TabText>
                                </Link>
                            </Navigation.DropDownInner>
                        </Navigation.DropDown>
                    </>
                    
                    :
                    <Navigation.HamburgerFrame onClick={toggleMobile}>
                        <Navigation.Horizontal/>
                        <Navigation.Horizontal/>
                        <Navigation.Horizontal/>
                    </Navigation.HamburgerFrame>
                }
                

                <Navigation.NavigationLeft>
                    <Link href="/">
                        <Navigation.TabText>Home</Navigation.TabText>
                    </Link>

                    <Link href="/mint">
                        <Navigation.TabText>Mint</Navigation.TabText>
                    </Link>

                    <Link href="/my-trees">
                        <Navigation.TabText>My Trees</Navigation.TabText>
                    </Link>

                    <Link href="/marketplace">
                        <Navigation.TabText>Marketplace</Navigation.TabText>
                    </Link>
                </Navigation.NavigationLeft>

                <Navigation.NavigationRight>
                    <UserContainer user={user} loadUser={loadUser} chain={chain} hasMetaMask={hasMetaMask} switchNetwork={switchNetwork} />
                </Navigation.NavigationRight>
            </Navigation.NavigationInner>           
        </Navigation>
    )
}
