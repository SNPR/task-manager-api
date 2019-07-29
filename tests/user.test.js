const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");

beforeEach(async () => {
  await User.deleteMany();
});

test("Should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "SNPR",
      email: "awedref@gmail.com",
      password: "(AY*NSlANBJssdfgl"
    })
    .expect(201);
});
