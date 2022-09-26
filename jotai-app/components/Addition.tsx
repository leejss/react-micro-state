import { atom, useAtom, useAtomValue } from "jotai";

const leftNumAtom = atom<number>(0);
const rightNumAtom = atom<number>(0);

const totalAtom = atom((get) => get(leftNumAtom) + get(rightNumAtom));

const Addition = () => {
  return (
    <div>
      <LeftNum /> + <RightNum /> = <Total />
    </div>
  );
};

export default Addition;

const LeftNum = () => {
  const [leftNum, setLeftNum] = useAtom(leftNumAtom);
  return (
    <div>
      <label>
        <input
          type="number"
          value={leftNum ? leftNum : undefined}
          onChange={(e) => {
            setLeftNum(parseInt(e.target.value));
          }}
        />
      </label>
    </div>
  );
};

const RightNum = () => {
  const [rightNum, setRightNum] = useAtom(rightNumAtom);
  return (
    <div>
      <label>
        <input
          type="number"
          value={rightNum ? rightNum : undefined}
          onChange={(e) => {
            setRightNum(parseInt(e.target.value));
          }}
        />
      </label>
    </div>
  );
};

const Total = () => {
  const totalNum = useAtomValue(totalAtom);
  return <h1>{totalNum}</h1>;
};
