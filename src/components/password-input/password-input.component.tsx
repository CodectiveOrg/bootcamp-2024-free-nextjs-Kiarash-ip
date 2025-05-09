"use client";

import {
  ComponentProps,
  ForwardedRef,
  forwardRef,
  ReactElement,
  useState,
} from "react";

import NormalInputComponent from "@/components/normal-input/normal-input.component";

import Key2Line from "@/icons/Key2Line";
import Eye2Line from "@/icons/Eye2Line";
import EyeCloseLine from "@/icons/EyeCloseLine";

type Props = ComponentProps<typeof NormalInputComponent>;

function PasswordInputComponent(
  { ...otherProps }: Props,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <NormalInputComponent
      ref={ref}
      type={isVisible ? "text" : "password"}
      prefixIcon={<Key2Line />}
      suffixIcon={isVisible ? <EyeCloseLine /> : <Eye2Line />}
      onSuffixClick={() => setIsVisible((old) => !old)}
      {...otherProps}
    />
  );
}

export default forwardRef(PasswordInputComponent);
