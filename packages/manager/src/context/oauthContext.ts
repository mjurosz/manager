import * as React from 'react';

import { defaultContext } from './useDialogContext';

import type { DialogContextProps } from './useDialogContext';

export const oauthContext = React.createContext<DialogContextProps>(defaultContext);
