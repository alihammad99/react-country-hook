import { useEffect, useState } from "react";
import { CountryType, PropsType } from "./types";
import { phoneCodes } from "./data";

const DEFAULT_COUNTRY: CountryType = {
  name: "",
  nameAr: "",
  timezone: "",
  flagCode: "",
  prefix: "",
  callCode: "",
  phoneMax: 10,
  phoneMin: 9,
};

export const useCountry = (props?: PropsType): CountryType => {
  const [data, setData] = useState<CountryType>(DEFAULT_COUNTRY);

  useEffect(() => {
    try {
      const item = find(props);
      setData(item || DEFAULT_COUNTRY);
    } catch (error) {
      console.error("useCountry: Error in finding country,", error);
      setData(DEFAULT_COUNTRY);
    }
  }, [props]);

  return data;
};

const find = (data?: PropsType): CountryType | null => {
  try {
    if (!data || data?.default) {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return (
        phoneCodes.find((item) => item.timezone === timeZone) ||
        handleDefault(data?.default || "") ||
        null
      );
    }

    const key = Object.keys(data)[0];
    if (!key) return null;

    const item = phoneCodes.find(
      (item) => item[key as keyof CountryType] === data[key as keyof PropsType]
    );

    if (!item && !data?.default) {
      console.warn("useCountry: Country not found");
      return null;
    }

    return item || (data.default ? handleDefault(data.default) : null) || null;
  } catch (error) {
    console.error("useCountry: Error in finding country:", error);
    return null;
  }
};

const handleDefault = (value: string): CountryType | null => {
  if (!value) return null;

  const searchFields: (keyof CountryType)[] = [
    "name",
    "nameAr",
    "callCode",
    "timezone",
    "flagCode",
  ];

  return (
    phoneCodes.find((item) =>
      searchFields.some((field) => item[field] === value)
    ) || null
  );
};
