import React, { useCallback } from "react";
import { Viewer, KmlDataSource, useCesium, Camera } from "resium";

const App = () => {
  return (
    <Viewer full>
        <KmlDataSource
          data={"./toa A1.kmz"}
          // data={"./ducthang_v1_08042021.kmz"}

          show={true}
        />
    </Viewer>
  );
};

export default App;
