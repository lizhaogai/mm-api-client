/**
 * mm-api-client
 * Money Mommy API Explorer.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: towyuan@outlook.com
 *
 * NOTE: This library is auto generated by the Open API Codegen program.
 * https://github.com/taoyuan/generator-oac.git
 * Do not edit the class manually.
 *
 */

const Requestor = require('./lib/_requestor');
const Account = require('./lib/Account');
const Tenant = require('./lib/Tenant');
const Record = require('./lib/Record');
const Balance = require('./lib/Balance');
const Withdraw = require('./lib/Withdraw');
const Invitation = require('./lib/Invitation');
const SocialGroup = require('./lib/SocialGroup');
const Income = require('./lib/Income');
const AchievementImportRecord = require('./lib/AchievementImportRecord');
const Settings = require('./lib/Settings');
const SocialGroupStatus = require('./lib/SocialGroupStatus');
const CommissionRecord = require('./lib/CommissionRecord');
const Wechat = require('./lib/Wechat');
/**
 * Money Mommy API Explorer.
 *
 * @param {String|Object} [baseUrl]
 * @param {Object} [opts]
 */
module.exports = function(baseUrl, opts) {
  if (typeof baseUrl === 'object') {
    opts = baseUrl;
    baseUrl = undefined;
  }
  opts = opts || {};
  opts.baseUrl = opts.baseUrl || baseUrl;

  const client = {};
  const requestor = client.requestor = new Requestor(opts);

  client.authenticate = function(options) {
    requestor.auth(options);
  };

  client.configure = function(options) {
    requestor.configure(options);
  };

  client.account = new Account(requestor);
  client.tenant = new Tenant(requestor);
  client.record = new Record(requestor);
  client.balance = new Balance(requestor);
  client.withdraw = new Withdraw(requestor);
  client.invitation = new Invitation(requestor);
  client.socialGroup = new SocialGroup(requestor);
  client.income = new Income(requestor);
  client.achievementImportRecord = new AchievementImportRecord(requestor);
  client.settings = new Settings(requestor);
  client.socialGroupStatus = new SocialGroupStatus(requestor);
  client.commissionRecord = new CommissionRecord(requestor);
  client.wechat = new Wechat(requestor);

  return client;
};