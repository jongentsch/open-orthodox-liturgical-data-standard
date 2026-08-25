# Language, script, names, and transliteration

Status: Phase 2 review draft. These rules cover identity labels and short
language-bearing values, not full textual-edition markup.

## Language tagging

OOLDS uses well-formed BCP 47 language tags as defined by
[RFC 5646](https://www.rfc-editor.org/rfc/rfc5646). Script subtags draw from ISO
15924 through BCP 47. Normalized output uses canonical subtag casing and current
preferred registered subtags while retaining the source tag in import evidence
when it differed.

- Use `und` when the language is genuinely undetermined.
- Use `zxx` only for content with no linguistic content, not for an unknown
  ancient language.
- Include a script subtag when it distinguishes forms relevant to exchange,
  such as `cu-Cyrl`.
- Use registered variants where valid, such as polytonic Greek `el-polyton`.
- Do not invent private-use subtags for an orthography, recension, translator,
  or jurisdiction when an OOLDS vocabulary/context reference can identify it.

Language tags identify language varieties, not translations, editions,
ecclesiastical approval, or fallback order.

## Unicode policy

Canonical short strings use Unicode NFC, following
[Unicode Standard Annex #15](https://unicode.org/reports/tr15/). NFKC and NFKD
must not be applied to display or source text because compatibility
normalization can erase meaningful distinctions.

- Validators test NFC after parsing and after concatenating/building strings.
- Search indexes may create additional folded keys, but those keys are derived
  and never replace display text.
- Exact source bytes, decomposed forms, legacy encodings, and typography belong
  in an edition/asset when preservation matters.
- Normalization does not authorize modernizing spelling or replacing Church
  Slavonic characters with visually similar Russian characters.

## Name claims

A name is a typed claim, not a language-to-string map. Its payload can include:

| Component | Cardinality | Meaning |
|---|---:|---|
| target | exactly 1 | Entity, observance, work, vocabulary term, or another nameable anchor |
| text | exactly 1 | NFC Unicode string |
| language tag | exactly 1 | BCP 47, including `und` when necessary |
| name kind | exactly 1 | Vocabulary term such as full liturgical, short, personal, monastic, episcopal, geographic epithet, or abbreviation |
| grammatical features | 0..n | Terms from a declared grammar vocabulary |
| orthography/recension | 0..n | Identified contexts or expression relationships |
| transliteration relation | 0..1 | Source name claim plus scheme and responsible agent |
| related usage/preference claims | 0..n | Separate scoped claims such as preferred, accepted, historical, deprecated, or avoid |
| provenance | published: 1..n bases | Source/issuer evidence and validity |

Name kind and grammatical case are separate. “Short form” is not a grammatical
case; “genitive” is not an alias category.

## Preference

There is no anchor-level `preferred_name`. Preference is a claim scoped by
language, community/authority, use, and validity. Two jurisdictions can prefer
different English forms without either string becoming the canonical ontology
label.

For a simple pack, a name claim may explicitly reference a named context and
source profile so authors do not repeat provenance fields. Normalized output
expands them.

## Grammatical forms

Grammatical metadata uses versioned vocabulary terms rather than English field
names embedded in the core. A form may state features such as case, number,
gender, definiteness, or another language-specific category.

- Multiple features can qualify one string.
- Languages need not use the same feature inventory.
- The vocabulary identifies which feature combinations are valid for a
  language/profile.
- An application that does not understand a grammar vocabulary preserves the
  name and terms and may still display the string.

Ponomar's nominative/genitive forms demonstrate the practical need; OOLDS avoids
making that one grammar inventory universal.

## Transliteration

A transliteration is related to a particular source name/expression and records:

- transliteration scheme ID and version;
- source and resulting language/script tags;
- responsible agent or algorithm;
- activity/tool version for generated forms;
- any manual-review state;
- source name claim ID.

Two identical Latin strings produced under different schemes remain separately
attributable. An unschematized common spelling can be an ordinary name claim
with evidence; it must not pretend to be a deterministic transliteration.

## Orthography and recension

BCP 47 can express registered language/script/variant information but should not
be stretched into a full textual-history model. Named orthographies, historical
spellings, local conventions, and recensions use identified vocabulary terms or
expression relationships with sources and validity.

Church Slavonic corpus migrations and Greek publisher-specific expressions are
therefore modeled without inventing one canonical spelling.

## Fallback and display

Language fallback is consumer policy or an optional named profile, not a core
truth. A consumer may consider exact tag, registered tag relationships, pack
preferences, transliteration, or a configured fallback chain. It records the
policy when fallback affects reproducible output.

The core does not require English, select the first name in file order, or
automatically truncate subtags. If no suitable name is available, a UI may show
an opaque ID rather than silently choose a misleading language.

## Validation requirements

A future semantic validator should detect:

- ill-formed or deprecated-without-normalization BCP 47 tags;
- non-NFC canonical strings;
- script metadata inconsistent with the tag when both are present in an import;
- a transliteration missing scheme, source name, or responsibility;
- grammatical terms unavailable in the locked vocabulary;
- duplicate name claims from the same issuer/context/source that differ only by
  Unicode canonical equivalence;
- universal preference claims accidentally created by omitted context;
- empty strings or strings containing prohibited control characters.

It should not reject unfamiliar scripts, force Latin transliteration, or infer
that canonically equivalent Unicode strings prove two entities identical.

## Non-normative examples

| Purpose | Language | Additional semantics |
|---|---|---|
| Church Slavonic Cyrillic form | `cu-Cyrl` | grammar vocabulary + source edition |
| Polytonic Greek liturgical title | `el-polyton` | observance name kind + publisher context |
| English jurisdiction-preferred short title | `en` | short-name kind + scoped preference claim |
| Scholarly transliteration | resulting tag as appropriate | source name + transliteration scheme/version |

The examples describe structure only and do not establish preferred spellings.
