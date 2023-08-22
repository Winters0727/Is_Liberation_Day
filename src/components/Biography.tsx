import { useState, useEffect } from "react";

import { createRandomRangedNumber } from "../services/main";
import { requestActivist } from "../services/api";

import type { Activist } from "../types/api.type";

const Biography = () => {
  const [activist, setActivist] = useState<Activist | null>(null);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      const data = await requestActivist({
        nPageIndex: createRandomRangedNumber(1, 463),
      });
      if (!ignore) setActivist(data[0]);
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  return <div>{activist && JSON.stringify(activist)}</div>;
};

export default Biography;
