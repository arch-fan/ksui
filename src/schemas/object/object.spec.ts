import { describe, expect, it } from "vitest";
import { string } from "~/schemas/string";
import { parse } from "~/validator";
import { object } from "./object";

describe("object tests", () => {
	it("should parse string", () => {
		const ObjSchema = object({
			name: string(),
		});

		const data1 = parse(ObjSchema, { name: "Juan" });
		const data2 = parse(ObjSchema, { name: 12 });

		expect(data1.data).toStrictEqual({ name: "Juan" });
		expect(data2.data).toBeUndefined();
	});
});
