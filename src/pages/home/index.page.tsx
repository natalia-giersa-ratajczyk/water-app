import { GetServerSideProps } from 'next';
import { Record } from 'pocketbase';

// import { useContext } from 'react';
import HomePage from '@/components/HomePage';
import { initPocketBase } from '@/helpers/initPocketbase';
// import { AppContext } from '@/context/context';

type HomeProps = {
  records: Record[] | Promise<Record[]>;
};

// TODO: load data on the server

const Home = ({ records }: HomeProps) => {
  console.log(records);
  return <HomePage />;
};
// const Home = ({ records }: HomeProps) => {
//   console.log(records);
//   return <HomePage records={records} />;
// };

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
