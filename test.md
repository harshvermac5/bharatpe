

# NACH/Excess EDI Refund SOP for Active Loans | All Lenders

- **Loan is ACTIVE**: Excess NACH amount will be adjusted in upcoming EDIs.
- **Loan is CLOSED**: Excess NACH amount will be refunded.

**NOTE**: Inform the merchant in case of any excess NACH deduction. The merchant should avoid paying manually and can maintain the balance in the BP account so that the excess amount gets adjusted first.

---

# Charge N Earn | DTH Recharges Live

We have made DTH recharge live under the **Charge and Earn** section. Handling remains the same as per the Mobile Recharge process.

---

# New Rule Addition | BharatPe TMS

### Handling PAN Requirement for TMS Scenarios
- **Onboarded on or before 26th Oct’23**: PAN is mandatory for merchants who were onboarded before October 26th, 2023. It will also be required in cases where the Standard Operating Procedure (SOP) specifies that PAN is mandatory, regardless of the onboarding date. Please adhere to this on all required calls – It’s a mandate.

---

# Tagging Update | Cashback Not Received

Now onwards, **Cashback Not Received** - T3 should be used only for NFTR cases, i.e., when the merchant was eligible for cashback and met the minimum transaction requirements, but the cashback was still not credited.

For FTR cases (where the merchant is not eligible), please use the below tagging:
- **T1**: BharatPe Speaker
- **T2**: Speaker Active
- **T3**: Ineligible For Speaker Cashback
- **Status**: Resolved

**NOTE**: Agents will also have to capture the reason for ineligibility by selecting the appropriate dropdown in the field "Reason For Ineligibility" on FD.

---

# QC Charges Information | Service Request Scenarios

We need to educate merchants about the QC charges applied for replacing the speakers. Charges will only apply in the case of physical damage to the speaker or if any component is missing.

### Script to be Used:
"Please ensure that the speaker is undamaged and that all components, including the charger and SIM card, are included while doing the handover of the device to the courier partner. This will help avoid any charges during the quality checks."

---

# Important Updates

### Internal Enquiry Threshold Amount
Transactions blocked under Internal Inquiry with an amount greater than Rs. 25,000 can only be unlocked upon submission of a valid invoice (Mandate). Please process such calls accordingly.

### Bank/Cyber Crime Denying for Clearance Letter
In cases where the Bank/Cyber Crime Team is denying to issue a clearance letter, experts need to advise the merchant to coordinate with the relevant source and obtain a clearance letter. If the merchant claims to have already contacted the police and sent an email, please request a copy of the email that was shared with the police and also with us.

### BharatPe Bluetooth Speaker Launch
We have launched the BharatPe Bluetooth Speaker for selected 45 merchants. Visibility will be live in the Speaker Section for those who purchase the same. Currently, we are offering a promotional price of **₹5** for these 45 merchants.

**NOTE**: Monthly charges and cashback applicability will be the same as existing plans. Detailed FAQs have been uploaded in the Docs section – please refer to the same.

#### Features & Benefits
1. Real-time audio alert of transactions
2. Bluetooth audio streaming
3. USB Type-C support
4. Indigenous manufacturer
5. Instant audio payment confirmation
6. Available in 10 regional languages
7. 3-day battery backup with 5-6 hours of single charge
8. Connects to SIM, no Wi-Fi required
9. Replay your last transaction
10. Free lifetime replacement

#### Bluetooth Speaker Troubleshooting Steps
- Low battery indicator is next to the charging port; if it starts blinking red, the device needs to be charged.
- If a SIM is inserted incorrectly, push the SIM inward as we do in mobile phones to remove it. Do not use excessive force.
- The speaker needs to be charged for at least 5 to 6 hours for full battery backup.
- If the device is deeply discharged, a minimum of 20-30 minutes charging is required to switch the device on.
- Phone calls will not work on this speaker. However, if the Bluetooth music is connected and the merchant is receiving a call, both the caller's and receiver's voices will be audible in the speaker.
- When the speaker is hanging and not responding, there is a “RESET” button at the bottom of the device. Insert a pin in the reset slot and hold it for 5 seconds.

#### Switch On & Shutdown
- To switch on the device, press the power key button for about 3 seconds. Once booting is successful, the indicator light will blink; then release the power button.
- To shut down the device, press the power key button for more than 3 seconds and then release the power button to confirm the shutdown.

#### Bluetooth
- When the device is switched on, press the Bluetooth button to switch on or off Bluetooth.
- While pairing, the LED light will flash green; once pairing is complete, the blue light will flash.

---

# Important Update | RTE Program

### Eligible and Enrolled for CRM

#### Eligible (New Merchant)
These merchants are eligible for the RTE Program. The agent will have to ask these merchants to enroll in the Route to Eligibility Programme:
- Banner on CRM: "You are eligible for the RTE program for 60 days; kindly enroll by clicking on the banner visible under the loan section."

#### Eligible (Existing Merchant)
This is the list of existing merchants eligible for the RTE Programme. The agent will have to push these merchants to enroll:
- Banner on CRM: "You are eligible for the RTE program for 30 days; kindly enroll by clicking on the banner visible under the loan section."

### Feature of RTE Program
This program increases the chances of getting a loan if you follow it throughout its duration:
- For new merchants: 60 days
- For existing merchants: 30 days

---

# Important Update | Mandatory Fields - Info Status of Application

It’s mandatory to capture **Loan Id** and **Date of Issue** for all cases tagged under the Info-status of Application. 

**NOTE**: Date of Issue in this case will be the agreement date mentioned on CRM. If the agreement date is not available, agents can capture the application date.

---

# Important Update | Swipe/BharatPe One Related

We have revised the handling for multiple Swipe/BharatPe One – Not working T3s, where we don’t have to mark the case as Proof Required. We need to follow the existing troubleshooting. If no resolution is found, escalate the case to L2.

**NOTE**: It is mandatory to validate and capture the **Device Serial No.** for each case in FD.

---

# Important Update | e-NACH Applicability

e-NACH will be present in the Merchant Bank Account at the EOD of the 3rd consecutive missed EDIs. Please ask the merchant to maintain the required balance in their bank account to avoid e-NACH bounce charges from the bank and BharatPe end.

---

# Important Update | Wrong Penalty Charges

There are a few merchants whose penalties were wrongly imposed. We will refund the charged amount when the merchant raises a complaint.

### Scenario:
When a merchant claims BharatPe has wrongly charged the penalty:
- **If the banner is visible on CRM**: The agent will tell the merchant not to worry; the team will validate and refund the extra charges.
- **L1 Handling**: Will escalate the case to L2 with FD TAT.
- **L2 Handling**: L2 will “Escalate to Post Loan,” no validation needed.

**If the banner is not visible on CRM**: 
- The agent will validate the case as per the current process.
  - **Penalty levied wrongly**: Escalate along with all details.
  - **Penalty levied correctly**: Convey the info to the merchant & Status: Resolved.

**We have added a banner on CRM - "Wrong Penalty Cases" for identification of such cases.**

### Below Fields Need to be Captured on Each Case:
- Amount
- NACH Applied Date

**NOTE**: While entering the "Amount," ensure the expert does not mention "0" in that column.

### Tagging to be Used:
- **T1**: Lending
- **T2**: Active Loan
- **T3**: Enquiry about Penalty Charges/Wrong Penalty Charges
- **Status**: Resolved/Escalate to L2 or Escalate to Post Loan

---

# Important Update | TMS Document Upload Via App

We are live with the Document Upload process via BharatPe App for TMS Block/Hold cases. We do not share the proof required link hereon to upload any TMS documents.

### Below is the Process to Upload the Applicable Docs or Self Declaration from App:
1. Go to Hamburger Menu
2. Go to 24*7 Support
3. Click on the “Action Required Banner”
4. Upload the required documents from the Upload option & Submit

**TAT**: Post receiving the documents, our team will update you within 24-48 hours.

**NOTE**: Required documents list and self-declaration sample will be available on the Upload section in BharatPe App only. It is mandatory to inform the 10 MB limit while uploading the documents.

“Merchant will also receive the below text message with the upload link, which takes them to the BP App, and they can upload the docs from there as well.”

### Tagging to be Used:
- **T1**: Hold/Block
- **T2**: Account Hold or Account Block
- **T3**: Settlement Status - Hold or Settlement Status - Block
- **Status**: Resolved

### Scenario 2: Cases Where Merchant Faces Any Tech Issue While Uploading Documents
We will ask for the error video in below tagging:
- **T1**: Hold/Block
- **T2**: Account Hold or Account Block
- **T3**: Issue while Uploading Documents
- **Status**: Proof Required

---

# Important Update | BharatPe One Tagging Addition

We have added a few taggings under BharatPe One and BharatSwipe. Below are the list along with use case. Please tag the relevant cases accordingly.

---

# Important Update | New TMS Rule Addition

A new TMS rule has been incorporated with the name **tms_online_QR_suspicious**, wherein BharatPe QR is being used on online websites. 

**NOTE**: This is a restricted rule (Permanent Block), and hence the funds will be settled to the merchant's registered bank account after 90 days.

### Info to Share with Merchant:
"We have discontinued our services in your area."

---

# Important Update | ABFL Penalty Waiver Related

ABFL went live with the penalty charges on 1st Sept'24. The penalty will be imposed on the 30th of every month. As of now, we have not started this at our end; therefore, ABFL will waive off the penalty amount. The waiver will be processed within 7 working days of penalty deduction, i.e., 30th of every month, and the relevant entry of charges and given waiver will be available in the merchant's SOA (Bank Account Statement).

### FTR Handling:
If a merchant comes within 7 working days of penalty deduction, the agent will tell the merchant about the waiver as mentioned above.

### NFTR Handling:
If the merchant comes after 7 working days of penalty deduction:
- **L1 Agent** will ask the merchant to share the SOA (Bank Account Statement) to validate the penalty and waiver details.

### New Tagging:
**(FTR)**
- **T1**: Lending
- **T2**: Active Loan
- **T3**: ABFL Penalty Charges within TAT
- **Status**: Resolved

**(NFTR)**
- **T1**: Lending
- **T2**: Active Loan
- **T3**: ABFL Penalty Charges not waived off
- **Status**: Proof Required

### L2 Handling:
L2 will validate the SOA, and if not waived off, they will "Escalate to Post Loan" along with proof. [SOA is mandatory]

**SPOC for L2/NET**: Kavita Raval [kavita.ravat@bharatpemoney.com]

---

# Important Update | Auto Pay e-NACH Enabled

Auto Pay e-NACH options have been enabled for merchants who have applied for loan amounts less than ₹50,000. On the e-NACH page, it will now show two options: **UPI** and **Debit Card/Net Banking**. 

### Steps:
- Merchant selects the “UPI” option – All UPI-enabled apps will reflect on the next page.
- Merchant needs to select the UPI app for which they want to proceed, e.g., Google Pay, PhonePe, etc.
- Merchant further needs to authorize the “Auto Pay” from the app to complete the Auto Pay facility.

**NOTE**: The bank registered with BharatPe must be the same in the UPI app through which the merchant is processing Auto Pay, and the registered mobile number must be the same in BharatPe & UPI app.

---

# BharatSwipe/BharatPe One | Error PR406 Handling

### Scenario:
Cases where merchants approach us for PR406 need to be communicated the below info and marked as FTR.

### Resolution:
"Your transaction was declined because it has been flagged as suspicious and does not adhere to our internal risk policies. Please ensure the following to avoid your transaction being declined:
- Accept payments using different cards.
- Use your machine regularly with consistent activity.
- Use the machine during regular business hours.
- Avoid accepting high-value transactions within the first few weeks of your onboarding.
- Avoid any association with fraudulent transactions."

---

# Important Update | Book a Return - SOP Revision

Cases where the merchant wants to return the BharatSwipe device or inquiries about the return process need to follow the below process:
1. The agent will attempt to retain the merchant by providing relevant services and need to capture the retention status (Yes/No) in Freshdesk.
2. Return needs to be raised from CRM only; do not ask the merchant to raise from CRM.
3. If the merchant is retained, the ticket will be marked as resolved. 
4. If the merchant is not retained and insists on returning the device, the agent will raise a return request in CRM, and the ticket will be marked as RIP.

**If a merchant complains about the cancellation of a return request**, we need to re-raise the return request, but it should not be tagged under 'Book a Return.' 

### Tagging for such cases:
- **T1**: BharatSwipe
- **T2**: Machine Active
- **T3**: Return Request Cancelled
- **Status**: Resolution in Progress

**If a merchant inquires about the pickup status within the TAT**, please use the below tagging. This ticket should be merged with the primary ticket created under 'Book a Return.'
- **T1**: BharatSwipe
- **T2**: Machine Inactive
- **T3**: Return - Status of Pickup (within TAT)
- **Status**: Concern already escalated

---

# Important Update | New Investments Stopped

New investments to the BharatPe investment account have been stopped until further communication. Please handle such calls accordingly and do not escalate these cases to L2/Business Team.

**NOTE**: Earnings on already invested amounts continue based on their investment plan.

---

# Important Observations
- Do not share the signature details (contact no and name) from any tickets to the merchant for any TMS/FRM/Chargeback cases.
  - **NOTE**: Only share contact details for Cyber Cell or any external sources mentioned by L2 or Business Team.
- EDI updates take up to 24 hours to be updated in the loan ledger – such cases need to be tagged under EDI related information.
- Language is not getting captured while creating the tickets – please adhere.
- Speaker order IDs are not being captured while tagging the relevant cases – this is mandated to capture.
- Tickets are not getting merged in all required scenarios.
- Case history is not getting referred in FTR cases, leading to major wrong escalation.
- We need to capture pickup status – Done/Not Done in all returns raised within TAT refund pending.
- If pickup is done, the agent needs to mention the pickup date; if not done, the agent needs to mention that pickup is not done.
- Block source is mandated on all block and hold cases; also, check previous interaction.
- In pickup canceled/not updated in CRM, pickup details are mandatory; also, check in device details - machine is active or not.
- Cases where a merchant “wants to cancel a loan,” the expert needs to capture the reason for cancellation.
- In NOC required cases, email ID is mandatory to capture, and the expert also needs to capture the CRM snapshot.

---

**Happy Calling!**
