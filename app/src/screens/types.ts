import React from 'react';

export type ScreenFC<T = never> = React.FC<T> & { id: string };
