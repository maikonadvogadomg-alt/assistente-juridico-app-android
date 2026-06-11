import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.meuapp.assistentejuridicoapp',
  appName: 'assistente-juridico-app',
  webDir: 'dist',
  server: { androidScheme: 'https' },
  plugins: {
    SQLiteConnection: {
      iosDatabaseLocation: 'Library/CapacitorDatabase',
    },
    Preferences: {
      group: 'NativeStorage',
    },
  },
};
export default config;
