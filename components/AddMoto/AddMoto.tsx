'use client';
import React, { useState } from 'react';
import addMotoStyles from './addMoto.module.scss';
import useForm from '@/hooks/useForm';
import api from '@/utils/api';
import FormSubPopup from '../FormSubPopup/FormSubPopup';

const AddMoto = () => {
  const [popupState, setPopupState] = useState(false);
  const [info, setInfo] = useState<any>([]);
  const { values, handleChange } = useForm();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(values)
    const {
      compressionRation,
      gazValue,
      mainImage,
      mass,
      motoName,
      motoPrice,
      operatedValue,
      paragraph1,
      paragraph2,
      paragraph3,
      paragraph4,
      paragraph5,
      paragraph6,
      paragraph7,
      paragraph8,
      paragraph9,
      paragraph10,
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
      photo9,
      photo10,
      power,
      seatHeight,
      sizes,
      torque,
      wheel,
    } = values;
    const motoPerformance = {
      compressionRation,
      gazValue,
      mass,
      operatedValue,
      power,
      seatHeight,
      sizes,
      torque,
      wheel,
    };
    const description = [
      paragraph1,
      paragraph2,
      paragraph3,
      paragraph4,
      paragraph5,
      paragraph6,
      paragraph7,
      paragraph8,
      paragraph9,
      paragraph10,
    ].filter(
      (pharagraph) => typeof pharagraph === 'string' && pharagraph !== '',
    );

    const catalog = [
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
      photo9,
      photo10,
    ]
      .filter((photo) => typeof photo === 'string')
      .map((url) => {
        return `https://docs.google.com/uc?id=${url.match(/\/d\/(.+?)\//)[1]}`;
      });
    const directUrlImage = `https://docs.google.com/uc?id=${
      mainImage.match(/\/d\/(.+?)\//)[1]
    }`;
    function openPopup() {
      setTimeout(() => setPopupState(false), 2000);
    }

    api
      .postMotorcycles(
        motoName,
        motoPrice,
        directUrlImage,
        catalog,
        description,
        motoPerformance,
      )
      .then(() => {
        setInfo([`Информация о мотоцикле загружена на\u00a0сервер`, true]);
        setPopupState(true);
        openPopup();
      })
      .catch((err) => {
        console.log(err);
        setInfo(['Что-то пошло не так', false]);
        setPopupState(true);
        openPopup();
      });
  };

  return (
    <>
      <section className={addMotoStyles.addMoto}>
        <div className={addMotoStyles.addMoto__container}>
          <form onSubmit={handleSubmit} className={addMotoStyles.addMoto__form}>
            <h3 className={addMotoStyles.addMoto__title}>Данные мотоцикла</h3>
            <label className={addMotoStyles.addMoto__label}>
              Название мотоцикла (английский язык)
            </label>
            <input
              onChange={handleChange}
              className={addMotoStyles.addMoto__input}
              name='motoName'
              type='text'
              required
            ></input>
            <label className={addMotoStyles.addMoto__label}>
              Цена мотоцикла
            </label>
            <input
              onChange={handleChange}
              className={addMotoStyles.addMoto__input}
              name='motoPrice'
              type='text'
              required
            ></input>
            <label className={addMotoStyles.addMoto__label}>
              Фото обложки (ссылка){' '}
            </label>
            <input
              onChange={handleChange}
              className={addMotoStyles.addMoto__input}
              name='mainImage'
              type='url'
              required
            ></input>
            <label className={addMotoStyles.addMoto__label}>
              Характеристики мотоцикла (число без наименования)
            </label>
            <ul className={addMotoStyles.addMoto__sublabelContainer}>
              <li>
                <input
                  onChange={handleChange}
                  name='mass'
                  placeholder='Снаряженная масса, кг'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='sizes'
                  placeholder='Д/Ш/В, мм'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='wheel'
                  placeholder='Колесная база, мм'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='seatHeight'
                  placeholder='Высота сиденья, мм'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='gazValue'
                  placeholder='Объем бензобака, л'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='operatedValue'
                  placeholder='Рабочий объем, см³'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='compressionRation'
                  placeholder='Степень сжатия'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='power'
                  placeholder='Мощность, лс при об/мин'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='torque'
                  placeholder='Крутящий момент, Нм при об/мин'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                  required
                />
              </li>
            </ul>
            <label className={addMotoStyles.addMoto__label}>
              Описание (втавлять по абзацу в каждую форму)
            </label>
            <ul className={addMotoStyles.addMoto__sublabelContainer}>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph1'
                  placeholder='1 абзац'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph2'
                  placeholder='2 абзац'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph3'
                  placeholder='3 абзац'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph4'
                  placeholder='4 абзац'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph5'
                  placeholder='5 абзац'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph6'
                  placeholder='6 абзац'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph7'
                  placeholder='7 абзац'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph8'
                  placeholder='8 абзац'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph9'
                  placeholder='9 абзац'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph10'
                  placeholder='10 абзац'
                  type='text'
                  className={addMotoStyles.addMoto__sublabel}
                />
              </li>
            </ul>
            <label className={addMotoStyles.addMoto__label}>
              Фотографии мотоциклов (ссылки, 4 минимум){' '}
            </label>
            <ul className={addMotoStyles.addMoto__sublabelContainer}>
              <li>
                <input
                  onChange={handleChange}
                  name='photo1'
                  placeholder='1 фотография'
                  type='url'
                  className={addMotoStyles.addMoto__sublabel}
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='photo2'
                  placeholder='2 фотография'
                  type='url'
                  className={addMotoStyles.addMoto__sublabel}
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='photo3'
                  placeholder='3 фотография'
                  type='url'
                  className={addMotoStyles.addMoto__sublabel}
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='photo4'
                  placeholder='4 фотография'
                  type='url'
                  className={addMotoStyles.addMoto__sublabel}
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='photo5'
                  placeholder='5 фотография'
                  type='url'
                  className={addMotoStyles.addMoto__sublabel}
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='photo6'
                  placeholder='6 фотография'
                  type='url'
                  className={addMotoStyles.addMoto__sublabel}
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='photo7'
                  placeholder='7 фотография'
                  type='url'
                  className={addMotoStyles.addMoto__sublabel}
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='photo8'
                  placeholder='8 фотография'
                  type='url'
                  className={addMotoStyles.addMoto__sublabel}
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='photo9'
                  placeholder='9 фотография'
                  type='url'
                  className={addMotoStyles.addMoto__sublabel}
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='photo10'
                  placeholder='10 фотография'
                  type='url'
                  className={addMotoStyles.addMoto__sublabel}
                />
              </li>
            </ul>
            <button type='submit' className={addMotoStyles.addMoto__button}>
              Отправить форму
            </button>
          </form>
        </div>
      </section>
      {popupState && <FormSubPopup info={info[0]} popupType={info[1]} />}
    </>
  );
};

export default AddMoto;
