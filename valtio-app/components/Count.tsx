import { useSnapshot } from "valtio";
import { countState } from "../store/countStore";

export const Count1 = () => {
  const snap = useSnapshot(countState);
  return (
    <div>
      <h1>Count1 {snap.count1}</h1>
      <button
        onClick={() => {
          countState.count1 += 1;
        }}
      >
        Incement
      </button>
    </div>
  );
};

export const Count2 = () => {
  const snap = useSnapshot(countState);
  return (
    <div>
      <h1>Count2 {snap.count2}</h1>
      <button
        onClick={() => {
          countState.count2 += 1;
        }}
      >
        Incement
      </button>
    </div>
  );
};
