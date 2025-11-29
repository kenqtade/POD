import { Odyssey, Template, User } from './types';

export const CURRENT_USER: User = {
  name: "Aria Montgomery",
  handle: "@neuralnomad",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbXsEAcQoa-SfeEVcK2oaTn_zzpGvg4FnVIHznbry05YNwhXZMxqgJed9vXFmCLDN3KVhOC5fX_yseYEdwMJ1yvAAtaGo7ZFYhXFMvx83E8rvJQL8lF9WAMA4ocRrBEMYYjdIlmuNggQPfcTRBQgkBr2XKbX2xZE7mgvD_JN2AHLNS0WgRL6Pb7t8uHkAUf_U8XvN3p5QlrSx8uL5X9436t_4Ok8L1qtS1s9BbBjZ-V9osl27f48zL-NziiFGyYNm_Dapvaik3vJ8"
};

export const MOCK_ODYSSEYS: Odyssey[] = [
  {
    id: "1",
    title: "Cosmic Landing Page",
    description: "Exploring vibrant and compelling copy for a new space-tech startup's digital forefront.",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAosjHB_TDHsXYaPfoFVhvDbMKhgaPeRz_waz-B-qYil0phCkS_DBDixKvELU3edkZcCKbnnqiBFD9-XYaaV9r1siUeU5RLGvL0GLp-EsEWPViZJXxjE3tqIUKfj-XOLUwh8G6pg3fyhE_4HI6YcMa6e_vBtk7uBBL0QMbZgzwp3PWoTxSj2NT0ZQCVSPQPv0lavFnwcVD4EO3nr4Vn8CE3-W_O0HhzF7HQ7-49FymLQ6IChZa6IlaWAt0fQmcM5TrX3gcFByS86CE",
    progress: 100,
    waypoints: 8,
    totalWaypoints: 8,
    author: CURRENT_USER,
    updatedAt: "2 hours ago",
    likes: 432,
    isPublished: true
  },
  {
    id: "2",
    title: "API Documentation",
    description: "Generative prompts for developer-friendly documentation.",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjQqUzNoYIRiyNgAGdoEBdfb0QI-j_1khCAVG9RR32RtX8EJzej4OzKseqzrlo1S0FOkF4omaZqDR-AgpOF8Ut_5Ct610ovzaJIJwS_OkZ62YOxcngja_0QjMxKhoymW4LLnuUbQTgIWyyU_FmIiFuYR8DRTzXKWwFpEnQel735NbuyUUAM2o3IJZsZTbDKMmRWUC7jugxDy2V7sHxKGFkWGV23yVbOukLCOlOXc6FXoJ59vEpDiJRwBlYrnU3CgE_0xuZiA7LjJo",
    progress: 75,
    waypoints: 12,
    totalWaypoints: 16,
    author: CURRENT_USER,
    updatedAt: "8 hours ago"
  },
  {
    id: "3",
    title: "Mobile Onboarding",
    description: "Flow refinement for fintech app onboarding.",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrgot5jmt8qekaSog2gQZ-O56_LWaEF88hLm6-SwQ4ny1lc5ockyCwmazEx_-sK5hGqxhp_BcK5ETg2WhCe-5hsYCGSqMGzioFkxQ3NwhjEqUZuQciibeSivNIjqkopG-T8EMruiMNsqCv0SM_QKsvEOezGKzCygq__zeo-FfKFF0JlH7v8wV0o_p4nFqCxi387eOGyEOD-rJ0t6wvQ5WNmYjShC_XmWXNi-FVHrvmxMRasdvIvSTiLHl4ecfZ5tvnERnHRVarJnY",
    progress: 100,
    waypoints: 5,
    totalWaypoints: 5,
    author: CURRENT_USER,
    updatedAt: "2 days ago"
  },
  {
    id: "4",
    title: "\"Nomad\" Screenplay",
    description: "AI-assisted scriptwriting for a sci-fi short film.",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA26xCB3k3rbT0UjVQp9asAghUwY13rvwaXwjpYfJhjePk0URstAx9nPtK-mOdDTAmal76BzfGcAo5w8zMkT2KZndaRNYSzIBWrrPHKGDmvqnSR53O2Ojo8NrGyIA-e_vJ2JBVyvuKSaSnRGsuFSJWoa1GanajbINqe4jLEB1-RgvBw3YK6Nj5JwAmD0BaA21ObSNaX2W5yY65kCd6wiwJtbtI8t0O9EhmgKHdyuxQT0DEhnetoAEvRhd-ryp69Gxvch86ArAE6JU",
    progress: 30,
    waypoints: 5,
    totalWaypoints: 18,
    author: CURRENT_USER,
    updatedAt: "3 days ago"
  },
];

export const MOCK_TEMPLATES: Template[] = [
  {
    id: "t1",
    title: "Cosmic Dreams",
    author: { name: "Neural Nomad", handle: "@neuralnomad", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbXsEAcQoa-SfeEVcK2oaTn_zzpGvg4FnVIHznbry05YNwhXZMxqgJed9vXFmCLDN3KVhOC5fX_yseYEdwMJ1yvAAtaGo7ZFYhXFMvx83E8rvJQL8lF9WAMA4ocRrBEMYYjdIlmuNggQPfcTRBQgkBr2XKbX2xZE7mgvD_JN2AHLNS0WgRL6Pb7t8uHkAUf_U8XvN3p5QlrSx8uL5X9436t_4Ok8L1qtS1s9BbBjZ-V9osl27f48zL-NziiFGyYNm_Dapvaik3vJ8" },
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDEhp_i2eI8OUp5OmSN0Q6V7W3_r9vzAkXlKPp0UUJHiASM0FlUrqN2CF1biAcpPNInH5gKU9ukG7dfgCll3_ZkRrPinQ9GLm7rkz-mJm-kztBXjf8_N5NwVBYfMqO_ZlC32pFRiQdkfKnQDBe0512mXEtecMwdyNPEwGrgIvcSvymBd0kgxyCqS4vHYbHSyBxVABVhGffcaXzDwHfmaYxma-1dAwkClELYHnK--MTOaANS4FyKOgo2fUB5glmab4j9R9qf3_H8ok",
    views: 1200,
    likes: 432,
    forks: 128
  },
  {
    id: "t2",
    title: "Galactic Voyage",
    author: { name: "Pixel Pioneer", handle: "@pixelpioneer", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbXsEAcQoa-SfeEVcK2oaTn_zzpGvg4FnVIHznbry05YNwhXZMxqgJed9vXFmCLDN3KVhOC5fX_yseYEdwMJ1yvAAtaGo7ZFYhXFMvx83E8rvJQL8lF9WAMA4ocRrBEMYYjdIlmuNggQPfcTRBQgkBr2XKbX2xZE7mgvD_JN2AHLNS0WgRL6Pb7t8uHkAUf_U8XvN3p5QlrSx8uL5X9436t_4Ok8L1qtS1s9BbBjZ-V9osl27f48zL-NziiFGyYNm_Dapvaik3vJ8" },
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOSsam6gYfXpWOqNjs6iAxTu0tfw48UFzGUtZdsZeWH4KIZJuXctfgpomOJbYAHUXZkkPX9Y2Ul5iDNYtD73IDuqGpQVOUJbLPi6JvL_PPDnQrQJ5jF1fSU5qk7nWg_szGJjb-YGbKlEbPS4uVkLjXEDf0agJdAmH-nnuUdXCWUAm_B1ZVsiLC5N-lVmOjVAjMz0copu8Xx_xFmluUyJ02jFHwFUZNzY6jl8fg_HVByvPGzA1Sm66_eW3gLFwHt-JQ4-ytfLCXzSY",
    views: 980,
    likes: 210,
    forks: 95
  },
  {
    id: "t3",
    title: "AI Metropolis",
    author: { name: "Code Crafter", handle: "@codecrafter", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbXsEAcQoa-SfeEVcK2oaTn_zzpGvg4FnVIHznbry05YNwhXZMxqgJed9vXFmCLDN3KVhOC5fX_yseYEdwMJ1yvAAtaGo7ZFYhXFMvx83E8rvJQL8lF9WAMA4ocRrBEMYYjdIlmuNggQPfcTRBQgkBr2XKbX2xZE7mgvD_JN2AHLNS0WgRL6Pb7t8uHkAUf_U8XvN3p5QlrSx8uL5X9436t_4Ok8L1qtS1s9BbBjZ-V9osl27f48zL-NziiFGyYNm_Dapvaik3vJ8" },
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfaRw2yEepDryBGfH0ndXrA0dpz1lD2FDXZkb7mVgs-TxQJ7KgfXOrK5w5jbmCcfbMSmVWMCsfjy59JyqlKlIjfWhVyKApUOW47jlYiyZZSjg-CClA9hKv3oK51CFFn2hqh2rkw7CM3CX6NRmRU0-FwCA1oCbt7VwU3LeE3oHTunIsvs1J29RcHa_n9pL5rmZOLAZshwc90YjAjHCdTO84Z46fcmR8-YOvz704cOiQHCkhZj-yMr1r5FPAqreQ-ZYaontr-0NnnVU",
    views: 2500,
    likes: 890,
    forks: 340
  },
  {
    id: "t4",
    title: "Future of Art",
    author: { name: "Artifex", handle: "@artifex", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbXsEAcQoa-SfeEVcK2oaTn_zzpGvg4FnVIHznbry05YNwhXZMxqgJed9vXFmCLDN3KVhOC5fX_yseYEdwMJ1yvAAtaGo7ZFYhXFMvx83E8rvJQL8lF9WAMA4ocRrBEMYYjdIlmuNggQPfcTRBQgkBr2XKbX2xZE7mgvD_JN2AHLNS0WgRL6Pb7t8uHkAUf_U8XvN3p5QlrSx8uL5X9436t_4Ok8L1qtS1s9BbBjZ-V9osl27f48zL-NziiFGyYNm_Dapvaik3vJ8" },
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBg8EmRA_1WUcVIdzOSytvq4CvQSHpMQSkMcRcvohvtIh_9pOZJbF2FTE5RFw6Kc-qghTCCWYjyXPhn9Yl0LwVy_GqLs4jn2JBlmbBboH9kbWopJZCuOBwMals5WZjIJnCK1WoCiLzDdY1tPeaoairExTJo9L4vJrdrw0FdO6IdxYgAu2ARZOSluT3SRMN8qXO5p9Y2NlTICB-Lg8Hc4mTeSlEZPoiDAsAaNsva9GKBkeE6klMczy0N6t9ggz99tVmmichuL_KvvAw",
    views: 850,
    likes: 150,
    forks: 72
  }
];
