import type { BaseSchema, Infer } from "~/types";

export const object = <T extends Record<string, BaseSchema<unknown>>>(
	keyval: T,
	err?: string,
): BaseSchema<{
	[K in keyof T]: Infer<T[K]>;
}> => {
	return {
		_check: (
			data,
		): data is {
			[K in keyof T]: Infer<T[K]>;
		} => {
			if (typeof data !== "object") return false;
			if (!data) return false;
			for (const key in keyval) {
				if (!(key in data)) return false;
				if (!keyval[key]?._check((data as Record<string, unknown>)[key]))
					return false;
			}
			return true;
		},
		_errorMsg: err,
	};
};
