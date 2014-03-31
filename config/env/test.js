'use strict';

module.exports = {
    db: 'mongodb://localhost/checklistApp-dev',
    app: {
        name: 'Checklist App - Test'
    },
    google: {
        clientID: process.CHECKLIST_APP_GOOGLE_APP_ID,
        clientSecret: process.CHECKLIST_APP_GOOGLE_SECRET,
        callbackURL: 'http://localhost:3000/auth/google/callback'
    }
};
