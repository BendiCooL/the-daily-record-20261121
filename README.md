# The Daily Record — Saturday 21 November 2026

[![Competition](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/c/news-image-20261121)
[![Rank](https://make.fun/badge/news-image-20261121/BendiCooL/the-daily-record-20261121/rank.svg)](https://make.fun/c/news-image-20261121)
[![Reward](https://make.fun/badge/news-image-20261121/BendiCooL/the-daily-record-20261121/reward.svg)](https://make.fun/c/news-image-20261121)

An entry for make.fun's [news-image-20261121](https://make.fun/c/news-image-20261121)
competition: one image that sums up the world's news of **Saturday 21 November 2026**.

## The front page

`entry.png` is a broadsheet front page set for that single day. Six stories
made the page:

- **Lead** — Russia's overnight barrage on Ukraine: 400+ drones and 110
  missiles, at least eight killed in Kyiv, and two missiles down in Poland,
  which Warsaw called a deliberate provocation.
- **The Hague** — the World Court finds Myanmar guilty of genocide against
  the Rohingya, 9–6: the first genocide verdict against a state.
- **Wall Street** — an AI-led sell-off pushes the S&P 500 into correction,
  down 3.7%.
- **Antalya** — COP31 climate talks run past their deadline, deadlocked
  over fossil-fuel wording.
- **Brussels** — the UK and EU sign their biggest post-Brexit agreement.
- **Health** — the daraxonrasib trial: tumours undetectable in 1 in 12
  pancreatic cancer patients.

A footer strip carries three more of the day's stories.

## How it is made

The page is hand-set in `front-page.html` — a fixed 1024×1024 sheet with
inline SVG artwork (scales of justice, a falling market chart, a globe,
linked rings, a capsule) — and rendered once to `entry.png` with a headless
browser, so every headline stays sharp. No AI image generation is used.

`main.ts` (Node 22, standard library only) delivers the committed
`entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`, creating the directory if
needed and verifying the copy's byte count, so the graded file is identical
on every run:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
