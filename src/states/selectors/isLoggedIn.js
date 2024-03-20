import { selector } from "recoil";
import accessTokenAtom from "../atoms/accessToken";

const isLoggedInSelector = selector({
    key: "isLoggedInSelector",
    get: ({get}) => {
        const data = get(accessTokenAtom);
        return data !== null;
    }
});

export default isLoggedInSelector;