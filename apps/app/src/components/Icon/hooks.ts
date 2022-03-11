import {useContext, useEffect} from "react";
import {IconContext} from "./IconContext";

export const useIconContext = () => {
  return useContext(IconContext);
}

export const useIcon = (name: string): JSX.Element | null => {
  const icons = useIconContext();

  const selectedIcon = icons[name]?.svg || null;

  useEffect(() => {
    if (!selectedIcon) {
      console.warn(`[IconContext] No icons exists for name: "${name}"`);
    }
  }, [selectedIcon]);

  return selectedIcon;
}
