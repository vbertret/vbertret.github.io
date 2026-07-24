---
title: "Data assimilation for prediction of ammonium in wastewater treatment plant: from physical to data driven models"
description: "Water Research (2025) - A systematic comparison of white-box, grey-box and black-box models combined with data assimilation to forecast ammonium concentration in WWTPs."
pubDate: "2025-08-01"
type: "paper"
journal: "Water Research, Vol. 282, 123673"
doi: "https://doi.org/10.1016/j.watres.2025.123673"
hal: "https://hal.science/hal-05055967v1"
code: "https://github.com/vbertret/WWTP-DataAssimilation-ModelComparison"
---

My main PhD paper, published in Water Research (vol. 282, art. 123673). A wastewater treatment plant removes ammonium ($NH_4^+$) by aeration, its largest energy cost. Spending that energy efficiently means anticipating the load rather than reacting to it. This is the aim of model-based control, which needs a forecast of the ammonium concentration a few hours ahead. Producing that forecast reliably is the foundation the rest of this work builds on.

The paper puts the whole model spectrum on one benchmark:

- white-box physics (ASM1),
- grey-box reductions that keep only the dynamics needed for control,
- black-box data-driven models.

Each model is coupled with sequential data assimilation (Kalman- and particle-type filters) so that sensor readings continuously correct the state. Point accuracy and interval calibration are then compared across the forecast horizon. The estimation machinery behind the grey-box case, a stochastic EM built on a particle filter and a backward smoother, is developed in the [ECC 2024 paper](/research/ecc-ammonium-estimation/).

On the simulated ASM1 benchmark the data-driven approach wins. A nonparametric black-box model (local linear regression with a particle filter) gives the best accuracy and the best-calibrated intervals. The grey-box comes next. The physical white-box is last, and by far the most expensive to fit. A parsimonious model with data assimilation beats both pure physics and pure data, and stays usable on the sparse, noisy sensors of a real plant.

<img src="/images/model-prediction.png" alt="24-hour forecast of ammonium concentration with confidence intervals" />

These forecasts are the foundation of the rest of the thread. The uncertainty they carry is dissected in the [ROADEF 2025 analysis](/research/roadef25-uncertainty-mpc/), and they feed the stochastic dynamic programming controller studied at [CANUM 2026](/research/canum2026-stochastic-control/). The [PhD thesis](/research/phd-thesis-2025/) assembles the two steps, identification by data assimilation then stochastic control, into a single method.

Method, datasets and figures are in <a href="https://doi.org/10.1016/j.watres.2025.123673" target="_blank">the paper</a>. The <a href="https://github.com/vbertret/WWTP-DataAssimilation-ModelComparison" target="_blank">code</a> is open-source.

<em style="color: var(--muted); font-size: 0.9rem;">Joint work with Roman Le Goff Latimier and Valérie Monbet (Purecontrol, ENS Rennes / IETR, IRMAR).</em>
