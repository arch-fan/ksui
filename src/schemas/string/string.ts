import type { BaseSchema } from "~/types";

export const string = (err?: string): BaseSchema<string> => {
	return {
		_check: (data) => typeof data === "string",
		_errorMsg: err,
	};
};
