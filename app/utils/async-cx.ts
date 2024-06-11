import { cx } from "styled-system/css";

type CxArg = string | boolean | null | undefined;
export default async function asyncCx(...args: (CxArg | Promise<CxArg>)[]): Promise<string> {
  const resolved = await Promise.all(args);
  return cx(...resolved);
}
