import {ChecklistItem} from "./checklist-items";
export interface Checklist {
    id:string;
    title:string;
    items:ChecklistItem[];
}