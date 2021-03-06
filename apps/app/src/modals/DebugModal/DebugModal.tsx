import React, {useEffect, useState} from 'react';
import { ModalFC, withModal } from "../utils";
import { useTailwind } from "tailwind-rn/dist";
import { Text, View } from "react-native";
import { Permissions } from "../../utils/permissions";
import Button from "../../components/Button/Button";
import {
  getFromStorage,
  removeFromStorage,
  removeMultipleFromStorage, saveToStorage,
  StorageKeys
} from "../../utils/storage";
import { OnboardingModal } from "../index";
import {useRootDispatch, useRootSelector} from "../../hooks";
import {selectRecipeLoading} from "../../store/recipe/selectors";
import {setRecipeLoading} from "../../store/recipe/actions";

const DebugModal: ModalFC = () => {
  const tailwind = useTailwind();

  const dispatch = useRootDispatch();
  const [isWaitingForReset, setIsWaitingForReset] = useState(true);
  const [hasBeenOnboarded, setHasBeenOnboarded] = useState<boolean | null>(null);
  const isRecipeLoading = useRootSelector(selectRecipeLoading());

  useEffect(() => {
    if (isWaitingForReset) {
      getFromStorage(StorageKeys.hasBeenOnboarded, false).then(setHasBeenOnboarded);
      setIsWaitingForReset(false);
    }
  }, [isWaitingForReset]);

  const handleResetStorage = async () => {
    await removeMultipleFromStorage([StorageKeys.hasBeenOnboarded]);
    setIsWaitingForReset(true);
  }

  const toggleOnboarding = async () => {
    if (hasBeenOnboarded) {
      await removeFromStorage(StorageKeys.hasBeenOnboarded);
    } else {
      await saveToStorage(StorageKeys.hasBeenOnboarded, true);
    }

    setHasBeenOnboarded(!hasBeenOnboarded)
  }

  const openOnboardingModal = () => {
    OnboardingModal.open();
  }

  const toggleRecipeLoading = () => {
    dispatch(setRecipeLoading(!isRecipeLoading));
  }

  return (
    <View style={tailwind('w-full h-full bg-white p-4')}>
      <View style={tailwind('mb-4')}>
        <Text style={tailwind('text-center font-bold text-lg')}>Debug Menu</Text>
      </View>

      <Button style={tailwind('mb-2')} onPress={handleResetStorage}>
        Reset Storage
      </Button>

      <Button style={tailwind('mb-2')} onPress={toggleOnboarding}>
        {`${hasBeenOnboarded ? 'Disable' : 'Enable'} "${StorageKeys.hasBeenOnboarded}"`}
      </Button>

      <Button style={tailwind('mb-2')} onPress={openOnboardingModal}>
        Open onboarding modal
      </Button>

      <Button style={tailwind('mb-2')} onPress={toggleRecipeLoading}>
        {`Toggle recipe loading to "${isRecipeLoading ? 'OFF' : 'ON'}"`}
      </Button>
    </View>
  )
}

export default withModal(DebugModal, {
  route: 'DebugModal',
  permissions: [Permissions.DEBUG],
  options: {
    presentation: 'fullScreenModal',
  }
});
