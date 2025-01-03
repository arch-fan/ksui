import { describe, expect, it } from "vitest";
import { string } from "~/schemas/string";
import { parse } from "~/validator";
import { object } from "./object";
import { number } from "../number";

describe("object tests", () => {
	it("should parse object with 1 nested", () => {
		const ObjSchema = object({
			name: string(),
		});

		const data1 = parse(ObjSchema, { name: "Juan" });
		const data2 = parse(ObjSchema, { name: 123 });

		expect(data1.data).toStrictEqual({ name: "Juan" });
		expect(data2.data).toBeUndefined();
	});

	it("should parse object with 2 nested", () => {
		const ObjSchema = object({
			name: string(),
			car: object({
				brand: string(),
			}),
		});

		const parsed = parse(ObjSchema, {
			name: "Joan",
			car: {
				brand: "To",
			},
		});

		expect(parsed.error).toBeUndefined();
	});

	it("should parse object with 3 nested", () => {
		const ObjSchema = object({
			name: string(),
			car: object({
				brand: string(),
				model: object({
					year: number(),
				}),
			}),
		});

		const parsed = parse(ObjSchema, {
			name: "Joan",
			car: {
				brand: "To",
				model: {
					year: 2022,
				},
			},
		});

		expect(parsed.error).toBeUndefined();
	});
});
