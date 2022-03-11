import React from "react";

export type IconType = {
  title?: string,
  svg: JSX.Element,
}

export type IconDict<N extends string = string> = Record<N, IconType>;

export const IconContext = React.createContext<IconDict>({});

export type IconProviderProps = {
  icons: IconDict,
}

export const IconProvider: React.FC<IconProviderProps> = (props) => {
  const { children, icons } = props;

  return (
    <IconContext.Provider value={icons}>
      {children}
    </IconContext.Provider>
  )
}
