// import jwt from "jsonwebtoken";

// // POST /api/auth/login
// export const loginAdmin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     if (
//       email === process.env.ADMIN_EMAIL &&
//       password === process.env.ADMIN_PASSWORD
//     ) {
//       const token = jwt.sign(
//         { id: email },   // using email as identifier
//         process.env.JWT_SECRET,
//         { expiresIn: "1d" }
//       );

//       return res.json({
//         success: true,
//         token,
//         email,
//       });
//     }

//     return res.status(401).json({ message: "Invalid credentials" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };


import jwt from "jsonwebtoken";

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {

      const token = jwt.sign(
        { email: email },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      return res.json({
        success: true,
        token,
        email
      });

    } else {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};