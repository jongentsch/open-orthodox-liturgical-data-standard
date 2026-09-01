# OOLDS Research Alpha

This is a non-normative, rights-safe demonstration of the research-corpus and
collaborative-digest concepts described in
[`docs/RESEARCH-CORPUS-AND-DIGESTS.md`](../docs/RESEARCH-CORPUS-AND-DIGESTS.md).
It demonstrates product behavior without proposing a v0.1 wire format.

## Demonstrated concepts

- stable subject anchors separated from sourced, scoped claims;
- claim provenance, citations, and review states;
- searchable people, observance, and work records;
- a mutable team digest assembled from explicit claim selections;
- an immutable release boundary that excludes workspace-only state;
- downloadable illustrative release JSON; and
- composition that retains conflicting scoped claims instead of overwriting
  them.

All records, sources, citations, identifiers, hashes, collaborators, and
release histories in this app are fixtures. They are deliberately labeled as
illustrative and are not endorsed OOLDS data.

## Run with Docker

From this directory:

```shell
docker compose up --build
```

Open <http://localhost:3000>. Stop it with:

```shell
docker compose down
```

The container exposes `GET /health`, listens on `0.0.0.0`, and honors the
`PORT` environment variable.

## Run for development

Node.js 22 and pnpm 11.19 are expected.

```shell
pnpm install
pnpm dev
```

The Vite development server opens on <http://localhost:5173>. To exercise the
production server without Docker:

```shell
pnpm build
pnpm start
```

## Deploy on Railway

Create a service from this GitHub repository and set its Root Directory to
`/alpha`. Railway detects the `Dockerfile` at that source root. Enable public
networking and configure the healthcheck path as `/health`; no custom build or
start command is required. Railway supplies `PORT`, and the server binds to it.

Railway's current documentation recommends this detected-Dockerfile setup and
dashboard healthcheck for a service:

- [Dockerfiles](https://docs.railway.com/builds/dockerfiles)
- [Healthchecks](https://docs.railway.com/deployments/healthchecks)

No Railway project, credentials, or hosted service are encoded in this
repository.

## Deliberate alpha limits

The app has no authentication, database, multi-user synchronization, real
publication service, or normative schema. State is held in the browser and
resets on reload. Those omissions keep the alpha focused on testing whether the
concepts are understandable before implementation details become commitments.
