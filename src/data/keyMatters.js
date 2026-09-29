// The situations that bring clients to the firm, set out like the
// Key Audit Matters table in an auditor's report (SA 701).
export const keyMatters = [
  {
    matter: 'An income tax or GST notice has arrived.',
    response:
      'We read the notice against your return, AIS and books, draft the reply with its supporting papers, and track it until the officer closes the matter.',
    slug: 'taxation-services',
    desk: 'Direct Tax'
  },
  {
    matter: 'Your statutory or tax audit is due.',
    response:
      'We review the books and reconciliations first, list the open points, prepare the audit schedules, and plan the work backwards from the due date.',
    slug: 'audit-assurance',
    desk: 'Audit & Assurance'
  },
  {
    matter: 'Input tax credit is blocked, or GSTR-2B does not match your books.',
    response:
      'We reconcile your purchase register with what suppliers filed, follow up the mismatches, and correct what we can in the next return.',
    slug: 'gst-indirect-tax',
    desk: 'GST'
  },
  {
    matter: 'You live abroad and are selling property in India.',
    response:
      'We compute the capital gain, apply for a lower TDS certificate where you qualify, and prepare Form 15CA and 15CB so the proceeds can be remitted.',
    slug: 'nri-taxation',
    desk: 'NRI Desk'
  },
  {
    matter: 'You are forming a company or an LLP.',
    response:
      'We compare the structures against your funding and tax plans, then handle name approval, DSC, DIN and incorporation.',
    slug: 'business-setup',
    desk: 'Business Setup'
  },
  {
    matter: 'Your books do not reconcile.',
    response:
      'We clean up the prior period, reconcile bank, vendor and customer balances, and set up a monthly close your team can keep.',
    slug: 'accounting-bookkeeping',
    desk: 'Accounts'
  }
];
