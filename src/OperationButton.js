import { ACTIONS } from "./App";

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      onclick={() =>
        dispatch({ tupe: ACTIONS.CHOSE_OPERATION, payload: { operation } })
      }
    >
      {digit}
    </button>
  );
}
