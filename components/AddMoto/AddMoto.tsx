'use client';
import React, { useState } from 'react';
import './addMoto.css';
import useForm from '../../hooks/useForm';
import api from '../../utils/api';
import FormSubPopup from '../FormSubPopup/FormSubPopup';
import {
  PERFORMANCE_NAME,
  PERFORMANCE,
  PARAGRAPHS,
  PARAGRAPHS_NAME,
  PARAGRAPHS_CHANGED,
} from '../../utils/constants';

const AddMoto = () => {
  const [popupState, setPopupState] = useState(false);
  const [info, setInfo] = useState<any>([]);
  const { values, handleChange } = useForm();
  function openPopup() {
    setTimeout(() => setPopupState(false), 2000);
  }

  //добавление баннера

  const [banner, setBanner] = useState();
  const [mobileBanner, setMobileBanner] = useState<any>();

  const handleBannerLoad = (e: any) => {
    const selectedBanner = e.target.files[0];
    setBanner(selectedBanner as any);
  };

  const handleBannerLoadMobile = (e: any) => {
    const selectedBanner = e.target.files[0];
    const modifiedBanner = new File(
      [selectedBanner],
      'mobile_' + selectedBanner.name,
      {
        type: selectedBanner.type,
        lastModified: selectedBanner.lastModified,
      },
    );

    setMobileBanner(modifiedBanner as any);
  };
  // const handleBannerSubmit = (e: any) => {
  //   e.preventDefault();
  //   setInfo([`Загрузка информации на сервер`, 'loading']);
  //   setPopupState(true);
  //   if (banner && mobileBanner) {
  //     const formData = new FormData();
  //     formData.append('banners', banner);
  //     formData.append('banners', mobileBanner);

  //     api
  //       .postBanner(formData)
  //       .then((res) => {
  //         console.log('res', res)
  //         const bannerLinks = res.map((moto: any) => moto.path);
  //         setInfo([
  //           `Информация о баннере загружена на\u00a0сервер`,
  //           'afferm',
  //         ]);
  //         openPopup();
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setInfo(['Что-то пошло не так', 'regect']);
  //         openPopup();
  //       });
  //   } else {
  //     setInfo(['Что-то пошло не так', 'regect']);
  //     openPopup();
  //   }
  // };
  const handleBannerSubmit = async (e: any) => {
    e.preventDefault();
    setInfo([`Загрузка информации на сервер`, 'loading']);
    setPopupState(true);

    if (banner && mobileBanner) {
      const formData = new FormData();
      formData.append('banners', banner);
      formData.append('banners', mobileBanner);

      try {
        const existedBannersLinks = await api.getBanners();
        console.log(existedBannersLinks);
        console.log('existed1');
        if (existedBannersLinks && existedBannersLinks.length > 0) {
          await api.deleteBannersPhotos(existedBannersLinks);
          await api.deleteBannersLinks();
          console.log('existed100');
        }
        const postedBanners = await api.postPhotoBanner(formData);

        const bannerLinks = postedBanners.map((moto: any) => moto.path);
        console.log(bannerLinks);
        const postedBannerLinks = await api.postBannerLinks(bannerLinks);
        console.log(postedBannerLinks);

        setInfo([`Информация о баннере загружена на\u00a0сервер`, 'afferm']);
        openPopup();
      } catch (err) {
        console.error(err);
        setInfo(['Что-то пошло не так2', 'reject']);
        openPopup();
      }
    } else {
      setInfo(['Что-то пошло не так1', 'reject']);
      openPopup();
    }
  };

  //удаление баннера
  const handleDeleteBanner = async () => {
    setInfo([`Удаление баннера с сервера`, 'loading']);
    setPopupState(true);
    try {
      const existedBannersLinks = await api.getBanners();
      if (existedBannersLinks && existedBannersLinks.length > 0) {
        await api.deleteBannersPhotos(existedBannersLinks);
        await api.deleteBannersLinks();
        console.log('existed100');
      }
      setInfo([`Информация о баннере удалена с\u00a0сервера`, 'afferm']);
      openPopup();
    } catch (err) {
      console.error(err);
      setInfo(['Что-то пошло не так2', 'reject']);
      openPopup();
    }
  };

  //  добавлениe мотоцикла
  const [files, setFiles] = useState([]);

  const handleFileLoad = (e: any) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles as any);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setInfo([`Загрузка информации на сервер`, 'loading']);
    setPopupState(true);
    const {
      compressionRation,
      gazValue,
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

    if (files.length > 0) {
      const formData = new FormData();
      files.forEach((file, index) => {
        formData.append(`images`, file);
      });
      api
        .postMotoPhotos(formData, motoName)
        .then((res) => {
          const motoLinks = res.map((moto: any) => moto.path);
          api
            .postMotorcycles(
              motoName,
              motoPrice,
              description,
              motoPerformance,
              motoLinks,
            )
            .then(() => {
              setInfo([
                `Информация о мотоцикле загружена на\u00a0сервер`,
                'afferm',
              ]);
              openPopup();
            })
            .catch((err) => {
              console.log(err);
              setInfo(['Что-то пошло не так', 'regect']);
              openPopup();
            });
        })
        .catch((err) => {
          console.log(err);
          setInfo(['Не установлена связь с сервером', 'regect']);
          openPopup();
        });
    } else {
      setInfo(['Не выбраны фотографии', 'regect']);
      openPopup();
    }
  };

  // сабмит формы изменения
  const [changedFiles, setChangedFiles] = useState([]);

  const handleChangedFileLoad = (e: any) => {
    const selectedFiles = Array.from(e.target.files);
    setChangedFiles(selectedFiles as any);
  };

  const handleSubmitChanged = (e: any) => {
    e.preventDefault();
    setInfo([`Загрузка информации на сервер`, 'loading']);
    setPopupState(true);
    const {
      paragraphChanged1,
      paragraphChanged2,
      paragraphChanged3,
      paragraphChanged4,
      paragraphChanged5,
      paragraphChanged6,
      paragraphChanged7,
      paragraphChanged8,
      paragraphChanged9,
      paragraphChanged10,
      motoNameChanged,
      motoPriceChanged,
    } = values;

    const description = [
      paragraphChanged1,
      paragraphChanged2,
      paragraphChanged3,
      paragraphChanged4,
      paragraphChanged5,
      paragraphChanged6,
      paragraphChanged7,
      paragraphChanged8,
      paragraphChanged9,
      paragraphChanged10,
    ].filter(
      (pharagraph) => typeof pharagraph === 'string' && pharagraph !== '',
    );

    const formData = new FormData();
    changedFiles.forEach((file, index) => {
      formData.append(`images`, file);
    });

    console.log('1', formData);

    if (changedFiles.length > 0) {
      api
        .getMotorcycles()
        .then((motorcycles) => {
          const foundMoto = motorcycles.find((moto: any) => {
            return moto.motoName === motoNameChanged;
          });
          api
            .deleteMotoPhotos(foundMoto.motoLinks)
            .then(() => {
              api
                .postMotoPhotos(formData, motoNameChanged)
                .then((res) => {
                  const motoLinks = res.map((moto: any) => moto.path);
                  api
                    .changeMotoInfo(
                      motoNameChanged,
                      motoPriceChanged,
                      description,
                      motoLinks,
                    )
                    .then(() => {
                      setInfo([`Информация о мотоцикле изменена`, 'afferm']);
                      openPopup();
                    })
                    .catch((err: any) => {
                      console.log(err);
                      setInfo(['Что-то пошло не так', 'regect']);
                      openPopup();
                    });
                })
                .catch((err) => {
                  console.log(err);
                  setInfo(['Что-то пошло не так', 'regect']);
                  openPopup();
                });
            })
            .catch((err) => {
              console.log(err);
              setInfo(['Что-то пошло не так2', 'regect']);
              openPopup();
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .changeMotoInfo(motoNameChanged, motoPriceChanged, description)
        .then(() => {
          setInfo([`Информация о мотоцикле изменена`, 'afferm']);
          openPopup();
        })
        .catch((err: any) => {
          console.log(err);
          if (err.message) {
            setInfo([`${err.message}`, 'regect']);
          } else {
            setInfo(['Что-то пошло не так', 'regect']);
          }
          openPopup();
        });
    }
  };
  return (
    <>
      <section className='addMoto'>
        <div className='addMoto__container'>
          <form onSubmit={handleSubmit} className='addMoto__form'>
            <h3 className='addMoto__title'>Добавление мотоцикла</h3>
            <label className='addMoto__label'>
              Название мотоцикла (английский язык)
            </label>
            <input
              onChange={handleChange}
              className='addMoto__input'
              name='motoName'
              type='text'
              required
            ></input>
            <label className='addMoto__label'>Цена мотоцикла</label>
            <input
              onChange={handleChange}
              className='addMoto__input'
              name='motoPrice'
              type='text'
              required
            ></input>
            <label className='addMoto__label'>
              Характеристики мотоцикла (число без наименования)
            </label>
            <ul className='addMoto__sublabelContainer'>
              {PERFORMANCE.map((name, i) => {
                return (
                  <li key={i}>
                    <input
                      onChange={handleChange}
                      name={name}
                      placeholder={PERFORMANCE_NAME[i]}
                      type='text'
                      className='addMoto__sublabel'
                      required
                    />
                  </li>
                );
              })}
            </ul>
            <label className='addMoto__label'>
              Описание (втавлять по абзацу в каждую форму)
            </label>
            <ul className='addMoto__sublabelContainer'>
              {PARAGRAPHS.map((paragraph, i) => {
                return (
                  <li key={i}>
                    <input
                      onChange={handleChange}
                      name={paragraph}
                      placeholder={PARAGRAPHS_NAME[i]}
                      type='text'
                      className='addMoto__sublabel'
                    />
                  </li>
                );
              })}
            </ul>
            <input
              type='file'
              accept='image/*'
              onChange={(e) => handleFileLoad(e)}
              name='image'
              multiple
            />
            <button type='submit' className='addMoto__button'>
              Отправить форму
            </button>
          </form>
          {/* Изменение мотоцикла */}
          <div className='addMoto__form-conainer'>
            <form className='addMoto__form' onSubmit={handleSubmitChanged}>
              <h3 className='addMoto__title'>Изменение мотоцикла</h3>
              <label className='addMoto__label'>
                Название мотоцикла (английский язык)
              </label>
              <input
                onChange={handleChange}
                className='addMoto__input'
                name='motoNameChanged'
                type='text'
                required
              ></input>
              <label className='addMoto__label'>Цена мотоцикла</label>
              <input
                onChange={handleChange}
                className='addMoto__input'
                name='motoPriceChanged'
                type='text'
              ></input>
              <label className='addMoto__label'>
                Описание (втавлять по абзацу в каждую форму)
              </label>
              <ul className='addMoto__sublabelContainer'>
                {PARAGRAPHS_CHANGED.map((paragraph, i) => {
                  return (
                    <li key={i}>
                      <input
                        onChange={handleChange}
                        name={paragraph}
                        placeholder={PARAGRAPHS_NAME[i]}
                        type='text'
                        className='addMoto__sublabel'
                      />
                    </li>
                  );
                })}
              </ul>
              <input
                type='file'
                accept='image/*'
                onChange={(e) => handleChangedFileLoad(e)}
                name='image'
                multiple
              />
              <button type='submit' className='addMoto__button'>
                Отправить форму
              </button>
              {/* Форма с акцией */}
            </form>
            <form className='addMoto__form' onSubmit={handleBannerSubmit}>
              <h3 className='addMoto__title'>Добавление/Удаление банера акции</h3>
              <label className='addMoto__label'>Банер для десктоп версии</label>
              <input
                type='file'
                accept='image/*'
                onChange={(e) => handleBannerLoad(e)}
                name='image'
              />
              <label className='addMoto__label'>
                Банер для мобильной версии
              </label>
              <input
                type='file'
                accept='image/*'
                onChange={(e) => handleBannerLoadMobile(e)}
                name='image'
              />
              <button type='submit' className='addMoto__button'>
                Отправить форму
              </button>
            </form>
            <button
              type='button'
              onClick={handleDeleteBanner}
              className='addMoto__button'
            >
              Удалить форму
            </button>
          </div>
        </div>
      </section>
      {popupState && <FormSubPopup info={info[0]} popupType={info[1]} />}
    </>
  );
};

export default AddMoto;
