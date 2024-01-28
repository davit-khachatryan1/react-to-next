import FuseLayout from "@/@fuse/core/FuseLayout";
import MockAdapterProvider from "@/@mock-api/MockAdapterProvider";
import { SnackbarProvider } from "notistack";
import FuseTheme from "@/@fuse/core/FuseTheme";
import themeLayouts from "@/theme-layouts/themeLayouts";
import { useSelector } from "react-redux";
import { selectMainTheme } from "@/@fuse/core/FuseSettings/store/fuseSettingsSlice";

/**
 * The main App component.
 */
function App() {
  /**
	 * The language direction from the Redux store.
  */

	/**
	 * The main theme from the Redux store.
	 */
  const mainTheme = useSelector(selectMainTheme);

  return (
    <MockAdapterProvider>
      
        <FuseTheme theme={mainTheme} direction={""}>
          <SnackbarProvider
            maxSnack={5}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            classes={{
              containerRoot:
                "bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99",
            }}
          >
            <FuseLayout layouts={themeLayouts} />
          </SnackbarProvider>
        </FuseTheme>
    </MockAdapterProvider>
  );
}
