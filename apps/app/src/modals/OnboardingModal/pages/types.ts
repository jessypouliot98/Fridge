import React from "react";

export type OnboardingPageProps = {
  handleClose: () => void,
  pageIndex: number,
  pageCount: number,
};

export type OnboardingPageFC = React.FC<OnboardingPageProps>;
