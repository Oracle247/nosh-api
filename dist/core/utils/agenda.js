"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agenda = void 0;
const config_1 = require("../../config");
const agenda_1 = require("@hokify/agenda");
const logger_1 = require("./logger");
const agenda = new agenda_1.Agenda({
    db: {
        address: config_1.DB_URI,
        collection: 'cron-jobs',
    }
});
exports.agenda = agenda;
agenda.on('ready', async () => {
    // agenda.define('welcomeMessag', () => {
    //   console.log('Sending a welcome message every few seconds');
    // });
    await Promise.all([
        await agenda.start(),
        // await agenda.every('5 seconds', 'welcomeMessag');
        agenda.purge()
    ]);
    logger_1.logger.info('Agenda Cron Ready ✔');
});
agenda.on('start', async () => {
    logger_1.logger.info('Agenda Cron Started ✔');
});
const completed = async () => {
    await agenda.stop();
    logger_1.logger.info('Agenda Cron Stopped ✔');
    process.exit(0);
};
process.on('SIGTERM', completed);
process.on('SIGINT', completed);
//# sourceMappingURL=agenda.js.map