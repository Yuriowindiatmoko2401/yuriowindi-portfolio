'use client';

import { useEffect, useState } from 'react';

export default function AdminLoginPage() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check if we're in local development or production
    const isLocalhost = typeof window !== 'undefined' && 
      (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
    
    if (isLocalhost) {
      // In local development, redirect to Payload's admin panel
      window.location.href = '/api/admin';
    } else {
      // In production, show login UI
      setIsLoading(false);
    }
  }, []);
  
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#111827', 
      color: 'white',
      fontFamily: 'system-ui, sans-serif',
      padding: '1rem'
    }}>
      {isLoading ? (
        <p>Loading admin panel...</p>
      ) : (
        <div style={{
          width: '100%',
          maxWidth: '400px',
          padding: '2rem',
          backgroundColor: '#1f2937',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{textAlign: 'center', marginBottom: '2rem'}}>
            <h1 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Admin Login</h1>
            <p style={{color: '#9ca3af', fontSize: '0.875rem'}}>
              Please log in with your admin credentials
            </p>
          </div>
          
          <form>
            <div style={{marginBottom: '1rem'}}>
              <label htmlFor="email" style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#d1d5db'}}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                style={{
                  width: '100%',
                  padding: '0.5rem 0.75rem',
                  backgroundColor: '#374151',
                  border: '1px solid #4b5563',
                  borderRadius: '0.25rem',
                  color: 'white'
                }}
              />
            </div>
            
            <div style={{marginBottom: '1.5rem'}}>
              <label htmlFor="password" style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#d1d5db'}}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                style={{
                  width: '100%',
                  padding: '0.5rem 0.75rem',
                  backgroundColor: '#374151',
                  border: '1px solid #4b5563',
                  borderRadius: '0.25rem',
                  color: 'white'
                }}
              />
            </div>
            
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.5rem 1rem',
                backgroundColor: '#4f46e5',
                color: 'white',
                border: 'none',
                borderRadius: '0.25rem',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Sign in
            </button>
            
            <p style={{marginTop: '1rem', fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center'}}>
              Note: The admin panel is fully functional in local development mode.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
