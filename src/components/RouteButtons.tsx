import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const RouteButtons = ({ children }: Props) => {
  return (
    <button type="button" className="btn btn-dark">
      {children}
    </button>
  );
};

export default RouteButtons;
