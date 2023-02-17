import { Admin, Record } from 'pocketbase';

export type HomePageProps = {
  currentUser: Record | Admin | null;
};
