
window.addEventListener(
  "securitypolicyviolation",
  event => {
    console.error(
      "CSP violation blocked",
      {
        directive: event.effectiveDirective,
        blockedURI: event.blockedURI,
        sourceFile: event.sourceFile,
        lineNumber: event.lineNumber
      }
    )
  }
);

console.info(
  "Phase 7D strict CSP test active: external JS/CSS, no inline script execution."
);

(async () => {
  try {
    const PHASE6_NO_DATABASE_BUILD = !0,
      PHASE6_BUILD =
        "phase7d-pinned-supabase-sri-production-2026-07-18",
      nt = ["00/01", "01/02", "02/03", "03/04", "04/05", "05/06", "06/07", "07/08", "08/09", "09/10", "10/11", "11/12", "12/13", "13/14", "14/15", "15/16", "16/17", "17/18", "18/19", "19/20", "20/21", "21/22", "22/23", "23/24", "24/25", "25/26"], lt = t => "number" == typeof t && isFinite(t) ? t : "" === t || null == t ? 0 : parseFloat(t) || 0, rt = {
      "Al-Hilal": {
        code: "HIL",
        color: "#2f7bf6"
      },
      "Al-Nassr FC": {
        code: "NAS",
        color: "#ffd52e"
      },
      "Al-Ittihad Club": {
        code: "ITT",
        color: "#e6b800"
      },
      "Al-Ahli SFC": {
        code: "AHL",
        color: "#2ea86b"
      },
      "Al-Qadsiah FC": {
        code: "QAD",
        color: "#e0637f"
      },
      "Al-Ettifaq FC": {
        code: "ETQ",
        color: "#d9302c"
      },
      "Al-Shabab FC": {
        code: "SHB",
        color: "#c9d2da"
      },
      "Al-Taawoun FC": {
        code: "TAA",
        color: "#f2a900"
      },
      "Al-Fateh SC": {
        code: "FTH",
        color: "#3b6fb5"
      },
      "Al-Fayha FC": {
        code: "FYH",
        color: "#f36f21"
      },
      "Al-Khaleej FC": {
        code: "KHJ",
        color: "#d64545"
      },
      "Al-Okhdood Club": {
        code: "OKH",
        color: "#b58900"
      },
      "Al-Okhdood": {
        code: "OKH",
        color: "#b58900"
      },
      "Damac FC": {
        code: "DMC",
        color: "#8a2b4a"
      },
      "Al-Riyadh SC": {
        code: "RYD",
        color: "#2f9e8f"
      },
      "Al-Hazem SC": {
        code: "HZM",
        color: "#3aa0d9"
      },
      "Al-Hazem": {
        code: "HZM",
        color: "#3aa0d9"
      },
      "Al-Kholood Club": {
        code: "KHO",
        color: "#7c4dbe"
      },
      "Al-Najmah SC": {
        code: "NJM",
        color: "#16a34a"
      },
      "NEOM SC": {
        code: "NEO",
        color: "#45e0c8"
      },
      Abha: {
        code: "ABH",
        color: "#4a7dbf"
      },
      "Al-Adalah": {
        code: "ADL",
        color: "#b03a48"
      },
      "Al-Batin": {
        code: "BTN",
        color: "#8f9aa5"
      },
      "Al-Orobah": {
        code: "ORB",
        color: "#4c9e5f"
      },
      "Al-Raed": {
        code: "RAD",
        color: "#cf6f2e"
      },
      "Al-Tai": {
        code: "TAI",
        color: "#caa53d"
      },
      "Al-Wehda": {
        code: "WHD",
        color: "#c23b3b"
      },
      "Al-Faisaly FC": {
        code: "FSL",
        color: "#e07b2a"
      },
      "Najran SC": {
        code: "NJR",
        color: "#3f74c9"
      },
      "Hajer Club": {
        code: "HJR",
        color: "#2e69b0"
      },
      "Ohod Club": {
        code: "OHD",
        color: "#c0392b"
      },
      "Al-Ansar": {
        code: "ANS",
        color: "#2e8b57"
      },
      "Al-Shoulla FC": {
        code: "SHO",
        color: "#e34d2e"
      },
      "Al-Nahdah FC": {
        code: "NAH",
        color: "#5b8ac4"
      },
      "Al-Watani": {
        code: "WTN",
        color: "#8a6d3b"
      },
      "Al-Ain": {
        code: "AIN",
        color: "#37a86f"
      },
      "Sdoos Club": {
        code: "SDS",
        color: "#9a8f76"
      }
    }, dt = {
      "Al-Okhdood": "Al-Okhdood Club",
      "Al-Hazem": "Al-Hazem SC"
}, ot = t => dt[t] || t,
  PHASE6_PUBLIC_CLUB_NAMES = Object.freeze(
    [...new Set(Object.keys(rt).map(ot))]
  ),
  PHASE6_CURRENT_LEAGUE_CLUBS = Object.freeze([
    "Al-Nassr FC",
    "Al-Hilal",
    "Al-Qadsiah FC",
    "Al-Ittihad Club",
    "Al-Taawoun FC",
    "Al-Ettifaq FC",
    "Al-Shabab FC",
    "NEOM SC",
    "Al-Hazem SC",
    "Al-Fayha FC",
    "Al-Khaleej FC",
    "Al-Fateh SC",
    "Al-Kholood Club",
    "Al-Riyadh SC",
    "Damac FC",
    "Al-Okhdood Club",
    "Al-Najmah SC"
  ]);

    const AI_SIMULATION_RATINGS_25_26 = Object.freeze({
      "Al-Nassr FC": Object.freeze({ gk: 90, def: 90, mid: 90, att: 90 }),
      "Al-Hilal": Object.freeze({ gk: 90, def: 90, mid: 90, att: 90 }),
      "Al-Qadsiah FC": Object.freeze({ gk: 89, def: 89, mid: 89, att: 89 }),
      "Al-Ittihad Club": Object.freeze({ gk: 89, def: 89, mid: 89, att: 89 }),
      "Al-Taawoun FC": Object.freeze({ gk: 87, def: 87, mid: 87, att: 87 }),
      "Al-Ettifaq FC": Object.freeze({ gk: 87, def: 87, mid: 87, att: 87 }),
      "Al-Shabab FC": Object.freeze({ gk: 86, def: 86, mid: 86, att: 86 }),
      "NEOM SC": Object.freeze({ gk: 86, def: 86, mid: 86, att: 86 }),
      "Al-Hazem SC": Object.freeze({ gk: 85, def: 85, mid: 85, att: 85 }),
      "Al-Fayha FC": Object.freeze({ gk: 84, def: 84, mid: 84, att: 84 }),
      "Al-Khaleej FC": Object.freeze({ gk: 83, def: 83, mid: 83, att: 83 }),
      "Al-Fateh SC": Object.freeze({ gk: 83, def: 83, mid: 83, att: 83 }),
      "Al-Kholood Club": Object.freeze({ gk: 82, def: 82, mid: 82, att: 82 }),
      "Al-Riyadh SC": Object.freeze({ gk: 82, def: 82, mid: 82, att: 82 }),
      "Damac FC": Object.freeze({ gk: 81, def: 81, mid: 81, att: 81 }),
      "Al-Okhdood Club": Object.freeze({ gk: 80, def: 80, mid: 80, att: 80 }),
      "Al-Najmah SC": Object.freeze({ gk: 80, def: 80, mid: 80, att: 80 })
    });

    const aiStrengthCache = {};

function getDerivedAIStrength(clubId) {
  const base =
    AI_SIMULATION_RATINGS_25_26[ot(clubId)] ||
    { gk: 75, def: 75, mid: 75, att: 75 };

  return {
    ...base,
    ovr:
      .15 * base.gk +
      .3 * base.def +
      .3 * base.mid +
      .25 * base.att,
    source: "public-static-metadata"
  }
}

    function getAISimulationStrength(clubId) {
      const configured = AI_SIMULATION_RATINGS_25_26[clubId];
      if (!configured) return getDerivedAIStrength(clubId);
      return {
        ...configured,
        ovr: (configured.gk + configured.def + configured.mid + configured.att) / 4,
        source: "simulation-only-config"
      }
    }

    function getUserSimulationScaleBoost(displayOverall) {
      const anchors = [
        [70, 74],
        [78, 84.75],
        [80, 85.5],
        [82, 87.5],
        [84, 90],
        [86, 90.5],
        [100, 104.5]
      ];
      if (displayOverall <= anchors[0][0]) return anchors[0][1] - displayOverall;
      for (let index = 1; index < anchors.length; index++) {
        const [rightOverall, rightSimulationRating] = anchors[index],
          [leftOverall, leftSimulationRating] = anchors[index - 1];
        if (displayOverall <= rightOverall) {
          const progress = (displayOverall - leftOverall) / (rightOverall - leftOverall),
            calibratedRating = leftSimulationRating + progress * (rightSimulationRating - leftSimulationRating);
          return calibratedRating - displayOverall
        }
      }
      return 4.5
    }

    function getUserSimulationStrength() {
      const summary = G(),
        simulationScaleBoost = getUserSimulationScaleBoost(summary.displayOverall);
      return {
        ovr: summary.displayOverall,
        displayOverall: summary.displayOverall,
        gk: summary.gk,
        def: summary.def,
        mid: summary.mid,
        att: summary.att,
        simOvr: Math.min(100, summary.displayOverall + simulationScaleBoost),
        simGk: Math.min(100, summary.gk + simulationScaleBoost),
        simDef: Math.min(100, summary.def + simulationScaleBoost),
        simMid: Math.min(100, summary.mid + simulationScaleBoost),
        simAtt: Math.min(100, summary.att + simulationScaleBoost),
        simulationScaleBoost,
        source: "drafted-xi-calibrated-v6.2"
      }
    }

    function getSimulationTeamStrength(teamId, userStrength) {
      return teamId === Lt ? userStrength : getAISimulationStrength(teamId)
    }

    const yt = ["Al-Hilal", "Al-Nassr FC", "Al-Ittihad Club", "Al-Ahli SFC", "Al-Shabab FC"],
      Lt = "__YOU__",
      Vt = [
        ["LB", 14, 73],
        ["CB", 37, 76],
        ["CB", 63, 76],
        ["RB", 86, 73]
      ],
      qt = [
        ["CB", 27, 76],
        ["CB", 50, 78],
        ["CB", 73, 76]
      ],
      Zt = [
        ["LWB", 8, 61],
        ["CB", 29, 74],
        ["CB", 50, 78],
        ["CB", 71, 74],
        ["RWB", 92, 61]
      ],
      ut = [
        ["GK", 50, 92]
      ],
      zt = (t, s) => ({
        name: t,
        slots: s
      }),
      Xt = {
        41212: zt("4-1-2-1-2", [...ut, ...Vt, ["CDM", 50, 58],
          ["LAM", 18, 40],
          ["RM", 82, 40],
          ["CAM", 50, 28],
          ["ST", 36, 13],
          ["ST", 64, 13]
        ]),
        "41212H": zt("4-1-2-1-2 Holding", [...ut, ...Vt, ["CDM", 50, 58],
          ["CM", 28, 44],
          ["CM", 72, 44],
          ["CAM", 50, 29],
          ["ST", 36, 13],
          ["ST", 64, 13]
        ]),
        4141: zt("4-1-4-1", [...ut, ...Vt, ["CDM", 50, 60],
          ["LM", 12, 42],
          ["CM", 36, 46],
          ["CM", 64, 46],
          ["RM", 88, 42],
          ["ST", 50, 13]
        ]),
        4213: zt("4-2-1-3", [...ut, ...Vt, ["CDM", 36, 57],
          ["CDM", 64, 57],
          ["CAM", 50, 33],
          ["LW", 14, 19],
          ["RW", 86, 19],
          ["ST", 50, 12]
        ]),
        4222: zt("4-2-2-2", [...ut, ...Vt, ["CDM", 36, 57],
          ["CDM", 64, 57],
          ["CAM", 30, 31],
          ["CAM", 70, 31],
          ["ST", 36, 13],
          ["ST", 64, 13]
        ]),
        4231: zt("4-2-3-1", [...ut, ...Vt, ["CDM", 36, 57],
          ["CDM", 64, 57],
          ["CAM", 18, 32],
          ["CAM", 50, 30],
          ["CAM", 82, 32],
          ["ST", 50, 12]
        ]),
        424: zt("4-2-4", [...ut, ...Vt, ["CM", 38, 50],
          ["CM", 62, 50],
          ["LW", 14, 18],
          ["RW", 86, 18],
          ["ST", 36, 13],
          ["ST", 64, 13]
        ]),
        "433F": zt("4-3-3 Flat", [...ut, ...Vt, ["CM", 28, 48],
          ["CM", 50, 53],
          ["CM", 72, 48],
          ["LW", 14, 19],
          ["RW", 86, 19],
          ["ST", 50, 12]
        ]),
        "433H": zt("4-3-3 Holding", [...ut, ...Vt, ["CDM", 50, 58],
          ["CM", 30, 43],
          ["CM", 70, 43],
          ["LW", 14, 19],
          ["RW", 86, 19],
          ["ST", 50, 12]
        ]),
        "433A": zt("4-3-3 Attack", [...ut, ...Vt, ["CM", 33, 52],
          ["CM", 67, 52],
          ["CAM", 50, 34],
          ["LW", 14, 19],
          ["RW", 86, 19],
          ["ST", 50, 12]
        ]),
        4411: zt("4-4-1-1", [...ut, ...Vt, ["LM", 12, 44],
          ["CM", 38, 49],
          ["CM", 62, 49],
          ["RM", 88, 44],
          ["CAM", 50, 28],
          ["ST", 50, 12]
        ]),
        "442F": zt("4-4-2 Flat", [...ut, ...Vt, ["LM", 12, 44],
          ["CM", 38, 49],
          ["CM", 62, 49],
          ["RM", 88, 44],
          ["ST", 36, 15],
          ["ST", 64, 15]
        ]),
        "442H": zt("4-4-2 Holding", [...ut, ...Vt, ["CDM", 36, 52],
          ["CDM", 64, 52],
          ["LM", 12, 42],
          ["RM", 88, 42],
          ["ST", 36, 14],
          ["ST", 64, 14]
        ]),
        451: zt("4-5-1", [...ut, ...Vt, ["LM", 10, 42],
          ["CM", 50, 54],
          ["CAM", 32, 36],
          ["CAM", 68, 36],
          ["RM", 90, 42],
          ["ST", 50, 13]
        ]),
        3142: zt("3-1-4-2", [...ut, ...qt, ["CDM", 50, 60],
          ["LM", 10, 42],
          ["CM", 36, 46],
          ["CM", 64, 46],
          ["RM", 90, 42],
          ["ST", 36, 14],
          ["ST", 64, 14]
        ]),
        3412: zt("3-4-1-2", [...ut, ...qt, ["LM", 10, 44],
          ["CM", 36, 52],
          ["CM", 64, 52],
          ["RM", 90, 44],
          ["CAM", 50, 30],
          ["ST", 36, 13],
          ["ST", 64, 13]
        ]),
        352: zt("3-5-2", [...ut, ...qt, ["LM", 8, 44],
          ["CDM", 36, 56],
          ["CDM", 64, 56],
          ["RM", 92, 44],
          ["CAM", 50, 32],
          ["ST", 36, 13],
          ["ST", 64, 13]
        ]),
        343: zt("3-4-3", [...ut, ...qt, ["LM", 10, 42],
          ["CM", 38, 50],
          ["CM", 62, 50],
          ["RM", 90, 42],
          ["LW", 16, 19],
          ["RW", 84, 19],
          ["ST", 50, 12]
        ]),
        5212: zt("5-2-1-2", [...ut, ...Zt, ["CM", 34, 46],
          ["CM", 66, 46],
          ["CAM", 50, 30],
          ["ST", 36, 13],
          ["ST", 64, 13]
        ]),
        523: zt("5-2-3", [...ut, ...Zt, ["CM", 37, 46],
          ["CM", 63, 46],
          ["LW", 14, 19],
          ["RW", 86, 19],
          ["ST", 50, 12]
        ]),
        532: zt("5-3-2", [...ut, ...Zt, ["CM", 29, 44],
          ["CM", 50, 48],
          ["CM", 71, 44],
          ["ST", 36, 14],
          ["ST", 64, 14]
        ]),
        541: zt("5-4-1", [...ut, ...Zt, ["LM", 12, 40],
          ["CM", 38, 46],
          ["CM", 62, 46],
          ["RM", 88, 40],
          ["ST", 50, 13]
        ])
      },
      kt = ["3142", "3412", "343", "352", "41212", "41212H", "4141", "4213", "4222", "4231", "424", "433F", "433H", "433A", "4411", "442F", "442H", "451", "5212", "523", "532", "541"],
      Dt = {
        GK: ["GK"],
        CB: ["CB"],
        LB: ["LB", "LWB"],
        RB: ["RB", "RWB"],
        LWB: ["LWB", "LB"],
        RWB: ["RWB", "RB"],
        CDM: ["CDM", "CM"],
        CM: ["CM", "CDM", "CAM"],
        CAM: ["CAM", "CM"],
        LAM: ["CAM", "LM", "LW"],
        LM: ["LM", "LW"],
        RM: ["RM", "RW"],
        LW: ["LW", "LM"],
        RW: ["RW", "RM"],
        ST: ["ST", "CF"],
        CF: ["CF", "ST"]
      },
      Yt = new Set(["GK", "CB", "LB", "RB", "LWB", "RWB"]),
      WING_DEFENDERS = new Set(["CB", "LB", "RB", "LWB", "RWB"]),
      GOALKEEPERS = new Set(["GK"]),
      wt = new Set(["CDM", "CM", "CAM", "LM", "RM", "LAM"]),
      St = new Set(["LW", "RW", "ST", "CF"]),
      Ht = new Set(["GK", "CB", "LB", "RB", "LWB", "RWB"]),
      Ut = {
        ST: [1, .5],
        CF: [1, .55],
        LW: [.65, .9],
        RW: [.65, .9],
        LM: [.55, .9],
        RM: [.55, .9],
        CAM: [.55, 1],
        LAM: [.58, .95],
        CM: [.3, .6],
        CDM: [.15, .3],
        LB: [.08, .35],
        RB: [.08, .35],
        LWB: [.1, .45],
        RWB: [.1, .45],
        CB: [.1, .08],
        GK: [0, .01]
      },
      jt = 4.5,
      Pt = .7,
      Mt = .4;
    let Gt = {
      rc: 0,
      nw: 0
    };

    function s() {
      try {
        const t = localStorage.getItem("spl_draft_pity");
        return t ? JSON.parse(t) : {
          rc: 0,
          nw: 0
        }
      } catch (t) {
        return Gt
      }
    }

    function a() {
      return Math.min(s().nw, 6)
    }

    const xt = t => document.getElementById(t),
      PROFILE_KEY = "splDraftProfile_v1",
      GAME_VERSION = "V6.5.1-season-board",
      SUPABASE_URL = "https://wyxtriciyixkglcrppgh.supabase.co",
      SUPABASE_PUBLISHABLE_KEY = "sb_publishable_-ZSGulpdWPsmHeX4_DY49Q_knHYIpSf",
      DRAFT_SHADOW_TEST_ENABLED = !1,
      DRAFT_SERVER_MODE_ENABLED = !0,
      SERVER_SEASON_ENABLED = !0,
      SERVER_PLAYER_STATS_ENABLED = !0,
      SERVER_AWARDS_ENABLED = !0,
      SERVER_DAILY_ENABLED = !0,
      PHASE4_PRODUCTION_BUILD = "phase4-final-2026-07-15",
      PHASE5_PRODUCTION_BUILD = "phase5-daily-production-2026-07-16",
      SERVER_DRAFT_RESUME_KEY = "spl_draft_secure_run_v1",
      SERVER_DAILY_RESUME_KEY = "spl_draft_secure_daily_v1",
      SERVER_SEASON_RESUME_KEY = "spl_draft_secure_season_v1",
      RUN_HISTORY_LIMIT = 100,
      MAX_PROFILE_IMPORT_BYTES = 1024 * 1024,
      RUN_SCORE_CONFIG = {
        pointsValue: 100,
        winValue: 25,
        goalValue: 5,
        goalDifferenceValue: 10,
        overallPointValue: 75,
        hardMultiplier: 1.10,
        dailyMultiplier: 1.05,
        positionBonuses: {
          1: 3000,
          2: 2200,
          3: 1600,
          4: 1200,
          5: 900,
          6: 700,
          7: 550,
          8: 450,
          9: 350,
          10: 250,
          11: 100,
          12: 100,
          13: 100,
          14: 100,
          15: 0,
          16: 0,
          17: 0,
          18: 0
        }
      },
      ACHIEVEMENT_DEFINITIONS = {
        FIRST_XI: { title: "FIRST XI", description: "Complete your first draft." },
        FULL_SEASON: { title: "FULL SEASON", description: "Complete your first league season." },
        CHAMPIONS: { title: "CHAMPIONS", description: "Finish first." },
        BACK_TO_BACK: { title: "BACK TO BACK", description: "Win two consecutive completed seasons." },
        DYNASTY: { title: "DYNASTY", description: "Win three consecutive completed seasons." },
        HARD_WORK: { title: "HARD WORK", description: "Complete a season in Hard Mode." },
        HARD_MODE_CHAMPION: { title: "HARD MODE CHAMPION", description: "Win the league in Hard Mode." },
        INVINCIBLE: { title: "INVINCIBLE", description: "Complete a season without losing." },
        CENTURIONS: { title: "CENTURIONS", description: "Finish with at least 100 points." },
        GOAL_MACHINE: { title: "GOAL MACHINE", description: "Score at least 100 league goals." },
        IRON_DEFENCE: { title: "IRON DEFENCE", description: "Concede 20 or fewer league goals." },
        TOP_TWO: { title: "TOP TWO", description: "Finish first or second." },
        ELITE_DRAFT: { title: "ELITE DRAFT", description: "Complete a squad with an overall of at least 87." },
        SUPER_TEAM: { title: "SUPER TEAM", description: "Complete a squad with an overall of at least 90." },
        HISTORIAN: { title: "HISTORIAN", description: "Draft players from at least eight different seasons." },
        CLUB_COLLECTOR: { title: "CLUB COLLECTOR", description: "Draft players from at least eight different clubs." },
        PERFECTLY_BALANCED: { title: "PERFECTLY BALANCED", description: "Finish a squad with defence, midfield and attack all rated at least 85." },
        NO_SECOND_CHANCES: { title: "NO SECOND CHANCES", description: "Complete a Hard Mode draft and season." },
        DAILY_DEBUT: { title: "DAILY DEBUT", description: "Complete the Daily Challenge once." },
        DAILY_ROUTINE: { title: "DAILY ROUTINE", description: "Complete official Daily Challenges on three different dates." },
        DEDICATED: { title: "DEDICATED", description: "Complete 10 league seasons." },
        VETERAN: { title: "VETERAN", description: "Complete 50 league seasons." }
      };

    function createDefaultProfile() {
      const now = new Date().toISOString();
      return {
        version: 1,
        teamName: "",
        createdAt: now,
        updatedAt: now,
        totals: {
          runsStarted: 0,
          runsCompleted: 0,
          normalRunsCompleted: 0,
          hardRunsCompleted: 0,
          dailyChallengesCompleted: 0,
          championships: 0,
          topTwoFinishes: 0,
          topFourFinishes: 0,
          totalWins: 0,
          totalDraws: 0,
          totalLosses: 0,
          totalGoalsFor: 0,
          totalGoalsAgainst: 0,
          totalSquadOverall: 0,
          totalFinalPosition: 0,
          totalPoints: 0,
          totalRunScore: 0
        },
        streaks: {
          currentChampionship: 0,
          longestChampionship: 0,
          currentTopFour: 0,
          longestTopFour: 0
        },
        usage: {
          formations: {},
          clubs: {},
          seasons: {},
          players: {}
        },
        personalRecords: {},
        achievements: {},
        runHistory: [],
        dailyChallengeHistory: {}
      }
    }

    function safeObject(value) {
      return value && "object" === typeof value && !Array.isArray(value) ? value : {}
    }

    function normalizePlainText(value, maxLength = 120) {
      return String(value == null ? "" : value)
        .replace(/[\u0000-\u001F\u007F]/g, " ")
        .replace(/[<>]/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, maxLength)
    }

    function safeFiniteNumber(value, fallback = 0, min = -1e7, max = 1e7) {
      const number = Number(value);
      return Number.isFinite(number)
        ? Math.min(max, Math.max(min, number))
        : fallback
    }

    function safeInteger(value, fallback = 0, min = -1e7, max = 1e7) {
      return Math.round(
        safeFiniteNumber(value, fallback, min, max)
      )
    }

    function normalizeScoreBreakdown(raw) {
      const value = safeObject(raw);
      return {
        pointsScore: safeInteger(value.pointsScore, 0, -1e7, 1e7),
        positionBonus: safeInteger(value.positionBonus, 0, -1e7, 1e7),
        winsBonus: safeInteger(value.winsBonus, 0, -1e7, 1e7),
        goalsBonus: safeInteger(value.goalsBonus, 0, -1e7, 1e7),
        goalDifferenceAdjustment: safeInteger(
          value.goalDifferenceAdjustment,
          0,
          -1e7,
          1e7
        ),
        overallBonus: safeInteger(value.overallBonus, 0, -1e7, 1e7),
        difficultyMultiplier: safeFiniteNumber(
          value.difficultyMultiplier,
          1,
          0,
          10
        ),
        dailyMultiplier: safeFiniteNumber(
          value.dailyMultiplier,
          1,
          0,
          10
        ),
        subtotal: safeInteger(value.subtotal, 0, 0, 1e7),
        finalScore: safeInteger(value.finalScore, 0, 0, 1e7)
      }
    }

    function normalizeDraftedPlayer(raw) {
      const value = safeObject(raw);
      return {
        playerId: normalizePlainText(value.playerId, 180),
        name: normalizePlainText(value.name, 100),
        club: normalizePlainText(value.club, 100),
        season: normalizePlainText(value.season, 20),
        position: normalizePlainText(value.position, 20),
        rating: safeFiniteNumber(value.rating, 0, 0, 100)
      }
    }

    function normalizeRunRecord(raw) {
      const value = safeObject(raw),
        topScorer = safeObject(value.topScorer),
        topAssister = safeObject(value.topAssister),
        bestPlayer = safeObject(value.bestPlayer),
        normalized = {
          runId: normalizePlainText(value.runId, 200),
          completedAt: normalizePlainText(value.completedAt, 48),
          teamName: normalizePlainText(value.teamName, 25),
          difficulty: value.difficulty === "hard" ? "hard" : "normal",
          draftMode: value.draftMode === "alltime" ? "alltime" : "season",
          formation: normalizePlainText(value.formation, 60),
          squadOverall: safeFiniteNumber(value.squadOverall, 0, 0, 100),
          defenceRating: safeFiniteNumber(value.defenceRating, 0, 0, 100),
          midfieldRating: safeFiniteNumber(value.midfieldRating, 0, 0, 100),
          attackRating: safeFiniteNumber(value.attackRating, 0, 0, 100),
          finalPosition: safeInteger(value.finalPosition, 18, 1, 18),
          played: safeInteger(value.played, 0, 0, 34),
          wins: safeInteger(value.wins, 0, 0, 34),
          draws: safeInteger(value.draws, 0, 0, 34),
          losses: safeInteger(value.losses, 0, 0, 34),
          goalsFor: safeInteger(value.goalsFor, 0, 0, 1000),
          goalsAgainst: safeInteger(value.goalsAgainst, 0, 0, 1000),
          goalDifference: safeInteger(value.goalDifference, 0, -1000, 1000),
          points: safeInteger(value.points, 0, 0, 200),
          cleanSheets: safeInteger(value.cleanSheets, 0, 0, 34),
          score: safeInteger(value.score, 0, 0, 1e7),
          isDailyChallenge: value.isDailyChallenge === true,
          dailyChallengeDate:
            normalizePlainText(value.dailyChallengeDate, 20) || null,
          dailyAttemptType:
            value.dailyAttemptType === "official"
              ? "official"
              : value.dailyAttemptType === "practice"
                ? "practice"
                : null,
          challengeId:
            normalizePlainText(value.challengeId, 180) || null,
          topScorer: {
            name: normalizePlainText(topScorer.name, 100),
            goals: safeInteger(topScorer.goals, 0, 0, 1000)
          },
          topAssister: {
            name: normalizePlainText(topAssister.name, 100),
            assists: safeInteger(topAssister.assists, 0, 0, 1000)
          },
          bestPlayer: {
            name: normalizePlainText(bestPlayer.name, 100),
            averageRating:
              safeFiniteNumber(bestPlayer.averageRating, 0, 0, 10)
          },
          draftedPlayers:
            (Array.isArray(value.draftedPlayers)
              ? value.draftedPlayers
              : [])
              .slice(0, 11)
              .map(normalizeDraftedPlayer),
          scoreBreakdown:
            normalizeScoreBreakdown(value.scoreBreakdown)
        };

      if (value.onlineSubmission) {
        const submission = safeObject(value.onlineSubmission);
        normalized.onlineSubmission = {
          status: normalizePlainText(submission.status, 40),
          attempts: safeInteger(submission.attempts, 0, 0, 100),
          duplicate: submission.duplicate === true,
          serverScore:
            safeInteger(submission.serverScore, 0, 0, 1e7),
          scoreId: normalizePlainText(submission.scoreId, 180),
          lastError: normalizePlainText(submission.lastError, 180),
          acceptedAt: normalizePlainText(submission.acceptedAt, 48),
          updatedAt: normalizePlainText(submission.updatedAt, 48)
        }
      }

      return normalized
    }

    function normalizePersonalRecords(raw) {
      const result = {};
      Object.entries(safeObject(raw))
        .slice(0, 100)
        .forEach(([key, item]) => {
          const value = safeObject(item),
            cleanKey = normalizePlainText(key, 80);
          if (!cleanKey) return;
          result[cleanKey] = {
            value:
              safeFiniteNumber(value.value, 0, -1e7, 1e7),
            runId: normalizePlainText(value.runId, 200),
            completedAt: normalizePlainText(value.completedAt, 48),
            finalPosition:
              safeInteger(value.finalPosition, 0, 0, 18),
            squadOverall:
              safeFiniteNumber(value.squadOverall, 0, 0, 100),
            difficulty:
              value.difficulty === "hard" ? "hard" : "normal",
            playerName:
              normalizePlainText(value.playerName, 100)
          }
        });
      return result
    }

    function normalizeUsageMap(raw) {
      const result = {};
      Object.entries(safeObject(raw))
        .slice(0, 500)
        .forEach(([key, value]) => {
          const cleanKey =
            normalizePlainText(key, 160);
          if (cleanKey) {
            result[cleanKey] =
              safeInteger(value, 0, 0, 1e6)
          }
        });
      return result
    }

    function normalizeAchievements(raw) {
      const source = safeObject(raw),
        result = {};
      Object.keys(ACHIEVEMENT_DEFINITIONS)
        .forEach(id => {
          const item = safeObject(source[id]);
          if (item.unlockedAt) {
            result[id] = {
              unlockedAt:
                normalizePlainText(item.unlockedAt, 48)
            }
          }
        });
      return result
    }

    function normalizeDailyHistory(raw) {
      const result = {};
      Object.entries(safeObject(raw))
        .slice(0, 500)
        .forEach(([key, item]) => {
          const value = safeObject(item),
            cleanKey =
              normalizePlainText(key, 20);
          if (!cleanKey) return;
          result[cleanKey] = {
            challengeId:
              normalizePlainText(value.challengeId, 180),
            seed:
              normalizePlainText(value.seed, 180),
            formation:
              normalizePlainText(value.formation, 60),
            fkey:
              normalizePlainText(value.fkey, 30),
            difficulty:
              value.difficulty === "hard" ? "hard" : "normal",
            draftMode:
              value.draftMode === "alltime"
                ? "alltime"
                : "season",
            status:
              normalizePlainText(value.status, 30),
            firstAttemptStartedAt:
              normalizePlainText(
                value.firstAttemptStartedAt,
                48
              ),
            officialResult:
              value.officialResult
                ? normalizeRunRecord(value.officialResult)
                : null
          }
        });
      return result
    }

    function normalizeLocalProfile(raw) {
      const base = createDefaultProfile();
      if (
        !raw ||
        "object" !== typeof raw ||
        Array.isArray(raw)
      ) return base;

      const totals = {
        ...base.totals,
        ...safeObject(raw.totals)
      };
      Object.keys(totals).forEach(key => {
        totals[key] =
          safeFiniteNumber(
            totals[key],
            0,
            -1e7,
            1e7
          )
      });

      const streaks = {
        ...base.streaks,
        ...safeObject(raw.streaks)
      };
      Object.keys(streaks).forEach(key => {
        streaks[key] =
          safeInteger(streaks[key], 0, 0, 1e6)
      });

      const usageRaw = safeObject(raw.usage);

      return {
        version: 1,
        teamName:
          normalizePlainText(raw.teamName, 25),
        createdAt:
          normalizePlainText(raw.createdAt, 48) ||
          base.createdAt,
        updatedAt:
          normalizePlainText(raw.updatedAt, 48) ||
          base.updatedAt,
        totals,
        streaks,
        usage: {
          formations:
            normalizeUsageMap(usageRaw.formations),
          clubs:
            normalizeUsageMap(usageRaw.clubs),
          seasons:
            normalizeUsageMap(usageRaw.seasons),
          players:
            normalizeUsageMap(usageRaw.players)
        },
        personalRecords:
          normalizePersonalRecords(raw.personalRecords),
        achievements:
          normalizeAchievements(raw.achievements),
        runHistory:
          (Array.isArray(raw.runHistory)
            ? raw.runHistory
            : [])
            .slice(0, RUN_HISTORY_LIMIT)
            .map(normalizeRunRecord)
            .filter(run => run.runId),
        dailyChallengeHistory:
          normalizeDailyHistory(raw.dailyChallengeHistory)
      }
    }

    function loadLocalProfile() {
      try {
        const raw = localStorage.getItem(PROFILE_KEY);
        return raw ? normalizeLocalProfile(JSON.parse(raw)) : createDefaultProfile()
      } catch (error) {
        console.warn("Could not load local SPL Draft profile.", error);
        return createDefaultProfile()
      }
    }

    let localProfile = loadLocalProfile(),
      onlineClient = null,
      onlineUser = null,
      onlineReadyPromise = null,
      globalLeaderboardPeriod = "today",
      reviewLeaderboardPeriod = "today",
      reviewLeaderboardRun = null;

    function setOnlineStatus(state, text) {
      const badge = document.getElementById("onlineStatusBadge");
      if (!badge) return;
      badge.classList.remove("online", "offline", "connecting");
      badge.classList.add(state);
      badge.textContent = text
    }

    function updateOnlineSubmissionNote(run) {
      const note = document.getElementById("onlineSubmissionNote");
      if (!note) return;
      note.classList.remove("ok", "error");
      if (!run) return void (note.textContent = "");
      const submission = run.onlineSubmission || {};
      if ("accepted" === submission.status) {
        note.classList.add("ok");
        note.textContent = `✓ Online score accepted${Number.isFinite(+submission.serverScore) ? ` · ${Math.round(+submission.serverScore).toLocaleString()} points` : ""}`
      } else if ("skipped-practice" === submission.status) {
        note.textContent = "Daily Challenge practice attempts stay local and are not submitted to the global leaderboard."
      } else if ("skipped-alltime" === submission.status) {
        note.textContent = "Max Rating All-Time is local-only and does not enter the global leaderboard."
      } else if ("server-managed" === submission.status) {
        note.classList.add("ok");
        note.textContent = "This standard run is finalized and submitted only by the trusted server."
      } else if ("pending" === submission.status) {
        note.textContent = "Online score submission pending — it will retry when a connection is available."
      } else if ("error" === submission.status) {
        note.classList.add("error");
        note.textContent = "Online score could not be submitted yet. Your local result is safe and will retry later."
      } else note.textContent = ""
    }

    async function initializeOnlineBackend() {
      if (onlineReadyPromise) return onlineReadyPromise;
      onlineReadyPromise = (async () => {
        setOnlineStatus("connecting", "Connecting");
        if (!window.supabase || "function" !== typeof window.supabase.createClient) throw new Error("Supabase client library did not load");
        onlineClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
          auth: {
            persistSession: !0,
            autoRefreshToken: !0,
            detectSessionInUrl: !1
          }
        });
        let { data: sessionData, error: sessionError } = await onlineClient.auth.getSession();
        if (sessionError) throw sessionError;
        let session = sessionData && sessionData.session;
        if (!session) {
          const { data, error } = await onlineClient.auth.signInAnonymously();
          if (error) throw error;
          session = data && data.session
        }
        if (!session || !session.user) throw new Error("Anonymous session was not created");
        onlineUser = session.user;
        setOnlineStatus("online", "Online");
        window.addEventListener("online", () => {
          setOnlineStatus("online", "Online");
          flushPendingOnlineSubmissions();
          renderGlobalLeaderboard()
        });
        window.addEventListener("offline", () => setOnlineStatus("offline", "Offline"));
        await flushPendingOnlineSubmissions();
        return onlineClient
      })().catch(error => {
        console.warn("Online leaderboard unavailable.", error);
        setOnlineStatus("offline", "Offline");
        onlineReadyPromise = null;
        throw error
      });
      return onlineReadyPromise
    }

    function setDraftBackendStatus(state, text) {
      const note = document.getElementById("draftBackendStatus");
      if (!note) return;

      note.classList.remove("on", "ok", "error", "testing");

      if ("error" !== state || !text) {
        note.textContent = "";
        return
      }

      note.classList.add("on", "error");
      note.textContent = text
    }

    function compareShadowDraftState(localRun, serverState, expected) {
      const issues = [];
      if (!serverState || "object" !== typeof serverState) return ["Missing server draft state"];
      if (!serverState.runId) issues.push("Missing server run ID");
      if (serverState.clientRunId !== localRun.runId) issues.push("Client run ID mismatch");
      if (serverState.formationCode !== expected.formationCode) issues.push("Formation mismatch");
      if (serverState.difficulty !== expected.difficulty) issues.push("Difficulty mismatch");
      if (serverState.draftMode !== expected.draftMode) issues.push("Draft mode mismatch");
      if (+serverState.skipsInitial !== +expected.skips) issues.push("Initial skips mismatch");
      if (+serverState.skipsLeft !== +expected.skips) issues.push("Remaining skips mismatch");
      const serverSlots = Array.isArray(serverState.slots) ? serverState.slots : [];
      if (11 !== serverSlots.length) issues.push(`Expected 11 slots, received ${serverSlots.length}`);
      if (11 === serverSlots.length) {
        localRun.slots.forEach((slot, index) => {
          const remote = serverSlots.find(item => +item.index === index);
          if (!remote) {
            issues.push(`Missing slot ${index}`);
            return
          }
          if (remote.code !== slot.code) issues.push(`Slot ${index} code mismatch`);
          if (+remote.x !== +slot.x || +remote.y !== +slot.y) issues.push(`Slot ${index} coordinates mismatch`)
        })
      }
      return issues
    }

    function saveSecureDraftResumeMarker(serverRunId) {
      if (!serverRunId) return;

      if (
        SERVER_DAILY_ENABLED &&
        gt &&
        gt.isDaily &&
        gt.dailyAttemptId
      ) {
        saveSecureDailyResumeMarker(
          gt.dailyAttemptId,
          serverRunId
        );
        return
      }

      try {
        localStorage.setItem(
          SERVER_DRAFT_RESUME_KEY,
          JSON.stringify({
            serverRunId,
            savedAt: new Date().toISOString()
          })
        )
      } catch {}
    }

    function clearSecureDraftResumeMarker() {
      try {
        localStorage.removeItem(SERVER_DRAFT_RESUME_KEY)
      } catch {}
    }

    function saveSecureDailyResumeMarker(
      attemptId,
      serverRunId
    ) {
      if (!attemptId || !serverRunId) return;

      try {
        localStorage.setItem(
          SERVER_DAILY_RESUME_KEY,
          JSON.stringify({
            attemptId,
            serverRunId,
            updatedAt: new Date().toISOString()
          })
        )
      } catch {}
    }

    function readSecureDailyResumeMarker() {
      try {
        const raw =
          localStorage.getItem(
            SERVER_DAILY_RESUME_KEY
          );

        if (!raw) return null;

        const parsed = JSON.parse(raw);

        return parsed &&
          typeof parsed.attemptId === "string" &&
          typeof parsed.serverRunId === "string"
            ? parsed
            : null
      } catch {
        return null
      }
    }

    function clearSecureDailyResumeMarker() {
      try {
        localStorage.removeItem(
          SERVER_DAILY_RESUME_KEY
        )
      } catch {}
    }

    function readSecureDraftResumeMarker() {
      try {
        const raw = localStorage.getItem(
          SERVER_DRAFT_RESUME_KEY
        );
        if (!raw) return null;

        const parsed = JSON.parse(raw);
        return parsed &&
          "string" === typeof parsed.serverRunId
          ? parsed
          : null
      } catch {
        return null
      }
    }

    async function runStartDraftShadowTest(localRun, expected) {
      if (
        (!DRAFT_SHADOW_TEST_ENABLED && !DRAFT_SERVER_MODE_ENABLED) ||
        !localRun ||
        localRun.isDaily
      ) return !1;

      if (DRAFT_SERVER_MODE_ENABLED) {
        xt("rollBtn").disabled = !0;
        setDraftBackendStatus(
          "testing",
          "Secure server draft: creating your private authenticated run…"
        )
      } else {
        setDraftBackendStatus(
          "testing",
          "Private backend test: creating secure draft state…"
        )
      }

      try {
        await initializeOnlineBackend();

        const { data, error } = await onlineClient.functions.invoke(
          "start-draft",
          {
            body: {
              clientRunId: localRun.runId,
              teamName: Jt(),
              formationCode: expected.formationCode,
              difficulty: expected.difficulty,
              draftMode: expected.draftMode
            }
          }
        );

        if (error) throw error;
        if (!data || !data.ok || !data.state) {
          throw new Error(
            data && data.errorCode || "Missing server state"
          )
        }

        const issues = compareShadowDraftState(
          localRun,
          data.state,
          expected
        );

        localRun.serverShadow = {
          status: issues.length ? "mismatch" : "verified",
          serverRunId: data.state.runId || null,
          checkedAt: new Date().toISOString(),
          currentOffer: data.state.activeOffer || null,
          selectionPending: !1,
          queuedRollRequested: !1,
          issues
        };

        if (issues.length) {
          console.warn(
            "start-draft verification mismatch",
            {
              issues,
              localRun,
              serverState: data.state
            }
          );

          setDraftBackendStatus(
            "error",
            `Private backend mismatch: ${issues.join(", ")}`
          );
          setDraftBackendTools(!1);
          xt("rollBtn").disabled = !0;
          return !1
        }

        console.info(
          "start-draft verification passed",
          data.state
        );

        if (DRAFT_SERVER_MODE_ENABLED) {
          localRun.serverMode = !0;
          localRun.pick = +data.state.currentPick || 1;
          localRun.skipsInitial = +data.state.skipsInitial;
          localRun.skipsLeft = +data.state.skipsLeft;

          saveSecureDraftResumeMarker(data.state.runId);

          setDraftBackendStatus(
            "ok",
            "✓ Secure server draft active: run ownership, formation, mode, skips and all 11 slots verified."
          );
          setDraftBackendTools(!1);
          xt("rollBtn").disabled = !1
        } else {
          setDraftBackendStatus(
            "ok",
            "✓ Private backend verified: authenticated run, 11 slots, formation, mode and skips all match."
          );
          setDraftBackendTools(
            !0,
            "Ready to test the secure server roulette."
          )
        }

        return !0
      } catch (error) {
        localRun.serverShadow = {
          status: "error",
          checkedAt: new Date().toISOString(),
          error: String(
            error && error.message || error
          ).slice(0, 180)
        };

        console.warn(
          "start-draft backend request failed.",
          error
        );

        setDraftBackendStatus(
          "error",
          DRAFT_SERVER_MODE_ENABLED
            ? "Secure server draft could not start. Restart the run after checking the Edge Function logs."
            : "Private backend test failed. The local draft still works; check the browser console and Edge Function logs."
        );
        setDraftBackendTools(!1);

        if (DRAFT_SERVER_MODE_ENABLED) {
          xt("rollBtn").disabled = !0
        }

        return !1
      }
    }

    function setDraftBackendTools(visible, details = "") {
      const tools = document.getElementById("draftBackendTools"),
        rollButton = document.getElementById("serverRollTestBtn"),
        skipButton = document.getElementById("serverSkipTestBtn"),
        selectButton = document.getElementById("serverSelectTestBtn"),
        detailNode = document.getElementById("draftBackendDetails");
      if (
        !tools ||
        !rollButton ||
        !skipButton ||
        !selectButton ||
        !detailNode
      ) return;

      tools.classList.toggle("on", !!visible);
      detailNode.textContent = details;

      const ready = !!(
        visible &&
        gt &&
        gt.serverShadow &&
        "verified" === gt.serverShadow.status &&
        gt.serverShadow.serverRunId
      );
      const currentOffer = ready && gt.serverShadow.currentOffer;
      const selectionComplete = !!(
        ready &&
        "verified" === gt.serverShadow.selectionStatus
      );

      rollButton.disabled = !ready || selectionComplete;
      skipButton.disabled = !(
        ready &&
        currentOffer &&
        +currentOffer.skipsLeft > 0 &&
        !selectionComplete
      );
      selectButton.disabled = !(
        ready &&
        currentOffer &&
        Array.isArray(currentOffer.cards) &&
        currentOffer.cards.length &&
        !selectionComplete
      )
    }

    function validateServerRouletteOffer(offer, expectedRunId) {
      const issues = [];
      if (!offer || "object" !== typeof offer) return ["Missing server offer"];
      if (!offer.offerId) issues.push("Missing offer ID");
      if (offer.runId !== expectedRunId) issues.push("Run ID mismatch");
      if (+offer.pickNo !== 1) issues.push("Expected pick 1");
      if (!offer.sourceClub) issues.push("Missing source club");
      if (!offer.sourceSeason) issues.push("Missing source season");
      const cards = Array.isArray(offer.cards) ? offer.cards : [];
      if (!cards.length) issues.push("No cards returned");
      if (cards.length > 100) issues.push("Unexpectedly large roster");
      const cardIds = new Set,
        playerIds = new Set,
        openSlots = gt ? gt.slots.filter(slot => !slot.player) : [];
      let anyCardFits = !1;
      for (const card of cards) {
        if (!card || !card.card_id || !card.player_id) {
          issues.push("Malformed card in offer");
          continue
        }
        if (cardIds.has(card.card_id)) issues.push("Duplicate card ID in offer");
        if (playerIds.has(card.player_id)) issues.push("Duplicate player ID in offer");
        cardIds.add(card.card_id);
        playerIds.add(card.player_id);
        if (openSlots.some(slot => f(card, slot.code))) anyCardFits = !0
      }
      if (cards.length && !anyCardFits) issues.push("Offer cannot fill an open slot");
      const fitting = Array.isArray(offer.fittingSlotIndexes)
        ? offer.fittingSlotIndexes.map(Number)
        : [];
      if (!fitting.length) issues.push("Missing fitting slot indexes");
      if (fitting.some(index => !Number.isInteger(index) || index < 0 || index > 10)) {
        issues.push("Invalid fitting slot index")
      }
      return issues
    }

    async function invokeServerRoll(useSkip) {
      if (
        !DRAFT_SHADOW_TEST_ENABLED ||
        !gt ||
        !gt.serverShadow ||
        "verified" !== gt.serverShadow.status ||
        !gt.serverShadow.serverRunId
      ) {
        throw new Error("Server draft run is not ready")
      }
      await initializeOnlineBackend();
      const { data, error } = await onlineClient.functions.invoke("roll-draft", {
        body: {
          runId: gt.serverShadow.serverRunId,
          useSkip: !!useSkip
        }
      });
      if (error) throw error;
      if (!data || !data.ok || !data.offer) {
        throw new Error(data && data.errorCode || "Missing server roulette offer")
      }
      return data.offer
    }

    async function runServerRouletteShadowTest() {
      const rollButton = document.getElementById("serverRollTestBtn"),
        skipButton = document.getElementById("serverSkipTestBtn");
      if (rollButton) rollButton.disabled = !0;
      if (skipButton) skipButton.disabled = !0;
      setDraftBackendStatus("testing", "Private backend test: requesting a secure server roulette offer…");
      try {
        const firstOffer = await invokeServerRoll(!1),
          firstIssues = validateServerRouletteOffer(
            firstOffer,
            gt.serverShadow.serverRunId
          );
        if (firstIssues.length) throw new Error(firstIssues.join(", "));

        const repeatedOffer = await invokeServerRoll(!1);
        if (repeatedOffer.offerId !== firstOffer.offerId) {
          throw new Error("Repeated roll created a free reroll")
        }

        gt.serverShadow.currentOffer = firstOffer;
        gt.serverShadow.rouletteStatus = "verified";
        gt.serverShadow.rouletteCheckedAt = new Date().toISOString();

        const cardCount = Array.isArray(firstOffer.cards)
          ? firstOffer.cards.length
          : 0;
        const slotCount = Array.isArray(firstOffer.fittingSlotIndexes)
          ? firstOffer.fittingSlotIndexes.length
          : 0;

        setDraftBackendStatus(
          "ok",
          `✓ Server roulette verified: ${firstOffer.sourceClub} ${firstOffer.sourceSeason}, ${cardCount} eligible cards, ${slotCount} fitting slots, no free reroll.`
        );
        setDraftBackendTools(
          !0,
          `Offer ${String(firstOffer.offerId).slice(0, 8)}… · ${firstOffer.skipsLeft} skips left`
        );
        console.info("roll-draft shadow verification passed", firstOffer)
      } catch (error) {
        console.warn("roll-draft shadow test failed.", error);
        if (gt && gt.serverShadow) {
          gt.serverShadow.rouletteStatus = "error";
          gt.serverShadow.rouletteError = String(
            error && error.message || error
          ).slice(0, 180)
        }
        setDraftBackendStatus(
          "error",
          `Server roulette test failed: ${String(error && error.message || error)}`
        );
        setDraftBackendTools(!0, "The local roulette still works normally.")
      } finally {
        if (rollButton) rollButton.disabled = !1;
        const offer = gt && gt.serverShadow && gt.serverShadow.currentOffer;
        if (skipButton) skipButton.disabled = !(offer && +offer.skipsLeft > 0)
      }
    }

    async function runServerSkipShadowTest() {
      const rollButton = document.getElementById("serverRollTestBtn"),
        skipButton = document.getElementById("serverSkipTestBtn"),
        previous = gt && gt.serverShadow && gt.serverShadow.currentOffer;
      if (!previous || +previous.skipsLeft <= 0) return;
      if (rollButton) rollButton.disabled = !0;
      if (skipButton) skipButton.disabled = !0;
      setDraftBackendStatus("testing", "Private backend test: using one server-owned skip…");
      try {
        const nextOffer = await invokeServerRoll(!0),
          issues = validateServerRouletteOffer(
            nextOffer,
            gt.serverShadow.serverRunId
          );
        if (issues.length) throw new Error(issues.join(", "));
        if (nextOffer.offerId === previous.offerId) {
          throw new Error("Skip did not replace the active offer")
        }
        if (+nextOffer.skipsLeft !== +previous.skipsLeft - 1) {
          throw new Error("Server skip count did not decrease by one")
        }

        gt.serverShadow.currentOffer = nextOffer;
        gt.serverShadow.skipStatus = "verified";
        gt.serverShadow.skipCheckedAt = new Date().toISOString();

        const cardCount = Array.isArray(nextOffer.cards)
          ? nextOffer.cards.length
          : 0;
        setDraftBackendStatus(
          "ok",
          `✓ Server skip verified: new offer ${nextOffer.sourceClub} ${nextOffer.sourceSeason}, ${cardCount} eligible cards, ${nextOffer.skipsLeft} skips left.`
        );
        setDraftBackendTools(
          !0,
          `Offer ${String(nextOffer.offerId).slice(0, 8)}… · ${nextOffer.skipsLeft} skips left`
        );
        console.info("server skip shadow verification passed", nextOffer)
      } catch (error) {
        console.warn("server skip shadow test failed.", error);
        setDraftBackendStatus(
          "error",
          `Server skip test failed: ${String(error && error.message || error)}`
        )
      } finally {
        if (rollButton) rollButton.disabled = !1;
        const offer = gt && gt.serverShadow && gt.serverShadow.currentOffer;
        if (skipButton) skipButton.disabled = !(offer && +offer.skipsLeft > 0)
      }
    }

    function findServerSelectionCandidate(offer) {
      if (!offer || !Array.isArray(offer.cards) || !gt) return null;

      const offeredSlotIndexes = Array.isArray(offer.fittingSlotIndexes)
        ? offer.fittingSlotIndexes.map(Number)
        : [];

      for (const card of offer.cards) {
        for (const slotIndex of offeredSlotIndexes) {
          const slot = gt.slots.find(item => +item.idx === +slotIndex);
          if (slot && !slot.player && f(card, slot.code)) {
            return {
              card,
              slotIndex: +slotIndex,
              slotCode: slot.code
            }
          }
        }
      }

      return null
    }

    function validateServerSelectionResult(
      result,
      candidate,
      expectedRunId
    ) {
      const issues = [];
      if (!result || "object" !== typeof result) {
        return ["Missing server selection result"]
      }

      const selectedCard = result.selectedCard,
        state = result.state,
        selectedSlotIndex = +result.selectedSlotIndex;

      if (!selectedCard) issues.push("Missing selected card");
      if (selectedCard && selectedCard.card_id !== candidate.card.card_id) {
        issues.push("Selected card ID mismatch")
      }
      if (selectedCard && selectedCard.player_id !== candidate.card.player_id) {
        issues.push("Selected player ID mismatch")
      }
      if (selectedSlotIndex !== candidate.slotIndex) {
        issues.push("Selected slot index mismatch")
      }
      if (!state || state.runId !== expectedRunId) {
        issues.push("Returned draft state mismatch")
      }
      if (state && +state.currentPick !== 2) {
        issues.push(`Expected server Pick 2, received ${state.currentPick}`)
      }
      if (state && "drafting" !== state.status) {
        issues.push(`Unexpected run status: ${state.status}`)
      }

      const slots = state && Array.isArray(state.slots)
        ? state.slots
        : [];
      if (11 !== slots.length) issues.push("Server state no longer has 11 slots");

      const selectedSlots = slots.filter(slot => slot && slot.cardId);
      if (1 !== selectedSlots.length) {
        issues.push(`Expected exactly 1 selected card, received ${selectedSlots.length}`)
      }

      const storedSlot = slots.find(
        slot => +slot.index === candidate.slotIndex
      );
      if (!storedSlot) {
        issues.push("Selected slot is missing from server state")
      } else {
        if (storedSlot.cardId !== candidate.card.card_id) {
          issues.push("Server slot card ID mismatch")
        }
        if (storedSlot.playerId !== candidate.card.player_id) {
          issues.push("Server slot player ID mismatch")
        }
      }

      return issues
    }

    async function invokeServerSelection(candidate, offer) {
      await initializeOnlineBackend();

      const { data, error } = await onlineClient.functions.invoke(
        "select-player",
        {
          body: {
            runId: gt.serverShadow.serverRunId,
            offerId: offer.offerId,
            cardId: candidate.card.card_id,
            slotIndex: candidate.slotIndex
          }
        }
      );

      if (error) throw error;
      if (!data || !data.ok || !data.result) {
        throw new Error(
          data && data.errorCode || "Missing server selection result"
        )
      }

      return data.result && data.result.selection
        ? data.result.selection
        : data.result
    }

    async function verifySelectionReplayRejected(candidate, offer) {
      try {
        const { data, error } = await onlineClient.functions.invoke(
          "select-player",
          {
            body: {
              runId: gt.serverShadow.serverRunId,
              offerId: offer.offerId,
              cardId: candidate.card.card_id,
              slotIndex: candidate.slotIndex
            }
          }
        );

        if (!error && data && data.ok) return !1;
        return !0
      } catch {
        return !0
      }
    }

    async function runServerSelectionShadowTest() {
      const rollButton = document.getElementById("serverRollTestBtn"),
        skipButton = document.getElementById("serverSkipTestBtn"),
        selectButton = document.getElementById("serverSelectTestBtn"),
        offer = gt && gt.serverShadow && gt.serverShadow.currentOffer;

      if (!offer) return;

      const candidate = findServerSelectionCandidate(offer);
      if (!candidate) {
        setDraftBackendStatus(
          "error",
          "Server selection test failed: no returned card matched a fitting open slot."
        );
        return
      }

      if (rollButton) rollButton.disabled = !0;
      if (skipButton) skipButton.disabled = !0;
      if (selectButton) selectButton.disabled = !0;

      setDraftBackendStatus(
        "testing",
        `Private backend test: selecting ${candidate.card.name} into ${candidate.slotCode}…`
      );

      try {
        const result = await invokeServerSelection(candidate, offer),
          issues = validateServerSelectionResult(
            result,
            candidate,
            gt.serverShadow.serverRunId
          );

        if (issues.length) throw new Error(issues.join(", "));

        const replayRejected = await verifySelectionReplayRejected(
          candidate,
          offer
        );

        if (!replayRejected) {
          throw new Error("The same accepted offer could be submitted twice")
        }

        gt.serverShadow.selectionStatus = "verified";
        gt.serverShadow.selectionCheckedAt = new Date().toISOString();
        gt.serverShadow.selectedCard = result.selectedCard;
        gt.serverShadow.selectedSlotIndex = result.selectedSlotIndex;
        gt.serverShadow.serverStateAfterSelection = result.state;

        setDraftBackendStatus(
          "ok",
          `✓ Server selection verified: ${result.selectedCard.name} stored in ${candidate.slotCode}, Pick 1 advanced to Pick 2, and replay was rejected.`
        );
        setDraftBackendTools(
          !0,
          `Server Pick ${result.state.currentPick} · 1 private card stored · local draft remains unchanged`
        );

        console.info(
          "select-player shadow verification passed",
          result
        )
      } catch (error) {
        console.warn("select-player shadow test failed.", error);
        gt.serverShadow.selectionStatus = "error";
        gt.serverShadow.selectionError = String(
          error && error.message || error
        ).slice(0, 180);

        setDraftBackendStatus(
          "error",
          `Server selection test failed: ${String(
            error && error.message || error
          )}`
        );
        setDraftBackendTools(
          !0,
          "The local draft remains unchanged and usable."
        )
      }
    }

    function onlinePayloadForRun(run) {
      return {
        runId: String(
          run && run.runId || ""
        ).trim().slice(0, 200)
      }
    }

    async function submitRunOnline(run, options = {}) {
      if (!run || !run.runId) return !1;

      if (!run.isDailyChallenge) {
        if ("alltime" === run.draftMode) {
          run.onlineSubmission = {
            status: "skipped-alltime",
            updatedAt: new Date().toISOString()
          }
        } else {
          run.onlineSubmission = {
            status: "server-managed",
            updatedAt: new Date().toISOString()
          }
        }

        saveLocalProfile();
        updateOnlineSubmissionNote(run);
        return !1
      }

      if ("official" !== run.dailyAttemptType) {
        run.onlineSubmission = { status: "skipped-practice", updatedAt: new Date().toISOString() };
        saveLocalProfile();
        updateOnlineSubmissionNote(run);
        return !1
      }
      if (run.onlineSubmission && "accepted" === run.onlineSubmission.status) {
        updateOnlineSubmissionNote(run);
        return !0
      }
      run.onlineSubmission = {
        ...(run.onlineSubmission || {}),
        status: "pending",
        attempts: +(run.onlineSubmission && run.onlineSubmission.attempts || 0) + 1,
        updatedAt: new Date().toISOString()
      };
      saveLocalProfile();
      updateOnlineSubmissionNote(run);
      try {
        await initializeOnlineBackend();
        const { data, error } = await onlineClient.functions.invoke("submit-score", {
          body: onlinePayloadForRun(run)
        });
        if (error) throw error;
        if (!data || !data.ok) throw new Error(data && data.error || "Server rejected the score");
        run.onlineSubmission = {
          status: "accepted",
          duplicate: !!data.duplicate,
          serverScore: Number.isFinite(+data.score) ? +data.score : run.score,
          scoreId: data.scoreId || null,
          acceptedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        if (Number.isFinite(+data.score)) run.score = +data.score;
        saveLocalProfile();
        updateOnlineSubmissionNote(run);
        if (!options.silent) l(data.duplicate ? "Score already saved online." : "Score added to the global leaderboard!");
        renderGlobalLeaderboard();
        return !0
      } catch (error) {
        console.warn("Online score submission failed.", error);
        run.onlineSubmission = {
          ...(run.onlineSubmission || {}),
          status: navigator.onLine ? "error" : "pending",
          lastError: String(error && error.message || error).slice(0, 180),
          updatedAt: new Date().toISOString()
        };
        saveLocalProfile();
        updateOnlineSubmissionNote(run);
        return !1
      }
    }

    async function flushPendingOnlineSubmissions() {
      const pending = localProfile.runHistory
        .filter(run =>
          run &&
          run.isDailyChallenge &&
          "official" === run.dailyAttemptType &&
          run.onlineSubmission &&
          (
            "pending" === run.onlineSubmission.status ||
            "error" === run.onlineSubmission.status
          )
        )
        .slice(0, 10);

      for (const run of pending) {
        await submitRunOnline(run, {
          silent: !0
        })
      }
    }

    async function renderDailyLeaderboard() {
      const panel =
          document.getElementById(
            "dailyLeaderboardPanel"
          ),
        body =
          document.getElementById(
            "dailyLeaderboardBody"
          ),
        rankNode =
          document.getElementById(
            "myDailyRank"
          );

      if (
        !panel ||
        !body ||
        !rankNode
      ) return;

      if (!SERVER_DAILY_ENABLED) {
        panel.style.display = "none";
        return
      }

      panel.style.display = "";
      body.innerHTML =
        '<tr><td colspan="9" class="empty">Loading today’s Daily scores…<\/td><\/tr>';
      rankNode.textContent =
        "Loading your Daily rank…";

      try {
        await initializeOnlineBackend();

        const boardResult =
          await onlineClient.rpc(
            "get_daily_leaderboard_v1",
            {
              p_challenge_date: null,
              p_limit: 100
            }
          );

        if (boardResult.error) {
          throw boardResult.error
        }

        const rows =
          Array.isArray(boardResult.data)
            ? boardResult.data
            : [];

        body.innerHTML =
          rows.length
            ? rows.map(row => `<tr>
                <td>${Math.round(+row.rank || 0)}<\/td>
                <td>${escapeHtml(row.display_name || "Anonymous")}<\/td>
                <td class="scorecell">${Math.round(+row.score || 0).toLocaleString()}<\/td>
                <td>${Math.round(+row.leaderboard_attempt_number || 0)} / 3<\/td>
                <td>${"hard" === row.difficulty ? "Hard" : "Normal"}<\/td>
                <td>${(+row.squad_overall || 0).toFixed(1)}<\/td>
                <td>${ordinal(row.final_position)}<\/td>
                <td>${Math.round(+row.points || 0)}<\/td>
                <td>${+row.goal_difference > 0 ? "+" : ""}${Math.round(+row.goal_difference || 0)}<\/td>
              <\/tr>`).join("")
            : '<tr><td colspan="9" class="empty">No Daily scores have been completed today.<\/td><\/tr>';

        const rankResult =
          await onlineClient.rpc(
            "get_my_daily_leaderboard_rank",
            {
              p_challenge_date: null
            }
          );

        if (rankResult.error) {
          throw rankResult.error
        }

        const rank =
          rankResult.data || {};

        rankNode.textContent =
          rank.hasScore
            ? `Your Daily rank: ${rank.rankLabel} · Best score: ${Math.round(+(
                rank.bestScore &&
                rank.bestScore.score
              ) || 0).toLocaleString()} · Best attempt: ${Math.round(+(
                rank.bestScore &&
                rank.bestScore.leaderboardAttemptNumber
              ) || 0)} / 3`
            : "Your Daily rank: Unranked · Complete one of your first three attempts to enter."
      } catch (error) {
        console.warn(
          "Could not load Daily leaderboard.",
          error
        );

        body.innerHTML =
          '<tr><td colspan="9" class="empty">Daily leaderboard unavailable.<\/td><\/tr>';
        rankNode.textContent =
          "Your Daily rank is temporarily unavailable."
      }
    }

    async function renderGlobalLeaderboard() {
      const tabs = document.getElementById("globalLeaderboardTabs"),
        body = document.getElementById("globalLeaderboardBody");
      if (!tabs || !body) return;
      tabs.querySelectorAll("button").forEach(button => button.classList.toggle("sel", button.dataset.period === globalLeaderboardPeriod));
      body.innerHTML = '<tr><td colspan="10" class="empty">Loading global scores…<\/td><\/tr>';
      try {
        await initializeOnlineBackend();
        const { data, error } = await onlineClient.rpc(
          SERVER_DAILY_ENABLED
            ? "get_global_leaderboard_v2"
            : "get_global_leaderboard",
          {
            p_period: globalLeaderboardPeriod,
            p_limit:
              SERVER_DAILY_ENABLED
                ? 100
                : 10
          }
        );
        if (error) throw error;
        const rows = (Array.isArray(data) ? data : []).filter(row => row && "season" === row.draft_mode);
        body.innerHTML = rows.length ? rows.map(row => `<tr>
          <td>${Math.round(+row.rank || 0)}<\/td>
          <td>${escapeHtml(row.display_name || "Anonymous")}<\/td>
          <td class="scorecell">${Math.round(+row.score || 0).toLocaleString()}<\/td>
          <td>${escapeHtml(formatRunDate(row.completed_at))}<\/td>
          <td>${"hard" === row.difficulty ? "Hard" : "Normal"}<\/td>
          <td>${"alltime" === row.draft_mode ? "All-Time" : "Season"}<\/td>
          <td>${(+row.squad_overall || 0).toFixed(1)}<\/td>
          <td>${ordinal(row.final_position)}<\/td>
          <td>${Math.round(+row.points || 0)}<\/td>
          <td>${+row.goal_difference > 0 ? "+" : ""}${Math.round(+row.goal_difference || 0)}<\/td>
        <\/tr>`).join("") : '<tr><td colspan="10" class="empty">No global scores in this period yet.<\/td><\/tr>';

        const myRankNode =
          document.getElementById(
            "myGlobalRank"
          );

        if (
          SERVER_DAILY_ENABLED &&
          myRankNode
        ) {
          const rankResult =
            await onlineClient.rpc(
              "get_my_global_leaderboard_rank",
              {
                p_period:
                  globalLeaderboardPeriod
              }
            );

          if (rankResult.error) {
            myRankNode.textContent =
              "Your rank is temporarily unavailable."
          } else {
            const rank =
              rankResult.data || {};

            myRankNode.textContent =
              rank.hasScore
                ? `Your rank: ${rank.rankLabel} · Best score: ${Math.round(+(
                    rank.bestScore &&
                    rank.bestScore.score
                  ) || 0).toLocaleString()}`
                : "Your rank: Unranked"
          }
        }
      } catch (error) {
        console.warn("Could not load global leaderboard.", error);
        body.innerHTML = '<tr><td colspan="10" class="empty">Global leaderboard unavailable. Local records still work normally.<\/td><\/tr>'
      }
    }


    async function renderSeasonReviewLeaderboard(run = reviewLeaderboardRun) {
      const panel = document.getElementById("reviewLeaderboardPanel"),
        title = document.getElementById("reviewLeaderboardTitle"),
        description = document.getElementById("reviewLeaderboardDescription"),
        badge = document.getElementById("reviewLeaderboardStatusBadge"),
        tabs = document.getElementById("reviewLeaderboardTabs"),
        head = document.getElementById("reviewLeaderboardHead"),
        body = document.getElementById("reviewLeaderboardBody"),
        rankNode = document.getElementById("reviewLeaderboardRank");

      if (
        !panel ||
        !title ||
        !description ||
        !badge ||
        !tabs ||
        !head ||
        !body ||
        !rankNode
      ) return;

      if (!run || "alltime" === run.draftMode) {
        reviewLeaderboardRun = null;
        panel.style.display = "none";
        return
      }

      if (
        !reviewLeaderboardRun ||
        reviewLeaderboardRun.runId !== run.runId
      ) {
        reviewLeaderboardPeriod = "today"
      }

      reviewLeaderboardRun = run;
      panel.style.display = "";

      const isDaily = !!run.isDailyChallenge;

      if (isDaily) {
        title.textContent = "Daily Challenge Leaderboard";
        description.textContent =
          "Today’s Daily leaderboard. Each player appears once with their best score from the first three eligible attempts.";
        badge.textContent =
          "official" === run.dailyAttemptType
            ? "Eligible attempt"
            : "Practice run";
        tabs.style.display = "none";
        rankNode.textContent =
          "official" === run.dailyAttemptType
            ? "Loading your Daily rank…"
            : "This Practice run does not enter the leaderboard. Today’s eligible scores are shown below.";
        head.innerHTML =
          "<tr><th>#</th><th>Team</th><th>Score</th><th>Attempt</th><th>Difficulty</th><th>OVR</th><th>Finish</th><th>Pts</th><th>GD</th></tr>";
        body.innerHTML =
          '<tr><td colspan="9" class="empty">Loading today’s Daily scores…<\/td><\/tr>';

        try {
          await initializeOnlineBackend();

          const boardResult =
            await onlineClient.rpc(
              "get_daily_leaderboard_v1",
              {
                p_challenge_date:
                  run.dailyChallengeDate || null,
                p_limit: 100
              }
            );

          if (boardResult.error) throw boardResult.error;

          const rows =
            Array.isArray(boardResult.data)
              ? boardResult.data
              : [];

          body.innerHTML =
            rows.length
              ? rows.map(row => `<tr>
                  <td>${Math.round(+row.rank || 0)}<\/td>
                  <td>${escapeHtml(row.display_name || "Anonymous")}<\/td>
                  <td class="scorecell">${Math.round(+row.score || 0).toLocaleString()}<\/td>
                  <td>${Math.round(+row.leaderboard_attempt_number || 0)} / 3<\/td>
                  <td>${"hard" === row.difficulty ? "Hard" : "Normal"}<\/td>
                  <td>${(+row.squad_overall || 0).toFixed(1)}<\/td>
                  <td>${ordinal(row.final_position)}<\/td>
                  <td>${Math.round(+row.points || 0)}<\/td>
                  <td>${+row.goal_difference > 0 ? "+" : ""}${Math.round(+row.goal_difference || 0)}<\/td>
                <\/tr>`).join("")
              : '<tr><td colspan="9" class="empty">No eligible Daily scores have been completed yet.<\/td><\/tr>';

          if ("official" === run.dailyAttemptType) {
            const rankResult =
              await onlineClient.rpc(
                "get_my_daily_leaderboard_rank",
                {
                  p_challenge_date:
                    run.dailyChallengeDate || null
                }
              );

            if (rankResult.error) throw rankResult.error;

            const rank = rankResult.data || {};

            rankNode.textContent =
              rank.hasScore
                ? `Your Daily rank: ${rank.rankLabel} · Best score: ${Math.round(+(
                    rank.bestScore &&
                    rank.bestScore.score
                  ) || 0).toLocaleString()} · Best attempt: ${Math.round(+(
                    rank.bestScore &&
                    rank.bestScore.leaderboardAttemptNumber
                  ) || 0)} / 3`
                : "Your Daily rank: Unranked"
          }
        } catch (error) {
          console.warn(
            "Could not load the Season Review Daily leaderboard.",
            error
          );
          body.innerHTML =
            '<tr><td colspan="9" class="empty">Daily leaderboard unavailable.<\/td><\/tr>';
          if ("official" === run.dailyAttemptType) {
            rankNode.textContent =
              "Your Daily rank is temporarily unavailable."
          }
        }

        return
      }

      title.textContent = "Standard Season Leaderboard";
      description.textContent =
        "Ratings by Season runs only. Daily Challenge uses its own board, and Max Rating All-Time never appears here.";
      badge.textContent = "Standard";
      tabs.style.display = "";
      tabs.querySelectorAll("button").forEach(button => {
        button.classList.toggle(
          "sel",
          button.dataset.period === reviewLeaderboardPeriod
        )
      });
      head.innerHTML =
        "<tr><th>#</th><th>Team</th><th>Score</th><th>Date</th><th>Difficulty</th><th>Draft</th><th>OVR</th><th>Finish</th><th>Pts</th><th>GD</th></tr>";
      body.innerHTML =
        '<tr><td colspan="10" class="empty">Loading Standard Season scores…<\/td><\/tr>';
      rankNode.textContent =
        "Loading your Standard Season rank…";

      try {
        await initializeOnlineBackend();

        const boardResult =
          await onlineClient.rpc(
            SERVER_DAILY_ENABLED
              ? "get_global_leaderboard_v2"
              : "get_global_leaderboard",
            {
              p_period: reviewLeaderboardPeriod,
              p_limit:
                SERVER_DAILY_ENABLED
                  ? 100
                  : 10
            }
          );

        if (boardResult.error) throw boardResult.error;

        const rows =
          (
            Array.isArray(boardResult.data)
              ? boardResult.data
              : []
          ).filter(
            row =>
              row &&
              "season" === row.draft_mode
          );

        body.innerHTML =
          rows.length
            ? rows.map(row => `<tr>
                <td>${Math.round(+row.rank || 0)}<\/td>
                <td>${escapeHtml(row.display_name || "Anonymous")}<\/td>
                <td class="scorecell">${Math.round(+row.score || 0).toLocaleString()}<\/td>
                <td>${escapeHtml(formatRunDate(row.completed_at))}<\/td>
                <td>${"hard" === row.difficulty ? "Hard" : "Normal"}<\/td>
                <td>Season<\/td>
                <td>${(+row.squad_overall || 0).toFixed(1)}<\/td>
                <td>${ordinal(row.final_position)}<\/td>
                <td>${Math.round(+row.points || 0)}<\/td>
                <td>${+row.goal_difference > 0 ? "+" : ""}${Math.round(+row.goal_difference || 0)}<\/td>
              <\/tr>`).join("")
            : '<tr><td colspan="10" class="empty">No Standard Season scores in this period yet.<\/td><\/tr>';

        if (SERVER_DAILY_ENABLED) {
          const rankResult =
            await onlineClient.rpc(
              "get_my_global_leaderboard_rank",
              {
                p_period:
                  reviewLeaderboardPeriod
              }
            );

          if (rankResult.error) throw rankResult.error;

          const rank = rankResult.data || {};

          rankNode.textContent =
            rank.hasScore
              ? `Your rank: ${rank.rankLabel} · Best score: ${Math.round(+(
                  rank.bestScore &&
                  rank.bestScore.score
                ) || 0).toLocaleString()}`
              : "Your rank: Unranked"
        } else {
          rankNode.textContent =
            "Standard Season leaderboard loaded."
        }
      } catch (error) {
        console.warn(
          "Could not load the Season Review Standard leaderboard.",
          error
        );
        body.innerHTML =
          '<tr><td colspan="10" class="empty">Standard Season leaderboard unavailable.<\/td><\/tr>';
        rankNode.textContent =
          "Your rank is temporarily unavailable."
      }
    }

    function saveLocalProfile() {
      localProfile.updatedAt = new Date().toISOString();
      try {
        localStorage.setItem(PROFILE_KEY, JSON.stringify(localProfile));
        return !0
      } catch (error) {
        console.warn("Could not save local SPL Draft profile.", error);
        const toast = document.getElementById("toast");
        if (toast) {
          toast.textContent = "Local records could not be saved on this browser.";
          toast.classList.add("on");
          setTimeout(() => toast.classList.remove("on"), 2600)
        }
        return !1
      }
    }

    function updateLocalProfile(mutator) {
      if ("function" === typeof mutator) mutator(localProfile);
      saveLocalProfile();
      return localProfile
    }

    function resetLocalProfile() {
      const currentName = localProfile.teamName || "";
      localProfile = createDefaultProfile();
      localProfile.teamName = currentName;
      saveLocalProfile();
      renderRecordsScreen()
    }


    function normalizeTeamNameForModeration(value) {
      let text =
        String(value == null ? "" : value)
          .trim()
          .toLowerCase();

      text = text
        .replace(/[ـًٌٍَُِّْ]/g, "")
        .replace(/[أإآٱ]/g, "ا")
        .replace(/ى/g, "ي")
        .replace(/ؤ/g, "و")
        .replace(/ئ/g, "ي")
        .replace(/ة/g, "ه");

      const leet = {
        "0": "o", "1": "i", "3": "e",
        "4": "a", "5": "s", "7": "t",
        "@": "a", "$": "s", "!": "i"
      };

      text = text.replace(
        /[013457@$!]/g,
        character => leet[character] || character
      );

      const words = text
        .replace(/[^a-z0-9ء-ي]+/g, " ")
        .trim()
        .replace(/\s+/g, " ");

      return {
        words,
        compact: words.replace(/\s+/g, "")
      }
    }

    function isAllowedTeamName(value) {
      const raw =
        String(value == null ? "" : value).trim();

      if (!raw || raw.length > 25) return false;

      const normalized =
          normalizeTeamNameForModeration(raw),
        blockedWords = new Set([
          "dick", "cock", "cunt", "pussy",
          "penis", "vagina", "fuck", "fucker",
          "fucking", "shit", "bitch", "asshole",
          "porn", "porno", "sex", "boob",
          "boobs", "tit", "tits", "nude",
          "naked", "زب", "زبي", "كس",
          "شرموط", "شرموطه", "قحبه",
          "منيوك", "طيز", "نيك", "ناك"
        ]);

      if (
        normalized.words
          .split(" ")
          .some(word => blockedWords.has(word))
      ) return false;

      const blockedCompact = new Set([
        "dick", "cock", "cunt", "pussy",
        "penis", "vagina", "fuck", "fucker",
        "fucking", "shit", "bitch", "asshole",
        "porn", "porno", "sex", "boob",
        "boobs", "tit", "tits", "nude",
        "naked", "mydick", "suckmydick",
        "fuckyou", "motherfucker", "زب",
        "زبي", "كس", "شرموط", "شرموطه",
        "قحبه", "منيوك", "طيز", "نيك",
        "ناك", "كسمك", "كسامك",
        "ياشرموط", "ياشرموطه", "ياقحبه",
        "زبيفيك"
      ]);

      return !blockedCompact.has(normalized.compact)
    }

    function showTeamNameError(message) {
      const errorNode = xt("nameErr");
      errorNode.textContent = message;
      errorNode.style.display = "block";
      xt("teamNameInput").focus()
    }

    function clearTeamNameError() {
      const errorNode = xt("nameErr");
      errorNode.textContent =
        "Please enter a team name — 1 to 25 characters, not just spaces.";
      errorNode.style.display = "none"
    }

    function persistTeamName(name) {
      const clean =
        normalizePlainText(name, 25);
      if (!clean) return "";
      Nt.teamName = clean;
      localProfile.teamName = clean;
      saveLocalProfile();
      return clean
    }

    function escapeHtml(value) {
      return String(value == null ? "" : value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[char])
    }

    function ordinal(value) {
      const n = +value || 0;
      const mod100 = n % 100;
      if (mod100 >= 11 && mod100 <= 13) return `${n}th`;
      return `${n}${1 === n % 10 ? "st" : 2 === n % 10 ? "nd" : 3 === n % 10 ? "rd" : "th"}`
    }

    function formatRunDate(value, includeTime = !1) {
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) return "Unknown date";
      return new Intl.DateTimeFormat(void 0, includeTime ? {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      } : {
        year: "numeric",
        month: "short",
        day: "numeric"
      }).format(date)
    }

    function calculateRunScore(runData) {
      const pointsScore = Math.round((+runData.points || 0) * RUN_SCORE_CONFIG.pointsValue),
        winsBonus = Math.round((+runData.wins || 0) * RUN_SCORE_CONFIG.winValue),
        goalsBonus = Math.round((+runData.goalsFor || 0) * RUN_SCORE_CONFIG.goalValue),
        goalDifferenceAdjustment = Math.round((+runData.goalDifference || 0) * RUN_SCORE_CONFIG.goalDifferenceValue),
        positionBonus = RUN_SCORE_CONFIG.positionBonuses[+runData.finalPosition] || 0,
        overallBonus = Math.max(0, Math.floor(+runData.squadOverall || 0) - 75) * RUN_SCORE_CONFIG.overallPointValue,
        subtotal = Math.max(0, pointsScore + winsBonus + goalsBonus + goalDifferenceAdjustment + positionBonus + overallBonus),
        difficultyMultiplier = "hard" === runData.difficulty ? RUN_SCORE_CONFIG.hardMultiplier : 1,
        dailyMultiplier = runData.isDailyChallenge ? RUN_SCORE_CONFIG.dailyMultiplier : 1,
        finalScore = Math.max(0, Math.round(subtotal * difficultyMultiplier * dailyMultiplier));
      return {
        pointsScore,
        positionBonus,
        winsBonus,
        goalsBonus,
        goalDifferenceAdjustment,
        overallBonus,
        difficultyMultiplier,
        dailyMultiplier,
        subtotal,
        finalScore
      }
    }

    let achievementQueue = [],
      achievementToastActive = !1;

    function showNextAchievementToast() {
      if (achievementToastActive || !achievementQueue.length) return;
      const id = achievementQueue.shift(),
        definition = ACHIEVEMENT_DEFINITIONS[id],
        toast = xt("achievementToast");
      if (!definition || !toast) return;
      achievementToastActive = !0;
      toast.innerHTML = `<strong>Achievement unlocked<\/strong><span>${escapeHtml(definition.title)} — ${escapeHtml(definition.description)}<\/span>`;
      toast.classList.add("on");
      setTimeout(() => {
        toast.classList.remove("on");
        achievementToastActive = !1;
        setTimeout(showNextAchievementToast, 250)
      }, 2800)
    }

    function unlockAchievement(id, saveNow = !0) {
      if (!ACHIEVEMENT_DEFINITIONS[id] || localProfile.achievements[id]) return !1;
      localProfile.achievements[id] = {
        unlockedAt: new Date().toISOString()
      };
      achievementQueue.push(id);
      showNextAchievementToast();
      saveNow && saveLocalProfile();
      return !0
    }

    function compactDraftedPlayers() {
      return gt && Array.isArray(gt.slots) ? gt.slots.filter(slot => slot.player).map(slot => ({
        playerId: slot.player.player_id,
        name: slot.player.name,
        club: slot.player.club,
        season: slot.player.season,
        position: slot.code,
        rating: +slot.player.rating
      })) : []
    }

    function checkSquadAchievements() {
      if (!gt || !gt.complete) return [];
      const strength = G(),
        players = compactDraftedPlayers(),
        unlocked = [];
      [
        ["FIRST_XI", !0],
        ["ELITE_DRAFT", strength.displayOverall >= 87],
        ["SUPER_TEAM", strength.displayOverall >= 90],
        ["HISTORIAN", new Set(players.map(player => player.season)).size >= 8],
        ["CLUB_COLLECTOR", new Set(players.map(player => player.club)).size >= 8],
        ["PERFECTLY_BALANCED", strength.def >= 85 && strength.mid >= 85 && strength.att >= 85]
      ].forEach(([id, condition]) => condition && unlockAchievement(id, !1) && unlocked.push(id));
      unlocked.length && saveLocalProfile();
      return unlocked
    }

    function incrementUsage(map, key, amount = 1) {
      if (!key) return;
      map[key] = (+map[key] || 0) + amount
    }

    function setHigherRecord(key, value, run, extra = {}) {
      const current = localProfile.personalRecords[key];
      if (!current || +value > +current.value) {
        localProfile.personalRecords[key] = {
          value: +value,
          runId: run.runId,
          completedAt: run.completedAt,
          finalPosition: run.finalPosition,
          squadOverall: run.squadOverall,
          difficulty: run.difficulty,
          ...extra
        };
        return !0
      }
      return !1
    }

    function setLowerRecord(key, value, run, extra = {}) {
      const current = localProfile.personalRecords[key];
      if (!current || +value < +current.value) {
        localProfile.personalRecords[key] = {
          value: +value,
          runId: run.runId,
          completedAt: run.completedAt,
          finalPosition: run.finalPosition,
          squadOverall: run.squadOverall,
          difficulty: run.difficulty,
          ...extra
        };
        return !0
      }
      return !1
    }

    function checkSeasonAchievements(run) {
      const unlocked = [],
        officialDailyDates = Object.values(localProfile.dailyChallengeHistory).filter(item => item && item.officialResult).length,
        conditions = [
          ["FULL_SEASON", !0],
          ["CHAMPIONS", 1 === run.finalPosition],
          ["BACK_TO_BACK", localProfile.streaks.currentChampionship >= 2],
          ["DYNASTY", localProfile.streaks.currentChampionship >= 3],
          ["HARD_WORK", "hard" === run.difficulty],
          ["HARD_MODE_CHAMPION", "hard" === run.difficulty && 1 === run.finalPosition],
          ["INVINCIBLE", 0 === run.losses],
          ["CENTURIONS", run.points >= 100],
          ["GOAL_MACHINE", run.goalsFor >= 100],
          ["IRON_DEFENCE", run.goalsAgainst <= 20],
          ["TOP_TWO", run.finalPosition <= 2],
          ["NO_SECOND_CHANCES", "hard" === run.difficulty],
          ["DAILY_DEBUT", run.isDailyChallenge && "official" === run.dailyAttemptType],
          ["DAILY_ROUTINE", officialDailyDates >= 3],
          ["DEDICATED", localProfile.totals.runsCompleted >= 10],
          ["VETERAN", localProfile.totals.runsCompleted >= 50]
        ];
      conditions.forEach(([id, condition]) => condition && unlockAchievement(id, !1) && unlocked.push(id));
      return unlocked
    }

    function saveRunResult(runData) {
      if (!runData || !runData.runId) return {
        saved: !1,
        reason: "invalid"
      };
      const existing = localProfile.runHistory.find(run => run.runId === runData.runId);
      if (existing) return {
        saved: !1,
        reason: "duplicate",
        run: existing,
        isNewHighScore: !1,
        newAchievementIds: []
      };
      const trustedSeasonResult =
          Ct &&
          Ct.serverMode &&
          Ct.serverFinalResult
            ? Ct.serverFinalResult
            : null,
        normalizedRunData = trustedSeasonResult
          ? {
              ...runData,
              finalPosition: +trustedSeasonResult.finalPosition,
              played: +trustedSeasonResult.played,
              wins: +trustedSeasonResult.wins,
              draws: +trustedSeasonResult.draws,
              losses: +trustedSeasonResult.losses,
              goalsFor: +trustedSeasonResult.goalsFor,
              goalsAgainst: +trustedSeasonResult.goalsAgainst,
              goalDifference: +trustedSeasonResult.goalDifference,
              points: +trustedSeasonResult.points,
              cleanSheets: +trustedSeasonResult.cleanSheets,
              isDailyChallenge:
                trustedSeasonResult.isDailyChallenge === true ||
                runData.isDailyChallenge,
              dailyChallengeDate:
                trustedSeasonResult.challengeDate ||
                runData.dailyChallengeDate ||
                null,
              challengeId:
                trustedSeasonResult.challengeId ||
                runData.challengeId ||
                null,
              dailyAttemptType:
                trustedSeasonResult.dailyAttemptType ||
                runData.dailyAttemptType ||
                null
            }
          : runData,
        scoreBreakdown =
          trustedSeasonResult &&
          trustedSeasonResult.scoreBreakdown
            ? trustedSeasonResult.scoreBreakdown
            : calculateRunScore(normalizedRunData),
        run = {
          ...normalizedRunData,
          score:
            trustedSeasonResult &&
            Number.isFinite(+trustedSeasonResult.finalScore)
              ? +trustedSeasonResult.finalScore
              : scoreBreakdown.finalScore,
          scoreBreakdown
        },
        previousHigh = localProfile.personalRecords.highestRunScore ? +localProfile.personalRecords.highestRunScore.value : -1,
        totals = localProfile.totals;
      totals.runsCompleted++;
      "hard" === run.difficulty ? totals.hardRunsCompleted++ : totals.normalRunsCompleted++;
      1 === run.finalPosition && totals.championships++;
      run.finalPosition <= 2 && totals.topTwoFinishes++;
      run.finalPosition <= 4 && totals.topFourFinishes++;
      totals.totalWins += run.wins;
      totals.totalDraws += run.draws;
      totals.totalLosses += run.losses;
      totals.totalGoalsFor += run.goalsFor;
      totals.totalGoalsAgainst += run.goalsAgainst;
      totals.totalSquadOverall += run.squadOverall;
      totals.totalFinalPosition += run.finalPosition;
      totals.totalPoints += run.points;
      totals.totalRunScore += run.score;

      if (1 === run.finalPosition) {
        localProfile.streaks.currentChampionship++;
        localProfile.streaks.longestChampionship = Math.max(localProfile.streaks.longestChampionship, localProfile.streaks.currentChampionship)
      } else localProfile.streaks.currentChampionship = 0;
      if (run.finalPosition <= 4) {
        localProfile.streaks.currentTopFour++;
        localProfile.streaks.longestTopFour = Math.max(localProfile.streaks.longestTopFour, localProfile.streaks.currentTopFour)
      } else localProfile.streaks.currentTopFour = 0;

      incrementUsage(localProfile.usage.formations, run.formation);
      (run.draftedPlayers || []).forEach(player => {
        incrementUsage(localProfile.usage.clubs, player.club);
        incrementUsage(localProfile.usage.seasons, player.season);
        incrementUsage(localProfile.usage.players, `${player.playerId}|||${player.name}`)
      });

      setHigherRecord("highestRunScore", run.score, run);
      setLowerRecord("bestLeagueFinish", run.finalPosition, run);
      setHigherRecord("highestSquadOverall", run.squadOverall, run);
      setHigherRecord("highestPoints", run.points, run);
      setHigherRecord("mostWins", run.wins, run);
      setHigherRecord("mostGoalsScored", run.goalsFor, run);
      setHigherRecord("bestGoalDifference", run.goalDifference, run);
      setLowerRecord("fewestGoalsConceded", run.goalsAgainst, run);
      setHigherRecord("mostCleanSheets", run.cleanSheets, run);
      const bestDrafted = (run.draftedPlayers || []).slice().sort((a, b) => b.rating - a.rating)[0];
      bestDrafted && setHigherRecord("highestRatedDraftedPlayer", bestDrafted.rating, run, {
        playerName: bestDrafted.name
      });
      "hard" === run.difficulty ? setHigherRecord("bestHardModeScore", run.score, run) : setHigherRecord("bestNormalModeScore", run.score, run);
      run.isDailyChallenge && setHigherRecord("bestDailyChallengeScore", run.score, run);
      localProfile.personalRecords.longestChampionshipStreak = {
        value: localProfile.streaks.longestChampionship
      };
      localProfile.personalRecords.longestTopFourStreak = {
        value: localProfile.streaks.longestTopFour
      };

      localProfile.runHistory.unshift(run);
      localProfile.runHistory = localProfile.runHistory.slice(0, RUN_HISTORY_LIMIT);

      if (run.isDailyChallenge && run.dailyChallengeDate) {
        const existingDaily = safeObject(localProfile.dailyChallengeHistory[run.dailyChallengeDate]);
        if ("official" === run.dailyAttemptType) {
          if (!existingDaily.officialResult) totals.dailyChallengesCompleted++;
          existingDaily.officialResult = {
            runId: run.runId,
            score: run.score,
            finalPosition: run.finalPosition,
            points: run.points,
            squadOverall: run.squadOverall,
            completedAt: run.completedAt
          };
          existingDaily.status = "completed"
        }
        localProfile.dailyChallengeHistory[run.dailyChallengeDate] = existingDaily
      }

      const newAchievementIds = checkSeasonAchievements(run);

      if (trustedSeasonResult) {
        run.onlineSubmission =
          "season" === run.draftMode
            ? {
                status:
                  trustedSeasonResult.leaderboardSubmitted
                    ? "accepted"
                    : "pending",
                serverScore: run.score,
                scoreId:
                  trustedSeasonResult.leaderboardScoreId || null,
                acceptedAt:
                  trustedSeasonResult.leaderboardSubmitted
                    ? new Date().toISOString()
                    : null,
                updatedAt: new Date().toISOString(),
                trustedServerResult: !0
              }
            : {
                status: "skipped-alltime",
                updatedAt: new Date().toISOString(),
                trustedServerResult: !0
              }
      }

      saveLocalProfile();

      if (trustedSeasonResult) {
        updateOnlineSubmissionNote(run);
        renderGlobalLeaderboard()
      } else {
        queueMicrotask(() => submitRunOnline(run))
      }

      return {
        saved: !0,
        run,
        isNewHighScore: run.score > previousHigh,
        newAchievementIds
      }
    }

    function getTopUsage(map) {
      return Object.entries(map || {}).sort((a, b) => +b[1] - +a[1] || String(a[0]).localeCompare(String(b[0])))[0] || null
    }

    function renderPersonalRecords() {
      const records = localProfile.personalRecords,
        cards = [
          ["Highest run score", records.highestRunScore, record => Math.round(record.value).toLocaleString()],
          ["Best league finish", records.bestLeagueFinish, record => ordinal(record.value)],
          ["Championships", { value: localProfile.totals.championships }, record => Math.round(record.value).toLocaleString()],
          ["Highest squad overall", records.highestSquadOverall, record => (+record.value).toFixed(1)],
          ["Highest points", records.highestPoints, record => Math.round(record.value)],
          ["Most wins", records.mostWins, record => Math.round(record.value)],
          ["Most goals scored", records.mostGoalsScored, record => Math.round(record.value)],
          ["Best goal difference", records.bestGoalDifference, record => `${+record.value > 0 ? "+" : ""}${Math.round(record.value)}`],
          ["Fewest goals conceded", records.fewestGoalsConceded, record => Math.round(record.value)],
          ["Most clean sheets", records.mostCleanSheets, record => Math.round(record.value)],
          ["Highest-rated drafted player", records.highestRatedDraftedPlayer, record => `${escapeHtml(record.playerName || "—")} · ${Math.round(record.value)}`],
          ["Best Hard Mode score", records.bestHardModeScore, record => Math.round(record.value).toLocaleString()],
          ["Best Normal Mode score", records.bestNormalModeScore, record => Math.round(record.value).toLocaleString()],
          ["Best Daily Challenge score", records.bestDailyChallengeScore, record => Math.round(record.value).toLocaleString()],
          ["Longest championship streak", records.longestChampionshipStreak, record => Math.round(record.value)],
          ["Longest top-four streak", records.longestTopFourStreak, record => Math.round(record.value)]
        ];
      xt("personalRecordsGrid").innerHTML = cards.map(([label, record, formatter]) => {
        const exists = record && null != record.value,
          meta = exists && record.completedAt ? `${formatRunDate(record.completedAt)} · ${record.difficulty || ""}${record.finalPosition ? ` · ${ordinal(record.finalPosition)}` : ""}` : "No completed run yet";
        return `<div class="record-card"><span>${escapeHtml(label)}<\/span><b>${exists ? formatter(record) : "—"}<\/b><small>${escapeHtml(meta)}<\/small><\/div>`
      }).join("")
    }

    let leaderboardPeriod = "today";

    function startOfLocalWeek(date) {
      const result = new Date(date.getFullYear(), date.getMonth(), date.getDate()),
        day = result.getDay(),
        diff = 0 === day ? -6 : 1 - day;
      result.setDate(result.getDate() + diff);
      result.setHours(0, 0, 0, 0);
      return result
    }

    function runsForPeriod(period) {
      const now = new Date(),
        todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime(),
        tomorrowStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime(),
        weekStart = startOfLocalWeek(now).getTime(),
        nextWeek = weekStart + 7 * 864e5,
        monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime(),
        nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1).getTime();
      return localProfile.runHistory.filter(run => {
        const time = new Date(run.completedAt).getTime();
        if (!Number.isFinite(time)) return !1;
        if ("today" === period) return time >= todayStart && time < tomorrowStart;
        if ("week" === period) return time >= weekStart && time < nextWeek;
        if ("month" === period) return time >= monthStart && time < nextMonth;
        return !0
      }).sort((a, b) => b.score - a.score || a.finalPosition - b.finalPosition || b.points - a.points || b.goalDifference - a.goalDifference || new Date(a.completedAt) - new Date(b.completedAt)).slice(0, 10)
    }

    function renderLocalLeaderboard() {
      xt("leaderboardTabs").querySelectorAll("button").forEach(button => button.classList.toggle("sel", button.dataset.period === leaderboardPeriod));
      const runs = runsForPeriod(leaderboardPeriod);
      xt("leaderboardBody").innerHTML = runs.length ? runs.map((run, index) => `<tr>
        <td>${index + 1}<\/td>
        <td class="scorecell">${Math.round(run.score).toLocaleString()}<\/td>
        <td>${escapeHtml(formatRunDate(run.completedAt))}<\/td>
        <td>${"hard" === run.difficulty ? "Hard" : "Normal"}<\/td>
        <td>${"alltime" === run.draftMode ? "All-Time" : "Season"}<\/td>
        <td>${(+run.squadOverall).toFixed(1)}<\/td>
        <td>${ordinal(run.finalPosition)}<\/td>
        <td>${run.points}<\/td>
        <td>${run.goalDifference > 0 ? "+" : ""}${run.goalDifference}<\/td>
        <td>${run.isDailyChallenge ? '<span class="mini-badge">Daily<\/span>' : ""}<\/td>
      <\/tr>`).join("") : '<tr><td colspan="10" class="empty">No completed runs in this period yet.<\/td><\/tr>'
    }

    function renderAchievements() {
      xt("achievementsGrid").innerHTML = Object.entries(ACHIEVEMENT_DEFINITIONS).map(([id, definition]) => {
        const unlock = localProfile.achievements[id],
          status = unlock ? `Unlocked ${formatRunDate(unlock.unlockedAt)}` : "Locked";
        return `<div class="achievement-card ${unlock ? "unlocked" : "locked"}">
          <div class="achievement-status">${unlock ? "✓ Unlocked" : "Locked"}<\/div>
          <b>${escapeHtml(definition.title)}<\/b>
          <p>${escapeHtml(definition.description)}<\/p>
          <small>${escapeHtml(status)}<\/small>
        <\/div>`
      }).join("")
    }

    function runScoreBreakdownHtml(run) {
      const breakdown =
        normalizeScoreBreakdown(
          run.scoreBreakdown ||
          calculateRunScore(run)
        );
      return `<div class="breakdown-grid">
        <span>Points score <b>${breakdown.pointsScore.toLocaleString()}<\/b><\/span>
        <span>Position bonus <b>${breakdown.positionBonus.toLocaleString()}<\/b><\/span>
        <span>Wins bonus <b>${breakdown.winsBonus.toLocaleString()}<\/b><\/span>
        <span>Goals bonus <b>${breakdown.goalsBonus.toLocaleString()}<\/b><\/span>
        <span>Goal-difference adjustment <b>${breakdown.goalDifferenceAdjustment > 0 ? "+" : ""}${breakdown.goalDifferenceAdjustment.toLocaleString()}<\/b><\/span>
        <span>Squad-overall bonus <b>${breakdown.overallBonus.toLocaleString()}<\/b><\/span>
        <span>Difficulty multiplier <b>×${breakdown.difficultyMultiplier.toFixed(2)}<\/b><\/span>
        <span>Daily multiplier <b>×${breakdown.dailyMultiplier.toFixed(2)}<\/b><\/span>
      <\/div>`
    }

    function renderRecentRuns() {
      const runs = localProfile.runHistory.slice(0, 20);
      xt("recentRuns").innerHTML = runs.length ? runs.map(run => `<details class="run-card">
        <summary>
          <span><b>${Math.round(run.score).toLocaleString()} pts<\/b><small>${escapeHtml(formatRunDate(run.completedAt, !0))} · ${ordinal(run.finalPosition)} · ${(+run.squadOverall).toFixed(1)} OVR<\/small><\/span>
          <span class="run-tags"><i>${"hard" === run.difficulty ? "Hard" : "Normal"}<\/i>${run.isDailyChallenge ? "<i>Daily<\/i>" : ""}<\/span>
        <\/summary>
        <div class="run-details">
          <div class="run-statline">${run.points} pts · ${run.wins}W ${run.draws}D ${run.losses}L · ${run.goalsFor}–${run.goalsAgainst} · GD ${run.goalDifference > 0 ? "+" : ""}${run.goalDifference}<\/div>
          <div class="run-statline">${escapeHtml(run.formation)} · ${"alltime" === run.draftMode ? "Max Rating All-Time" : "Ratings by Season"}<\/div>
          <div class="run-leaders">Top scorer: <b>${escapeHtml(run.topScorer && run.topScorer.name || "—")}<\/b> · Top assister: <b>${escapeHtml(run.topAssister && run.topAssister.name || "—")}<\/b> · Best player: <b>${escapeHtml(run.bestPlayer && run.bestPlayer.name || "—")}<\/b><\/div>
          ${runScoreBreakdownHtml(run)}
          <div class="history-xi">${(run.draftedPlayers || []).map(player => `<span><b>${escapeHtml(player.position)} ${escapeHtml(player.name)}<\/b><small>${Math.round(player.rating)} · ${escapeHtml(player.club)} · ${escapeHtml(player.season)}<\/small><\/span>`).join("")}<\/div>
          <button class="btn ghost sm copy-history-result" data-run-id="${escapeHtml(run.runId)}">Copy Result<\/button>
        <\/div>
      <\/details>`).join("") : '<div class="empty">No completed runs yet.<\/div>';
      xt("recentRuns").querySelectorAll(".copy-history-result").forEach(button => button.addEventListener("click", () => {
        const run = localProfile.runHistory.find(item => item.runId === button.dataset.runId);
        run && copyRunResult(run)
      }))
    }

    function renderCareerStatistics() {
      const totals = localProfile.totals,
        completed = totals.runsCompleted || 0,
        topFormation = getTopUsage(localProfile.usage.formations),
        topClub = getTopUsage(localProfile.usage.clubs),
        topSeason = getTopUsage(localProfile.usage.seasons),
        topPlayer = getTopUsage(localProfile.usage.players),
        topPlayerName = topPlayer ? topPlayer[0].split("|||")[1] || topPlayer[0] : "—",
        stats = [
          ["Runs started", totals.runsStarted],
          ["Runs completed", completed],
          ["Completion percentage", totals.runsStarted ? `${Math.round(100 * completed / totals.runsStarted)}%` : "0%"],
          ["Normal Mode completions", totals.normalRunsCompleted],
          ["Hard Mode completions", totals.hardRunsCompleted],
          ["Official Daily Challenges", totals.dailyChallengesCompleted],
          ["Championships", totals.championships],
          ["Top-two finishes", totals.topTwoFinishes],
          ["Top-four finishes", totals.topFourFinishes],
          ["Total wins", totals.totalWins],
          ["Total draws", totals.totalDraws],
          ["Total losses", totals.totalLosses],
          ["Total goals scored", totals.totalGoalsFor],
          ["Total goals conceded", totals.totalGoalsAgainst],
          ["Average squad overall", completed ? (totals.totalSquadOverall / completed).toFixed(1) : "—"],
          ["Average final position", completed ? (totals.totalFinalPosition / completed).toFixed(1) : "—"],
          ["Average points", completed ? (totals.totalPoints / completed).toFixed(1) : "—"],
          ["Average run score", completed ? Math.round(totals.totalRunScore / completed).toLocaleString() : "—"],
          ["Most-used formation", topFormation ? `${topFormation[0]} (${topFormation[1]})` : "—"],
          ["Most-drafted club", topClub ? `${topClub[0]} (${topClub[1]})` : "—"],
          ["Most-drafted season", topSeason ? `${topSeason[0]} (${topSeason[1]})` : "—"],
          ["Most-drafted player", topPlayer ? `${topPlayerName} (${topPlayer[1]})` : "—"]
        ];
      xt("careerStatsGrid").innerHTML = stats.map(([label, value]) => `<div class="stat-card"><span>${escapeHtml(label)}<\/span><b>${escapeHtml(value)}<\/b><\/div>`).join("")
    }

    function renderDailyHistory() {
      const entries = Object.entries(localProfile.dailyChallengeHistory).sort((a, b) => b[0].localeCompare(a[0]));
      xt("dailyHistory").innerHTML = entries.length ? entries.map(([dateKey, item]) => {
        const result = item.officialResult;
        return `<div class="daily-history-row">
          <div><b>${escapeHtml(dateKey)}<\/b><small>${escapeHtml(item.challengeId || "—")} · ${escapeHtml(item.formation || "—")} · ${"hard" === item.difficulty ? "Hard" : "Normal"} · ${"alltime" === item.draftMode ? "All-Time" : "Season"}<\/small><\/div>
          <div>${result ? `<b>${Math.round(result.score).toLocaleString()}<\/b><small>${ordinal(result.finalPosition)} · ${result.points} pts · ${(+result.squadOverall).toFixed(1)} OVR<\/small>` : `<b>${"started" === item.status ? "Incomplete" : "Not completed"}<\/b><small>Official attempt<\/small>`}<\/div>
        <\/div>`
      }).join("") : '<div class="empty">No Daily Challenge attempts saved yet.<\/div>'
    }

    function renderRecordsScreen() {
      if (!xt("personalRecordsGrid")) return;
      renderPersonalRecords();
      renderLocalLeaderboard();
      renderAchievements();
      renderRecentRuns();
      renderCareerStatistics();
      renderDailyHistory();
      renderDailyLeaderboard();
      renderGlobalLeaderboard()
    }

    function buildShareText(run) {
      const dailyHeader = run.isDailyChallenge ? `SPL DRAFT — DAILY CHALLENGE\nChallenge: ${run.challengeId || run.dailyChallengeDate || "—"}\n\n` : "SPL DRAFT\n\n";
      return `${dailyHeader}${run.teamName || "My Draft"}\nScore: ${Math.round(run.score).toLocaleString()}\nFinished: ${ordinal(run.finalPosition)}\nPoints: ${run.points}\nRecord: ${run.wins}W · ${run.draws}D · ${run.losses}L\nGoals: ${run.goalsFor}–${run.goalsAgainst}\nSquad Overall: ${(+run.squadOverall).toFixed(1)}\nMode: ${"hard" === run.difficulty ? "Hard" : "Normal"}\nDraft: ${"alltime" === run.draftMode ? "Max Rating All-Time" : "Ratings by Season"}\nFormation: ${run.formation}\n\nCan you beat my score?`
    }

    async function copyText(text) {
      try {
        if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
        else {
          const area = document.createElement("textarea");
          area.value = text;
          area.setAttribute("readonly", "");
          area.style.position = "fixed";
          area.style.opacity = "0";
          document.body.appendChild(area);
          area.select();
          if (!document.execCommand("copy")) throw new Error("Copy command failed");
          area.remove()
        }
        l("Result copied.");
        return !0
      } catch (error) {
        console.warn("Could not copy result.", error);
        l("Could not copy automatically.");
        return !1
      }
    }

    function copyRunResult(run) {
      return copyText(buildShareText(run))
    }

    function exportLocalProfile() {
      const blob = new Blob([JSON.stringify(localProfile, null, 2)], {
          type: "application/json"
        }),
        url = URL.createObjectURL(blob),
        link = document.createElement("a");
      link.href = url;
      link.download = `spl-draft-records-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      l("Local records exported.")
    }

    function importLocalProfileFile(file) {
      if (!file) return;
      if (
        Number.isFinite(+file.size) &&
        +file.size > MAX_PROFILE_IMPORT_BYTES
      ) {
        l("That backup is too large. Maximum size is 1 MB.");
        xt("importRecordsFile").value = "";
        return
      }
      const reader = new FileReader;
      reader.onload = () => {
        try {
          const parsed = JSON.parse(String(reader.result || ""));
          if (
            !parsed ||
            "object" !== typeof parsed ||
            Array.isArray(parsed) ||
            !("version" in parsed) ||
            !Array.isArray(parsed.runHistory) ||
            !parsed.totals ||
            parsed.runHistory.length > RUN_HISTORY_LIMIT
          ) throw new Error("Unsupported profile backup");
          const normalized =
            normalizeLocalProfile(parsed);
          m("Import local records?", "This replaces the records currently saved in this browser.", "Import Records", () => {
            localProfile = normalized;
            Nt.teamName = localProfile.teamName || Nt.teamName;
            xt("teamNameInput").value = Nt.teamName;
            saveLocalProfile();
            renderRecordsScreen();
            l("Local records imported.")
          }, xt("importRecordsBtn"))
        } catch (error) {
          console.warn("Invalid profile import.", error);
          l("That file is not a valid SPL Draft records backup.")
        } finally {
          xt("importRecordsFile").value = ""
        }
      };
      reader.readAsText(file)
    }

    function fnv1aHash(text) {
      let hash = 2166136261;
      for (let index = 0; index < text.length; index++) {
        hash ^= text.charCodeAt(index);
        hash = Math.imul(hash, 16777619)
      }
      return hash >>> 0
    }

    function mulberry32(seed) {
      let value = seed >>> 0;
      return function() {
        value += 1831565813;
        let result = value;
        result = Math.imul(result ^ result >>> 15, result | 1);
        result ^= result + Math.imul(result ^ result >>> 7, result | 61);
        return ((result ^ result >>> 14) >>> 0) / 4294967296
      }
    }

    function getUTCDateKey(date = new Date) {
      return date.toISOString().slice(0, 10)
    }

function buildDailyChallenge() {
  throw new Error(
    "PHASE6_SECURE_DAILY_REQUIRED"
  )
}

    let dailyPreview = null,
      pendingSecureDailyCurrent = null,
      pausedDailyScreenId = null,
      dailyRunChoiceCurrent = null,
      dailyRunChoiceSource = null,
      dailyRunChoiceBusy = !1;

    function dailyAttemptType(challenge) {
      const history = localProfile.dailyChallengeHistory[challenge.dateKey];
      return history && history.firstAttemptStartedAt ? "practice" : "official"
    }

    function markDailyAttemptStarted(challenge) {
      const attemptType = dailyAttemptType(challenge),
        entry = {
          ...safeObject(localProfile.dailyChallengeHistory[challenge.dateKey])
        };
      if ("official" === attemptType) {
        entry.firstAttemptStartedAt = new Date().toISOString();
        entry.status = "started"
      }
      entry.challengeId = challenge.challengeId;
      entry.seed = challenge.seed;
      entry.formation = challenge.formation;
      entry.fkey = challenge.fkey;
      entry.difficulty = challenge.difficulty;
      entry.draftMode = challenge.mode;
      localProfile.dailyChallengeHistory[challenge.dateKey] = entry;
      saveLocalProfile();
      return attemptType
    }

    function renderDailyChallengePreview(preview) {
      const attempt =
        preview.serverManaged
          ? preview.attemptType
          : dailyAttemptType(preview);

      xt("dailyTitle").textContent =
        `Daily Challenge — ${formatRunDate(`${preview.dateKey}T12:00:00Z`)}`;

      xt("dailySettings").innerHTML =
        `<div><span>Challenge ID<\/span><b>${escapeHtml(preview.challengeId)}<\/b><\/div>
        <div><span>Formation<\/span><b>${escapeHtml(preview.formation)}<\/b><\/div>
        <div><span>Difficulty<\/span><b>${"hard" === preview.difficulty ? "Hard Mode — No Skips" : "Normal Mode — 2 Skips"}<\/b><\/div>
        <div><span>Draft mode<\/span><b>${"alltime" === preview.mode ? "Max Rating All-Time" : "Ratings by Season"}<\/b><\/div>
        <div><span>Leaderboard attempts left<\/span><b>${Math.max(0, +(preview.leaderboardAttemptsLeft ?? 3))} / ${+(preview.attemptsAllowed || 3)}<\/b><\/div>`;

      const attemptNumber =
        preview.nextLeaderboardAttemptNumber;

      xt("dailyAttempt").innerHTML =
        "official" === attempt
          ? `<b>Leaderboard Attempt ${attemptNumber || Math.min(3, +(preview.leaderboardAttemptsStarted || 0) + 1)} / ${+(preview.attemptsAllowed || 3)}<\/b><span>This attempt can enter today’s separate Daily leaderboard. Starting it consumes one of your three allowed leaderboard attempts.<\/span>`
          : "<b>Practice Attempt<\/b><span>Your three leaderboard attempts have been used. You may continue playing, but later runs will not enter any online leaderboard.<\/span>";

      n("scr-daily")
    }

    function serverDailyPreview(challenge) {
      return {
        dateKey:
          normalizePlainText(
            challenge.challengeDate,
            20
          ),
        challengeId:
          normalizePlainText(
            challenge.challengeId,
            180
          ),
        fkey:
          normalizePlainText(
            challenge.formationCode,
            30
          ),
        formation:
          normalizePlainText(
            challenge.formationName ||
            challenge.formationCode,
            60
          ),
        skips: +challenge.skips,
        difficulty: challenge.difficulty,
        mode: challenge.draftMode,
        attemptType:
          challenge.nextAttemptType || "official",
        attemptsAllowed:
          +challenge.attemptsAllowed || 3,
        leaderboardAttemptsStarted:
          +challenge.leaderboardAttemptsStarted || 0,
        leaderboardAttemptsLeft:
          Number.isFinite(
            +challenge.leaderboardAttemptsLeft
          )
            ? +challenge.leaderboardAttemptsLeft
            : 3,
        nextLeaderboardAttemptNumber:
          challenge.nextLeaderboardAttemptNumber == null
            ? null
            : +challenge.nextLeaderboardAttemptNumber,
        officialAttemptAvailable:
          challenge.leaderboardAttemptsLeft > 0,
        attemptId:
          challenge.officialAttempt &&
          challenge.officialAttempt.attemptId ||
          null,
        serverManaged: !0
      }
    }

    function dailyAttemptStatusLabel(status) {
      return {
        started: "Starting",
        drafting: "Draft in progress",
        squad_complete: "Squad complete",
        simulating: "Season in progress",
        completed: "Season completed",
        cancelled: "Cancelled",
        expired: "Expired"
      }[status] || "Saved"
    }

    function memoryDailyCurrent() {
      if (!(gt && gt.isDaily)) return null;

      return {
        attempt: {
          attemptId:
            gt.dailyAttemptId || null,
          attemptType:
            gt.dailyAttemptType || "practice",
          status:
            Ct && Ct.done
              ? "completed"
              : Ct
                ? "simulating"
                : gt.complete
                  ? "squad_complete"
                  : "drafting",
          challenge:
            gt.challenge || dailyPreview || null
        },
        draft: {
          runId:
            gt.serverShadow &&
            gt.serverShadow.serverRunId ||
            null,
          formationCode:
            gt.fkey,
          formationName:
            gt.form &&
            gt.form.name ||
            gt.fkey,
          difficulty:
            gt.difficulty
        }
      }
    }

    function setDailyRunChoiceBusy(isBusy) {
      dailyRunChoiceBusy = !!isBusy;

      xt("continueDailyRunBtn").disabled =
        dailyRunChoiceBusy;
      xt("startOverDailyRunBtn").disabled =
        dailyRunChoiceBusy;
      xt("cancelDailyRunChoiceBtn").disabled =
        dailyRunChoiceBusy
    }

    function closeDailyRunChoiceModal() {
      if (dailyRunChoiceBusy) return;

      d("dailyRunChoiceModal");
      dailyRunChoiceCurrent = null;
      dailyRunChoiceSource = null;
      xt("dailyRunChoiceError").classList.remove("on")
    }

    function showDailyRunChoiceModal(
      current,
      source = "server"
    ) {
      if (
        !current ||
        !current.attempt
      ) return;

      const attempt = current.attempt,
        draft = current.draft || {},
        challenge =
          attempt.challenge ||
          dailyPreview ||
          {},
        official =
          "official" === attempt.attemptType,
        completed =
          "completed" === attempt.status;

      dailyRunChoiceCurrent = current;
      dailyRunChoiceSource = source;

      xt("dailyRunChoiceTitle").textContent =
        completed
          ? "Daily Challenge completed"
          : "Daily Challenge in progress";

      xt("dailyRunChoiceText").textContent =
        completed
          ? "Continue to review this attempt, or start a new Practice attempt."
          : "Continue from where you stopped, or start over with a fresh run.";

      const leaderboardNumber =
        attempt.leaderboardAttemptNumber != null
          ? +attempt.leaderboardAttemptNumber
          : gt &&
            gt.dailyLeaderboardAttemptNumber != null
            ? +gt.dailyLeaderboardAttemptNumber
            : null;

      xt("dailyRunChoiceType").textContent =
        official
          ? `Leaderboard ${leaderboardNumber || "—"} / 3`
          : "Practice";

      xt("dailyRunChoiceStatus").textContent =
        dailyAttemptStatusLabel(
          attempt.status
        );

      xt("dailyRunChoiceFormation").textContent =
        challenge.formationName ||
        challenge.formation ||
        draft.formationName ||
        draft.formationCode ||
        "—";

      xt("dailyRunChoiceDifficulty").textContent =
        "hard" === (
          challenge.difficulty ||
          draft.difficulty
        )
          ? "Hard"
          : "Normal";

      const attemptsLeft =
          Number.isFinite(
            +(dailyPreview &&
              dailyPreview.leaderboardAttemptsLeft)
          )
            ? +dailyPreview.leaderboardAttemptsLeft
            : Math.max(
                0,
                3 - (leaderboardNumber || 3)
              ),
        nextEligible =
          attemptsLeft > 0;

      xt("dailyRunChoiceWarning").textContent =
        official && !completed
          ? `Starting over permanently forfeits leaderboard attempt ${leaderboardNumber || "this attempt"}. ${nextEligible ? `You will have ${attemptsLeft} leaderboard attempt${1 === attemptsLeft ? "" : "s"} left.` : "Your next run will be Practice."}`
          : completed
            ? nextEligible
              ? `Starting over begins leaderboard attempt ${(leaderboardNumber || 0) + 1} / 3. Your completed score remains saved, and only your best Daily score appears on the Daily leaderboard.`
              : "All three leaderboard attempts are used. Starting over creates a Practice run and does not affect your saved Daily scores."
            : "Starting over cancels this Practice attempt and creates another Practice run.";

      xt("continueDailyRunBtn").textContent =
        completed
          ? "Continue / View Result"
          : "Continue";

      xt("startOverDailyRunBtn").textContent =
        completed
          ? attemptsLeft > 0
            ? `Start Leaderboard Attempt ${(leaderboardNumber || 0) + 1} / 3`
            : "Start Practice Attempt"
          : "Start Over";

      xt("dailyRunChoiceError").textContent = "";
      xt("dailyRunChoiceError").classList.remove("on");
      setDailyRunChoiceBusy(!1);
      r("dailyRunChoiceModal");
      xt("continueDailyRunBtn").focus()
    }

    async function resumeDailySeasonFromCurrent(
      current
    ) {
      const attempt = current.attempt,
        draft = current.draft;

      if (
        !draft ||
        !draft.runId
      ) return !1;

      showSecureSeasonRecoveryModal();

      try {
        await initializeOnlineBackend();

        const { data, error } =
          await onlineClient.functions.invoke(
            "start-season",
            {
              body: {
                runId: draft.runId
              }
            }
          );

        if (error) throw error;

        if (
          !data ||
          !data.ok ||
          !data.draftState ||
          !data.state
        ) {
          throw new Error(
            data &&
            data.errorCode ||
            "DAILY_SEASON_RECOVERY_REJECTED"
          )
        }

        recordSecureDailyAttemptStart(
          attempt
        );

        saveSecureDailyResumeMarker(
          attempt.attemptId,
          draft.runId
        );

        saveSecureSeasonResumeMarker(
          draft.runId
        );

        pendingSecureSeasonResumeState =
          data.state;

        rebuildSecureDraftFromServerState(
          data.draftState,
          attempt
        );

        return !0
      } catch (error) {
        console.warn(
          "Could not restore the Daily season.",
          error
        );

        pendingSecureSeasonResumeState = null;
        setSecureSeasonRecoveryBusy(!1);
        xt("seasonRecoveryText").textContent =
          "Your Daily season is still saved on the server.";
        showSecureSeasonRecoveryError(
          "Recovery did not complete. Check your connection and retry."
        );

        return !1
      }
    }

    async function continueDailyRunChoice() {
      if (
        dailyRunChoiceBusy ||
        !dailyRunChoiceCurrent
      ) return;

      const current =
          dailyRunChoiceCurrent,
        source =
          dailyRunChoiceSource,
        status =
          current.attempt &&
          current.attempt.status;

      setDailyRunChoiceBusy(!0);
      d("dailyRunChoiceModal");

      try {
        let restored = !1;

        if (
          "memory" === source &&
          gt &&
          gt.isDaily
        ) {
          restored =
            resumePausedDailyRun();

          if (
            !restored &&
            Ct
          ) {
            n("scr-season");
            restored = !0
          }
        } else if (
          "simulating" === status ||
          "completed" === status
        ) {
          restored =
            await resumeDailySeasonFromCurrent(
              current
            )
        } else {
          restored =
            await resumeSecureDailyCurrent(
              current
            )
        }

        if (!restored) {
          throw new Error(
            "DAILY_CONTINUE_REJECTED"
          )
        }

        dailyRunChoiceCurrent = null;
        dailyRunChoiceSource = null
      } catch (error) {
        console.warn(
          "Could not continue Daily Challenge.",
          error
        );

        xt("dailyRunChoiceError").textContent =
          "The saved Daily Challenge could not be restored. Check your connection and try again.";
        xt("dailyRunChoiceError").classList.add("on");
        r("dailyRunChoiceModal");
        setDailyRunChoiceBusy(!1)
      }
    }

    async function executeDailyStartOver() {
      if (
        dailyRunChoiceBusy ||
        !dailyRunChoiceCurrent
      ) return;

      const current =
          dailyRunChoiceCurrent,
        attempt =
          current.attempt || {},
        draft =
          current.draft || {},
        completed =
          "completed" === attempt.status;

      setDailyRunChoiceBusy(!0);
      d("dailyRunChoiceModal");

      try {
        await initializeOnlineBackend();

        if (
          !completed &&
          draft.runId
        ) {
          const { data, error } =
            await onlineClient.functions.invoke(
              "cancel-draft",
              {
                body: {
                  runId: draft.runId,
                  reason: "restart_run"
                }
              }
            );

          if (error) throw error;

          if (
            !data ||
            !data.ok
          ) {
            throw new Error(
              data &&
              data.errorCode ||
              "DAILY_CANCEL_REJECTED"
            )
          }
        }

        clearSecureDailyResumeMarker();
        clearSecureSeasonResumeMarker();

        o();

        if (!dailyPreview) {
          const challengeResult =
            await onlineClient.functions.invoke(
              "daily-challenge",
              {
                body: {}
              }
            );

          if (
            challengeResult.error ||
            !challengeResult.data ||
            !challengeResult.data.ok
          ) {
            throw challengeResult.error ||
              new Error(
                "DAILY_CHALLENGE_UNAVAILABLE"
              )
          }

          dailyPreview =
            serverDailyPreview(
              challengeResult.data.challenge
            )
        }

        renderDailyChallengePreview(
          dailyPreview
        );

        pendingSecureDailyCurrent = null;
        dailyRunChoiceCurrent = null;
        dailyRunChoiceSource = null;

        await startSecureDailyChallenge()
      } catch (error) {
        console.warn(
          "Could not start over Daily Challenge.",
          error
        );

        xt("dailyRunChoiceError").textContent =
          "The current Daily attempt could not be closed safely. Nothing was lost; retry after checking your connection.";
        xt("dailyRunChoiceError").classList.add("on");
        r("dailyRunChoiceModal");
        setDailyRunChoiceBusy(!1)
      }
    }

    function startOverDailyRunChoice() {
      if (
        dailyRunChoiceBusy ||
        !dailyRunChoiceCurrent
      ) return;

      const attempt =
          dailyRunChoiceCurrent.attempt || {},
        official =
          "official" === attempt.attemptType,
        completed =
          "completed" === attempt.status;

      if (
        official &&
        !completed
      ) {
        d("dailyRunChoiceModal");

        m(
          "Forfeit this leaderboard attempt?",
          "Starting over permanently consumes this Daily leaderboard attempt. You cannot recover it. Your next run is leaderboard-eligible only while you still have attempts remaining.",
          "Forfeit Attempt & Start Over",
          executeDailyStartOver,
          xt("startOverDailyRunBtn")
        );

        return
      }

      executeDailyStartOver()
    }

    async function openDailyChallengeScreen() {
      const inMemoryCurrent =
        memoryDailyCurrent();

      if (inMemoryCurrent) {
        if (
          gt &&
          gt.challenge
        ) {
          dailyPreview = {
            ...gt.challenge,
            serverManaged: !0,
            attemptType:
              gt.dailyAttemptType ||
              "practice"
          };

          renderDailyChallengePreview(
            dailyPreview
          )
        } else {
          n("scr-daily")
        }

        showDailyRunChoiceModal(
          inMemoryCurrent,
          "memory"
        );

        return
      }

      const name = xt("teamNameInput").value.trim();

      if (!name) {
        showTeamNameError(
          "Please enter a team name — 1 to 25 characters, not just spaces."
        );
        return
      }

      if (!isAllowedTeamName(name)) {
        showTeamNameError(
          "Please choose an appropriate team name."
        );
        return
      }

      clearTeamNameError();
      persistTeamName(name);

      if (!SERVER_DAILY_ENABLED) {
        dailyPreview = buildDailyChallenge();
        renderDailyChallengePreview(dailyPreview);
        return
      }

      xt("dailyTitle").textContent =
        "Daily Challenge — loading…";
      xt("dailySettings").innerHTML =
        '<div><span>Status<\/span><b>Reading today’s trusted challenge…<\/b><\/div>';
      xt("dailyAttempt").innerHTML =
        "<b>Secure Daily Test<\/b><span>The server owns the formation, difficulty, attempt type, roulette and final score.<\/span>";
      xt("dailyStartBtn").disabled = !0;
      n("scr-daily");

      try {
        await initializeOnlineBackend();

        const savedDailyMarker =
            readSecureDailyResumeMarker(),
          { data, error } =
            await onlineClient.functions.invoke(
              "daily-challenge",
              {
                body: {
                  attemptId:
                    savedDailyMarker &&
                    savedDailyMarker.attemptId ||
                    null
                }
              }
            );

        if (error) throw error;

        if (
          !data ||
          !data.ok ||
          !data.challenge
        ) {
          throw new Error(
            data &&
            data.errorCode ||
            "DAILY_CHALLENGE_UNAVAILABLE"
          )
        }

        dailyPreview =
          serverDailyPreview(data.challenge);

        pendingSecureDailyCurrent =
          data.current &&
          data.current.attempt &&
          data.current.draft &&
          [
            "started",
            "drafting",
            "squad_complete",
            "simulating",
            "completed"
          ].includes(
            data.current.attempt.status
          )
            ? data.current
            : null;

        renderDailyChallengePreview(
          dailyPreview
        );

        if (pendingSecureDailyCurrent) {
          const attempt =
            pendingSecureDailyCurrent.attempt;

          xt("dailyAttempt").innerHTML =
            "completed" === attempt.status
              ? `<b>${"official" === attempt.attemptType ? `Leaderboard Attempt ${attempt.leaderboardAttemptNumber || "—"} / 3` : "Practice Attempt"} Completed<\/b><span>Review the result or choose another run. Only the first three attempts can enter the Daily leaderboard.<\/span>`
              : `<b>${"official" === attempt.attemptType ? `Leaderboard Attempt ${attempt.leaderboardAttemptNumber || "—"} / 3` : "Practice Attempt"} Saved<\/b><span>Continue it or start over.<\/span>`;

          xt("dailyStartBtn").textContent =
            "Choose Continue or Start Over";

          setTimeout(() => {
            pendingSecureDailyCurrent &&
              showDailyRunChoiceModal(
                pendingSecureDailyCurrent,
                "server"
              )
          }, 50)
        } else {
          xt("dailyStartBtn").textContent =
            "Start Daily Challenge"
        }
      } catch (error) {
        console.warn(
          "Could not load trusted Daily Challenge.",
          error
        );

        dailyPreview = null;
        pendingSecureDailyCurrent = null;
        xt("dailyTitle").textContent =
          "Daily Challenge unavailable";
        xt("dailySettings").innerHTML =
          '<div><span>Status<\/span><b>Could not load the secure challenge.<\/b><\/div>';
        xt("dailyAttempt").innerHTML =
          "<b>Try again<\/b><span>Check the connection and Edge Function logs, then reopen Daily Challenge.<\/span>"
      } finally {
        xt("dailyStartBtn").disabled =
          !dailyPreview
      }
    }

function buildDailyDraftPlan() {
  throw new Error(
    "PHASE6_SECURE_DAILY_PLAN_REQUIRED"
  )
}

function getDailyCurrentChoice() {
  return null
}

    function runRandom() {
      return gt && gt.isDaily && "function" === typeof gt.random ? gt.random() : Math.random()
    }

    function makeRunId(prefix = "run") {
      const randomPart = Math.floor(Math.random() * 1e9).toString(36);
      return `${prefix}-${Date.now().toString(36)}-${randomPart}`
    }

    function registerRunStarted() {
      localProfile.totals.runsStarted++;
      saveLocalProfile()
    }

    function renderFinalScorePanel(run, saveMeta) {
      xt("finalScorePanel").style.display = "block";
      xt("finalRunScore").textContent = Math.round(run.score).toLocaleString();
      xt("finalScoreBadge").textContent = saveMeta && saveMeta.isNewHighScore ? "New Personal Best" : `${"hard" === run.difficulty ? "Hard" : "Normal"} · ${(+run.squadOverall).toFixed(1)} OVR`;
      xt("finalScoreBadge").classList.toggle("new-best", !!(saveMeta && saveMeta.isNewHighScore));
      xt("finalScoreBreakdown").innerHTML = runScoreBreakdownHtml(run);
      const achievementIds = saveMeta && saveMeta.newAchievementIds || [];
      updateOnlineSubmissionNote(run);
      xt("finalNewAchievements").innerHTML = achievementIds.length ? `<div class="new-achievements"><b>New achievements<\/b>${achievementIds.map(id => `<span>${escapeHtml(ACHIEVEMENT_DEFINITIONS[id].title)}<\/span>`).join("")}<\/div>` : ""
    }

    const Nt = {
        teamName: localProfile.teamName || ""
      },
      Jt = () => Nt.teamName || "Your Draft",
      Tt = {
        skips: null,
        mode: "season",
        fkey: null
      };

    function e() {
      xt("startBtn").disabled = !(null != Tt.fkey && null != Tt.skips)
    }

    let browserHistoryReady = false;

    function n(t, options = {}) {
      const currentScreen = activeScreenId();
      document.querySelectorAll(".screen").forEach(t => t.classList.remove("on")), xt(t).classList.add("on"), window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      if (browserHistoryReady && !options.fromHistory && currentScreen !== t) {
        const state = { splDraft: true, screen: t };
        options.replaceHistory ? history.replaceState(state, "", location.href) : history.pushState(state, "", location.href)
      }
    }

    function l(t) {
      const s = xt("toast");
      s.textContent = t, s.classList.add("on"), setTimeout(() => s.classList.remove("on"), 2e3)
    }

    function r(t) {
      xt(t).classList.add("on")
    }

    function d(t) {
      xt(t).classList.remove("on")
    }

    function syncDailyRunUi() {
      const dailyActive =
          !!(gt && gt.isDaily),
        dailyButton =
          document.getElementById(
            "dailyChallengeBtn"
          );

      document.body.classList.toggle(
        "daily-run-active",
        dailyActive
      );

      if (dailyButton) {
        dailyButton.textContent =
          "Daily Challenge"
      }
    }

    let It = 0;

    function o() {
      It++, F(), gt = null, Ct = null, Qt = null, Kt = [], pausedDailyScreenId = null, pendingSecureDailyCurrent = null, dailyRunChoiceCurrent = null, dailyRunChoiceSource = null, dailyRunChoiceBusy = !1, d("sumModal"), d("swapModal"), d("navModal"), d("resumeDraftModal"), d("seasonRecoveryModal"), d("dailyRunChoiceModal"), xt("rosterPanel").style.display = "none", xt("openSummaryBtn").style.display = "none", syncDailyRunUi(), X(!1)
    }

    function i() {
      Tt.skips = null, xt("diffRow").querySelectorAll(".modecard").forEach(t => t.classList.remove("sel")), Tt.mode = "season", xt("modeRow").querySelectorAll(".modecard").forEach(t => t.classList.toggle("sel", "season" === t.dataset.v)), Tt.fkey = null, xt("fgrid").querySelectorAll(".fcard").forEach(t => t.classList.remove("sel")), e()
    }

    function b() {
      o(), i(), xt("teamNameInput").value = Nt.teamName, n("scr-menu")
    }

    function c() {
      if (gt && gt.isDaily) {
        b();
        return
      }

      o(), i(), n("scr-setup")
    }

    function activeScreenId() {
      const screen = document.querySelector(".screen.on");
      return screen ? screen.id : ""
    }

    function hasUnsavedRunProgress() {
      const screenId = activeScreenId();
      if ("scr-draft" === screenId) return true;
      return "scr-season" === screenId && !!Ct && !Ct.done
    }

    function pauseDailyRunToMenu(
      options = {}
    ) {
      const currentScreen =
          activeScreenId(),
        resumableScreen =
          "scr-season" === currentScreen
            ? "scr-season"
            : "scr-draft";

      pausedDailyScreenId =
        resumableScreen;

      F();
      d("sumModal");
      d("swapModal");
      d("navModal");
      d("resumeDraftModal");
      d("seasonRecoveryModal");

      xt("teamNameInput").value =
        Nt.teamName;

      n(
        "scr-menu",
        options
      );

      syncDailyRunUi();

      l(
        "Daily Challenge saved — open Daily Challenge to resume."
      )
    }

    function resumePausedDailyRun() {
      if (!(gt && gt.isDaily)) {
        pausedDailyScreenId = null;
        return !1
      }

      const target =
        pausedDailyScreenId ||
        (Ct ? "scr-season" : "scr-draft");

      pausedDailyScreenId = null;

      if ("scr-draft" === target) {
        H();
        U()
      }

      n(target);
      syncDailyRunUi();

      l("Daily Challenge resumed.");

      return !0
    }

    function returnToMainMenu() {
      const nameInput = xt("teamNameInput");
      const typedName =
        nameInput
          ? nameInput.value.trim()
          : "";

      typedName &&
        persistTeamName(typedName);

      if (gt && gt.isDaily) {
        pauseDailyRunToMenu();
        return
      }

      b()
    }

    function handleGlobalHome(trigger) {
      if ("scr-menu" === activeScreenId()) {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        return
      }
      if (gt && gt.isDaily) {
        m(
          "Return home?",
          "Your Daily Challenge will stay saved. Open Daily Challenge from the home screen to resume it.",
          "Return Home",
          returnToMainMenu,
          trigger
        );
        return
      }

      hasUnsavedRunProgress()
        ? m(
            "Return home?",
            "Return home? Your current run progress will be lost.",
            "Return Home",
            returnToMainMenu,
            trigger
          )
        : returnToMainMenu()
    }

    function returnHomeFromBrowserBack() {
      const nameInput =
          xt("teamNameInput"),
        typedName =
          nameInput
            ? nameInput.value.trim()
            : "";

      typedName &&
        persistTeamName(typedName);

      if (gt && gt.isDaily) {
        pauseDailyRunToMenu({
          fromHistory: true
        });

        history.replaceState(
          {
            splDraft: true,
            screen: "scr-menu"
          },
          "",
          location.href
        );

        return
      }

      o();
      i();
      xt("teamNameInput").value =
        Nt.teamName;

      n(
        "scr-menu",
        {
          fromHistory: true
        }
      );

      history.replaceState(
        {
          splDraft: true,
          screen: "scr-menu"
        },
        "",
        location.href
      )
    }

    function initializeBrowserBackNavigation() {
      history.replaceState({ splDraft: true, screen: activeScreenId() || "scr-menu" }, "", location.href);
      browserHistoryReady = true;
      window.addEventListener("popstate", () => {
        const currentScreen = activeScreenId();
        if (!currentScreen || "scr-menu" === currentScreen) return;
        if (gt && gt.isDaily) {
          history.pushState(
            {
              splDraft: true,
              screen: currentScreen
            },
            "",
            location.href
          );

          m(
            "Return home?",
            "Your Daily Challenge will stay saved. Open Daily Challenge from the home screen to resume it.",
            "Return Home",
            returnHomeFromBrowserBack,
            xt("globalHomeBtn")
          );

          return
        }

        if (hasUnsavedRunProgress()) {
          history.pushState({ splDraft: true, screen: currentScreen }, "", location.href);
          m("Return home?", "Return home? Your current run progress will be lost.", "Return Home", returnHomeFromBrowserBack, xt("globalHomeBtn"));
          return
        }
        returnHomeFromBrowserBack()
      })
    }
    let Ot = null,
      Ft = null;

    function m(t, s, a, e, n) {
      F(), Ot = e, Ft = n || null, xt("navTitle").textContent = t, xt("navMsg").textContent = s, xt("navConfirm").textContent = a, r("navModal"), xt("navCancel").focus()
    }

    function W(t) {
      d("navModal");
      const s = Ot;
      if (Ot = null, t && s) s();
      else if (Ft) try {
        Ft.focus()
      } catch (t) {}
      Ft = null
    }
    let gt = null;

    function f(t, s) {
      return Dt[s].some(s => t.eligible_slots.includes(s))
    }

    function h() {
      return gt.slots.filter(t => !t.player)
    }

    function v(t) {
      return h().filter(s => f(t, s.code))
    }

    function p(t) {
      return !gt.draftedCards.has(t.card_id) && !gt.draftedPlayers.has(t.player_id)
    }

    function y(t) {
      return t.some(t => p(t) && v(t).length > 0)
    }

function L() {
  return []
}
let Kt = [];

function V() {
  return null
}
    const Rt = 44;

    function q(t, s, a) {
      const e = t => {
          let a = s.filter(s => !t.includes(s));
          return a.length || (a = s.filter(s => s !== t[t.length - 1])), a.length || (a = s), a[Math.floor(runRandom() * a.length)]
        },
        n = [];
      for (let t = 0; t < 16; t++) {
        const s = [n[t - 1]];
        15 === t && s.push(a), n.push(e(s))
      }
      return n.push(a), n.push(e([n[15], a])), t.innerHTML = n.map(t => `<li>${t}<\/li>`).join(""), t.style.transition = "none", t.style.transform = "translateY(0)", t.offsetHeight, 16
    }

    function Z(t) {
      return `<span class="cd" style="background:${(rt[t]||{}).color||"#888"}"><\/span>${escapeHtml(t)}`
    }

    function u(t) {
      return `<span class="season">${escapeHtml(t)}<\/span>`
    }

    const SAFE_CARD_SLOTS = new Set([
      "GK", "CB", "RB", "RWB", "LB", "LWB",
      "CDM", "CM", "CAM", "RM", "RW",
      "LM", "LW", "ST", "CF", "SS"
    ]);

    function normalizePlayerCard(raw) {
      const card = safeObject(raw);
      return {
        ...card,
        card_id:
          normalizePlainText(card.card_id, 180),
        player_id:
          normalizePlainText(card.player_id, 180),
        name:
          normalizePlainText(card.name, 100),
        name_ar:
          normalizePlainText(card.name_ar, 100),
        position:
          normalizePlainText(card.position, 30),
        nationality:
          normalizePlainText(card.nationality, 80),
        nationality_ar:
          normalizePlainText(card.nationality_ar, 80),
        club:
          normalizePlainText(card.club, 100),
        club_ar:
          normalizePlainText(card.club_ar, 100),
        season:
          normalizePlainText(card.season, 20),
        rating:
          safeFiniteNumber(card.rating, 0, 0, 100),
        apps:
          safeFiniteNumber(card.apps, 0, 0, 1000),
        minutes:
          safeFiniteNumber(card.minutes, 0, 0, 100000),
        goals:
          safeFiniteNumber(card.goals, 0, 0, 1000),
        assists:
          safeFiniteNumber(card.assists, 0, 0, 1000),
        clean_sheets:
          card.clean_sheets === ""
            ? ""
            : safeFiniteNumber(card.clean_sheets, 0, 0, 1000),
        goals_conceded:
          card.goals_conceded === ""
            ? ""
            : safeFiniteNumber(card.goals_conceded, 0, 0, 5000),
        eligible_slots:
          (Array.isArray(card.eligible_slots)
            ? card.eligible_slots
            : [])
            .map(slot =>
              normalizePlainText(slot, 10).toUpperCase()
            )
            .filter(slot => SAFE_CARD_SLOTS.has(slot))
            .slice(0, 6)
      }
    }

    function serverOfferToLocalRoll(offer) {
      return {
        club:
          normalizePlainText(offer.sourceClub, 100),
        season:
          normalizePlainText(offer.sourceSeason, 20),
        pool:
          Array.isArray(offer.cards)
            ? offer.cards
                .map(normalizePlayerCard)
                .filter(card =>
                  card.card_id &&
                  card.player_id &&
                  card.eligible_slots.length
                )
            : [],
        sourceClubAr:
          normalizePlainText(offer.sourceClubAr, 100),
        offerId:
          normalizePlainText(offer.offerId, 180),
        fittingSlotIndexes: Array.isArray(
          offer.fittingSlotIndexes
        )
          ? offer.fittingSlotIndexes.map(Number)
          : [],
        targetIdx:
          Array.isArray(
            offer.fittingSlotIndexes
          ) &&
          offer.fittingSlotIndexes.length
            ? +offer.fittingSlotIndexes[0]
            : null
      }
    }

    function showSecureServerOffer(
      offer,
      {
        animate = !0,
        prefetched = !1,
        resumed = !1
      } = {}
    ) {
      if (!gt || !gt.serverMode || !offer) return;

      const selectedPool = serverOfferToLocalRoll(offer);

      if (!selectedPool.pool.length) {
        throw new Error("Server returned an empty roster")
      }

      gt.skipsLeft = +offer.skipsLeft;
      gt.serverShadow.currentOffer = offer;
      gt.serverShadow.prefetchedOffer = null;

      const finishDisplay = () => {
        if (!gt || !gt.serverMode) return;

        gt.rolling = !1;
        gt.serverActionPending = !1;
        gt.roll = selectedPool;
        setQueuedRollVisual(!1);

        X(gt.skipsLeft > 0);

        const clubStyle = rt[selectedPool.club] || {
          color: "#888"
        };

        xt("rosterPanel").style.display = "block";
        xt("clubDot").style.background = clubStyle.color;
        xt("clubName").textContent = ot(selectedPool.club);
        xt("clubSeason").textContent =
          "alltime" === gt.mode
            ? selectedPool.season + " · PEAK CARDS"
            : selectedPool.season;
        xt("clubNameAr").textContent =
          selectedPool.sourceClubAr || "";

        D();

        setDraftBackendStatus(
          "ok",
          `${resumed ? "✓ Resumed" : "✓ Secure"} server offer ready: ${ot(
            selectedPool.club
          )} ${selectedPool.season} · ${
            selectedPool.pool.length
          } eligible cards · ${gt.skipsLeft} skips left${
            ""
          }.`
        )
      };

      if (!animate) {
        finishDisplay();
        return
      }

const allClubNames =
    PHASE6_PUBLIC_CLUB_NAMES,
        clubStop = q(
          xt("clubStrip"),
          allClubNames.map(Z),
          Z(ot(selectedPool.club))
        ),
        seasonStop = q(
          xt("seasonStrip"),
          nt.map(u),
          u(selectedPool.season)
        );

      requestAnimationFrame(() => {
        xt("clubStrip").style.transition =
          "transform 2.4s cubic-bezier(.14,.84,.16,1)";
        xt("seasonStrip").style.transition =
          "transform 2.8s cubic-bezier(.14,.84,.16,1)";
        xt("clubStrip").style.transform =
          `translateY(${-(clubStop-1)*Rt}px)`;
        xt("seasonStrip").style.transform =
          `translateY(${-(seasonStop-1)*Rt}px)`
      });

      const token = It;
      setTimeout(() => {
        token === It && finishDisplay()
      }, 2950)
    }

    function setQueuedRollVisual(active) {
      const rollButton = xt("rollBtn"),
        rouletteArea = rollButton &&
          rollButton.closest(".roulette");

      if (rouletteArea) {
        rouletteArea.classList.toggle(
          "roulette-queued",
          !!active
        )
      }

      if (rollButton) {
        rollButton.textContent = active
          ? "Rolling…"
          : "Roll"
      }
    }

    function queueRollBehindPendingSelection() {
      if (
        !gt ||
        !gt.serverShadow ||
        !gt.serverShadow.selectionPending ||
        gt.serverShadow.queuedRollRequested
      ) return;

      gt.serverShadow.queuedRollRequested = !0;
      gt.rolling = !0;

      xt("rollBtn").disabled = !0;
      X(!1);
      xt("rosterPanel").style.display = "none";
      setQueuedRollVisual(!0);

      setDraftBackendStatus(
        "testing",
        "Secure server draft: Roll accepted — finishing the previous pick during the roulette."
      )
    }

    async function runServerDraftRoll(useSkip) {
      if (
        !gt ||
        !gt.serverMode ||
        !gt.serverShadow ||
        "verified" !== gt.serverShadow.status ||
        !gt.serverShadow.serverRunId ||
        gt.complete ||
        gt.pendingPlayer
      ) return;

      if (gt.serverShadow.selectionPending) {
        if (!useSkip) {
          queueRollBehindPendingSelection()
        }
        return
      }

      if (gt.rolling || gt.serverActionPending) return;
      if (useSkip && gt.skipsLeft <= 0) return;

      const prefetchedOffer =
        !useSkip &&
        gt.serverShadow.prefetchedOffer;

      gt.serverActionPending = !0;
      gt.rolling = !0;
      xt("rollBtn").disabled = !0;
      X(!1);
      xt("rosterPanel").style.display = "none";

      if (prefetchedOffer) {
        setDraftBackendStatus(
          "testing",
          "Secure server draft: rolling the next eligible club and season…"
        );

        try {
          showSecureServerOffer(
            prefetchedOffer,
            {
              animate: !0,
              prefetched: !0
            }
          )
        } catch (error) {
          gt.rolling = !1;
          gt.serverActionPending = !1;
          gt.serverShadow.prefetchedOffer = null;
          setQueuedRollVisual(!1);
          xt("rollBtn").disabled = !1;

          setDraftBackendStatus(
            "error",
            `Could not display the preloaded offer: ${String(
              error && error.message || error
            )}`
          )
        }

        return
      }

      setDraftBackendStatus(
        "testing",
        useSkip
          ? "Secure server draft: using a server-owned skip…"
          : "Secure server draft: rolling an eligible private club-season pool…"
      );

      try {
        await initializeOnlineBackend();

        const { data, error } =
          await onlineClient.functions.invoke(
            gt.isDaily
              ? "roll-daily"
              : "roll-draft",
            {
              body: {
                runId: gt.serverShadow.serverRunId,
                useSkip: !!useSkip
              }
            }
          );

        if (error) throw error;
        if (!data || !data.ok || !data.offer) {
          throw new Error(
            data && data.errorCode || "Missing server offer"
          )
        }

        showSecureServerOffer(
          data.offer,
          {
            animate: !0,
            prefetched: !1
          }
        )
      } catch (error) {
        gt.rolling = !1;
        gt.serverActionPending = !1;
        gt.roll = null;
        setQueuedRollVisual(!1);

        console.warn(
          "Secure server roll failed.",
          error
        );

        setDraftBackendStatus(
          "error",
          `Secure server roll failed: ${String(
            error && error.message || error
          )}`
        );

        xt("rollBtn").disabled = !1
      }
    }

    function applyServerSelectionToLocalDraft(
      selectedCard,
      slotIndex,
      serverState,
      nextOffer = null
    ) {
      const card = {
        ...selectedCard,
        rating: +selectedCard.rating,
        eligible_slots: Array.isArray(
          selectedCard.eligible_slots
        )
          ? selectedCard.eligible_slots
          : []
      };

      const queuedRoll = !!(
        gt.serverShadow &&
        gt.serverShadow.queuedRollRequested
      );

      gt.slots[slotIndex].player = card;
      gt.draftedCards.add(card.card_id);
      gt.draftedPlayers.add(card.player_id);
      gt.pendingPlayer = null;
      gt.roll = null;
      gt.pick = +serverState.currentPick;
      gt.skipsLeft = +serverState.skipsLeft;
      gt.serverShadow.currentOffer = null;
      gt.serverShadow.prefetchedOffer = nextOffer || null;
      gt.serverShadow.selectionPending = !1;
      gt.serverShadow.queuedRollRequested = !1;

      xt("rosterPanel").style.display = "none";
      X(!1);
      U(slotIndex);
      H();

      saveSecureDraftResumeMarker(
        gt.serverShadow.serverRunId
      );

      if ("squad_complete" === serverState.status) {
        gt.complete = !0;
        gt.rolling = !1;
        setQueuedRollVisual(!1);
        xt("rollBtn").disabled = !0;
        if (gt.isDaily) {
          clearSecureDailyResumeMarker()
        } else {
          clearSecureDraftResumeMarker()
        }

        setDraftBackendStatus(
          "ok",
          "✓ Secure server draft complete: all 11 private selections are stored and validated."
        );

        checkSquadAchievements();

        const token = It;
        setTimeout(() => {
          token === It && gt && g()
        }, 450);

        return
      }

      if (queuedRoll && nextOffer) {
        gt.rolling = !0;
        xt("rollBtn").disabled = !0;
        setQueuedRollVisual(!0);

        setDraftBackendStatus(
          "testing",
          "Secure server draft: previous pick confirmed — roulette is landing on the next eligible offer."
        );

        showSecureServerOffer(
          nextOffer,
          {
            animate: !0,
            prefetched: !0
          }
        );

        return
      }

      gt.rolling = !1;
      setQueuedRollVisual(!1);
      xt("rollBtn").disabled = !1;

      setDraftBackendStatus(
        "ok",
        nextOffer
          ? `✓ Selection confirmed. Pick ${gt.pick} is ready.`
          : `✓ Secure selection stored. Server advanced to Pick ${gt.pick}.`
      )
    }

    function applyOptimisticServerSelection(
      card,
      slotIndex
    ) {
      const normalizedCard =
        normalizePlayerCard(card);

      const snapshot = {
        slotIndex,
        previousPlayer: gt.slots[slotIndex].player,
        previousPick: gt.pick,
        previousRoll: gt.roll,
        previousCurrentOffer:
          gt.serverShadow.currentOffer || null,
        previousPrefetchedOffer:
          gt.serverShadow.prefetchedOffer || null,
        cardId: normalizedCard.card_id,
        playerId: normalizedCard.player_id
      };

      gt.slots[slotIndex].player = normalizedCard;
      gt.draftedCards.add(normalizedCard.card_id);
      gt.draftedPlayers.add(normalizedCard.player_id);
      gt.pendingPlayer = null;
      gt.roll = null;
      gt.pick = Math.min(12, +gt.pick + 1);
      gt.serverShadow.currentOffer = null;

      xt("rosterPanel").style.display = "none";
      X(!1);
      U(slotIndex);
      H();

      gt.serverShadow.selectionPending = !0;
      gt.serverShadow.queuedRollRequested = !1;
      gt.rolling = !1;

      xt("rollBtn").disabled = !1;
      setQueuedRollVisual(!1);

      setDraftBackendStatus(
        "testing",
        `Confirming ${normalizedCard.name} securely. You can press Roll now.`
      );

      return snapshot
    }

    function rollbackOptimisticServerSelection(
      snapshot
    ) {
      if (!gt || !snapshot) return;

      gt.slots[snapshot.slotIndex].player =
        snapshot.previousPlayer || null;
      gt.pick = snapshot.previousPick;
      gt.roll = snapshot.previousRoll;
      gt.serverShadow.currentOffer =
        snapshot.previousCurrentOffer;
      gt.serverShadow.prefetchedOffer =
        snapshot.previousPrefetchedOffer;

      gt.draftedCards.delete(snapshot.cardId);
      gt.draftedPlayers.delete(snapshot.playerId);
      gt.pendingPlayer = null;
      gt.rolling = !1;
      gt.serverActionPending = !1;
      gt.serverShadow.selectionPending = !1;
      gt.serverShadow.queuedRollRequested = !1;
      setQueuedRollVisual(!1);

      U(snapshot.slotIndex);
      H();

      if (gt.roll) {
        xt("rosterPanel").style.display = "block";
        D()
      }

      X(gt.skipsLeft > 0);
      xt("rollBtn").disabled = !1
    }

    async function runServerDraftSelection(
      card,
      slotIndex
    ) {
      if (
        !gt ||
        !gt.serverMode ||
        !gt.roll ||
        !gt.roll.offerId ||
        gt.serverActionPending
      ) return;

      const activeOffer = gt.roll,
        snapshot = applyOptimisticServerSelection(
          card,
          slotIndex
        );

      gt.serverActionPending = !0;
      X(!1);

      try {
        await initializeOnlineBackend();

        const { data, error } =
          await onlineClient.functions.invoke(
            gt.isDaily
              ? "select-daily-player"
              : "select-player",
            {
              body: {
                runId: gt.serverShadow.serverRunId,
                offerId: activeOffer.offerId,
                cardId: card.card_id,
                slotIndex
              }
            }
          );

        if (error) throw error;
        if (!data || !data.ok || !data.result) {
          throw new Error(
            data && data.errorCode ||
              "Missing server selection result"
          )
        }

        const payload = data.result,
          selection = payload.selection || payload,
          nextOffer = payload.nextOffer || null;

        applyServerSelectionToLocalDraft(
          selection.selectedCard,
          +selection.selectedSlotIndex,
          selection.state,
          nextOffer
        )
      } catch (error) {
        console.warn(
          "Secure server selection failed.",
          error
        );

        rollbackOptimisticServerSelection(
          snapshot
        );

        setDraftBackendStatus(
          "error",
          `Secure selection failed and was rolled back: ${String(
            error && error.message || error
          )}`
        )
      } finally {
        if (gt && !gt.rolling) {
          gt.serverActionPending = !1
        }
      }
    }

    function rebuildSecureDraftFromServerState(
      state,
      dailyAttempt = null
    ) {
      if (
        !state ||
        !state.runId ||
        !state.formationCode ||
        !Xt[state.formationCode]
      ) {
        throw new Error("Invalid resumable server state")
      }

      It++;
      F();

      const formation = Xt[state.formationCode],
        stateSlots = Array.isArray(state.slots)
          ? state.slots
          : [],
        isDaily =
          SERVER_DAILY_ENABLED &&
          state.isDailyChallenge === true,
        dailyChallenge =
          isDaily
            ? {
                dateKey:
                  dailyAttempt &&
                  dailyAttempt.challenge &&
                  dailyAttempt.challenge.challengeDate ||
                  state.challengeDate ||
                  new Date().toISOString().slice(0, 10),
                challengeId:
                  dailyAttempt &&
                  dailyAttempt.challenge &&
                  dailyAttempt.challenge.challengeId ||
                  state.challengeId ||
                  "",
                fkey: state.formationCode,
                formation:
                  dailyAttempt &&
                  dailyAttempt.challenge &&
                  dailyAttempt.challenge.formationName ||
                  state.formationName ||
                  state.formationCode,
                skips: +state.skipsInitial,
                difficulty: state.difficulty,
                mode: state.draftMode,
                serverManaged: !0
              }
            : null;

      gt = {
        runId: state.clientRunId ||
          makeRunId(isDaily ? "daily" : "run"),
        fkey: state.formationCode,
        mode: state.draftMode,
        skipsLeft: +state.skipsLeft,
        skipsInitial: +state.skipsInitial,
        slots: formation.slots.map(
          ([code, x, y], index) => {
            const saved = stateSlots.find(
              slot => +slot.index === index
            );
            const savedCard =
              saved && saved.card
                ? normalizePlayerCard(saved.card)
                : null;

            return {
              idx: index,
              code,
              x,
              y,
              player: savedCard
            }
          }
        ),
        draftedCards: new Set,
        draftedPlayers: new Set,
        pick: +state.currentPick || 1,
        roll: null,
        pendingPlayer: null,
        rolling: !1,
        complete:
          "squad_complete" === state.status,
        isDaily,
        challenge: dailyChallenge,
        dailyAttemptType:
          isDaily
            ? dailyAttempt &&
              dailyAttempt.attemptType ||
              null
            : null,
        dailyAttemptId:
          isDaily
            ? dailyAttempt &&
              dailyAttempt.attemptId ||
              null
            : null,
        dailyLeaderboardAttemptNumber:
          isDaily &&
          dailyAttempt &&
          dailyAttempt.leaderboardAttemptNumber != null
            ? +dailyAttempt.leaderboardAttemptNumber
            : null,
        dailyPlan: null,
        dailyPickIndex: 0,
        dailyChoiceIndex: 0,
        random: null,
        serverMode: !0,
        serverActionPending: !1,
        serverShadow: {
          status: "verified",
          serverRunId: state.runId,
          checkedAt: new Date().toISOString(),
          currentOffer: null,
          prefetchedOffer: state.activeOffer || null,
          selectionPending: !1,
          queuedRollRequested: !1,
          resumed: !0
        }
      };

      syncDailyRunUi();

      for (const slot of gt.slots) {
        if (slot.player) {
          gt.draftedCards.add(slot.player.card_id);
          gt.draftedPlayers.add(slot.player.player_id)
        }
      }

      if (state.teamName) {
        xt("teamNameInput").value = state.teamName;
        persistTeamName(state.teamName)
      }

      Kt = [];
      xt("formName").textContent =
        `${formation.name}${isDaily ? " · DAILY CHALLENGE" : ""}`;
      xt("openSummaryBtn").style.display =
        "none";
      xt("rosterPanel").style.display =
        "none";

      H();
      U();
      n("scr-draft");

      saveSecureDraftResumeMarker(state.runId);

      if (gt.complete) {
        xt("rollBtn").disabled = !0;
        X(!1);
        clearSecureDraftResumeMarker();

        setDraftBackendStatus(
          "ok",
          "✓ Secure completed squad restored from the private server."
        );

        if (pendingSecureSeasonResumeState) {
          const restoredSeasonState =
            pendingSecureSeasonResumeState;

          pendingSecureSeasonResumeState = null;

          setTimeout(() => {
            if (gt) {
              d("seasonRecoveryModal");
              initializeSecureSeasonScreen(
                restoredSeasonState
              );
              l("Secure season restored.")
            }
          }, 150)
        } else {
          setTimeout(() => {
            gt && g()
          }, 250)
        }

        return
      }

      xt("rollBtn").disabled = !1;

      setDraftBackendStatus(
        "ok",
        `✓ Secure draft resumed: Pick ${gt.pick}, ${
          gt.draftedCards.size
        } players restored, ${gt.skipsLeft} skips left. Press Roll to reveal the next club and season.`
      );

      xt("rosterPanel").style.display = "none";
      gt.roll = null;
      X(!1)
    }

    function recordSecureDailyAttemptStart(attempt) {
      if (
        !attempt ||
        !attempt.challenge ||
        !attempt.challenge.challengeDate
      ) return;

      const dateKey =
          attempt.challenge.challengeDate,
        previous =
          safeObject(
            localProfile.dailyChallengeHistory[
              dateKey
            ]
          ),
        entry = {
          ...previous,
          firstAttemptStartedAt:
            "official" === attempt.attemptType
              ? previous.firstAttemptStartedAt ||
                attempt.startedAt ||
                new Date().toISOString()
              : previous.firstAttemptStartedAt ||
                null,
          status: "started",
          challengeId:
            attempt.challenge.challengeId,
          formation:
            attempt.challenge.formationName ||
            attempt.challenge.formationCode,
          fkey:
            attempt.challenge.formationCode,
          difficulty:
            attempt.challenge.difficulty,
          draftMode:
            attempt.challenge.draftMode
        };

      localProfile.dailyChallengeHistory[
        dateKey
      ] = entry;

      saveLocalProfile()
    }

    async function resumeSecureDailyCurrent(
      current
    ) {
      if (
        !current ||
        !current.attempt ||
        !current.draft
      ) return !1;

      const attempt = current.attempt,
        draft = current.draft;

      recordSecureDailyAttemptStart(
        attempt
      );

      saveSecureDailyResumeMarker(
        attempt.attemptId,
        draft.runId
      );

      if (
        "simulating" === attempt.status &&
        readSecureSeasonResumeMarker()
      ) {
        pendingSecureDailyCurrent = null;

        const restored =
          await tryResumeSecureSeason();

        if (restored) {
          l(
            "Secure Daily season restored."
          )
        }

        return restored
      }

      rebuildSecureDraftFromServerState(
        draft,
        attempt
      );

      pendingSecureDailyCurrent = null;

      l(
        "Secure Daily Challenge restored."
      );

      return !0
    }

    async function startSecureDailyChallenge() {
      if (
        !SERVER_DAILY_ENABLED ||
        !dailyPreview
      ) return;

      const button = xt("dailyStartBtn"),
        clientRunId = makeRunId("daily");

      if (!isAllowedTeamName(Jt())) {
        n("scr-menu");
        showTeamNameError(
          "Please choose an appropriate team name."
        );
        return
      }

      button.disabled = !0;
      button.textContent =
        "Starting secure Daily…";

      try {
        await initializeOnlineBackend();

        const { data, error } =
          await onlineClient.functions.invoke(
            "start-daily",
            {
              body: {
                clientRunId,
                teamName: Jt()
              }
            }
          );

        if (error) throw error;

        if (
          !data ||
          !data.ok ||
          !data.attempt ||
          !data.draft
        ) {
          throw new Error(
            data &&
            data.errorCode ||
            "START_DAILY_REJECTED"
          )
        }

        registerRunStarted();
        recordSecureDailyAttemptStart(
          data.attempt
        );

        rebuildSecureDraftFromServerState(
          data.draft,
          data.attempt
        );

        saveSecureDailyResumeMarker(
          data.attempt.attemptId,
          data.draft.runId
        );

        setDraftBackendStatus(
          "ok",
          `✓ Secure Daily ${data.attempt.attemptType} attempt active. The server controls every pool, skip and selection.`
        );

        l(
          "Secure Daily Challenge started."
        )
      } catch (error) {
        console.warn(
          "Could not start secure Daily Challenge.",
          error
        );

        setDraftBackendStatus(
          "error",
          "Secure Daily Challenge could not start. Check the Edge Function logs and retry."
        );

        l(
          "Secure Daily Challenge could not start."
        )
      } finally {
        button.disabled = !1;
        button.textContent =
          "Start Daily Challenge"
      }
    }

    async function tryResumeSecureDailyChallenge() {
      if (!SERVER_DAILY_ENABLED) return !1;

      const marker =
        readSecureDailyResumeMarker();

      if (
        !marker ||
        !marker.attemptId
      ) return !1;

      try {
        await initializeOnlineBackend();

        const { data, error } =
          await onlineClient.functions.invoke(
            "daily-challenge",
            {
              body: {
                attemptId: marker.attemptId
              }
            }
          );

        if (error) throw error;

        if (
          !data ||
          !data.ok ||
          !data.current ||
          !data.current.attempt ||
          !data.current.draft
        ) {
          clearSecureDailyResumeMarker();
          return !1
        }

        const attempt =
            data.current.attempt,
          draft =
            data.current.draft;

        if (
          "cancelled" === attempt.status ||
          "expired" === attempt.status
        ) {
          clearSecureDailyResumeMarker();
          return !1
        }

        recordSecureDailyAttemptStart(
          attempt
        );

        rebuildSecureDraftFromServerState(
          draft,
          attempt
        );

        l(
          "Secure Daily Challenge restored."
        );

        return !0
      } catch (error) {
        console.warn(
          "Could not restore secure Daily Challenge.",
          error
        );

        return !1
      }
    }

    let pendingSecureResumeState = null,
      secureResumeChoiceBusy = !1;

    function setResumeDraftChoiceBusy(isBusy) {
      secureResumeChoiceBusy = !!isBusy;

      const resumeButton = xt("resumeSavedDraftBtn"),
        newButton = xt("startNewDraftBtn");

      resumeButton.disabled = secureResumeChoiceBusy;
      newButton.disabled = secureResumeChoiceBusy;

      resumeButton.textContent = secureResumeChoiceBusy
        ? "Please wait…"
        : "Resume Draft"
    }

    function showResumeDraftChoiceError(message = "") {
      const box = xt("resumeDraftChoiceError");
      box.textContent = message;
      box.classList.toggle("on", !!message)
    }

    function showResumeDraftChoice(state) {
      pendingSecureResumeState = state;

      xt("resumeDraftTeam").textContent =
        state.teamName || "Unnamed Team";
      xt("resumeDraftFormation").textContent =
        state.formationName ||
        state.formationCode ||
        "—";
      xt("resumeDraftProgress").textContent =
        `${+state.selectedCount || 0} / 11 players · Pick ${+state.currentPick || 1}`;
      xt("resumeDraftSkips").textContent =
        String(+state.skipsLeft || 0);
      xt("resumeDraftDifficulty").textContent =
        "hard" === state.difficulty
          ? "Hard"
          : "Normal";
      xt("resumeDraftMode").textContent =
        "alltime" === state.draftMode
          ? "Max Rating All-Time"
          : "Ratings by Season";

      showResumeDraftChoiceError("");
      setResumeDraftChoiceBusy(!1);
      r("resumeDraftModal");

      setTimeout(() => {
        try {
          xt("resumeSavedDraftBtn").focus()
        } catch {}
      }, 30)
    }

    async function tryResumeSecureDraft() {
      if (!DRAFT_SERVER_MODE_ENABLED) return !1;

      const marker = readSecureDraftResumeMarker();
      if (!marker || !marker.serverRunId) return !1;

      try {
        await initializeOnlineBackend();

        const { data, error } =
          await onlineClient.functions.invoke(
            "resume-draft",
            {
              body: {
                runId: marker.serverRunId
              }
            }
          );

        if (error) throw error;

        if (!data || !data.ok || !data.state) {
          clearSecureDraftResumeMarker();
          return !1
        }

        showResumeDraftChoice(data.state);

        console.info(
          "Unfinished secure draft found.",
          data.state
        );

        return !0
      } catch (error) {
        console.warn(
          "Could not check the saved secure draft.",
          error
        );

        clearSecureDraftResumeMarker();
        return !1
      }
    }

    async function resumeChosenSecureDraft() {
      if (
        secureResumeChoiceBusy ||
        !pendingSecureResumeState
      ) return;

      setResumeDraftChoiceBusy(!0);
      showResumeDraftChoiceError("");

      try {
        const state = pendingSecureResumeState;

        d("resumeDraftModal");
        pendingSecureResumeState = null;

        rebuildSecureDraftFromServerState(state)
      } catch (error) {
        console.warn(
          "Could not restore the chosen secure draft.",
          error
        );

        showResumeDraftChoiceError(
          "The saved draft could not be restored. Please try again."
        );
        r("resumeDraftModal")
      } finally {
        setResumeDraftChoiceBusy(!1)
      }
    }

    async function cancelSavedDraftAndStartNew() {
      if (
        secureResumeChoiceBusy ||
        !pendingSecureResumeState ||
        !pendingSecureResumeState.runId
      ) return;

      setResumeDraftChoiceBusy(!0);
      showResumeDraftChoiceError("");

      try {
        await initializeOnlineBackend();

        const { data, error } =
          await onlineClient.functions.invoke(
            "cancel-draft",
            {
              body: {
                runId: pendingSecureResumeState.runId,
                reason: "start_new_draft"
              }
            }
          );

        if (error) throw error;
        if (!data || !data.ok || !data.result) {
          throw new Error(
            data && data.errorCode ||
              "Missing cancellation result"
          )
        }

        clearSecureDraftResumeMarker();
        pendingSecureResumeState = null;
        d("resumeDraftModal");

        o();
        i();
        n("scr-menu", {
          replaceHistory: !0
        });

        l("Saved draft cancelled. You can start a new draft.")
      } catch (error) {
        console.warn(
          "Could not cancel the saved draft.",
          error
        );

        showResumeDraftChoiceError(
          "The saved draft could not be cancelled. Check your connection and try again."
        )
      } finally {
        setResumeDraftChoiceBusy(!1)
      }
    }

function z(t) {
  if (
    DRAFT_SERVER_MODE_ENABLED &&
    gt &&
    gt.serverMode &&
    (
      !gt.isDaily ||
      SERVER_DAILY_ENABLED
    )
  ) {
    return void runServerDraftRoll(t)
  }

  setDraftBackendStatus(
    "error",
    "Secure drafting is required in this Phase 6 build."
  );
  l(
    "Secure drafting is unavailable. No local fallback exists."
  )
}

    function X(t) {
      const button = xt("skipBtn"),
        secureDaily =
          !!(
            gt &&
            gt.isDaily &&
            gt.serverMode &&
            SERVER_DAILY_ENABLED
          ),
        dailyHasAlternative =
          !gt ||
          !gt.isDaily ||
          secureDaily ||
          (
            Array.isArray(gt.dailyPlan) &&
            (
              (
                gt.dailyPlan[
                  gt.dailyPickIndex
                ] ||
                []
              ).length >
              gt.dailyChoiceIndex + 1
            )
          );

      t &&
      gt &&
      gt.skipsLeft > 0 &&
      !gt.complete &&
      dailyHasAlternative
        ? (
            button.style.display =
              "inline-block",
            button.textContent =
              `Use Skip (${gt.skipsLeft} left)`
          )
        : button.style.display = "none"
    }

    function k(t) {
      const s = t.eligible_slots[0];
      if ("GK" === s) return `${lt(t.clean_sheets)} CS \xb7 ${lt(t.goals_conceded)} GC \xb7 ${lt(t.apps)} apps`;
      if (Ht.has(s)) {
        const s = lt(t.clean_sheets),
          a = lt(t.goals_conceded);
        return `${""!==t.clean_sheets||""!==t.goals_conceded?`${s} CS \xb7 ${a} GC \xb7 `:""}${lt(t.goals)} G \xb7 ${lt(t.assists)} A \xb7 ${lt(t.apps)} apps`
      }
      return `${lt(t.goals)} G \xb7 ${lt(t.assists)} A \xb7 ${lt(t.apps)} apps`
    }

    function D() {
      const t = xt("rosterZone"),
        dailyTarget = gt.isDaily ? gt.slots[gt.roll.targetIdx] : null,
        s = gt.roll.pool.filter(card => p(card) && (gt.isDaily ? dailyTarget && f(card, dailyTarget.code) : v(card).length > 0)).sort((left, right) => right.rating - left.rating);
      if (!s.length) {
        t.innerHTML = '<div class="empty">No player here fits your open positions. Rolling again…<\/div>';
        if (gt.isDaily) {
          const choices = gt.dailyPlan[gt.dailyPickIndex] || [];
          if (gt.dailyChoiceIndex + 1 < choices.length) gt.dailyChoiceIndex++;
          else {
            l("The Daily Challenge pool could not fill this position.");
            return
          }
        }
        const token = It;
        return void setTimeout(() => {
          token === It && gt && z(!1)
        }, 900)
      }
      t.innerHTML = '<div class="roster" id="roster"><\/div>';
      const a = xt("roster"),
        e = new Set(h().map(t => t.code));
      for (const t of s) {
        const s = document.createElement("button");
        s.className = "pcard";
        const n = t.eligible_slots.map(slot => `<span class="chip ${[...e].some(code=>Dt[code].includes(slot))?"":"dim"}">${escapeHtml(slot)}<\/span>`).join(""),
          l = "alltime" === gt.mode ? `peak ${t.season}${ot(t.club)!==ot(gt.roll.club)?" at "+ot(t.club):""}` : `${t.club} \xb7 ${t.season}`;
        s.innerHTML = `\n      <div class="rt">${Math.round(t.rating)}<small>OVR<\/small><\/div>\n      <div class="who"><b>${escapeHtml(t.name)}<\/b><span class="ar">${escapeHtml(t.name_ar||"")}<\/span>\n        <div class="meta">${escapeHtml(t.position)} \xb7 ${escapeHtml(l)}<br>${escapeHtml(k(t))}<\/div><\/div>\n      <div class="slots">${n}<\/div>`, s.addEventListener("click", () => w(t)), a.appendChild(s)
      }
    }

    function Y(t) {
      const s = {};
      for (const a of t)(s[a.code] ??= []).push(a);
      const a = new Map;
      for (const t in s) {
        const e = s[t].sort((t, s) => t.x - s.x);
        if (1 === e.length) {
          a.set(e[0].idx, t);
          continue
        }
        const n = ["Left", "Center", "Right"],
          l = ["Left", "Right"];
        e.forEach((s, r) => {
          const d = 2 === e.length ? l[r] : 3 === e.length ? n[r] : `#${r+1}`;
          a.set(s.idx, `${t} ${d}`)
        })
      }
      return a
    }

    function w(t) {
      if (gt.pendingPlayer) return;
      if (gt.isDaily) {
        const targetIdx = gt.roll && gt.roll.targetIdx;
        if (null != targetIdx && gt.slots[targetIdx] && !gt.slots[targetIdx].player && f(t, gt.slots[targetIdx].code)) return void S(t, targetIdx)
      }
      const s = v(t);
      if (!s.length) return;
      if (1 === s.length) return void S(t, s[0].idx);
      gt.pendingPlayer = t, X(!1);
      const a = Y(s);
      xt("rosterZone").innerHTML = `\n    <div class="slotchoice">\n      <div class="who">Where should <b>${escapeHtml(t.name)}<\/b> play?<\/div>\n      <div class="scbtns">${s.map(slot=>`<button data-idx="${slot.idx}">${escapeHtml(a.get(slot.idx))}<\/button>`).join("")}<\/div>\n      <button class="linkish" id="scCancel">choose a different player<\/button>\n    <\/div>`, xt("rosterZone").querySelectorAll(".scbtns button").forEach(t => {
        t.addEventListener("click", () => S(gt.pendingPlayer, +t.dataset.idx))
      }), xt("scCancel").addEventListener("click", () => {
        gt.pendingPlayer = null, D(), X(gt.skipsLeft > 0)
      })
    }

function S(t, s) {
  if (
    DRAFT_SERVER_MODE_ENABLED &&
    gt &&
    gt.serverMode &&
    (
      !gt.isDaily ||
      SERVER_DAILY_ENABLED
    )
  ) {
    return void runServerDraftSelection(t, s)
  }

  setDraftBackendStatus(
    "error",
    "Secure player selection is required in this Phase 6 build."
  );
  l(
    "Secure selection is unavailable. No local fallback exists."
  )
}

    function H() {
      xt("pickNo").textContent = Math.min(gt.pick, 11);
      const t = gt.slots.filter(t => t.player);
      xt("liveRate").textContent = t.length ? (t.reduce((t, s) => t + s.player.rating, 0) / t.length).toFixed(1) : "\u2014"
    }

    function U(t) {
      if (function(t, s, a) {
          t.querySelectorAll(".slot").forEach(t => t.remove());
          for (const e of s) {
            const s = document.createElement("div");
            if (s.className = "slot" + (e.player ? " filled" : ""), s.style.left = e.x + "%", s.style.top = e.y + "%", e.player) {
              const n = e.player.name.split(" ").slice(-1)[0];
              if (s.innerHTML = `<div class="disc">${Math.round(e.player.rating)}<\/div>\n        <div class="nm">${escapeHtml(n)}<small>${escapeHtml(e.code)}${"pitch"===t.id?" \xb7 "+escapeHtml(e.player.season):""}<\/small><\/div>`, a) {
                const t = s.querySelector(".disc");
                t.setAttribute("tabindex", "0"), t.addEventListener("click", () => j(e.idx)), t.addEventListener("keydown", t => {
                  "Enter" === t.key && j(e.idx)
                })
              }
            } else s.innerHTML = `<div class="disc">${escapeHtml(e.code)}<\/div>`;
            t.appendChild(s)
          }
        }(xt("pitch"), gt.slots, !0), null != t) {
        const s = [...xt("pitch").querySelectorAll(".slot")][t];
        s && s.classList.add("just")
      }
    }
    let Et = null;

    function j(t) {
      if (gt.rolling || gt.pendingPlayer) return;
      const s = gt.slots[t];
      if (!s.player) return;
      Et = t;
      const a = s.player,
        e = Y(gt.slots),
        n = [];
      for (const l of gt.slots) l.idx !== t && (!l.player && f(a, l.code) ? n.push({
        t: l,
        html: `Move to <b>${escapeHtml(e.get(l.idx))}<\/b>`
      }) : l.player && f(a, l.code) && f(l.player, s.code) && n.push({
        t: l,
        html: `Swap with <b>${escapeHtml(l.player.name)}<\/b> (${escapeHtml(e.get(l.idx))})`
      }));
      xt("swapSub").textContent = `${a.name} \u2014 currently ${e.get(t)}. Only legal moves are shown.`;
      const l = xt("swapList");
      l.innerHTML = n.length ? "" : '<div class="empty">No legal moves or swaps for this player right now.<\/div>';
      for (const t of n) {
        const s = document.createElement("button");
        s.innerHTML = t.html, s.addEventListener("click", () => {
          const s = gt.slots[Et],
            a = t.t,
            e = a.player;
          a.player = s.player, s.player = e, d("swapModal"), U(), gt.complete && K()
        }), l.appendChild(s)
      }
      r("swapModal")
    }

    function P(t) {
      const s = gt.slots.filter(s => t.has(s.code)).map(t => t.player.rating);
      return s.length ? Math.max(0, Math.min(100, s.reduce((t, s) => t + s, 0) / s.length)) : 0
    }

    function M(t) {
      return t.player.eligible_slots.includes(t.code) || "LAM" === t.code && t.player.eligible_slots.includes("CAM")
    }

    function G() {
      const rawOverall = gt.slots.reduce((total, slot) => total + slot.player.rating, 0) / 11,
        chemistryBonus = gt.slots.every(M) ? .5 : 0,
        overall = Math.min(100, rawOverall + chemistryBonus),
        goalkeeper = P(GOALKEEPERS),
        defence = P(WING_DEFENDERS),
        midfield = P(wt),
        attack = P(St);
      return {
        ovr: overall,
        displayOverall: +overall.toFixed(1),
        gk: goalkeeper,
        def: defence,
        mid: midfield,
        att: attack,
        best: [...gt.slots].sort((left, right) => right.player.rating - left.player.rating)[0],
        chem: chemistryBonus
      }
    }

    function x() {
      return getUserSimulationStrength()
    }

    function N(lambda, random = Math.random) {
      const limit = Math.exp(-Math.max(.01, lambda));
      let count = 0,
        product = 1;
      do {
        count++;
        product *= random()
      } while (product > limit);
      return count - 1
    }

    function J(value, minimum, maximum) {
      return Math.max(minimum, Math.min(maximum, value))
    }

    function T(homeStrength, awayStrength) {
      const homeAtt = homeStrength.simAtt ?? homeStrength.att,
        homeMid = homeStrength.simMid ?? homeStrength.mid,
        homeDef = homeStrength.simDef ?? homeStrength.def,
        homeGk = homeStrength.simGk ?? homeStrength.gk,
        homeOvr = homeStrength.simOvr ?? homeStrength.ovr,
        awayAtt = awayStrength.simAtt ?? awayStrength.att,
        awayMid = awayStrength.simMid ?? awayStrength.mid,
        awayDef = awayStrength.simDef ?? awayStrength.def,
        awayGk = awayStrength.simGk ?? awayStrength.gk,
        awayOvr = awayStrength.simOvr ?? awayStrength.ovr,
        homeAttack = .72 * homeAtt + .28 * homeMid,
        awayAttack = .72 * awayAtt + .28 * awayMid,
        homeDefence = .55 * homeDef + .25 * homeGk + .20 * homeMid,
        awayDefence = .55 * awayDef + .25 * awayGk + .20 * awayMid,
        homeOverallEdge = homeOvr - awayOvr,
        awayOverallEdge = -homeOverallEdge,
        homeExpected = J(1.22 + .074 * (homeAttack - awayDefence) + .018 * homeOverallEdge + .16, .12, 4.25),
        awayExpected = J(1.08 + .074 * (awayAttack - homeDefence) + .018 * awayOverallEdge, .12, 4.05);
      return [homeExpected, awayExpected]
    }

    function I() {
      return PHASE6_CURRENT_LEAGUE_CLUBS.filter(teamId => !yt.includes(teamId)).sort((left, right) => getAISimulationStrength(left).ovr - getAISimulationStrength(right).ovr).slice(0, 5)
    }

    function createBlankSimulationTable(teamIds) {
      return Object.fromEntries(teamIds.map(teamId => [teamId, {
        p: 0,
        w: 0,
        d: 0,
        l: 0,
        gf: 0,
        ga: 0,
        cs: 0
      }]))
    }

    function applyScoreToSimulationTable(table, homeId, awayId, score) {
      const homeGoals = score[0],
        awayGoals = score[1],
        home = table[homeId],
        away = table[awayId];
      home.p++;
      away.p++;
      home.gf += homeGoals;
      home.ga += awayGoals;
      away.gf += awayGoals;
      away.ga += homeGoals;
      if (homeGoals > awayGoals) {
        home.w++;
        away.l++
      } else if (homeGoals < awayGoals) {
        away.w++;
        home.l++
      } else {
        home.d++;
        away.d++
      }
      0 === awayGoals && home.cs++;
      0 === homeGoals && away.cs++
    }

    function simulationTableRows(table) {
      return Object.entries(table).map(([id, row]) => ({
        id,
        ...row,
        gd: row.gf - row.ga,
        pts: 3 * row.w + row.d
      })).sort((left, right) => right.pts - left.pts || right.gd - left.gd || right.gf - left.gf || Q(left.id).localeCompare(Q(right.id)))
    }

    function simulateMatchScore(homeId, awayId, userStrength, random = Math.random) {
      const homeStrength = getSimulationTeamStrength(homeId, userStrength),
        awayStrength = getSimulationTeamStrength(awayId, userStrength),
        [homeExpected, awayExpected] = T(homeStrength, awayStrength);
      return [N(homeExpected, random), N(awayExpected, random)]
    }

    function simulateCompleteSeasonPlan(fixtures, userStrength, random = Math.random) {
      return fixtures.map(matchday => matchday.map(([homeId, awayId]) => ({
        h: homeId,
        a: awayId,
        score: simulateMatchScore(homeId, awayId, userStrength, random)
      })))
    }

    function tableFromSeasonPlan(teamIds, plan) {
      const table = createBlankSimulationTable(teamIds);
      plan.forEach(matchday => matchday.forEach(match => applyScoreToSimulationTable(table, match.h, match.a, match.score)));
      return table
    }

    function userPositionFromSeasonPlan(teamIds, plan) {
      const rows = simulationTableRows(tableFromSeasonPlan(teamIds, plan));
      return rows.findIndex(row => row.id === Lt) + 1
    }

    function enforceTopTwoSeasonPlan(teamIds, plan) {
      let position = userPositionFromSeasonPlan(teamIds, plan);
      if (position <= 2) return position;
      const candidates = [];
      plan.forEach((matchday, matchdayIndex) => matchday.forEach((match, matchIndex) => {
        if (match.h !== Lt && match.a !== Lt) return;
        const userHome = match.h === Lt,
          userGoals = userHome ? match.score[0] : match.score[1],
          opponentGoals = userHome ? match.score[1] : match.score[0];
        if (userGoals <= opponentGoals) candidates.push({
          matchdayIndex,
          matchIndex,
          userHome,
          userGoals,
          opponentGoals,
          loss: userGoals < opponentGoals,
          margin: opponentGoals - userGoals
        })
      }));
      candidates.sort((left, right) => Number(right.loss) - Number(left.loss) || right.margin - left.margin || right.opponentGoals - left.opponentGoals);
      for (const candidate of candidates) {
        const match = plan[candidate.matchdayIndex][candidate.matchIndex];
        let newOpponentGoals = candidate.opponentGoals,
          newUserGoals;
        if (newOpponentGoals >= 4) {
          newOpponentGoals = 2;
          newUserGoals = 3
        } else {
          newUserGoals = Math.max(1, newOpponentGoals + 1)
        }
        match.score = candidate.userHome ? [newUserGoals, newOpponentGoals] : [newOpponentGoals, newUserGoals];
        position = userPositionFromSeasonPlan(teamIds, plan);
        if (position <= 2) break
      }
      return position
    }

    function generateAcceptedSeason(teamIds, fixtures, userStrength) {
      const topTwoGuaranteed = userStrength.displayOverall >= 87,
        retryLimit = topTwoGuaranteed ? 80 : 1;
      let plan = null,
        position = 18,
        attempts = 0;
      while (attempts < retryLimit) {
        attempts++;
        plan = simulateCompleteSeasonPlan(fixtures, userStrength);
        position = userPositionFromSeasonPlan(teamIds, plan);
        if (!topTwoGuaranteed || position <= 2) break
      }
      let fallbackUsed = !1;
      if (topTwoGuaranteed && position > 2) {
        fallbackUsed = !0;
        position = enforceTopTwoSeasonPlan(teamIds, plan)
      }
      return {
        plan,
        finalPosition: position,
        attempts,
        fallbackUsed,
        topTwoGuaranteed
      }
    }

    function O(userStrength) {
      const replacementCandidates = I(),
        replaced = replacementCandidates[Math.floor(Math.random() * replacementCandidates.length)],
        teamIds = PHASE6_CURRENT_LEAGUE_CLUBS.filter(teamId => teamId !== replaced).concat([Lt]),
        fixtures = R(teamIds),
        generated = generateAcceptedSeason(teamIds, fixtures, userStrength);
      return generated.finalPosition
    }
    let Qt = null,
      Bt = null;

    function F() {
      Bt && (clearInterval(Bt), Bt = null), xt("startSimBtn").textContent = "Start Simulation"
    }

    function g() {
      K(), r("sumModal"), xt("openSummaryBtn").style.display = "none", F();
      let t = 10;
      const s = It;
      xt("startSimBtn").textContent = `Kick-off in ${t}\u2026`, Bt = setInterval(() => {
        s === It ? (t--, t <= 0 ? (F(), startSeasonFlow()) : xt("startSimBtn").textContent = `Kick-off in ${t}\u2026`) : F()
      }, 1e3)
    }

    function K() {
      const t = G();
      xt("sumSub").textContent = `${Xt[gt.fkey].name} \xb7 ${"alltime"===gt.mode?"Max Rating All-Time":"Ratings by Season"}${t.chem?" \xb7 full-chemistry bonus applied":""}`, xt("gOvr").textContent = t.ovr.toFixed(1), xt("gDef").textContent = t.def.toFixed(1), xt("gMid").textContent = t.mid.toFixed(1), xt("gAtt").textContent = t.att.toFixed(1), xt("gBest").textContent = `${t.best.player.name} (${Math.round(t.best.player.rating)})`, xt("gClubs").textContent = `${new Set(gt.slots.map(t=>t.player.club)).size} clubs`, Qt = function() {
        const t = x(),
          s = [];
        for (let a = 0; a < 150; a++) s.push(O(t));
        const a = t => (s.filter(t).length + 1) / 152;
        return {
          probs: {
            champ: a(t => 1 === t),
            top3: a(t => t <= 3),
            top5: a(t => t <= 5),
            mid: a(t => t >= 6 && t <= 13),
            rel: a(t => t >= 14)
          },
          medianPos: s.slice().sort((t, s) => t - s)[Math.floor(75)]
        }
      }();
      const s = Qt.probs,
        a = (t, s) => `<div class="prob"><span>${t}<\/span><span class="bar"><i style="width:${Math.min(99,Math.max(2,Math.round(100*s)))}%"><\/i><\/span><span class="pc">${(t=>t<.01?"<1%":Math.min(99,Math.max(1,Math.round(100*t)))+"%")(s)}<\/span><\/div>`;
      xt("probs").innerHTML = '<div class="opt-label">Expected league finish<\/div>' + a("Champion", s.champ) + a("Top 3", s.top3) + a("Top 5", s.top5) + a("Mid-table", s.mid) + a("Relegation battle", s.rel)
    }
    let Ct = null;

    function R(t) {
      const s = t.length,
        a = [],
        e = t.slice(1);
      for (let n = 0; n < s - 1; n++) {
        const l = [],
          r = [t[0], ...e];
        for (let t = 0; t < s / 2; t++) {
          const a = r[t],
            e = r[s - 1 - t];
          l.push(n % 2 ? [e, a] : [a, e])
        }
        a.push(l), e.unshift(e.pop())
      }
      return a.concat(a.map(t => t.map(([t, s]) => [s, t])))
    }

    function E(t) {
      return normalizePlainText(
        t === Lt
          ? Jt().toUpperCase()
          : (rt[t] || {}).code || t,
        100
      )
    }

    function Q(t) {
      return normalizePlainText(
        t === Lt ? Jt() : t,
        100
      )
    }

    let pendingSecureSeasonResumeState = null,
      secureSeasonRecoveryBusy = !1;

    function readSecureSeasonResumeMarker() {
      try {
        const raw = localStorage.getItem(
          SERVER_SEASON_RESUME_KEY
        );

        if (!raw) return null;

        const parsed = JSON.parse(raw);

        return parsed &&
          typeof parsed.serverRunId === "string"
            ? parsed
            : null
      } catch {
        return null
      }
    }

    function saveSecureSeasonResumeMarker(serverRunId) {
      if (!serverRunId) return;

      try {
        localStorage.setItem(
          SERVER_SEASON_RESUME_KEY,
          JSON.stringify({
            serverRunId,
            clientRunId: gt && gt.runId || null,
            updatedAt: new Date().toISOString()
          })
        )
      } catch {}
    }

    function clearSecureSeasonResumeMarker() {
      try {
        localStorage.removeItem(
          SERVER_SEASON_RESUME_KEY
        )
      } catch {}
    }

    function useSecureServerSeason() {
      return !!(
        SERVER_SEASON_ENABLED &&
        gt &&
        gt.serverMode &&
        gt.serverShadow &&
        gt.serverShadow.serverRunId &&
        (
          !gt.isDaily ||
          SERVER_DAILY_ENABLED
        )
      )
    }

    function setSecureSeasonBusy(isBusy, label = "") {
      if (!Ct) return;

      Ct.serverActionPending = !!isBusy;

      xt("nextMdBtn").disabled = !!isBusy;
      xt("skipEndBtn").disabled = !!isBusy;

      xt("nextMdBtn").textContent =
        label || "Play Next Game"
    }

    function serverTableToLocalTable(rows) {
      const table = {};

      for (const row of Array.isArray(rows) ? rows : []) {
        table[row.id] = {
          p: +row.p || 0,
          w: +row.w || 0,
          d: +row.d || 0,
          l: +row.l || 0,
          gf: +row.gf || 0,
          ga: +row.ga || 0,
          cs: +row.cs || 0
        }
      }

      return table
    }

    function safeServerMatchdayToLocal(matchday) {
      if (
        !matchday ||
        !Array.isArray(matchday.matches)
      ) return null;

      return matchday.matches.map(match => ({
        h: match.homeId,
        a: match.awayId,
        score: [
          +match.homeGoals || 0,
          +match.awayGoals || 0
        ]
      }))
    }

    function trustedLeagueAwards() {
      if (
        !SERVER_AWARDS_ENABLED ||
        !Ct ||
        !Ct.serverMode ||
        !Ct.serverLeagueAwards
      ) return null;

      const awards = Ct.serverLeagueAwards,
        normalizePlayer = player => ({
          name:
            normalizePlainText(
              player && player.name || "—",
              100
            ),
          club:
            normalizePlainText(
              player && player.club || Lt,
              100
            ),
          rating: +(player && player.rating) || 0,
          g: +(player && player.goals) || 0,
          a: +(player && player.assists) || 0,
          pts: +(player && player.points) || 0,
          mine: !!(player && player.mine)
        }),
        normalizeGlove = player => ({
          name:
            normalizePlainText(
              player && player.name || "—",
              100
            ),
          club:
            normalizePlainText(
              player && player.club || Lt,
              100
            ),
          cs: +(player && player.cleanSheets) || 0,
          ga: +(player && player.goalsAgainst) || 0,
          mine: !!(player && player.mine)
        });

      if (
        !awards.topScorer ||
        !awards.topAssister ||
        !awards.goldenGlove ||
        !awards.bestPlayer
      ) return null;

      return {
        topScorer:
          normalizePlayer(awards.topScorer),
        topAssister:
          normalizePlayer(awards.topAssister),
        glove:
          normalizeGlove(awards.goldenGlove),
        best:
          normalizePlayer(awards.bestPlayer)
      }
    }

    function applyTrustedPlayerStatsState(state) {
      if (
        !Ct ||
        !Ct.serverMode ||
        !state
      ) return;

      if (
        state.leagueAwardsReady === true &&
        state.leagueAwards
      ) {
        Ct.serverLeagueAwards =
          state.leagueAwards
      }

      if (!SERVER_PLAYER_STATS_ENABLED) {
        return
      }

      const cumulativePlayers =
        state.playerStats &&
        Array.isArray(state.playerStats.players)
          ? state.playerStats.players
          : [];

      for (const player of cumulativePlayers) {
        const cardId = player.cardId,
          current = Ct.pstats[cardId];

        if (!current) continue;

        current.g = +player.goals || 0;
        current.a = +player.assists || 0;
        current.cs = +player.cleanSheets || 0;
        current.rsum = +player.ratingSum || 0;
        current.apps = +player.apps || 0
      }

      Ct.serverLatestPlayerDetails =
        state.latestPlayerDetails &&
        Array.isArray(
          state.latestPlayerDetails.players
        )
          ? state.latestPlayerDetails
          : null
    }

    function trustedLatestRatings() {
      if (
        !SERVER_PLAYER_STATS_ENABLED ||
        !Ct ||
        !Ct.serverMode ||
        !Ct.serverLatestPlayerDetails
      ) return null;

      const details =
          Ct.serverLatestPlayerDetails,
        motmCardId =
          details.manOfMatch &&
          details.manOfMatch.cardId || null;

      return details.players
        .map(player => {
          const slot =
            gt.slots.find(
              slot =>
                slot.player.card_id ===
                  player.cardId
            ) ||
            gt.slots[
              +player.slotIndex || 0
            ];

          if (!slot) return null;

          return {
            s: slot,
            r: +player.rating || 0,
            g: +player.goals || 0,
            a: +player.assists || 0,
            cs: player.cleanSheet ? 1 : 0,
            motm:
              motmCardId === player.cardId
          }
        })
        .filter(Boolean)
    }

    function renderLatestPlayerRatings(ratings) {
      return (Array.isArray(ratings) ? ratings : [])
        .slice()
        .sort((left, right) =>
          right.r - left.r
        )
        .map(item => {
          const extras = [
            item.g ? `${safeInteger(item.g,0,0,100)}G` : "",
            item.a ? `${safeInteger(item.a,0,0,100)}A` : "",
            item.cs ? "CS" : "",
            item.motm ? "MOTM" : ""
          ].filter(Boolean);

          return `<span class="mrat ${
            item.r >= 7.5
              ? "good"
              : item.r < 5.5
                ? "bad"
                : ""
          }">${
            escapeHtml(item.s.code)
          } ${
            escapeHtml(
              item.s.player.name
                .split(" ")
                .slice(-1)[0]
            )
          }${
            extras.length
              ? ` · ${extras.join(" · ")}`
              : ""
          }<b>${safeFiniteNumber(item.r,0,0,10).toFixed(1)}<\/b><\/span>`
        })
        .join("")
    }

    function initializeSecureSeasonScreen(state) {
      Ct = {
        serverMode: !0,
        serverRunId:
          gt.serverShadow.serverRunId,
        serverActionPending: !1,
        serverFinalResult:
          state && state.result || null,
        replaced:
          normalizePlainText(
            state && state.replacedClub || "—",
            100
          ),
        eff: x(),
        fixtures: null,
        plannedResults: Array(34),
        generationMeta: {
          secureServer: !0
        },
        md: +(
          state &&
          state.currentMatchday
        ) || 0,
        done:
          state &&
          "completed" === state.status,
        table: serverTableToLocalTable(
          state && state.table
        ),
        pstats: Object.fromEntries(
          gt.slots.map(slot => [
            slot.player.card_id,
            {
              g: 0,
              a: 0,
              cs: 0,
              rsum: 0,
              apps: 0
            }
          ])
        ),
        myMatches: [],
        lastRatings: null,
        serverLatestPlayerDetails: null,
        serverLeagueAwards: null,
        savedRun: null
      };

      applyTrustedPlayerStatsState(state);

      xt("replacedClub").textContent = Ct.replaced;
      xt("mdNow").textContent = String(Ct.md);
      xt("seasonYou").textContent = Jt();
      xt("feed").innerHTML = "";
      xt("latestPanel").style.display = "none";
      xt("finalBand").classList.remove("on");
      xt("endBlock").classList.remove("on");
      xt("finalScorePanel").style.display = "none";
      xt("nextMdBtn").style.display = "inline-block";
      xt("skipEndBtn").style.display = "inline-block";
      xt("skipEndBtn").textContent = "Skip To End";
      xt("restartCtlBtn").style.display = "none";
      setSecureSeasonBusy(!1);

      _();
      tt();
      n("scr-season");

      saveSecureSeasonResumeMarker(
        Ct.serverRunId
      );

      if (
        Ct.md > 0 &&
        state.latestMatchday
      ) {
        const localMatches =
          safeServerMatchdayToLocal(
            state.latestMatchday
          );

        if (localMatches) {
          const userMatch = localMatches.find(
            match =>
              match.h === Lt ||
              match.a === Lt
          );

          if (userMatch) {
            const isHome = userMatch.h === Lt,
              gf = isHome
                ? userMatch.score[0]
                : userMatch.score[1],
              ga = isHome
                ? userMatch.score[1]
                : userMatch.score[0];

            Ct.myMatches.push({
              md: Ct.md,
              home: isHome,
              opp: isHome
                ? userMatch.a
                : userMatch.h,
              gf,
              ga
            });

            xt("latestPanel").style.display =
              "block";
            xt("latestTag").textContent =
              `Matchday ${Ct.md} — restored result`;
            xt("latestScore").innerHTML =
              `<span>${escapeHtml(Q(userMatch.h))}<\/span>` +
              `<span class="sc">${safeInteger(userMatch.score[0],0,0,100)} – ${safeInteger(userMatch.score[1],0,0,100)}<\/span>` +
              `<span>${escapeHtml(Q(userMatch.a))}<\/span>`;
            Ct.lastRatings =
              trustedLatestRatings();

            xt("latestRats").innerHTML =
              Ct.lastRatings &&
              Ct.lastRatings.length
                ? renderLatestPlayerRatings(
                    Ct.lastRatings
                  )
                : '<span class="mrat good">Server verified<b>✓<\/b><\/span>'
          }
        }
      }
    }

    async function startSecureServerSeason(
      options = {}
    ) {
      if (!useSecureServerSeason()) {
        B();
        return
      }

      const isResume = !!options.resume;

      F();
      d("sumModal");
      xt("startSimBtn").disabled = !0;
      xt("startSimBtn").textContent =
        isResume
          ? "Restoring season…"
          : "Preparing season…";

      try {
        await initializeOnlineBackend();

        const { data, error } =
          await onlineClient.functions.invoke(
            "start-season",
            {
              body: {
                runId:
                  gt.serverShadow.serverRunId
              }
            }
          );

        if (error) throw error;

        if (!data || !data.ok || !data.state) {
          throw new Error(
            data &&
            data.errorCode ||
            "START_SEASON_REJECTED"
          )
        }

        initializeSecureSeasonScreen(
          data.state
        );

        l(
          isResume
            ? "Secure season restored."
            : "Secure season ready."
        )
      } catch (error) {
        console.warn(
          "Could not start secure season.",
          error
        );

        setDraftBackendStatus(
          "error",
          "The secure season could not start. Check your connection and try again."
        );

        r("sumModal")
      } finally {
        xt("startSimBtn").disabled = !1;
        xt("startSimBtn").textContent =
          "Start Simulation"
      }
    }

    async function finishSecureServerSeason() {
      const { data, error } =
        await onlineClient.functions.invoke(
          "finish-season",
          {
            body: {
              runId: Ct.serverRunId
            }
          }
        );

      if (error) throw error;

      if (!data || !data.ok || !data.state) {
        throw new Error(
          data &&
          data.errorCode ||
          "FINISH_SEASON_REJECTED"
        )
      }

      applyTrustedPlayerStatsState(
        data.state
      );

      Ct.serverFinalResult =
        data.state.result || null;

      return data.state
    }

    async function revealSecureServerMatchday(
      openLatest = !0,
      fromSkip = !1
    ) {
      if (
        !Ct ||
        !Ct.serverMode ||
        Ct.done ||
        Ct.serverActionPending
      ) return !1;

      const expectedMatchday = Ct.md;

      setSecureSeasonBusy(
        !0,
        fromSkip
          ? `Skipping… ${expectedMatchday + 1}/34`
          : "Playing…"
      );

      try {
        await initializeOnlineBackend();

        const { data, error } =
          await onlineClient.functions.invoke(
            "reveal-matchday",
            {
              body: {
                runId: Ct.serverRunId,
                expectedMatchday
              }
            }
          );

        if (error) throw error;

        if (!data || !data.ok || !data.state) {
          throw new Error(
            data &&
            data.errorCode ||
            "REVEAL_MATCHDAY_REJECTED"
          )
        }

        applyTrustedPlayerStatsState(
          data.state
        );

        const serverMatchday =
            +data.state.currentMatchday || 0;

        if (serverMatchday <= Ct.md) {
          return !0
        }

        const localMatches =
          safeServerMatchdayToLocal(
            data.state.latestMatchday
          );

        if (!localMatches) {
          throw new Error(
            "MATCHDAY_PAYLOAD_MISSING"
          )
        }

        if (34 === serverMatchday) {
          await finishSecureServerSeason()
        }

        Ct.plannedResults[Ct.md] =
          localMatches.map(match => ({
            h: match.h,
            a: match.a,
            score: [
              match.score[0],
              match.score[1]
            ]
          }));

        A(openLatest);

        if (Ct.done) {
          clearSecureSeasonResumeMarker()
        }

        return !0
      } catch (error) {
        console.warn(
          "Could not reveal secure matchday.",
          error
        );

        setDraftBackendStatus(
          "error",
          "The next matchday could not be loaded. Your season is safely saved."
        );

        return !1
      } finally {
        if (Ct && !Ct.done) {
          setSecureSeasonBusy(!1)
        }
      }
    }

    async function skipSecureServerSeason() {
      if (
        !Ct ||
        !Ct.serverMode ||
        Ct.done ||
        Ct.serverActionPending
      ) return;

      xt("skipEndBtn").textContent =
        "Skipping…";

      while (
        Ct &&
        Ct.serverMode &&
        !Ct.done &&
        Ct.md < 34
      ) {
        const worked =
          await revealSecureServerMatchday(
            !1,
            !0
          );

        if (!worked) break
      }

      if (Ct && !Ct.done) {
        xt("skipEndBtn").textContent =
          "Skip To End";
        setSecureSeasonBusy(!1)
      }
    }

function startSeasonFlow() {
  if (useSecureServerSeason()) {
    return startSecureServerSeason()
  }

  F();
  setDraftBackendStatus(
    "error",
    "The secure season service is unavailable. Your completed draft is saved; retry when the connection is restored."
  );
  r("sumModal");
  l(
    "Secure season unavailable. No local simulation fallback exists."
  );
  return !1
}

function playNextSeasonFlow() {
  if (Ct && Ct.serverMode) {
    return revealSecureServerMatchday(!0)
  }

  setDraftBackendStatus(
    "error",
    "Secure matchday service unavailable."
  );
  l(
    "No local match simulation exists in this Phase 6 build."
  )
}

function skipSeasonFlow() {
  if (Ct && Ct.serverMode) {
    skipSecureServerSeason();
    return
  }

  setDraftBackendStatus(
    "error",
    "Secure season service unavailable."
  );
  l(
    "No local season simulation exists in this Phase 6 build."
  )
}

    function setSecureSeasonRecoveryBusy(isBusy) {
      secureSeasonRecoveryBusy = !!isBusy;

      xt("retrySeasonRecoveryBtn").disabled =
        secureSeasonRecoveryBusy;
      xt("leaveSavedSeasonBtn").disabled =
        secureSeasonRecoveryBusy;

      xt("retrySeasonRecoveryBtn").textContent =
        secureSeasonRecoveryBusy
          ? "Recovering…"
          : "Retry Recovery"
    }

    function showSecureSeasonRecoveryError(message = "") {
      const box = xt("seasonRecoveryError");
      box.textContent = message;
      box.classList.toggle("on", !!message)
    }

    function showSecureSeasonRecoveryModal() {
      xt("seasonRecoveryText").textContent =
        "Restoring your saved squad, league table and latest revealed matchday from the server.";
      showSecureSeasonRecoveryError("");
      setSecureSeasonRecoveryBusy(!0);
      r("seasonRecoveryModal")
    }

    function leaveSavedSecureSeason() {
      if (secureSeasonRecoveryBusy) return;

      clearSecureSeasonResumeMarker();
      pendingSecureSeasonResumeState = null;
      d("seasonRecoveryModal");
      o();
      i();
      n("scr-menu", {
        replaceHistory: !0
      });
      l("Saved season left. You can start a new draft.")
    }

    async function tryResumeSecureSeason() {
      if (
        !SERVER_SEASON_ENABLED ||
        !DRAFT_SERVER_MODE_ENABLED
      ) return !1;

      const marker =
        readSecureSeasonResumeMarker();

      if (
        !marker ||
        !marker.serverRunId
      ) return !1;

      showSecureSeasonRecoveryModal();

      try {
        await initializeOnlineBackend();

        const { data, error } =
          await onlineClient.functions.invoke(
            "start-season",
            {
              body: {
                runId: marker.serverRunId
              }
            }
          );

        if (error) throw error;

        if (
          !data ||
          !data.ok ||
          !data.draftState ||
          !data.state
        ) {
          throw new Error(
            data &&
            data.errorCode ||
            "SECURE_SEASON_RECOVERY_REJECTED"
          )
        }

        pendingSecureSeasonResumeState =
          data.state;

        rebuildSecureDraftFromServerState(
          data.draftState
        );

        return !0
      } catch (error) {
        console.warn(
          "Could not restore secure season.",
          error
        );

        pendingSecureSeasonResumeState = null;
        setSecureSeasonRecoveryBusy(!1);

        xt("seasonRecoveryText").textContent =
          "Your saved season is still safe on the server.";

        showSecureSeasonRecoveryError(
          "Recovery did not complete. Check your connection, then press Retry Recovery."
        );

        return !0
      }
    }

function B() {
  setDraftBackendStatus(
    "error",
    "Secure season simulation is required in this Phase 6 build."
  );
  l(
    "No local season simulator exists."
  );
  return !1
}

    function C(t, s, score) {
      applyScoreToSimulationTable(Ct.table, t, s, score);
      return score
    }

    function A(t) {
      if (!Ct || Ct.done) return;
      const a = Ct.md,
        e = Ct.plannedResults[a].map(match => {
          const score = [match.score[0], match.score[1]];
          C(match.h, match.a, score);
          return {
            h: match.h,
            a: match.a,
            score
          }
        }),
        n = e.find(t => t.h === Lt || t.a === Lt),
        l = n.h === Lt,
        r = l ? n.score[0] : n.score[1],
        d = l ? n.score[1] : n.score[0];
Ct.lastRatings =
  trustedLatestRatings() || [],
Ct.myMatches.push({
          md: a + 1,
          home: l,
          opp: l ? n.a : n.h,
          gf: r,
          ga: d
        }), Ct.md++,
        function(t, s, a) {
          const e = s.find(t => t.h === Lt || t.a === Lt),
            n = e.h === Lt,
            l = n ? e.score[0] : e.score[1],
            r = n ? e.score[1] : e.score[0],
            d = l > r ? "win" : l < r ? "loss" : "",
            o = document.createElement("div");
          o.className = "md" + (a ? " open" : ""), o.innerHTML = `<button class="mdhead" type="button">\n      <span class="mdn">MD ${t+1}<\/span>\n      <span class="mymatch">${escapeHtml(E(e.h))}<span class="sc">${safeInteger(e.score[0],0,0,100)}\u2013${safeInteger(e.score[1],0,0,100)}<\/span>${escapeHtml(E(e.a))}<\/span>\n    <\/button>\n    <div class="fx">${s.map(t=>{const s=t.h===Lt||t.a===Lt;return`<div class="fxrow ${s?"mine "+d:""}">\n        <span class="h">${escapeHtml(s?Q(t.h):E(t.h))}<\/span>\n        <span class="sc">${safeInteger(t.score[0],0,0,100)} \u2013 ${safeInteger(t.score[1],0,0,100)}<\/span>\n        <span class="a">${escapeHtml(s?Q(t.a):E(t.a))}<\/span><\/div>`}).join("")}<\/div>`, o.querySelector(".mdhead").addEventListener("click", () => o.classList.toggle("open"));
          const i = xt("feed");
          i.querySelectorAll(".md.open").forEach(t => t.classList.remove("open")), i.prepend(o)
        }(a, e, t),
        function(t) {
          xt("latestPanel").style.display = "block", xt("latestTag").textContent = `Matchday ${Ct.md} \u2014 latest result`, xt("latestScore").innerHTML = `<span>${escapeHtml(Q(t.h))}<\/span><span class="sc">${safeInteger(t.score[0],0,0,100)} \u2013 ${safeInteger(t.score[1],0,0,100)}<\/span><span>${escapeHtml(Q(t.a))}<\/span>`, xt("latestRats").innerHTML = renderLatestPlayerRatings(Ct.lastRatings)
        }(n), xt("mdNow").textContent = Ct.md, _(), tt(), Ct.md >= 34 && function() {
          Ct.done = !0, xt("nextMdBtn").style.display = "none", xt("skipEndBtn").style.display = "none", xt("restartCtlBtn").style.display = "inline-block";
          const t = _(),
            a = t.findIndex(t => t.id === Lt) + 1,
            e = t[a - 1],
            n = 1 === a,
            l = 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th";
          xt("finalTitle").textContent = n ? `CHAMPIONS! ${Jt()} won the league` : `${Jt()} finished ${a}${l}`, xt("finalNote").textContent = `${e.pts} pts \xb7 34 played \xb7 ${e.w}W ${e.d}D ${e.l}L \xb7 ${e.gf} scored, ${e.ga} conceded \xb7 GD ${e.gd>0?"+":""}${e.gd}`, xt("latestPanel").style.display = "none", xt("finalBand").classList.add("on");
          const r = xt("feed").querySelector(".md");
          r && r.classList.add("open");
          const d = s();
          d.rc++, n ? d.nw = 0 : d.nw++;
          ! function(t) {
            Gt = t;
            try {
              localStorage.setItem("spl_draft_pity", JSON.stringify(t))
            } catch (t) {}
          }(d);
          const o = Ct.myMatches.filter(t => t.gf > t.ga).sort((t, s) => s.gf - s.ga - (t.gf - t.ga) || s.gf - t.gf),
            i = Ct.myMatches.filter(t => t.gf < t.ga).sort((t, s) => s.ga - s.gf - (t.ga - t.gf) || s.ga - t.ga),
            b = o[0],
            c = i[0];
          xt("bigWin").textContent = b ? `${b.gf}\u2013${b.ga} vs ${b.opp} (${b.home?"home":"away"}, MD ${b.md})` : "No wins this season.", xt("bigLoss").textContent = c ? `${c.gf}\u2013${c.ga} vs ${c.opp} (${c.home?"home":"away"}, MD ${c.md})` : "Unbeaten all season.";
      const m =
          trustedLeagueAwards(),
        W = t =>
          ` — ${t.mine ? Jt().toUpperCase() : Q(t.club)}`;

      xt("awards").innerHTML = m
        ? `
<div class="award"><div class="t">Top goal scorer<\/div><b>${escapeHtml(m.topScorer.name)}<\/b><span>${m.topScorer.g} goals${escapeHtml(W(m.topScorer))}<\/span><\/div>
<div class="award"><div class="t">Top assister<\/div><b>${escapeHtml(m.topAssister.name)}<\/b><span>${m.topAssister.a} assists${escapeHtml(W(m.topAssister))}<\/span><\/div>
<div class="award"><div class="t">Golden Glove<\/div><b>${escapeHtml(m.glove.name)}<\/b><span>${m.glove.cs} clean sheets — ${escapeHtml(m.glove.mine ? Jt().toUpperCase() : Q(m.glove.club))}<\/span><\/div>
<div class="award"><div class="t">Best player<\/div><b>${escapeHtml(m.best.name)}<\/b><span>${m.best.g} G · ${m.best.a} A${escapeHtml(W(m.best))}<\/span><\/div>`
        : '<div class="empty">Trusted league awards are temporarily unavailable. No local awards were generated.<\/div>';
          const f = gt.slots.map(t => ({
              s: t,
              st: Ct.pstats[t.player.card_id]
            })),
            h = [...f].sort((t, s) => s.st.g - t.st.g)[0],
            v = [...f].sort((t, s) => s.st.a - t.st.a)[0],
            p = [...f].sort((t, s) => s.st.rsum / s.st.apps - t.st.rsum / t.st.apps)[0],
            y = function(t) {
              const {
                pos: s,
                pts: a,
                rec: e,
                champion: n,
                expected: l,
                ts: r,
                ta: d,
                bestAvg: o,
                bw: i,
                bl: b,
                replaced: c,
                form: m
              } = t, W = 1 === s ? "st" : 2 === s ? "nd" : 3 === s ? "rd" : "th", f = s <= l - 1, h = s >= l + 2;
              let v, p, y, L, V;
              n ? (v = At(["FROM DRAFT BOARD TO CHAMPIONS", "THE DRAFT XI THAT CONQUERED THE LEAGUE", "TITLE GLORY FOR THE UPSTARTS"]), p = `Nobody hands out trophies in the draft room, but somebody forgot to tell this team. Slotted into the Saudi Pro League in place of ${c}, a squad assembled from a roulette wheel finished the job the traditional powers could not, lifting the title with ${a} points from a ${e} campaign.`) : f ? (v = At(["THE OVERACHIEVERS OF THE SPL", "A SEASON THAT DEFIED THE ODDS", "PUNCHING ABOVE THEIR WEIGHT"]), p = `Pre-season projections had this draft side pegged for around ${l}${1===l?"st":2===l?"nd":3===l?"rd":"th"} place. They finished ${s}${W}. Taking the league slot vacated by ${c}, the ${m} outfit turned a patchwork of roulette picks into one of the stories of the season, closing on ${a} points.`) : h ? (v = At(["A SEASON OF WHAT-IFS", "THE DRAFT THAT NEVER CLICKED", "FALLING SHORT OF THE BILLING"]), p = `On paper this was a squad built for better. In practice, a ${s}${W}-place finish on ${a} points told the story of a season that never found its rhythm. Handed ${c}'s place in the league, the draft side was projected around ${l}${l<=3?["st","nd","rd"][l-1]:"th"} \u2014 and fell well short of it.`) : (v = At(["A SOLID FIRST CAMPAIGN", "STEADY, IF NOT SPECTACULAR", "THE SEASON IN REVIEW"]), p = `A ${s}${W}-place finish with ${a} points is roughly what the numbers promised, and roughly what this draft side delivered. Stepping into the league in place of ${c}, they were competitive from August to May without ever quite threatening the ceiling above them.`);
              const q = i ? `The campaign's high-water mark came in the ${i.gf}\u2013${i.ga} ${i.home?"home win over":"away win at"} ${i.opp}, a result that showed exactly what this XI looks like when it clicks.` : "There was no high point worth the name \u2014 34 matchdays came and went without a single victory.",
                Z = b ? `${i?"The low point was harder to watch":"The nadir"}: a ${b.gf}\u2013${b.ga} ${b.home?"home defeat to":"defeat away at"} ${b.opp} that ${n?"stood out as a rare blemish":"summed up the rougher stretches"}.` : "Remarkably, they went the entire season unbeaten.";
              return y = `${q} ${Z} Across 34 matchdays the record read ${e}, with ${t.gf} scored and ${t.ga} conceded.`, L = `Individually, ${r.name} carried the attack with ${r.g} league goals, while ${d.name} was the creative engine with ${d.a} assists. ${o.name} quietly graded out as the squad's most consistent performer at ${o.avg} per match${t.cs?`, and ${t.cs} clean sheets gave the side a platform to build on`:""}.`, V = At(n ? ["Champions in year one. Whatever the roulette gives this team next season, the rest of the league has been warned.", "A title in the debut campaign rewrites every expectation. Next season, they will be the hunted."] : h ? ["The talent is there; the consistency was not. Another season like this and the questions will get louder.", "The draft gave them the tools. The table says they did not use them. Next season needs to look very different."] : ["The foundation is real. With a sharper edge in the final third, the top of the table is not out of reach.", "Build on this, and next season's projections will make far better reading."]), {
                head: v,
                paras: [p, y, L, V]
              }
            }({
              pos: a,
              pts: e.pts,
              rec: `${e.w}W ${e.d}D ${e.l}L`,
              gf: e.gf,
              ga: e.ga,
              cs: Ct.table[Lt].cs,
              champion: n,
              expected: Qt ? Qt.medianPos : 5,
              ts: {
                name: h.s.player.name,
                g: h.st.g
              },
              ta: {
                name: v.s.player.name,
                a: v.st.a
              },
              bestAvg: {
                name: p.s.player.name,
                avg: (p.st.rsum / p.st.apps).toFixed(1)
              },
              bw: b,
              bl: c,
              replaced: Ct.replaced,
              form: Xt[gt.fkey].name
            });
          const completedStrength = G(),
            completedRunData = {
              runId: gt.runId,
              completedAt: new Date().toISOString(),
              teamName: Jt(),
              difficulty: 0 === gt.skipsInitial ? "hard" : "normal",
              draftMode: gt.mode,
              formation: Xt[gt.fkey].name,
              squadOverall: completedStrength.displayOverall,
              defenceRating: +completedStrength.def.toFixed(1),
              midfieldRating: +completedStrength.mid.toFixed(1),
              attackRating: +completedStrength.att.toFixed(1),
              finalPosition: a,
              played: e.p,
              wins: e.w,
              draws: e.d,
              losses: e.l,
              goalsFor: e.gf,
              goalsAgainst: e.ga,
              goalDifference: e.gd,
              points: e.pts,
              isDailyChallenge: !!gt.isDaily,
              dailyChallengeDate: gt.challenge && gt.challenge.dateKey || null,
              dailyAttemptType: gt.dailyAttemptType || null,
              challengeId: gt.challenge && gt.challenge.challengeId || null,
              topScorer: {
                name: h.s.player.name,
                goals: h.st.g
              },
              topAssister: {
                name: v.s.player.name,
                assists: v.st.a
              },
              bestPlayer: {
                name: p.s.player.name,
                averageRating: +(p.st.rsum / p.st.apps).toFixed(1)
              },
              cleanSheets: Ct.table[Lt].cs,
              draftedPlayers: compactDraftedPlayers()
            },
            saveMeta = saveRunResult(completedRunData);
          Ct.savedRun = saveMeta.run || completedRunData;
          renderFinalScorePanel(Ct.savedRun, saveMeta);
          xt("article").innerHTML = `<h3>${escapeHtml(y.head)}<\/h3><div class="byline">Season review · SPL 25/26 · Draft XI<\/div>` + y.paras.map(t => `<p>${escapeHtml(t)}<\/p>`).join("");
          xt("endBlock").classList.add("on");
          renderSeasonReviewLeaderboard(Ct.savedRun)
        }()
    }

    function $(t) {
      return t === Lt ? Ct.eff.ovr : getAISimulationStrength(t).ovr
    }

    function _() {
      const t = Object.entries(Ct.table).map(([t, s]) => ({
        id: t,
        ...s,
        gd: s.gf - s.ga,
        pts: 3 * s.w + s.d
      })).sort((t, s) => s.pts - t.pts || s.gd - t.gd || s.gf - t.gf || Q(t.id).localeCompare(Q(s.id)));
      return xt("lgBody").innerHTML = t.map((t, s) => {
        return `\n    <tr class="${t.id===Lt?"me":""}">\n      <td class="pos">${s+1}<\/td>\n      <td class="tn"><span class="dot" style="background:${a=t.id,a===Lt?"#E8B94B":(rt[a]||{}).color||"#888"}"><\/span>${escapeHtml(Q(t.id))}<\/td>\n      <td>${t.p}<\/td><td>${t.w}<\/td><td>${t.d}<\/td><td>${t.l}<\/td>\n      <td>${t.gf}<\/td><td>${t.ga}<\/td><td>${t.gd>0?"+":""}${t.gd}<\/td><td class="pts">${t.pts}<\/td>\n    <\/tr>`;
        var a
      }).join(""), t
    }

    function tt() {
      const t = gt.slots.map(t => ({
          s: t,
          st: Ct.pstats[t.player.card_id]
        })),
        s = [...t].sort((t, s) => s.st.g - t.st.g || s.st.a - t.st.a)[0],
        a = [...t].sort((t, s) => s.st.a - t.st.a || s.st.g - t.st.g)[0];
      xt("tsN").textContent = s.st.g, xt("tsName").textContent = s.s.player.name, xt("taN").textContent = a.st.a, xt("taName").textContent = a.s.player.name, xt("csN").textContent = Ct.table[Lt].cs;
      const e = [...t].sort((t, s) => s.st.g + s.st.a - (t.st.g + t.st.a) || s.st.g - t.st.g);
      xt("pstatList").innerHTML = e.map(({
        s: t,
        st: s
      }) => {
        const a = s.apps ? (s.rsum / s.apps).toFixed(1) : "\u2014",
          e = Yt.has(t.code) ? `${s.cs}<span class="lbl">CS<\/span>` : "";
        return `<div class="pstat">\n      <span class="pos">${escapeHtml(t.code)}<\/span><span>${escapeHtml(t.player.name)}<\/span>\n      <span class="n">${s.g}<span class="lbl">G<\/span><\/span>\n      <span class="n">${s.a}<span class="lbl">A<\/span><\/span>\n      <span class="n">${e}<\/span>\n      <span class="n">${a}<span class="lbl">AVG<\/span><\/span>\n    <\/div>`
      }).join("")
    }
    const At = t => t[Math.floor(Math.random() * t.length)];

    function startDraftRun(options = {}) {
      const challenge = options.challenge || null,
        isDaily = !!challenge,
        fkey = isDaily ? challenge.fkey : Tt.fkey,
        mode = isDaily ? challenge.mode : Tt.mode,
        skips = isDaily ? challenge.skips : Tt.skips;
      if (null == fkey || null == skips) return;
      It++;
      F();
      const formation = Xt[fkey],
        attemptType = isDaily ? markDailyAttemptStarted(challenge) : null;
      gt = {
        runId: makeRunId(isDaily ? "daily" : "run"),
        fkey,
        mode,
        skipsLeft: skips,
        skipsInitial: skips,
        slots: formation.slots.map(([code, x, y], index) => ({
          idx: index,
          code,
          x,
          y,
          player: null
        })),
        draftedCards: new Set,
        draftedPlayers: new Set,
        pick: 1,
        roll: null,
        pendingPlayer: null,
        rolling: !1,
        complete: !1,
        isDaily,
        challenge,
        dailyAttemptType: attemptType,
        dailyPlan: null,
        dailyPickIndex: 0,
        dailyChoiceIndex: 0,
        random: isDaily ? mulberry32(fnv1aHash(`${challenge.seed}:roulette`)) : null
      };
      if (isDaily) {
        throw new Error("PHASE6_SECURE_DAILY_START_REQUIRED")
      }
      syncDailyRunUi();
      registerRunStarted();
      Kt = [];
      xt("formName").textContent = `${formation.name}${isDaily ? " · DAILY CHALLENGE" : ""}`;
      xt("rosterPanel").style.display = "none";
      xt("openSummaryBtn").style.display = "none";
      xt("rollBtn").disabled = !1;
      X(!1);
      H();
      U();
      n("scr-draft");
      if (
        (DRAFT_SHADOW_TEST_ENABLED || DRAFT_SERVER_MODE_ENABLED) &&
        !isDaily
      ) {
        const expectedDifficulty =
          0 === skips ? "hard" : "normal";

        if (DRAFT_SERVER_MODE_ENABLED) {
          gt.serverMode = !0;
          xt("rollBtn").disabled = !0
        }

        runStartDraftShadowTest(
          gt,
          {
            formationCode: fkey,
            difficulty: expectedDifficulty,
            draftMode: mode,
            skips
          }
        )
      } else {
        setDraftBackendStatus("", "");
        setDraftBackendTools(!1)
      }
    }

    function st() {
      const teamName =
        xt("teamNameInput").value.trim();

      if (!teamName) {
        showTeamNameError(
          "Please enter a team name — 1 to 25 characters, not just spaces."
        );
        return
      }

      if (!isAllowedTeamName(teamName)) {
        showTeamNameError(
          "Please choose an appropriate team name."
        );
        return
      }

      clearTeamNameError();
      persistTeamName(teamName);
      n("scr-setup")
    }! function() {
      xt("diffRow").querySelectorAll(".modecard").forEach(t => {
        t.addEventListener("click", () => {
          xt("diffRow").querySelectorAll(".modecard").forEach(t => t.classList.remove("sel")), t.classList.add("sel"), Tt.skips = +t.dataset.v, e()
        })
      }), xt("modeRow").querySelectorAll(".modecard").forEach(t => {
        t.addEventListener("click", () => {
          xt("modeRow").querySelectorAll(".modecard").forEach(t => t.classList.remove("sel")), t.classList.add("sel"), Tt.mode = t.dataset.v
        })
      });
      const t = xt("fgrid");
      for (const s of kt) {
        const a = Xt[s],
          n = document.createElement("button");
        n.className = "fcard";
        const l = a.slots.map(([t, s, a]) => `<i class="${"GK"===t?"gk":""}" style="left:${s}%;top:${.9*a+5}%"><\/i>`).join("");
        n.innerHTML = `<h3>${escapeHtml(a.name)}<\/h3><div class="mini">${l}<\/div>`, n.addEventListener("click", () => {
          t.querySelectorAll(".fcard").forEach(t => t.classList.remove("sel")), n.classList.add("sel"), Tt.fkey = s, e()
        }), t.appendChild(n)
      }
      xt("startBtn").addEventListener("click", () => startDraftRun())
    }();
    xt("teamNameInput").value = Nt.teamName;
    xt("menuStartBtn").addEventListener("click", st);
    xt("dailyChallengeBtn").addEventListener("click", openDailyChallengeScreen);
    xt("recordsBtn").addEventListener("click", () => {
      const typedName = xt("teamNameInput").value.trim();
      typedName && persistTeamName(typedName);
      renderRecordsScreen();
      n("scr-records")
    });
    xt("teamNameInput").addEventListener(
      "input",
      clearTeamNameError
    );
    xt("teamNameInput").addEventListener("change", () => {
      const typedName = xt("teamNameInput").value.trim();
      typedName && persistTeamName(typedName)
    });
    xt("teamNameInput").addEventListener("keydown", event => {
      "Enter" === event.key && st()
    });
    xt("howtoBtn").addEventListener("click", () => n("scr-howto"));
    xt("howtoBackBtn").addEventListener("click", () => n("scr-menu"));
    xt("dailyBackBtn").addEventListener("click", () => n("scr-menu"));
    xt("continueDailyRunBtn").addEventListener("click", continueDailyRunChoice);
    xt("startOverDailyRunBtn").addEventListener("click", startOverDailyRunChoice);
    xt("cancelDailyRunChoiceBtn").addEventListener("click", closeDailyRunChoiceModal);
xt("dailyStartBtn").addEventListener("click", async () => {
  if (!SERVER_DAILY_ENABLED) {
    l(
      "Secure Daily Challenge is unavailable. No local fallback exists."
    );
    return
  }

  const current =
    memoryDailyCurrent() ||
    pendingSecureDailyCurrent;

  if (current) {
    showDailyRunChoiceModal(
      current,
      memoryDailyCurrent()
        ? "memory"
        : "server"
    );
    return
  }

  startSecureDailyChallenge()
});
    xt("recordsBackBtn").addEventListener("click", () => n("scr-menu"));
    xt("leaderboardTabs").querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
      leaderboardPeriod = button.dataset.period;
      renderLocalLeaderboard()
    }));
    xt("globalLeaderboardTabs").querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
      globalLeaderboardPeriod = button.dataset.period;
      renderGlobalLeaderboard()
    }));
    xt("retrySeasonRecoveryBtn").addEventListener("click", tryResumeSecureSeason);
    xt("leaveSavedSeasonBtn").addEventListener("click", leaveSavedSecureSeason);
    xt("resumeSavedDraftBtn").addEventListener("click", resumeChosenSecureDraft);
    xt("startNewDraftBtn").addEventListener("click", cancelSavedDraftAndStartNew);


    xt("refreshGlobalLeaderboardBtn").addEventListener("click", renderGlobalLeaderboard);
    xt("refreshDailyLeaderboardBtn").addEventListener("click", renderDailyLeaderboard);
    xt("refreshReviewLeaderboardBtn").addEventListener("click", () => {
      renderSeasonReviewLeaderboard()
    });
    xt("reviewLeaderboardTabs").querySelectorAll("button").forEach(button => {
      button.addEventListener("click", () => {
        reviewLeaderboardPeriod = button.dataset.period;
        renderSeasonReviewLeaderboard()
      })
    });
    console.info(
      `SPL Draft ${PHASE4_PRODUCTION_BUILD}: secure drafting, season simulation, player statistics, awards and trusted scoring are active.`
    );

    console.info(
      `SPL Draft ${PHASE5_PRODUCTION_BUILD}: secure luck-based Daily Challenge, three eligible attempts and separate Daily leaderboard are active.`
    );
    console.info(
      `SPL Draft ${PHASE6_BUILD}: public card database removed; secure backend-only test build active.`
    );
    document.documentElement.dataset.phase6Build =
      PHASE6_BUILD;
    initializeOnlineBackend().then(async () => {
      renderGlobalLeaderboard();

      if (DRAFT_SERVER_MODE_ENABLED) {
        const seasonMarker =
          readSecureSeasonResumeMarker();

        if (seasonMarker) {
          await tryResumeSecureSeason()
        } else if (
          SERVER_DAILY_ENABLED &&
          readSecureDailyResumeMarker()
        ) {
          const resumedDaily =
            await tryResumeSecureDailyChallenge();

          if (!resumedDaily) {
            await tryResumeSecureDraft()
          }
        } else {
          await tryResumeSecureDraft()
        }
      }
    }).catch(() => {});
    xt("exportRecordsBtn").addEventListener("click", exportLocalProfile);
    xt("importRecordsBtn").addEventListener("click", () => xt("importRecordsFile").click());
    xt("importRecordsFile").addEventListener("change", event => importLocalProfileFile(event.target.files && event.target.files[0]));
    xt("resetLocalDataBtn").addEventListener("click", event => m("Reset all local records?", "This permanently removes run history, achievements, personal records and Daily Challenge results from this browser.", "Reset Everything", () => {
      resetLocalProfile();
      l("Local records reset.")
    }, event.currentTarget));
    xt("copyFinalResultBtn").addEventListener("click", () => Ct && Ct.savedRun && copyRunResult(Ct.savedRun));
    xt("viewRecordsBtn").addEventListener("click", () => {
      renderRecordsScreen();
      n("scr-records")
    });

    const $t = "Restart this run? Your current draft progress will be lost.",
      _t = "Return home? Your current draft progress will be lost.";
    xt("globalHomeBtn").addEventListener("click", event => handleGlobalHome(event.currentTarget));
    initializeBrowserBackNavigation();
    xt("homeBtn").addEventListener("click", event => handleGlobalHome(event.currentTarget)), xt("draftRestartBtn").addEventListener("click", t => m("Restart this run?", $t, "Restart Run", c, t.currentTarget)), xt("restartBtn").addEventListener("click", t => m("Restart this run?", $t, "Restart Run", c, t.currentTarget)), xt("restartRunBtn").addEventListener("click", t => m("Restart this run?", $t, "Restart Run", c, t.currentTarget)), xt("scoreRestartBtn").addEventListener("click", t => m("Restart this run?", $t, "Restart Run", c, t.currentTarget)), xt("restartCtlBtn").addEventListener("click", t => m("Restart this run?", $t, "Restart Run", c, t.currentTarget)), xt("navCancel").addEventListener("click", () => W(!1)), xt("navConfirm").addEventListener("click", () => W(!0)), xt("navModal").addEventListener("keydown", t => {
      "Escape" === t.key && W(!1)
    }), xt("rollBtn").addEventListener("click", () => z(!1)), xt("skipBtn").addEventListener("click", () => z(!0)), document.getElementById("serverRollTestBtn").addEventListener("click", runServerRouletteShadowTest), document.getElementById("serverSkipTestBtn").addEventListener("click", runServerSkipShadowTest), document.getElementById("serverSelectTestBtn").addEventListener("click", runServerSelectionShadowTest), xt("startSimBtn").addEventListener("click", startSeasonFlow), xt("editPosBtn").addEventListener("click", () => {
      F(), d("sumModal"), xt("openSummaryBtn").style.display = "inline-block"
    }), xt("openSummaryBtn").addEventListener("click", g), xt("swapCancel").addEventListener("click", () => d("swapModal")), xt("nextMdBtn").addEventListener("click", playNextSeasonFlow), xt("skipEndBtn").addEventListener("click", skipSeasonFlow)
  } catch (rs) {
    console.error(rs), document.body.innerHTML = '<div style="font-family:system-ui;color:#EDF3EC;background:#0A1611;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:30px;text-align:center">Could not start the game \u2014 please update your browser and reload.<\/div>'
  }
})();
