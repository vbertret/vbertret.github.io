---
title: "A stochastic expectation maximization algorithm for the estimation of wastewater treatment plant ammonium concentration"
description: "European Control Conference (ECC 2024) - A grey-box model with particle filtering to estimate and forecast ammonium in wastewater treatment plants."
pubDate: "2024-06-28"
type: "proceeding"
event: "European Control Conference (ECC 2024)"
hal: "https://hal.science/hal-04632445v1"
code: "https://github.com/vbertret/SEM-WWTP-nh4-concentration"
---

A full paper at the European Control Conference (ECC 2024, IEEE), presented in Stockholm. It sets out the estimation method behind the ammonium forecasting work: how to recover the state and parameters of a wastewater treatment plant from partial, noisy measurements. Model-based control of aeration anticipates instead of reacting, but it needs a usable dynamic model and the ammonium ($NH_4^+$) concentration in the tank, which is rarely measured cleanly.

The model is a grey-box state-space system, reduced from the ASM1 physics to a form small enough to identify and observe yet faithful to the ammonium dynamics. The state (including the unmeasured concentration) and the parameters are both unknown, so a standard likelihood fit does not apply.

The estimator is a stochastic EM scheme. A particle filter propagates a cloud of state hypotheses and weights them against incoming measurements. A backward smoother reruns the trajectory to refine the earlier states with later information. The smoothed trajectories give a Monte Carlo approximation of the E-step expectation, and the M-step updates the parameters from it. No Gaussian noise or linear dynamics are assumed. The loop alternates until the parameters settle.

On simulated data (ASM1), the method reconstructs the hidden state and produces 24-hour forecasts that beat the prediction-error (PEM) baseline, with a lower RMSE that stays stable across the horizon. The uncertainty intervals are slightly optimistic: empirical coverage near 86% for a nominal 90% interval.

<img src="/images/model-prediction.png" alt="24-hour ammonium forecast with confidence intervals" />

This grey-box identification is one point on the model spectrum later compared in the [Water Research paper](/research/water-research-2025-ammonium/), which sets it against white-box physics and nonparametric black-box models under the same data assimilation. The calibrated state and forecast distributions it produces are also what the downstream stochastic control builds on ([ROADEF 2025](/research/roadef25-uncertainty-mpc/), [CANUM 2026](/research/canum2026-stochastic-control/), and the [thesis](/research/phd-thesis-2025/)).

Paper on <a href="https://hal.science/hal-04632445v1" target="_blank">HAL</a>, <a href="https://github.com/vbertret/SEM-WWTP-nh4-concentration" target="_blank">code</a> open-source.

### Slides

<iframe src="/pdfs/Presentation_ECC_2024.pdf" class="pdf-embed"></iframe>

<p style="text-align: center;"><a href="/pdfs/Presentation_ECC_2024.pdf" target="_blank">Open slides in full screen</a></p>

<em style="color: var(--muted); font-size: 0.9rem;">Joint work with Roman Le Goff Latimier and Valérie Monbet (Purecontrol, ENS Rennes / IETR, IRMAR).</em>
