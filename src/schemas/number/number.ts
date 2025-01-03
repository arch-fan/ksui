import type { BaseSchema } from "~/types";

export const number = (): BaseSchema<number> => ({
	_check: (data) => {
		return typeof data === "number";
	},
});
