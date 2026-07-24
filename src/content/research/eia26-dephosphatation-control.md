---
title: "Contrôleur prédictif par apprentissage machine pour la déphosphatation sans capteur en ligne : application et validation en conditions opérationnelles"
description: "Congrès Eau & IA 2026 (SHF, Grenoble). A hybrid ML and data-assimilation predictive controller for phosphorus removal without an online sensor, cutting ferric chloride use by 45% on two full-scale plants."
pubDate: "2026-03-01"
type: "proceeding"
event: "Congrès Eau & Intelligence Artificielle 2026 (SHF)"
hal: "https://hal.science/hal-05672834"
---

Presented at the Congrès Eau & Intelligence Artificielle 2026 (SHF, Grenoble), joint work between Purecontrol and Veolia on the predictive control of phosphorus removal in wastewater treatment plants. Phosphorus is hard to pilot. Conventional strategies react to concentration spikes by dosing more ferric chloride, often too late, which risks breaching the discharge limit, or too much, which wastes reagent and produces extra sludge.

The controller forecasts the phosphorus concentration and pilots the dosing in real time from that forecast. It combines process physics, machine learning and data assimilation. No continuous phosphorus analyser is required: the method reads the sensors plants already carry (ORP, dissolved oxygen) and recalibrates periodically on manual lab readings. This suits the small and medium plants that make up most of the fleet, where an online phosphorus sensor cannot be justified.

The design carries over the forecast-then-control methodology I developed for nitrogen aeration (see the [Water Research paper](/research/water-research-2025-ammonium/), the [ECC 2024 estimation work](/research/ecc-ammonium-estimation/) and the [thesis](/research/phd-thesis-2025/)). Nitrogen relied on a parsimonious grey-box or data-driven model corrected by sequential filtering to forecast ammonium, then a controller acting on that forecast. Phosphorus reuses the same hybrid, sensor-light structure on a different pollutant and a different reagent.

Deployed on two French urban plants since 2024, it cuts ferric chloride use by about 45% on average versus conventional control, within discharge limits, by anticipating phosphorus swings instead of reacting to them.

The abstract is on <a href="https://hal.science/hal-05672834" target="_blank">HAL</a>.

<em style="color: var(--muted); font-size: 0.9rem;">Joint work with Nader Moatamri (Veolia Eau).</em>
