import type { BaseSchema, ParseResult } from "~/types";

export const parse = <T>(
	schema: BaseSchema<T>,
	val: unknown,
): ParseResult<T> => {
	if (schema._check(val)) {
		return { data: val };
	}

	return { error: "Invalid data" };
};
