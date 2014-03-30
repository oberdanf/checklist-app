'use strict';

module.exports = {
    db: 'mongodb://localhost/checklistApp-dev',
    app: {
        name: 'Checklist App - Dev'
    },
    google: {
        clientID: 'APP_ID',
        clientSecret: 'CLIENT_SECRET',
        callbackURL: 'http://localhost:3000/auth/google/callback'
    }
};
