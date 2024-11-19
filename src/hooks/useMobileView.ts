import { Grid } from "antd";
import { useMemo } from "react";

const { useBreakpoint } = Grid;

export const useMobileView = () => {
  const breakpoints = useBreakpoint();

  const isMobileView = useMemo(() => breakpoints.xs, [breakpoints]);

  return isMobileView;
};
