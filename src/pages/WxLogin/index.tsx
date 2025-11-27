import { memo, useEffect } from 'react';

// Declare global WxLogin type from WeChat SDK
declare global {
  interface WxLoginConfig {
    id: string;
    appid: string;
    scope: string;
    redirect_uri: string;
    stylelite?: number;
    state?: string;
    style?: string;
    color_scheme?: string;
    onSuccess?: (res: unknown) => void;
    onFail?: (res: unknown) => void;
    onComplete?: (res: unknown) => void;
  }

  // eslint-disable-next-line @typescript-eslint/no-extraneous-class
  class WxLogin {
    constructor(config: WxLoginConfig);
  }
}

const WxLoginPage = memo(() => {
  useEffect(() => {
    const style = '';
    const colorScheme = 'light';
    const getState = () => Math.random().toString(36).substring(2);

    setTimeout(() => {
      const wxLoginInstance = new WxLogin({
        id: 'wxLogin',
        appid: 'wx62d1f2db7aac4973',
        scope: 'snsapi_login',
        redirect_uri: encodeURIComponent(
          // BrowserManager.getURLRuntime('/src/sidepanel/index.html')
          'https://www.xshuliner.online/',
        ),
        // 'chrome-extension://geflafkailomakbkahpipdjbkhhpcedd'
        stylelite: 1,
        state: getState(),
        style,
        color_scheme: colorScheme,
        onSuccess: (res: unknown) => {
          console.log('XLogin onSuccess', res);
        },
        onFail: (res: unknown) => {
          console.log('XLogin onFail', res);
        },
        onComplete: (res: unknown) => {
          console.log('XLogin onComplete', res);
        },
      });

      console.log('XLogin res', wxLoginInstance);
    }, 1000);
  }, []);
  return (
    <div className="p-cosx-lg space-y-cosx-lg bg-cosx-light min-h-screen">
      <div id="wxLogin"></div>
    </div>
  );
});

export default WxLoginPage;
