import { InfinitySpin } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <InfinitySpin
            visible={true}
            width="200"
            color="#3f51b5"
            ariaLabel="infinity-spin-loading"
        />  
    )
}