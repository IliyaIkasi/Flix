const jwt = require("jsonwebtoken");
const {
	Invalid_Token,
	InternalServer,
	InternalServer_Code,
	Bad_Request,
	Unauthorized,
	Unauthorized_Code,
} = require("../Status/StatusCode");

function authorization(req, res, next) {
	const authToken = req.headers["flix-token"];
	if (!authToken) return res.status(Bad_Request).json({ Invalid_Token });
	try {
		const payload = jwt.verify(authToken, process.env.JWT_SECRET_KEY);
		req.user = payload;
		next();
	} catch (error) {
		return res
			.status(InternalServer_Code)
			.json({ message: InternalServer, error: error.message });
	}
}

exports.authorization = authorization;
