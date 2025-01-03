import type { BaseSchema } from "~/types";

export const number = (err?: string): BaseSchema<number> => ({
	_check: (data) => {
		return typeof data === "number";
	},
	_errorMsg: err,
});
