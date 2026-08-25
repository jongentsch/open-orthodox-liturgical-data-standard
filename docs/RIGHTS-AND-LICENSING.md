# Rights and licensing direction

Status: adopted initial policy, 2026-08-24. This document explains the policy;
the actual grants are in the repository [LICENSE](../LICENSE) and canonical
legal texts under `LICENSES/`. This is not legal advice.

## Open source and a noncommercial mission

The project brief describes OOLDS as open source and noncommercial. Those ideas
can coexist as mission and governance, but not as a field-of-use restriction in
an open-source software license.

The [Open Source Definition](https://opensource.org/osd) requires free
redistribution and prohibits discrimination against fields of endeavor. The
[Open Source Initiative FAQ](https://opensource.org/faq) states directly that
open-source software may be used commercially. Similarly, Creative Commons
explains that an NC condition is [not a free-culture
license](https://creativecommons.org/public-domain/freeworks/).

Therefore:

- OOLDS can be nonprofit, volunteer-run, and explicitly in service to the
  Church;
- its governance can decline sponsorships or activities inconsistent with that
  mission;
- its name and ecclesial endorsement can be protected separately;
- but software called open source must use an OSI-approved license without a
  noncommercial-use restriction.

If prohibiting commercial use is a hard requirement, the project should call
that component source-available rather than open source. The working
recommendation is to preserve genuine openness and express noncommerciality as
project mission.

## Four independent licensing layers

| Layer | Examples | Required decision |
|---|---|---|
| Specification and documentation | normative prose, diagrams, examples | Documentation/content license and patent implications |
| Software and schemas | validator, pack tool, code-generated schemas | OSI-approved software license; contribution and patent policy |
| Original reference data | identifiers, mappings, claims, test fixtures | Open-data dedication/license and attribution practice |
| Third-party resources | translations, Bible text, icons, scans, music, publisher data | Resource-specific permission; often metadata/reference only |

A repository-level `LICENSE` must not be interpreted as relicensing imported
material that contributors do not own.

## Adopted project choices

- specification prose, documentation, diagrams, and authored examples:
  [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/);
- software, tooling, schemas, and machine-executable specification artifacts:
  Apache-2.0;
- original factual reference data and factual conformance fixtures explicitly
  marked as OOLDS reference data: CC0-1.0;
- authored descriptions, translations, and third-party resources: licensed and
  tracked separately; never presumed to be CC0.

The Apache-2.0 choice provides an explicit patent grant. CC BY preserves
attribution for specification authors. CC0 minimizes friction when combining
original factual reference data across independently maintained packs.

Creative Commons warns that its licenses and CC0 are irrevocable and may be
applied only by someone who owns or controls the rights. See its
[pre-licensing guidance](https://creativecommons.org/share-your-work/cclicenses/).

## Resource-level metadata

Every included or linked asset should have an effective rights record containing
as applicable:

- SPDX license expression;
- custom `LicenseRef` plus the exact rights statement and canonical URL;
- rights holder and required attribution;
- allowed redistribution, modification, translation, and commercial use;
- territorial or temporal limitation;
- public-domain determination and its basis;
- access restrictions;
- whether the pack includes content, metadata only, or an external reference;
- reviewer and review date.

`unknown` is a valid warning state, not a permissive license. A release profile
may prohibit bundling bytes whose rights remain unknown while allowing a
metadata-only record.

## Liturgical-content cautions

- Ancient underlying works may be public domain while a modern translation,
  edition, typography, notation, recording, or scan remains protected.
- A Bible passage reference is factual metadata; a modern Bible translation is
  a separate expression with separate rights.
- GOARCH Digital Chant Stand permits particular worship uses and retains
  contributor rights; it is not an open-data corpus. See the
  [DCS rights statement](https://digitalchantstand.goarch.org/goa/dcs/about.html).
- OCA pages credit multiple translators and monasteries. Public download does
  not answer every redistribution question.
- A GitHub code license may not cover fixtures imported from a publisher.
- Facts extracted manually still need source provenance even where copyright
  does not protect the fact itself.

## Repository implementation

The repository root `LICENSE` maps resource categories to the adopted licenses,
and `LICENSES/` contains their legal texts. Contributions use the applicable
category unless a different notice is explicitly accepted.

Before the first tagged data release, add machine-readable per-resource notices,
an exceptions/third-party inventory, and a validation rule that prevents
unlicensed included assets. License compatibility and database-rights questions
still require appropriate review when real corpora enter scope.
