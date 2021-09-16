// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDcSiZxpIoTua24ict14_6d2b5jtrsRUfY',
    authDomain: 'everis-id.firebaseapp.com',
    databaseURL: 'https://everis-id.firebaseio.com',
    projectId: 'everis-id',
    storageBucket: 'everis-id.appspot.com',
    messagingSenderId: '653212984890',
    appId: '1:653212984890:web:4f24105855e98b522c3703',
  },
  apiUrl: 'http://localhost:8080',
  documentRules: {
    allowedExtensions: ['json', 'vp'],
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
