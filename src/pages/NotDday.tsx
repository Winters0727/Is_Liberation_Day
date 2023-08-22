import { lazy, Suspense } from "react";

import Header from "../components/Header";

const Biography = lazy(() => import("../components/Biography"));

const NotDday = () => {
  return (
    <>
      <Header>오늘은 광복절이 아닙니다.</Header>
      <Suspense fallback={<div>로딩중...</div>}>
        <Biography />
      </Suspense>
    </>
  );
};

export default NotDday;
