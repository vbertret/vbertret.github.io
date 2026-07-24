---
title: "Uncertainty Analysis in Predictive Control for Wastewater Treatment Plants"
description: "ROADEF 2025 - Where does the error come from when a predictive controller for WWTP aeration underperforms? A decomposition of the uncertainty sources."
pubDate: "2025-02-27"
type: "proceeding"
event: "26th ROADEF Congress"
hal: "https://hal.science/hal-04985652v1"
---

*The original abstract and slides are in French.*

Presented at the 26th ROADEF congress, in Champs-sur-Marne. A predictive controller for plant aeration can underperform for three separate reasons: the dynamic model is wrong, the partially observed state is badly reconstructed, or the incoming-load forecast is off. This work separates those three sources and measures how each one propagates to the closed-loop operating cost and to discharge-limit violations. It compares a deterministic controller against a stochastic one on the same scenarios.

<img src="/images/wwtp-schema.png" alt="Wastewater treatment plant aeration control" />

The three sources hurt different things. In simulation, the incoming-load forecast dominates operating cost. Model error dominates feasibility, meaning whether the discharge limits can be respected. State-estimation and sensor error is close to negligible. The reading for practice is direct: spend modelling effort on load forecasting to lower cost, on the dynamic model to protect feasibility, and very little on the sensors.

The study sits in the middle of the aeration thread. The forecasting comparison ([Water Research 2025](/research/water-research-2025-ammonium/)) and the grey-box estimation ([ECC 2024](/research/ecc-ammonium-estimation/)) supply the components whose errors are decomposed here. The result then points the design of the stochastic controller studied later ([CANUM 2026](/research/canum2026-stochastic-control/), [PhD thesis 2025](/research/phd-thesis-2025/)) toward the uncertainty that actually matters.

### Slides

<iframe src="/pdfs/Présentation_ROADEF_2025_VF.pdf" class="pdf-embed"></iframe>

<p style="text-align: center;"><a href="/pdfs/Présentation_ROADEF_2025_VF.pdf" target="_blank">Open slides in full screen</a></p>

<em style="color: var(--muted); font-size: 0.9rem;">Joint work with Roman Le Goff Latimier and Valérie Monbet (Purecontrol, ENS Rennes / IETR, IRMAR).</em>
