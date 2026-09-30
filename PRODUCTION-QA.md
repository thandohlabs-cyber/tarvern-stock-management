# Production QA Status

This release candidate preserves the approved Tavern Stock & Cash Management design.

## Security hardening completed
- Backend now refuses to start without a JWT secret of at least 32 characters.
- Login screen no longer contains a pre-filled administrator password.
- Production credentials remain external configuration and are not stored in the source package.

## Required acceptance testing before live use
1. Run database migrations and seed in an isolated environment.
2. Create/confirm the administrator account and immediately change its password.
3. Verify all three roles and POS assignments.
4. Verify stock period completion against known test quantities and prices.
5. Verify empty quantities and product-specific empty values.
6. Verify POS cash variance and card settlement variance.
7. Verify POS → Safe → Bank movement without double counting.
8. Verify period reconciliation against a controlled sample.
9. Verify closed POS days and stock periods cannot be changed without the approved authorization flow.
10. Verify audit entries for sensitive changes.
11. Run frontend and backend production builds in CI.
12. Configure HTTPS, database backups, secret management, monitoring and restore testing.

## Important
This package is a production candidate, not a claim that a live hosted service has been deployed. Real-money and real-stock use should begin only after the acceptance tests above pass in the target environment.
