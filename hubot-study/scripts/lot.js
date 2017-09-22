'use strict';
module.exports = (robot) => {
  robot.hear(/lot>/i, (msg) => {
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)]
    const username = msg.message.user.name;
  // msg.send('Hello, ' + username);
  msg.send(lot + ',' + username);
});
};
// HUBOT_SLACK_TOKEN=xoxb-245278994405-LGBaO0M53RJyJhP98lWXsfjh
