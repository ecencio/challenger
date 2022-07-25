import 'zone.js/plugins/zone-error';
import { IEnvironment } from '@environments/environment.model';

export const environment: IEnvironment = {
  production: false,
  unsplash: {
    // provide add your access key here
    accessKey: 'IB64RUphpKg5-fMIoRGaQeaZns549D4nzW-XyVxywYQ',
    url: 'https://api.unsplash.com'
  }
};
