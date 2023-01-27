const { expressjwt: jwt } = require("express-jwt");
const authJwt = () => {
    const SECRET = process.env.SECRET;
    // const api = process.env.API_URL;
    return jwt({
        secret: "ESHOP",
        algorithms: ["HS256"],
        // isRevoked: isRevoked,
    })
        .unless({ path: ["/user/login"] });

}

module.exports = authJwt();





// const expressJwt = require("express-jwt");

// function authJwt () {
//     const SECRET = process.env.SECRET;
//     const api = process.env.API_URL;
//     return expressJwt({
//         secret:SECRET ,
//         algorithms: ["HS256"],
//         // isRevoked : isRevoked,
//     });
// }

// module.exports = authJwt;


