import React from 'react';
import { 
    MainFrame, MainFrameInner, MainFrameLeft, 
     MainFrameRight, MainText, SupportTextFrame, SupportingText, ImageFrame, BlueDiv, PurpleDiv,
     Image, CountDownFrame, CountDownText, 
     ExploreDiv, CollectionLink, LinkLogo, LoadingFrame, LogoFrame,
    Landing, MovingTrees, LogoDiv, SiteURL, Navbar, Listing, ListingSocial, ContentDiv, ContentInner, Heading, ButtonExplore, Discord, Twitter, Metamask} from './styles/main'

export default function Main({children, ...restProps}) {
    return <MainFrame {...restProps}>{children}</MainFrame>
}


Main.MainFrameInner = function MainMainFrameInner({children, ...restProps}) {
    return <MainFrameInner {...restProps}> {children}</MainFrameInner>
}

Main.MainFrameLeft = function MainMainFrameLeft({children, ...restProps}) {
    return <MainFrameLeft {...restProps}> {children}</MainFrameLeft>
}

Main.MainText = function MainMainText({children, ...restProps}) {
    return <MainText {...restProps}> {children}</MainText>
}

Main.SupportTextFrame = function MainSupportTextFrame({children, ...restProps}) {
    return <SupportTextFrame {...restProps}> {children}</SupportTextFrame>
}

Main.SupportingText = function MainSupportingText({children, ...restProps}) {
    return <SupportingText {...restProps}> {children}</SupportingText>
}

Main.ExploreDiv = function MainExploreDiv({children, ...restProps}) {
    return <ExploreDiv {...restProps}> {children}</ExploreDiv>
}

Main.CollectionLink = function MainCollectionLink({children, ...restProps}) {
    return <CollectionLink {...restProps}> {children}</CollectionLink>
}

Main.LinkLogo = function MainLinkLogo({children, ...restProps}) {
    return <LinkLogo {...restProps}> {children}</LinkLogo>
}

Main.MainFrameRight = function MainMainFrameRight({children, ...restProps}) {
    return <MainFrameRight {...restProps}> {children}</MainFrameRight>
}
Main.ContentDiv = function MainContentDiv({children, ...restProps}) {
    return <ContentDiv {...restProps}> {children}</ContentDiv>
}
Main.ContentInner = function MainContentInner({children, ...restProps}) {
    return <ContentInner {...restProps}> {children}</ContentInner>
}
Main.ImageFrame = function MainImageFrame({children, ...restProps}) {
    return <ImageFrame {...restProps}> {children}</ImageFrame>
}
Main.BlueDiv = function MainBlueDiv({children, ...restProps}) {
    return <BlueDiv {...restProps}> {children}</BlueDiv>
}

Main.LogoDiv = function MainLogoDiv({children, ...restProps}) {
    return <LogoDiv {...restProps}> {children}</LogoDiv>
}
Main.SiteURL = function MainSiteURL({children, ...restProps}) {
    return <SiteURL {...restProps}> {children}</SiteURL>
}
Main.Listing = function MainListing({children, ...restProps}) {
    return <Listing {...restProps}> {children}</Listing>
}
Main.ListingSocial = function MainListingSocial({children, ...restProps}) {
    return <ListingSocial {...restProps}> {children}</ListingSocial>
}
Main.Navbar = function MainNavbar({children, ...restProps}) {
    return <Navbar {...restProps}> {children}</Navbar>
}
Main.Heading = function MainHeading({children, ...restProps}) {
    return <Heading {...restProps}> {children}</Heading>
}
Main.ButtonExplore = function MainButtonExplore({children, ...restProps}) {
    return <ButtonExplore {...restProps}> {children}</ButtonExplore>
}
Main.Discord = function MainDiscord({children, ...restProps}) {
    return <Discord {...restProps}> {children}</Discord>
}
Main.Twitter = function MainTwitter({children, ...restProps}) {
    return <Twitter {...restProps}> {children}</Twitter>
}
Main.Metamask = function MainMetamask({children, ...restProps}) {
    return <Metamask {...restProps}> {children}</Metamask>
}
Main.PurpleDiv = function MainPurpleDiv({children, ...restProps}) {
    return <PurpleDiv {...restProps}> {children}</PurpleDiv>
}

Main.Image = function MainImage({children, ...restProps}) {
    return <Image {...restProps}></Image>
}
Main.Landing = function MainLanding({children, ...restProps}) {
    return <Landing {...restProps}></Landing>
}
Main.CountDownFrame = function MainCountDownFrame({children, ...restProps}) {
    return <CountDownFrame {...restProps}> {children}</CountDownFrame>
}

Main.CountDownText = function MainCountDownText({children, ...restProps}) {
    return <CountDownText {...restProps}>{children}</CountDownText>
}

Main.LoadingFrame = function MainLoadingFrame({children, ...restProps}) {
    return <LoadingFrame {...restProps}>{children}</LoadingFrame>
}

Main.LogoFrame = function MainLogoFrame({children, ...restProps}) {
    return <LogoFrame {...restProps}>{children}</LogoFrame>
}



