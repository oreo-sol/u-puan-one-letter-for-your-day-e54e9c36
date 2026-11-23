# One Letter for Your Day

[![make.fun](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36?utm_source=github&utm_medium=readme&utm_campaign=u-puan-one-letter-for-your-day-e54e9c36)
[![Rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/oreo-sol/u-puan-one-letter-for-your-day-e54e9c36/rank.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-puan-one-letter-for-your-day-e54e9c36)
[![Reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/oreo-sol/u-puan-one-letter-for-your-day-e54e9c36/reward.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36?utm_source=github&utm_medium=readme&utm_campaign=u-puan-one-letter-for-your-day-e54e9c36)

One letter. One day. One mood.

The entry is exactly one letter: **H**. It stands for **"hangry"** — hungry + angry, the most honest single word for a day that went sideways before lunch. Skipped breakfast, snapped at the kettle, apologized to the kettle. No explanation needed; if you know, you know.

## How it works

`main.ts` (Node 22, no dependencies) validates that the entry is exactly one capital letter A–Z, writes it as a single byte to `entry.txt` in `$MAKEFUN_OUTPUT_DIR` (or `/output` if unset), then reads the file back and verifies it is byte-identical to `H` — no newline, no extra characters. If the check fails, it exits non-zero.
