import { describe, expect, it } from "vitest";
import { parse } from "~/validator";
import { string } from "./string";

describe("string tests", () => {
	it("should parse string", () => {
		const schema = string();
		const s = "foo";
		const { data, error } = parse(schema, s);
		expect(data).toBe(s);
		expect(error).toBeUndefined();
	});
});
