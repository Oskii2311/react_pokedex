import { useCallback, useState } from 'react';

const useImageLoading = () => {
    const [isImageLoading, setImageLoading] = useState(true);
    const finishImageLoading = useCallback(() => {
        setImageLoading(false);
    }, []);

    return { isImageLoading, finishImageLoading };
};

export default useImageLoading;
