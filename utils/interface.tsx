import { StaticImageData } from "next/image";

export interface MotoProps {
  name: string;
  price?: string;
  image?: StaticImageData;
  catalog?: Array<any>;
  description?: any;
  performance?: any;
}

export interface orderProps{
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