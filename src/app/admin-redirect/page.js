import { redirect } from 'next/navigation';

export default function AdminRedirect() {
  // This will redirect to the Payload admin panel
  redirect('/admin');
  
  // This won't be rendered, but is here as a fallback
  return null;
}
