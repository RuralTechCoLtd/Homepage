import React, { useEffect } from "react";

import { useLocation, withRouter } from "react-router-dom";

// import { useEffect } from "react";

const ScrollToTop: React.FC = (props: any) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return props.children;
};

export default withRouter(ScrollToTop);
