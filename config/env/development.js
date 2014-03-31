'use strict';

module.exports = {
    db: 'mongodb://localhost/checklistApp-dev',
    app: {
        name: 'Checklist App - Dev'
    },
    google: {
        clientID: process.env.CHECKLIST_APP_GOOGLE_APP_ID,
        clientSecret: process.env.CHECKLIST_APP_GOOGLE_APP_SECRET,
        callbackURL: 'http://localhost:3000/auth/google/callback'
    }
};
