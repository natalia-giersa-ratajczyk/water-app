import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/Button';
import Container from '@/components/Container';
import ConfirmedPassword from '@/components/Inputs/ConfirmedPassword';
import FemaleCheckbox from '@/components/Inputs/FemaleCheckbox';
import MaleCheckbox from '@/components/Inputs/MaleCheckbox';
import Password from '@/components/Inputs/Password';
import Layout from '@/components/Layout';
import Modal from '@/components/Modal';
import { AppContext } from '@/context/context';

import UserProfileInput from './UserProfileInput';
import styles from './UserProfilePage.module.css';
import { ModalFormProps } from './UserProfilePage.types';

const UserProfilePage = () => {
  const { logoutHandler } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [isPasswordLoading, setIsPasswordLoading] = useState(false);
  const [canEditProfile, setCanEditProfile] = useState(false);
  const [gender, setGender] = useState<null | boolean>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<ModalFormProps>();

  const isFemaleChecked = gender !== null && !gender;
  const isMaleChecked = gender !== null && gender;

  const clickHandler = () => {
    logoutHandler();

    router.replace('/');
  };

  const editProfileHandler = () => {
    setCanEditProfile(false);

    // TODO: add form validation and edit profile functionality
  };

  const changePassword = () => {
    setIsPasswordLoading(true);

    // TODO: add form validation and change password functionality

    setTimeout(() => {
      setOpen(false);
      setIsPasswordLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ password: '', confirmedPassword: '' });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <Layout>
      <Container isFullHeight>
        <div className={styles.container}>
          <div className={styles['edit-wrapper']}>
            <h2 className={styles.title}>Mój profil</h2>
            <button
              className={styles['edit-button']}
              onClick={() => setCanEditProfile(true)}
            >
              <span>Edytuj</span>
            </button>
          </div>
          <form className={styles['form-wrapper']}>
            <UserProfileInput
              id="name"
              label="Imię"
              inputType="text"
              inputValue="Stefan"
              disabled={!canEditProfile}
            />
            <UserProfileInput
              id="weight"
              label="Waga"
              inputType="number"
              inputValue="69"
              disabled={!canEditProfile}
            />
            <div className={styles['gender-box']}>
              <div className={styles['gender-text']}>
                <h3>Płeć</h3>
                {!canEditProfile && <span>Mężczyzna</span>}
              </div>
              {canEditProfile && (
                <div className={styles['edit-gender-box']}>
                  <FemaleCheckbox
                    {...register('gender')}
                    isChecked={isFemaleChecked}
                    onChange={(event) => {
                      register('gender').onChange(event);
                      setGender(false);
                    }}
                  />
                  <MaleCheckbox
                    {...register('gender')}
                    isChecked={isMaleChecked}
                    onChange={(event) => {
                      register('gender').onChange(event);
                      setGender(true);
                    }}
                  />
                </div>
              )}
            </div>
            {canEditProfile && (
              <button
                className={styles['confirm-edit-button']}
                onClick={editProfileHandler}
              >
                <span>Zapisz</span>
              </button>
            )}
          </form>
          <div className={styles.actions}>
            <button className={styles.button} onClick={clickHandler}>
              <span>Wyloguj się</span>
            </button>
            <Modal
              trigger={
                <button className={styles['change-password-button']}>
                  <span>Zmień hasło</span>
                </button>
              }
              isOpen={open}
              openHandler={setOpen}
              title="Zmiana hasła"
            >
              <Password {...register('password')} />
              <ConfirmedPassword {...register('confirmedPassword')} />
              <div className={styles['confirm-password-box']}>
                <Button onClick={handleSubmit(changePassword)}>
                  <span>{isPasswordLoading ? 'Zapisywanie...' : 'Zapisz'}</span>
                </Button>
              </div>
            </Modal>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default UserProfilePage;
