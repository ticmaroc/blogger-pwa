import type { Config } from './types';

export default {
  id: '/',
  name: 'Tic Maroc',
  shortName: 'Tic Maroc',
  description: 'Actualité des Tic au Maroc et ailleurs',
  direction: 'auto',
  language: 'fr-FR',
  backgroundColor: '#209CEE',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Actualité',
      shortName: 'Actualité',
      description: 'Les articles du site',
      url: '/search/label/Actualité?max-results=6&utm_source=homescreen',
    },
    {
      name: 'Test de débit',
      shortName: 'Test de débit',
      description: 'Test de débit internet',
      url: '/p/test-debit.html?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is only available if you are using cloudflare workers
    oneSignalEnabled: true, // To enable OneSignal, set this to true
    oneSignalConfig: {
      appId: '7518ec8b-a0de-4af4-8691-7cc06260096f', // Replace with your OneSignal App Id
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://hello-example.blogspot.com',
} satisfies Config;
