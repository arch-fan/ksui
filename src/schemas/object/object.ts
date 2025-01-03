import type { BaseSchema } from "~/types";

export const object = <
	T extends Record<string, BaseSchema<unknown>>,
	U = {
		[K in keyof T]: T[K] extends BaseSchema<infer U> ? U : never;
	},
>(
	keyval: T,
): BaseSchema<U> => {
	return {
		_check: (data): data is U => {
			if (typeof data !== "object") return false;
			if (!data) return false;
			for (const key in keyval) {
				if (!(key in data)) return false;
				if (!keyval[key]?._check((data as Record<string, unknown>)[key]))
					return false;
			}
			return true;
		},
	};
};
