import { useEffect } from 'react';

import { useRouter } from 'next/router';
import { getPostOAuthLoginRedirect } from '@lib/utils';
import { getOauthtokenApi } from '@lib/api/authApi';
import { useAuthCtx } from '@compo/Context';

const RedirectFromOauth = () => {
  const router = useRouter();
  const { setAuth } = useAuthCtx();
  useEffect(() => {
    (async () => {
      const { value: redirectTo, remove } = getPostOAuthLoginRedirect();

      if (!router || !router.asPath.includes('?token=') || !redirectTo) return;

      let token: any = router.asPath.split(/\?/)[1];
      if (!token) return;

      token = token.split('=')[1];

      let catchBlockExecuted = false;

      try {
        token = await getOauthtokenApi(token);

        setAuth(token, redirectTo);
      } catch (err) {
        // catchBlockExecuted = true;
        router.replace('/');
      } finally {
        if (catchBlockExecuted) return;
        remove();
      }
    })();
  }, [router]);
  return <>{null}</>;
};

export default RedirectFromOauth;
