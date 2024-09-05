import {FC,memo} from 'react';

type SadTrackerProps={};

const SadTracker:FC<SadTrackerProps>=(props)=>{
    return <div>
        <h1>You were Sad 20 times</h1>
        
    </div>
}
SadTracker.defaultProps={};
export default memo(SadTracker);

