import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Flex,
  Heading,
  Button,
  Avatar,
  Icon,
  useColorMode,
  Box,
} from '@chakra-ui/react';
import DashboardSongControls from '../Room/DashboardSongControls';
import VolumeAndDeviceControl from '../Room/VolumeAndDeviceControl';
import { useAtom } from 'jotai';
import { Modal, modalAtom } from '../../state/modalAtom';
import { userAtom } from '../../state/userAtom';
import { FaChevronDown } from 'react-icons/fa';
import ColorModeButton from '../ColorModeButton';

interface Props {}

const PlaybackControlDrawer = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [user] = useAtom(userAtom);
  const [modal, setModal] = useAtom(modalAtom);

  const onClose = () => setModal(Modal.None);
  const onSpeakerClick = () => setModal(Modal.PlaybackControl);
  const isOpen = modal === Modal.PlaybackControl;

  return (
    <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent p={[2, 4, 8, 8]}>
        <DrawerBody>
          <Flex
            direction='column'
            align='center'
            justify='center'
            maxW={600}
            margin='0 auto'
          >
            <Heading flex={1} size='md' mb={2}>
              User + Appearance
            </Heading>
            <Flex>
              <Button variant='ghost' rightIcon={<FaChevronDown />}>
                <Avatar
                  size='sm'
                  name={user.name || 'Guest User'}
                  src={user ? user.imageSrc || undefined : undefined}
                />
              </Button>
              <ColorModeButton />
            </Flex>
            <Heading flex={1} size='md' mt={8} mb={2}>
              Song Playback
            </Heading>
            <DashboardSongControls />
            <Box width={8} />
            <Heading flex={1} size='md' mt={8} mb={2}>
              Volume + Device
            </Heading>
            <VolumeAndDeviceControl onSpeakerClick={onSpeakerClick} />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default PlaybackControlDrawer;
