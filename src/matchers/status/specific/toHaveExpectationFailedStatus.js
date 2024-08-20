const { printDebugInfo } = require('../../../utils/get-debug-info');
const { getMatchingAdapter } = require('../../../http-clients');

function toHaveExpectationFailedStatus(expected) {
  const { matcherHint, printReceived } = this.utils;

  const adapter = getMatchingAdapter(expected);
  const status = adapter.getStatusCode();

  const pass = status === 417;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('not.toHaveExpectationFailedStatus', 'received', '') +
          '\n\n' +
          'Expected status code to not be 417 received:\n' +
          `  ${printReceived(status)}\n\n` +
          printDebugInfo(adapter)
        : matcherHint('.toHaveExpectationFailedStatus', 'received', '') +
          '\n\n' +
          'Expected status code to be 417 received:\n' +
          `  ${printReceived(status)}\n\n` +
          printDebugInfo(adapter),
  };
}

module.exports = { toHaveExpectationFailedStatus };
