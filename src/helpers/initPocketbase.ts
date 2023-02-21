import { IncomingMessage, ServerResponse } from 'http';
import PocketBase from 'pocketbase';

export const initPocketBase = async (
  req: IncomingMessage & {
    cookies: Partial<{
      [key: string]: string;
    }>;
  },
  res: ServerResponse<IncomingMessage>
) => {
  const pb = new PocketBase('http://127.0.0.1:8090');

  pb.authStore.loadFromCookie(req?.headers?.cookie || '');
  console.log(req?.headers?.cookie);

  pb.authStore.onChange(() => {
    res?.setHeader('set-cookie', pb.authStore.exportToCookie());
  });

  try {
    pb.authStore.isValid && (await pb.collection('users').authRefresh());
  } catch (_) {
    pb.authStore.clear();
  }

  return pb;
};
