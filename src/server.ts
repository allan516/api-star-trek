import createApp from "./app";

const app = createApp();
app.listen(3000, () => {
  console.log(`Listening at http://localhost:3000`);
});
