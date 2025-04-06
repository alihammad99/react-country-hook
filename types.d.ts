export type FindProps = {
  name?: string;
  nameAr?: string;
  code?: string;
  timezone?: string;
  flagCode?: string;
};

export type DataType = {
  name: string;
  nameAr: string;
  timezone: string;
  flagCode: string;
  phoneMax: number;
  phoneMin: number;
  prefix: number;
  callCode: number;
};
