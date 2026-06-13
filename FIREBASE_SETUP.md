# Firebase Firestore Integration

## Collections

### `waitlist`

Stores public waitlist submissions for recovery intake readiness.

Fields:

- `email`
- `caseIntent`
- `problemToSolve`
- `source`
- `timestamp`
- `status`

### `enterprise_inquiries`

Stores intake and general company inquiries.

Fields:

- `name`
- `organization`
- `inquiryType`
- `message`
- `timestamp`
- `status`

## API endpoints

### `POST /api/waitlist`

Accepts waitlist submissions from the public site.

### `POST /api/enterprise-inquiry`

Accepts contact and intake submissions from the public site.

## Notes

- Form submissions use Firestore through the Admin SDK.
- Production uses environment variables rather than a committed credential file.
- The removed research-specific intake path is no longer part of the active public site.
