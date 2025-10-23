# Ingenie Technologies Website

This repository contains a multi-page marketing site for Ingenie Technologies, highlighting IT consulting and digital transformation services.

## Getting started

Open `index.html` in your preferred browser to explore the experience.

## Creating a distributable archive

If you need a single archive of the static site for transfer or deployment, generate it locally instead of committing the binary
to version control:

```bash
zip -r ingenie-site.zip . -x '.git/*'
```

This command bundles every HTML, CSS, and JS file while excluding Git metadata so the resulting zip can be uploaded to your
hosting provider.

### Available pages

- `index.html` – Home overview with hero messaging, services highlights, case studies, and contact CTA.
- `services.html` – Detailed breakdown of Ingenie's advisory, engineering, and managed service offerings.
- `industries.html` – Industry-specific capabilities and impact stories across financial services, healthcare, energy, and retail.
- `case-studies.html` – Featured client success stories, metrics, and testimonials.
- `approach.html` – Delivery methodology, guiding principles, and acceleration assets.
- `insights.html` – Thought leadership library with reports, playbooks, webinars, and more.
- `contact.html` – Global contact information, inquiry form, and specialist outreach options.
- `privacy.html`, `terms.html`, `accessibility.html` – Policy pages covering compliance and inclusivity commitments.
