export interface IFile {
	name: string;
	type: FileType;
	url: string;
}

export enum FileType {
	IMG,
	DIR
}
