import { Payload } from '@payloadcms/next';
import { getPayload } from '../../../lib/payload';

export default async function AdminPage() {
  const payload = await getPayload();
  return <Payload payload={payload} />;
}
