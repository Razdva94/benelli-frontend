import './globals.scss';
import VideoComponent from '@/components/VideoComponent/VideoComponent';
import MotoList from '@/components/MotoList/MotoList';
import Contacts from '@/components/Contacts/Contacts';

export default function Home() {
  return (
    <>
      <VideoComponent />
      <MotoList />
      <Contacts />
    </>
  );
}


