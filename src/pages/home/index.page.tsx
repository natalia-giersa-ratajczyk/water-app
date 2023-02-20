import { IncomingMessage, ServerResponse } from 'http';
import { GetServerSideProps } from 'next';
import PocketBase, { Record } from 'pocketbase';

import HomePage from '@/components/HomePage';

type HomeProps = {
  records: Record[];
};

const Home = ({ records }: HomeProps) => {
  console.log(records);
  return <HomePage records={records} />;
};

const initPocketBase = async (
  req: IncomingMessage & {
    cookies: Partial<{
      [key: string]: string;
    }>;
  },
  res: ServerResponse<IncomingMessage>
) => {
  const pb = new PocketBase('http://127.0.0.1:8090');

  pb.authStore.loadFromCookie(req?.headers?.cookie || '');

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

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({
  req,
  res,
}) => {
  const pb = await initPocketBase(req, res);

  const currentUser = pb.authStore.model;
  console.log(pb.authStore);

  const records = await pb.collection('records').getFullList(200, {
    sort: '-created',
    filter: `userId='${currentUser?.id}'`,
  });

  return {
    props: {
      records,
    },
  };
};

export default Home;
