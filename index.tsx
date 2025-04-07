import React, { useEffect, useState } from "react";
import { CountryType, PropsType } from "./types";
import { phoneCodes } from "./data";

const initial = {
  name: "",
  nameAr: "",
  timezone: "",
  flagCode: "",
  prefix: "",
  callCode: "",
  phoneMax: 10,
  phoneMin: 9,
};

export const useCountry = (props?: PropsType) => {
  const [data, setData] = useState<CountryType>(initial);

  useEffect(() => {
    const item = find(props || undefined);
    setData(item || initial);
  }, [props]);

  return data;
};

const find = (data?: PropsType): CountryType | null => {
  let item = null;
  if (!data || data?.default) {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    item =
      phoneCodes.find((item: CountryType) => item.timezone === timeZone) ||
      handleDefault(data?.default || "");
  } else {
    const key = Object.keys(data)[0];
    // Type assertion to ensure key is a valid property
    item = phoneCodes.find(
      (item: CountryType) =>
        item[key as keyof typeof item] === data[key as keyof typeof data]
    );
  }

  if (!item && !data?.default) {
    console.warn("Country not found at useCountry");
    return null;
  }

  if (!item && data?.default) {
    item = handleDefault(data.default);
  }

  return { ...item } as CountryType;
};

const handleDefault = (value: string) => {
  if (!value) return null;
  return phoneCodes.find(
    (item: CountryType) =>
      item?.name === value ||
      item?.nameAr === value ||
      item?.callCode === value ||
      item?.timezone === value ||
      item?.flagCode === value
  );
};
