---
title: "Data assimilation for prediction of ammonium in WWTP: from physical to data driven models"
description: "JSTAR 2025 - Invited talk presenting the data assimilation approach behind my Water Research paper, for a statistics audience."
pubDate: "2025-03-28"
type: "talk"
event: "JSTAR 2025 (Journées STAR, Rennes)"
doi: "https://doi.org/10.1016/j.watres.2025.123673"
code: "https://github.com/vbertret/WWTP-DataAssimilation-ModelComparison"
---

An invited talk at JSTAR 2025 (Journées STAR, the Rennes statistics days). It presents the methodology behind my *Water Research* paper to an audience of statisticians.

The problem is forecasting the ammonium ($NH_4^+$) concentration in the aeration tank a few hours ahead. A plant removes ammonium by aeration, its largest energy cost, so aerating efficiently means anticipating the concentration rather than reacting to it. That is what model-based control does, and it needs a forecast of the concentration a few hours ahead.

The talk frames this as a state-space estimation problem and walks through a spectrum of candidate models: white-box physics (ASM1), grey-box reductions that keep only the useful dynamics, and black-box data-driven models. Each is coupled with sequential data assimilation, from Kalman-type filters to particle filters, so that incoming sensor measurements keep correcting the hidden state. The comparison looks at point accuracy and at the calibration of the prediction intervals over the horizon.

On the simulated benchmark, a nonparametric black-box model (local linear regression with a particle filter) came out ahead, with the grey-box behind it and the physical model last. The statistical reading is that a parsimonious model with data assimilation beats both pure physics and pure data.

The grey-box estimation itself, a stochastic EM scheme on a reduced ASM1, is the subject of the [ECC 2024 paper](/research/ecc-ammonium-estimation/). The full method, datasets and results are in <a href="https://doi.org/10.1016/j.watres.2025.123673" target="_blank">the journal article</a>, and the <a href="https://github.com/vbertret/WWTP-DataAssimilation-ModelComparison" target="_blank">code</a> is open-source. These forecasts feed the stochastic control work that follows.

### Slides

<iframe src="/pdfs/Présentation_JSTAR_2025.pdf" class="pdf-embed"></iframe>

<p style="text-align: center;"><a href="/pdfs/Présentation_JSTAR_2025.pdf" target="_blank">Open slides in full screen</a></p>

<em style="color: var(--muted); font-size: 0.9rem;">Joint work with Roman Le Goff Latimier and Valérie Monbet (Purecontrol, ENS Rennes / IETR, IRMAR).</em>
