# Rights and licensing direction

Status: research-stage policy and decision agenda, not legal advice and not a
license grant.

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

## Candidate project choices

These are options for legal review, not adopted decisions:

- specification prose: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
  for explicit attribution, or CC0 where maximum specification reuse is more
  important than required credit;
- software/tooling: Apache-2.0 for an explicit patent grant, or MIT for maximum
  simplicity;
- schemas and tiny original examples: align with the software license, or dual
  license/dedicate where that reduces reuse ambiguity;
- original factual reference data: CC0 is the strongest interoperability
  candidate where contributors control the relevant rights and database rights;
- authored descriptions or translations: license separately; never assume CC0
  is appropriate.

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

## Immediate repository state

No license has been selected, so no file in this repository currently grants
reuse rights. The next human governance decision should select licenses before
accepting substantial outside contributions or publishing a tagged release.
After selection, add explicit headers/notices for exceptions and a machine-
readable third-party notices inventory.

