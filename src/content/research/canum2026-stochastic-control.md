---
title: "Stochastic Control for Industrial Processes: Open-Loop Performance vs. Closed-Loop Robustness"
description: "CANUM 2026 - A better model does not mean better control: on WWTP aeration, handling uncertainty well matters more than raw forecast accuracy."
pubDate: "2026-06-04"
type: "talk"
event: "CANUM 2026, Saint-Jacut-de-la-Mer"
---

*The talk was given in French.*

A talk at CANUM 2026, the French numerical analysis congress, in Saint-Jacut-de-la-Mer. It is about model-based control of wastewater aeration, and about one question that decides how much modelling effort is worth: does a better model give better control?

Aeration is the plant's largest energy cost, and it has to keep nitrogen discharge under a regulatory limit. A purely reactive controller, even with a good sensor, acts on what has already happened, so it tends to react too late or to overshoot. Model-based control anticipates instead, and that is what this line of work is after. Building the model is costly, so the useful question is how accurate it really needs to be.

The case study is the alternated activated-sludge process, common in French municipal plants. The controller is a stochastic dynamic program: it plans for the distribution of possible incoming loads rather than a single nominal profile, so uncertainty enters the decision explicitly.

The results on the public BSM2 benchmark are the message of the talk. A simple controller that represents uncertainty well already captures most of the benefit: about 15% lower daily aeration cost than the reactive rule, with no discharge-limit violations. Improving the model beyond that barely helps the control, a large drop in forecast error (RMSE) buys only a marginal cost gain. Accuracy without accounting for uncertainty even backfires: a controller that trusts an over-confident forecast, one that treats the variable, non-stationary load as if it were known exactly, violates the limits about 16% of the time. Good control comes from representing the uncertainty and the structure of the load, not from a sharper point model.

The talk closes this line of work. The forecasts come from the [Water Research paper](/research/water-research-2025-ammonium/), the state estimation from the [ECC 2024 work](/research/ecc-ammonium-estimation/), and the [ROADEF 2025 analysis](/research/roadef25-uncertainty-mpc/) shows which uncertainty matters most. The [PhD thesis](/research/phd-thesis-2025/) is the full synthesis.

<img src="/images/wwtp-schema.png" alt="Wastewater treatment plant aeration control" />

### Slides

<iframe src="/pdfs/CANUM2026.pdf" class="pdf-embed"></iframe>

<p style="text-align: center;"><a href="/pdfs/CANUM2026.pdf" target="_blank">Open slides in full screen</a></p>

<em style="color: var(--muted); font-size: 0.9rem;">Joint work with Roman Le Goff Latimier and Valérie Monbet (Purecontrol, ENS Rennes / IETR, IRMAR).</em>
