import { useCallback } from "react";
import { useMobileView } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { modeActions, modeSelector } from "../../reducers/modeSlice";
import { Mode } from "../../types";

export const useHeader = () => {
  const dispatch = useDispatch();

  const showSelect = true;

  const isMobileView = useMobileView();

  const { mode } = useSelector(modeSelector);

  const handleChangeMode = useCallback(
    (value: unknown) => dispatch(modeActions.changeMode(value as Mode)),
    [dispatch]
  );

  return {
    handleChangeMode,
    isMobileView,
    mode,
    showSelect,
  };
};
