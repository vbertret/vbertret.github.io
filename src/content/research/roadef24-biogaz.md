---
title: "Optimization of a biogas upgrading unit's operation"
description: "ROADEF 2024 - Energy optimization of a biogas upgrading unit using Model Predictive Control and MILP, validated on a real anaerobic digestion site."
pubDate: "2024-03-05"
type: "proceeding"
event: "25th ROADEF Congress"
hal: "https://hal.science/hal-04521215v1"
---

*The original paper, slides and figures are in French.*

Presented at the 25th congress of the French OR society (ROADEF 2024), in Amiens. It optimizes the operation of a biogas upgrading unit on a real anaerobic digestion site, run with Nevezus as part of the Biogaz-IA project.

A digester produces biogas, stored in a gas holder and then purified by an upgrading unit before injection into the gas grid as biomethane. The upgrading step is energy-intensive, and its profitability follows the day/night electricity price. The controller decides when to run the unit and at what flow rate, to maximise biomethane revenue while cutting the energy bill.

The problem is a mixed-integer linear program: operational constraints (minimum run times, start-up penalties, gas-holder dynamics) as linear constraints, biogas production smoothed with a rolling median. It runs in a receding-horizon loop (3-day horizon, 10-minute steps, re-solved with HiGHS and SCIP).

<img src="/images/biogaz-schema.png" alt="Anaerobic digestion and biogas upgrading process" />

This is the applied, MILP-based sibling of my [wastewater aeration control work](/research/phd-thesis-2025/). The goal is the same, optimal control of a real industrial process, reached here through mixed-integer programming rather than stochastic control. The modelling methodology behind the formulation is detailed in the [GDR RO&D 2024 talk](/research/gdr-rod-2024-milp-ocp/).

### Result

Six weeks of the site's usual local control against six weeks of the optimizer. The controller held the gas holder at a higher average level (49% of capacity versus 39%) and cut the upgrading unit's operating cost by about 9%, without extra start-ups.

The full communication (French, *"Optimisation du fonctionnement d'un épurateur pour la méthanisation"*) is on <a href="https://hal.science/hal-04521215v1" target="_blank">HAL</a>.

### Slides

<iframe src="/pdfs/Presentation_ROADEF_2024.pdf" class="pdf-embed"></iframe>

<p style="text-align: center;"><a href="/pdfs/Presentation_ROADEF_2024.pdf" target="_blank">Open slides in full screen</a></p>

<em style="color: var(--muted); font-size: 0.9rem;">Joint work with Arnaud Tournier (Purecontrol, IRMAR / SATIE), with Nevezus (Biogaz-IA).</em>
