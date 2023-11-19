'use client';
import React, {useState} from 'react';
import adminEnterStyles from './adminEnter.module.scss';
import { signIn } from 'next-auth/react';
import type { FormEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import FormSubPopup from '../FormSubPopup/FormSubPopup';

const AdminEnter = () => {
  const [popupState, setPopupState] = useState(false);
  function openPopup() {
    setTimeout(() => setPopupState(false), 2000);
  }
  const [info, setInfo] = useState<any>([]);

  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setPopupState(true);
    setInfo([`Загрузка информации на сервер`, 'loading']);
    const formData = new FormData(event.target as HTMLFormElement);
    const res = await signIn('credentials', {
      login: formData.get('login'),
      password: formData.get('password'),
      redirect: false,
    });
    if (res && !res.error) {
      setInfo([`Вы успешно аутентифицировались`, 'afferm']);
      openPopup();
      router.push('/admin-panel-add');
    } else {
      console.log(res);
      setInfo(['Что-то пошло не так', 'regect']);
      openPopup();
    }
  };


  return (
    <>
      <section className={adminEnterStyles.adminEnter}>
        <div className={adminEnterStyles.adminEnter__container}>
          <form
            onSubmit={handleSubmit}
            className={adminEnterStyles.adminEnter__form}
          >
            <h2>Вход для администратора</h2>
            <input
              type='text'
              placeholder='Введите логин'
              className={adminEnterStyles.adminEnter__input}
              name='login'
            />
            <input
              type='password'
              name='password'
              placeholder='Введите пароль'
              className={adminEnterStyles.adminEnter__input}
            />
            <button
              type='submit'
              className={adminEnterStyles.adminEnter__button}
            >
              Войти
            </button>
          </form>
        </div>
      </section>
      { popupState && <FormSubPopup info={info[0]} popupType={info[1]} />}
    </>
  );
};

export default AdminEnter;
