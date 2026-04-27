# Real-Time Monitoring for SOL-2114

## Live Dashboard Links

### 1. **Resend Email Dashboard** (Primary)
**URL**: https://resend.com/emails
- **What to look for**: New emails to `noreply@3vo.ai` domain
- **Filter**: Domain = `noreply@3vo.ai`
- **Confirms**: Email delivery status "Delivered" ✅
- **Check frequency**: Real-time or hourly

### 2. **Supabase Waitlist Table** (Data)
**URL**: Your Supabase project → `email_waitlist` table
- **Query to monitor**:
```sql
SELECT email, campaign_id, created_at FROM email_waitlist 
WHERE campaign_id = 'tools'
ORDER BY created_at DESC;
```
- **What indicates milestone**: First non-internal email in this table
- **Ignore test emails**: Any with @3vo.ai, @test, localhost domains

### 3. **PostHog Analytics** (Conversion)
**URL**: Your PostHog project dashboard
- **Event to track**: `waitlist_submitted`
- **Property**: `email` (shows user email)
- **Confirms**: User action verified in analytics

### 4. **Google Analytics 4** (Traffic)
**URL**: Your GA4 property
- **Event to track**: `sign_up` (method = "waitlist")
- **Conversion**: Shows user funnel completion
- **Confirms**: User reached form and submitted

### 5. **Facebook Pixel** (Attribution)
- **Event**: `Lead` conversion event
- **Confirms**: User tracked for retargeting

---

## Real-Time Alerts Setup

### Email Notification (Resend)
Resend doesn't have native alerts, but you can:
1. Set up a webhook to your backend
2. Or manually check the dashboard daily

### Supabase Alerts
1. Go to Supabase dashboard
2. Set up database webhook on `email_waitlist` INSERT
3. Trigger notification to Slack/email when new row is added

### Google Sheets Auto-Tracker (Simple)
1. Create a Google Sheet
2. Connect to Supabase via Zapier/Make
3. Auto-append new emails
4. Set up Slack notification on new row

---

## Daily Check Routine

**Recommended**: Check once daily (morning)

1. **Open Resend dashboard** → Filter `noreply@3vo.ai`
   - Look for any emails with "Delivered" status
   - Check recipient email (is it a real user?)

2. **Run Supabase query** (above)
   - Verify email stored in database
   - Check timestamp matches delivery time

3. **Spot check PostHog**
   - Confirm `waitlist_submitted` event exists
   - Verify email property matches

---

## What to Look For (Red Flags vs Green Flags)

### 🟢 Green Flags (Milestone Achieved)
- ✅ Email appears in Resend with "Delivered" status
- ✅ Real user email (not test/internal domain)
- ✅ Stored in Supabase `email_waitlist` table
- ✅ PostHog event fires with user email
- ✅ GA4 `sign_up` event in conversion funnel

### 🔴 Red Flags (Check Implementation)
- ❌ No emails in Resend dashboard (check API key)
- ❌ Emails show "Failed" status (check domain validation)
- ❌ No events in PostHog (check tracking code)
- ❌ GA4 shows no `sign_up` events (check gtag implementation)
- ❌ Form doesn't submit (test at https://tools.3vo.ai)

---

## When Milestone Occurs

### Immediate Steps:
1. Document screenshot from Resend showing delivery
2. Note timestamp and recipient email
3. Verify in Supabase with query result
4. Post screenshot in SOL-2114 comments

### Completion Steps:
1. Use `VERIFICATION_CHECKLIST.md` to confirm all systems
2. Add comment to issue with evidence
3. Close SOL-2114 with ✅ Completed

---

## Contact Points

- **Resend Support**: https://resend.com/support
- **Supabase Docs**: https://supabase.com/docs
- **PostHog Docs**: https://posthog.com/docs
- **GA4 Support**: https://support.google.com/analytics

---

## Automation Options (If Manual Monitoring is Too Much)

### Option 1: Zapier/Make Workflow
1. Trigger: New row in Supabase `email_waitlist`
2. Filter: email NOT contains "@3vo.ai"
3. Action: Send Slack notification to #alerts

### Option 2: AWS Lambda + SNS
1. Lambda watches Supabase for inserts
2. SNS sends SMS/email alert to team
3. Triggers when campaign_id = 'tools'

### Option 3: Custom Webhook
1. Supabase sends webhook to your backend
2. Backend verifies real email
3. Posts to Slack channel #milestone-alerts

---

**Last Updated**: April 23, 2026  
**Status**: Monitoring Active  
**Next Action**: Daily check or set up automation
