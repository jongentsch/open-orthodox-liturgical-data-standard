# Vision

## The problem

Orthodox calendars and service applications repeatedly encode the same people,
feasts, readings, ranks, calendar rules, and names. Their records are rarely
portable because each application also embeds local assumptions: a particular
jurisdiction, calendar reckoning, language, rank scale, Bible versification,
Typikon, source corpus, and sometimes copyrighted prose.

The hard problem is not producing one more calendar feed. It is exchanging the
evidence and claims from which different calendars can be produced while
preserving real ecclesial and scholarly disagreement.

For example, one saint may have a repose commemoration, a translation-of-relics
commemoration, and a local synaxis. These are not duplicate people and they are
not interchangeable feast records. A rank or lection attached to one observance
may be authoritative only for a particular church, edition, place, or period.
A civil date is a projection of a liturgical rule through a calendar and year,
not necessarily the rule itself.

## Proposed mission

OOLDS will define a small, extensible, implementation-neutral way to exchange:

- persistent identities and explicit cross-system mappings;
- observances distinct from the subjects they commemorate;
- scoped, source-backed claims rather than unqualified universal facts;
- recurring date rules and lection appointments without embedding a complete
  rubrical engine;
- multilingual and multiscript names without treating English as canonical;
- works, expressions, editions, and assets with rights at the correct level;
- versioned, verifiable packs that work offline and compose predictably.

## Intended users

- Orthodox calendar, lectionary, service-planning, publishing, and chanting
  applications;
- dioceses, parishes, monasteries, seminaries, libraries, and archives;
- editors maintaining calendar, hagiographic, hymnographic, or scriptural data;
- researchers reconciling persons, observances, texts, manuscripts, and
  historical witnesses;
- collaborative research-corpus and digest platforms that publish attributable,
  reproducible selections without flattening disagreement;
- engine authors who need neutral inputs without adopting a single project's
  database model.

## Success for v0.1

Version 0.1 should be considered successful when two independently maintained
packs can be combined offline and a conforming tool can:

1. distinguish a person or other subject from each observance concerning it;
2. retain conflicting rank, date, naming, or lection claims with their scopes;
3. identify the calendar and paschalion assumptions of each date rule;
4. round-trip multilingual names, including Church Slavonic and polytonic
   Greek, without lossy normalization;
5. exchange ordered composite lections without bundling a Bible translation;
6. report where each material claim came from and what reuse rights apply;
7. detect namespace, dependency, checksum, and compatibility failures before
   resolution;
8. hand unresolved data to more than one Typikon engine without making either
   engine's service plan normative.

## Non-goals

OOLDS will not, in its core specification:

- define a universal Orthodox calendar, rank ladder, fasting code, or Typikon;
- declare one jurisdiction's practice the default for all consumers;
- settle disputed identity, historicity, reception, or ecclesial authority;
- assemble services or choose precedence when observances collide;
- provide a full hymnographic, hagiographic, musical, or biblical text format;
- redistribute source material whose permissions do not permit it;
- require network access, a central resolver, RDF storage, or a particular
  programming language;
- standardize user accounts, permissions, editorial workflow, moderation, or
  hosting policy;
- make application presentation objects into canonical domain records.

## Relationship to existing systems

OOLDS should be a translation boundary, not a replacement campaign. Ponomar,
Orthocal, Digital Chant Stand, Ispovednik, typikon-engine, and future systems
should be able to publish mappings or packs while retaining their native
models. Existing identifiers should remain visible as typed external
identifiers. No migration should require an editor to renumber a mature local
corpus.

## Long-term shape

The likely mature project is a family of small specifications rather than one
monolith:

- a core identity and assertion model;
- calendar-rule and lection extensions;
- text-catalog and fine-grained annotation profiles;
- an offline pack and lockfile format;
- validation rules and conformance fixtures;
- an optional publication profile for immutable research digests and
  reproducible combined outputs;
- optional registries and mappings maintained by communities with declared
  governance.

This shape remains a hypothesis until the domain model has passed the
adversarial cases and public review.
