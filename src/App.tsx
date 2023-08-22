import styled from "styled-components";

import Dday from "./pages/Dday";
import NotDday from "./pages/NotDday";

import DdayContext from "./contexts/DdayContext";

import { 오늘은광복절입니까 } from "./services/main";

const PageWrapper = styled.div`
  display: flex;
  padding: 32px 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const currentDatetime = new Date();
  const isDday = 오늘은광복절입니까(currentDatetime);

  return (
    <div className="App">
      <DdayContext.Provider value={isDday}>
        <PageWrapper>{isDday ? <Dday /> : <NotDday />}</PageWrapper>
      </DdayContext.Provider>
    </div>
  );
};

export default App;
