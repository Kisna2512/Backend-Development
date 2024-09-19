import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  // return res.status(200).json({
  //   message: "ok",
  // });
  // get user details from frontend
  //  validation
  // check if user already exists: username and email
  // check fro images and avatar
  // upload them to cloudinary
  // create user object entry in db
  //remove password and refresh token field from response
  // check for user creation
  // return res

  const { fullName, email, username, password } = req.body;
  console.log("Email: ", email, password);
  res.sendStatus(200);
});

export { registerUser };
