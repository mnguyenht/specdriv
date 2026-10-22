# specdriv

A spec-driven website selling white t-shirts.

Docs: https://mnguyenht.github.io/specdriv/

## Working agreement

- **Specs before code.** Every change traces to an issue.
- **User stories are issues:** "As a <persona>, I want <goal>, so that <benefit>." Each has Given/When/Then acceptance criteria and `story`, `priority:*`, `size:*` labels.
- **Atomic commits:** one logical change each, [Conventional Commits](https://www.conventionalcommits.org/), issue referenced, e.g. `feat(cart): add size selector (#12)`. Final commit of a story uses `Closes #N`.
- **Brand:** archetypes in [docs/brand.md](docs/brand.md). **Persuasion:** Cialdini mapping in [docs/persuasion.md](docs/persuasion.md). No fake scarcity, no fake reviews.
- **Done** means [docs/definition-of-done.md](docs/definition-of-done.md) is met.

## Docs

[Vision](docs/vision.md) · [Personas](docs/personas.md) · [Brand](docs/brand.md) · [Persuasion](docs/persuasion.md) · [Backlog](docs/backlog.md) · [Definition of Done](docs/definition-of-done.md)

## Stack

Next.js + Tailwind. Run locally: `npm install`, then `npm run dev`.
