export type PropsType = {
  name?: string;
  nameAr?: string;
  timezone?: string;
  flagCode?: string;
  callCode?: string;
  default?: string;
};

export type CountryType = {
  name: string;
  nameAr: string;
  timezone: string;
  flagCode: string;
  prefix: string;
  callCode: string;
  phoneMax: number;
  phoneMin: number;
};
