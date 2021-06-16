
declare module 'egg' {
  interface Application {
    __set(locale: string, values: any): void;
  }
  interface EggAppConfig {
    cuteI18n: {
      defaultLocale: string;
      dir: string;
      queryField: string;
      cookieField: string;
      cookieMaxAge: string | number;
    };
  }
}
