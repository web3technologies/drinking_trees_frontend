import { RoadMap } from "../styles/components"
import { baseExampleURL } from '../config/config';

export default function RoadMapContainer(){


    return (
        <RoadMap>
            <RoadMap.RoadMapFrameInner>
                <RoadMap.RoadMapImage src={`${baseExampleURL}RoadMap.svg`}/>
            </RoadMap.RoadMapFrameInner>
        </RoadMap>
    )

}