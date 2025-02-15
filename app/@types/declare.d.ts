type UseCaseType<T> = () => {
  error: Error;
  isPending: boolean;
  data: T;
};

interface IRoute {
  path: string;
  url?: (id: number | string) => string;
}

interface ContextReducerType<TState, TAction> {
  state: TState;
  dispatch: (action: TAction) => void;
}

interface ReducerActionType<EAction, TState> {
  type: EAction;
  payload: Partial<TState>;
}

interface ContextStateType<TState, TSetState> {
  state: TState;
  setState: TSetState;
}
