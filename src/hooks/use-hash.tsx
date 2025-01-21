'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const getHash = () => (typeof window !== 'undefined'
  ? decodeURIComponent(window.location.hash.replace('#', ''))
  : undefined);

const useHash = () => {
  const [hash, setHash] = useState(getHash());
  const [isClient, setIsClient] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    setIsClient(true);
    setHash(getHash());
  }, [searchParams]);

  return isClient ? hash : null;
};

export default useHash;
