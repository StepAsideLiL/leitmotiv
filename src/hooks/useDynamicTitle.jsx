import { useEffect } from "react";

const useDynamicTitle = (customTitle = "Welcome") => {
  useEffect(() => {
    document.title = `${customTitle} - Leitmotiv Academy`;
  }, [customTitle]);
};

export default useDynamicTitle;
