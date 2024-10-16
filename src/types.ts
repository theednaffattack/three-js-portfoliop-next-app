import {
  PropsWithChildren,
  ReactElement,
  WeakValidationMap,
  ValidationMap,
} from "react";

export type ReactChildren = Readonly<{
  children: React.ReactNode;
}>;

export interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}
