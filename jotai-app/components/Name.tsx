import { atom, useAtom } from "jotai";

export const firstNameAtom = atom("");

export const secondNameAtom = atom("");

const Name = () => {
  return (
    <div>
      <FirsName />
      <LastName />
    </div>
  );
};

export default Name;

const FirsName = () => {
  console.log(firstNameAtom.toString());

  const [firstName, setFirstName] = useAtom(firstNameAtom);

  return (
    <label>
      first name
      <input
        type="text"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
    </label>
  );
};

const LastName = () => {
  const [secondName, setSecondName] = useAtom(secondNameAtom);
  return (
    <label>
      seceond name
      <input
        type="text"
        value={secondName}
        onChange={(e) => {
          setSecondName(e.target.value);
        }}
      />
    </label>
  );
};
