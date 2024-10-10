export interface ITask<T = any> {
	name: string;
	commit?(target: T): Promise<void>;
	rollback?(target: T): Promise<void>;
	children?: ITask[];
}
