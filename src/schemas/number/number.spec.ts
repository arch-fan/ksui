import { describe, expect, it } from "vitest";
import { parse } from "../../validator";
import { number } from "./number";

describe("number tests", () => {
	it("should parse number", () => {
		const NumberSchema = number();
		const parse1 = parse(NumberSchema, 12);

		expect(parse1.error).toBeUndefined();
		expect(parse1.data).toBe(12);
	});
});
