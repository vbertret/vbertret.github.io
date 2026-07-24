---
title: "Machine Learning and Stochastic Control for the Optimized Automatic Piloting of Industrial Systems"
description: "PhD thesis (Université de Rennes, 2025) - Machine learning and stochastic control for the energy-optimal, constraint-aware piloting of wastewater treatment plant aeration."
pubDate: "2025-12-19"
type: "thesis"
journal: "PhD Thesis · Université de Rennes (ENS Rennes / IRMAR / IETR / Purecontrol)"
hal: "https://hal.science/tel-05474552v1"
theses: "https://theses.fr/s361662"
---

My PhD thesis (French title: *« Apprentissage machine et contrôle stochastique pour un pilotage automatique optimisé des systèmes industriels »*), defended on **19 December 2025** at Campus de Beaulieu (Amphi Lebesgue, Université de Rennes), under a CIFRE fellowship between **Purecontrol**, the **IRMAR** mathematics lab and the **IETR / ENS Rennes**.

The thesis builds a single method for the energy-optimal control of wastewater treatment plant aeration, under discharge constraints and strong uncertainty on the incoming load. It is the synthesis of a line of work that runs from forecasting to estimation to uncertainty to control, with each step published on its own along the way.

- **Forecasting the load.** Aeration demand is driven by the incoming nitrogen load, which is uncertain. A comparison of white-, grey- and black-box forecasts, combined with data assimilation, settles which predictions are trustworthy enough to act on ([*Water Research*, 2025](/research/water-research-2025-ammonium/)).
- **Identifying a model.** A nonparametric local linear regression captures the reactor dynamics well, while staying light enough to control. It is cast as a stochastic state-space model and fitted with data assimilation. The grey-box estimation of a reduced ASM1 model by stochastic EM comes from the [ECC 2024 work](/research/ecc-ammonium-estimation/).
- **Locating the uncertainty.** Decomposing the sources shows that the load forecast dominates operating cost, while model error dominates constraint feasibility ([ROADEF 2025](/research/roadef25-uncertainty-mpc/)). This tells the controller what to plan for.
- **Controlling with it.** That model feeds a stochastic dynamic programming controller that decides aeration while planning for the uncertain load, rather than betting on a single forecast (developed further in the [CANUM 2026 talk](/research/canum2026-stochastic-control/)). On the public BSM2 benchmark this cut the daily aeration cost by about 15% against a standard rule-based controller, with no discharge-limit violations.

The chapters follow this order, from forecasting through estimation and uncertainty analysis to the stochastic controller. The manuscript and the jury details are below.

### Jury

<ul>
    <li><strong>Jérôme Fehrenbach</strong> (Université de Toulouse), rapporteur</li>
    <li><strong>Guillaume Sandou</strong> (CentraleSupélec), rapporteur</li>
    <li><strong>Pierre Tandeo</strong> (IMT Atlantique), examinateur</li>
    <li><strong>Georges Kariniotakis</strong> (Mines Paris – PSL), examinateur</li>
    <li><strong>Valérie Monbet</strong> (Université de Rennes), directrice de thèse</li>
    <li><strong>Roman Le Goff Latimier</strong> (ENS Rennes), co-encadrant</li>
    <li><strong>Gautier Avril</strong> (Purecontrol), encadrant entreprise</li>
</ul>

The full manuscript is on <a href="https://hal.science/tel-05474552v1" target="_blank">HAL</a>, with the official record on <a href="https://theses.fr/s361662" target="_blank">theses.fr</a>.
