'use strict';

/**
 * osi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::osi.osi');
