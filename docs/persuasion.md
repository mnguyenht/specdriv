---
title: Persuasion
nav_order: 5
---

# Persuasion

Cialdini's principles, mapped to where they live. Each row is an acceptance criterion on its story.

**Ethics rule:** no fake scarcity, no fake reviews, no countdown timers, no invented numbers. If the real data isn't there, the element doesn't render.

| Principle | Page / component | Story | Acceptance criterion |
|---|---|---|---|
| **Reciprocity** | Size & care guide | [#3](https://github.com/mnguyenht/specdriv/issues/3) | **Given** the product page, **when** I open the size guide, **then** full measurements and care steps show with no email or sign-up gate. |
| **Commitment / consistency** | Cart | [#5](https://github.com/mnguyenht/specdriv/issues/5) | **Given** I added a tee, **when** I come back on the same device, **then** my cart is still there. |
| **Commitment / consistency** | Checkout steps | [#6](https://github.com/mnguyenht/specdriv/issues/6) | **Given** I start checkout, **when** the page loads, **then** I see the step I'm on (e.g. "Step 1 of 2") and my cart choices carried over. |
| **Social proof** | Home | [#2](https://github.com/mnguyenht/specdriv/issues/2) | **Given** no verified reviews or real order data exist, **when** the home page renders, **then** no rating, testimonial, or customer count appears. |
| **Authority** | Product specs | [#3](https://github.com/mnguyenht/specdriv/issues/3) | **Given** the product page, **when** I read the specs, **then** fabric weight (GSM), fiber content, and origin are listed, and any certification links to its certificate. |
| **Liking** | About | [#7](https://github.com/mnguyenht/specdriv/issues/7) | **Given** the about page, **when** I read it, **then** it says who makes the tee and why, in the brand voice, with no stock photos presented as the team. |
| **Scarcity** | Size selector | [#4](https://github.com/mnguyenht/specdriv/issues/4) | **Given** a size has 5 or fewer in stock in inventory data, **when** I view it, **then** "Only N left" shows the real number; otherwise no stock message shows. |
| **Unity** | Home hero | [#2](https://github.com/mnguyenht/specdriv/issues/2) | **Given** the home page, **when** it loads, **then** the headline frames the tee as a shared everyday basic ("the white tee we all reach for"), with no exclusivity language. |
