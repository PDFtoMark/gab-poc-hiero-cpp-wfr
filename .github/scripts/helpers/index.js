// Baseline helper (structure mirrors .github/scripts/helpers/index.js in the target repo).
module.exports = {
  createLogger: () => ({ log: (...a) => console.log(...a), error: (...a) => console.error(...a) }),
  buildBotContext: ({ github, context }) => ({ github, context }),
  swapStatusLabel: async () => ({ success: true }),
};
