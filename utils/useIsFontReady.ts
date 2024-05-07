import React from "react";

// a custom hook to detect when custom fonts have finished loading
export function useIsFontReady() {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    document.fonts.ready.then(() => {
      setIsReady(true);
    });
  }, []);

  return isReady;
}
