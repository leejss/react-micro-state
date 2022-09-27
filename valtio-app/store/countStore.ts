import { proxy } from "valtio";

export const countState = proxy({
  count1: 0,
  count2: 0,
});
