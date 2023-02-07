import React from 'react';
import { Button, Divider, HStack, Text, VStack } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/router';
import { savePostOAuthLoginRedirect } from '@lib/utils';

const OAuthStrategies = () => {
  const router = useRouter();
  const redirectToGoogle = () => {
    const postLoginRedirect = router.asPath.startsWith('/auth')
      ? '/me'
      : router.asPath;
    if (!router.asPath.startsWith('/auth'))
      savePostOAuthLoginRedirect(router.asPath);

    window.open(`${process.env.NEXT_PUBLIC_API_URL}/auth/google_cb`, '_self');
  };
  return (
    <VStack>
      <HStack alignSelf="stretch" padding="0 20px">
        <Divider flex={1} color="black" orientation="horizontal" />
        <Text>OR</Text>
        <Divider flex="1" orientation="horizontal" color="black" />
      </HStack>
      <HStack>
        <Button
          mx={[1, 4]}
          onClick={redirectToGoogle}
          size="sm"
          leftIcon={<FcGoogle />}
          colorScheme="google"
          variant="outline"
        >
          Google
        </Button>
        {/* <Button
          mx={[1, 4]}
          onClick={redirectToGoogle}
          size="sm"
          leftIcon={<FcGoogle />}
          colorScheme="google"
          variant="outline"
        >
          Google
        </Button> */}
      </HStack>
    </VStack>
  );
};

export default OAuthStrategies;
