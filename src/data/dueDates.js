// Recurring statutory due dates under Indian tax and company law, as prescribed.
// Government extensions override these; the page says so beside the list.

const monthly = [
  { day: 7, title: 'TDS and TCS deposit', detail: 'Tax deducted or collected in the previous month', desk: 'Direct Tax' },
  { day: 11, title: 'GSTR-1', detail: 'Outward supplies for the previous month (monthly filers)', desk: 'GST' },
  { day: 15, title: 'PF and ESI', detail: 'Contributions for the previous month', desk: 'Payroll' },
  { day: 20, title: 'GSTR-3B', detail: 'Summary return and tax payment for the previous month', desk: 'GST' }
];

// month is 0-based
const annual = [
  { month: 5, day: 15, title: 'Advance tax, first instalment', detail: '15% of estimated tax for the year', desk: 'Direct Tax' },
  { month: 8, day: 15, title: 'Advance tax, second instalment', detail: '45% of estimated tax, cumulative', desk: 'Direct Tax' },
  { month: 11, day: 15, title: 'Advance tax, third instalment', detail: '75% of estimated tax, cumulative', desk: 'Direct Tax' },
  { month: 2, day: 15, title: 'Advance tax, final instalment', detail: '100% of estimated tax', desk: 'Direct Tax' },
  { month: 6, day: 31, title: 'Income tax returns, non-audit cases', detail: 'Individuals and entities not requiring audit', desk: 'Direct Tax' },
  { month: 6, day: 31, title: 'TDS return, April to June quarter', detail: 'Forms 24Q and 26Q', desk: 'Direct Tax' },
  { month: 9, day: 31, title: 'TDS return, July to September quarter', detail: 'Forms 24Q and 26Q', desk: 'Direct Tax' },
  { month: 0, day: 31, title: 'TDS return, October to December quarter', detail: 'Forms 24Q and 26Q', desk: 'Direct Tax' },
  { month: 4, day: 31, title: 'TDS return, January to March quarter', detail: 'Forms 24Q and 26Q', desk: 'Direct Tax' },
  { month: 8, day: 30, title: 'Tax audit report', detail: 'Form 3CA/3CB with 3CD under Section 44AB', desk: 'Audit' },
  { month: 8, day: 30, title: 'Director KYC', detail: 'DIR-3 KYC for every DIN holder', desk: 'Company Law' },
  { month: 9, day: 31, title: 'Income tax returns, audit cases', detail: 'Companies and assessees under tax audit', desk: 'Direct Tax' },
  { month: 9, day: 30, title: 'AOC-4, financial statements', detail: 'Within 30 days of an AGM held on 30 September', desk: 'Company Law' },
  { month: 10, day: 29, title: 'MGT-7, annual return', detail: 'Within 60 days of an AGM held on 30 September', desk: 'Company Law' },
  { month: 11, day: 31, title: 'GSTR-9 and 9C', detail: 'GST annual return and reconciliation statement', desk: 'GST' }
];

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function upcomingDueDates(today = new Date(), count = 6) {
  const from = startOfDay(today);
  const items = [];

  for (let offset = 0; offset < 3; offset += 1) {
    const year = from.getFullYear();
    const month = from.getMonth() + offset;
    monthly.forEach((entry) => {
      items.push({ ...entry, date: new Date(year, month, entry.day) });
    });
  }

  [from.getFullYear(), from.getFullYear() + 1].forEach((year) => {
    annual.forEach((entry) => {
      items.push({ ...entry, date: new Date(year, entry.month, entry.day) });
    });
  });

  return items
    .filter((item) => item.date >= from)
    .sort((a, b) => a.date - b.date || a.title.localeCompare(b.title))
    .slice(0, count)
    .map((item) => ({
      ...item,
      daysAway: Math.round((item.date - from) / 86400000)
    }));
}

export function formatReportDate(date = new Date()) {
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}
