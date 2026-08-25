# Contributing during the research phase

OOLDS is not yet accepting normative data or schema commitments. Contributions
should improve the evidence base, domain model, test cases, or project boundary.

No project or contribution license has been adopted. Before submitting
substantial copyrightable material, discuss licensing with the maintainers; a
public pull request must not be assumed to grant permission for a future OOLDS
license.

## Useful contributions

- a primary-source example that the current model cannot represent;
- documentation of an existing Orthodox calendar, lectionary, service, or text
  system, including exact files, API fields, versions, and rights signals;
- an adversarial case involving identity, observance, calendar, jurisdiction,
  language, rank, reading, provenance, or revision;
- a proposed correction to a prior-art finding with a stable source link;
- a compact model proposal that states its tradeoffs and which cases it solves.

## Evidence standard

Prefer official publications, specifications, repositories, schemas, and API
descriptions over summaries. Record:

1. the precise resource and version or commit inspected;
2. the access date;
3. the observed structure or behavior;
4. what conclusion follows and what does not follow;
5. the license or rights statement, if known.

Never copy a corpus merely because it is reachable. Small factual examples and
links are normally enough for model research. Flag uncertain permissions.

## Proposal format

A model proposal should include:

- problem statement and real examples;
- affected core concepts;
- alternatives considered;
- backward-compatibility and migration effects;
- offline and namespace behavior;
- provenance and rights implications;
- new or changed adversarial tests.

## Current review gate

The next gate is agreement on the conceptual model and Typikon boundary. Schema,
registry, and implementation pull requests should wait until that gate is
recorded in the roadmap. This avoids accidental standardization of the first
contributor's application model.
