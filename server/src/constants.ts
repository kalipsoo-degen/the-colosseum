import BigNumber from './utils/bignumber';

export const F_PLATFORM_IMMEDIATE = new BigNumber('0.0045'); // 0.45%
export const F_PLATFORM_PENDING = new BigNumber('0.03');     // 3.00%
export const F_PLAYER = new BigNumber('0.02');     // 2.00%
export const F_HOUSE = F_PLATFORM_IMMEDIATE.plus(F_PLATFORM_PENDING).plus(F_PLAYER);  // 5.45%

export const MIN_ODDS = new BigNumber('1.05');
export const MAX_ODDS_TEAM_BATTLE = new BigNumber('20.0');
export const MAX_ODDS_BATTLE_ROYALE = new BigNumber('100.0');

export const SAFETY_BUFFER = new BigNumber('0.9');

export const BOOTSTRAP_LIQUIDITY = new BigNumber('100'); // For cold-start markets 