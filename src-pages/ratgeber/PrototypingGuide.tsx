'use client'

import { useEffect } from 'react';
import { useRouter } from "next/navigation";

const PrototypingGuide = () => {
  const router = useRouter();

  useEffect(() => {
    // 301 Redirect to the merged page
    router.replace('/rapid-prototyping');
  }, [router]);

  return null;
};

export default PrototypingGuide;