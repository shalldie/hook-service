export enum ETodoType {
    ALL,
    DONE,
    UNDONE
}

export type TTodoItem = {
    name: string;
    type: ETodoType;
};
