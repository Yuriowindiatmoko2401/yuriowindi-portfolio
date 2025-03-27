import { redirect } from 'next/navigation';

export default function AdminRedirect() {
  // This will redirect directly to the Payload admin login page
  redirect('/admin/login');
  
  // This won't be rendered, but is here as a fallback
  return null;
}
