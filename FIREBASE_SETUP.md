# Firebase Firestore Integration - Complete Setup

## ✅ Database Collections Created

### 1. **`waitlist` Collection**
Stores users joining the DGS waitlist.

**Fields:**
- `email`: string - User's email address
- `modes`: array - Selected modes (Fast, Mid, Deep, Synthetic)
- `userType`: string - User category (General User, Professional Enterprise, Special)
- `specialIdentity`: string - Identity description if Special type selected
- `timestamp`: datetime - When the entry was created
- `status`: string - Current status (default: "pending")

**Example Document:**
```json
{
  "email": "user@example.com",
  "modes": ["Fast", "Mid"],
  "userType": "Professional Enterprise",
  "specialIdentity": null,
  "timestamp": "2026-02-27T10:30:00Z",
  "status": "pending"
}
```

---

### 2. **`research_inquiries` Collection**
Stores research collaboration requests.

**Fields:**
- `name`: string - Full name
- `institution`: string - University or research institution
- `role`: string - Job title or role (e.g., "Principal Investigator")
- `interest`: string - Description of research interest
- `timestamp`: datetime - When the inquiry was submitted
- `status`: string - Current status (default: "pending")

**Example Document:**
```json
{
  "name": "Dr. Chen",
  "institution": "MIT",
  "role": "Principal Investigator",
  "interest": "FLT3 synthesis methodology and validation approaches",
  "timestamp": "2026-02-27T10:32:15Z",
  "status": "pending"
}
```

---

### 3. **`enterprise_inquiries` Collection**
Stores enterprise/general contact inquiries.

**Fields:**
- `name`: string - Full name
- `organization`: string - Company or organization name
- `inquiryType`: string - Type of inquiry (General, Enterprise Access, Press, Other)
- `message`: string - Detailed message
- `timestamp`: datetime - When the inquiry was submitted
- `status`: string - Current status (default: "pending")

**Example Document:**
```json
{
  "name": "Sarah Johnson",
  "organization": "Tech Corp",
  "inquiryType": "Enterprise Access",
  "message": "We are interested in DGS for our platform",
  "timestamp": "2026-02-27T10:35:45Z",
  "status": "pending"
}
```

---

## 📝 API Endpoints

### POST `/api/waitlist`
Adds a new user to the waitlist.

**Request:**
```bash
curl -X POST http://localhost:3000/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "modes": ["Fast", "Mid"],
    "userType": "General User",
    "specialIdentity": null
  }'
```

**Response (201 Created):**
```json
{
  "success": true,
  "id": "document_id",
  "message": "Successfully added to waitlist"
}
```

---

### POST `/api/research-inquiry`
Submits a research collaboration inquiry.

**Request:**
```bash
curl -X POST http://localhost:3000/api/research-inquiry \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Dr. Chen",
    "institution": "MIT",
    "role": "Principal Investigator",
    "interest": "FLT3 synthesis research"
  }'
```

**Response (201 Created):**
```json
{
  "success": true,
  "id": "document_id",
  "message": "Research inquiry submitted successfully"
}
```

---

### POST `/api/enterprise-inquiry`
Submits an enterprise or general inquiry.

**Request:**
```bash
curl -X POST http://localhost:3000/api/enterprise-inquiry \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sarah Johnson",
    "organization": "Tech Corp",
    "inquiryType": "Enterprise Access",
    "message": "We are interested in DGS"
  }'
```

**Response (201 Created):**
```json
{
  "success": true,
  "id": "document_id",
  "message": "Enterprise inquiry submitted successfully"
}
```

---

## 🔐 Configuration

### Local Development
The application uses the Firebase Admin SDK JSON file (`reprog-web-firebase-adminsdk-fbsvc-c3c491f437.json`) for local development. This file is ignored by git and should remain on your local machine only.

### Production Deployment (Vercel)
On Vercel you **must** define each individual environment variable (do not upload the entire JSON file as a single variable). Set them under *Project Settings → Environment Variables*.

Fields required (see `.env.local.example`):

- `FIREBASE_TYPE`
- `FIREBASE_PROJECT_ID` *(must be set; triggers production code path)*
- `FIREBASE_PRIVATE_KEY_ID`
- `FIREBASE_PRIVATE_KEY` *(if copy/pasting from JSON, replace newlines with `\\n` or wrap the value in quotes). **Alternatively** you can set this variable to the base64‑encoded key and the library will decode it automatically, which avoids issues with multiline editing on Vercel.*
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_CLIENT_ID`
- `FIREBASE_AUTH_URI`
- `FIREBASE_TOKEN_URI`
- `FIREBASE_AUTH_PROVIDER_X509_CERT_URL`
- `FIREBASE_CLIENT_X509_CERT_URL`
- `FIREBASE_UNIVERSE_DOMAIN`

> **Important:** `FIREBASE_PROJECT_ID` must be non‑empty; if it’s missing or blank the build will fall back to the `require(...)` branch and fail because the JSON file isn’t present on Vercel.
>
> If you see an error pointing to line 24 of `firebase-admin.ts`, it means Vercel still didn’t have the project ID after importing your `.env` file. Double‑check the names and that no extra quotes were added.>
> **Private key errors:** if you see messages like "Failed to parse private key" or the client alert shows "Getting metadata from plugin failed…unsupported", then the value stored in `FIREBASE_PRIVATE_KEY` is malformed. Use the base64 alternative or carefully paste the exact PEM including `\n` escapes.
---

## 📂 File Structure

```
src/
├── lib/
│   └── firebase-admin.ts          # Firebase initialization
├── app/
│   ├── api/
│   │   ├── waitlist/
│   │   │   └── route.ts           # Waitlist API endpoint
│   │   ├── research-inquiry/
│   │   │   └── route.ts           # Research inquiry endpoint
│   │   └── enterprise-inquiry/
│   │       └── route.ts           # Enterprise inquiry endpoint
│   └── ...
└── components/
    ├── site/
    │   ├── waitlist/
    │   │   └── WaitlistForm.tsx    # Updated to use /api/waitlist
    │   └── contact/
    │       ├── ResearchForm.tsx    # Updated to use /api/research-inquiry
    │       └── EnterpriseForm.tsx  # Updated to use /api/enterprise-inquiry
    └── ...
```

---

## ✅ Testing Results

**All APIs tested and verified working:**

| Endpoint | Status | Response Code |
|----------|--------|---------------|
| POST /api/waitlist | ✅ Working | 201 Created |
| POST /api/enterprise-inquiry | ✅ Working | 201 Created |
| POST /api/research-inquiry | ✅ Working | 201 Created |

**Build Status:** ✅ Clean build with no errors

**Firestore:** ✅ Data successfully stored in all three collections

---

## 🚀 How It Works

1. **User submits form** on /waitlist, /research, or /contact pages
2. **Frontend validates** input fields (email, required fields, etc.)
3. **Fetch request sent** to appropriate `/api/*` endpoint
4. **Backend validates** data again for security
5. **Firestore document created** with timestamp and "pending" status
6. **User sees success message** - "You're on the list"
7. **Admin can review** all submissions in Firebase Firestore console

---

## 🔄 Data Management

### Viewing Submissions
All submissions are available in Firebase Firestore Console:
- Go to https://console.firebase.google.com/
- Select "reprog-web" project
- Navigate to Firestore Database
- Browse collections: `waitlist`, `research_inquiries`, `enterprise_inquiries`

### Updating Status
You can update the `status` field for each entry:
- `pending` - Initial state
- `reviewed` - Reviewed by team
- `approved` - Accepted
- `contacted` - Reached out to user

---

## 📊 Security Notes

- ✅ Firebase credential file excluded from git (added to .gitignore)
- ✅ API endpoints validate all inputs before saving
- ✅ Firestore security rules should be configured for production
- ✅ Environment variables used for production deployment
- ✅ No API key exposed in frontend code

---

## 🛠 Future Enhancements

- Add Firestore security rules
- Implement admin dashboard to manage submissions
- Add email notifications when new submissions arrive
- Create automated response emails
- Add data export functionality
- Implement approval workflow

---

## 📝 Git Commit

**Commit Hash:** `421337b`
**Message:** "Feat: Add Firebase Firestore integration for data persistence"
**Changes:** 
- Created Firebase admin service
- Added 3 new API endpoints
- Updated all form components
- Added environment configuration support
- 2,310 lines added, 62 lines removed

**Pushed to:** https://github.com/pranay68/remedics

---

**Setup Complete! All data is now being stored in Firebase Firestore.** 🎉
