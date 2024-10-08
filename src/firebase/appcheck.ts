import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

import { app } from "./app";

export const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LdFT1oqAAAAAKJ8GTXfeSqjYA5zhtC4FPG4BVxs"),
  isTokenAutoRefreshEnabled: true,
});
