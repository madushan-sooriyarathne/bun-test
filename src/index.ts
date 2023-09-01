import { Elysia } from "elysia";

const app = new Elysia()
  .post("/", ({ body }) => {
    console.log(body);
    return {
      status: "success",
      data: null,
    };
  })
  .get("/", () => "Helloworld from Bun")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
