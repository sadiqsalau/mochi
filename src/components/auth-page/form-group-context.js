import { createContext } from "react";
import { createProvider } from "@/utils/create-provider";

export const { hook: useFormGroup, provider: FormGroupProvider } =
  createProvider(
    createContext({
      id: "",
    })
  );
