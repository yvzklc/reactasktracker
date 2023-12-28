import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";

import * as S from "./styles";

function Main() {
  const navigation = useNavigation();

  return (
    <S.Main element="main" >
      <Outlet />
    </S.Main>
  );
}

export { Main };
