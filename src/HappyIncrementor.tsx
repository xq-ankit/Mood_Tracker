import {FC,memo} from 'react';

type HappyIncrementorProps={};

const HappyIncrementor:FC<HappyIncrementorProps>=(props)=>{
    return <div>
        <h1>Are You Happy?</h1>
        <button className="bg-orange-700">Yes</button>
    </div>
}
HappyIncrementor.defaultProps={};
export default memo(HappyIncrementor);
