const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../Model/user');

let opts = {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}

module.exports = function (passport) {

    passport.use(
        new JwtStrategy(opts, async function (jwtPayload, done) {
            console.log(jwtPayload);
            try {
                let user = await User.findById(jwtPayload._id);
                if (user) {
                    return done(null, user);
                }
                return done(null, false);
            }
            catch (err) {
                return done(err, false);
            }
        })
    )
}
