export type BaseSchema<T> = {
	_check: (data: unknown) => data is T;
	_errorMsg?: string;
};

export type ParseResult<T> =
	| {
			data: T;
			error?: never;
	  }
	| {
			data?: never;
			error: string;
	  };

export type Infer<T extends BaseSchema<unknown>> = T extends BaseSchema<infer U>
	? U
	: never;
