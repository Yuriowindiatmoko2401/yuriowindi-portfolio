import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Portfolio Admin</h1>
        
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            The Payload CMS admin panel is currently only available in local development mode.
          </p>
          <p className="text-gray-700 mb-4">
            To access the admin panel:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>Run the application locally using <code className="bg-gray-100 px-1 rounded">npm run dev</code></li>
            <li>Access the admin panel at <code className="bg-gray-100 px-1 rounded">http://localhost:3000/admin</code></li>
          </ol>
        </div>
        
        <div className="flex justify-center">
          <Link href="/" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
