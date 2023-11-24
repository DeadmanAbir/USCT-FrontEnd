import {atom} from "recoil";

export const superAdmin=atom({
    key: "z",
    default: {
        isSuperAdmin: localStorage.getItem('isSuperAdmin') === 'true',

    }
})
export const admin=atom({
    key: "m",
    default: {
        isAdmin: localStorage.getItem('isAdmin') === 'true',
    }
})

export const state=atom({
    key: "a",
    default: {
        connected: null,
        id: null
    }
});

export const isSemFive=atom({
    key: "5",
    default: {
        isFive: localStorage.getItem('isFive') === 'true',
        // semsterApi: localStorage.getItem('Semester')? (localStorage.getItem('Semester')): ("8")
        semesterApi: "8"
    }
})
