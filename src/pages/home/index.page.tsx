// import PocketBase, { Admin, Record } from 'pocketbase';

import HomePage from '@/components/HomePage';

const Home = () => {
  return <HomePage />;
};

// export const getServerSideProps = async () => {
//   const pb = new PocketBase('http://127.0.0.1:8090');

//   const currentUser = pb.authStore.model;
//   console.log(currentUser);

//   return {
//     props: {
//       currentUser,
//     },
//   };
// };

export default Home;
