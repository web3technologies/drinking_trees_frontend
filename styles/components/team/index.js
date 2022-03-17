import React from 'react';
import { TeamFrame, TeamBox, TeamText, CardFrame, 
    CardFrameTop, Card, CardImage,  CardTitle, CardSubTitle, SocialMediaFrame } from './styles/team'

export default function Team({children, ...restProps}) {
    return <TeamFrame {...restProps}>{children}</TeamFrame>
}


Team.TeamBox = function TeamTeamBox({children, ...restProps}) {
    return <TeamBox {...restProps}> {children}</TeamBox>
}

Team.TeamText = function TeamTeamText({children, ...restProps}) {
    return <TeamText {...restProps}> {children}</TeamText>
}

Team.CardFrame = function TeamCardFrame({children, ...restProps}) {
    return <CardFrame {...restProps}> {children}</CardFrame>
}

Team.CardFrameTop = function TeamCardFrameTop({children, ...restProps}) {
    return <CardFrameTop {...restProps}> {children}</CardFrameTop>
}

Team.Card = function TeamCard({children, ...restProps}) {
    return <Card {...restProps}> {children}</Card>
}

Team.CardImage = function TeamCardImage({children, ...restProps}) {
    return <CardImage {...restProps}></CardImage>
}

Team.CardTitle = function TeamCardTitle({children, ...restProps}) {
    return <CardTitle {...restProps}> {children}</CardTitle>
}

Team.CardSubTitle = function TeamCardSubTitle({children, ...restProps}) {
    return <CardSubTitle {...restProps}> {children}</CardSubTitle>
}

Team.SocialMediaFrame = function TeamSocialMediaFrame({children, ...restProps}) {
    return <SocialMediaFrame {...restProps}> {children}</SocialMediaFrame>
}

