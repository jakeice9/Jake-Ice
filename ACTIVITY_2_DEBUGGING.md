# Activity 2: The 4-Step Debugging Process

## Bug Report Example

**1. WHAT'S WRONG:**
When I open the contact form on mobile, I can type in the fields, but I'm not sure if the validation is working correctly because the error messages are hard to see against the dark background.

**2. WHAT'S EXPECTED:**
When I try to submit an empty form, bright red error messages should appear below the required fields (Name, Email, Message) so I know what to fix.

**3. RELEVANT CODE:**
(From `client/src/components/Contact.tsx` and `shared/schema.ts`)

**4. ASK CLEARLY:**
"Please check the Zod validation schema in `shared/schema.ts` and the FormField error styling in `client/src/components/Contact.tsx`. Ensure the error text color has enough contrast on the dark green background."

---

*Note: This file serves as the artifact for Activity 2, demonstrating the ability to describe a bug using the 4-step process.*
