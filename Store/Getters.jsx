import { superAdmin } from "./Atoms";
import { admin, state, isSemFive } from "./Atoms";
import { selector } from "recoil";
export const isSuperAdmin=selector({
    key: "999",
    get: ({get})=>{
        const admin=get(superAdmin);
        return admin.isSuperAdmin;
    }
})
export const isAdmin=selector({
    key: "99",
    get: ({get})=>{
        const Admin=get(admin);
        return Admin.isAdmin;
    }
})

export const getState=selector({
    key: "abc",
    get: ({get})=>{
        const checkState =get(state);
        return checkState.connected;
    }
});


export const getSemesterApi=selector({
    key: "55",
get: ({get})=>{
    const status=get(isSemFive);
    return status.semesterApi;
}})

export const getSemStatus=selector({
    key: "505",
get: ({get})=>{
    const status=get(isSemFive);
    return status.isFive;
}})