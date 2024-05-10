const addUser = async (req, res) => {
	res.json({ message: "Add user" });
};

const getUser = async (req, res) => {
	res.json({ message: "Get user" });
}

const loginUser = async (req, res) => {
	res.json({ message: "Login user" });
}

const logoutUser = async (req, res) => {
	  res.json({ message: "Logout user" });
}

module.exports = { addUser, getUser, loginUser, logoutUser};