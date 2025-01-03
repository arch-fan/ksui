import { describe, expect, it } from "vitest";
import { string } from "./schemas";
import { parse } from "./validator";

describe("validation tests", () => {
	it("should parse", () => {
		const schema = string();
		const result = parse(schema, "hello");
		expect(result).toEqual({ data: "hello" });
	});

	it("should show custom error", () => {
		const schema = string("this is a custom error by @arch-fan");
		const result = parse(schema, 123);
		expect(result.error).toEqual("this is a custom error by @arch-fan");
	});
});
