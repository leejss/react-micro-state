import { atom, useAtomValue } from "jotai";
import { firstNameAtom, secondNameAtom } from "./Name";

const fullNameAtom = atom((get) => ({
  firstName: get(firstNameAtom),
  secondName: get(secondNameAtom),
}));

const FullName = () => {
  const fullName = useAtomValue(fullNameAtom);
  return (
    <div>
      <h2>Fullname</h2>
      <h2>
        {fullName.firstName} {fullName.secondName}
      </h2>
    </div>
  );
};

export default FullName;
