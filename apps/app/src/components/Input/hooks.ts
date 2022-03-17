import {useTailwind} from "tailwind-rn/dist";

export const useInputStyle = () => {
  const tailwind = useTailwind();

  return {
    containerStyle: tailwind(''),
    inputStyle: tailwind('h-12 px-2'),
  };
}
