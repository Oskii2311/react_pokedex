import { useCallback, useState, useEffect } from 'react';

const useInfiniteScroll = () => {
    const [isInfiniteScrollVisible, setInfiniteScroll] = useState(false);

    const handleScroll = useCallback(async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        ) {
            return;
        }
        setInfiniteScroll(true);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return {
        isInfiniteScrollVisible,
        setInfiniteScroll,
    };
};

export default useInfiniteScroll;
