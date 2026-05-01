'use client'

import { useEffect } from 'react';
import { useRouter } from "next/navigation";

const Prototypen = () => {
  const router = useRouter();

  useEffect(() => {
    // 301 Redirect to the full Rapid Prototyping landing page
    router.replace('/rapid-prototyping');
  }, [router]);

  return null;
};

export default Prototypen;
