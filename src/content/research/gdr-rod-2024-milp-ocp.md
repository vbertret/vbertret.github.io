---
title: "Lessons Learned from Solving Data-Driven Optimal Control Problems as MILPs"
description: "GDR RO&D 2024 - Industry talk on casting data-driven optimal control problems as mixed-integer linear programs."
pubDate: "2024-10-02"
type: "talk"
event: "GDR RO&D, Journée industrielle"
---

*The talk was given in French.*

An industry talk at a GDR RO&D (CNRS Operations Research) industrial day, in October 2024. A feedback session on turning real optimal control problems into mixed-integer linear programs at Purecontrol, when the system dynamics come from data rather than clean analytical models.

It works through the modelling choices that rarely make it into papers: what to make a decision variable, what to keep as a constraint, how to reach a MILP a solver can handle in production time. The biogas upgrading case is the running example. It is the formulation know-how behind the [ROADEF 2024 application](/research/roadef24-biogaz/), where the same problem (MPC over a MILP) cut the upgrading unit's operating cost by about 9%. The talk also presents pureSolve, the in-house library we use to build and deploy these models.

The tooling is not specific to energy. The same optimal-control formulation underlies my [wastewater aeration control](/research/water-research-2025-ammonium/) and the rest of the industrial control work across water and energy.

<img src="/images/biogaz-schema.png" alt="Anaerobic digestion and biogas upgrading process" />

*Slides are not shared publicly for this talk.*

<em style="color: var(--muted); font-size: 0.9rem;">Joint work with François Gauthier-Clerc (Purecontrol).</em>
