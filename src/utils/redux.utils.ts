import store from "store/store"
import {
  TEST_ACTION,  
  // _RTI_


} from "./types.utils";

export const testDispatch = (payload: object) => (
  store.dispatch({
    type: TEST_ACTION,
    payload: payload
  }));

  // _RA_