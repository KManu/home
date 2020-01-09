import { Action } from '@ngrx/store';

export const DARK_MODE_ENABLED = '[Theme] Enabled Dark Mode';

export class DarkEnabled implements Action {
  readonly type = DARK_MODE_ENABLED;
  constructor(private payload: any) { }
}

export type ThemeActions = DarkEnabled;
