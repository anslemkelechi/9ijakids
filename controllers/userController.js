const User = require("./../models/userModel");
const catchAysnc = require("./../utils/catchAysnc");
const appError = require("./../utils/appError");

//CREATE NEW USER
exports.createUser = catchAysnc(async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(200).json({
    status: "Success",
    message: "User Create Successfully",
    data: {
      user,
    },
  });
});

//READ USER FROM DB, USING EMAIL AS KEY
exports.readUser = catchAysnc(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return next(new appError(403, "User Not Found!, Please try another email"));
  res.status(200).json({
    status: "Success",
    message: "User Found",
    data: {
      user,
    },
  });
});

//READ ALL USERS
exports.getAllUsers = catchAysnc(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "Success",
    message: "Users",
    results: users.length,
    data: {
      users,
    },
  });
});

//UPDATE USER IN DB
exports.updateUser = catchAysnc(async (req, res, next) => {
  const userId = req.params.id;
  //Check if userID exists
  const user = await User.findById(userId);
  if (!user) return next(new appError(403, `No user with ID: ${userId}`));
  const newUser = await User.findByIdAndUpdate(userId, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "Success",
    message: "User Updated Successfully",
    data: {
      newUser,
    },
  });
});

//Delete User for DB
exports.deleteUser = catchAysnc(async (req, res, next) => {
  const userId = req.params.id;
  //Check if userID exists
  const user = await User.findById(userId);
  if (!user) return next(new appError(403, `No user with ID: ${userId}`));
  const nullUser = await User.findByIdAndDelete(userId);
  res.status(204).json({
    status: "Success",
    data: null,
  });
});
