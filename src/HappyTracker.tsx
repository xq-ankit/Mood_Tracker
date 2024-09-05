import {FC,memo} from 'react';

type HappyTrackerProps={};

const HappyTracker:FC<HappyTrackerProps>=(props)=>{
    return <div>
        <h1>You were happy 20 times</h1>
        
    </div>
}
HappyTracker.defaultProps={};
export default memo(HappyTracker);

