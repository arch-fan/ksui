import type { BaseSchema } from "~/types";

export const string = (): BaseSchema<string> => {
	return {
		_check: (data) => typeof data === "string",
	};
};
