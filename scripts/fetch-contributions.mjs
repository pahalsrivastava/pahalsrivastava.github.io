import fs from "fs";
import path from "path";

const USERNAMES = ["pahalsrivastava", "pahal-srivastava"];
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const query = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

async function fetchUser(username) {
  if (!GITHUB_TOKEN) {
    console.warn(`No GITHUB_TOKEN found. Skipping live fetch for ${username}.`);
    return null;
  }
  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
        "User-Agent": "Portfolio-Builder",
      },
      body: JSON.stringify({ query, variables: { username } }),
    });
    const data = await res.json();
    return data?.data?.user?.contributionsCollection?.contributionCalendar;
  } catch (err) {
    console.error(`Failed to fetch for ${username}:`, err);
    return null;
  }
}

async function run() {
  const calendars = await Promise.all(USERNAMES.map(fetchUser));
  const mergedDays = {};
  let totalContributions = 0;

  calendars.forEach((cal) => {
    if (!cal) return;
    totalContributions += cal.totalContributions;
    cal.weeks.forEach((week) => {
      week.contributionDays.forEach((day) => {
        mergedDays[day.date] = (mergedDays[day.date] || 0) + day.contributionCount;
      });
    });
  });

  const outDir = path.resolve(process.cwd(), "src/data");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // If no token exists locally, seed a minimum fallback dataset so build succeeds
  const payload = Object.keys(mergedDays).length > 0 
    ? { totalContributions, days: mergedDays, updatedAt: new Date().toISOString() }
    : { totalContributions: 0, days: {}, updatedAt: new Date().toISOString() };

  fs.writeFileSync(path.join(outDir, "contributions.json"), JSON.stringify(payload, null, 2));
  console.log(`Generated src/data/contributions.json with ${totalContributions} contributions.`);
}

run();