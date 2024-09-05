import {FC,memo} from 'react';

type SadIncrementorProps={};

const SadIncrementor:FC<SadIncrementorProps>=(props)=>{
    return <div>
        <h1>Are You Sad?</h1>
        <button className='bg-blue-700'>Yes</button>
    </div>
}
SadIncrementor.defaultProps={};
export default memo(SadIncrementor);

