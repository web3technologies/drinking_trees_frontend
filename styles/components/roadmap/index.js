import React from 'react';
import { RoadMapFrame, RoadMapFrameInner, RoadMapImage} from './styles/roadmap'

export default function RoadMap({children, ...restProps}) {
    return <RoadMapFrame {...restProps}>{children}</RoadMapFrame>
}


RoadMap.RoadMapFrameInner = function RoadRoadMapFrameInner({children, ...restProps}) {
    return <RoadMapFrameInner {...restProps}> {children}</RoadMapFrameInner>
}

RoadMap.RoadMapImage = function RoadRoadMapImage({children, ...restProps}) {
    return <RoadMapImage {...restProps}></RoadMapImage>
}