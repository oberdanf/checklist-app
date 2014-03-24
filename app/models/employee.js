'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Employee Schema
 */
var EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: false,
    },
    responsible: {
        type: String,
        required: true,
        trim: true
    },
    checklist: {
        name: {
            type: String,
            required: true,
            trim: true
        },
        progress: {
            type: Number,
            required: true,
            default: 0
        },
        steps: [
            {
                name: {
                    type: String,
                    required: true,
                    trim: true
                },
                description: {
                    type: String,
                    required: true,
                    trim: false
                },
                isCompleted: {
                    type: Boolean,
                    required: false
                }
            }
        ]
    }
});

/**
 * Validations
 */
EmployeeSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
EmployeeSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};

mongoose.model('Employee', EmployeeSchema);