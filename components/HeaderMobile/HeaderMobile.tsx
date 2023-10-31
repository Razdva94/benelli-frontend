import headerStyles from './header.module.scss';
import Image from 'next/image';
import logo from '@/public/images/benelli_icon.png';
import BenelliMobile from '@/public/images/benelli__mobile.jpg';

const HeaderMobile = () => {
  return (
    <div className={headerStyles.header__mobile}>
      <Image
        src={logo}
        alt='лого'
        className={headerStyles.header__mobileLogo}
      />
      <Image
        className={headerStyles.header__mobileImage}
        src={BenelliMobile}
        alt='обложка для мобильника'
      />
      <div className={headerStyles.header__flag}>
        <div
          style={{ backgroundColor: 'green' }}
          className={headerStyles.header__flagSector}
        />
        <div
          className={headerStyles.header__flagSector}
          style={{ backgroundColor: 'white' }}
        />
        <div
          className={headerStyles.header__flagSector}
          style={{ backgroundColor: 'rgb(198, 29, 29)' }}
        />
      </div>
    </div>
  );
};

export default HeaderMobile;
