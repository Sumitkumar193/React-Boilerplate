import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

//Add persistence if needed
const { persistAtom } = recoilPersist()

const accessTokenAtom = atom({
    key: "accessTokenAtom",
    default: localStorage.getItem('accessToken') ?? null,
    effects_UNSTABLE: [persistAtom],
})

export default accessTokenAtom;