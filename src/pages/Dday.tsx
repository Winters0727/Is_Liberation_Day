import { useState, useEffect } from "react";

import { requestActivist } from "../services/api";
import type { Activist } from "../types/api.type";

const Dday = () => {
  const [data, setData] = useState<Activist[]>([]);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      const data = await requestActivist({ nPageIndex: 463 });
      if (!ignore) setData(data);
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

export default Dday;
