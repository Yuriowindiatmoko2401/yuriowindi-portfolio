'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/admin-login');
  }, [router]);
  
  // This is a fallback that will be shown briefly before the redirect
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#111827', 
      color: 'white',
      fontFamily: 'sans-serif'
    }}>
      <p>Redirecting to admin login...</p>
    </div>
  );
}
