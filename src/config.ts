const envVariables = [
  "REACT_APP_RECAPTCHA_SITE_KEY",
  "REACT_APP_FIREBASE_API_KEY",
];

for (const envVariable of envVariables) {
  if (!process.env[envVariable])
    throw new Error(`Environment variable ${envVariable} is missing`);
}

const config = {
  firebase: {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY!,
  },
  recaptchaSiteKey: process.env.REACT_APP_RECAPTCHA_SITE_KEY!,
};

export default config;
