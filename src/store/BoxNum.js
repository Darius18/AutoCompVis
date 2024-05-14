import { defineStore } from "pinia";

export const useBoxNum = defineStore({
    id:'box_number',
    state:()=>({
        box_number:1
    }),
});
