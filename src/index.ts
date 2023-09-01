import { Elysia } from "elysia";

const app = new Elysia()
  .post("/", ({ body, set }) => {
    const params = `?${new URLSearchParams(
      body as Record<string, string>,
    ).toString()}`;

    console.log(params);

    // redirect to the frontend

    set.redirect = `https://rapid-payment-test.vercel.app/payment${params}`;

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
