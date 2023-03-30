import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/categories", async (req, res, ctx) => {
    return res(
      ctx.json({
        categories: [
          {
            id: "1",
            category: "Panorama",
          },
        ],
      })
    );
  }),
];
