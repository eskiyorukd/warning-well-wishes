

## Contractor Warning Page - Neto Remodeling

Build a professional, review-style warning page using the uploaded contractor photo and company logo.

### What will be built

**1. Header** - Red warning banner with "Warning: My Experience with Neto Remodeling" headline and the company logo.

**2. Contractor Profile Card** - Displays the uploaded contractor photo, company name, and services they advertise (flooring, painting, drywall, remodeling).

**3. My Experience Section** - Brief, factual summary: $3,000 paid, work not completed, no refund, only responds to texts, repeated empty promises.

**4. Evidence Gallery** - Image grid section with placeholder slots for uploading screenshots of text messages, receipts, or other documentation. The two uploaded images will be placed here as well.

**5. Report and Take Action** - Links to:
  - Better Business Bureau (BBB)
  - Federal Trade Commission (FTC)
  - State Attorney General consumer protection
  - Social sharing buttons (Facebook, X/Twitter, Nextdoor)

**6. Footer** - Disclaimer stating this is a personal experience, plus the date.

### Design
- Red/dark color scheme to signal warning and caution
- Clean, credible typography
- Mobile-responsive layout
- Card-based sections for readability

### Technical Details

- Update `src/index.css` with red-accented warning color variables
- Create `src/pages/Index.tsx` as the single-page warning site with all sections
- Create helper components:
  - `src/components/WarningHeader.tsx` - top banner with logo
  - `src/components/ContractorProfile.tsx` - photo and company info card
  - `src/components/ExperienceSummary.tsx` - the story section
  - `src/components/EvidenceGallery.tsx` - image gallery for screenshots
  - `src/components/ReportSection.tsx` - reporting links and social share buttons
  - `src/components/WarningFooter.tsx` - disclaimer and date
- Use the uploaded images directly via their paths for the logo and contractor photo
- No backend or database needed - purely static content

