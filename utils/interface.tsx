import { StaticImageData } from 'next/image';


export interface orderProps {
  image: any;
  name: any;
  onClose?: any;
  open?: any;
}

export interface FormValues {
  name: string;
  number: string;
  message: string;
}
