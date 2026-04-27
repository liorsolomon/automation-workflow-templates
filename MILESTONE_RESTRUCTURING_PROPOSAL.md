# Milestone Tracking Restructuring Proposal
## From Vague to Product-Specific

**Issue**: SOL-2114 is too vague and applies to multiple products  
**Recommendation**: Create product-specific milestone issues with clear success criteria  
**Date**: April 24, 2026

---

## Current Problem

**SOL-2114: "First email sent from a real user"**
- ❌ Unclear which product
- ❌ No specific success criteria
- ❌ Confusing when events occur from different products
- ❌ Difficult to track per product

---

## Proposed Solution: Product-Specific Milestones

### For tools.3vo.ai (automation-workflow-templates)

**New Issue**: SOL-2114-TOOLS  
**Title**: "First real user joins tools.3vo.ai waitlist and receives confirmation"

**Success Criteria**:
- [ ] Real user (non-internal email) submits waitlist form at tools.3vo.ai
- [ ] User receives email with subject: "Smart move — your automation shortcut is almost ready ⚡"
- [ ] Email is logged as "Delivered" in Resend dashboard
- [ ] User email appears in Supabase `email_waitlist` table with `campaign_id='tools'`
- [ ] PostHog event `waitlist_submitted` fires with user email
- [ ] Evidence documented with screenshot from Resend/Supabase

**Owner**: CMO / Product team for tools.3vo.ai  
**Tracking**: MONITORING_GUIDE.md + daily checks

---

### For ai-prompt-packs

**New Issue**: SOL-2114-PACKS  
**Title**: "First real customer purchases from ai-prompt-packs"

**Success Criteria**:
- [ ] Real user (non-internal) makes a purchase through Stripe
- [ ] Payment is processed successfully
- [ ] Customer email confirms purchase
- [ ] Order appears in Stripe dashboard
- [ ] GA4 event `purchase` fires
- [ ] Evidence: Stripe receipt screenshot

**Owner**: CMO / Product team for ai-prompt-packs  
**Tracking**: Stripe dashboard + GA4 conversion tracking

---

### For 3vo-ai (Main Site)

**New Issue**: SOL-2114-FEEDBACK  
**Title**: "First user receives confirmation when submitting feedback/idea to 3vo.ai"

**Success Criteria**:
- [ ] Real user submits idea/feedback through 3vo-ai contact form
- [ ] User receives automated confirmation email
- [ ] Confirmation includes: thank you message + what to expect next
- [ ] User submission stored in database
- [ ] GA4 event `form_submit` fires
- [ ] Example: fehr948@gmail.com submitted idea on April 21

**Owner**: Product team / Customer success  
**Tracking**: Contact form logs + email delivery

---

## Key Improvements

### Clarity
| Current | Proposed |
|---------|----------|
| "First email sent from a real user" | "First tools.3vo.ai waitlist user confirms email" |
| Vague success criteria | Specific: Subject line, Supabase row, Resend status |
| Multiple products conflated | One issue per product |

### Tracking
| Current | Proposed |
|---------|----------|
| Monitor everything | Monitor specific criteria per product |
| Unclear which email counts | Clear: Must be from specific product/form |
| Manual investigation | Automated verification procedures |

### Accountability
| Current | Proposed |
|---------|----------|
| No clear owner | Product-specific owners |
| No deadline | Can set timeline per product |
| Vague scope | Specific, measurable outcomes |

---

## Action Items

### To Implement

1. **Create three new issues**:
   - SOL-2114-TOOLS (tools.3vo.ai waitlist milestone)
   - SOL-2114-PACKS (ai-prompt-packs purchase milestone)
   - SOL-2114-FEEDBACK (3vo-ai feedback confirmation milestone)

2. **For each issue**:
   - Assign to product-specific owner
   - Copy success criteria from sections above
   - Link to relevant monitoring/verification docs
   - Set baseline status ("not yet achieved")

3. **For tools.3vo.ai specifically**:
   - Use documentation already created:
     - README_SOL_2114.md
     - MONITORING_GUIDE.md
     - VERIFICATION_CHECKLIST.md
   - Owner monitors daily or sets automated alert

4. **Close or repurpose SOL-2114**:
   - Option A: Close as "superseded by product-specific issues"
   - Option B: Keep as meta-issue tracking all three
   - Recommendation: Option A (cleaner)

---

## Example: What SOL-2114-TOOLS Should Look Like

```markdown
# SOL-2114-TOOLS: First Real User Joins tools.3vo.ai Waitlist

## Mission
Confirm that the first real (non-internal) user has joined the 
tools.3vo.ai automation templates waitlist and received the 
confirmation email successfully.

## Success Criteria
- [ ] Real user submits email via tools.3vo.ai waitlist form
- [ ] Email is non-internal (not @3vo.ai, not test domain)
- [ ] User receives confirmation email with subject: 
      "Smart move — your automation shortcut is almost ready ⚡"
- [ ] Resend dashboard shows email status: "Delivered"
- [ ] Supabase email_waitlist table contains row with:
      - email: [user email]
      - campaign_id: 'tools'
      - created_at: [timestamp of signup]
- [ ] PostHog shows waitlist_submitted event
- [ ] GA4 shows sign_up conversion event

## Verification Procedure
See: VERIFICATION_CHECKLIST.md

## Monitoring
See: MONITORING_GUIDE.md
Daily check: 30 seconds
Automated alert: Zapier/webhook option available

## Owner
CMO / Product Lead for tools.3vo.ai

## Status
⏳ Awaiting first real user signup

## Timeline
Started: April 19, 2026
Infrastructure ready: April 23, 2026
Awaiting: [TBD - depends on traffic]
```

---

## Benefits of This Approach

1. **Clarity**: Each product has one clear milestone
2. **Accountability**: Clear owner for each
3. **Measurability**: Specific success criteria
4. **Trackability**: Product-specific metrics
5. **Scalability**: Easy to add more products
6. **Documentation**: Reusable for future products

---

## Recommendation

✅ **Implement immediately**:
1. Create SOL-2114-TOOLS with tools.3vo.ai documentation
2. Create SOL-2114-PACKS placeholder
3. Create SOL-2114-FEEDBACK placeholder
4. Close or repurpose original SOL-2114

This transforms vague tracking into clear, product-specific milestones.

---

**Next Step**: Product leads should confirm ownership and timeline for each milestone.
