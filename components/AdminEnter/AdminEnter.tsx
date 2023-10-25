'use client'
import React from 'react';
import adminEnterStyles from './adminEnter.module.scss';
import { signIn } from 'next-auth/react';
import type { FormEventHandler } from 'react';
import { useRouter } from 'next/navigation';

const AdminEnter = () => {
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const res = await signIn('credentials', {
      login: formData.get('login'),
      password: formData.get('password'),
      redirect: false,
    });
    if (res && !res.error) {
      router.push('/admin-panel-add');
      localStorage.setItem('validated', 'true');
    } else {
      console.log(res);
    }
  };
  return (
    <section className={adminEnterStyles.adminEnter}>
      <div className={adminEnterStyles.adminEnter__container}>
        <form onSubmit={handleSubmit} className={adminEnterStyles.adminEnter__form}>
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
          <button type='submit' className={adminEnterStyles.adminEnter__button}>
            Войти
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminEnter;
