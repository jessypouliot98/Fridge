import { localeType } from './../utils/constants';

import en from './en';

const resources: { [key in localeType]: typeof en } = {
  en,
};

export default resources;
