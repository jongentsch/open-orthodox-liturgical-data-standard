# Decision 0008: use BCP 47, NFC, and scoped name claims

- Status: accepted for Phase 2 review
- Date: 2026-08-25

## Decision

Short language-bearing values use well-formed BCP 47 tags. Canonical interchange
strings use Unicode NFC; NFKC/NFKD are prohibited for source/display text.

Names are repeatable typed claims with language tag, name kind, optional
grammatical vocabulary terms, context, provenance, and validity. Preference is
a scoped usage claim, never one global preferred string.

Transliterations identify their source name/expression, scheme/version, and
responsible agent or algorithm. Orthography and recension use identified
vocabularies or expression relationships rather than improvised language tags.

## Rejected alternatives

- one string per language map;
- English canonical labels;
- a duplicate independent script field in normalized records;
- unsourced transliteration aliases;
- automatic NFKC or spelling modernization;
- mandatory core fallback order.

## Consequences

- Greek, Church Slavonic, Arabic, Georgian, and other scripts remain
  first-class.
- Language-specific grammar vocabularies can evolve without changing core.
- Exact source bytes remain edition/assets when NFC is not preservation.

