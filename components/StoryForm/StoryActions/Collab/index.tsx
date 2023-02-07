import { Button, useDisclosure } from '@chakra-ui/react';
import UsersListModal from '@compo/UsersListModal';
import { collabWithApi } from '@lib/api/storyApi';
import { useField } from 'formik';
import { FcCollaboration } from 'react-icons/fc';

const Index = () => {
  const [{ value: storyId }] = useField('_id');

  const [{ value: alreadyCollabWith }, {}, { setValue: setCollab }] =
    useField<string[]>('collabWith');

  const modal = useDisclosure();
  const onClickCB = async (userId: string, isChecked: boolean) => {
    const body: { addAuthors?: string[]; removeAuthors?: string[] } = {};
    if (isChecked) body.addAuthors = [userId];
    else body.removeAuthors = [userId];
    try {
      const data = await collabWithApi(storyId, body);
      data?.story.collabWith && setCollab(data?.story.collabWith, false);
      return data?.story.collabWith.includes(userId) ? true : false;
    } catch (err) {
      return false;
    }
  };
  return (
    <>
      <Button
        mr="8px"
        _focus={{
          outline: 'none',
        }}
        colorScheme="green"
        variant="outline"
        leftIcon={<FcCollaboration />}
        onClick={modal.onOpen}
        rightIcon={<>{alreadyCollabWith.length}</>}
      >
        Collab
      </Button>
      <UsersListModal
        isOpen={modal.isOpen}
        onClose={modal.onClose}
        checkedUsers={alreadyCollabWith}
        onClickCB={onClickCB}
      />
    </>
  );
};

export default Index;
