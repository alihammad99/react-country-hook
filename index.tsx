import React, { useEffect, useState } from "react";
import { DataType, FindProps } from "./types";
import { phoneCodes } from "./data";

export const useCountry = (props?: FindProps) => {
  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    const item = find(props || undefined);
    setData(item);
  }, [props]);

  return data;
};

const find = (data?: FindProps): DataType | null => {
  let item = null;
  if (!data) {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    item = phoneCodes.find((item: DataType) => item.timezone === timeZone);
  } else {
    const key = Object.keys(data)[0];
    // Type assertion to ensure key is a valid property
    item = phoneCodes.find(
      (item: DataType) =>
        item[key as keyof typeof item] === data[key as keyof typeof data]
    );
  }

  if (!item) {
    console.warn("Country not found at useCountry");
    return null;
  }

  return { ...item } as DataType;
};
