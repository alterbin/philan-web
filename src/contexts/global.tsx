"use client";
import React, {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
  useEffect,
  useState,
} from "react";
import { useHash } from "../hooks";

const initialState = {
  showMobileMenu: false,
};

type State = typeof initialState;

interface DefaultValues {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}

const Context = createContext<DefaultValues>({
  state: initialState,
  setState: () => null,
});

function Provider(props: { children: ReactNode }) {
  const { children } = props;

  const hash = useHash();

  const [state, setState] = useState<State>(initialState);

  const value = useMemo(() => ({ state, setState }), [state, setState]);

  useEffect(() => {
    setState(initialState);
  }, [hash]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

const useGlobalContext = () => useContext(Context);

export { useGlobalContext, Provider, initialState };
