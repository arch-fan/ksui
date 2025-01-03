import type { BaseSchema, ParseResult } from "~/types";

export const parse = <T>(
	schema: BaseSchema<T>,
	// biome-ignore lint/complexity/noBannedTypes: Maintain autocomplete, but no effect on type checking
	val: T | {},
): ParseResult<T> => {
	if (schema._check(val)) {
		return { data: val };
	}

	return { error: schema._errorMsg ?? "Invalid value" };
};
