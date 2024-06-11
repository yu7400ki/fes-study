import asyncCx from "@/utils/async-cx";
import { button } from "styled-system/recipes";

type Props = JSX.IntrinsicElements["button"];

export default function Button(props: Props) {
  return <button {...props} class={asyncCx(button(), props.class)} />;
}
