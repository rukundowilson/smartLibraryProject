const express = require('express');
const cors = require('cors');
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const session = require("express-session")

const PORT = 5000;

// Create db connection
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "468161Ro@",
  database: "LibManageDB"
});

// Middlewares
const app = express();
app.use(express.json())
app.use(cors(
  {
    origin: "http://localhost:5173",
    methods: "GET, POST",
    credentials: true,
  }
));
app.use(
  session({
    secret: "468161Ro@",
    resave: false, 
    saveUninitialized: false,
    cookie: {
      secure: true, 
      httpOnly: true, 
      maxAge: 1000 * 60 * 60 * 24, //
    },
  })
);
// Routes
app.post('/admin/login', (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate inputs
    if (!email) {
      return res.status(200).json({ errorMessage: "An email is required to log in!" });
    }
    if (!password) {
      return res.status(200).json({ errorMessage: "A password is required to log in!" });
    }

    // Query to retrieve the hashed password
    const query = "SELECT password,name,role FROM LibraryStaff WHERE email = ?";
    db.query(query, [email], async (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ errorMessage: "An internal server error occurred." });
      }

      // Check if user exists
      
      if (result.length === 0) {
        return res.json({ errorMessage: "Invalid email or password." });
      }

      const name=result[0].name;
      const role = result[0].role
      const hashedPassword = result[0].password;

      // check if passwors are matching
      const passwordMatch = await bcrypt.compare(password, hashedPassword);
      if (!passwordMatch) {
        return res.json({ errorMessage: "Invalid email or password." });
      }

      // Successful login
      session.User = {name: name,email: email,role: role}
      console.log(session.User)
      return res.status(200).json({ message: "Login successful!",
                                    name : name,role : role,
                                    redirectPath: "/library/admin/panel",
                                    
                                  });
    });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ errorMessage: "An internal server error occurred." });
  }
});

// creating an API for dashboard page after login is success
app.get("/about/user/admin",(req,res)=>{
  console.log("ready to send all about the user admin as json")
  const name = session.User.name;
  const email = session.User.email;
  const role = session.User.role;
  console.log(name,email,role)
  res.status(200).json({name : name, 
                        email : email,
                        role : role
                      })
})

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
