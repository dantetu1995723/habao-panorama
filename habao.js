/* 哈宝交互全景 · 按真机呈现（根页 / 全屏 Cover / 压栈 Push / 同 Cover 替换 / 贴底 Sheet） */
(() => {
  const A = {
    logo: "assets/brand_logo.png",
    task: {
      medication: "assets/task_type_medication.png",
      exercise: "assets/task_type_exercise.png",
      monitoring: "assets/task_type_monitor.png",
      diet: "assets/task_type_diet.png",
      rest: "assets/task_type_rest.png",
      appointment: "assets/task_type_appointment.png",
    },
    stamp: {
      medication: "assets/stamp_medication.png",
      exercise: "assets/stamp_exercise.png",
      monitoring: "assets/stamp_monitor.png",
      diet: "assets/stamp_diet.png",
      rest: "assets/stamp_rest.png",
      appointment: "assets/stamp_appointment.png",
      bloom: "assets/stamp_bloom.png",
    },
  };

  const I = {
    qr: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.6"/><rect x="14" y="3" width="7" height="7" rx="1.6"/><rect x="3" y="14" width="7" height="7" rx="1.6"/><path d="M14 14h3v3h-3z"/><path d="M21 14v3"/><path d="M14 21h3"/><path d="M21 21h.01"/></svg>`,
    person: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a4.2 4.2 0 1 0-4.2-4.2A4.2 4.2 0 0 0 12 12Zm0 2.2c-3.6 0-8 1.8-8 5.4V21h16v-1.4c0-3.6-4.4-5.4-8-5.4Z"/></svg>`,
    crown: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 18.2 5.4 8.6 9.3 12.2 12 5.4l2.7 6.8 3.9-3.6L21 18.2V20H3v-1.8Z"/></svg>`,
    walk: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 5.5a1.8 1.8 0 1 0-1.8-1.8 1.8 1.8 0 0 0 1.8 1.8ZM9.1 22l1.1-5.2 2.1 2V22h2.1v-5.1l-2.2-2.1 0.6-3.1a7.4 7.4 0 0 0 3.5 1.5v-2.1a5.4 5.4 0 0 1-3.1-1.4l-1.3-1.3a2.1 2.1 0 0 0-1.6-.6 2.2 2.2 0 0 0-1.8 1L6.2 12.2l1.7 1.2 2-3.3.8 4.1-2.5 1.4L6.6 22Z"/></svg>`,
    share: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 5.5 13 3v2H8a3 3 0 0 0-3 3v4h2V8a1 1 0 0 1 1-1h5v2l3-3.5ZM6 13v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6h-2v6H8v-6Z"/></svg>`,
    cal: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 3h1.7v1.6h4.6V3H16v1.6h2.4c.9 0 1.6.7 1.6 1.6v13.2c0 .9-.7 1.6-1.6 1.6H5.6c-.9 0-1.6-.7-1.6-1.6V6.2c0-.9.7-1.6 1.6-1.6H8V3Zm-2.4 6.4v9.6h12.8V9.4H5.6Z"/></svg>`,
    calLarge: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.2 2.4h1.8v1.8h6V2.4h1.8v1.8H19a1.8 1.8 0 0 1 1.8 1.8v14.2A1.8 1.8 0 0 1 19 22H5a1.8 1.8 0 0 1-1.8-1.8V6a1.8 1.8 0 0 1 1.8-1.8h2.2V2.4ZM5 9.2v11h14v-11H5Z"/></svg>`,
    minus: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/><rect x="6.2" y="10.6" width="11.6" height="2.8" rx="1.4" fill="#fff"/></svg>`,
    chevUD: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M8 9 12 5l4 4M8 15l4 4 4-4"/></svg>`,
    warn: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 2 21h20L12 3Zm0 6.2.8 6.2h-1.6L12 9.2ZM12 18a1.1 1.1 0 1 0 0-2.2A1.1 1.1 0 0 0 12 18Z"/></svg>`,
    ecg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h3l2-5 3 10 2-5h8"/></svg>`,
    doc: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h9l5 5v15H6V2Zm8 1.5V8h4.5"/></svg>`,
    chevL: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 5 8 12l7 7"/></svg>`,
    chevR: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 5l7 7-7 7"/></svg>`,
    chevU: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 15l6-6 6 6"/></svg>`,
    chevD: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 9l6 6 6-6"/></svg>`,
    tap: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 2a2 2 0 0 1 2 2v7.2l1.1-.4a3 3 0 0 1 3.8 1.5l3.4 7.2-1.8.9-3.4-7.2-.3-.1V20H7V8.5A2 2 0 0 1 9 6.5V4a2 2 0 0 1 0-2Z"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1.2 14.4-4-4 1.5-1.5 2.5 2.5 5.2-5.2 1.5 1.5Z"/></svg>`,
    undo: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 6V2L6 8l6 6V10a5 5 0 1 1-5 5H5a7 7 0 1 0 7-9Z"/></svg>`,
    plus: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6Z"/></svg>`,
    cam: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 4 7.5 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3.5L15 4H9Zm3 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"/></svg>`,
    house: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 3 9 8h-3v10h-5v-6H11v6H6V11H3l9-8Z"/></svg>`,
    pencil: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.3V21h3.7L19 8.7 15.3 5 3 17.3Zm17.7-10.4a1 1 0 0 0 0-1.4l-2.2-2.2a1 1 0 0 0-1.4 0l-1.8 1.8 3.6 3.6 1.8-1.8Z"/></svg>`,
    // 真机「管理」入口用 slider.horizontal.3
    slider: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v1.6H3V5Zm0 6.2h18v1.6H3v-1.6Zm0 6.2h18v1.6H3v-1.6Z"/><path d="M7 2.6h2.6v6.4H7V2.6Zm7 6.2h2.6v6.4H14v-6.4Zm-8 6.2h2.6v6.4H6v-6.4Z"/></svg>`,
    // 改名影响提示（真机 info.circle.fill）
    info: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z"/></svg>`,
    chat: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h10a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H9l-5 4V7a3 3 0 0 1 3-3Zm13 4h3a3 3 0 0 1 3 3v8l-4-3h-2v-3a5 5 0 0 0-5-5h1a5 5 0 0 1 4 0Z"/></svg>`,
    x: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.2 5 5 6.2 10.8 12 5 17.8 6.2 19 12 13.2 17.8 19 19 17.8 13.2 12 19 6.2 17.8 5 12 10.8Z"/></svg>`,
    ellipsis: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2.1"/><circle cx="12" cy="12" r="2.1"/><circle cx="19" cy="12" r="2.1"/></svg>`,
    // 确认页卡片附属行：明细（剂量）与备注
    drop: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5 7.2 9.6a7 7 0 1 0 9.6 0L12 2.5Zm0 3.4 3.1 4.6a4.6 4.6 0 1 1-6.2 0L12 5.9Z"/></svg>`,
    alignLeft: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 5h16v2H4V5Zm0 6h11v2H4v-2Zm0 6h16v2H4v-2Z"/></svg>`,
    eye: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 5c5.5 0 9.5 4.2 10.6 7-1.1 2.8-5.1 7-10.6 7S2.5 14.8 1.4 12C2.5 9.2 6.5 5 12 5Zm0 3.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2Z"/></svg>`,
    list: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 6h13v2H8V6Zm0 5h13v2H8v-2Zm0 5h13v2H8v-2ZM3 6h3v2H3V6Zm0 5h3v2H3v-2Zm0 5h3v2H3v-2Z"/></svg>`,
    spark: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 13.6 8.4 20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2Zm7 10 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z"/></svg>`,
    folder: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h7l2 2h9v12H3V6Z"/></svg>`,
    trash: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 3h6l1 2h5v2H3V5h5l1-2Zm1 6h2v10h-2V9Zm4 0h2v10h-2V9Z"/></svg>`,
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 2.5 9 5.8a1.5 1.5 0 0 1-.3 1.9l-1.5 1.4a12.5 12.5 0 0 0 8 8l1.4-1.5a1.5 1.5 0 0 1 1.9-.3l3.3 2.4a1.5 1.5 0 0 1 .2 2.2l-1.7 2.1c-.6.7-1.6 1-2.6.7C9.4 20.2 3.8 14.6 1.8 6.3c-.3-1 .0-2 .7-2.6L4.6 2.1a1.5 1.5 0 0 1 2 .4Z"/></svg>`,
    bell: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a6 6 0 0 1 6 6v5l1.6 2.4H4.4L6 14V9a6 6 0 0 1 6-6Zm-2.2 16h4.4A2.2 2.2 0 0 1 12 21a2.2 2.2 0 0 1-2.2-2Z"/></svg>`,
    bellSlash: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a6 6 0 0 1 6 6v5l1.6 2.4H4.4L6 14V9a6 6 0 0 1 6-6Zm-2.2 16h4.4A2.2 2.2 0 0 1 12 21a2.2 2.2 0 0 1-2.2-2Z" opacity=".38"/><path d="M4.3 3.1 3.1 4.3l16.6 16.6 1.2-1.2z"/></svg>`,
    two: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 11a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 8 11Zm8 1.2a3 3 0 1 0-3-3 3 3 0 0 0 3 3ZM2.5 19v-1.2C2.5 15.6 5.4 14 8 14s5.5 1.6 5.5 3.8V19Zm9.2 0v-1.2c0-1.4.6-2.6 1.6-3.5A7 7 0 0 1 21.5 18V19Z"/></svg>`,
    steth: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 3h2v7a3 3 0 0 0 6 0V3h2v7a5 5 0 0 1-4 4.9V17a4 4 0 1 0 8 0v-1.1A3.5 3.5 0 1 0 16.5 12H15v2h1.5a1.5 1.5 0 1 1 0 3 2 2 0 1 1-4 0v-2.1A5 5 0 0 1 6 10V3Z"/></svg>`,
    grid: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 5v5.2l3.6 2.2-.9 1.5L11 13V7Z"/></svg>`,
    pills: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 3.5a5 5 0 0 1 7 7l-7 7a5 5 0 1 1-7-7l7-7Zm5.6 1.4-4.2 4.2 5 5 4.2-4.2a3 3 0 0 0-5-5Z"/></svg>`,
    leaf: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 20c8 0 14-6 14-14 0-1-.1-2-.3-3C11 4 4 10 4 18c0 .7.1 1.4.3 2H5Zm7-6.5c-2.2 2.4-4.2 3.8-6.2 4.6.8-2.2 2.2-4.4 4.4-6.8 2.4-2.6 5-4.4 7.8-5.3-1.2 2.8-3.2 5.3-6 7.5Z"/></svg>`,
    moon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.3 3.1A8.8 8.8 0 1 0 21 14.6 7.2 7.2 0 0 1 14.3 3.1Z"/></svg>`,
    // 方案四时段图标：凌晨 / 夜间要有区别，按 SF Symbols moon.zzz.fill / moon.stars.fill 补两枚
    moonZzz: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 5.2a6.4 6.4 0 1 0 6.4 6.4 5 5 0 0 1-6.4-6.4Z"/><path d="M15.4 2.2h5.2v1.3l-3.3 3.8h3.4v1.4h-5.5V7.4l3.3-3.8h-3.1V2.2Z"/></svg>`,
    moonStars: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 5.2a6.4 6.4 0 1 0 6.4 6.4 5 5 0 0 1-6.4-6.4Z"/><path d="M17.6 1.6l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9.9-2.3Z"/><path d="M17.2 7l.6 1.5 1.5.6-1.5.6-.6 1.5-.6-1.5-1.5-.6 1.5-.6.6-1.5Z"/></svg>`,
    sunrise: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 18h16v2H4v-2Zm8-14 1.2 3.2H16l-2.6 2 1 3.2L12 10.6 9.6 12.4l1-3.2L8 7.2h2.8L12 4ZM2 14h2.1a8 8 0 0 1 15.8 0H22v2H2v-2Z"/></svg>`,
    sun: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11 1h2v3h-2V1Zm0 19h2v3h-2v-3ZM1 11h3v2H1v-2Zm19 0h3v2h-3v-2ZM4.2 3.8l1.4-1.4 2.1 2.1-1.4 1.4-2.1-2.1Zm12.1 12.1 1.4-1.4 2.1 2.1-1.4 1.4-2.1-2.1ZM3.8 19.8l1.4 1.4 2.1-2.1-1.4-1.4-2.1 2.1Zm12.1-12.1 1.4 1.4 2.1-2.1-1.4-1.4-2.1 2.1ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"/></svg>`,
    noon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 2.5 7 6h10l-1.5-3.5h-7ZM4 8v2h1l1.2 11h11.6L19 10h1V8H4Zm8 3.2A2.6 2.6 0 0 0 9.5 14c0 1.6 1.4 2.2 2.5 3.1 1.1-.9 2.5-1.5 2.5-3.1A2.6 2.6 0 0 0 12 11.2Z"/></svg>`,
    haze: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4a6 6 0 0 1 6 6H6a6 6 0 0 1 6-6ZM3 13h18v2H3v-2Zm2 4h14v2H5v-2Zm-2 4h18v2H3v-2Z"/></svg>`,
    set: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 18h16v2H4v-2Zm8-2a6 6 0 0 0 5.9-5H6.1A6 6 0 0 0 12 16ZM2 14h2.1a8 8 0 0 0 .6 2H2v-2Zm17.3 2a8 8 0 0 0 .6-2H22v2h-2.7Z"/></svg>`,
    heartSq: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm7.1 5.2-1.3 1.2c-1.7 1.6-2.8 2.7-2.8 4.1A2.2 2.2 0 0 0 10.3 16c.6 0 1.2-.3 1.8-.8.6.5 1.2.8 1.8.8a2.2 2.2 0 0 0 2.3-2.5c0-1.4-1.1-2.5-2.8-4.1L12.1 8.2Z"/></svg>`,
    cycle: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.2 7.2A6.8 6.8 0 0 1 17 8.1l1.2-1.8 1.6 5.2-5.3-.6 1.3-1.4A4.8 4.8 0 0 0 7.8 12H5.6a7 7 0 0 1 1.6-4.8Zm9.6 9.6A6.8 6.8 0 0 1 7 15.9l-1.2 1.8-1.6-5.2 5.3.6-1.3 1.4A4.8 4.8 0 0 0 16.2 12h2.2a7 7 0 0 1-1.6 4.8Z"/></svg>`,
    shoe: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 14c0-2 1.2-3.4 3.2-4.2L9 9l1.2-2.4A2 2 0 0 1 12 5.5h1.2c.8 0 1.5.5 1.8 1.2L16 9h3.2A2.8 2.8 0 0 1 22 11.8V14H4Zm0 2h16v2.2A1.8 1.8 0 0 1 18.2 20H5.8A1.8 1.8 0 0 1 4 18.2V16Z"/></svg>`,
    pause: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4.2" height="14" rx="1.4"/><rect x="13.8" y="5" width="4.2" height="14" rx="1.4"/></svg>`,
    play: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.8v12.4L19 12 8 5.8Z"/></svg>`,
    prev: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2.2v12H6V6Zm3.2 6L18 18.2V5.8L9.2 12Z"/></svg>`,
    next: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.8 6H18v12h-2.2V6ZM6 5.8v12.4L14.8 12 6 5.8Z"/></svg>`,
    scope: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4.2"/><path d="M12 3v3.2M12 17.8V21M3 12h3.2M17.8 12H21"/></svg>`,
    note: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 5.2v9.1a3.2 3.2 0 1 1-1.8-2.9V8.2L19 5.6v7.2a3.2 3.2 0 1 1-1.8-2.9V4.2L9 5.2Z"/></svg>`,
    radio: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.2 4.2 18 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.6L7.2 4.2ZM8 13.5A2.5 2.5 0 1 0 10.5 16 2.5 2.5 0 0 0 8 13.5Zm5.2-.7h5.6v1.6h-5.6Zm0 3.2h5.6v1.6h-5.6Z"/></svg>`,
    wave: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 10h2v4H4v-4Zm3.5-3h2v10h-2V7ZM11 4h2v16h-2V4Zm3.5 3h2v10h-2V7ZM18 10h2v4h-2v-4Z"/></svg>`,
    mic: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5a3.5 3.5 0 0 1 3.5 3.5v5.5a3.5 3.5 0 0 1-7 0V6A3.5 3.5 0 0 1 12 2.5Zm-6.6 8.6h1.8a4.8 4.8 0 0 0 9.6 0h1.8a6.6 6.6 0 0 1-5.7 6.5V21h-1.8v-3.4a6.6 6.6 0 0 1-5.7-6.5Z"/></svg>`,
    micLine: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v3.5"/></svg>`,
    kbd: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2.5" y="5.5" width="19" height="13" rx="2.5"/><path d="M6.5 9.5h1M10.5 9.5h1M14.5 9.5h1M17 9.5h.5M6.5 12.5h1M10.5 12.5h1M14.5 12.5h1M17 12.5h.5M8 15.5h8"/></svg>`,
    camLine: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M9 4.5 7.6 6.5H4.5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3.1L15 4.5H9Z"/><circle cx="12" cy="13" r="3.6"/></svg>`,
    arrowU: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>`,
    tick: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`,
    hist: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4a8 8 0 1 1-7.4 4.9l1.8.7A6.2 6.2 0 1 0 12 5.8V8l3.4-3.2L12 1.6V4Zm-.8 4.4h1.6v4.1l3 1.8-.8 1.4-3.8-2.3V8.4Z"/></svg>`,
    scale: `<svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M6 7.2h12A2.8 2.8 0 0 1 20.8 10v7.2A2.8 2.8 0 0 1 18 20H6a2.8 2.8 0 0 1-2.8-2.8V10A2.8 2.8 0 0 1 6 7.2Zm6 2.2a3.4 3.4 0 1 0 .1 6.8 3.4 3.4 0 0 0-.1-6.8Zm0 1.7a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4Z"/></svg>`,
    watch: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.2 2.2h7.6l.7 3.1h.3A2.2 2.2 0 0 1 19 7.5v9a2.2 2.2 0 0 1-2.2 2.2h-.3l-.7 3.1H8.2l-.7-3.1h-.3A2.2 2.2 0 0 1 5 16.5v-9a2.2 2.2 0 0 1 2.2-2.2h.3l.7-3.1Zm3.2 6.2v4.1l2.6 1.5-.9 1.5L9.6 13.4V8.4h1.8Z"/></svg>`,
    waves: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8.5 8.4a5 5 0 0 0 0 7.2"/><path d="M5.6 5.6a9 9 0 0 0 0 12.8"/><path d="M15.5 8.4a5 5 0 0 1 0 7.2"/><path d="M18.4 5.6a9 9 0 0 1 0 12.8"/><circle cx="12" cy="12" r="1.35" fill="currentColor" stroke="none"/></svg>`,
    medCase: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 3h6a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3V5a2 2 0 0 1 2-2Zm0 4h6V5H9v2Zm2 4v2H9v2h2v2h2v-2h2v-2h-2v-2h-2Z"/></svg>`,
    shieldCheck: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 4 5.4v6.1c0 5.1 3.4 9.8 8 11 4.6-1.2 8-5.9 8-11V5.4L12 2Zm-1.2 13.6-3.4-3.4 1.4-1.4 2 2 4.6-4.6 1.4 1.4-6 6Z"/></svg>`,
  };
  Object.keys(I).forEach((k) => { I[k] = I[k].replace("<svg ", '<svg width="20" height="20" '); });

  const BLOCKS = [
    { id: 0, title: "凌晨", range: "0:00-6:00", start: 0, end: 6 },
    { id: 1, title: "早晨", range: "6:00-9:00", start: 6, end: 9 },
    { id: 2, title: "上午", range: "9:00-12:00", start: 9, end: 12 },
    { id: 3, title: "午间", range: "12:00-14:00", start: 12, end: 14 },
    { id: 4, title: "下午", range: "14:00-18:00", start: 14, end: 18 },
    { id: 5, title: "傍晚", range: "18:00-21:00", start: 18, end: 21 },
    { id: 6, title: "夜间", range: "21:00-24:00", start: 21, end: 24 },
  ];
  const PERIODS = [
    { title: "早晨", icon: "sunrise", from: 6, to: 9 },
    { title: "上午", icon: "sun", from: 9, to: 12 },
    { title: "午间", icon: "noon", from: 12, to: 14 },
    { title: "下午", icon: "haze", from: 14, to: 18 },
    { title: "傍晚", icon: "set", from: 18, to: 21 },
    { title: "夜间", icon: "moon", from: 21, to: 30 },
  ];

  // 专业类分类：服药 / 运动 / 复查走专业分流（首页虚框新建时置灰禁用）
  const PROFESSIONAL = new Set(["medication", "exercise", "appointment"]);

  // 血压 / 心率参考值 —— 与 VitalReference.swift 同一套两级模型：
  // 治疗目标值（按年龄分层）驱动参考带与统计计数；手册单次报警阈值驱动告警态。
  const VITAL = {
    systolicLower: 90,
    diastolicLower: 60,
    hrBand: [55, 60],
    bpTarget(age) { return age >= 80 ? { sys: 150, dia: 90 } : { sys: 140, dia: 90 }; },
    bpTargetText(age) { const t = this.bpTarget(age); return `<${t.sys}/${t.dia}`; },
    bpStatus(sys, dia, age) {
      if (sys >= 180 || dia >= 110) return "alertHigh";
      if (sys < 90) return "alertLow";
      const t = this.bpTarget(age);
      if (sys >= t.sys || dia >= t.dia) return "aboveTarget";
      if (dia < 60) return "belowTarget";
      return "inTarget";
    },
    hrStatus(bpm) {
      if (bpm > 100) return "alertHigh";
      if (bpm < 50) return "alertLow";
      if (bpm >= 55 && bpm <= 60) return "inTarget";
      return bpm < 55 ? "belowTarget" : "aboveTarget";
    },
  };
  const VITAL_LAB = { inTarget: "达标", aboveTarget: "高于目标", belowTarget: "低于目标", alertHigh: "偏高报警", alertLow: "偏低报警" };
  const VITAL_COLOR = { inTarget: "#1AA64A", aboveTarget: "#F2994A", belowTarget: "#F2994A", alertHigh: "#F05A6E", alertLow: "#F05A6E" };
  /// 取更严重的一档（用于整条提示的底色）
  const VITAL_RANK = { inTarget: 0, belowTarget: 1, aboveTarget: 1, alertLow: 2, alertHigh: 2 };
  /// Demo 档案年龄（李建国 1968-03-12），用于血压年龄分层
  const VIT_AGE = 58;

  const CAT = {
    medication: { name: "服药", chip: "服药", icon: "medication" },
    exercise: { name: "运动", chip: "运动", icon: "exercise" },
    monitoring: { name: "测血压", chip: "测血压", icon: "monitoring" },
    rest: { name: "作息", chip: "作息", icon: "rest" },
    diet: { name: "饮食", chip: "饮食", icon: "diet" },
    appointment: { name: "复查", chip: "复查", icon: "appointment" },
  };

  const SEED = [
    { id: "t1", title: "起床测血压", h: 6, m: 30, cat: "monitoring", note: "依据出院记录，确诊高血压3级，每日测血压两次" },
    { id: "t2", title: "晨起温水", h: 7, m: 0, cat: "diet", note: "200–300 ml 温水" },
    { id: "t3", title: "早餐", h: 7, m: 30, cat: "diet", note: "低盐低脂，搭配粗粮" },
    { id: "t4", title: "服用阿司匹林肠溶片", h: 8, m: 0, cat: "medication", note: "依据出院记录，阿司匹林肠溶片每日用药一次" },
    { id: "t5", title: "服用美托洛尔缓释片", h: 8, m: 30, cat: "medication", note: "依据出院记录，美托洛尔缓释片每日用药一次" },
    { id: "t6", title: "晨间散步", h: 9, m: 0, cat: "exercise", note: "匀速步行，心率 ≤ 110 bpm" },
    { id: "t7", title: "上肢康复操", h: 10, m: 0, cat: "exercise", note: "坐姿弹力带训练 · 2 组 × 10 次" },
    { id: "t8", title: "上午加餐", h: 10, m: 30, cat: "diet", note: "一份水果 / 坚果", cycle: false },
    { id: "t9", title: "午餐控盐", h: 12, m: 0, cat: "diet", note: "每日盐摄入 < 5g · 多蔬菜" },
    { id: "t10", title: "午休", h: 13, m: 0, cat: "rest", note: "保持安静环境，避免手机" },
    { id: "t11", title: "测心率", h: 14, m: 0, cat: "monitoring", note: "记录静息心率与自觉症状" },
    { id: "t12", title: "下午散步", h: 15, m: 0, cat: "exercise", note: "选择平坦路面，注意防滑" },
    { id: "t13", title: "饮水提醒", h: 16, m: 0, cat: "diet", note: "累计饮水 ≥ 800 ml（全天 1.5–2 L）" },
    { id: "t14", title: "晚餐", h: 18, m: 0, cat: "diet", note: "七分饱 · 少油少盐" },
    { id: "t15", title: "晚间散步", h: 19, m: 0, cat: "exercise", note: "饭后半小时 · 慢速" },
    { id: "t16", title: "服用阿托伐他汀钙片", h: 21, m: 0, cat: "medication", note: "依据出院记录，阿托伐他汀钙片每晚用药一次" },
    { id: "t17", title: "放松冥想", h: 21, m: 30, cat: "rest", note: "深呼吸练习 · 478 呼吸法" },
    { id: "t18", title: "准备入睡", h: 22, m: 0, cat: "rest", note: "关闭屏幕，调暗灯光" },
    { id: "t19", title: "心内科复查", h: 9, m: 0, cat: "appointment", note: "依据出院记录，每月复查一次，带齐近期血压/心率记录" },
  ];
  // 真机模拟：SEED 是 const 绑定、内容可变；冷启动时从这份快照还原
  const SEED0 = SEED.map((t) => ({ ...t }));
  // 运行期新增计划的 id 分配（t* 为种子，n* 为新增）
  let taskSeq = 0;
  const nextTaskId = () => `n${++taskSeq}`;

  const TRACKS = [
    ["晨光漫步", "哈宝 · 康复节奏"],
    ["云端慢行", "轻律 · 户外"],
    ["心跳节拍", "舒缓 · 有氧"],
    ["林间小路", "自然白噪"],
    ["晚风归途", "放松 · 收工"],
  ];
  const MUSIC = [
    { id: "netease", title: "网易云", icon: "note" },
    { id: "qq", title: "QQ 音乐", icon: "note" },
    { id: "ximalaya", title: "喜马拉雅", icon: "radio" },
  ];

  const REST_PRESET = [
    { name: "起床", t: "07:00", note: "" },
    { name: "早餐", t: "07:30", note: "" },
    { name: "午餐", t: "12:00", note: "" },
    { name: "午休", t: "13:00", note: "" },
    { name: "晚餐", t: "18:00", note: "" },
    { name: "上床睡觉", t: "22:00", note: "" },
  ];

  /// 出院诊断含高血压时由解析补进确认页，不进基础作息预设
  const BP_FROM_PARSE = [
    { name: "起床测血压", t: "06:30", cat: "monitoring" },
    { name: "晚上测血压", t: "20:00", cat: "monitoring" },
  ];

  // freq / usage 供确认页「生成计划依据」引用来源原文用（与真机 MedItem 同字段）
  const MEDS = [
    { name: "阿司匹林肠溶片", time: "08:00", scene: "早餐后", dose: "100 mg", freq: "每日 1 次", usage: "口服" },
    { name: "硫酸氢氯吡格雷片", time: "08:00", scene: "早餐后", dose: "75 mg", freq: "每日 1 次", usage: "口服" },
    { name: "阿托伐他汀钙片", time: "21:00", scene: "睡前", dose: "20 mg", freq: "每晚 1 次", usage: "口服" },
    { name: "美托洛尔缓释片", time: "08:00", scene: "早餐后", dose: "47.5 mg", freq: "每日 1 次", usage: "口服" },
  ];

  /// 用药卡剂量标签（与真机 `infoChip` 同口径）
  function medDose(title) {
    return (liveMeds().find((x) => x.name === title) || {}).dose || "";
  }

  function medFreqPhrase(raw) {
    const c = String(raw || "").replace(/\s+/g, "");
    if (!c) return "每日用药一次";
    if (c.indexOf("用药") >= 0 || c.indexOf("服药") >= 0) return c;
    const map = [
      ["每日1次", "每日用药一次"],
      ["每日一次", "每日用药一次"],
      ["每日2次", "每日用药两次"],
      ["每日两次", "每日用药两次"],
      ["每日二次", "每日用药两次"],
      ["每日3次", "每日用药三次"],
      ["每日三次", "每日用药三次"],
      ["每晚1次", "每晚用药一次"],
      ["每晚一次", "每晚用药一次"],
      ["隔日1次", "隔日用药一次"],
      ["隔日一次", "隔日用药一次"],
      ["每周1次", "每周用药一次"],
      ["每周一次", "每周用药一次"],
      ["每12小时1次", "每12小时用药一次"],
      ["每12小时一次", "每12小时用药一次"],
    ];
    for (let i = 0; i < map.length; i++) {
      if (c.indexOf(map[i][0]) >= 0) return map[i][1];
    }
    return "每日用药一次";
  }

  /// 补充备注：直接写明来源依据与频次规则（与真机 PlanBasisNarrative.supplementaryNote 同句）
  function confirmMedNote(title) {
    const m = liveMeds().find((x) => x.name === title);
    return `依据出院记录，${title}${medFreqPhrase(m ? m.freq : "")}`;
  }

  /// 顶部依据段：活卡片日程 + 来源（与真机 PlanBasisNarrative.scheduleBoundNote 同句）
  function confirmMedBasis(m) {
    const stamp = `${m.time}${m.scene ? " " + m.scene : ""}`.trim();
    const parsed = [m.dose, m.freq, m.usage].filter(Boolean).join(" ");
    const named = stamp ? `${m.name} ${stamp}` : m.name;
    if (parsed) return `${named}，${parsed}，来源出院记录的用药。`;
    return `${named}，来源出院记录的用药。`;
  }

  function confirmApptBasis(a) {
    const cut = a.note.indexOf("，");
    const source = cut >= 0 ? a.note.slice(cut + 1) : a.note;
    return `${a.title} ${a.time}，${source}`;
  }

  /// 复查条目由来源日期现算（改日期 → 每月日号跟着变，与真机 makeInferred 同规则）
  function confirmApptItems() {
    return liveAppts().map((a) => {
      const fire = apptFireDate(a);
      const evt = a.source === "手术日期" ? "手术" : "出院";
      return {
        title: a.title,
        time: `每月${fire.getDate()}日 ${a.time}`,
        note: `依据${a.category}，${ymdCn(a.sourceYMD)}${evt}，每月复查一次`,
      };
    });
  }

  /// 「解析依据」Tab 正文：疾病信息 + 用药 / 测血压 / 复查分段
  function basisCopy() {
    return `<div class="basis-copy">${confirmBasisParagraph()}</div>`;
  }

  function confirmPaneTabs() {
    const onPlan = S.confirmPane !== "basis";
    return `<div class="filter">
      <button class="${onPlan ? "on" : ""}" data-act="setConfirmPane" data-p="plan" type="button">计划</button>
      <button class="${onPlan ? "" : "on"}" data-act="setConfirmPane" data-p="basis" type="button">解析依据</button>
    </div>`;
  }

  // V10.50：身体报告子报告页顶部分页（AI 解读 / 资料合集）——同构「计划 / 解析依据」，字号加大到适老档
  function reportPaneTabs() {
    const onInsight = S.reportPane !== "archive";
    return `<div class="filter lg">
      <button class="${onInsight ? "on" : ""}" data-act="setReportPane" data-p="insight" type="button">AI 解读</button>
      <button class="${onInsight ? "" : "on"}" data-act="setReportPane" data-p="archive" type="button">资料合集</button>
    </div>`;
  }

  // V10.61：资料合集页只读——与健康档案同源（基础报告列入组存量，复查报告按次归档），
  // 点缩略图开全屏预览；补拍走底栏，直接进拍摄页
  function reportArchivePane() {
    const src = ARCHIVE_DEMO[S.reportKind === "visit" ? "review" : "baseline"];
    const total = src.groups.reduce((s, g) => s + g.pages, 0);
    if (!src.groups.length) {
      return `<div class="ta-c" style="padding:44px 8px">
        <div class="s19 fsb t">${src.empty}</div>
        <div class="s15 fm t-sec" style="margin-top:8px">点下方「新增报告资料」拍照上传。</div>
      </div>`;
    }
    return `<div class="s15 fsb" style="color:var(--blue);opacity:.72">共 ${total} 张</div>
      ${src.groups.map((g) => `
        <div class="hr-group">
          <div class="flex between" style="align-items:baseline">
            <span class="s16 fsb t">${g.title}</span>
            <span class="s13 fm t-sec mono">${g.pages} 张</span>
          </div>
          <div class="hr-grid">
            ${Array.from({ length: g.pages }, (_, i) => `
              <button class="hr-thumb" data-act="previewPage" data-t="${g.title} 第${i + 1}页" type="button">
                <span class="hr-thumb-inner">${I.doc}</span>
                <span class="hr-page-tag">第${i + 1}页</span>
              </button>`).join("")}
          </div>
        </div>`).join("")}`;
  }

  function confirmMonitorNote(title) {
    return `依据出院记录，确诊${htnLabel()}，每日测血压两次`;
  }

  function confirmMonitorBasis(d) {
    const time = d.time || "";
    const named = time ? `${d.title} ${time}` : d.title;
    return `${named}，来源出院记录的出院诊断 ${htnLabel()}。`;
  }

  const DISEASE_INFO = ["冠心病", "不稳定型心绞痛", "PCI术后", "高血压3级", "2型糖尿病", "室颤"];

  // ===== 解析依据可点选修正（真机 PlanBasisCorrection / PlanBasisFieldEditors）=====
  // 依据页看到的就是「解析到的字段」：改字段 → 条目与依据句按新字段重算。
  // 全程点选：芯片选值，时刻与日期走步进器（分针步长 5）。

  /// 常见出院诊断（多选修正；不在表里的按原文补进芯片）
  const BASIS_DIAGNOSES = [
    "冠心病", "不稳定型心绞痛", "稳定型心绞痛", "急性心肌梗死", "陈旧性心肌梗死",
    "PCI术后", "冠脉搭桥术后", "高血压1级", "高血压2级", "高血压3级",
    "2型糖尿病", "心力衰竭", "心房颤动", "高脂血症", "心脏瓣膜病", "室颤",
  ];
  /// 常见心内科用药
  const BASIS_DRUGS = [
    "阿司匹林肠溶片", "硫酸氢氯吡格雷片", "替格瑞洛片",
    "阿托伐他汀钙片", "瑞舒伐他汀钙片", "美托洛尔缓释片",
    "比索洛尔片", "缬沙坦胶囊", "培哚普利叔丁胺片",
    "沙库巴曲缬沙坦钠片", "螺内酯片", "呋塞米片",
    "单硝酸异山梨酯缓释片", "地高辛片", "二甲双胍片",
    "达格列净片", "利伐沙班片", "华法林钠片",
  ];
  /// 服用场景 → 频次 + 时刻（与真机 PlanBasisPresets.scenes、MedItem.inferTiming 同表）
  const BASIS_SCENES = [
    { name: "空腹", freq: "每日 1 次", time: "07:30" },
    { name: "餐前", freq: "每日 1 次", time: "07:30" },
    { name: "早餐后", freq: "每日 1 次", time: "08:00" },
    { name: "午餐后", freq: "每日 1 次", time: "12:00" },
    { name: "晚餐后", freq: "每日 1 次", time: "18:30" },
    { name: "睡前", freq: "每晚 1 次", time: "21:00" },
  ];
  /// 测血压时段与默认时刻
  const BASIS_SLOTS = [
    { name: "起床", time: "06:30" },
    { name: "上午", time: "09:30" },
    { name: "午间", time: "12:30" },
    { name: "傍晚", time: "18:00" },
    { name: "晚上", time: "20:00" },
    { name: "睡前", time: "21:30" },
  ];
  const BASIS_REVIEWS = ["心内科复查", "心外科复查", "心脏康复门诊", "抽血化验", "心脏彩超复查", "心电图复查", "冠脉CTA复查"];
  const BASIS_AMOUNTS = [0.25, 0.5, 1, 2.5, 5, 10, 12.5, 20, 25, 40, 47.5, 50, 75, 80, 100, 150, 200, 300, 500];
  const BASIS_UNITS = ["mg", "g", "μg", "ml", "IU", "片", "粒", "滴"];

  /// 依据页可改的解析结果（活数据）：用药 / 复查 / 测血压 / 诊断标签。
  /// 真机两页共用同一份数组，这里同样——依据页改了，计划页那张卡跟着变。
  function liveMeds() {
    if (!S.meds) S.meds = MEDS.map((m) => ({ ...m, src: m.name }));
    return S.meds;
  }
  function liveAppts() {
    if (!S.appts) {
      S.appts = [
        { title: "心内科复查", source: "出院日期", category: "出院记录", sourceYMD: "2026-09-17", addDays: 7, time: "09:00" },
        { title: "心内科复查", source: "手术日期", category: "手术记录", sourceYMD: "2026-09-08", addMonths: 1, time: "09:00" },
      ];
    }
    return S.appts;
  }
  function liveBPs() {
    if (!S.bps) S.bps = parsedBloodPressureRows().map((r) => ({ title: r.name, time: r.t, src: r.name }));
    return S.bps;
  }
  function diseaseLabels() {
    if (!S.diseaseInfo) S.diseaseInfo = DISEASE_INFO.slice();
    return S.diseaseInfo;
  }
  /// 与真机 AbsoluteContraindication.list 同一份（年龄单独按岁数判断）
  const ABSOLUTE_CONTRA = [
    "心肌炎", "心包炎", "夹层动脉瘤", "肥厚型心肌病", "甲亢", "肺部感染",
    "Ⅱ–Ⅲ度房室传导阻滞", "心源性休克", "室壁瘤", "贫血", "糖尿病酮症酸中毒",
    "慢性肾衰竭Ⅲ期及以上", "肺动脉高压", "室颤", "室速", "频发室早", "慢阻肺",
    "下肢静脉血栓", "心衰Ⅲ级及以上", "CABG", "脑梗后遗症",
  ];
  const CONTRA_AGE_ITEM = "年龄＞70 岁";
  function contraindicationHits() {
    const blob = diseaseLabels().join("、").replace(/\s/g, "");
    const hits = ABSOLUTE_CONTRA.filter((item) => blob.indexOf(String(item).replace(/\s/g, "")) >= 0);
    if ((S.age ?? 58) > 70) hits.push(CONTRA_AGE_ITEM);
    return hits;
  }
  function contraPrompt(hits) {
    const diseases = hits.filter((h) => h !== CONTRA_AGE_ITEM);
    let lead = diseases.length ? `你有${diseases.join("、")}` : "";
    if (hits.indexOf(CONTRA_AGE_ITEM) >= 0) {
      lead = lead ? `${lead}，且年龄超过 70 岁` : "你的年龄超过 70 岁";
    }
    if (!lead) lead = "当前情况不适合运动";
    return `${lead}。这类情况不适合运动。`;
  }
  function beginWalk(taskId) {
    S.walkTaskId = taskId;
    S.walkStartedAt = demoNowHM();
    S.walking = true;
    S.paused = false;
    S.walkSheet = true;
    S.musicMenu = false;
    S.walkSaved = false;
    if (S.screen !== "walk") go("walk", "cover");
    go("walk-session", "cover");
  }
  function openContraOrBegin(taskId) {
    const hits = contraindicationHits();
    if (!hits.length) { beginWalk(taskId); return; }
    S.pendingWalk = { taskId };
    if (S.screen !== "walk") go("walk", "cover");
    openOverlay("confirm", {
      title: "是否继续运动？",
      body: contraPrompt(hits),
      cancel: "暂不运动",
      ok: "继续运动",
      action: "confirmWalkDespiteContra",
    });
  }
  /// 依据里的诊断原文：取第一枚含「高血压」的标签
  function htnLabel() {
    return (diseaseLabels() || []).find((l) => l.indexOf("高血压") >= 0) || "高血压";
  }
  function resetBasisEdits() {
    S.basisOpen = null;
    S.basisEdits = {};
    S.basisMaterial = {};
    S.basisDrafts = {};
    S.meds = null;
    S.appts = null;
    S.bps = null;
    S.diseaseInfo = null;
  }
  const ymdCn = (ymd) => {
    const d = parseYMD(ymd);
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  };
  /// 复查的应期：来源日期 + 7 天（出院）或 + N 月（术后），月推进按当月天数夹紧
  function apptFireDate(a) {
    const d = parseYMD(a.sourceYMD);
    if (a.addMonths) {
      const day = d.getDate();
      d.setDate(1);
      d.setMonth(d.getMonth() + a.addMonths);
      const last = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
      d.setDate(Math.min(day, last));
    }
    if (a.addDays) d.setDate(d.getDate() + a.addDays);
    return d;
  }
  /// 依据页改了字段：计划页那条草稿一起改（真机两页共用同一份数组）
  function syncDraft(srcTitle, patch) {
    (S.confirmDrafts || []).forEach((d) => {
      if (d.srcTitle === srcTitle) Object.assign(d, patch);
    });
  }

  // ----- 字段芯片与就地选项（真机 PlanBasisFieldRow / BasisFieldEditor）-----

  /// 一条依据只摆原文控件（真机 PlanBasisLine：字段名和「因此安排」不在卡上）
  function basisPara(groups, conclusion, kind) {
    return `<div class="basis-line">${basisPanel(groups)}</div>`;
  }
  /// 卡头（真机 PlanBasisSection.cardHeader）：图标井 + 标题 + 右侧「依据资料」胶囊；
  /// 条数不出角标（太繁杂），卡头收在白卡内，不再浮在卡外
  function basisSectionHead(kind, title, chipHTML) {
    const red = kind === "appointment";
    const icon = kind === "disease" ? I.doc : `<img src="${A.task[kind]}" alt="" />`;
    return `<div class="basis-head">
      <span class="basis-head-ico${red ? " red" : ""}">${icon}</span>
      <span class="basis-head-title${red ? " red" : ""}">${title}</span>
      ${chipHTML || ""}
    </div>`;
  }
  /// 卡头右侧「依据资料」胶囊：视觉高 30、热区 44，箭头跟着收起 / 铺开转（真机 materialChip）
  function basisMaterialChip(sec, open) {
    return `<button class="basis-material-chip${open ? " on" : ""}" data-act="basisMaterial" data-sec="${sec}" type="button" aria-label="${open ? "折叠" : "展开"}依据资料">
      <span class="basis-material-chip-in">${I.doc}<span>依据资料</span>${I.chevD}</span>
    </button>`;
  }
  function basisOpt(label, on, act, attrs) {
    return `<button class="basis-opt${on ? " on" : ""}" data-act="${act}" ${attrs} type="button">${label}</button>`;
  }
  /// 一行依据的字段面板：可选组标题 + 每个字段「字段名 + 控件」
  function basisPanel(groups) {
    return `<div class="basis-panel">${groups.map((g) => `
      ${g.title ? `<div class="basis-group-title">${g.title}</div>` : ""}
      ${g.fields.map((f) => `<div class="basis-field">${basisControl(f)}</div>`).join("")}
    `).join("")}</div>`;
  }
  const escAttr = (v) => String(v == null ? "" : v).replace(/"/g, "&quot;");

  /// 补全词表（真机 PlanBasisPredictor 的本地词表）
  const BASIS_POOLS = {
    medication: BASIS_DRUGS,
    review: BASIS_REVIEWS,
    hypertension: BASIS_DIAGNOSES.filter((d) => d.indexOf("高血压") >= 0),
    diagnoses: BASIS_DIAGNOSES,
  };

  /// 打字补全：现在按本地词表即时给（**接 AI 就换这里**，签名与调用方都不用动）
  function basisSuggestions(pool, input) {
    const list = BASIS_POOLS[pool] || [];
    const text = String(input || "").trim();
    const prefix = pool === "diagnoses" ? (text.split(/[、，,]/).pop() || "").trim() : text;
    if (!prefix) return list.slice(0, 6);
    const head = list.filter((o) => o.indexOf(prefix) === 0 && o !== prefix);
    const body = list.filter((o) => o.indexOf(prefix) !== 0 && o.indexOf(prefix) >= 0);
    return head.concat(body).filter((o) => o !== text).slice(0, 6);
  }

  /// 原文输入：直接打字改，打字时下方给补全候选（真机 BasisTextInput，无语音入口）
  function basisTextField(f) {
    // 显示未确认的草稿优先（真机 BasisFieldInput：draft ?? 原文）
    return `<div class="basis-text">
      <input class="basis-input" id="basis-input-${f.id}" data-pool="${f.pool}"
        value="${escAttr(basisDraftFor(f.id) ?? f.current)}" placeholder="${escAttr(f.placeholder)}" aria-label="${escAttr(f.label || f.placeholder)}" />
      <div class="basis-sugg" data-for="${f.id}"></div>
    </div>`;
  }

  /// 按字段类型出控件：原文打字 / 时刻步进 / 日期步进
  function basisControl(f) {
    if (f.kind === "text") return basisTextField(f);
    if (f.kind === "clock") {
      return `<div class="basis-step-row">
        ${basisStepCol("时", pad(f.h), f.id, "h")}<div class="basis-colon">:</div>${basisStepCol("分", pad(f.m), f.id, "m")}
      </div>`;
    }
    if (f.kind === "date") {
      // 日期一律走万年历（复用 AddEditTaskView 那套 datePick 弹层），不再摆步进器；
      // 显示未确认的草稿优先（真机 BasisFieldInput）
      const ymd = basisDraftFor(f.id) ?? f.ymd;
      return `<button class="basis-date" data-act="basisDate" data-id="${f.id}" type="button" aria-label="${escAttr(f.label || "日期")} ${ymdCn(ymd)}">
        ${I.cal}<span>${ymdCn(ymd)}</span>${I.chevD}
      </button>`;
    }
    return "";
  }

  // 输入走 **document 上的事件委托**（同本文件既有的 [data-go] / [data-act] 手法）：
  // 原型每次交互都整屏重绘 innerHTML，逐个 input 绑 oninput 会随重绘丢；委托一次挂上就够。
  // 打字只落草稿 + 更新候选行、**不整体重绘**（否则输入框当场丢焦点）；
  // 点这一块的「确认」才回写（真机：改动先落草稿，不再收起键盘即生效）。
  document.addEventListener("input", (event) => {
    const target = event.target instanceof Element ? event.target.closest(".basis-input") : null;
    if (!target) return;
    stashBasisDraft(target.id.replace("basis-input-", ""), target.value);
    if (target._basisTimer) clearTimeout(target._basisTimer);
    target._basisTimer = setTimeout(() => {
      const box = document.querySelector(`.basis-sugg[data-for="${target.id.replace("basis-input-", "")}"]`);
      if (!box) return;
      box.innerHTML = basisSuggestions(target.dataset.pool, target.value).map((s) =>
        `<button class="basis-sugg-chip" data-act="basisFill" data-input="${target.id}" data-v="${escAttr(s)}" type="button">${I.spark}${s}</button>`
      ).join("");
      bindClicks(box);
    }, 220);
  });
  // 收起键盘不再自动生效：改动都在草稿箱里，点这一块的「确认」才回写（真机同款）。
  // 回车只收键盘（真机 submitLabel(.done)）
  document.addEventListener("keydown", (event) => {
    const target = event.target instanceof Element ? event.target.closest(".basis-input") : null;
    if (target && event.key === "Enter") {
      event.preventDefault();
      target.blur();
    }
  });
  function basisStepCol(unitLabel, value, fieldId, unit) {
    return `<div class="basis-step-col">
      <div class="bu">${unitLabel}</div>
      <button class="bstep" data-act="basisStep" data-id="${fieldId}" data-unit="${unit}" data-dir="1" type="button">${I.chevU}</button>
      <div class="bv2">${value}</div>
      <button class="bstep" data-act="basisStep" data-id="${fieldId}" data-unit="${unit}" data-dir="-1" type="button">${I.chevD}</button>
    </div>`;
  }

  // ----- 三种段落各自的字段 -----

  function medBasisGroups(m, i) {
    const origin = [m.name, m.dose, m.freq, m.usage].filter(Boolean).join(" ");
    return [{ id: `med-${i}`, title: null, fields: [
      { id: `med-text-${i}`, kind: "text", label: "出院记录的用药", current: origin, placeholder: "药名 剂量 频次 用法", pool: "medication" },
    ] }];
  }
  function bpBasisGroups() {
    return [{ id: "bp", title: null, fields: [
      { id: "bp-diagnosis", kind: "text", label: "出院记录的出院诊断", current: htnLabel(), placeholder: "如：高血压3级", pool: "hypertension" },
    ] }];
  }
  function apptBasisGroups(a, i) {
    const d = parseYMD(a.sourceYMD);
    return [{ id: `appt-${i}`, title: null, fields: [
      { id: `appt-date-${i}`, kind: "date", label: a.source, ymd: a.sourceYMD, y: d.getFullYear(), mo: d.getMonth() + 1, d: d.getDate() },
      { id: `appt-title-${i}`, kind: "text", label: "复查项目", current: a.title, placeholder: "如：心内科复查", pool: "review" },
    ] }];
  }
  function diseaseBasisGroups() {
    const labels = diseaseLabels();
    return [{ id: "disease", title: null, fields: [
      { id: "disease", kind: "text", label: "出院诊断", current: labels.join("、"), placeholder: "诊断名称，用「、」分隔", pool: "diagnoses" },
    ] }];
  }

  // ----- 修正落点（真机 PlanBasisCorrection.apply）：改字段 → 条目与依据重算 -----

  /// 改一笔就记到这条依据行（入口打勾、底部「重新生成计划」据此点亮）；
  /// 面板**不收起**：一条依据里有几个字段，方便连着改
  function afterBasisEdit(lineId) {
    if (lineId) {
      if (!S.basisEdits) S.basisEdits = {};
      S.basisEdits[lineId] = true;
    }
    render();
  }
  /// 「med-scene-0」→「med-0」：把字段名折掉，落到那一条依据上
  function basisLineID(fieldId) {
    return String(fieldId).replace(/^(med|bp|appt)-[a-z]+-(\d+)$/, "$1-$2");
  }
  const BASIS_DOSE_UNITS = ["mg", "g", "μg", "ml", "mL", "IU", "片", "粒", "滴"];
  const BASIS_FREQ_PHRASES = ["每日 1 次", "每日 2 次", "每日 3 次", "每晚 1 次", "隔日 1 次", "每周 1 次", "每 12 小时 1 次", "每日一次", "每晚一次", "每日1次", "每晚1次"];
  const BASIS_USAGE_PHRASES = ["口服", "舌下含服", "舌下", "含服", "嚼服", "外用", "皮下注射", "皮下", "静脉注射", "静脉", "吸入", "喷雾", "滴眼"];
  const BASIS_SCENE_PHRASES = ["早餐后", "早餐", "午餐后", "午餐", "午间", "晚餐后", "晚餐", "睡前", "空腹", "餐前"];

  /// 与真机 MedicationTextParser 同口径：摘剂量（数字 + 单位）、频次、用法与场景。
  /// 场景词必须摘干净——它同时是推时刻的关键词，留着会被读进药名
  function parseMedicationText(raw) {
    let rest = String(raw || "").trim();
    let dose = "";
    const hit = rest.match(/(\d+(?:\.\d+)?)\s*(mg|g|μg|ml|mL|IU|片|粒|滴)/);
    if (hit) {
      dose = `${hit[1]} ${hit[2]}`;
      rest = rest.replace(hit[0], " ");
    }
    const takeOne = (list) => {
      for (const phrase of list.slice().sort((a, b) => b.length - a.length)) {
        const at = rest.indexOf(phrase);
        if (at >= 0) {
          rest = rest.slice(0, at) + " " + rest.slice(at + phrase.length);
          return phrase;
        }
      }
      return "";
    };
    const frequency = takeOne(BASIS_FREQ_PHRASES);
    const found = [];
    [BASIS_USAGE_PHRASES, BASIS_SCENE_PHRASES].forEach((group) => {
      group.slice().sort((a, b) => b.length - a.length).forEach((phrase) => {
        while (rest.indexOf(phrase) >= 0) {
          if (found.indexOf(phrase) < 0) found.push(phrase);
          rest = rest.replace(phrase, " ");
        }
      });
    });
    const name = rest.replace(/[，,。;；、]/g, " ").trim().replace(/\s+/g, " ");
    return { name, dose, frequency, usage: found.join(" ") };
  }
  /// 与真机 MedItem.inferTiming 同规则：频次 / 用法里的关键词决定时刻与场景
  function basisSceneFromKeywords(text) {
    const t = String(text || "").toLowerCase();
    if (["睡前", "qn", "每晚"].some((k) => t.indexOf(k) >= 0)) return { meal: "睡前", time: "21:00" };
    if (["午餐", "午间"].some((k) => t.indexOf(k) >= 0)) return { meal: "午餐后", time: "12:00" };
    if (t.indexOf("晚餐") >= 0) return { meal: "晚餐后", time: "18:30" };
    if (["空腹", "餐前"].some((k) => t.indexOf(k) >= 0)) return { meal: "空腹", time: "07:30" };
    return { meal: "早餐后", time: "08:00" };
  }
  /// 测血压那一行改的是高血压这条诊断，其余诊断不动
  function applyHypertensionLabel(text) {
    const labels = diseaseLabels().filter((l) => l.indexOf("高血压") < 0);
    const trimmed = String(text || "").trim();
    if (trimmed) labels.push(trimmed);
    applyBasisDiagnoses(labels);
  }
  function applyBasisText(fieldId, value) {
    const text = String(value || "").trim();
    if (!text) return;
    if (fieldId === "bp-diagnosis") { applyHypertensionLabel(text); return; }
    if (fieldId === "disease") {
      applyBasisDiagnoses(text.split(/[、，,／/;；\s]+/).map((s) => s.trim()).filter(Boolean));
      return;
    }
    const med = fieldId.match(/^med-text-(\d+)$/);
    if (med) {
      const item = liveMeds()[+med[1]];
      if (!item) return;
      const parsed = parseMedicationText(text);
      const scene = basisSceneFromKeywords(`${parsed.frequency} ${parsed.usage}`);
      if (parsed.name) item.name = parsed.name;
      item.dose = parsed.dose || "—";
      item.freq = parsed.frequency || "每日 1 次";
      item.usage = parsed.usage || item.usage;
      item.scene = scene.meal;
      item.time = scene.time;
      syncDraft(item.src, { title: item.name, time: item.time, note: confirmMedNote(item.name) });
      afterBasisEdit(`med-${med[1]}`);
      return;
    }
    const bp = fieldId.match(/^bp-slot-(\d+)$/);
    if (bp) {
      const item = liveBPs()[+bp[1]];
      if (!item) return;
      const hit = BASIS_SLOTS.find((s) => text.indexOf(s.name) === 0);
      item.title = hit ? `${hit.name}测血压` : (text.indexOf("测血压") >= 0 ? text : `${text}测血压`);
      if (hit) item.time = hit.time;
      syncDraft(item.src, { title: item.title, time: item.time, note: confirmMonitorNote(item.title) });
      afterBasisEdit(`bp-${bp[1]}`);
      return;
    }
    const ap = fieldId.match(/^appt-title-(\d+)$/);
    if (ap) {
      const item = liveAppts()[+ap[1]];
      if (!item) return;
      item.title = text;
      afterBasisEdit(`appt-${ap[1]}`);
    }
  }
  function applyBasisStep(id, unit, dir) {
    const date = id.match(/^appt-date-(\d+)$/);
    if (!date) return;
    const item = liveAppts()[+date[1]];
    if (!item) return;
    const d = parseYMD(item.sourceYMD);
    if (unit === "y") {
      d.setFullYear(d.getFullYear() + dir);
    } else if (unit === "mo") {
      const day = d.getDate();
      d.setDate(1);
      d.setMonth(d.getMonth() + dir);
      const last = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
      d.setDate(Math.min(day, last));
    } else {
      const last = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
      d.setDate(Math.min(last, Math.max(1, d.getDate() + dir)));
    }
    item.sourceYMD = toYMD(d);
    afterBasisEdit(basisLineID(id));
  }
  function applyBasisDiagnoses(labels) {
    S.diseaseInfo = labels.slice();
    if (labels.some((l) => l.indexOf("高血压") >= 0)) {
      if (!liveBPs().length) {
        // 补上高血压：按首次创建同一条规则补早晚两槽
        BP_FROM_PARSE.forEach((r) => {
          liveBPs().push({ title: r.name, time: r.t, src: r.name });
          if (S.confirmDrafts) {
            S.confirmDrafts.push({ title: r.name, time: r.t, cat: "monitoring", srcTitle: r.name, note: confirmMonitorNote(r.name), cycle: true, muteFirst: false });
          }
        });
      } else {
        liveBPs().forEach((b) => syncDraft(b.src, { note: confirmMonitorNote(b.title) }));
      }
    } else {
      // 去掉高血压：解析补的测血压一并撤
      const srcs = liveBPs().map((b) => b.src);
      S.bps = [];
      if (S.confirmDrafts) {
        S.confirmDrafts = S.confirmDrafts.filter((d) => !(d.cat === "monitoring" && srcs.indexOf(d.srcTitle) >= 0));
      }
    }
    afterBasisEdit("disease");
  }

  // ----- 草稿箱 + 「依据资料」按钮（真机 PlanBasisSection / PlanBasisDrafts）-----

  /// 依据页的草稿值（未确认的改动；真机 drafts[fieldId]）
  function basisDraftFor(fieldId) {
    return S.basisDrafts ? S.basisDrafts[fieldId] : undefined;
  }
  /// fieldId → 所在的那一块
  function basisSecOf(fieldId) {
    if (fieldId === "disease") return "disease";
    if (/^med-/.test(fieldId)) return "medication";
    if (/^bp-/.test(fieldId)) return "monitoring";
    if (/^appt-/.test(fieldId)) return "appointment";
    return "";
  }
  /// 这一块的字段（与渲染同一批取值函数；真机从 narrative 里扫）
  function basisSectionFields(sec) {
    if (sec === "disease") return diseaseBasisGroups().flatMap((g) => g.fields);
    if (sec === "medication") return liveMeds().flatMap((m, i) => medBasisGroups(m, i).flatMap((g) => g.fields));
    if (sec === "monitoring") return bpBasisGroups().flatMap((g) => g.fields);
    if (sec === "appointment") return liveAppts().flatMap((a, i) => apptBasisGroups(a, i).flatMap((g) => g.fields));
    return [];
  }
  /// 一块里真正改过的字段（真机 PlanBasisDrafts.pending：文本去空白比、日期按天比）
  function basisPendingFields(sec) {
    return basisSectionFields(sec).filter((f) => {
      const v = basisDraftFor(f.id);
      if (v === undefined) return false;
      if (f.kind === "date") return String(v) !== String(f.ymd || "");
      return String(v).trim() !== String(f.current || "").trim();
    }).map((f) => f.id);
  }
  /// 一块改完的两枚：确认回写这一块、取消整块丢掉（真机 PlanBasisSection.confirmRow）
  function basisConfirmRow(sec, n) {
    return `<div class="basis-confirm-row">
      <button class="basis-confirm-btn ghost" data-act="basisCancel" data-sec="${sec}" type="button">取消</button>
      <button class="basis-confirm-btn" data-act="basisConfirm" data-sec="${sec}" type="button">确认</button>
    </div>`;
  }
  /// 块尾一行：有没确认的改动先给「取消 / 确认」；确认过、还没回去看的换成「重新生成计划」
  function basisFooter(sec) {
    const n = basisPendingFields(sec).length;
    if (n) return basisConfirmRow(sec, n);
    const done = basisConfirmedCount(sec);
    return done ? basisRegenRow(sec, done) : "";
  }
  /// 依据行 id → 所在的那一块（disease / med-0 / bp-… / appt-1）
  function basisSecOfLine(lineId) {
    if (lineId === "disease") return "disease";
    if (/^med-/.test(lineId)) return "medication";
    if (/^bp-/.test(lineId)) return "monitoring";
    if (/^appt-/.test(lineId)) return "appointment";
    return "";
  }
  /// 这一块已确认过的依据条数（块尾「重新生成计划」据此出现）
  function basisConfirmedCount(sec) {
    const edits = S.basisEdits || {};
    return Object.keys(edits).filter((id) => basisSecOfLine(id) === sec).length;
  }
  /// 块尾「重新生成计划」：确认过才出现，带这一块的修正处数（真机 PlanBasisSection.regenerateRow）
  function basisRegenRow(sec, n) {
    return `<div class="basis-confirm-row">
      <button class="basis-regen-chip" data-act="basisRegenSec" data-sec="${sec}" type="button">${I.undo}<span>重新生成计划</span><em>${n}</em></button>
    </div>`;
  }
  /// 把这一块还压着的草稿逐条回写（不重绘；重绘交给调用方）
  function basisApplyDrafts(sec) {
    const drafts = S.basisDrafts || {};
    basisPendingFields(sec).forEach((id) => {
      applyBasisDraft(id, drafts[id]);
      delete S.basisDrafts[id];
    });
  }
  /// 一条草稿落库：日期写来源日期、其余按原文重新解析（真机 PlanBasisCorrection.apply）
  function applyBasisDraft(fieldId, value) {
    const hit = String(fieldId).match(/^appt-date-(\d+)$/);
    if (hit) {
      const a = liveAppts()[+hit[1]];
      if (a && value) {
        a.sourceYMD = value;
        afterBasisEdit(`appt-${hit[1]}`);
      }
      return;
    }
    applyBasisText(fieldId, value);
  }
  /// 打字只落草稿、不整体重绘（否则输入框当场丢焦点）：只补这一块的确认行
  function stashBasisDraft(fieldId, value) {
    if (!S.basisDrafts) S.basisDrafts = {};
    S.basisDrafts[fieldId] = value;
    paintBasisConfirm(basisSecOf(fieldId));
  }
  function paintBasisConfirm(sec) {
    const box = document.querySelector(`.basis-confirm[data-sec="${sec}"]`);
    if (!box) return;
    box.innerHTML = basisFooter(sec);
    bindClicks(box);
  }
  function basisConfirmSec(sec) {
    if (!basisPendingFields(sec).length) return;
    basisApplyDrafts(sec);
    render();
  }
  function basisCancelSec(sec) {
    basisPendingFields(sec).forEach((id) => { delete S.basisDrafts[id]; });
    render();
  }
  /// 一块：卡头收在白卡内（图标井 + 标题 + 数量 + 右侧「依据资料」）+ 原文 + 卡底确认
  function basisSec(sec, title, paraHTML, photosHTML) {
    const open = !!(S.basisMaterial && S.basisMaterial[sec]);
    const chip = photosHTML ? basisMaterialChip(sec, open) : "";
    const materials = open && photosHTML ? `<div class="basis-materials">${photosHTML}</div>` : "";
    return `<div class="basis-sec">
      <div class="basis-module">
        ${basisSectionHead(sec, title, chip)}
        ${materials}
        ${paraHTML}
        <div class="basis-confirm" data-sec="${sec}">${basisFooter(sec)}</div>
      </div>
    </div>`;
  }

  function confirmBasisParagraph() {
    // 每块各挂自己的来源照片（真机 PlanBasisSection.displayedSections）：疾病信息 / 用药 / 测血压挂
    // 出院记录、复查挂出院记录与手术记录；同一份出院记录在几块里就各有几枚「依据资料」按钮（默认收起，不重复）
    const hint = "";
    const diseaseHTML = basisSec(
      "disease", "疾病信息",
      basisPara(diseaseBasisGroups(), "", "disease"),
      basisOriginPhotos(["dischargeRecord"])
    );
    const meds = liveMeds();
    const medHTML = meds.length
      ? basisSec(
          "medication", "用药计划",
          meds.map((m, i) => basisPara(medBasisGroups(m, i), `因此安排在 ${m.time} ${m.scene}服用。`, "medication")).join(""),
          basisOriginPhotos(["dischargeRecord"])
        )
      : "";
    const bps = liveBPs();
    const monHTML = bps.length
      ? basisSec(
          "monitoring", "测血压计划",
          basisPara(bpBasisGroups(), `因此安排每天 ${bps.map((b) => b.time).sort().join(" 和 ")} 各测一次血压。`, "monitoring"),
          basisOriginPhotos(["dischargeRecord"])
        )
      : "";
    const appts = liveAppts();
    const apptItems = confirmApptItems();
    const apptHTML = appts.length
      ? basisSec(
          "appointment", "复查计划",
          apptItems.map((it, i) => basisPara(apptBasisGroups(appts[i], i), it.time ? `因此安排${it.time} ${it.title}。` : "", "appointment")).join(""),
          basisOriginPhotos(["dischargeRecord", "surgeryRecord"])
        )
      : "";
    return hint + diseaseHTML + medHTML + monHTML + apptHTML;
  }

  /// 一块的来源资料缩略图（铺在「依据资料」按钮展开后，每块各挂自己的来源）；没拍过该类型就不占位
  function basisOriginPhotos(cats) {
    const groups = (S.docGroups || []).filter((g) => cats.includes(g.cat) && g.pages > 0);
    if (!groups.length) return "";
    return groups.map((g) => {
      const name = groupDisplayName(g);
      const thumbs = Array.from({ length: g.pages }, (_, i) =>
        `<div class="basis-thumb" aria-label="${name} 第${i + 1}页">第${i + 1}页</div>`
      ).join("");
      return `<div class="basis-origin">${name}</div><div class="basis-photos">${thumbs}</div>`;
    }).join("");
  }

  const QUESTIONS = (() => {
    const g = [
      ["A-03", "您目前是否吸烟？", ["不吸烟", "已戒烟", "目前吸烟"]],
      ["A-04", "您目前是否喝酒？", ["是", "从不饮酒", "已戒酒"]],
      ["A-05", "您目前的饮食情况符合以下哪项心脏健康饮食要求？（可多选）", [
        "每天都吃蔬菜和水果，总量在 1 斤左右",
        "每周至少吃 2 次鱼，总量超过 2 两/每周",
        "每周至少吃 3 次全谷类食物（玉米、燕麦、荞麦、小米、藜麦、大麦、糙米、黑米等）",
        "吃的淡，食盐摄入量约小于 4g/每天（约 1500mg 钠）",
        "每周喝的含糖饮料不超过 1000ml（约两瓶可乐）",
        "以上都不符合",
      ], "multi", ["以上都不符合"]],
      ["A-06", "您目前的身体活动情况符合以下哪一种？", [
        "做过高强度体力活动或运动：如举重、挖掘、拖地板、扫雪、砍柴、有氧运动、跳绳、跑步、爬山或者快速踏车等",
        "做过中度体力活动或运动：如搬运轻物、做中低强度家务、以正常速度骑车、持续 10 分钟以上的常速走路或快走、慢速爬楼梯、跳广场舞、打太极八段锦等",
        "以上两项都没做过，日常很少活动，坐着或者躺着的时间比较多",
      ]],
      ["A-07", "行动能力？", ["我四处走动没有困难", "我四处走动有一点困难", "我四处走动有中度的困难", "我四处走动有严重的困难", "我无法四处走动"]],
      ["A-08", "自我照顾？", ["我自己洗澡或穿衣没有困难", "我自己洗澡或穿衣有一点困难", "我自己洗澡或穿衣有中度的困难", "我自己洗澡或穿衣有严重的困难", "我无法自己洗澡或穿衣"]],
      ["A-09", "日常活动（如工作、学习、家务、家庭或休闲活动）？", ["我进行日常活动没有困难", "我进行日常活动有一点困难", "我进行日常活动有中度的困难", "我进行日常活动有严重的困难", "我无法进行日常活动"]],
      ["A-10", "疼痛或不舒服？", ["我没有疼痛或不舒服", "我有一点疼痛或不舒服", "我有中度的疼痛或不舒服", "我有严重的疼痛或不舒服", "我有非常严重的疼痛或不舒服"]],
      ["A-11", "焦虑或沮丧？", ["我没有焦虑或沮丧", "我有一点焦虑或沮丧", "我有中度的焦虑或沮丧", "我有严重的焦虑或沮丧", "我有非常严重的焦虑或沮丧"]],
      ["A-12", "您今天的健康状况？", [], "wheel", null, "100 代表您想象中最好的健康状况，0 代表您想象中最差的健康状况"],
      ["A-13", "您的医疗支出方式？", ["城镇职工基本医疗保险", "城镇居民基本医疗保险", "离休干部医疗保险", "新农合医疗保险", "商业保险", "自费"]],
      ["A-14", "您的文化水平？", ["高中（中专）以下", "高中（中专）", "大学（大专）", "研究生及以上"]],
      ["A-15", "您的就业情况？", ["正在工作", "没有工作", "离退休"]],
      ["A-16", "您的家庭月收入水平（不包括子女）？", ["10000 以上", "5000–10000 之间", "3000–5000 之间", "小于 3000", "没收入"]],
      ["A-17", "您的婚姻状况？", ["未婚", "已婚", "离异", "丧偶"]],
    ];
    const items = g.map(([id, title, opts, kind, exc, group]) => ({
      id, section: "一般情况", title, options: opts, kind: kind || "single", exclusive: exc || [], group,
    }));
    items.push({ id: "B-01", section: "生活质量", title: "总体来讲，您的健康状况是：", options: ["非常好", "很好", "好", "一般", "差"], kind: "single" });
    items.push({ id: "B-02", section: "生活质量", title: "跟 1 年前相比，您觉得自己的健康状况是：", options: ["比 1 年前好多了", "比 1 年前好一些", "跟 1 年前差不多", "比 1 年前差一些", "比 1 年前差多了"], kind: "single" });
    const actG = "以下这些问题都和日常活动有关。请您想一想，您的健康状况是否限制了这些活动？如果有限制，程度如何？";
    [
      "重体力活动。如跑步、举重、参加剧烈运动等",
      "适度的活动。如移动一张桌子、扫地、打太极、做简单体操等",
      "手提日用品。如买菜、购物等",
      "上几层楼梯",
      "上一层楼梯",
      "弯腰、屈膝、下蹲",
      "步行 1500 米以上的路程",
      "步行 1000 米以上的路程",
      "步行 100 米以上的路程",
      "自己洗澡、穿衣",
    ].forEach((t, i) => items.push({ id: `B-03-${String(i + 1).padStart(2, "0")}`, section: "生活质量", group: actG, title: t, options: ["限制很大", "有些限制", "毫无限制"], kind: "single" }));
    const phyG = "在过去 1 个月里，您的工作和日常活动有无因为身体健康的原因而出现以下这些问题？";
    ["减少了工作或其他活动时间", "本来想要做的事情只能完成一部分", "想要干的工作或活动种类受到限制", "完成工作或其他活动困难增多（比如需要额外的努力）"]
      .forEach((t, i) => items.push({ id: `B-04-${String(i + 1).padStart(2, "0")}`, section: "生活质量", group: phyG, title: t, options: ["是", "不是"], kind: "single" }));
    const emoG = "在过去 1 个月里，您的工作和日常活动有无因为情绪的原因（如压抑或忧虑）而出现以下这些问题？";
    ["减少了工作或其他活动时间", "本来想要做的事情只能完成一部分", "干事情不如平时仔细"]
      .forEach((t, i) => items.push({ id: `B-05-${String(i + 1).padStart(2, "0")}`, section: "生活质量", group: emoG, title: t, options: ["是", "不是"], kind: "single" }));
    items.push({ id: "B-06", section: "生活质量", title: "在过去 1 个月里，您的健康或情绪不好在多大程度上影响了您与家人、朋友、邻居或集体的正常社会交往？", options: ["完全没有影响", "有一点影响", "中等影响", "影响很大", "影响非常大"], kind: "single" });
    items.push({ id: "B-07", section: "生活质量", title: "在过去 1 个月里，您有身体疼痛吗？", options: ["完全没有疼痛", "有很轻微疼痛", "有轻微疼痛", "中等疼痛", "严重疼痛", "很严重疼痛"], kind: "single" });
    items.push({ id: "B-08", section: "生活质量", title: "在过去 1 个月里，您的身体疼痛影响了您的工作和家务吗？", options: ["完全没有影响", "有一点影响", "中等影响", "影响很大", "影响非常大"], kind: "single" });
    const feelG = "以下这些问题是关于过去 1 个月里您自己的感觉。对每一条问题所说的事情，您的情况是什么样的？";
    const feels = ["所有的时间", "大部分时间", "比较多时间", "一部分时间", "小部分时间", "没有这种感觉"];
    ["您觉得生活充实", "您是一个敏感的人", "您的情绪非常不好，什么事都不能使您高兴起来", "您的心理很平静", "您做事精力充沛", "您的情绪低落", "您觉得筋疲力尽", "您是个快乐的人", "您感觉厌烦", "不健康影响了您的社会活动（如走亲访友）"]
      .forEach((t, i) => items.push({ id: `B-09-${String(i + 1).padStart(2, "0")}`, section: "生活质量", group: feelG, title: t, options: feels, kind: "single" }));
    const truthG = "请看下列每一条问题，哪一种答案最符合您的情况？";
    ["我好像比别人容易生病", "我跟周围人一样健康", "我认为我的健康状况在变坏", "我的健康状况非常好"]
      .forEach((t, i) => items.push({ id: `B-10-${String(i + 1).padStart(2, "0")}`, section: "生活质量", group: truthG, title: t, options: ["绝对正确", "大部分正确", "不能肯定", "大部分错误", "绝对错误"], kind: "single" }));
    return items;
  })();

  const HOW_LAB = { root: "根页", push: "压栈", cover: "全屏", replace: "替换", sheet: "贴底" };
  const MODULE_COVERS = new Set(["schedule", "vitals", "report", "walk", "consult", "stamps", "profile"]);
  const EDGE = {
    "onboard-login>onboard-profile": "push",
    "home>profile": "cover",
    "home>schedule": "cover",
    "home>vitals": "cover",
    "home>report": "cover",
    "home>walk": "cover",
    "home>consult": "cover",
    "home>stamps": "cover",
    "home>first-rest": "cover",
    "home>task-add": "cover",
    "home>task-view": "cover",
    "schedule>select-type": "cover",
    "schedule>task-view": "cover",
    "select-type>ocr-capture": "replace",
    "select-type>exercise-risk": "replace",
    "select-type>task-add": "replace",
    "select-type>category-manage": "push",
    "first-rest>ocr-capture": "replace",
    "ocr-capture>ocr-group": "push",
    "ocr-capture>ocr-detail": "push",
    "exercise-risk>body-test": "replace",
    "body-test>borg": "push",
    "borg>confirm-exercise": "push",
    "borg>risk-result": "push",
    "vitals>vitals-detail": "push",
    "vitals>consult": "cover",
    "report>analysis": "push",
    "report>followup": "push",
    "report>report-sub": "cover",
    "report>consult": "cover",
    "followup>questionnaire": "cover",
    "analysis>followup": "push",
    "walk>walk-session": "cover",
    "walk>walk-records": "cover",
    "consult>consult-history": "cover",
    "profile>health-record": "cover",
    "profile>family": "cover",
    "profile>notify": "cover",
    "profile>hardware": "cover",
    "hardware>hardware-scan": "cover",
    "health-record>patient-edit": "cover",
    "notify>family": "cover",
    "confirm-plan>task-add": "cover",
    "confirm-exercise>task-add": "cover",
    "task-view>task-edit": "replace",
    "task-edit>task-view": "replace",
    "report-sub>ocr-capture": "cover",
    "report-sub>ocr-detail": "cover",
    "health-record>ocr-capture": "cover",
    "analysis>ocr-capture": "cover",
  };

  const IA = [
    { g: "根页 · Root", items: [
      { id: "onboard-login", t: "欢迎使用哈宝", code: "OnboardingFlowView", how: "root" },
      { id: "home", t: "李建国的一天", code: "TodayView", how: "root" },
    ]},
    { g: "栈内 Push · 首次进入", items: [
      { id: "onboard-profile", t: "完善你的信息", code: "OnboardingFlowView", how: "push" },
    ]},
    { g: "全屏 Cover · 首页打开", items: [
      { id: "schedule", t: "健康计划", code: "RehabPanoramaView", how: "cover" },
      { id: "vitals", t: "血压监测", code: "HealthMonitorModuleView", how: "cover" },
      { id: "report", t: "身体报告", code: "FollowUpModuleView", how: "cover" },
      { id: "walk", t: "散散步，散散心", code: "WalkView", how: "cover" },
      { id: "consult", t: "哈宝医生", code: "SmartConsultChatView", how: "cover" },
      { id: "stamps", t: "今日集章进度", code: "TodayStampShareView", how: "cover" },
      { id: "profile", t: "个人中心", code: "ServiceView", how: "cover" },
      { id: "vip", t: "VIP 会员", code: "VIPView", how: "cover" },
      { id: "first-rest", t: "基础作息", code: "CreateScheduleFlowView", how: "cover" },
      { id: "task-add", t: "添加早晨计划", code: "AddEditTaskView", how: "cover" },
      { id: "task-view", t: "查看计划", code: "AddEditTaskView", how: "cover" },
    ]},
    { g: "全屏 Cover · 模块内", items: [
      { id: "select-type", t: "选择类型", code: "CreateScheduleFlowView", how: "cover" },
      { id: "report-sub", t: "基础报告", code: "BodyReportSubReportView", how: "cover" },
      { id: "questionnaire", t: "随访问卷", code: "FollowUpQuestionnaireFlowView", how: "cover" },
      { id: "q-progress", t: "答题进度", code: "FollowUpQuestionMatrixView", how: "cover" },
      { id: "walk-session", t: "户外散步", code: "OutdoorWalkSessionView", how: "cover" },
      { id: "walk-records", t: "散步记录", code: "WalkRecordsSheet", how: "cover" },
      { id: "consult-history", t: "历史记录", code: "ConsultHistoryView", how: "cover" },
      { id: "health-record", t: "健康档案", code: "HealthRecordView", how: "cover" },
      { id: "patient-edit", t: "患者信息", code: "PatientProfileEditView", how: "cover" },
      { id: "family", t: "家属管理", code: "FamilyManageView", how: "cover" },
      { id: "notify", t: "打卡通知", code: "CheckInNotificationView", how: "cover" },
      { id: "hardware", t: "硬件管理", code: "HardwareManageView", how: "cover" },
      { id: "hardware-scan", t: "扫码绑定", code: "HardwareScanView", how: "cover" },
      { id: "activity", t: "操作记录", code: "ActivityLogView", how: "cover" },
      { id: "privacy", t: "隐私协议", code: "LegalAgreementDetailSheet", how: "cover" },
      { id: "service-terms", t: "服务协议", code: "LegalAgreementDetailSheet", how: "cover" },
    ]},
    { g: "同 Cover 替换", items: [
      { id: "ocr-capture", t: "上传资料", code: "IntakeCaptureView", how: "replace" },
      { id: "exercise-risk", t: "运动前风险提示", code: "BodyTestRunView", how: "replace" },
      { id: "body-test", t: "散步体测", code: "BodyTestRunView", how: "replace" },
      { id: "body-test-sit", t: "坐立体测", code: "BodyTestRunView", how: "replace" },
      { id: "task-edit", t: "更新计划", code: "AddEditTaskView", how: "replace" },
    ]},
    { g: "栈内 Push · 创建与报告", items: [
      { id: "ocr-group", t: "当前组资料", code: "IntakeCaptureView", how: "push" },
      { id: "ocr-detail", t: "资料详情", code: "IntakeCaptureView", how: "push" },
      { id: "confirm-plan", t: "确认计划", code: "InfoWithScreeningHost", how: "push" },
      { id: "borg", t: "感受问卷", code: "BorgQuestionnaireView", how: "push" },
      { id: "confirm-exercise", t: "确认运动计划", code: "ExerciseScheduleConfirmView", how: "push" },
      { id: "risk-result", t: "评级结果", code: "IntakeResultView", how: "push" },
      { id: "vitals-detail", t: "指标明细", code: "VitalsMeasurementDetailView", how: "push" },
      { id: "category-manage", t: "管理类别", code: "CategoryManageView", how: "push" },
      { id: "followup", t: "问卷随访", code: "ReviewFollowUpPage", how: "push" },
      { id: "analysis", t: "明细分析", code: "FollowUpAnalysisView", how: "push" },
    ]},
  ];

  const SPEC = {
    "onboard-login": { code: "OnboardingFlowView + FirstLaunchPrivacyConsentPopup", note: "首次进入 App（iOS & Android 通用合规）先弹出居中《用户隐私保护提示》弹窗（列明相机/相册、位置/运动、麦克风/语音、蓝牙设备四项按需动态权限，点「不同意」进入二次温情挽留态，点「同意并继续」落盘记住并自动勾选登录页底部协议框）。短信登录 Demo 不校验，11 位手机 + 6 位验证码后「登录」可点；若手动取消勾选底部《服务协议》和《隐私协议》直接点「登录」，则弹出居中「同意并登录」一键确认框。初登默认免费用户，新建档固定两步（短信登录 → 完善你的信息）；若输入已绑定的家属手机号登录，则后端自动识别家属身份并直接进入患者首页。" },
    "onboard-profile": { code: "PatientProfileFormFields", note: "姓名必填；「进入哈宝」始终可点，空姓名顶部 toast「请填写姓名」。步骤点固定为 2/2。" },
    privacy: { code: "LegalAgreementDetailSheet(.privacy)", note: "《哈宝隐私保护政策》详情页（iOS / Android 通用合规口径）：涵盖收集与使用范围、系统权限用时方申请原则（相机/定位/麦克风/蓝牙/通知）、全程加密与家属共享规则、查阅/撤回授权/永久注销账号权利。首次进入弹窗、登录页协议行与个人中心列表共用。" },
    "service-terms": { code: "LegalAgreementDetailSheet(.service)", note: "《哈宝用户服务协议》详情页：涵盖院外心肺康复管理服务范围、非急诊医疗安全免责声明（剧烈胸痛或危急血压请立即拨打 120）、账号与家庭守护规范、VIP 会员随患者档案生效与退订保留规则。首次进入弹窗、登录页协议行与个人中心列表共用。" },
    home: { code: "TodayView + HomeClockSection", note: "唯一一级页。左栏跟手变焦 196–206，焦点卡带转盘；拨转 0.68°/pt 最短弧吸附。每张计划卡展示标题、提醒时间（或已完成）及「开始日期 – 结束日期」起止区间。散步打卡后居中舞台。复查打卡弹三选一：上传资料 / 直接打卡 / 暂不打卡。左栏顶虚框直开当天该时段添加页：默认测血压，服药 / 运动 / 复查置灰禁用。V0.0 / V0.1 都是这套侧边转盘首页；底坞中圆哈宝医生始终常亮可点击进入问诊页（非 VIP 发送消息后在聊天流内弹出 VIP 购买提示对话卡）。打卡不再在卡片上盖家属章；谁打的记在 V0.1 个人中心「操作记录」，V0.0 没有这一页。" },
    schedule: { code: "RehabPanoramaView", note: "选中日驱动整页：周图标题写该周起止区间（周日起始，翻周才变、点选周内某天不动），列表与「未完成 / 已完成」计数随子计划过滤，历史日提示条日期动态、过去日号略淡。计划卡上不再盖家属章。周/月图左右滑翻页。列表操作卡：勾选 + 底栏查看/删除；有补充备注时收进卡内，用药 / 复查与其它类型同一套脚注（空不占行）。副行展示时刻与单日/循环/类别胶囊，下方展示「开始日期 – 结束日期」起止区间；循环两钮「仅删本次 / 长期删除」，单日一钮删除。今日之前、以及该日已打卡，不展示删除，操作条只留「查看」。点查看先进查看计划，右上更新才进编辑。切「已完成」整页绿白。" },
    vitals: { code: "HealthMonitorModuleView", note: "只按周翻页（不可到未来）。底栏「进入哈宝医生」始终可点击进入问诊页（非 VIP 发送消息后弹出 VIP 购买提示对话卡）。" },
    report: { code: "FollowUpModuleView", note: "综合结论 + 三等分入口 + 底栏「进入哈宝医生」始终可点击进入问诊页（非 VIP 发送消息后弹出 VIP 购买提示对话卡）。" },
    "report-sub": { code: "BodyReportSubReportView", note: "V10.61：顶栏两枚 Tab「AI 解读 / 资料合集」，默认落 AI 解读；资料合集只读。底栏「新增报告资料」不论有无存量都直接进拍摄页（不再先落资料详情）。拍完提交：基础按类别追加、复查新开一次。复诊打卡形态在主钮下多一颗「返回首页」。" },
    walk: { code: "WalkView", note: "大标题 + 44 回首页（dismiss cover，不压栈）。地图主卡底浮层：60 圆钮记录/分享 + 60 主胶囊。三态：开始运动 / 返回运动 / 保存并打卡。点「开始运动」、以及首页「进入运动，开始散步」，都先按出院诊断比对绝对禁忌症；命中弹「是否继续运动？」，写明疾病（演示病历含室颤），「暂不运动」留在地图，「继续运动」才开会话。返回运动不再问。保存归属：计划入口完成原任务，自由入口按开始时刻新建「自主散步」，不猜测也不占用存量计划。" },
    "walk-session": { code: "OutdoorWalkSessionView", note: "全屏地图 + 可提拉毛玻璃 sheet。展开：音源菜单+AI+封面曲名+三键播放；读数 38+单位在上；圆钮返回/暂停/120。暂停：已暂停横排 + 长按条 + 继续/结束/120。返回只收会话，不新开散步页。" },
    "walk-records": { code: "WalkRecordsSheet", note: "按天双列瀑布流。卡顶距离+步数/时段，路径区宽高比 0.88，底部分享/删除胶囊。分享出路径海报（图钉胶囊 + 完整日期 + 白卡路径 + 距离/时长/步数），删除先确认；右上「筛选」开贴底月历圈选起止日，列表顶出范围胶囊可一键清除。" },
    stamps: { code: "TodayStampShareView", note: "标题旁 36 进度环 + 右 44 日历。DayPeriod 6 段。底栏返回 + 一键分享。V0.1 + VIP 且采纳过方案时，标题下方多一张「方案章卡」：7 个日格（🌸 满日 / ◐ 部分 / ○ 空或未到 / 休 = 当天没排方案计划，算满日；今天蓝描边，点日格换日）、右上「本期已集 X/Y 章」、鼓励语（再集满 N 天拿金章 / 银章，只奖不罚）与「本期计划 ›」展开清单（调整 / 新增 / 保留 + 医嘱标）。其它状态：待采纳「📮 去采纳」、本期结束待交反馈（七格定格 + 期章 + 蓝色「交反馈」开期末反馈弹窗）、已交反馈下一期待采纳（「下一期方案已送达 去看看 ›」）。章卡下一行「我的期章」横排期章（金 ≥6 满日 / 银 4–5 / 铜 ≤3 且打过卡），点开看该期小结。海报日期下加「第 N 期康复方案 · 第 D 天 · 满日 X/7」（已结束带期章）。只有方案里的计划计入章卡，家属代打卡同样点亮，海报不带操作人。V0.0 / V0.2 / 未开通 VIP 只显示日章。" },
    consult: { code: "SmartConsultChatView", note: "纯粹的 AI 问诊对话界面（所有入口始终可点击进入）：顶部导航左「返回」、居中「哈宝医生」；中间消息区在未发消息时展示问候卡（你好，这里是哈宝医生 / 有不适或用药疑问，都可以问我）；VIP 用户发送消息后以左右纯文本/图片气泡进行问答交流，非 VIP 用户发送消息后弹出「需购买 VIP 才能使用哈宝问诊」提示对话卡（可一键跳转 VIP 会员页开通，已购买 VIP 后自动转为哈宝医生打招呼气泡以便正式聊天问诊）；底部主输入框默认为「长按说话」按钮（按住说话、上滑取消、松开发送），左侧为键盘切换按钮（点击切换为文字输入框），右侧为「+」号功能面板（仅保留拍照、相册，已移除 AI 电话）。" },
    profile: { code: "ServiceView", note: "Hero 健康档案 + 打卡通知/协议。V0.0 不出现家属管理、操作记录、硬件管理、VIP，也没有右上身份胶囊，档案标「本人」。V0.1 在档案卡下加 VIP 控制区（¥2400 / 年）；未开通时家属管理、操作记录、硬件管理仍在列表里，副说明「开通 VIP 后可用」、右侧皇冠图标，整行不可点击（开通 VIP 通过上方蓝色 Hero 卡的「购买 ›」进入）。开通后这三行恢复可点击进入，身份胶囊、通知家属和问诊一起放开。记录和绑定仍在，取消订阅只重新上锁、不删数据。身份胶囊仍决定写入归属，但不再在卡片上盖章。" },
    vip: { code: "VIPView", note: "仅从 V0.1 入口进来。Hero 写哈宝 VIP 与 ¥2400 / 年，下面五项完整详情：家属管理、硬件管理、操作记录、哈宝医生（AI+真人医生前端统一为哈宝医生主体），以及支架保险理赔服务。底栏「立即开通」先确认，演示不扣款，开通后有效期一年；已开通可「取消订阅」，确认后四项功能重新上锁、服务权益同步终止，家属、记录和硬件绑定留在本机。注销清空开通状态，退出登录保留。" },
    hardware: { code: "HardwareManageView", note: "仅 V0.1（V0.0 个人中心没有这一行）。两张设备模块卡：未绑定写「未绑定」、右端挂「扫码绑定」浅蓝胶囊；已绑定写绿色「已绑定 · 编号」、右端箭头。点未绑定卡进扫码页，点已绑定卡进设备页。副说明按已绑定的名字拼，两台齐了写「两台都已绑定」。绑定留在本机，切回 V0.0 只藏入口。" },
    "hardware-scan": { code: "HardwareScanView", note: "V10.128：深蓝黑底全屏扫码页——264pt 取景框 + 青色扫描线，约 1.5 秒识别到对应哈宝设备（血压计 3086 / 手表 1172），四角转绿、白卡上浮，「绑定这台」或「重新扫描」，绑定后回列表。已绑定页显示编号和绑定日，解除要确认、确认后回列表。不调用摄像头，测量不写进血压监测。退出保留，注销清空。" },
    activity: { code: "ActivityLogView", note: "仅 V0.1（V0.0 个人中心没有这一行）。一天一页、左右滑动换日，进入落在最近一条那天，右上角日期按钮开日历跳到任意一天（只到今天、最早到第一条记录那天）。页内遵循 Who / Where / When / What / How 大一统规则字段：以 When（时刻 + 细分隔线）做块头，块内白卡只展示一句话 = [Who 人名浅蓝胶囊] + 在 + [Where 界面白底蓝框胶囊] + [What 粗体蓝字动作] + [How 浅蓝底圆角内容色块]，个人中心入口与记录页共用同一句式（入口处 How 单行省略）。首次创建、更新用药与复查、生成运动计划、上传资料、测血压打卡、散步各只写一条；顺带完成的打卡并进同一条 How；只补资料写「（计划本次未动）」。How 只读不跳模块；页顶搜索框搜记录内容；长按一条出「改归属 / 删除这条记录」，超 300 条丢过更早记录时最早那页页脚提示。" },
    "ocr-capture": { code: "IntakeCaptureView", note: "V10.98：用药与复查有存量也直接落本页，存量组列在底部组轨道。组轨道：点组卡只选中当前组，不进组资料；＋新建组开类别 sheet（.large）；复查直建「第 N 次复查」。快门写入当前组；快门左侧相册进当前组已拍页。入组须先拍出院记录才能确认；未拍时点右上「确认」出提示并切到出院组。" },
    "ocr-group": { code: "IntakeCaptureView", note: "单组已拍页。左「拍摄」回取景；右「相册」导入写入本组。组轨道点卡不会进这一页。" },
    "ocr-detail": { code: "IntakeCaptureView", note: "按组分区预览。与首次上传、身体报告·基础报告共用同一份存量。入组可改类别 / 删组（必传出院记录至少留一组）；复查不改类别。右上入组「解析」、存档「提交」。无存量时空态只留文案，拍资料走左上「拍摄」，页内不再放「拍摄资料」钮。" },
    "first-rest": { code: "CreateScheduleFlowView", note: "点名称换预设；点时刻出居中「时刻调整」弹层（标题为事项名，双列时/分步进，分步长 5，取消 / 完成，点遮罩取消）。默认六项（起床 / 三餐 / 午休 / 睡觉，不含测血压）。「稍后」关整段创建流回首页；底栏「拍照上传病历」替换本页，不压栈。" },
    "confirm-plan": { code: "InfoWithScreeningHost", note: "schedulesOnly。单页直落背景展示生成的计划列表（不再单设「计划 / 解析依据」顶部切换与解析依据页），解析来源直接写明在每条计划卡片的补充备注里（如「依据出院记录，阿司匹林肠溶片每日用药一次」「依据出院记录，确诊高血压3级，每日测血压两次」「依据出院记录，2026年9月17日出院，每月复查一次」）；起床、早餐等非解析预设日程初始为无备注空集，默认显示「可编辑备注」占位。点开备注或点「编辑」即可修改。作息区首次入组才带；复查置底标红；底栏一枚「重新拍照解析」；右上「确认」写入用药+复查，左上「稍后」关整段流。" },
    "confirm-exercise": { code: "ExerciseScheduleConfirmView", note: "运动计划数量角标 + 时段「n 项」+ 操作卡。右上「确认」回首页点亮时钟；「稍后」放弃并关评估流回进入处；自主新建 / 卡片编辑开草稿后回到本页。" },
    "select-type": { code: "CreateScheduleFlowView", note: "专业听诊器 14 / 日常铃。两组岛：用药与复查标复查红（特殊），进与首次上传 / 基础报告同一份资料详情，确认后覆盖更新用药+复查；运动走体测。新建类别并进日常岛。首页虚框不经本页（首页「添加今日计划」第一层也不放右上「管理」，保持快捷路径轻量）。选类型后替换本页；返回关整段创建 cover。右上「管理」推入管理类别（仅两处「选择类型」页有）。" },
    "category-manage": { code: "CategoryManageView", note: "纯管理页，不放新建（新建仍在选择类型页底部虚框）。被 push 而非 cover，故不自带导航栈，沿用父栈导航栏。每行：徽标 + 名称 + 副标 + 铅笔 + 垃圾桶，无 chevron。副标就是两类分界：有存量写「N 个计划」，没有写「暂无计划」且压淡。铅笔进改名弹层（只改名，无删除按钮，带影响提示）；垃圾桶进删除流程：无存量一句确认，有存量给迁移面板 —— 选一个类别承接，或走「连同 N 个计划一起删除」（该路径再要一道二次确认，是本流程唯一不可逆的一步，会连打卡历史一起没）。零类别时空态引导回选择类型页新建。" },
    "task-add": { code: "AddEditTaskView", note: "V0.0 / V0.1 为「事项」「时间与提醒」两大类折叠；V0.2 重构为**无滚动「三联动态磁贴 + 单屏模块舞台」切换架构**（字段不变）：顶部三联动态磁贴（① 事项内容、② 时刻与提醒、③ 周期与日期）实时回显三大模块核心设定，不切页即可一眼总览；中部单屏舞台一次仅聚焦展示 1 个大模块（支持点按磁贴、点按卡头 `‹ 1/3 ›` 步进或左右滑动手势切换），彻底消除滚动与视觉负担。" },
    "task-edit": { code: "AddEditTaskView", note: "标题「更新计划」。V0.2 采用无滚动「三联动态磁贴 + 单屏模块舞台」切换架构：顶部磁贴实时回显事项、时刻与周期摘要，中部单屏切换「事项内容 / 时刻与提醒 / 周期与日期」；「提醒时间」与「打卡时间」1:1 对称同构，「时间段」配备醒目粗体时间范围标注，「起止日期」通栏对齐零截断。修改时间或周期字段保存前弹出「确认更新计划」双卡弹窗；仅改名称/备注/血压等直接原地保存。" },
    "task-view": { code: "AddEditTaskView", note: "查看计划（只读，右上「更新」）。V0.2 采用无滚动「三联动态磁贴 + 单屏模块舞台」切换架构，顶部三枚磁贴一眼总览事项、时刻与周期，中部单屏切换三大模块；「到点提醒」收纳在「时刻与提醒」模块内且在查看态下可直接切换；底部固定操作坞并排展示删除或「取消本次打卡」按钮，无需滚动。" },
    "exercise-risk": { code: "BodyTestRunView", note: "Demo Toggle 模拟禁忌症。体测不参与入组。「稍后 / 退出评估 / 暂不创建」关整段评估流，不退回选择类型。" },
    "body-test": { code: "BodyTestRunView", note: "户外原地踏步三分钟。停止或倒计时归零后直进感受问卷，无完成中转页。" },
    "body-test-sit": { code: "BodyTestRunView", note: "室内 1 分钟坐立。次数大号读数 + 倒计时 + 同龄参考。停止后问卷顶部两栏「测试时长 / 完成次数」。" },
    borg: { code: "BorgQuestionnaireView", note: "体测停止后直进，顶部读本次 BodyTestRecord。户外三栏「步行时间 / 步行距离 / 平均步频」；室内坐立两栏「测试时长 / 完成次数」（不要写成步行）。时长「N 秒 / N 分钟」，步频带「步/分」。左树可先点「坐立体测」再进本页预览坐立摘要。未选说话能力时点生成会提示。" },
    questionnaire: { code: "FollowUpQuestionBank", note: "51 题一题一屏。必答门禁：未作答「下一步」置灰，第 1 题「上一步」置灰。单选后不自动跳下一题。提交后出结果页，再 dismiss 回问卷随访，不把随访再压一层。右上「题号」进答题进度。" },
    "q-progress": { code: "FollowUpQuestionMatrixView", note: "全屏「答题进度」，导航只左「返回」无右钮。按题库顺序把连续同章节切成一卡（一般情况 15 题 / 生活质量 36 题）。6 列圆号：当前题实蓝白字、已答绿底绿字、未答淡蓝底淡蓝字，当前态优先。点号跳那一题并关页；本页无统计行、无图例，也不自动滚到当前题。" },
  };

  const S = {
    screen: "home",
    frames: [{ id: "home", how: "root" }],
    enrolled: true,
    loggedIn: true,
    privacyAccepted: true,
    loginTermsChecked: true,
    privacyDeclinedStep: false,
    privacyExitedNotice: false,
    role: "patient",
    name: "李建国",
    gender: "男",
    age: 58,
    height: 170,
    weight: 75,
    selfProfile: { name: "李建国", gender: "男", age: 58, height: 170, weight: 75 },
    phone: "13800138013",
    birthday: "1968年3月12日",
    hw: {},
    hwKind: "bloodPressure",
    hwPhase: "idle",
    vitalsFromHw: false,
    vitalsSyncPhase: "idle",
    vitalsSyncStep: 0,
    monitorHwPhase: "idle",
    monitorHwStep: 0,
    monitorHwDetail: "",
    taskVitalsHw: { t1: true },
    vitalsLog: [
      { time: "07:12", sys: 126, dia: 78, hr: 72, hw: true },
      { time: "19:40", sys: 132, dia: 82, hr: 76, hw: true },
    ],
    block: 1,
    liveFace: null,
    syncDriver: "idle",
    centerStage: null,
    calOffset: 0,
    vitalsOffset: 0,
    enter: false,
    loginFocus: false,
    stampCalOffset: 0,
    stampSelYMD: "2026-09-11",
    walkFilter: null,
    walkDeleted: {},
    // 确认计划页：计划 / 解析依据分页（默认落计划）
    confirmPane: "plan",
    // 健康档案：分区展开态 + 全屏预览页
    hrExpanded: { baseline: true, review: true },
    hrPreview: null,
    // 确认页草稿：首次入组带作息区，已入组重走用药复查只有用药 + 复查
    confirmDrafts: null,
    confirmEditIndex: null,
    // 解析依据：当前展开的那一行 + 改过的行 + 可改的解析结果（真机 PlanBasisSection + 活条目）
    basisOpen: null,
    basisEdits: {},
    // 依据页：各块「依据资料」是否铺开 + 未确认的草稿（fieldId → 新值；真机 PlanBasisSection.drafts）
    basisMaterial: {},
    basisDrafts: {},
    meds: null,
    appts: null,
    bps: null,
    diseaseInfo: null,
    // 体测：模式 walking（户外原地踏步 3 分钟）/ sit（室内坐立 1 分钟）
    testMode: "walking",
    testElapsed: 0,
    testCadence: 90,
    testReps: 0,
    testRunning: false,
    // 结束体测时锁定的记录（真机 EnrollmentStore.bodyTest / BodyTestRecord）
    bodyTest: null,
    lockBlock: false,
    lockRecurrence: false,
    draft: null,
    /// 查看 / 添加 / 编辑计划的两大类折叠：事项 / 时间与提醒（存被收起的分组，默认两组都展开）
    editorCollapsed: [],
    inputMode: "voice",
    plusPanel: false,
    consultKeyboard: false,
    consultModule: null,
    caseMode: false,
    caseMenu: false,
    caseCat: "plan",
    activeCaseId: null,
    caseStep: null,
    appliedCaseActions: {},
    consultReportOverall: "",
    consultReportSub: {},
    pendingImage: false,
    chatDraft: "",
    completed: { t1: true, t2: true },
    // 家属代操作（V0.1）：任务 id → "family"；本人打卡不放键（与存量 / 种子数据字节一致）
    completedBy: {},
    // 操作记录：本人与家属的照护动作，新的在前。卡片上不再盖章。
    ops: [],
    // 操作记录当前页（YYYY-MM-DD）；空 = 最近一条那天
    opDay: "",
    opQuery: "",
    opDropped: false,
    overlay: null,
    overlayData: {},
    scheduleFilter: "todo",
    scheduleScope: "健康计划",
    calMode: "week",
    calSelYMD: "2026-09-11",
    qIndex: 0,
    answers: {},
    restRows: REST_PRESET.map((x) => ({ ...x })),
    family: [{ id: "f1", name: "王芳", rel: "配偶", phone: "139****2210", phoneRaw: "13900132210" }],
    guardedPatients: [
      { id: "p1", name: "李建国", gender: "男", age: 58, height: 170, weight: 75, rel: "配偶", phone: "138****5678", phoneRaw: "13800135678" },
      { id: "p2", name: "张桂兰", gender: "女", age: 56, height: 160, weight: 61, rel: "配偶", phone: "137****9021", phoneRaw: "13700139021" },
    ],
    activePatientId: "p2",
    currentPersonName: "李建国",
    watchingWardName: null,
    demoPeople: [
      { name: "李建国", gender: "男", age: 58, height: 170, weight: 75, phone: "138****5678", phoneRaw: "13800135678" },
      { name: "王芳", gender: "女", age: 55, height: 162, weight: 58, phone: "139****2210", phoneRaw: "13900132210" },
      { name: "张桂兰", gender: "女", age: 56, height: 160, weight: 61, phone: "137****9021", phoneRaw: "13700139021" },
    ],
    careBonds: [
      { id: "b1", guardianName: "王芳", guardianPhone: "139****2210", guardianPhoneRaw: "13900132210", wardName: "李建国", wardPhone: "138****5678", wardPhoneRaw: "13800135678", relation: "配偶", confirmed: true, initiatedBy: "ward" },
      { id: "b2", guardianName: "李建国", guardianPhone: "138****5678", guardianPhoneRaw: "13800135678", wardName: "张桂兰", wardPhone: "137****9021", wardPhoneRaw: "13700139021", relation: "父母", confirmed: true, initiatedBy: "guardian" },
    ],
    pendingPersonPopups: {},
    careSheetDraft: { name: "", phone: "", rel: "配偶" },
    consultUnread: 2,
    consultUnreadByRole: { patient: 1, family: 1 },
    careNoticePopup: null,
    sysPushBanner: null,
    seededCareNotices: false,
    famRel: "配偶",
    notifySelf: true,
    notifyFamily: false,
    // 计划页「去填写 → 填完自动进打卡通知页」的链路标记（V10.52）
    famFillJump: false,
    notifyAll: true,
    cats: { medication: true, exercise: true, monitoring: true, diet: true, rest: true, appointment: true },
    // 计划「到点提醒」：mutedToday = 本次提醒关（按任务 id 记；只有这一档）
    // 家属通知关（按任务 id 记；V10.52 计划页家属通知）
    famOff: {},
    mutedToday: {},
    walking: false,
    paused: false,
    walkSaved: false,
    walkSheet: true,
    musicMenu: false,
    musicOn: true,
    musicSrc: "netease",
    track: 0,
    aiOn: true,
    consultOpen: false,
    messages: [],
    toast: "",
    taskId: "t4",
    taskMode: "view",
    addTitle: "添加早晨计划",
    lockedBlock: 1,
    contra: false,
    borg: 5,
    talk: "",
    symptoms: [],
    sys: null,
    dia: null,
    hr: null,
    chatMenu: false,
    stampDay: "today",
    captureMode: "intake",
    docGroups: [{ id: 1, cat: "dischargeRecord", pages: 0 }],
    activeGroup: 1,
    docSeq: 1,
    pendingCat: "dischargeRecord",
    catPickerMode: "newGroup",
    catPickerGroup: null,
    lockCategory: false,
    pendingManualEnroll: false,
    draftReturn: null,
    reportKind: "baseline",
    // V10.49：复查报告页的复诊打卡形态——多一颗「返回首页」；apptCapture 标记拍摄来自首页复查打卡
    reportReturnHome: false,
    // V10.50：报告页两页就地切换——默认落「AI 解读」，另一页是只读「资料合集」
    reportPane: "insight",
    apptCapture: false,
    qDone: false,
    walkTaskId: null,
    walkStartedAt: null,
    customCats: [],
    customSeq: 1,
    customDraft: { name: "", icon: "pills", color: "blue" },
    customDurDays: 30,
    customFromType: false,
    // 非 null = 类别弹层处于改名态（编辑该类别），null = 新建
    catRenameId: null,
    // 非 null = 删除流程正在处理该类别
    catRemovalId: null,
    // 删除流程停在「连同计划一起删除」的二次确认态
    catDiscardConfirm: false,
    // 「仅删本次」记 skippedDays[日期]；长期删除直接 splice 出 SEED（真机 endSeries）
    skippedDays: {},
    // 真机模拟：null = 目录浏览；{on, focus, trace, done, lastSig} = 模拟态
    sim: null,
    // 开发菜单：首页方案序号（真机 TodayScheme，0-3；本原型只渲染方案一）
    scheme: 0,
    // 设计代际（真机 DesignGeneration）：日常预览默认 V0.1，主账号李建国已开通 VIP，新绑定用户与其余家属默认为免费用户；真机模拟（coldStart）回 V0.0。
    gen: "0.1",
    // VIP（真机 VIPStore）：按人物独立记录（vipByPerson），默认仅「李建国」为 VIP，新绑定用户默认均为免费用户（false）。
    vip: true,
    vipUntil: 1824681600000,
    vipByPerson: { "李建国": true },
    // V0.1 哈宝医生「问诊 + 计划制定」（只在设计版本 V0.1 生效；V0.2 仍是三模块联动案例）。
    // Demo：第 1 期（9/1–9/7）已交反馈拿金章；第 2 期 9/8 采纳、今天 9/11 是第 4 天，前三天满日。
    // 过去日的方案打卡按 marks 给演示数据（缺省 full），今天读真实打卡。
    plan: {
      seq: 2,
      cur: {
        no: 2, start: "2026-09-08", ids: ["t1", "t4", "t5", "t15", "t16"],
        rows: [
          { op: "adjust", id: "t1", cat: "monitoring", title: "起床测血压", change: "先静坐 5 分钟再测", time: "每日 06:30" },
          { op: "keep", id: "t4", cat: "medication", title: "服用阿司匹林肠溶片", change: "", time: "每日 08:00" },
          { op: "keep", id: "t5", cat: "medication", title: "服用美托洛尔缓释片", change: "", time: "每日 08:30" },
          { op: "keep", id: "t15", cat: "exercise", title: "晚间散步", change: "", time: "每日 19:00" },
          { op: "keep", id: "t16", cat: "medication", title: "服用阿托伐他汀钙片", change: "", time: "每日 21:00" },
        ],
        why: "上期满日 6/7、感觉刚好。病历里有室颤，运动量先不加；测血压前先静坐 5 分钟，读数更准。",
        marks: { "2026-09-08": "full", "2026-09-09": "full", "2026-09-10": "full" },
        addedOn: {}, selfEdited: {}, fbPrompted: false,
      },
      history: [{
        no: 1, start: "2026-09-01", end: "2026-09-07", ids: ["t1", "t4", "t5", "t15", "t16"],
        rows: [
          { op: "adjust", id: "t15", cat: "exercise", title: "晚间散步", change: "改为饭后半小时慢走", time: "每日 19:00" },
          { op: "keep", id: "t1", cat: "monitoring", title: "起床测血压", change: "", time: "每日 06:30" },
          { op: "keep", id: "t4", cat: "medication", title: "服用阿司匹林肠溶片", change: "", time: "每日 08:00" },
          { op: "keep", id: "t5", cat: "medication", title: "服用美托洛尔缓释片", change: "", time: "每日 08:30" },
          { op: "keep", id: "t16", cat: "medication", title: "服用阿托伐他汀钙片", change: "", time: "每日 21:00" },
        ],
        why: "以你现在的计划为底，先把吃药、测血压稳住；散步放慢到饭后半小时慢走，更稳妥。",
        marks: { "2026-09-04": "part" }, addedOn: {}, selfEdited: {}, fbPrompted: true,
        stats: {
          days: [
            { ymd: "2026-09-01", state: "full", n: 5, d: 5 }, { ymd: "2026-09-02", state: "full", n: 5, d: 5 },
            { ymd: "2026-09-03", state: "full", n: 5, d: 5 }, { ymd: "2026-09-04", state: "part", n: 5, d: 3 },
            { ymd: "2026-09-05", state: "full", n: 5, d: 5 }, { ymd: "2026-09-06", state: "full", n: 5, d: 5 },
            { ymd: "2026-09-07", state: "full", n: 5, d: 5 },
          ],
          full: 6, done: 33, total: 35, anyDone: true, medal: "gold",
        },
        feeling: "刚好",
        review: "这一期集到金章，7 天里 6 天全部完成，一共集了 33/35 枚章，做得很好！",
        at: 0,
      }],
    },
    // 医嘱来源标：采纳写入或改过的计划（首页计划卡 / 计划详情显示「医嘱」小胶囊，仅 V0.1 + VIP）
    rx: { t1: true, t15: true },
    rxCards: {},
    rxChat: [],
    rxArchive: [],
    rxCaseOn: true,
    rxCaseId: "rx1",
    rxCaseStep: null,
    rxCaseMsgs: [],
    rxCaseFold: false,
    rxPinOpen: false,
    rxStampPlanOpen: false,
    rxScrollTo: null,
    rxScrollBottom: false,
    rxFocus: false,
  };

  // 冷启动快照：真机模拟靠它整体复位（S 只含 JSON 安全值，可安全深拷贝）
  const S0 = JSON.parse(JSON.stringify(S));
  function resetAll() {
    Object.keys(S).forEach((k) => delete S[k]);
    Object.assign(S, JSON.parse(JSON.stringify(S0)));
    // SEED 原地变异：保住所有已捕获的数组引用（30+ 处按名读）
    SEED.length = 0;
    SEED0.forEach((t) => SEED.push({ ...t }));
    ARCHIVE_DEMO.review.groups.length = 0;
    ARCHIVE_DEMO0.review.forEach((g) => ARCHIVE_DEMO.review.groups.push({ ...g }));
    taskSeq = 0;
  }

  /* ─────────────────────────── 真机模拟 ───────────────────────────
     冷启动后只能靠真实点按前进，左树锁死；右侧面板实时显示 17 条链路的进度。
     埋点只有两处：act() 入口记动作，renderSpec() 入口记屏幕结算——两者互补无盲区
     （首页打卡走 refreshHomeSoft 不经过 render，只有 act 能记到；纯导航只经过 render）。 */

  /// 链路表：steps 按顺序前进扫描，命中的即点亮。act = 动作事件，screen = 落到该屏
  /// optional 步不达标不阻塞；state 谓词兜终态（如「已入组」）
  const FLOWS = [
    { id: "login", label: "未登录 · 隐私同意 → 登录 → 完善信息", cold: "login", steps: [
      { screen: "onboard-login", label: "首次进入《用户隐私保护提示》弹窗" },
      { act: "acceptInitialPrivacy", label: "同意并继续（勾选隐私与服务协议）", optional: true },
      { act: "sendCode", label: "获取验证码", hint: "登录页点「获取验证码」" },
      { act: "login", label: "填 11 位手机号 + 6 位验证码后登录" },
      { screen: "onboard-profile", label: "完善你的信息" },
      { act: "pickGender", label: "选性别" },
      { act: "enter", label: "填姓名后完成", hint: "点右上「进入哈宝」" },
      { screen: "home", label: "进入首页" },
    ]},
    { id: "first-create", label: "未入组 · 首次创建（入组主链）", cold: "new", steps: [
      { act: "firstCreate", label: "首页底缘「首次创建计划」" },
      { screen: "first-rest", label: "基础作息 6 项预设" },
      { act: "editRestTime", label: "改作息时刻", optional: true },
      { act: "uploadDischarge", label: "拍照上传病历" },
      { screen: "ocr-capture", label: "拍摄页（出院记录必传）" },
      { act: "shutter", label: "拍一张" },
      { act: "ocrConfirm", label: "确认 → 资料详情" },
      { act: "ocrParse", label: "解析" },
      { screen: "confirm-plan", label: "确认计划（用药 + 测血压 + 复查 + 作息）" },
      { act: "confirmPlan", label: "点「确认」" },
      { screen: "home", state: (s) => s.enrolled, label: "回首页点亮康复时钟" },
    ]},
    { id: "first-manual", label: "未入组 · 分支：自主新建直接入组", cold: "new", steps: [
      { act: "firstCreate", label: "首次创建" },
      { act: "uploadDischarge", label: "拍照上传病历" },
      { act: "ocrConfirm", label: "确认 → 资料详情" },
      { act: "ocrParse", label: "解析" },
      { act: "manualCreate", label: "确认页「自主新建计划」" },
      { act: "addTask", label: "填名称后「添加」" },
      { state: (s) => s.enrolled, label: "直接入组" },
    ]},
    { id: "first-reparse", label: "未入组 · 分支：重新解析病例", cold: "new", steps: [
      { act: "firstCreate", label: "首次创建" },
      { act: "uploadDischarge", label: "拍照上传病历" },
      { act: "ocrConfirm", label: "确认 → 资料详情" },
      { act: "ocrParse", label: "解析" },
      { act: "reparseCase", label: "确认页「重新解析病例」" },
      { screen: "ocr-capture", label: "回拍摄取景（保留已拍）" },
    ]},
    { id: "med-revisit", label: "已入组 · 用药与复查（重走）", cold: "demo", steps: [
      { screen: "schedule", label: "健康计划" },
      { act: "addPlan", label: "底栏「添加健康计划」" },
      { screen: "select-type", label: "选择类型" },
      { act: "typeMed", label: "用药与复查" },
      { screen: "ocr-capture", label: "拍摄取景（存量组列在组轨道）" },
      { act: "ocrParse", label: "解析" },
      { screen: "confirm-plan", label: "确认计划（只有用药 + 复查，无作息区）" },
      { act: "confirmPlan", label: "确认 → 落回健康计划" },
    ]},
    { id: "ex-normal", label: "已入组 · 运动评估（低风险）", cold: "demo", steps: [
      { act: "typeEx", label: "选择类型 → 运动" },
      { screen: "exercise-risk", label: "运动前风险提示" },
      { act: "openGuide", label: "选模式（户外踏步 / 室内坐立）" },
      { act: "beginCountdown", label: "指南卡「立即开始」" },
      { screen: "body-test", label: "3-2-1 倒数 → 体测运行" },
      { act: "cadenceUp", label: "调步频", optional: true },
      { act: "finishTest", label: "长按 2 秒结束" },
      { screen: "borg", label: "感受问卷" },
      { act: "setSym", label: "勾选不适症状", optional: true },
      { act: "borgOk", label: "评级 → 低风险" },
      { screen: "confirm-exercise", label: "确认运动计划" },
      { act: "confirmExercise", label: "确认写入" },
      { screen: "home", label: "回首页" },
    ]},
    { id: "ex-high", label: "已入组 · 分支：高风险不生成", cold: "demo", steps: [
      { act: "typeEx", label: "选择类型 → 运动" },
      { act: "openGuide", label: "选模式" },
      { act: "beginCountdown", label: "立即开始" },
      { act: "finishTest", label: "长按结束" },
      { screen: "borg", label: "感受问卷" },
      { act: "borgOk", state: (s) => s.borg > 7, label: "Borg > 7 或严重不适" },
      { screen: "risk-result", label: "评级结果：建议人工评估" },
    ]},
    { id: "ex-contra", label: "已入组 · 分支：命中禁忌症", cold: "demo", steps: [
      { act: "typeEx", label: "选择类型 → 运动" },
      // 同一事件上判屏与判态：打开禁忌后停在风险页的禁忌变体
      { act: "contra", state: (s) => s.contra, label: "打开禁忌症开关 → 检测到绝对禁忌症" },
    ]},
    { id: "daily-create", label: "已入组 · 直建测血压 / 饮食 / 作息", cold: "demo", steps: [
      { act: "typeDaily", label: "选择类型 → 测血压 / 饮食 / 作息" },
      { screen: "task-add", label: "添加计划页" },
      { act: "draftCat", label: "改事项分类", optional: true },
      { act: "addTask", label: "填名称后「添加」" },
      // 入口不同落点不同：首页虚框新建回首页；健康计划 FAB 进则落回健康计划页
      { screen: "home", optional: true, label: "回首页，lane 出现新卡片" },
    ]},
    { id: "checkin-direct", label: "已入组 · 直接打卡（服药 / 饮食 / 作息）", cold: "demo", steps: [
      { screen: "home", label: "首页计划卡" },
      { act: "checkin", label: "点右侧圆圈打卡 → 变绿 + 集章 +1" },
      { act: "checkin", optional: true, label: "再点一次可撤销" },
    ]},
    { id: "checkin-vitals", label: "已入组 · 血压打卡（录入面板）", cold: "demo", steps: [
      { act: "checkin", label: "点测血压计划卡" },
      { anyAct: ["sys+", "sys-", "dia+", "dia-", "hr+", "hr-"], label: "步进录入收缩压 / 舒张压 / 心率" },
      { act: "vitalsSave", label: "录入面板「保存并打卡」" },
    ]},
    { id: "checkin-appointment", label: "已入组 · 复查打卡 → 上传资料", cold: "demo", steps: [
      { act: "checkin", label: "点复查计划卡" },
      { act: "appointmentGo", label: "上传复查资料" },
      { screen: "ocr-capture", label: "拍摄复查报告" },
      { act: "shutter", label: "拍一张" },
      { act: "ocrConfirm", label: "确认 → 资料详情" },
      { act: "ocrSubmit", label: "提交归档并完成当天复查打卡" },
      { screen: "report-sub", label: "落复查报告页（底栏多一颗「返回首页」）" },
      { act: "reportHome", label: "返回首页" },
      { screen: "home", label: "回首页复查卡已完成" },
    ]},
    { id: "walk-scheduled", label: "已入组 · 运动打卡 → 散步会话", cold: "demo", steps: [
      { act: "checkin", label: "点运动计划卡" },
      { act: "exerciseGo", label: "进入运动，开始散步" },
      { act: "confirmOk", label: "出院诊断命中绝对禁忌症 → 确认继续" },
      { screen: "walk-session", label: "户外散步会话" },
      { act: "walkPause", label: "暂停（结束钮在暂停态）" },
      { act: "toggleMusic", label: "音乐", optional: true },
      { act: "walkEnd", label: "长按 2 秒结束" },
      { screen: "walk", label: "回地图页展示轨迹" },
      { act: "walkSave", label: "保存并打卡" },
      { screen: "home", label: "回首页自动打卡动画" },
    ]},
    { id: "walk-free", label: "已入组 · 自由散步", cold: "demo", steps: [
      { act: "walkStart", label: "底坞「运动」→ 开始" },
      { act: "confirmOk", label: "有绝对禁忌症时确认继续" },
      { screen: "walk-session", label: "散步会话" },
      { act: "walkPause", label: "暂停（结束钮在暂停态）" },
      { act: "walkEnd", label: "长按结束" },
      { act: "walkSave", label: "保存（新建「自主散步」任务再打卡）" },
    ]},
    { id: "followup", label: "已入组 · 随访问卷 51 题", cold: "demo", steps: [
      { screen: "followup", label: "身体报告 → 问卷随访" },
      { act: "qPick", label: "答题（一题一卡）", optional: true },
      { act: "qNext", label: "逐题「下一步」" },
      { state: (s) => s.qDone, label: "最后一题提交 → 结果页" },
      { act: "qFinish", label: "返回身体报告", optional: true },
    ]},
    { id: "consult", label: "已入组 · 哈宝医生（需 V0.1 且开通 VIP）", cold: "demo", steps: [
      { act: "debugGen", label: "先在开发菜单切到 V0.1（V0.0 三个入口压暗点不开）" },
      { screen: "vip", optional: true, label: "未开通时点压暗的哈宝，进 VIP 页" },
      { act: "activateVip", optional: true, label: "确认开通（演示不扣款）" },
      { screen: "consult", label: "开通后进哈宝医生：纯粹的对话问答界面" },
      { act: "sendChat", label: "输入问题并发送，收到哈宝医生回复" },
      { act: "newChat", label: "新对话", optional: true },
      { screen: "consult-history", label: "历史记录", optional: true },
    ]},
    { id: "archive", label: "已入组 · 报告归档", cold: "demo", steps: [
      { screen: "health-record", label: "个人中心 → 健康档案" },
      { act: "uploadHealth", label: "底栏「上传报告资料」" },
      { act: "pickArchive", label: "选基础 / 复查" },
      { screen: "ocr-capture", label: "拍摄" },
      { act: "shutter", label: "拍一张" },
      { act: "ocrConfirm", label: "确认 → 资料详情" },
      { act: "ocrSubmit", label: "提交归档" },
    ]},
    { id: "stamps", label: "已入组 · 集章与分享", cold: "demo", steps: [
      { screen: "stamps", label: "底坞右「分享」→ 今日集章" },
      { act: "openCal", label: "换日", optional: true },
      { anyAct: ["rxStampPlanToggle", "rxPeriodSummary", "rxOpenFeedback"], optional: true, label: "（V0.1 + VIP）方案章卡「本期计划 ›」/ 期章墙点期章看小结 / 期末「交反馈」" },
      { act: "shareStamp", label: "一键分享" },
      { act: "demoShare", label: "海报选渠道", optional: true },
    ]},
    // 开发菜单（真机 #if DEBUG）：三项语义差得远，最容易搞混「重新生成」与「测试登录步骤」
    { id: "debug-menu", label: "开发菜单 · 生成 / 重置 / 登录步骤 / 设计版本", cold: "demo", steps: [
      { act: "openDebug", label: "首页右上「…」打开开发菜单" },
      { act: "debugSeed", optional: true, label: "生成 Demo（铺满档案 + 计划 + 体征）" },
      { act: "debugRegenerate", optional: true, label: "重新生成（清计划与记录，留档案姓名）" },
      { act: "debugGen", optional: true, label: "设计版本 V0.0 / V0.1（家属、操作记录、硬件管理与哈宝问诊跟着开合）" },
      { act: "debugTestLogin", label: "测试登录步骤（只退登录态）" },
      { screen: "onboard-login", label: "回登录向导，计划与记录仍在" },
    ]},
    { id: "profile", label: "已入组 · 个人中心三件套", cold: "demo", steps: [
      { screen: "profile", label: "个人中心" },
      { act: "savePatient", label: "患者信息保存写回", optional: true },
      { act: "bindFam", label: "（V0.1）家属绑定（最多 5 位）", optional: true },
      { act: "toggleCat", label: "打卡通知分类开关", optional: true },
    ]},
    { id: "hardware", label: "V0.1 · 扫码绑定硬件", cold: "demo", steps: [
      { screen: "profile", label: "个人中心" },
      { screen: "vip", optional: true, label: "未开通时硬件这一行先进 VIP 页" },
      { act: "activateVip", optional: true, label: "确认开通（演示不扣款）" },
      { screen: "hardware", label: "开通后进硬件管理：两张设备模块卡" },
      { act: "openHw", label: "点「血压计」卡进扫码页，自动扫码（约 1.5 秒识别）" },
      { act: "hwBind", label: "识别到哈宝血压计 3086，「绑定这台」" },
      { act: "openHw", label: "（可选）再点这张卡，进已绑定页", optional: true },
      { act: "hwUnbindAsk", label: "（可选）「解除绑定」", optional: true },
      { act: "hwUnbind", label: "（可选）确认解除，回模块卡列表", optional: true },
    ]},
    // V10.125：操作记录按天看、可搜；结果行只读，不跳模块
    { id: "activity-day", label: "V0.1 · 操作记录按天看", cold: "demo", steps: [
      { screen: "profile", label: "首页右上「我的」进个人中心" },
      { screen: "vip", optional: true, label: "未开通时操作记录这一行先进 VIP 页" },
      { act: "activateVip", optional: true, label: "确认开通（演示不扣款）" },
      { screen: "activity", label: "开通后「操作记录」进全屏页：落在最近一条那天，右上角日期按钮同天" },
      { act: "openOpCal", label: "点右上角日期开日历（未来日不可选）" },
      { act: "pickCalDay", label: "选另一天，整页换成那一天；没有记录的写「这一天没有操作记录」", optional: true },
      { act: "opHold", label: "长按一条：改归属 / 删除这条记录（无「跳到最早 / 清空」入口）" },
    ]},
    // V10.57：身份胶囊升级为操作归属——家属代做的打卡在卡上留标记，切回本人仍可见
    { id: "family-proxy", label: "V0.1 · 家属代操作（代打卡留标记）", cold: "demo", steps: [
      { act: "openDebug", label: "首页右上「…」打开开发菜单" },
      { act: "debugGen", label: "设计版本切 V0.1（家属身份才开放）", state: (s) => s.gen === "0.1" },
      { screen: "profile", label: "首页右上「我的」进个人中心" },
      { act: "roleSwitch", label: "右上身份胶囊切「家属」", state: (s) => s.role === "family" },
      { screen: "home", label: "返回首页" },
      { act: "checkin", label: "以家属身份替患者打卡一条", state: (s) => Object.keys(s.completedBy || {}).length > 0 },
      { screen: "profile", label: "再进个人中心" },
      { act: "roleSwitch", label: "身份胶囊切回「本人」", state: (s) => s.role === "patient" },
      { screen: "activity", label: "个人中心「操作记录」出现这条打卡；卡片上不再盖章" },
    ]},
  ];

  function simLogAct(name, el) {
    if (!S.sim?.on) return;
    S.sim.trace.push({
      k: "act", t: performance.now(), name, screen: S.screen,
      id: el?.dataset?.id || null, c: el?.dataset?.c || el?.dataset?.cat || null,
    });
    simEval();
  }
  /// 屏幕结算埋点：render 因打字 / 选择被反复调用，用签名去重，只留真正的换屏
  function simTick() {
    if (!S.sim?.on) return;
    const sig = `${S.screen}|${S.overlay || ""}|${S.frames.map((f) => `${f.id}:${f.how}`).join(">")}`;
    if (sig !== S.sim.lastSig) {
      S.sim.lastSig = sig;
      S.sim.trace.push({
        k: "nav", t: performance.now(), screen: S.screen, overlay: S.overlay,
        how: topFrame()?.how || "root",
        frames: S.frames.map((f) => `${f.id}:${f.how}`),
      });
    }
    // 每次 render 都用最新状态重算：轨迹去重但状态谓词必须跟着动作后的 S 走
    simEval();
  }
  function stepHit(step, ev) {
    if (step.screen && ev.screen !== step.screen) return false;
    if (step.act && (ev.k !== "act" || ev.name !== step.act)) return false;
    // anyAct：一个步骤接受多个动作名（如血压步进的 sys+ / sys- / dia+ …）
    if (step.anyAct && (ev.k !== "act" || !step.anyAct.includes(ev.name))) return false;
    if (step.state && !step.state(S)) return false;
    return true;
  }
  /// 顺序前进扫描：命中即前进，optional 步允许跳过并停在原游标
  function matchFlow(flow) {
    const tr = S.sim?.trace || [];
    let cur = 0;
    const hits = [];
    for (const step of flow.steps) {
      let found = -1;
      for (let i = cur; i < tr.length; i++) {
        if (stepHit(step, tr[i])) { found = i; break; }
      }
      if (found >= 0) { hits.push(found); cur = found + 1; }
      else if (step.optional) hits.push(-1);
      else return { ok: false, hits, next: step };
    }
    return { ok: true, hits, next: null };
  }
  function simEval() {
    if (!S.sim?.on) return;
    FLOWS.forEach((f) => {
      if (!S.sim.done[f.id] && matchFlow(f).ok) S.sim.done[f.id] = Date.now();
    });
  }

  function coldStart(mode) {
    resetAll();
    S.gen = "0.0";
    S.vip = false;
    S.vipUntil = null;
    setMode(mode); // 内部 resetFlowFlags + jump，会经 renderSpec 记下初始 nav
    S.sim = { on: true, mode, focus: null, trace: [], done: {}, lastSig: null, t0: Date.now() };
    simTick();
    render();
  }
  function exitSim() {
    S.sim = null;
    setMode("demo");
  }

  function renderSimPanel() {
    const n = Object.keys(S.sim.done).length;
    const pct = Math.round((n / FLOWS.length) * 100);
    const focus = S.sim.focus;
    const navs = S.sim.trace.filter((x) => x.k === "nav").slice(-4);
    const crumb = navs.map((x) => `${x.screen} ${HOW_LAB[x.how] || x.how}`).join(" → ");
    return `
      <div class="sim-head">
        <div class="sim-title">${I.spark}真机模拟</div>
        <button class="sim-exit" data-sim="exit" type="button">退出</button>
      </div>
      <div class="sim-stat">
        <b>${n}</b>/${FLOWS.length} 条链路已走通
        <span class="sim-pct">${pct}%</span>
      </div>
      <div class="sim-bar"><i style="width:${pct}%"></i></div>
      <div class="sim-sec">当前路径</div>
      <div class="crumb sim-crumb">${crumb || "冷启动"}</div>
      <div class="sim-sec">链路 <button class="sim-reset" data-sim="reset" type="button">重置回冷启动</button></div>
      ${FLOWS.map((f) => {
        const m = matchFlow(f);
        const real = f.steps.filter((s) => !s.optional).length;
        const hitN = f.steps.filter((s, i) => !s.optional && m.hits[i] >= 0).length;
        const done = !!S.sim.done[f.id];
        const open = focus === f.id || (!focus && !done && hitN > 0);
        return `<div class="sim-flow ${done ? "done" : ""} ${focus === f.id ? "focus" : ""}">
          <button class="sim-flow-head" data-sim="focus" data-flow="${f.id}" type="button">
            <span class="sim-dot">${done ? "✓" : hitN ? "◐" : "○"}</span>
            <span class="grow">${f.label}</span>
            <span class="sim-cnt">${hitN}/${real}</span>
          </button>
          ${f.cold && focus === f.id ? `<button class="sim-cold" data-sim="cold" data-mode="${f.cold}" type="button">以此态冷启动（${f.cold === "login" ? "未登录" : f.cold === "new" ? "未入组" : "已入组"}）</button>` : ""}
          ${open ? `<div class="sim-steps">${f.steps.map((s, i) => {
            const ok = m.hits[i] >= 0;
            const isNext = m.next === s;
            return `<div class="sim-step ${ok ? "ok" : ""} ${s.optional ? "opt" : ""} ${isNext ? "next" : ""}">
              <i>${ok ? "●" : s.optional ? "◌" : "○"}</i><span>${s.label}${s.hint && isNext ? `<em>${s.hint}</em>` : ""}</span></div>`;
          }).join("")}</div>` : ""}
        </div>`;
      }).join("")}
      <div class="sim-sec">说明</div>
      <p class="sim-note">模拟态下左侧树锁死，只能靠手机内真实点按前进。点任意链路可展开步骤；点「以此态冷启动」按该链路的前置状态重开。</p>
    `;
  }

  const $ = (sel, root = document) => root.querySelector(sel);
  const app = () => $("#app");
  const overlay = () => $("#overlay");

  function pad(n) { return String(n).padStart(2, "0"); }
  const WEEKDAYS = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  function parseYMD(s) {
    const [y, m, d] = String(s || "2026-09-11").split("-").map(Number);
    return new Date(y, (m || 1) - 1, d || 1);
  }
  function toYMD(d) {
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }
  function startDay(d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  }
  function monthDayLabel(d) {
    return `${d.getMonth() + 1}月${d.getDate()}日 ${WEEKDAYS[d.getDay()]}`;
  }
  function chineseDateLabel(d) {
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 ${WEEKDAYS[d.getDay()]}`;
  }
  function monthTitleLabel(d) {
    return `${d.getFullYear()}年${d.getMonth() + 1}月`;
  }
  // 周起止区间（对齐 ClockFormatters.weekRange）：起日写全年月日，止日同年只写月日、跨年补全年月日
  function weekRangeLabel(start) {
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    const sameYear = start.getFullYear() === end.getFullYear();
    const endText = sameYear
      ? `${end.getMonth() + 1}月${end.getDate()}日`
      : `${end.getFullYear()}年${end.getMonth() + 1}月${end.getDate()}日`;
    return `${start.getFullYear()}年${start.getMonth() + 1}月${start.getDate()}日 – ${endText}`;
  }
  function shiftMonthYMD(ymd, n) {
    const d = parseYMD(ymd);
    d.setDate(1);
    d.setMonth(d.getMonth() + n);
    return toYMD(d);
  }
  function daysInGrid(monthDate) {
    const y = monthDate.getFullYear();
    const m = monthDate.getMonth();
    const last = new Date(y, m + 1, 0).getDate();
    const cells = Array(new Date(y, m, 1).getDay()).fill(null);
    for (let day = 1; day <= last; day++) cells.push(new Date(y, m, day));
    while (cells.length % 7) cells.push(null);
    while (cells.length < 42) cells.push(null);
    return cells;
  }
  function datePickGrid(monthYmd, selectedYmd) {
    const kind = S.overlayData?.kind;
    // 操作记录换日（V10.109）：记录按真实时间写入，日历也按真实「今天」算，只到今天为止
    const today = kind === "opDay" ? new Date() : demoDate();
    const selected = parseYMD(selectedYmd);
    const rule = S.draft?.rule || "daily";
    const ops = S.ops || [];
    let minStart = kind === "opDay"
      ? startDay(ops.length ? new Date(ops[ops.length - 1].at) : today)
      : kind === "customDur"
        ? Math.max(startDay(today), startDay(customDurEarliestEnd(rule)))
        : startDay(today);
    const maxStart = kind === "opDay" ? startDay(today) : null;
    if (S.overlayData?.minYmd) minStart = Math.max(minStart, startDay(parseYMD(S.overlayData.minYmd)));
    return daysInGrid(parseYMD(monthYmd)).map((d) => {
      if (!d) return `<div class="dp-cell"></div>`;
      const ymd = toYMD(d);
      const blocked = startDay(d) < minStart || (maxStart != null && startDay(d) > maxStart);
      const isToday = toYMD(d) === toYMD(today);
      const on = startDay(d) === startDay(selected);
      const cls = ["dp-num", on && "on", !on && isToday && "today", !on && blocked && "past"].filter(Boolean).join(" ");
      const act = blocked ? "disabled" : `data-act="pickCalDay" data-ymd="${ymd}"`;
      return `<button class="dp-cell" ${act} type="button"><span class="${cls}">${d.getDate()}</span></button>`;
    }).join("");
  }
  function blockOf(h) { return BLOCKS.find((b) => h >= b.start && h < b.end) || BLOCKS[6]; }
  function spoken(h, m) { return `${blockOf(h).title}${h}:${pad(m)}`; }
  function greeting() {
    const tasks = liveTasks();
    const allDone = tasks.length > 0 && tasks.every((t) => S.completed[t.id]);
    if (allDone) return "今天都照顾好了，真棒";
    if (!S.enrolled) return "慢慢来，从创建计划开始";
    const h = new Date().getHours();
    if (h < 6) return "夜深了，安心歇一歇";
    if (h < 9) return "早上好，慢慢开启今天";
    if (h < 12) return "上午安稳，按时吃药休息";
    if (h < 14) return "午间歇一歇，别太着急";
    if (h < 18) return "下午慢慢来，身体最要紧";
    if (h < 21) return "傍晚放缓脚步，今天辛苦了";
    return "夜幕已至，好好休息吧";
  }
  function bmi() {
    const v = S.weight / ((S.height / 100) ** 2);
    return v.toFixed(1);
  }
  function cap(icon, title, extra = "", actName = "back") {
    return `<button class="cap ${extra}" type="button" data-act="${actName}">${icon}${title}</button>`;
  }
  function navBar(left, title, right = "") {
    return `<div class="nav-row rel">${left}<div class="nav-title">${title}</div>${right || `<span style="width:36px"></span>`}</div>`;
  }
  function badge(cat, done, seal) {
    const cls = done ? "done" : cat === "appointment" ? "appt" : "";
    return `<div class="badge ${cls}">${seal || ""}<img src="${A.task[cat]}" alt="" /></div>`;
  }
  function toast(msg) {
    S.toast = msg;
    render();
    // 只清自己那条：连发两条时，前一条的定时器不能把后一条提前抹掉
    setTimeout(() => {
      if (S.toast !== msg) return;
      S.toast = "";
      render();
    }, 1600);
  }

  const DOC_CATS = [
    { id: "dischargeRecord", t: "出院记录", req: true, hint: "对准出院小结，保持画面清晰" },
    { id: "surgeryRecord", t: "手术记录", req: false, hint: "对准手术记录，保持画面清晰" },
    { id: "admissionRecord", t: "入院记录", req: false, hint: "对准入院记录，保持画面清晰" },
    { id: "labReport", t: "化验单", req: false, hint: "对准化验单，避免反光与遮挡" },
    { id: "ecg", t: "心电图", req: false, hint: "对准心电图，保持画面清晰" },
    { id: "ultrasound", t: "超声检查", req: false, hint: "对准超声报告，避免反光与遮挡" },
    { id: "ct", t: "CT", req: false, hint: "对准CT报告，避免反光与遮挡" },
    { id: "other", t: "其他", req: false, hint: "对准文档，保持画面清晰" },
  ];
  function isVisitCapture() { return S.captureMode === "archive" && S.reportKind === "visit"; }
  function docCat(id) {
    return DOC_CATS.find((c) => c.id === id) || { id: "reviewReport", t: "复查报告", req: true, hint: "对准复查报告，保持画面清晰" };
  }
  function cnOrdinal(n) {
    const w = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
    return n >= 1 && n <= 10 ? `第${w[n]}` : `第${n}`;
  }
  function seedDocGroups(pages = 0) {
    S.docSeq = 1;
    S.docGroups = isVisitCapture()
      ? [{ id: 1, cat: "reviewReport", pages }]
      : [{ id: 1, cat: "dischargeRecord", pages }];
    S.activeGroup = 1;
    S.pendingCat = S.docGroups[0].cat;
    S.catPickerMode = "newGroup";
    S.catPickerGroup = null;
  }
  function activeDoc() {
    return (S.docGroups || []).find((g) => g.id === S.activeGroup) || S.docGroups[0];
  }
  function groupDisplayName(g) {
    if (isVisitCapture()) {
      const i = S.docGroups.findIndex((x) => x.id === g.id);
      return `${cnOrdinal(i + 1)}次复查`;
    }
    const same = S.docGroups.filter((x) => x.cat === g.cat);
    if (same.length > 1) {
      const i = same.findIndex((x) => x.id === g.id);
      return `${docCat(g.cat).t}${i + 1}`;
    }
    return docCat(g.cat).t;
  }
  function canDeleteDocGroup(g) {
    if (isVisitCapture()) return S.docGroups.length > 1;
    if (S.captureMode === "archive") return true;
    if (!docCat(g.cat).req) return true;
    return S.docGroups.filter((x) => x.cat === g.cat).length > 1;
  }
  function canSubmitCapture() {
    if (S.captureMode === "archive") return S.docGroups.some((g) => g.pages > 0);
    return S.docGroups.some((g) => g.cat === "dischargeRecord" && g.pages > 0);
  }
  function submitBlockedHint() {
    if (S.captureMode !== "archive") return "请先拍摄出院记录（必传）";
    if (isVisitCapture()) return "请先拍摄复查报告";
    return "请先拍摄至少一组资料";
  }
  function startNewDocGroup(cat) {
    S.docSeq += 1;
    S.docGroups.push({ id: S.docSeq, cat, pages: 0 });
    S.activeGroup = S.docSeq;
  }
  function toastHTML() {
    if (!S.toast) return "";
    return `<div class="toast">${I.warn}${S.toast}</div>`;
  }
  function personHasVip(personName) {
    const nm = (personName || S.currentPersonName || "李建国").trim();
    if (!S.vipByPerson) S.vipByPerson = { "李建国": true };
    return !!S.vipByPerson[nm];
  }
  function syncPersonVipState(personName) {
    const nm = (personName || S.currentPersonName || "李建国").trim();
    if (!S.vipByPerson) S.vipByPerson = { "李建国": true };
    if (S.gen === "0.0") {
      S.vip = false;
      S.vipUntil = null;
      return;
    }
    const isVip = !!S.vipByPerson[nm];
    S.vip = isVip;
    if (isVip) {
      if (!S.vipUntil) {
        const d = new Date();
        d.setFullYear(d.getFullYear() + 1);
        S.vipUntil = d.getTime();
      }
    } else {
      S.vipUntil = null;
    }
  }
  function ensureCareGraph() {
    if (!S.vipByPerson) {
      S.vipByPerson = { "李建国": true };
    }
    if (!S.demoPeople || !S.demoPeople.length) {
      S.demoPeople = [
        { name: "李建国", gender: "男", age: 58, height: 170, weight: 75, phone: "138****5678", phoneRaw: "13800135678" },
        { name: "王芳", gender: "女", age: 55, height: 162, weight: 58, phone: "139****2210", phoneRaw: "13900132210" },
        { name: "张桂兰", gender: "女", age: 78, height: 158, weight: 56, phone: "137****9021", phoneRaw: "13700139021" },
        { name: "李浩然", gender: "男", age: 32, height: 176, weight: 70, phone: "136****4512", phoneRaw: "13600134512" },
        { name: "陈建华", gender: "男", age: 60, height: 172, weight: 68, phone: "135****7788", phoneRaw: "13500137788" },
      ];
    } else {
      const extras = [
        { name: "李浩然", gender: "男", age: 32, height: 176, weight: 70, phone: "136****4512", phoneRaw: "13600134512" },
        { name: "陈建华", gender: "男", age: 60, height: 172, weight: 68, phone: "135****7788", phoneRaw: "13500137788" },
      ];
      extras.forEach((ex) => {
        if (!S.demoPeople.some((p) => p.name === ex.name)) S.demoPeople.push(ex);
      });
    }
    if (!S.careBonds) {
      S.careBonds = [
        { id: "b1", guardianName: "王芳", guardianPhone: "139****2210", guardianPhoneRaw: "13900132210", wardName: "李建国", wardPhone: "138****5678", wardPhoneRaw: "13800135678", relation: "配偶", confirmed: true, status: "confirmed", initiatedByName: "李建国", initiatedBy: "ward", hasUnreadAcceptReturn: false },
        { id: "b2", guardianName: "张桂兰", guardianPhone: "137****9021", guardianPhoneRaw: "13700139021", wardName: "李建国", wardPhone: "138****5678", wardPhoneRaw: "13800135678", relation: "父母", confirmed: true, status: "confirmed", initiatedByName: "李建国", initiatedBy: "ward", hasUnreadAcceptReturn: false },
      ];
    } else {
      S.careBonds.forEach((b) => {
        if (!b.status) b.status = b.confirmed ? "confirmed" : "pending";
        if (!b.initiatedByName) {
          b.initiatedByName = b.initiatedBy === "guardian" ? b.guardianName : b.wardName;
        }
      });
    }
    if (!S.currentPersonName) S.currentPersonName = "李建国";
    if (!S.pendingPersonPopups) S.pendingPersonPopups = {};
    if (!S.careSheetDraft) S.careSheetDraft = { name: "", phone: "", rel: "配偶" };
    if (!S.careProxyRequests) {
      S.careProxyRequests = [
        {
          id: "pr_preset_1",
          senderName: "王芳",
          recipientName: "李建国",
          kind: "remind",
          targetTaskId: "t14",
          taskSnapshot: { id: "t14", title: "晚间散步", cat: "exercise", h: 19, m: 30, cycle: true, note: "饭后半小时慢走 20 分钟" },
          summaryNote: "按时提醒",
          status: "pending",
          senderAcknowledged: false,
          createdAt: Date.now() - 600000,
        },
        {
          id: "pr_preset_2",
          senderName: "李建国",
          recipientName: "张桂兰",
          kind: "checkIn",
          targetTaskId: "zgl_t1",
          taskSnapshot: { id: "zgl_t1", title: "晨起测血压与心率", cat: "monitoring", h: 6, m: 45, cycle: true, note: "晨起静坐5分钟后测量" },
          summaryNote: "代为完成打卡",
          status: "accepted",
          senderAcknowledged: false,
          createdAt: Date.now() - 1800000,
        },
      ];
    }
  }
  function resolvedSelectedFamilyBondFor(personName) {
    ensureCareGraph();
    if (S.famIsAdding) return null;
    const nm = personName || S.currentPersonName || "李建国";
    const confirmed = confirmedFamilyBondsFor(nm);
    if (!confirmed.length) return null;
    if (S.selectedProxyFamilyName) {
      const hit = confirmed.find((b) => bondOtherName(b, nm) === S.selectedProxyFamilyName);
      if (hit) return hit;
    }
    return confirmed[0];
  }
  function resolvedSelectedFamilyNameFor(personName) {
    const nm = personName || S.currentPersonName || "李建国";
    const bond = resolvedSelectedFamilyBondFor(nm);
    return bond ? bondOtherName(bond, nm) : null;
  }
  function incomingProxyRequestsFor(personName) {
    ensureCareGraph();
    const nm = personName || S.currentPersonName || "李建国";
    return S.careProxyRequests.filter((r) => r.status === "pending" && r.recipientName === nm);
  }
  function returnedProxyResultsFor(personName) {
    ensureCareGraph();
    const nm = personName || S.currentPersonName || "李建国";
    return S.careProxyRequests.filter((r) => r.status !== "pending" && !r.senderAcknowledged && r.senderName === nm);
  }
  function outgoingPendingProxyFor(senderName, recipientName) {
    ensureCareGraph();
    const s = senderName || S.currentPersonName || "李建国";
    return S.careProxyRequests.filter((r) => r.status === "pending" && r.senderName === s && (!recipientName || r.recipientName === recipientName));
  }
  function pendingProxyRequestForTask(taskId, senderName, recipientName) {
    return outgoingPendingProxyFor(senderName, recipientName).find((r) => String(r.targetTaskId) === String(taskId) || String(r.taskSnapshot?.id) === String(taskId)) || null;
  }
  function evaluatePlanRiskFor({ personName, cat, title, hour, min, cycle, rule, editingTaskId, isProxyAction }) {
    ensureCareGraph();
    const target = personName || activePersonName() || "李建国";
    const cleanTitle = String(title || "").trim();
    const bucket = ensurePersonStore(target);
    const existingTasks = (target === (S.boundPersonKey || "李建国")) ? SEED : (bucket.tasks || []);
    const dup = existingTasks.find((t) => {
      if (editingTaskId && String(t.id) === String(editingTaskId)) return false;
      return Number(t.h) === Number(hour) && Number(t.m) === Number(min) && String(t.title || "").trim() === cleanTitle;
    });
    if (dup) {
      return {
        hasHardBlock: true,
        hardBlockMessage: `${pad(hour)}:${pad(min)} 已存在同名计划「${cleanTitle}」，请调整时间或名称`,
      };
    }
    const warnings = [];
    let warningTitle = null;
    const personObj = (S.demoPeople || []).find((p) => p.name === target);
    const age = personObj ? personObj.age : 58;
    const isTargetActive = target === activePersonName();
    const hasContra = isTargetActive && (S.contra || (typeof contraindicationHits === "function" && contraindicationHits().length > 0));
    const highBorg = isTargetActive && (S.borg > 7 || (S.symptoms || []).some((x) => ["胸痛", "胸闷", "气促", "头晕", "心悸"].includes(x)));

    if (cat === "exercise") {
      warningTitle = "运动风险提醒";
      if (target === "张桂兰" || age >= 70) {
        warnings.push(`${target}（${age}岁）属于高龄或合并心血管基础病史（如房颤/高血压），首次创建计划未包含运动体测。若存在罕见病、绝对禁忌症或体测量表不达标情况，强行运动存在心血管风险，请确认是否仍要继续创建？`);
      } else if (hasContra || highBorg) {
        warnings.push(`检测到${target}存在运动禁忌症、罕见病风险或体测量表未达标情况，建议先遵循医嘱评估后再开展有氧运动。确定仍要继续创建运动计划吗？`);
      } else if (isProxyAction) {
        warnings.push(`运动计划未在首次出院计划中默认创建。为「${target}」后续创建运动计划前，请提醒并确认对方无罕见心血管疾病、无近30天胸痛晕厥等禁忌症，且体测量表评估达标。是否仍要继续创建？`);
      }
    }

    if ((hour >= 21 || hour < 6) && (cat === "exercise" || cat === "appointment")) {
      if (!warningTitle) warningTitle = "计划时间提醒";
      const catName = cat === "exercise" ? "运动" : "复查";
      warnings.push(`当前设定的时间（${pad(hour)}:${pad(min)}）处于夜间或凌晨休息时段，心血管康复人群不宜在该时段安排${catName}计划，是否仍要继续？`);
    } else if (hour >= 0 && hour < 5 && (cat === "monitoring" || cat === "diet")) {
      if (!warningTitle) warningTitle = "计划时间提醒";
      const catName = cat === "monitoring" ? "测血压" : "饮食";
      warnings.push(`当前设定的时间（${pad(hour)}:${pad(min)}）处于凌晨深睡时段，可能打断睡眠并引起血压波动，建议调整至晨起后，是否仍要继续安排${catName}？`);
    }

    if (cat === "appointment" && cycle && (!rule || rule === "daily")) {
      if (!warningTitle) warningTitle = "复查周期提醒";
      warnings.push("门诊复查通常为特定单日或按月定期复查，当前设置为「每日循环」，可能会每天重复提醒，是否仍要继续？");
    }

    if (cat === "medication" && isProxyAction) {
      if (!warningTitle) warningTitle = "用药核对提醒";
      warnings.push(`代办新增或调整「${target}」的服药计划前，请确认药品名称、剂量与出院医嘱一致，避免重复服药或漏服，是否继续发送给对方确认？`);
    }

    return {
      hasHardBlock: false,
      hasWarning: warnings.length > 0,
      warningTitle: warningTitle || "计划风险提醒",
      warningMessage: warnings.join("\n\n"),
    };
  }
  function proxyActionLabel(kind) {
    if (kind === "remind") return "提醒";
    if (kind === "checkIn") return "代打卡";
    if (kind === "createPlan") return "新增计划";
    if (kind === "updatePlan") return "修改计划";
    if (kind === "deletePlan") return "删除计划";
    return "代办";
  }
  function proxyIncomingTitle(r) {
    const t = r.taskSnapshot?.title || "康复计划";
    if (r.kind === "remind") return `${r.senderName} 提醒你完成「${t}」`;
    if (r.kind === "checkIn") return `${r.senderName} 帮你打卡「${t}」`;
    if (r.kind === "createPlan") return `${r.senderName} 为你新增计划「${t}」`;
    if (r.kind === "updatePlan") return `${r.senderName} 修改了你的计划「${t}」`;
    if (r.kind === "deletePlan") return `${r.senderName} 申请删除计划「${t}」`;
    return `${r.senderName} 发起代办「${t}」`;
  }
  function proxyReturnedTitle(r) {
    const t = r.taskSnapshot?.title || "康复计划";
    const dec = r.status === "accepted" ? "已接受" : "不接受";
    return `${r.recipientName}${dec}你的${proxyActionLabel(r.kind)}「${t}」`;
  }
  function proxyDetailLine(r) {
    const snap = r.taskSnapshot || {};
    const hm = `${pad(snap.h ?? 8)}:${pad(snap.m ?? 0)}`;
    const catName = CAT[snap.cat]?.chip || "事项";
    const extra = r.summaryNote ? ` · ${r.summaryNote}` : "";
    return `${hm} · ${catName}${extra}`;
  }
  function sendProxyRequestFor({ senderName, recipientName, kind, targetTaskId, taskSnapshot, summaryNote }) {
    ensureCareGraph();
    const effId = targetTaskId || taskSnapshot?.id;
    S.careProxyRequests = S.careProxyRequests.filter((r) => !(
      r.senderName === senderName &&
      r.recipientName === recipientName &&
      r.kind === kind &&
      r.status === "pending" &&
      (String(r.targetTaskId) === String(effId) || String(r.taskSnapshot?.id) === String(effId))
    ));
    const req = {
      id: `pr_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      senderName,
      recipientName,
      kind,
      targetTaskId: effId,
      taskSnapshot: { ...taskSnapshot },
      summaryNote: summaryNote || "",
      status: "pending",
      senderAcknowledged: false,
      createdAt: Date.now(),
    };
    S.careProxyRequests.unshift(req);
    return req;
  }
  function applyAcceptedProxyMutationInStore(req) {
    const target = req.recipientName;
    const bucket = ensurePersonStore(target);
    const isCurrentBound = (S.boundPersonKey || "李建国") === target;
    const taskList = isCurrentBound ? SEED : bucket.tasks;
    const compMap = isCurrentBound ? S.completed : (bucket.completed || (bucket.completed = {}));
    const compByMap = isCurrentBound ? S.completedBy : (bucket.completedBy || (bucket.completedBy = {}));
    const remMap = isCurrentBound ? S.remindedTasks : (bucket.remindedTasks || (bucket.remindedTasks = {}));

    const tid = req.targetTaskId || req.taskSnapshot?.id;
    if (req.kind === "remind") {
      if (tid) remMap[tid] = true;
    } else if (req.kind === "checkIn") {
      if (tid) {
        compMap[tid] = true;
        compByMap[tid] = req.senderName;
      }
    } else if (req.kind === "createPlan") {
      const nt = { ...req.taskSnapshot, id: tid || `proxy_${Date.now()}` };
      if (!taskList.some((x) => String(x.id) === String(nt.id))) {
        taskList.push(nt);
        taskList.sort((a, b) => a.h * 60 + a.m - (b.h * 60 + b.m));
      }
    } else if (req.kind === "updatePlan") {
      const idx = taskList.findIndex((x) => String(x.id) === String(tid));
      if (idx >= 0) {
        taskList[idx] = { ...taskList[idx], ...req.taskSnapshot, id: taskList[idx].id };
      } else if (req.taskSnapshot) {
        taskList.push({ ...req.taskSnapshot, id: tid || `proxy_${Date.now()}` });
      }
      taskList.sort((a, b) => a.h * 60 + a.m - (b.h * 60 + b.m));
    } else if (req.kind === "deletePlan") {
      const idx = taskList.findIndex((x) => String(x.id) === String(tid));
      if (idx >= 0) taskList.splice(idx, 1);
      delete compMap[tid];
      delete compByMap[tid];
    }
    if (!isCurrentBound) {
      bucket.tasks = taskList;
      bucket.completed = compMap;
      bucket.completedBy = compByMap;
      bucket.remindedTasks = remMap;
    }
  }
  function bondInvolves(b, personName) {
    return b && (b.guardianName === personName || b.wardName === personName);
  }
  function bondOtherName(b, viewerName) {
    return b.guardianName === viewerName ? b.wardName : b.guardianName;
  }
  function bondOtherPhone(b, viewerName) {
    return b.guardianName === viewerName ? b.wardPhone : b.guardianPhone;
  }
  function bondOtherPhoneRaw(b, viewerName) {
    return b.guardianName === viewerName ? b.wardPhoneRaw : b.guardianPhoneRaw;
  }
  function bondRelationForViewer(b, viewerName) {
    const req = b.initiatedByName || (b.initiatedBy === "guardian" ? b.guardianName : b.wardName);
    const rel = b.relation || "配偶";
    if (viewerName === req) return rel;
    if (rel === "父母") return "子女";
    if (rel === "子女") return "父母";
    return rel;
  }
  function confirmedFamilyBondsFor(personName) {
    ensureCareGraph();
    const nm = personName || S.currentPersonName || "李建国";
    return S.careBonds.filter((b) => b.status === "confirmed" && bondInvolves(b, nm));
  }
  function incomingBindRequestsFor(personName) {
    ensureCareGraph();
    const nm = personName || S.currentPersonName || "李建国";
    return S.careBonds.filter((b) => {
      const req = b.initiatedByName || (b.initiatedBy === "guardian" ? b.guardianName : b.wardName);
      return b.status === "pending" && bondInvolves(b, nm) && req !== nm;
    });
  }
  function outgoingPendingRequestsFor(personName) {
    ensureCareGraph();
    const nm = personName || S.currentPersonName || "李建国";
    return S.careBonds.filter((b) => {
      const req = b.initiatedByName || (b.initiatedBy === "guardian" ? b.guardianName : b.wardName);
      return b.status === "pending" && req === nm;
    });
  }
  function rejectedReturnedRequestsFor(personName) {
    ensureCareGraph();
    const nm = personName || S.currentPersonName || "李建国";
    return S.careBonds.filter((b) => {
      const req = b.initiatedByName || (b.initiatedBy === "guardian" ? b.guardianName : b.wardName);
      return b.status === "rejected" && req === nm;
    });
  }
  function acceptedReturnedBondsFor(personName) {
    ensureCareGraph();
    const nm = personName || S.currentPersonName || "李建国";
    return S.careBonds.filter((b) => {
      const req = b.initiatedByName || (b.initiatedBy === "guardian" ? b.guardianName : b.wardName);
      return b.status === "confirmed" && req === nm && b.hasUnreadAcceptReturn;
    });
  }
  function occupiedFamilySlotsFor(personName) {
    return confirmedFamilyBondsFor(personName).length + outgoingPendingRequestsFor(personName).length;
  }
  function pendingFamilyEventCountFor(personName) {
    return incomingBindRequestsFor(personName).length
      + rejectedReturnedRequestsFor(personName).length
      + acceptedReturnedBondsFor(personName).length
      + incomingProxyRequestsFor(personName).length
      + returnedProxyResultsFor(personName).length;
  }
  function familyManageCaptionFor(personName) {
    const nm = personName || S.currentPersonName || "李建国";
    const confirmedCount = confirmedFamilyBondsFor(nm).length;
    const incomingCount = incomingBindRequestsFor(nm).length + incomingProxyRequestsFor(nm).length;
    const returnedCount = returnedProxyResultsFor(nm).length + rejectedReturnedRequestsFor(nm).length;
    const outgoingCount = outgoingPendingRequestsFor(nm).length;
    if (incomingCount > 0) {
      return confirmedCount > 0
        ? `已绑定 ${confirmedCount} 人 · ${incomingCount} 条待确认`
        : `${incomingCount} 条请求待确认`;
    }
    if (returnedCount > 0 && confirmedCount > 0) {
      return `已绑定 ${confirmedCount} 人 · ${returnedCount} 条回执`;
    }
    if (confirmedCount > 0) {
      return `已绑定 ${confirmedCount} 人`;
    }
    if (outgoingCount > 0) {
      return `待对方确认 ${outgoingCount} 人`;
    }
    return "尚未绑定家属";
  }
  function hasAnyFamilyOrNoticeFor(personName) {
    const nm = personName || S.currentPersonName || "李建国";
    return (
      confirmedFamilyBondsFor(nm).length > 0 ||
      outgoingPendingRequestsFor(nm).length > 0 ||
      pendingFamilyEventCountFor(nm) > 0
    );
  }
  function currentDemoPerson() {
    ensureCareGraph();
    return S.demoPeople.find((p) => p.name === S.currentPersonName) || S.demoPeople[0];
  }
  function activePersonName() {
    ensureCareGraph();
    return S.watchingWardName || S.currentPersonName || "李建国";
  }
  function activeDemoPerson() {
    ensureCareGraph();
    const nm = activePersonName();
    return S.demoPeople.find((p) => p.name === nm) || currentDemoPerson();
  }
  function homeHeaderTitle() {
    return `${S.name || "李建国"}的一天`;
  }
  function buildPresetDataForPerson(personName) {
    const baseHour = Date.now();
    if (personName === "张桂兰") {
      return {
        tasks: [
          { id: "zgl_t1", title: "晨起测血压与心率", h: 6, m: 45, cat: "monitoring", note: "高血压伴房颤随访，晨起静坐5分钟后测量" },
          { id: "zgl_t2", title: "温水润燥", h: 7, m: 15, cat: "diet", note: "晨起饮温开水 200 ml" },
          { id: "zgl_t3", title: "燕麦低脂早餐", h: 7, m: 45, cat: "diet", note: "燕麦粥配水煮蛋，清淡少盐" },
          { id: "zgl_t4", title: "服用苯磺酸氨氯地平片", h: 8, m: 15, cat: "medication", note: "5mg · 每日1次，控制晨峰血压" },
          { id: "zgl_t5", title: "服用利伐沙班片", h: 8, m: 30, cat: "medication", note: "15mg · 随餐服用，预防房颤血栓" },
          { id: "zgl_t6", title: "公园太极慢走", h: 9, m: 30, cat: "exercise", note: "柔和慢走30分钟，心率 ≤ 105 bpm" },
          { id: "zgl_t7", title: "午间低盐控油餐", h: 12, m: 0, cat: "diet", note: "多深色蔬菜与鱼肉，少盐少油" },
          { id: "zgl_t8", title: "午间安神小憩", h: 13, m: 0, cat: "rest", note: "静卧休息 30 分钟" },
          { id: "zgl_t9", title: "肩颈柔韧拉伸", h: 15, m: 30, cat: "exercise", note: "八段锦上肢舒展 · 15 分钟" },
          { id: "zgl_t10", title: "傍晚复测血压", h: 17, m: 30, cat: "monitoring", note: "记录傍晚血压与心率波动" },
          { id: "zgl_t11", title: "清淡杂粮晚餐", h: 18, m: 15, cat: "diet", note: "七分饱，避免浓茶与咖啡" },
          { id: "zgl_t12", title: "睡前温水泡脚", h: 20, m: 30, cat: "rest", note: "40℃温水泡脚15分钟，促睡眠" },
          { id: "zgl_t13", title: "规律入睡", h: 21, m: 30, cat: "rest", note: "调暗卧室灯光，保持情绪平稳" },
          { id: "zgl_t14", title: "心内科房颤专病复查", h: 9, m: 30, cat: "appointment", note: "每月复查凝血功能与动态心电图" },
        ],
        completed: { zgl_t1: true, zgl_t2: true, zgl_t4: true },
        completedBy: {},
        remindedTasks: {},
        vitalsWeek: [
          { day: "一", sys: 136, dia: 84, hr: 68 },
          { day: "二", sys: 142, dia: 86, hr: 84 },
          { day: "三", sys: 134, dia: 82, hr: 72 },
          { day: "四", sys: 144, dia: 88, hr: 86 },
          { day: "五", sys: 135, dia: 83, hr: 70 },
          { day: "六", sys: 133, dia: 81, hr: 82 },
          { day: "日", sys: 134, dia: 82, hr: 76 },
        ],
        vitalsLog: [
          { time: "06:50", sys: 134, dia: 82, hr: 76, hw: true },
          { time: "17:35", sys: 138, dia: 84, hr: 79, hw: false },
        ],
        walkRecords: [
          { ymd: "2026-09-11", label: "今天", items: [
            { key: "zgl_0.82|09:32 – 09:56", card: ["0.82", "1180", "09:32 – 09:56", 1] },
          ] },
          { ymd: "2026-09-10", label: "昨天", items: [
            { key: "zgl_1.18|16:10 – 16:40", card: ["1.18", "1620", "16:10 – 16:40", 3] },
          ] },
        ],
        recentWalkText: "0.82 公里 · 24 分钟 · 1180 步",
        report: {
          overall: "张桂兰出院后抗凝与降压用药总体规律，近两周晨峰血压控制在 132–138 / 80–85 mmHg 区间，偶有阵发性心悸但无黑曚晕厥。建议继续每日晨起静坐后测血压、坚持柔和太极慢走，按期复查凝血功能与动态心电图。",
          baseline: "张桂兰既往诊断为高血压2级伴阵发性心房颤动。超声心动图提示左房轻度增大、LVEF 约 58%，动态心电图示偶发房早及短阵房颤。当前长期规律服用苯磺酸氨氯地平片与利伐沙班片。",
          visit: "最近一次心内科房颤专病复查：凝血功能 INR 及肾功能平稳，动态心电图未见长间歇，维持当前抗凝与降压方案。",
          followupDate: "2026年8月18日",
          followupPrevDate: "2026年7月15日",
          followupPrevSummary: "睡眠偶有浅眠，太极慢走耐量稳定，无胸痛黑曚。",
          analysisBaseline: "高血压伴房颤专病基线已归档（共 4 张）。",
          analysisVisit: "已完成 3 次心内科房颤专病复查记录。",
          analysisFollowup: "最近一次随访提示睡眠浅眠，慢走耐量良好。",
        },
        archiveBaseline: [
          { title: "出院记录", pages: 2 },
          { title: "心电图", pages: 1 },
          { title: "超声检查", pages: 1 },
        ],
        archiveReview: [
          { title: "第一次复查", pages: 2 },
          { title: "第二次复查", pages: 1 },
        ],
        ops: [
          { id: "op_zgl_0", role: "family", actor: "李建国", actorId: "bond_ljg_zgl", targetName: "张桂兰", action: "打卡了", place: "首页", at: baseHour - 900000, how: "服用利伐沙班片", notifiedNames: ["张桂兰"] },
          { id: "op_zgl_1", role: "patient", actor: "张桂兰", targetName: "张桂兰", action: "打卡了", place: "首页", at: baseHour - 1800000, how: "服用苯磺酸氨氯地平片", notifiedNames: ["李建国"] },
          { id: "op_zgl_2", role: "patient", actor: "张桂兰", targetName: "张桂兰", action: "同步了血压", place: "血压监测", at: baseHour - 3600000, how: "哈宝血压计，血压 134/83，心率 76 bpm", notifiedNames: ["李建国"] },
          { id: "op_zgl_3", role: "family", actor: "李建国", actorId: "bond_ljg_zgl", targetName: "张桂兰", action: "提醒了", place: "首页", at: baseHour - 86400000, how: "傍晚复测血压", notifiedNames: ["张桂兰"] },
        ],
      };
    }
    if (personName === "王芳") {
      return {
        tasks: [
          { id: "wf_t1", title: "晨起测静息心率", h: 7, m: 15, cat: "monitoring", note: "记录晨起血压与静息心率" },
          { id: "wf_t2", title: "高蛋白营养早餐", h: 7, m: 45, cat: "diet", note: "全麦面包 + 牛奶 + 蓝莓" },
          { id: "wf_t3", title: "服用辅酶Q10胶囊", h: 8, m: 15, cat: "medication", note: "1粒 · 随早餐后温水送服" },
          { id: "wf_t4", title: "工间颈肩舒展操", h: 10, m: 30, cat: "exercise", note: "久坐活动肩颈 · 10 分钟" },
          { id: "wf_t5", title: "轻食少油午餐", h: 12, m: 15, cat: "diet", note: "杂粮饭 + 鸡胸肉 + 西兰花" },
          { id: "wf_t6", title: "午间呼吸冥想", h: 13, m: 15, cat: "rest", note: "正念呼吸放松 15 分钟" },
          { id: "wf_t7", title: "下午饮水达标", h: 15, m: 30, cat: "diet", note: "补充温水 500 ml，少喝含糖饮料" },
          { id: "wf_t8", title: "傍晚有氧健步走", h: 18, m: 30, cat: "exercise", note: "快走 35 分钟，目标心率 115–125 bpm" },
          { id: "wf_t9", title: "规律早睡打卡", h: 22, m: 30, cat: "rest", note: "放下手机，保证 7.5 小时睡眠" },
        ],
        completed: { wf_t1: true, wf_t2: true, wf_t3: true, wf_t4: true },
        completedBy: {},
        remindedTasks: {},
        vitalsWeek: [
          { day: "一", sys: 114, dia: 72, hr: 57 },
          { day: "二", sys: 116, dia: 74, hr: 59 },
          { day: "三", sys: 112, dia: 70, hr: 56 },
          { day: "四", sys: 115, dia: 73, hr: 58 },
          { day: "五", sys: 113, dia: 71, hr: 57 },
          { day: "六", sys: 114, dia: 72, hr: 56 },
          { day: "日", sys: 114, dia: 72, hr: 58 },
        ],
        vitalsLog: [
          { time: "07:18", sys: 114, dia: 72, hr: 66, hw: false },
        ],
        walkRecords: [
          { ymd: "2026-09-11", label: "今天", items: [
            { key: "wf_2.86|18:32 – 19:04", card: ["2.86", "3820", "18:32 – 19:04", 2] },
          ] },
          { ymd: "2026-09-10", label: "昨天", items: [
            { key: "wf_2.40|18:40 – 19:08", card: ["2.40", "3210", "18:40 – 19:08", 0] },
          ] },
        ],
        recentWalkText: "2.86 公里 · 32 分钟 · 3820 步",
        report: {
          overall: "王芳各项体征处于理想健康范围，平均血压 114/72 mmHg、静息心率 66 bpm，有氧健步走执行率高。建议继续保持规律作息、颈肩舒展操与充足饮水。",
          baseline: "王芳年度心肺健康评估基线：静息心电图正常窦性心律，血脂及血糖指标均在理想区间，心肺运动耐量优良。",
          visit: "最近一次年度心血管健康复查：颈动脉超声及血脂四项均正常，建议每年定期复查。",
          followupDate: "2026年8月20日",
          followupPrevDate: "2026年6月10日",
          followupPrevSummary: "日常精力充沛，有氧健步走耐量良好，睡眠质量高。",
          analysisBaseline: "年度体检心电图与化验单已归档（共 2 张）。",
          analysisVisit: "已完成 1 次年度心血管健康复查。",
          analysisFollowup: "最近一次随访提示身心状态优良。",
        },
        archiveBaseline: [
          { title: "化验单", pages: 1 },
          { title: "心电图", pages: 1 },
        ],
        archiveReview: [
          { title: "第一次复查", pages: 1 },
        ],
        ops: [
          { id: "op_wf_0", role: "family", actor: "王芳", actorId: "bond_wf_ljg", targetName: "李建国", action: "打卡了", place: "首页", at: baseHour - 600000, how: "晨起温水", notifiedNames: ["李建国"] },
          { id: "op_wf_1", role: "patient", actor: "李建国", targetName: "李建国", action: "完成了散步", place: "运动", at: baseHour - 1800000, how: "1.24 公里（晨间散步 已完成）", notifiedNames: ["王芳"] },
          { id: "op_wf_2", role: "patient", actor: "王芳", targetName: "王芳", action: "打卡了", place: "首页", at: baseHour - 3600000, how: "服用辅酶Q10胶囊", notifiedNames: [] },
          { id: "op_wf_3", role: "patient", actor: "李建国", targetName: "李建国", action: "打卡了", place: "首页", at: baseHour - 5400000, how: "服用阿司匹林肠溶片", notifiedNames: ["王芳"] },
          { id: "op_wf_4", role: "patient", actor: "王芳", targetName: "王芳", action: "同步了血压", place: "血压监测", at: baseHour - 7200000, how: "血压 112/70，心率 64 bpm", notifiedNames: [] },
          { id: "op_wf_5", role: "family", actor: "王芳", actorId: "bond_wf_ljg", targetName: "李建国", action: "提醒了", place: "首页", at: baseHour - 86400000, how: "晚间散步", notifiedNames: ["李建国"] },
        ],
      };
    }
    return {
      tasks: SEED0.map((t) => ({ ...t })),
      completed: { t1: true, t2: true },
      completedBy: {},
      remindedTasks: {},
      vitalsWeek: VITALS_WEEK.map((d) => ({ ...d })),
      vitalsLog: [
        { time: "07:12", sys: 126, dia: 78, hr: 72, hw: true },
        { time: "19:40", sys: 132, dia: 82, hr: 76, hw: true },
      ],
      walkRecords: WALK_RECORDS.map((d) => ({ ...d, items: d.items.map((it) => ({ ...it, card: it.card.slice() })) })),
      recentWalkText: "0.68 公里 · 12 分钟 · 920 步",
      report: {
        overall: "出院后用药规律，血压总体平稳。复查未见新发缺血改变。随访问卷提示日常活动轻度受限，建议保持散步节奏、低盐饮食，复查按每月 6 日执行。",
        baseline: "出院诊断为急性前壁心梗 PCI 术后。EF 约 52%。用药含抗血小板、他汀与β阻滞剂，与当前计划一致。",
        visit: "尚无复查批次。上传复查资料后，会按批次更新这段解读。",
        followupDate: "2026年7月28日",
        followupPrevDate: "2026年6月25日",
        followupPrevSummary: "总体健康尚可，轻度活动受限，建议继续规律散步。",
        analysisBaseline: "出院小结已解析，用药与诊断齐全。",
        analysisVisit: "尚无复查批次。",
        analysisFollowup: "最近一次随访提示轻度活动受限。",
      },
      archiveBaseline: [
        { title: "出院记录", pages: 3 },
        { title: "检查报告", pages: 2 },
      ],
      archiveReview: [],
      ops: [
        { id: "op_ljg_0", role: "family", actor: "王芳", actorId: "bond_wf_ljg", targetName: "李建国", action: "打卡了", place: "首页", at: baseHour - 600000, how: "晨起温水", notifiedNames: ["李建国"] },
        { id: "op_ljg_1", role: "family", actor: "李建国", actorId: "bond_ljg_zgl", targetName: "张桂兰", action: "打卡了", place: "首页", at: baseHour - 900000, how: "服用利伐沙班片", notifiedNames: ["张桂兰"] },
        { id: "op_ljg_2", role: "patient", actor: "李建国", targetName: "李建国", action: "完成了散步", place: "运动", at: baseHour - 1800000, how: "1.24 公里（晨间散步 已完成）", notifiedNames: ["王芳"] },
        { id: "op_ljg_3", role: "patient", actor: "张桂兰", targetName: "张桂兰", action: "打卡了", place: "首页", at: baseHour - 3000000, how: "服用苯磺酸氨氯地平片", notifiedNames: ["李建国"] },
        { id: "op_ljg_4", role: "patient", actor: "李建国", targetName: "李建国", action: "打卡了", place: "首页", at: baseHour - 5400000, how: "服用阿司匹林肠溶片", notifiedNames: ["王芳"] },
        { id: "op_ljg_5", role: "patient", actor: "李建国", targetName: "李建国", action: "同步了血压", place: "血压监测", at: baseHour - 7200000, how: "哈宝血压计，血压 122/76，心率 70 bpm", notifiedNames: ["王芳"] },
        { id: "op_ljg_6", role: "family", actor: "王芳", actorId: "bond_wf_ljg", targetName: "李建国", action: "提醒了", place: "首页", at: baseHour - 86400000, how: "晚间散步", notifiedNames: ["李建国"] },
        { id: "op_ljg_7", role: "family", actor: "李建国", actorId: "bond_ljg_zgl", targetName: "张桂兰", action: "提醒了", place: "首页", at: baseHour - 90000000, how: "傍晚复测血压", notifiedNames: ["张桂兰"] },
      ],
    };
  }
  function ensurePersonStore(personName) {
    if (!S.personStoreMap) S.personStoreMap = {};
    const nm = personName || "李建国";
    if (!S.personStoreMap[nm]) {
      S.personStoreMap[nm] = buildPresetDataForPerson(nm);
    }
    return S.personStoreMap[nm];
  }
  function activePersonStore() {
    return ensurePersonStore(activePersonName());
  }
  function hasConfirmedGuardiansForActivePerson() {
    ensureCareGraph();
    const target = activePersonName();
    return myGuardiansList(target).some((b) => b.confirmed);
  }
  function confirmedGuardianNamesSummaryForActivePerson() {
    ensureCareGraph();
    const target = activePersonName();
    return myGuardiansList(target)
      .filter((b) => b.confirmed)
      .map((b) => b.guardianName)
      .join("、");
  }
  function hasConfirmedGuardiansForCurrentPerson() {
    ensureCareGraph();
    const target = S.currentPersonName || "李建国";
    return myGuardiansList(target).some((b) => b.confirmed);
  }
  function confirmedGuardianNamesSummaryForCurrentPerson() {
    ensureCareGraph();
    const target = S.currentPersonName || "李建国";
    return myGuardiansList(target)
      .filter((b) => b.confirmed)
      .map((b) => b.guardianName)
      .join("、");
  }
  const PROFILE_CONTEXT_SCREENS = new Set([
    "profile",
    "family",
    "health-record",
    "patient-edit",
    "notify",
    "activity",
    "hardware",
    "hardware-scan",
    "vip",
    "privacy",
    "service-terms",
  ]);
  function isProfileContextScreen(screenId) {
    if (PROFILE_CONTEXT_SCREENS.has(screenId)) return true;
    return (S.frames || []).some((f) => f && f.id === "profile");
  }
  function syncActivePersonContext(nextActivePersonName) {
    ensureCareGraph();
    if (!S.personStoreMap) S.personStoreMap = {};
    const prevKey = S.boundPersonKey || "李建国";
    if (S.personStoreMap[prevKey]) {
      S.personStoreMap[prevKey].tasks = SEED.map((t) => ({ ...t }));
      S.personStoreMap[prevKey].completed = { ...(S.completed || {}) };
      S.personStoreMap[prevKey].completedBy = { ...(S.completedBy || {}) };
      S.personStoreMap[prevKey].remindedTasks = { ...(S.remindedTasks || {}) };
      S.personStoreMap[prevKey].vitalsLog = (S.vitalsLog || []).map((r) => ({ ...r }));
      S.personStoreMap[prevKey].archiveBaseline = (ARCHIVE_DEMO.baseline.groups || []).map((g) => ({ ...g }));
      S.personStoreMap[prevKey].archiveReview = (ARCHIVE_DEMO.review.groups || []).map((g) => ({ ...g }));
      S.personStoreMap[prevKey].ops = (S.ops || []).map((o) => ({ ...o }));
      S.personStoreMap[prevKey].notifySelf = S.notifySelf !== false;
      S.personStoreMap[prevKey].notifyFamily = !!S.notifyFamily;
      S.personStoreMap[prevKey].cats = { ...(S.cats || {}) };
    }
    const targetKey = nextActivePersonName || activePersonName();
    const bucket = ensurePersonStore(targetKey);
    S.boundPersonKey = targetKey;
    SEED.length = 0;
    bucket.tasks.forEach((t) => SEED.push({ ...t }));
    S.completed = { ...(bucket.completed || {}) };
    S.completedBy = { ...(bucket.completedBy || {}) };
    S.remindedTasks = { ...(bucket.remindedTasks || {}) };
    S.vitalsLog = (bucket.vitalsLog || []).map((r) => ({ ...r }));
    ARCHIVE_DEMO.baseline.groups = (bucket.archiveBaseline || []).map((g) => ({ ...g }));
    ARCHIVE_DEMO.review.groups = (bucket.archiveReview || []).map((g) => ({ ...g }));
    S.ops = (bucket.ops || []).map((o) => ({ ...o }));
    S.notifySelf = bucket.notifySelf !== undefined ? bucket.notifySelf : true;
    S.notifyFamily = bucket.notifyFamily !== undefined
      ? bucket.notifyFamily
      : myGuardiansList(targetKey).some((b) => b.confirmed);
    if (bucket.cats) S.cats = { ...bucket.cats };
    S.opDay = "";
    const p = S.demoPeople.find((x) => x.name === targetKey) || currentDemoPerson();
    S.name = p.name;
    S.gender = p.gender;
    S.age = p.age || 58;
    S.height = p.height;
    S.weight = p.weight;
    syncLegacyListsFromBonds();
  }
  function ensureDemoPersonExists(name, phoneRaw, fallbackGender, fallbackAge) {
    ensureCareGraph();
    let found = S.demoPeople.find((p) => p.name === name);
    if (!found) {
      const masked = String(phoneRaw || "13900130000").replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
      found = {
        name,
        gender: fallbackGender || "男",
        age: fallbackAge || 58,
        height: (fallbackGender === "女") ? 160 : 170,
        weight: (fallbackGender === "女") ? 58 : 70,
        phone: masked,
        phoneRaw: phoneRaw || "13900130000",
      };
      S.demoPeople.push(found);
    }
    return found;
  }
  function myGuardiansList(personName) {
    ensureCareGraph();
    const nm = personName || S.currentPersonName;
    return S.careBonds.filter((b) => b.status !== "rejected" && bondInvolves(b, nm));
  }
  function myWardsList(personName) {
    ensureCareGraph();
    const nm = personName || S.currentPersonName;
    return S.careBonds.filter((b) => b.status !== "rejected" && bondInvolves(b, nm));
  }
  function pendingIncomingBondFor(personName) {
    return incomingBindRequestsFor(personName)[0] || null;
  }
  function unreadPopupCountForPerson(personName) {
    return pendingFamilyEventCountFor(personName);
  }
  function otherPeopleUnreadTotal() {
    ensureCareGraph();
    return S.demoPeople
      .filter((p) => p.name !== S.currentPersonName)
      .reduce((acc, p) => acc + unreadPopupCountForPerson(p.name), 0);
  }
  function syncLegacyListsFromBonds() {
    ensureCareGraph();
    const cur = S.currentPersonName;
    const activeTarget = activePersonName();
    S.family = confirmedFamilyBondsFor(activeTarget).map((b) => ({
      id: b.id,
      name: bondOtherName(b, activeTarget),
      rel: bondRelationForViewer(b, activeTarget),
      phone: bondOtherPhone(b, activeTarget),
      phoneRaw: bondOtherPhoneRaw(b, activeTarget),
      confirmed: true,
    }));
    S.guardedPatients = myWardsList(cur).map((b) => {
      const p = S.demoPeople.find((x) => x.name === b.wardName) || { gender: "女", age: 56, height: 160, weight: 61 };
      return {
        id: b.id,
        name: b.wardName,
        gender: p.gender,
        age: p.age,
        height: p.height,
        weight: p.weight,
        rel: b.relation,
        phone: b.wardPhone,
        phoneRaw: b.wardPhoneRaw,
        confirmed: b.confirmed,
      };
    });
  }
  function noticeRecipientRole(n) {
    if (!n) return "patient";
    return n.kind === "familyRemindPlan" || n.kind === "familyRemindExercise" ? "patient" : "family";
  }
  function noticeMatchesCurrentPerson(n) {
    if (!n) return false;
    ensureCareGraph();
    if (n.recipientPerson) return n.recipientPerson === S.currentPersonName;
    return noticeRecipientRole(n) === shownRole();
  }
  function consultUnreadFor(role) {
    return 0;
  }
  let sysBannerTimer = null;
  function presentCareNotice(notice) {
    // 已统一为首页 App 内通知栏，不再弹出居中弹窗或跨页横幅
  }
  function careNoticeBubbleText(notice) {
    const t = String(notice?.title || "").trim();
    const d = String(notice?.detail || "").trim();
    if (!d) return t;
    const sep = /[。！？]$/.test(t) ? "" : "：";
    return `${t}${sep}${d}`;
  }
  function appendCareBubbleToMessages(notice, targetPerson) {
    if (!S.messages) S.messages = [];
    const target = (targetPerson || notice.recipientPerson || S.currentPersonName || "李建国").trim();
    S.messages = S.messages.filter(
      (m) => !(m.isCareBubble && m.recipientPerson === target && m.noticeTitle === notice.title && m.noticeKind === notice.kind)
    );
    S.messages.push({
      id: notice.id || `cb_${Date.now()}`,
      who: "ai",
      t: careNoticeBubbleText(notice),
      time: notice.time || "",
      isCareBubble: true,
      recipientPerson: target,
      noticeTitle: notice.title,
      noticeKind: notice.kind,
      bondId: notice.bondId || null,
      senderName: notice.senderName || "",
      bindDecision: notice.kind === "bindRequest" ? (notice.bindDecision || "pending") : null,
    });
  }
  function updateCareBubbleBindDecision(bondId, decision) {
    if (!S.messages || !bondId) return;
    S.messages.forEach((m) => {
      if (m.isCareBubble && m.noticeKind === "bindRequest" && String(m.bondId) === String(bondId)) {
        m.bindDecision = decision;
      }
    });
  }
  function resolveCareBubbleBindDecision(m) {
    if (!m || m.noticeKind !== "bindRequest") return null;
    if (m.bindDecision && m.bindDecision !== "pending") return m.bindDecision;
    ensureCareGraph();
    const bonds = S.careBonds || [];
    if (m.bondId) {
      const b = bonds.find((x) => String(x.id) === String(m.bondId));
      if (b) return b.confirmed ? "accepted" : "pending";
      return m.bindDecision === "accepted" ? "accepted" : "rejected";
    }
    const b2 = bonds.find(
      (x) =>
        (x.guardianName === m.recipientPerson || x.wardName === m.recipientPerson) &&
        (!m.senderName || x.guardianName === m.senderName || x.wardName === m.senderName)
    );
    if (b2) return b2.confirmed ? "accepted" : "pending";
    return m.bindDecision === "accepted" ? "accepted" : "rejected";
  }
  function consultCareBindDecisionHTML(m) {
    const decision = resolveCareBubbleBindDecision(m);
    if (!decision) return "";
    if (decision === "pending") {
      const bid = m.bondId || "";
      return `
        <div style="display:flex;align-items:center;gap:10px;margin-top:11px">
          <button type="button" data-act="rejectCareBond" data-id="${esc(bid)}" data-msgid="${esc(m.id)}" style="flex:1;height:38px;border-radius:12px;border:1px solid rgba(16,84,224,.18);background:rgba(16,84,224,.08);color:var(--blue);font-size:14.5px;font-weight:700;cursor:pointer;font-family:inherit">不同意</button>
          <button type="button" data-act="acceptCareBond" data-id="${esc(bid)}" data-msgid="${esc(m.id)}" style="flex:1;height:38px;border-radius:12px;border:0;background:var(--blue);color:#fff;font-size:14.5px;font-weight:700;cursor:pointer;font-family:inherit">同意</button>
        </div>`;
    }
    if (decision === "accepted") {
      return `
        <div style="display:inline-flex;align-items:center;gap:5px;margin-top:10px;padding:5px 12px;border-radius:999px;background:rgba(26,166,74,.14);color:#15803d;font-size:13.5px;font-weight:700">
          <span>✓ 已同意</span>
        </div>`;
    }
    return `
      <div style="display:inline-flex;align-items:center;gap:5px;margin-top:10px;padding:5px 12px;border-radius:999px;background:rgba(16,84,224,.07);color:var(--t-sec);font-size:13.5px;font-weight:700">
        <span>已选择不同意</span>
      </div>`;
  }
  function deliverCareNotice(notice) {
    // 守护人概念重构中：不再向哈宝医生写入通知气泡，也不再触发系统通知
  }
  function triggerSysPushBanner(notice) {
    S.sysPushBanner = null;
  }
  function ensureSeededCareNotices() {
    if (S.messages && S.messages.length) {
      S.messages = S.messages.filter((m) => !m.isCareBubble && m.who !== "notice");
    }
    S.unreadConsultByPerson = {};
    S.pendingPersonPopups = {};
  }
  function presentUnreadCareNoticeForPerson(personName) {
    // 守护人概念重构中：不再触发待读守护通知
  }
  function presentUnreadCareNoticeForRole(role) {
    // 守护人概念重构中：不再触发待读守护通知
  }
  function sysPushBannerHTML() {
    const n = S.sysPushBanner;
    if (!n) return "";
    return `
      <div class="sys-push-banner" id="sys-push-banner" data-act="closeSysPush" style="position:absolute;top:48px;left:12px;right:12px;z-index:95;background:rgba(255,255,255,.96);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(15,23,42,.07);border-radius:22px;padding:11px 14px;box-shadow:0 10px 28px rgba(15,23,42,.15);display:flex;align-items:center;gap:11px;cursor:grab;user-select:none;animation:fadeUp .22s ease">
        <img src="assets/brand_logo.png" alt="哈宝" style="width:38px;height:38px;border-radius:10px;background:#EEF5FF;padding:2px;flex-shrink:0" />
        <div style="min-width:0;flex:1">
          <div style="display:flex;align-items:center;gap:6px">
            <span style="font-size:13px;font-weight:700;color:#1A2947">哈宝 · ${esc(n.badgeText || "通知")}</span>
            <span style="flex:1"></span>
            <span style="font-size:11.5px;color:var(--sec)">现在</span>
          </div>
          <div style="font-size:14px;font-weight:700;color:#1A2947;margin-top:2.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(n.title)}</div>
          <div style="font-size:12.5px;color:var(--sec);margin-top:1.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(n.detail)}</div>
        </div>
      </div>`;
  }
  function careNoticeStyleMeta(n) {
    const k = n ? n.kind : "";
    if (k === "familyRemindPlan" || k === "familyRemindExercise" || k === "bindRequest") {
      return { accent: "#D97706", softBg: "rgba(245,158,11,.14)", border: "rgba(217,119,6,.24)", ico: I.bell };
    }
    if (k === "patientActionDone" || k === "bindConfirmed") {
      return { accent: "#1AA64A", softBg: "rgba(26,166,74,.12)", border: "rgba(26,166,74,.24)", ico: I.check };
    }
    if (k === "bindRejected" || k === "bindRemoved") {
      return { accent: "#DC4848", softBg: "rgba(220,72,72,.12)", border: "rgba(220,72,72,.24)", ico: I.warn };
    }
    return { accent: "#1054E0", softBg: "rgba(16,84,224,.11)", border: "rgba(16,84,224,.24)", ico: I.two };
  }
  function careNoticeModalHTML() {
    return "";
  }
  function currentHomeNotices() {
    return [];
  }
  function homeNoticeBarHTML() {
    return "";
  }

  const L = {
    minH: 300, maxH: 560, stripH: 56, stripGap: 10,
    overflow: 1.06, centerPast: 0.38, hugPad: 5, plate: 0.96,
    scrubMin: 64, scrubMaxR: 0.26,
    addH: 76, rowGap: 12, cardBase: 184, cardFocus: 196,
    labelOrbit: 0.66, tickOrbit: 0.935, handTip: 0.48,
    reading: 270, degPerPt: 0.68, sector: 360 / 7,
    titleArc: 14, bodyArc: 12, actionArc: 16,
  };

  function homeModuleHeight(enrolled) {
    const raw = 932 - 62 - 16 - 44 - 20 - 41 - 12 - 20 - 80 - 34 - (enrolled ? 0 : L.stripH + L.stripGap);
    return Math.min(Math.max(raw, L.minH), L.maxH);
  }
  function homeGeo(w, h) {
    const D = h * L.overflow;
    const R = D / 2;
    const plateR = (D * L.plate) / 2;
    const hugR = plateR + L.hugPad;
    const cx = w + R * L.centerPast;
    const cy = h * 0.5;
    const scrub = Math.min(Math.max(L.scrubMin, w - (cx - hugR)), w * L.scrubMaxR);
    return { w, h, D, R, plateR, hugR, cx, cy, scrub };
  }
  function blockStartAngle(i) { return -i * L.sector; }
  function blockCenterAngle(i) { return blockStartAngle(i) - L.sector / 2; }
  function snappedFace(i) { return L.reading - blockCenterAngle(i); }
  function currentFace() { return S.liveFace == null ? snappedFace(S.block) : S.liveFace; }
  function normDeg(a) { let x = a % 360; if (x < 0) x += 360; return x; }
  function angDist(a, b) { const d = Math.abs(normDeg(a) - normDeg(b)); return Math.min(d, 360 - d); }
  function shortestDelta(from, to) { let d = to - from; if (d > 180) d -= 360; if (d < -180) d += 360; return d; }
  function nearestBlockFacing(face) {
    const target = normDeg(L.reading - face);
    let best = 0, bestD = 1e9;
    for (let i = 0; i < 7; i++) {
      const d = angDist(blockCenterAngle(i), target);
      if (d < bestD) { bestD = d; best = i; }
    }
    return best;
  }
  function continuousSnapFace(face, block) {
    const targetNow = normDeg(L.reading - face);
    return face - shortestDelta(targetNow, blockCenterAngle(block));
  }
  // 计划可见性：长期删除已 splice 出 SEED；「仅删本次」记在 skippedDays[日期]
  // 循环计划的「仅删本次」只影响当天，次日仍回来（真机 RehabPlanStore.skipOccurrence）
  function skippedOn(ymd) { return S.skippedDays[ymd] || []; }
  function resolvedTaskEndYmd(t) {
    const start = t.onceDate || toYMD(demoDate());
    if (t.cycle === false) return start;
    if (t.endDate) return t.endDate;
    const days = t.customDays || (t.duration ? durationDayCount(t.duration) : 365);
    return addDaysYMD(start, days - 1);
  }
  function taskDateRangeLabel(t) {
    const startYmd = t.onceDate || toYMD(demoDate());
    const endYmd = resolvedTaskEndYmd(t);
    return `${yearMonthDayLabel(parseYMD(startYmd))} – ${yearMonthDayLabel(parseYMD(endYmd))}`;
  }
  function defaultNewPlanStartYmd(orig) {
    const today = toYMD(demoDate());
    const origStart = orig?.onceDate || today;
    return origStart > today ? origStart : today;
  }
  function liveTasks(ymd = toYMD(demoDate())) {
    const skip = skippedOn(ymd);
    return SEED.filter((t) => {
      if (skip.includes(t.id)) return false;
      if (t.onceDate && ymd < t.onceDate) return false;
      if (t.cycle === false && t.onceDate && ymd !== t.onceDate) return false;
      if (t.endDate && ymd > t.endDate) return false;
      return true;
    });
  }
  function addSkipped(ymd, id) {
    if (!S.skippedDays[ymd]) S.skippedDays[ymd] = [];
    if (!S.skippedDays[ymd].includes(id)) S.skippedDays[ymd].push(id);
  }
  // 真删：从 SEED 摘掉，并清掉它的打卡记录
  function dropTask(id) {
    const i = SEED.findIndex((x) => x.id === id);
    if (i >= 0) SEED.splice(i, 1);
    delete S.completed[id];
    delete S.completedBy[id];
    if (S.taskId === id) S.taskId = SEED[0]?.id || "t4";
    if (S.centerStage === id) S.centerStage = null;
  }
  function upsertTask(id, patch) {
    const t = SEED.find((x) => x.id === id);
    if (t) Object.assign(t, patch);
    return t;
  }
  // 编辑页草稿回写计划条目（真机 AddEditTaskView save → rehabPlanStore.update）
  function applyDraftToTask(id, d) {
    if (!d) return;
    // V0.1：用户自己改过本期的医嘱计划，期末反馈里标「自行调整」
    if (S.plan && S.plan.cur && (S.plan.cur.ids || []).includes(id)) (S.plan.cur.selfEdited = S.plan.cur.selfEdited || {})[id] = true;
    upsertTask(id, {
      title: d.title,
      cat: d.cat,
      h: d.hour,
      m: d.min,
      note: d.note || "",
      cycle: !!d.cycle,
      rule: d.cycle ? d.rule : null,
      weekdays: d.cycle ? d.weekdays : null,
      monthDays: d.cycle ? d.monthDays : null,
      duration: d.cycle ? d.duration : null,
      endDate: d.cycle ? (d.endDate || null) : null,
      customDays: d.cycle ? (d.customDays || null) : null,
      customId: d.customId || undefined,
      onceDate: d.onceDate || undefined,
    });
    // 「家属通知」同样随「确认」落库（真机 familyNotificationEnabled）
    S.famOff[id] = d.famNotify === false;
    // 「本次提醒」同样随「确认」落库（真机 mutedDays）
    S.mutedToday[id] = !!d.muteFirst;
    sortSeed();
  }
  // 计划按时刻排序：首页 lane 与健康计划列表都按数组顺序渲染，新增不排序会落在末尾
  function sortSeed() { SEED.sort((a, b) => a.h - b.h || a.m - b.m); }
  /// 散步打卡归属（真机 WalkView.resolveCheckInTask）：计划入口完成原任务；
  /// 自由入口按真实开始时刻新建一条「自主散步」，不猜测也不占用存量计划。
  function resolveWalkCheckInTask() {
    if (S.walkTaskId && SEED.some((t) => t.id === S.walkTaskId)) return { id: S.walkTaskId, created: false };
    const at = S.walkStartedAt || demoNowHM();
    const task = {
      id: nextTaskId(),
      title: "自主散步",
      cat: "exercise",
      h: at.h,
      m: at.m,
      note: "自主完成的户外散步",
    };
    SEED.push(task);
    return { id: task.id, created: true };
  }
  // 确认页提交：整批草稿落成计划（真机 confirmMedications + syncMedications / syncAppointments）；
  // kind = "exercise" 时只整批替换运动（真机 syncExerciseTasks），不碰用药与复查
  function commitConfirmDrafts(kind) {
    const drafts = S.confirmDrafts || [];
    if (!drafts.length) return 0;
    const isExercise = kind === "exercise";
    if (isExercise) {
      for (let i = SEED.length - 1; i >= 0; i--) {
        if (SEED[i].cat === "exercise") SEED.splice(i, 1);
      }
    }
    // 已入组重走：用药 / 复查按本次确认整表覆盖，其它日常与运动不动
    if (S.enrolled && !isExercise) {
      for (let i = SEED.length - 1; i >= 0; i--) {
        if (SEED[i].cat === "medication" || SEED[i].cat === "appointment") SEED.splice(i, 1);
      }
    }
    drafts.forEach((x) => {
      const [hh, mm] = String(x.time || "08:00").split(":").map(Number);
      const id = nextTaskId();
      SEED.push({
        id,
        title: x.title,
        cat: x.cat,
        h: Number.isFinite(hh) ? hh : 8,
        m: Number.isFinite(mm) ? mm : 0,
        note: x.note || "",
        cycle: x.cycle !== false,
      });
      S.mutedToday[id] = x.muteFirst === true;
    });
    if (S.enrolled && !isExercise) {
      confirmApptItems().forEach((a) => {
        const hm = String(a.time || "").match(/(\d{1,2}):(\d{2})/);
        SEED.push({
          id: nextTaskId(),
          title: a.title,
          cat: "appointment",
          h: hm ? +hm[1] : 9,
          m: hm ? +hm[2] : 0,
          note: a.note || "",
          cycle: true,
        });
      });
    }
    sortSeed();
    const n = drafts.length;
    S.confirmDrafts = null;
    resetBasisEdits();
    return n;
  }

  function zoneCleared(id) {
    const items = liveTasks().filter((t) => blockOf(t.h).id === id);
    return items.length > 0 && items.every((t) => S.completed[t.id]);
  }
  function zoneHasTasks(id) {
    return liveTasks().some((t) => blockOf(t.h).id === id);
  }
  function taskDraftFromSeed(t) {
    const appt = t.cat === "appointment";
    return {
      cat: t.cat,
      cycle: t.cycle !== false,
      // 保留已存的循环规则，否则编辑一次「每周三」就退化成「每日」
      rule: t.rule || (appt ? "monthly" : "daily"),
      weekdays: t.weekdays ? t.weekdays.slice() : [6],
      monthDays: t.monthDays ? t.monthDays.slice() : [11],
      duration: "duration" in t ? t.duration : "oneYear",
      endDate: t.endDate || null,
      customId: t.customId || null,
      customDays: t.customDays || null,
      block: blockOf(t.h).id,
      hour: t.h,
      min: t.m,
      title: t.title,
      // 家属通知（V10.52）
      famNotify: !S.famOff[t.id],
      // 「本次提醒」的静音日（查看 / 编辑共用同一张 S.mutedToday）
      muteFirst: !!S.mutedToday[t.id],
      note: t.note || "",
      onceDate: t.onceDate || toYMD(demoDate()),
      // 查看态展示「今天日期」（当天）；更改态展示「新计划开始日期」（默认今天或未来计划起始日）
      occurrence: defaultNewPlanStartYmd(t),
      touchedDuration: false,
    };
  }
  function scheduleRuleSummary(isCycle, rule, weekdays, monthDays) {
    if (!isCycle) return "单日";
    let ruleText = "每日";
    if (rule === "weekly") {
      const labels = ["日", "一", "二", "三", "四", "五", "六"];
      const w = (weekdays && weekdays.length ? weekdays : [6])
        .slice()
        .sort((a, b) => a - b)
        .map((n) => labels[(n - 1 + 7) % 7] || "")
        .join("");
      ruleText = `每周${w}`;
    } else if (rule === "monthly") {
      const md = (monthDays && monthDays.length ? monthDays : [11]).slice();
      const nums = md.filter((x) => x !== 0).sort((a, b) => a - b).map((x) => `${x}日`);
      if (md.includes(0)) nums.push("月末");
      ruleText = `每月${nums.join("、")}`;
    }
    return ruleText;
  }
  function scheduleDurationSummary(isCycle, rule, duration, customDays) {
    if (!isCycle) return "1天";
    let durationText = "一年";
    const opts = durationOpts(rule);
    const matched = opts.find((opt) => opt[0] === duration);
    if (matched) {
      durationText = matched[1];
    } else if (customDays) {
      durationText = `${customDays}天`;
    }
    return durationText;
  }
  function scheduleTimeSummary(h, m) {
    return `${pad(h ?? 8)}:${pad(m ?? 0)}`;
  }
  function scheduleRuleDurationSummary(isCycle, rule, weekdays, monthDays, duration, customDays, h, m) {
    const timeText = scheduleTimeSummary(h, m);
    if (!isCycle) return `单日 ${timeText}`;
    const ruleText = scheduleRuleSummary(isCycle, rule, weekdays, monthDays);
    const durationText = scheduleDurationSummary(isCycle, rule, duration, customDays);
    return `${ruleText} · ${durationText} ${timeText}`;
  }
  function resolvedDraftEndYmd(d, anchorYmd) {
    if (d.endDate && d.endDate >= anchorYmd) return d.endDate;
    const days = d.customDays || (d.duration ? durationDayCount(d.duration) : 365);
    return addDaysYMD(anchorYmd, days - 1);
  }
  function buildScheduleUpdatePrompt(orig, d) {
    if (!orig || !d) return null;
    const origBase = taskDraftFromSeed(orig);
    const today = toYMD(demoDate());
    const origStart = origBase.onceDate || today;
    const defaultOcc = defaultNewPlanStartYmd(orig);
    const activeStart = d.cycle ? (d.occurrence || defaultOcc) : (d.onceDate || defaultOcc);

    let changed = false;
    if (d.hour !== origBase.hour || d.min !== origBase.min) changed = true;
    if (!!d.cycle !== !!origBase.cycle) changed = true;
    if (origBase.cycle) {
      if (activeStart !== defaultOcc) changed = true;
    } else {
      if (activeStart !== origStart) changed = true;
    }
    if (d.cycle && origBase.cycle) {
      if (d.rule !== origBase.rule) changed = true;
      if (d.rule === "weekly") {
        const a = (d.weekdays || []).slice().sort().join(",");
        const b = (origBase.weekdays || []).slice().sort().join(",");
        if (a !== b) changed = true;
      }
      if (d.rule === "monthly") {
        const a = (d.monthDays || []).slice().sort().join(",");
        const b = (origBase.monthDays || []).slice().sort().join(",");
        if (a !== b) changed = true;
      }
      const origEnd = resolvedDraftEndYmd(origBase, origStart);
      const curEnd = resolvedDraftEndYmd(d, activeStart);
      if (curEnd !== origEnd || d.touchedDuration) changed = true;
    }
    if (!changed) return null;

    const newStartYmd = activeStart;
    const oldStartYmd = origStart;
    const origEndYmd = origBase.cycle ? resolvedDraftEndYmd(origBase, oldStartYmd) : oldStartYmd;
    const newEndYmd = d.cycle ? resolvedDraftEndYmd(d, newStartYmd) : newStartYmd;

    let currentEndYmd;
    let inlineMessage;
    let splitsSeries = false;
    const newStartText = yearMonthDayLabel(parseYMD(newStartYmd));

    if (newStartYmd > oldStartYmd) {
      splitsSeries = true;
      if (origEndYmd < newStartYmd) {
        currentEndYmd = origEndYmd;
        const endText = yearMonthDayLabel(parseYMD(origEndYmd));
        inlineMessage = `当前计划已在${endText}截止，新计划${newStartText}开始。`;
      } else {
        currentEndYmd = addDaysYMD(newStartYmd, -1);
        const prevText = yearMonthDayLabel(parseYMD(currentEndYmd));
        inlineMessage = `当前计划${prevText}截止，新计划${newStartText}开始。`;
      }
    } else {
      currentEndYmd = origBase.cycle ? (addDaysYMD(newStartYmd, -1) >= oldStartYmd ? addDaysYMD(newStartYmd, -1) : oldStartYmd) : oldStartYmd;
      inlineMessage = `当前计划立即结束，新计划${newStartText}开始。`;
    }

    const currentStartText = yearMonthDayLabel(parseYMD(oldStartYmd));
    const currentEndText = yearMonthDayLabel(parseYMD(currentEndYmd));
    const newEndText = yearMonthDayLabel(parseYMD(newEndYmd));

    const currentRuleText = scheduleRuleSummary(origBase.cycle, origBase.rule, origBase.weekdays, origBase.monthDays);
    const currentDurationText = scheduleDurationSummary(origBase.cycle, origBase.rule, origBase.duration, origBase.customDays);
    const currentTimeText = scheduleTimeSummary(origBase.hour, origBase.min);

    const newRuleText = scheduleRuleSummary(d.cycle, d.rule, d.weekdays, d.monthDays);
    const newDurationText = scheduleDurationSummary(d.cycle, d.rule, d.duration, d.customDays);
    const newTimeText = scheduleTimeSummary(d.hour, d.min);

    return {
      splitsSeries,
      newStartYmd,
      currentStartText,
      currentEndText,
      currentRuleText,
      currentDurationText,
      currentTimeText,
      newStartText,
      newEndText,
      newRuleText,
      newDurationText,
      newTimeText,
      inlineMessage,
    };
  }
  function initDraft(seed) {
    if (seed && S.completed[seed.id] && S.sys == null) {
      S.sys = 120;
      S.dia = 78;
      S.hr = 72;
    }
    if (seed) {
      S.draft = taskDraftFromSeed(seed);
      return;
    }
    const b = S.lockedBlock ?? S.block;
    const once = !!S.lockRecurrence;
    S.editorCollapsed = [];
    S.draft = {
      // 首页虚框新建只允许日常类，默认测血压（服药 / 运动 / 复查置灰）
      cat: S.lockProfessional ? "monitoring" : "medication",
      cycle: !once,
      rule: "daily",
      weekdays: [6],
      monthDays: [11],
      duration: "oneYear",
      customId: null,
      customDays: null,
      block: b,
      hour: BLOCKS[b].start,
      min: 0,
      title: "",
      // 家属通知默认开（真机 familyNotificationEnabled 缺省 true）
      famNotify: true,
      // 新建：系列从起始日（当天）开始，那一次就是它的「本次」，默认不静音
      muteFirst: false,
      note: "",
      onceDate: toYMD(demoDate()),
    };
  }
  function editorAccent(d, done) {
    if (done) return { fg: "#1AA64A", muted: "rgba(26,166,74,.12)" };
    if (d.cat === "appointment") return { fg: "#DC4848", muted: "rgba(220,72,72,.16)" };
    return { fg: "#1054E0", muted: "rgba(16,84,224,.12)" };
  }
  const UNIFIED_CUSTOM_ICON = "grid";
  const UNIFIED_CUSTOM_COLOR = "#1054E0";
  function defaultCustomDays(rule) {
    if (rule === "weekly") return 56;
    if (rule === "monthly") return 182;
    return 30;
  }
  function customDurCount(days, rule) {
    const n = days || defaultCustomDays(rule);
    if (rule === "weekly") return Math.max(1, Math.round(n / 7));
    if (rule === "monthly") return Math.max(1, Math.round(n / 30));
    return Math.max(1, n);
  }
  function daysFromCount(count, rule) {
    const n = Math.max(1, count);
    if (rule === "weekly") return Math.min(365, n * 7);
    if (rule === "monthly") return Math.min(365, n * 30);
    return Math.min(365, n);
  }
  function customDurLabel(days, rule) {
    const n = days || defaultCustomDays(rule);
    // 取整含余：周按 7 天向下取整（真机 SeriesDurationCustom.displayName 同款）
    if (rule === "weekly") {
      const weeks = Math.max(1, Math.floor(n / 7));
      const rem = n % 7;
      return rem > 0 ? `${weeks}周零${rem}天` : `${weeks}周`;
    }
    if (rule === "monthly") {
      const months = Math.max(1, Math.floor(n / 30));
      const rem = Math.max(0, n - months * 30);
      return rem > 0 ? `${months}个月零${rem}天` : `${months}个月`;
    }
    return `${n}天`;
  }
  function yearMonthDayLabel(d) {
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  }
  function customDurDeadlineLabel(days, rule) {
    const n = days || defaultCustomDays(rule);
    const end = new Date(seriesStartDate());
    end.setDate(end.getDate() + n - 1);
    return `截止${yearMonthDayLabel(end)}（${customDurLabel(n, rule)}）`;
  }
  /** 从起始日加一周 / 一个月，该截止日期禁用；最早可选为次日。 */
  function customDurEarliestEnd(rule) {
    const start = seriesStartDate();
    if (rule === "weekly") {
      const d = new Date(start);
      d.setDate(d.getDate() + 7 + 1);
      return d;
    }
    if (rule === "monthly") {
      const d = new Date(start);
      d.setMonth(d.getMonth() + 1);
      d.setDate(d.getDate() + 1);
      return d;
    }
    return new Date(start);
  }
  function customDurMinDays(rule) {
    const start = startDay(seriesStartDate());
    const earliest = startDay(customDurEarliestEnd(rule));
    return Math.round((earliest - start) / 86400000) + 1;
  }
  function flushCustomCatName() {
    const el = document.getElementById("custom-cat-name");
    if (el && S.customDraft) S.customDraft.name = el.value.slice(0, 6);
    return (S.customDraft?.name || "").trim();
  }
  function enterCustomTask(cat) {
    S.addTitle = "添加计划";
    S.lockBlock = false;
    S.lockRecurrence = false;
    S.lockCategory = true;
    initDraft({ id: "custom", title: "", h: 8, m: 0, cat: "custom", note: "", customId: cat.id });
    S.draft.customId = cat.id;
    S.draft.cycle = false;
    S.draft.rule = "daily";
    S.overlay = null;
    replace("task-add");
  }
  function optChip({ selected, label, icon, act, extra, viewing, locked, compact, dash, accent }) {
    const a = accent || editorAccent({ cat: "monitoring" }, false);
    let bg; let color;
    if (dash) { bg = "rgba(16,84,224,.04)"; color = "#1054E0"; }
    else if (selected) { bg = a.fg; color = "#fff"; }
    else if (viewing || locked) { bg = "rgba(130,142,165,.10)"; color = "rgba(130,142,165,.50)"; }
    else { bg = a.muted; color = a.fg; }
    const disabled = (viewing || locked) && !selected;
    const cls = `opt-chip${compact ? " compact" : ""}${dash ? " dash" : ""}`;
    const data = !disabled && act ? `data-act="${act}" ${extra || ""}` : "";
    return `<button class="${cls}" style="background:${bg};color:${color}" ${data} type="button">${icon || ""}<span>${label}</span></button>`;
  }
  function monthDayHints(days) {
    const hints = [];
    if (days.includes(29)) hints.push("平年二月没有29日，该月跳过");
    if (days.includes(30)) hints.push("二月没有30日，该月跳过");
    if (days.includes(31)) hints.push("二、四、六、九、十一月没有31日，这些月份跳过");
    if (days.includes(0)) hints.push("每个月自动落在最后一天，二月28或29日，小月30日，大月31日");
    return hints;
  }
  function durationOpts(rule) {
    // 结束时间上面一排 3 档。不提供 1天 / 1周 / 1个月，也不再有「自定义」。
    if (rule === "weekly") return [["weeks4", "4周"], ["weeks12", "12周"], ["oneYear", "一年"]];
    if (rule === "monthly") return [["months3", "3个月"], ["months6", "6个月"], ["oneYear", "一年"]];
    return [["days30", "30天"], ["days90", "90天"], ["oneYear", "一年"]];
  }
  function durationDayCount(id) {
    return ({
      days30: 30, days90: 90, oneYear: 365,
      weeks4: 28, weeks12: 84, months3: 90, months6: 182,
    })[id] || 365;
  }
  function addDaysYMD(ymd, days) {
    const d = parseYMD(ymd);
    d.setDate(d.getDate() + days);
    return toYMD(d);
  }
  function onceDateLabel(ymd) {
    return monthDayLabel(parseYMD(ymd || S.draft?.onceDate));
  }
  function seriesStartDate() {
    return parseYMD(S.draft?.onceDate || toYMD(demoDate()));
  }
  function planDateLabel(ymd, cycle) {
    const d = parseYMD(ymd || S.draft?.onceDate || toYMD(demoDate()));
    return cycle ? yearMonthDayLabel(d) : monthDayLabel(d);
  }
  const CAT_ICON = {
    medication: () => I.pills,
    exercise: () => I.walk,
    monitoring: () => I.heartSq,
    diet: () => I.leaf,
    rest: () => I.moon,
    appointment: () => I.cal,
  };
  function demoDate(offsetDays = 0) {
    const d = new Date(2026, 8, 11);
    d.setDate(d.getDate() + offsetDays);
    return d;
  }
  /// 模拟器的「现在」：取状态栏时钟。真机自由运动按真实开始时刻建「自主散步」，
  /// 这里用同一口径，免得新建的卡落到跟当下无关的时段。
  function demoNowHM() {
    const m = ($("clock-now")?.textContent || "").match(/(\d{1,2}):(\d{2})/);
    return m ? { h: +m[1], m: +m[2] } : { h: 9, m: 41 };
  }
  function weekStart(offsetWeeks) {
    const d = demoDate(offsetWeeks * 7);
    d.setDate(d.getDate() - d.getDay());
    return d;
  }
  function calHeadTitle() {
    if (S.calMode === "week") {
      // 周图标题写该周起止区间（周日起始），翻周才变、点选周内某天不动
      return weekRangeLabel(weekStart(S.calOffset));
    }
    const d = new Date(2026, 8 + S.calOffset, 1);
    return `${d.getFullYear()}年${d.getMonth() + 1}月`;
  }
  function vitalsWeekLabel() {
    if (S.vitalsOffset === 0) return "本周";
    if (S.vitalsOffset === -1) return "上周";
    return `${-S.vitalsOffset} 周前`;
  }
  function stampMonthTitle() {
    const d = new Date(2026, 8 + S.stampCalOffset, 1);
    return `${d.getFullYear()}年${d.getMonth() + 1}月`;
  }
  function emptyPlanText() {
    if (S.scheduleFilter === "done") return "暂无已完成计划";
    if (S.scheduleScope === "运动计划") return "当日暂无运动计划";
    if (S.scheduleScope === "用药计划") return "当日暂无用药计划";
    if (S.scheduleScope === "其他计划") return "当日暂无其他计划";
    return "当日暂无待办";
  }
  function hugPath(w, h, cx, cy, r, cr) {
    const arcX = (y) => {
      const dy = y - cy;
      const under = r * r - dy * dy;
      if (under <= 0) return w;
      return Math.min(cx - Math.sqrt(under), w);
    };
    const n = 36;
    let d = `M ${cr} 0 L ${arcX(0)} 0`;
    for (let i = 1; i <= n; i++) {
      const y = (h * i) / n;
      d += ` L ${arcX(y)} ${y}`;
    }
    d += ` L ${cr} ${h} Q 0 ${h} 0 ${h - cr} L 0 ${cr} Q 0 0 ${cr} 0 Z`;
    return d;
  }
  function trailingInset(y0, y1, w, r, c, margin) {
    let inset = margin;
    for (let i = 0; i <= 8; i++) {
      const y = y0 + ((y1 - y0) * i) / 8;
      const dy = y - c.y;
      const under = r * r - dy * dy;
      if (under <= 0) { inset = Math.max(inset, margin + 6); continue; }
      const arcX = c.x - Math.sqrt(under);
      inset = Math.max(inset, Math.max(margin, w - arcX + margin));
    }
    return inset;
  }
  function applyHug() {
    const bite = $("#bite");
    if (!bite) return;
    const geo = homeGeo(bite.clientWidth, bite.clientHeight);
    const host = $("#dial-host");
    if (host) {
      host.style.width = `${geo.D}px`;
      host.style.height = `${geo.D}px`;
      host.style.left = `${geo.cx - geo.D / 2}px`;
      host.style.top = `${geo.cy - geo.D / 2}px`;
    }
    const scrub = $("#scrub");
    if (scrub) scrub.style.width = `${geo.scrub}px`;
    const biteRect = bite.getBoundingClientRect();
    const scale = biteRect.width / Math.max(bite.clientWidth, 1);
    const lane = bite.querySelector(".lane");
    if (lane) {
      const mask = `radial-gradient(circle ${geo.hugR}px at ${geo.cx}px ${geo.cy}px, transparent ${Math.max(0, geo.hugR - 0.6)}px, #000 ${geo.hugR}px)`;
      lane.style.webkitMaskImage = mask;
      lane.style.maskImage = mask;
    }
    bite.querySelectorAll("[data-hug]").forEach((el) => {
      const rect = el.getBoundingClientRect();
      const w = el.clientWidth;
      const h = el.clientHeight;
      const cr = +el.dataset.hug || 18;
      const local = {
        x: geo.cx - (rect.left - biteRect.left) / scale,
        y: geo.cy - (rect.top - biteRect.top) / scale,
      };
      const d = hugPath(w, h, local.x, local.y, geo.hugR, cr);
      el.style.clipPath = `path('${d}')`;
      const svg = el.querySelector(".hug-svg");
      if (svg) svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      const path = el.querySelector(".hug-path");
      if (path) path.setAttribute("d", d);
      const stroke = el.querySelector(".hug-stroke");
      if (stroke) stroke.setAttribute("d", d);
      el.style.setProperty("--h-trail", `${trailingInset(h * 0.06, h * 0.28, w, geo.hugR, local, L.titleArc)}px`);
      el.style.setProperty("--b-trail", `${trailingInset(h * 0.30, h * 0.62, w, geo.hugR, local, L.bodyArc)}px`);
      el.style.setProperty("--a-trail", `${trailingInset(h * 0.66, h - 4, w, geo.hugR, local, L.actionArc)}px`);
      if (el.classList.contains("empty-lane")) {
        const contentTrail = trailingInset(h * 0.4, h * 0.6, w, geo.hugR, local, 16);
        const usableL = 18;
        const usableR = w - contentTrail;
        const cx = (usableL + usableR) / 2;
        const mark = el.querySelector(".empty-mark");
        const cap = el.querySelector(".empty-caption");
        const scale = Math.min(1, Math.max(0.82, h / 444));
        const badge = 108 * scale;
        if (mark) {
          mark.style.width = `${badge}px`;
          mark.style.height = `${badge}px`;
          mark.style.left = `${cx}px`;
          mark.style.top = `${local.y}px`;
          const svg = mark.querySelector("svg");
          if (svg) { svg.style.width = `${46 * scale}px`; svg.style.height = `${46 * scale}px`; }
        }
        if (cap) {
          cap.style.left = `${cx}px`;
          cap.style.top = `${local.y + badge / 2 + 16 * scale}px`;
          cap.style.fontSize = `calc(${20 * scale}px * var(--fs))`;
        }
      }
    });
  }

  function topFrame() {
    return S.frames[S.frames.length - 1] || { id: S.loggedIn ? "home" : "onboard-login", how: "root" };
  }
  function inferHow(from, to) {
    return EDGE[`${from}>${to}`] || "cover";
  }
  function hostPath(id) {
    const R = (x) => ({ id: x, how: "root" });
    const C = (x) => ({ id: x, how: "cover" });
    const P = (x) => ({ id: x, how: "push" });
    const home = [R("home")];
    const login = [R("onboard-login")];
    const map = {
      "onboard-login": login,
      "onboard-profile": [...login, P("onboard-profile")],
      home,
      schedule: [...home, C("schedule")],
      vitals: [...home, C("vitals")],
      "vitals-detail": [...home, C("vitals"), P("vitals-detail")],
      report: [...home, C("report")],
      "report-sub": [...home, C("report"), C("report-sub")],
      followup: [...home, C("report"), P("followup")],
      questionnaire: [...home, C("report"), P("followup"), C("questionnaire")],
      analysis: [...home, C("report"), P("analysis")],
      walk: [...home, C("walk")],
      "walk-session": [...home, C("walk"), C("walk-session")],
      "walk-records": [...home, C("walk"), C("walk-records")],
      consult: [...home, C("consult")],
      "consult-history": [...home, C("consult"), C("consult-history")],
      stamps: [...home, C("stamps")],
      profile: [...home, C("profile")],
      vip: [...home, C("profile"), C("vip")],
      "health-record": [...home, C("profile"), C("health-record")],
      "patient-edit": [...home, C("profile"), C("health-record"), C("patient-edit")],
      family: [...home, C("profile"), C("family")],
      notify: [...home, C("profile"), C("notify")],
      hardware: [...home, C("profile"), C("hardware")],
      "hardware-scan": [...home, C("profile"), C("hardware"), C("hardware-scan")],
      privacy: S.loggedIn ? [...home, C("profile"), C("privacy")] : [...login, C("privacy")],
      "service-terms": S.loggedIn ? [...home, C("profile"), C("service-terms")] : [...login, C("service-terms")],
      "first-rest": [...home, C("first-rest")],
      "select-type": [...home, C("schedule"), C("select-type")],
      "ocr-capture": S.enrolled ? [...home, C("schedule"), C("ocr-capture")] : [...home, C("ocr-capture")],
      "ocr-group": S.enrolled
        ? [...home, C("schedule"), C("ocr-capture"), P("ocr-group")]
        : [...home, C("ocr-capture"), P("ocr-group")],
      "ocr-detail": S.enrolled
        ? [...home, C("schedule"), C("ocr-capture"), P("ocr-detail")]
        : [...home, C("ocr-capture"), P("ocr-detail")],
      "confirm-plan": S.enrolled
        ? [...home, C("schedule"), C("ocr-capture"), P("confirm-plan")]
        : [...home, C("ocr-capture"), P("confirm-plan")],
      "task-add": [...home, C("task-add")],
      "task-view": [...home, C("task-view")],
      "task-edit": [...home, C("task-edit")],
      "exercise-risk": [...home, C("schedule"), C("exercise-risk")],
      "body-test": [...home, C("schedule"), C("body-test")],
      "body-test-sit": [...home, C("schedule"), C("body-test")],
      borg: [...home, C("schedule"), C("exercise-risk"), P("borg")],
      "confirm-exercise": [...home, C("schedule"), C("exercise-risk"), P("borg"), P("confirm-exercise")],
      "risk-result": [...home, C("schedule"), C("exercise-risk"), P("borg"), P("risk-result")],
    };
    return (map[id] || [...home, C(id)]).map((f) => ({ ...f }));
  }
  function ensureConsultCaseOnEnter() {
    // V0.1+ 哈宝医生统一承载医患家协同通知（患者接收家属的提醒通知，家属接收患者的完成通知）
    ensureSeededCareNotices();
    if (!S.consultUnreadByRole) S.consultUnreadByRole = { patient: 0, family: 0 };
    S.consultUnreadByRole[shownRole()] = 0;
    S.consultUnread = (S.consultUnreadByRole.patient || 0) + (S.consultUnreadByRole.family || 0);
  }
  function present(id, how) {
    const prevScreen = S.screen;
    S.overlay = null;
    S.chatMenu = false;
    // V10.49：复诊打卡形态只在落到复查报告页那一下成立，去别处即失效
    if (id !== "report-sub") S.reportReturnHome = false;
    if (how === "root") {
      S.frames = [{ id, how: "root" }];
    } else if (how === "replace") {
      const top = topFrame();
      if (top) top.id = id;
      else S.frames.push({ id, how: "root" });
    } else if (S.screen !== id) {
      S.frames.push({ id, how });
    }
    S.screen = id;
    if (id === "consult") ensureConsultCaseOnEnter(prevScreen);
    S.enter = true;
    render();
    S.enter = false;
  }
  function jump(id) {
    const prevScreen = S.screen;
    resetFlowFlags();
    if (id === "ocr-detail" || id === "ocr-group") seedDocGroups(3);
    if (id === "confirm-plan") {
      seedDocGroups(3);
      S.docSeq += 1;
      S.docGroups.push({ id: S.docSeq, cat: "surgeryRecord", pages: 2 });
    }
    if (id === "body-test-sit") {
      applyTestMode("sit");
      id = "body-test";
    } else if (id === "body-test") {
      applyTestMode("walking");
    } else if (id === "borg") {
      if (!S.bodyTest) captureBodyTest();
    }
    S.frames = hostPath(id);
    S.screen = id;
    if (id === "consult") ensureConsultCaseOnEnter(prevScreen);
    S.overlay = null;
    S.chatMenu = false;
    render();
  }
  function go(id, how) {
    if (how === false || how === "jump") return jump(id);
    if (how == null || how === true) how = inferHow(S.screen, id);
    present(id, how);
  }
  function back() {
    // V10.49：离开复查报告页即撤掉复诊打卡形态
    S.reportReturnHome = false;
    if (S.frames.length <= 1) {
      S.screen = S.loggedIn ? "home" : "onboard-login";
      S.frames = [{ id: S.screen, how: "root" }];
      S.overlay = null;
      render();
      return;
    }
    S.frames.pop();
    S.screen = topFrame().id;
    S.overlay = null;
    render();
  }
  /// 家属管理返回：从计划页「去填写」进来且已绑定 → 返回后接着进打卡通知页开总闸（V10.52）
  function backFamily() {
    const toNotify = S.famFillJump && S.family.length > 0;
    S.famFillJump = false;
    back();
    if (toNotify) go("notify", "cover");
  }
  function replace(id) {
    present(id, "replace");
  }
  function resetFlowFlags() {
    S.captureMode = "intake";
    S.lockCategory = false;
    S.lockProfessional = false;
    S.confirmDrafts = null;
    S.confirmEditIndex = null;
    S.confirmPane = "plan";
    resetBasisEdits();
    S.pendingManualEnroll = false;
    S.draftReturn = null;
    // V10.52：计划页家属「去填写」链路标记，离开即清
    S.famFillJump = false;
    // 会话归属跟着会话走：离开运动链就清掉，免得下次自由运动占用上一次的计划
    S.walkTaskId = null;
    S.walkStartedAt = null;
    S.qDone = false;
    S.testRunning = false;
    S.bodyTest = null;
    // V10.49：复诊打卡形态只活在「打卡 → 提交 → 报告页」这一程，离开即清
    S.reportReturnHome = false;
    S.apptCapture = false;
    S.archivePlace = null;
    S.docStock = null;
    seedDocGroups(0);
  }
  function closeFlow() {
    resetFlowFlags();
    while (S.frames.length > 1) {
      const top = topFrame();
      if (top.how === "root") break;
      if (top.how === "cover" && MODULE_COVERS.has(top.id)) break;
      S.frames.pop();
    }
    S.screen = topFrame().id;
    S.overlay = null;
    S.chatMenu = false;
    render();
  }
  function goHome() {
    resetFlowFlags();
    S.frames = [{ id: "home", how: "root" }];
    S.screen = "home";
    S.overlay = null;
    S.chatMenu = false;
    S.walking = false;
    S.paused = false;
    render();
  }
  function finishGeneratedPlan(msg) {
    goHome();
    if (msg) toast(msg);
  }
  function popTo(id) {
    const idx = S.frames.findLastIndex((f) => f.id === id);
    if (idx < 0) return false;
    S.frames = S.frames.slice(0, idx + 1);
    S.screen = id;
    S.overlay = null;
    S.chatMenu = false;
    render();
    return true;
  }
  function dismissCover() {
    S.reportReturnHome = false;
    while (S.frames.length > 1 && topFrame().how === "push") S.frames.pop();
    if (S.frames.length > 1 && topFrame().how === "cover") S.frames.pop();
    S.screen = topFrame().id;
    S.overlay = null;
    S.chatMenu = false;
    render();
  }
  function startArchive(open) {
    S.captureMode = "archive";
    seedDocGroups(open === "browse" ? 3 : 0);
    // 报告子页 / 明细 / 健康档案 / 复诊打卡传 "capture" 直进拍摄；"browse" / "empty" 仍落资料详情
    present(open === "capture" ? "ocr-capture" : "ocr-detail", "cover");
  }
  /// 复查资料提交后完成当天未打卡的复查计划（真机 ReviewVisitCaptureHost）；
  /// 打卡并进上传那条记录，返回完成的计划名
  function completeTodayAppointments() {
    const done = [];
    liveTasks().forEach((t) => {
      if (t.cat === "appointment" && !S.completed[t.id]) {
        S.completed[t.id] = true;
        markProxy(t.id, null, true);
        done.push(t.title);
      }
    });
    return done;
  }
  /// 资料：「出院记录 3 页、化验单 1 页」
  function opMaterialValue(groups) {
    const byCat = {};
    groups.filter((g) => g.pages > 0).forEach((g) => {
      const t = docCat(g.cat).t;
      byCat[t] = (byCat[t] || 0) + g.pages;
    });
    return Object.entries(byCat).map(([t, n]) => `${t} ${n} 页`).join("、");
  }
  /// 资料前后对比：已入组「用药与复查」对比载入的存量 S.docStock；首次创建直接列类别页数
  function opMaterialChange() {
    const now = (S.docGroups || []).filter((g) => g.pages > 0);
    if (!S.docStock) return opMaterialValue(now) || "本次未动";
    const byCat = (groups) => groups.reduce((m, g) => {
      const t = docCat(g.cat).t;
      m[t] = (m[t] || 0) + g.pages;
      return m;
    }, {});
    const before = byCat(S.docStock);
    const after = byCat(now);
    const parts = [];
    new Set([...Object.keys(before), ...Object.keys(after)]).forEach((t) => {
      const d = (after[t] || 0) - (before[t] || 0);
      if (d > 0) parts.push(`${t}新增 ${d} 页`);
      if (d < 0) parts.push(`${t}删掉 ${-d} 页`);
    });
    return parts.join("、") || "本次未动";
  }
  function finishArchive() {
    const visit = isVisitCapture();
    const fromCheckIn = visit && S.apptCapture;
    const filled = S.docGroups.filter((g) => g.pages > 0);
    // 复查提交后把本批并入「资料合集」的复查报告 —— 否则上传完仍是写死的空态
    if (visit) {
      filled.forEach((g) => {
        ARCHIVE_DEMO.review.groups.push({ title: groupDisplayName(g), pages: g.pages });
      });
    }
    const material = visit
      ? `${cnOrdinal(ARCHIVE_DEMO.review.groups.length)}次复查 ${filled.reduce((s, g) => s + g.pages, 0)} 页`
      : opMaterialValue(filled);
    S.captureMode = "intake";
    seedDocGroups(0);
    const doneAppts = fromCheckIn ? completeTodayAppointments() : [];
    logOp(visit ? "上传了复查资料" : "上传了资料", S.archivePlace || (visit ? "复查报告" : "基础报告"), [
      ["资料", material],
      doneAppts.length ? ["打卡", `${opNames(doneAppts)} 已完成`] : ["计划", "本次未动"],
    ]);
    S.archivePlace = null;
    // V10.49：复诊打卡提交不直接回首页，落复查报告页（该页底栏多一颗「返回首页」）
    if (fromCheckIn) {
      S.apptCapture = false;
      S.reportKind = "visit";
      S.reportReturnHome = true;
      S.reportPane = "insight";
      // 先摘掉资料详情的 push，再把拍摄这层 cover 换成报告页：返回 / 返回首页都回首页
      while (S.frames.length > 1 && topFrame().how === "push") S.frames.pop();
      present("report-sub", "replace");
      return;
    }
    dismissCover();
  }
  function laterCapture() {
    if (S.captureMode === "archive") {
      if (topFrame().how === "push" && topFrame().id === "ocr-capture") {
        S.frames.pop();
        S.screen = topFrame().id;
        render();
        return;
      }
      S.captureMode = "intake";
      seedDocGroups(0);
      dismissCover();
      return;
    }
    closeFlow();
  }
  function openOverlay(name, data = {}) {
    S.overlay = name;
    S.overlayData = data;
    render();
  }
  function closeOverlay() {
    stopCountdown(); // 倒数中关掉弹层要一并停表
    S.overlay = null;
    render();
  }
  let countdownTimer = null;
  function stopCountdown() {
    if (countdownTimer) { clearInterval(countdownTimer); countdownTimer = null; }
  }

  function scalePhone() {
    const wrap = $("#phone-wrap");
    const availH = window.innerHeight - 24;
    const availW = Math.max(320, window.innerWidth - 620);
    const s = Math.min(1, availH / 956, availW / 454);
    wrap.style.transform = `scale(${s})`;
  }

  function renderNav() {
    const simBtn = $("#mode-sim");
    if (simBtn) {
      simBtn.classList.toggle("on", !!S.sim?.on);
      simBtn.textContent = S.sim?.on ? "退出模拟" : "真机模拟";
    }
    const q = ($("#nav-search").value || "").trim();
    $("#nav-tree").innerHTML = IA.map((g) => {
      const items = g.items.filter((it) => !q || `${it.t}${it.code}${it.id}${HOW_LAB[it.how] || ""}`.includes(q));
      if (!items.length) return "";
      // 模拟态锁死左树：disabled 挡键盘 + CSS 置灰 + document 委托兜底
      const lock = S.sim?.on ? " locked" : "";
      return `<div class="nav-group"><h3>${g.g}</h3>${items.map((it) =>
        `<button class="nav-item ${navItemActive(it) ? "active" : ""}${lock}" data-go="${it.id}"${S.sim?.on ? " disabled" : ""}>${it.t}<small>${HOW_LAB[it.how] || ""}</small></button>`
      ).join("")}</div>`;
    }).join("");
  }

  function navItemActive(it) {
    if (it.id === "body-test-sit") return S.screen === "body-test" && S.testMode === "sit";
    if (it.id === "body-test") return S.screen === "body-test" && S.testMode !== "sit";
    return S.screen === it.id;
  }

  function renderSpec() {
    // 真机模拟：结算屏幕变化后再画面板；目录浏览模式原路不变
    if (S.sim?.on) { simTick(); $("#spec").innerHTML = renderSimPanel(); return; }
    const found = (S.screen === "body-test" && S.testMode === "sit"
      ? IA.flatMap((g) => g.items).find((x) => x.id === "body-test-sit")
      : null) || IA.flatMap((g) => g.items).find((x) => x.id === S.screen);
    const spec = SPEC[found?.id] || SPEC[S.screen] || { code: found?.code || "", note: "对照 PRD 与 ClockTheme 复刻。字号为设计值 × 0.93。" };
    const how = S.overlay ? "sheet" : topFrame().how;
    const crumb = S.frames.map((f) => `${f.id} ${HOW_LAB[f.how] || f.how}`).join(" → ")
      + (S.overlay ? ` → ${S.overlay} 贴底` : "");
    $("#spec").innerHTML = `
      <div class="tag">${S.enrolled ? "已入组" : "未入组"}</div>
      <div class="tag">${shownRole() === "patient" ? "本人" : "家属"}</div>
      <div class="tag">${HOW_LAB[how] || how}</div>
      <div class="tag">${S.screen}</div>
      <h2>${found?.t || S.screen}</h2>
      <p><span class="code">${spec.code || found?.code || ""}</span></p>
      <p class="crumb">${crumb}</p>
      <p>${spec.note}</p>
      <p>字号实渲 = 设计 × <span class="code">0.93</span>。主色 <span class="code">#1054E0</span>，完成 <span class="code">#1AA64A</span>，复查 <span class="code">#DC4848</span>。</p>
      <ul>
        <li>手机内按钮按真机呈现：根页 / 全屏 Cover / 压栈 Push / 同 Cover 替换 / 贴底 Sheet</li>
        <li>左侧树按呈现方式分类，点任意屏会重建宿主栈</li>
        <li>顶部三态：未登录 / 未入组 / 已入组 Demo</li>
      </ul>
    `;
  }

  /// 上一次渲染的屏：改草稿字段走的是整体重绘，同屏重绘要接着原来的滚动位置
  let lastRenderedScreen = null;
  /// 一次性「下一次渲染回到顶部」：换一「步」用（问卷翻页等），不给接上一屏的滚动位置
  let scrollResetOnce = false;

  /// 换一步重绘：从顶部开始（翻页类用这个，别用 render）
  function renderTop() {
    scrollResetOnce = true;
    render();
  }

  function render() {
    const desiredPersonKey = isProfileContextScreen(S.screen)
      ? (S.currentPersonName || "李建国")
      : activePersonName();
    if (S.boundPersonKey !== desiredPersonKey) {
      syncActivePersonContext(desiredPersonKey);
    }
    // 点一枚芯片（如每月日号）就是一次整体重绘，innerHTML 一换滚动容器就归零、
    // 页面弹回顶部（网格在页面深处最明显）。同屏重绘前先记下 scrollTop，渲染完写回。
    const keepScroll = (lastRenderedScreen === S.screen && !scrollResetOnce)
      ? (app().querySelector(".scroll")?.scrollTop || 0)
      : 0;
    scrollResetOnce = false;
    const glow = ["confirm-plan", "confirm-exercise"].includes(S.screen);
    app().className = glow ? "glow-low" : "";
    document.querySelector(".phone-screen").classList.toggle("dark-chrome", S.screen === "ocr-capture");
    app().innerHTML = (screens[S.screen] || screens.home)();
    if (keepScroll) {
      const sc = app().querySelector(".scroll");
      if (sc) sc.scrollTop = keepScroll;
    }
    lastRenderedScreen = S.screen;
    if (S.enter) {
      const pg = app().querySelector(".page");
      if (pg) pg.classList.add("enter");
    }
    // toast 与通知弹窗/顶部系统通知横幅挂在 .phone-screen 而非 #app：`#app > *` 会覆盖 position/z-index
    const scr = document.querySelector(".phone-screen");
    scr.querySelector(".toast")?.remove();
    scr.querySelector(".sys-push-banner")?.remove();
    scr.querySelector(".care-notice-modal")?.remove();
    scr.insertAdjacentHTML("beforeend", toastHTML() + sysPushBannerHTML() + careNoticeModalHTML());
    // 首次进入 App 隐私保护提示弹窗：未同意且在登录页时自动弹出
    if (S.screen === "onboard-login" && !S.privacyAccepted && !S.overlay) {
      S.overlay = "privacyGate";
      S.overlayData = {};
    }
    // V0.1 期末反馈：一期过完后首次回到首页自动弹一次（点「稍后再说」后不再自动弹）
    if (S.screen === "home" && !S.overlay && rxShouldPrompt(false)) {
      S.plan.cur.fbPrompted = true;
      S.overlay = "rxFeedback";
      S.overlayData = {};
    }
    overlay().className = "overlay-root" + (S.overlay ? " active" : "");
    overlay().innerHTML = S.overlay ? overlays[S.overlay]() : "";
    bind();
    if (S.screen === "consult" && genIsConsultV2()) rxAfterRender();
    if (S.screen === "home") {
      drawDial();
      requestAnimationFrame(() => {
        applyHug();
        if (S.centerStage) scrollLaneToTask(S.centerStage, true);
        else scrollLaneToBlock(S.block);
        applyCardFocus();
        applyHug();
      });
    }
    renderNav();
    renderSpec();
    scalePhone();
    syncTestTicker();
  }

  function bindClicks(root) {
    if (!root) return;
    root.querySelectorAll("[data-go]").forEach((el) => {
      el.onclick = (e) => {
        e.stopPropagation();
        go(el.dataset.go, el.dataset.how);
      };
    });
    root.querySelectorAll("[data-act]").forEach((el) => {
      if (el.dataset.hold) return;
      el.onclick = (e) => {
        e.stopPropagation();
        act(el.dataset.act, el);
      };
    });
  }

  function bind() {
    bindClicks(document.querySelector(".phone-screen"));
    bindClicks(overlay());
    bindHomeGestures();
    bindScheme4();
    bindTimePick();
    bindLongPresses();
    bindSwipes();
    bindHoldTalk();
    bindOpSearch();
    bindOpHold();
    bindLoginFocus();
    bindEdgeBack();
    bindWheelCols();
    const draft = document.getElementById("chat-draft");
    if (draft) {
      draft.oninput = () => { S.chatDraft = draft.value; syncConsultSend(); };
      draft.onkeydown = (e) => { if (e.key === "Enter") { e.preventDefault(); act("sendChat"); } };
      draft.onfocus = () => {
        S.plusPanel = false;
        S.consultKeyboard = true;
        const page = draft.closest(".page");
        if (!page) return;
        page.classList.add("consult-kb");
        page.classList.remove("consult-panel");
        const plus = page.querySelector(".chat-plus");
        if (plus) {
          plus.innerHTML = I.plus;
          plus.setAttribute("aria-label", "更多功能");
        }
      };
      draft.onblur = () => {
        setTimeout(() => {
          if (S.plusPanel) return;
          if (document.activeElement && document.activeElement.id === "chat-draft") return;
          S.consultKeyboard = false;
          draft.closest(".page")?.classList.remove("consult-kb");
        }, 80);
      };
    }
    const cname = document.getElementById("custom-cat-name");
    if (cname) {
      const syncName = () => {
        S.customDraft.name = cname.value.slice(0, 6);
        if (cname.value.length > 6) cname.value = S.customDraft.name;
        const preview = document.getElementById("custom-cat-preview");
        if (preview) preview.textContent = S.customDraft.name.trim() || "类别名称";
      };
      cname.oninput = syncName;
      cname.addEventListener("compositionend", syncName);
    }
  }

  function laneScroll() {
    return document.querySelector("#lane-body.lane-scroll");
  }

  function bindHomeGestures() {
    const scrub = $("#scrub");
    if (scrub) bindScrub(scrub);
    const lane = laneScroll();
    if (lane) lane.onscroll = onLaneScroll;
    const sysBanner = document.getElementById("sys-push-banner");
    if (sysBanner) {
      let startX = 0, startY = 0, dragging = false;
      sysBanner.addEventListener("pointerdown", (e) => {
        startX = e.clientX;
        startY = e.clientY;
        dragging = true;
      });
      sysBanner.addEventListener("pointermove", (e) => {
        if (!dragging) return;
        const dx = e.clientX - startX;
        const dy = Math.min(0, e.clientY - startY);
        sysBanner.style.transform = `translate(${dx}px, ${dy}px)`;
        sysBanner.style.opacity = String(Math.max(0.25, 1 - (Math.abs(dx) + Math.abs(dy)) / 160));
      });
      const finishSwipe = (e) => {
        if (!dragging) return;
        dragging = false;
        const dx = (e.clientX || startX) - startX;
        const dy = (e.clientY || startY) - startY;
        if (Math.abs(dx) > 40 || dy < -18) {
          sysBanner.style.transition = "transform .18s ease, opacity .18s ease";
          sysBanner.style.transform = `translate(${dx}px, -90px)`;
          sysBanner.style.opacity = "0";
          setTimeout(() => {
            S.sysPushBanner = null;
            sysBanner.remove();
          }, 160);
        } else {
          sysBanner.style.transition = "transform .18s ease, opacity .18s ease";
          sysBanner.style.transform = "translate(0, 0)";
          sysBanner.style.opacity = "1";
          setTimeout(() => { if (sysBanner) sysBanner.style.transition = ""; }, 180);
        }
      };
      sysBanner.addEventListener("pointerup", finishSwipe);
      sysBanner.addEventListener("pointercancel", finishSwipe);
    }
  }

  let laneLock = false;
  function onLaneScroll() {
    if (laneLock) { applyHug(); return; }
    laneLock = true;
    applyHug();
    const focused = applyCardFocus();
    requestAnimationFrame(() => { laneLock = false; });
    if (S.syncDriver === "dial") return;
    if (!focused) return;
    const b = blockOf(focused.h).id;
    if (b === S.block) return;
    S.syncDriver = "list";
    S.centerStage = null;
    S.block = b;
    const title = $("#add-slot-title");
    if (title) title.textContent = `添加${BLOCKS[b].title}计划`;
    animateFaceTo(continuousSnapFace(currentFace(), b), () => {
      S.liveFace = null;
      S.syncDriver = "idle";
    });
  }

  function applyCardFocus() {
    const bite = $("#bite");
    const sc = laneScroll();
    if (!bite || !sc) return null;
    const scale = bite.getBoundingClientRect().width / Math.max(bite.clientWidth, 1);
    const biteTop = bite.getBoundingClientRect().top;
    const focusY = S.centerStage
      ? bite.clientHeight * 0.5
      : L.addH + L.rowGap + L.cardBase * 0.5;
    const span = Math.max(bite.clientHeight * 0.36, 96);
    let best = null;
    let bestD = 1e9;
    sc.querySelectorAll(".task-card").forEach((el) => {
      const top = (el.getBoundingClientRect().top - biteTop) / scale;
      const mid = top + el.offsetHeight / 2;
      const dist = Math.abs(mid - focusY);
      const t = 1 - Math.min(1, dist / span);
      const w = 0.28 + 0.72 * t * t;
      const n = Math.max(0, Math.min(1, (w - 0.28) / 0.72));
      const eased = n * n * (3 - 2 * n);
      el.style.height = `${L.cardBase + (L.cardFocus - L.cardBase) * eased}px`;
      el.classList.toggle("focus", eased > 0.62);
      if (dist < bestD) {
        bestD = dist;
        best = el.id.replace("task-", "");
      }
    });
    applyHug();
    return SEED.find((t) => t.id === best) || null;
  }

  function animateFaceTo(target, done) {
    const from = currentFace();
    const t0 = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / 280);
      const e = 1 - Math.exp(-8 * t) * (1 + 8 * t);
      S.liveFace = from + (target - from) * e;
      drawDial();
      if (t < 1) requestAnimationFrame(tick);
      else {
        S.liveFace = target;
        drawDial();
        if (done) done();
      }
    };
    requestAnimationFrame(tick);
  }

  function bindScrub(scrub) {
    let startY = 0;
    let startFace = 0;
    let dragging = false;
    scrub.onpointerdown = (e) => {
      dragging = true;
      S.syncDriver = "dial";
      S.centerStage = null;
      startY = e.clientY;
      startFace = currentFace();
      S.liveFace = startFace;
      scrub.setPointerCapture(e.pointerId);
    };
    scrub.onpointermove = (e) => {
      if (!dragging) return;
      const scale = document.querySelector(".phone-wrap").style.transform;
      const m = /scale\(([\d.]+)\)/.exec(scale);
      const s = m ? +m[1] : 1;
      S.liveFace = startFace - ((e.clientY - startY) / s) * L.degPerPt;
      const nearest = nearestBlockFacing(S.liveFace);
      if (nearest !== S.block) {
        S.block = nearest;
        const title = $("#add-slot-title");
        if (title) title.textContent = `添加${BLOCKS[S.block].title}计划`;
        syncLaneForBlock(nearest);
      }
      drawDial();
    };
    scrub.onpointerup = () => {
      if (!dragging) return;
      dragging = false;
      const nearest = nearestBlockFacing(S.liveFace);
      S.block = nearest;
      animateFaceTo(continuousSnapFace(S.liveFace, nearest), () => {
        S.liveFace = null;
        S.syncDriver = "idle";
        drawDial();
      });
    };
  }

  function syncLaneForBlock(id) {
    const has = zoneHasTasks(id);
    const body = $("#lane-body");
    const isEmpty = !!(body && body.classList.contains("empty-lane"));
    if (has === !isEmpty && has) {
      scrollLaneToBlock(id);
      applyCardFocus();
      return;
    }
    paintLaneBody();
  }

  function paintLaneBody() {
    const body = $("#lane-body");
    if (!body) return;
    const keep = laneScroll()?.scrollTop || 0;
    body.outerHTML = laneBodyHTML();
    bindClicks(document.querySelector("#lane-body"));
    const lane = laneScroll();
    if (lane) {
      lane.onscroll = onLaneScroll;
      if (zoneHasTasks(S.block)) {
        if (S.syncDriver === "dial") scrollLaneToBlock(S.block);
        else lane.scrollTop = keep;
      }
    }
    applyHug();
    applyCardFocus();
  }

  function refreshHomeSoft() {
    const lane = laneScroll();
    const keep = lane ? lane.scrollTop : 0;
    const greet = document.querySelector(".welcome p");
    if (greet) greet.textContent = greeting();
    paintLaneBody();
    const n = laneScroll();
    if (n) n.scrollTop = keep;
    drawDial();
    applyCardFocus();
  }

  function scrollLaneToBlock(id) {
    const first = liveTasks().find((t) => blockOf(t.h).id === id);
    if (first) scrollLaneToTask(first.id, false);
  }

  function scrollLaneToTask(id, center) {
    const sc = laneScroll();
    const el = document.getElementById(`task-${id}`);
    if (!sc || !el) return;
    const scale = sc.getBoundingClientRect().width / Math.max(sc.clientWidth, 1);
    let delta = (el.getBoundingClientRect().top - sc.getBoundingClientRect().top) / scale;
    if (center) delta -= (sc.clientHeight - el.offsetHeight) / 2;
    sc.scrollTop += delta;
  }

  function laneBodyHTML() {
    if (!S.enrolled) return emptyLaneHTML();
    if (!zoneHasTasks(S.block)) return emptyLaneHTML();
    const tasks = liveTasks();
    if (!tasks.length) return emptyLaneHTML();
    const firstId = (tasks.find((t) => blockOf(t.h).id === S.block) || tasks[0]).id;
    const ghosts = tasks.length <= 2
      ? ghostCardHTML(tasks.length === 1 ? 0.78 : 0.62)
      : "";
    return `<div class="lane-scroll" id="lane-body">${tasks.map((t) => taskCard(t, t.id === firstId)).join("")}${ghosts}</div>`;
  }

  function emptyLaneHTML() {
    return `<div class="empty-lane hug" id="lane-body" data-hug="22">
      <svg class="hug-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path class="hug-path" fill="#fff"/>
        <path class="hug-stroke" fill="none" stroke="rgba(16,84,224,.10)" stroke-width="0.8" vector-effect="non-scaling-stroke"/>
      </svg>
      <div class="hug-inner">
        <div class="empty-mark">${I.calLarge}</div>
        <p class="empty-caption">暂无计划</p>
      </div>
    </div>`;
  }

  function ghostCardHTML(intensity) {
    return `<div class="ghost-card hug" data-hug="18" style="opacity:${0.72 + 0.28 * intensity}">
      <svg class="hug-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path class="hug-path" fill="rgba(255,255,255,${0.88 * intensity})"/>
        <path class="hug-stroke" fill="none" stroke="rgba(16,84,224,${0.08 * intensity})" stroke-width="0.8" vector-effect="non-scaling-stroke"/>
      </svg>
      <div class="hug-inner">
        <div class="flex gap12" style="padding-right:var(--h-trail,16px)">
          <div class="ghost-dot"></div>
          <div class="grow"><div class="ghost-line"></div><div class="ghost-line s"></div></div>
        </div>
      </div>
    </div>`;
  }

  function bindTimePick() {
    const box = $(".time-cols");
    if (!box) return;
    box.querySelectorAll(".time-col").forEach((col) => {
      let y0 = null;
      let acc = 0;
      col.onpointerdown = (e) => { y0 = e.clientY; acc = 0; col.setPointerCapture(e.pointerId); };
      col.onpointermove = (e) => {
        if (y0 == null) return;
        acc += e.clientY - y0;
        y0 = e.clientY;
        if (Math.abs(acc) > 22) {
          stepTime(col.dataset.unit, acc < 0 ? 1 : -1);
          acc = 0;
        }
      };
      col.onpointerup = () => { y0 = null; };
    });
  }

  /// 提醒时间步进范围：锁定在所选时段内（真机 AddEditTaskView：minTotal / maxTotal / canStep*）
  function timeBounds(d) {
    if (d == null || d.block == null) return null;
    const b = BLOCKS[d.block];
    return { min: b.start * 60, max: (b.end - 1) * 60 + 59, startH: b.start, lastH: b.end - 1 };
  }
  function timeCanStep(d, unit, dir) {
    const bd = timeBounds(d);
    if (!bd) return true;
    const total = d.h * 60 + d.m;
    if (unit === "h") return dir > 0 ? d.h < bd.lastH : d.h > bd.startH;
    return dir > 0 ? total + 5 <= bd.max : total - 5 >= bd.min;
  }
  function stepTime(unit, dir) {
    if (!S.overlayData || S.overlay !== "time") return;
    const d = S.overlayData;
    const bd = timeBounds(d);
    if (!timeCanStep(d, unit, dir)) return;
    if (unit === "h") {
      d.h += dir;
      if (!bd) d.h = (d.h + 24) % 24;
    } else {
      let m = d.m + dir * 5;
      if (m < 0) m = bd ? 0 : 55;
      else if (m >= 60) m = bd ? 55 : 0;
      // 跨小时时保持在该时段内
      if (bd) {
        const total = d.h * 60 + m;
        if (total < bd.min || total > bd.max) return;
      }
      d.m = m;
    }
    render();
  }

  function bindWheelCols() {
    document.querySelectorAll(".time-col").forEach((col) => {
      col.onwheel = (e) => {
        e.preventDefault();
        stepTime(col.dataset.unit, e.deltaY < 0 ? 1 : -1);
      };
    });
  }

  function bindLongPresses() {
    document.querySelectorAll("[data-hold]").forEach((el) => {
      const ms = +el.dataset.hold || 2000;
      let holding = false;
      let t0 = 0;
      const fill = document.querySelector(".hold-track i") || el.querySelector(":scope > i") || document.getElementById(el.dataset.fill);
      const ring = el.querySelector(".fg") || document.getElementById(el.dataset.ring);
      const hint = document.getElementById("hold-hint");
      const ringLen = 163.36;
      const paint = (p) => {
        if (fill) fill.style.width = `${p * 100}%`;
        if (ring) ring.style.strokeDashoffset = String(ringLen * (1 - p));
      };
      const loop = (now) => {
        if (!holding) return;
        const p = Math.min(1, (now - t0) / ms);
        paint(p);
        if (p >= 1) {
          holding = false;
          if (hint) hint.textContent = el.dataset.holdDone || "";
          act(el.dataset.act, el);
          return;
        }
        requestAnimationFrame(loop);
      };
      const start = (e) => {
        if (holding) return;
        e.preventDefault();
        holding = true;
        t0 = performance.now();
        if (hint) hint.textContent = "松开手指可取消";
        requestAnimationFrame(loop);
      };
      const end = () => {
        holding = false;
        paint(0);
        if (hint) hint.textContent = el.dataset.holdHint || "长按 2 秒结束";
      };
      el.onpointerdown = start;
      el.onpointerup = end;
      el.onpointerleave = end;
      el.onpointercancel = end;
      el.onmousedown = start;
      el.onmouseup = end;
      el.onmouseleave = end;
    });
  }

  function bindSwipes() {
    const pairs = [
      ["#cal-swipe", () => { S.calOffset -= 1; render(); }, () => { S.calOffset += 1; render(); }],
      ["#vitals-swipe", () => { S.vitalsOffset = Math.min(0, S.vitalsOffset - 1); render(); }, () => { S.vitalsOffset = Math.min(0, S.vitalsOffset + 1); render(); }],
      ["#q-swipe", () => act("qPrev"), () => act("qNext")],
      ["#stamp-cal-swipe", () => { S.stampCalOffset -= 1; render(); }, () => { S.stampCalOffset += 1; render(); }],
      ["#date-pick-swipe", () => act("calMonth", { dataset: { dir: "-1" } }), () => act("calMonth", { dataset: { dir: "1" } })],
      // 操作记录：左右拖动换一天（右拖往新的一天，左拖往更早）
      ["#op-body", () => opStepDay(1), () => opStepDay(-1)],
      // V0.2 计划详情页：单屏模块舞台左右轻扫切换三大模块
      ["#v02-stage-swipe", () => act("v02StepMod", { dataset: { dir: "-1" } }), () => act("v02StepMod", { dataset: { dir: "1" } })],
    ];
    pairs.forEach(([sel, right, left]) => {
      const el = document.querySelector(sel);
      if (!el) return;
      let x0 = null;
      el.onpointerdown = (e) => { x0 = e.clientX; };
      el.onpointerup = (e) => {
        if (x0 == null) return;
        const dx = e.clientX - x0;
        x0 = null;
        if (Math.abs(dx) < 48) return;
        if (sel !== "#date-pick-swipe" && e.target.closest("button, .q-opt")) return;
        if (dx > 0) right();
        else left();
      };
    });
  }


  function bindHoldTalk() {
    const holdBtn = document.getElementById("chat-hold");
    const input = document.getElementById("chat-draft");
    const well = document.querySelector(".chat-well");
    const hint = document.getElementById("listen-hint");
    const phrase = "今天血压有点高";
    let timer = null;
    let typer = null;
    let y0 = 0;
    let x0 = 0;
    let base = "";
    let armed = false;
    let cancelled = false;
    let step = 0;
    const stopTyper = () => { if (typer) { clearInterval(typer); typer = null; } };
    const showHint = (text, cancel) => {
      if (!hint) return;
      hint.hidden = !text;
      hint.textContent = text || "";
      hint.classList.toggle("cancel", !!cancel);
    };
    if (holdBtn) {
      const labelEl = holdBtn.querySelector("span");
      holdBtn.onpointerdown = (e) => {
        if (e.button !== 0) return;
        y0 = e.clientY;
        x0 = e.clientX;
        armed = false;
        cancelled = false;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          armed = true;
          holdBtn.classList.add("listening");
          if (labelEl) labelEl.textContent = "松开 发送";
          showHint("正在聆听，上滑取消", false);
          try { holdBtn.setPointerCapture(e.pointerId); } catch (_) {}
        }, 240);
      };
      holdBtn.onpointermove = (e) => {
        if (!armed && (Math.abs(e.clientX - x0) > 10 || Math.abs(e.clientY - y0) > 10)) {
          if (timer) { clearTimeout(timer); timer = null; }
        }
        if (!armed) return;
        cancelled = y0 - e.clientY > 60;
        holdBtn.classList.toggle("cancelling", cancelled);
        if (labelEl) labelEl.textContent = cancelled ? "松开取消" : "松开 发送";
        showHint(cancelled ? "松开取消" : "正在聆听，上滑取消", cancelled);
      };
      const finishHold = () => {
        if (timer) { clearTimeout(timer); timer = null; }
        if (!armed) {
          toast("请长按说话，或点左侧键盘输入文字");
          return;
        }
        const wasCancelled = cancelled;
        holdBtn.classList.remove("listening", "cancelling");
        if (labelEl) labelEl.textContent = "长按说话";
        showHint("", false);
        armed = false;
        cancelled = false;
        if (!wasCancelled) {
          S.chatDraft = phrase;
          act("sendChat");
        }
      };
      holdBtn.onpointerup = finishHold;
      holdBtn.onpointercancel = finishHold;
    }
    if (!input || !well) return;
    input.onpointerdown = (e) => {
      if (e.button !== 0) return;
      y0 = e.clientY;
      x0 = e.clientX;
      base = input.value;
      armed = false;
      cancelled = false;
      step = 0;
      stopTyper();
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        armed = true;
        input.blur();
        well.classList.add("listening");
        showHint("正在聆听，上滑取消", false);
        try { input.setPointerCapture(e.pointerId); } catch (_) {}
        typer = setInterval(() => {
          if (cancelled) return;
          step = Math.min(phrase.length, step + 1);
          input.value = base + phrase.slice(0, step);
          S.chatDraft = input.value;
          syncConsultSend();
        }, 140);
      }, 400);
    };
    input.onpointermove = (e) => {
      if (!armed && (Math.abs(e.clientX - x0) > 10 || Math.abs(e.clientY - y0) > 10)) {
        if (timer) { clearTimeout(timer); timer = null; }
      }
      if (!armed) return;
      cancelled = y0 - e.clientY > 70;
      well.classList.toggle("cancelling", cancelled);
      showHint(cancelled ? "松开取消" : "正在聆听，上滑取消", cancelled);
      if (cancelled) {
        stopTyper();
        input.value = base;
        S.chatDraft = base;
        syncConsultSend();
      }
    };
    const finish = () => {
      if (timer) { clearTimeout(timer); timer = null; }
      stopTyper();
      if (!armed) return;
      if (cancelled) {
        input.value = base;
        S.chatDraft = base;
      } else {
        S.chatDraft = input.value;
      }
      syncConsultSend();
      well.classList.remove("listening", "cancelling");
      showHint("", false);
      armed = false;
    };
    input.onpointerup = finish;
    input.onpointercancel = finish;
  }

  function proceedLoginWithPhone(phone) {
    // 若输入的是已绑定家属手机号，后端直接匹配进入患者档案首页（通知仅走手机系统通知，不弹居中邀请弹窗）
    const matchedFam = genHasFamily() && (S.family || []).find((f) => f.phoneRaw === phone);
    if (matchedFam) {
      S.role = "family";
      S.actorId = matchedFam.id;
      S.loggedIn = true;
      S.pureFamilyLogin = true;
      go("home", "root");
      return;
    }
    // 新注册建档默认是免费用户（患者本人主账号），直接进入第 2 步「完善你的信息」
    S.phone = phone;
    S.role = "patient";
    S.actorId = null;
    S.pureFamilyLogin = false;
    go("onboard-profile", "push");
  }

  function bindLoginFocus() {
    if (S.screen !== "onboard-login") return;
    const page = document.querySelector(".page");
    page.querySelectorAll("input").forEach((inp) => {
      inp.onfocus = () => { S.loginFocus = true; page.classList.add("login-compact"); };
      inp.onblur = () => {
        setTimeout(() => {
          if (!page.querySelector("input:focus")) {
            S.loginFocus = false;
            page.classList.remove("login-compact");
          }
        }, 80);
      };
    });
    if (S.loginFocus) page.classList.add("login-compact");
  }

  function bindEdgeBack() {
    document.querySelectorAll(".edge-back").forEach((n) => n.remove());
    if (["home", "onboard-login"].includes(S.screen)) return;
    const edge = document.createElement("div");
    edge.className = "edge-back";
    document.querySelector(".phone-screen").appendChild(edge);
    let x0 = null;
    edge.onpointerdown = (e) => { x0 = e.clientX; edge.setPointerCapture(e.pointerId); };
    edge.onpointerup = (e) => {
      if (x0 != null && e.clientX - x0 > 40) {
        if (S.overlay) closeOverlay();
        else back();
      }
      x0 = null;
    };
  }

  function act(name, el) {
    simLogAct(name, el); // 真机模拟埋点：act 是全部 data-act 的唯一漏斗
    const map = {
      back, backFamily, later: closeFlow, goHome, closeFlow, laterCapture,
      close() {
        if (S.overlay === "datePick" && S.overlayData.kind === "customDur") {
          openOverlay("customDur");
          return;
        }
        closeOverlay();
      },
      login() {
        const phone = $("input[name=phone]")?.value || "";
        const code = $("input[name=code]")?.value || "";
        // 真机 loginReady = 手机号 11 位 && 验证码 6 位；这里点按给具体原因，别静默
        if (phone.length !== 11) { toast(phone ? "请输入 11 位手机号" : "请填写手机号"); return; }
        if (code.length !== 6) { toast(code ? "请输入 6 位验证码" : "请填写验证码"); return; }
        if (!S.loginTermsChecked) {
          S.phone = phone;
          openOverlay("loginTermsConfirm");
          return;
        }
        proceedLoginWithPhone(phone);
      },
      acceptInitialPrivacy() {
        S.privacyAccepted = true;
        S.loginTermsChecked = true;
        S.privacyDeclinedStep = false;
        S.privacyExitedNotice = false;
        if (S.overlay === "privacyGate") S.overlay = null;
        render();
        toast("已同意隐私保护政策与服务协议");
      },
      declineInitialPrivacy() {
        S.privacyDeclinedStep = true;
        S.privacyExitedNotice = false;
        render();
      },
      exitAfterDeclinePrivacy() {
        S.privacyExitedNotice = true;
        render();
        toast("已暂停进入应用（真机将安全退出应用）");
      },
      toggleLoginTerms() {
        const phoneInput = $("input[name=phone]");
        if (phoneInput) S.phone = phoneInput.value;
        S.loginTermsChecked = !S.loginTermsChecked;
        render();
      },
      agreeAndLogin() {
        S.privacyAccepted = true;
        S.loginTermsChecked = true;
        closeOverlay();
        const phone = $("input[name=phone]")?.value || S.phone || "";
        proceedLoginWithPhone(phone);
      },
      openAgreementModal() {
        const kind = el.dataset.kind === "service" ? "service-terms" : "privacy";
        const phoneInput = $("input[name=phone]");
        if (phoneInput) S.phone = phoneInput.value;
        if (S.overlay === "loginTermsConfirm") S.overlay = null;
        go(kind, "cover");
      },
      sendCode() { toast("验证码已发送（Demo）"); },
      nextRole() { go("onboard-profile", "push"); },
      pickRole() { S.role = el.dataset.role; render(); },
      pickGender() { S.gender = el.dataset.g; render(); },
      enter() {
        const name = $("input[name=pname]")?.value?.trim();
        if (!name) { toast("请填写姓名"); return; }
        S.name = name;
        S.loggedIn = true;
        // 不动 S.enrolled：真机入组是派生的（hasProfile && medicationConfirmed），
        // 登出登录不清 medications，所以老用户重新登录后仍是已入组
        go("home", "root");
      },
      checkin() {
        const id = el.dataset.id;
        const t = SEED.find((x) => x.id === id);
        if (!t) return;
        if (S.completed[id]) {
          delete S.completed[id];
          if (S.taskVitalsHw) delete S.taskVitalsHw[id];
          unmarkProxy(id);
          if (S.screen === "home") refreshHomeSoft(); else render();
          return;
        }
        // 家属守护视角：仅「运动」与「测血压/测心率」等需被守护者亲自完成的事项弹出「代为录入/打卡 vs 发送提醒」分流；
        // 复查直接走「上传复查资料 / 直接打卡」，日常计划（服药/作息/饮食/自定义）直接帮被守护者一键打卡
        if (shownRole() === "family" && (t.cat === "exercise" || t.cat === "monitoring")) {
          const place = S.screen === "schedule" ? "健康计划" : "首页";
          openOverlay("familyCheckin", { id, place });
          return;
        }
        if (t.cat === "exercise") { openOverlay("exercise", { id }); return; }
        if (t.cat === "appointment") { openOverlay("appointment", { id }); return; }
        if (t.cat === "monitoring" && t.title !== "测心率") {
          const place = S.screen === "schedule" ? "健康计划" : "首页";
          openOverlay("vitals", { id, place });
          if (hasBoundBPMonitor()) startSheetHwSync();
          return;
        }
        S.completed[id] = true;
        markProxy(id);
        if (S.screen === "home") refreshHomeSoft(); else render();
      },
      // 方案四：先记下打卡时刻（已完成卡的祝语要读它），分流仍照旧走 checkin
      s4Checkin() {
        const id = el.dataset.id;
        const was = !!S.completed[id];
        if (!was) {
          if (!S.s4DoneAt) S.s4DoneAt = {};
          S.s4DoneAt[id] = demoNowHM();
        }
        act("checkin", el);
        // 方案四不归 refreshHomeSoft 管（那是方案一的局部重绘），状态真变了就整体重画
        if (S.screen === "home" && !!S.completed[id] !== was) render();
      },
      // 方案四空栏「添加xx计划」：先落到该时段，再复用方案一的 addToday（它认 S.block）
      s4AddToday() { S.block = +el.dataset.b; act("addToday", el); },
      detail() {
        S.taskId = el.dataset.id;
        S.taskMode = "view";
        S.draft = null;
        S.editorCollapsed = [];
        const fromSchedule = S.screen === "schedule";
        S.taskOccurrence = el.dataset.ymd || (fromSchedule ? S.calSelYMD : toYMD(demoDate()));
        go("task-view", "cover");
      },
      addToday() {
        S.addTitle = `添加${BLOCKS[S.block].title}计划`;
        S.lockedBlock = S.block;
        S.lockBlock = true;
        S.lockRecurrence = true;
        S.lockCategory = false;
        S.lockProfessional = true;
        initDraft(null);
        S.editorCollapsed = [];
        go("task-add", "cover");
      },
      firstCreate() {
        S.restRows = REST_PRESET.map((x) => ({ ...x }));
        go("first-rest", "cover");
      },
      // 底坞「运动」圆钮 = 自由运动：不带计划归属，结束后新建「自主散步」
      walkStart() { openContraOrBegin(null); },
      walkResume() { go("walk-session", "cover"); },
      walkReturn() {
        if (topFrame().id === "walk-session") back();
        else replace("walk");
      },
      walkPause() { S.paused = !S.paused; S.walkSheet = true; render(); },
      walkEnd() {
        S.walking = false;
        S.paused = false;
        S.walkSaved = true;
        if (topFrame().id === "walk-session") back();
        else go("walk", "cover");
      },
      walkShare() {
        // 散步分享 = 路径海报（不是集章名信片）；家属视角直接分享患者最近一次散步轨迹
        if (S.walking || S.walkSaved || shownRole() === "family") openOverlay("walkPoster", { date: "2026年9月11日" });
        else toast("还没有散步路径，先出门走一段吧");
      },
      familyConfirmDone() {
        const id = S.overlayData.id;
        const place = S.overlayData.place || "首页";
        const t = SEED.find((x) => x.id === id);
        if (!t) { closeOverlay(); return; }
        if (t.cat === "monitoring" && t.title !== "测心率") {
          openOverlay("vitals", { id, place });
          if (hasBoundBPMonitor()) startSheetHwSync();
          return;
        }
        S.completed[id] = true;
        markProxy(id, place);
        closeOverlay();
      },
      familyRemindTask() {
        const id = S.overlayData.id;
        const place = S.overlayData.place || "首页";
        const title = taskTitle(id);
        S.remindedTasks = S.remindedTasks || {};
        S.remindedTasks[id] = true;
        logOp("提醒了", place, [["计划", title]]);
        closeOverlay();
      },
      familyWalkRemind() {
        const pending = liveTasks().filter((t) => t.cat === "exercise" && !S.completed[t.id]);
        S.remindedTasks = S.remindedTasks || {};
        pending.forEach((t) => { S.remindedTasks[t.id] = true; });
        S.remindedWalkToday = true;
        const exTitle = pending[0] ? pending[0].title : (liveTasks().find((t) => t.cat === "exercise")?.title || "户外散步");
        logOp("提醒了", "运动", [["计划", exTitle]]);
        render();
      },
      switchGuardedPatient() {
        const pid = el.dataset.id;
        const p = (S.guardedPatients || []).find((x) => String(x.id) === String(pid));
        if (!p) return;
        S.activePatientId = p.id;
        S.name = p.name;
        S.gender = p.gender;
        S.age = p.age || 58;
        S.height = p.height;
        S.weight = p.weight;
        toast(`已切换守护患者「${p.name}」`);
        render();
      },
      familyWalkProxyDone() {
        const id = el.dataset.id;
        if (!id) return;
        S.completed[id] = true;
        markProxy(id, "运动");
        toast(`已代${S.name}完成「${taskTitle(id)}」打卡`);
        render();
      },
      shareWalk() {
        openOverlay("walkPoster", {
          km: el.dataset.km, steps: el.dataset.steps,
          dur: el.dataset.time ? el.dataset.time.split("–")[1] : undefined,
          path: el.dataset.path, date: "2026年9月11日",
        });
      },
      delWalk() {
        openOverlay("confirm", {
          title: "删除这条散步记录？",
          body: "删除后不可恢复。",
          ok: "删除", danger: true, action: "doDelWalk",
          km: el.dataset.km, time: el.dataset.time,
        });
      },
      doDelWalk() {
        const { km, time } = S.overlayData;
        S.walkDeleted = S.walkDeleted || {};
        S.walkDeleted[`${km}|${time}`] = true;
        logOp("删除了散步", "散步记录", [["散步", `${km} 公里`]]);
        closeOverlay();
      },
      openWalkFilter() { openOverlay("walkFilter"); },
      clearWalkFilter() { S.walkFilter = null; closeOverlay(); },
      pickWalkRange() {
        const { from, to } = S.overlayData;
        S.walkFilter = from && to ? { from, to } : null;
        closeOverlay();
      },
      pickWalkFrom() {
        S.overlayData.from = el.dataset.ymd;
        if (!S.overlayData.to || S.overlayData.to < S.overlayData.from) S.overlayData.to = S.overlayData.from;
        render();
      },
      pickWalkTo() {
        S.overlayData.to = el.dataset.ymd;
        if (!S.overlayData.from || S.overlayData.from > S.overlayData.to) S.overlayData.from = S.overlayData.to;
        render();
      },
      toggleWalkSheet() { S.walkSheet = !S.walkSheet; render(); },
      // 回正：地图回中并恢复相机跟随（手动拖图后暂停跟随）
      sessRecenter() { S.mapFollow = true; toast("地图已回正"); },
      toggleMusic() { S.musicOn = !S.musicOn; render(); },
      toggleMusicMenu() { S.musicMenu = !S.musicMenu; render(); },
      setMusic() { S.musicSrc = el.dataset.src; S.musicMenu = false; render(); },
      skipTrack() {
        const n = TRACKS.length;
        S.track = (S.track + (+el.dataset.d || 1) + n) % n;
        S.musicOn = true;
        render();
      },
      toggleAi() { S.aiOn = !S.aiOn; render(); },
      // 计划入口完成原任务；自由入口新建「自主散步」再打卡（真机 WalkView.resolveCheckInTask）
      walkSave() {
        const { id, created } = resolveWalkCheckInTask();
        S.completed[id] = true;
        // 散步 + 打卡（自由散步还新建「自主散步」）合成一条
        markProxy(id, null, true);
        logOp("完成了散步", "运动", [["散步", "0.42 公里"], ["打卡", `${taskTitle(id)} 已完成`]]);
        S.walkSaved = false;
        S.walkTaskId = null;
        S.centerStage = id;
        const t = SEED.find((x) => x.id === id);
        S.block = blockOf(t ? t.h : 9).id;
        toast(created ? "已保存并打卡 · 新建「自主散步」" : "已保存并打卡");
        goHome();
      },
      exerciseGo() {
        const id = S.overlayData.id;
        closeOverlay();
        openContraOrBegin(id);
      },
      confirmWalkDespiteContra() {
        const taskId = S.pendingWalk ? S.pendingWalk.taskId : null;
        S.pendingWalk = null;
        closeOverlay();
        beginWalk(taskId);
      },
      exerciseDone() {
        S.completed[S.overlayData.id] = true;
        markProxy(S.overlayData.id);
        closeOverlay();
      },
      appointmentGo() {
        closeOverlay();
        S.reportKind = "visit";
        // V10.49：这条拍摄来自首页复查打卡，提交后接复查报告页而不是直接回首页
        S.apptCapture = true;
        S.archivePlace = "首页";
        startArchive("capture");
      },
      appointmentDone() {
        S.completed[S.overlayData.id] = true;
        markProxy(S.overlayData.id);
        closeOverlay();
      },
      vitalsSave() {
        if (S.vitalsSyncPhase === "syncing") return;
        // 三个读数缺一不可：未录入就打卡会把「—」当成一次测量记进去
        if (S.sys == null || S.dia == null || S.hr == null) {
          toast("请填写收缩压、舒张压与心率");
          return;
        }
        const vid = S.overlayData.id;
        const place = S.overlayData.place || "首页";
        const isHw = !!(hasBoundBPMonitor() && S.vitalsFromHw && S.vitalsSyncPhase === "synced");
        S.completed[vid] = true;
        S.taskVitalsHw = S.taskVitalsHw || {};
        S.taskVitalsHw[vid] = isHw;
        S.vitalsLog = S.vitalsLog || [];
        S.vitalsLog.unshift({ time: demoNowHMText(), sys: S.sys, dia: S.dia, hr: S.hr, hw: isHw });
        if (VITALS_WEEK.length) {
          VITALS_WEEK[VITALS_WEEK.length - 1] = { day: "日", sys: S.sys, dia: S.dia, hr: S.hr };
        }
        // 填读数 + 打卡合成一条
        markProxy(vid, null, true);
        logOp("打卡了", place, [["计划", taskTitle(vid)], ["读数", `${isHw ? "哈宝血压计，" : ""}血压 ${S.sys}/${S.dia}，心率 ${S.hr} bpm`]]);
        closeOverlay();
      },
      sheetHwResync() {
        startSheetHwSync();
      },
      monitorHwSync() {
        startMonitorHwSync();
      },
      // 确认页：计划 / 解析依据分页 / 改备注 / 字段点选修正
      setConfirmPane() { S.confirmPane = el.dataset.p === "basis" ? "basis" : "plan"; render(); },
      basisStep() { applyBasisStep(el.dataset.id, el.dataset.unit, +el.dataset.dir); },
      // 「依据资料」：默认不铺，点开才出现来源照片、再点收起（真机 PlanBasisSection.materialToggle）
      basisMaterial() {
        const sec = el.dataset.sec;
        if (!S.basisMaterial) S.basisMaterial = {};
        S.basisMaterial[sec] = !S.basisMaterial[sec];
        render();
      },
      // 一块改完：确认把这一块的草稿回写重算、取消整块丢掉（真机 confirmRow 两枚）
      basisConfirm() { basisConfirmSec(el.dataset.sec); },
      basisCancel() { basisCancelSec(el.dataset.sec); },
      // 块尾「重新生成计划」：落库这一块残余草稿、清这一块的标记、切回计划页看结果（真机同款闭环）
      basisRegenSec() {
        const sec = el.dataset.sec;
        basisApplyDrafts(sec);
        Object.keys(S.basisEdits || {}).forEach((id) => {
          if (basisSecOfLine(id) === sec) delete S.basisEdits[id];
        });
        S.confirmPane = "plan";
        toast("已按修正重新生成计划");
        render();
      },
      // 点补全候选：诊断接在末尾，其余整体替换；只落草稿，点「确认」才回写
      basisFill() {
        const input = document.getElementById(el.dataset.input);
        if (!input) return;
        const value = el.dataset.v;
        if (input.dataset.pool === "diagnoses") {
          const labels = input.value.split(/[、，,]+/).map((s) => s.trim()).filter(Boolean);
          if (labels.indexOf(value) < 0) labels.push(value);
          input.value = labels.join("、");
        } else {
          input.value = value;
        }
        stashBasisDraft(input.id.replace("basis-input-", ""), input.value);
      },
      editNote() {
        const i = +el.dataset.i;
        const d = S.confirmDrafts[i];
        if (!d) return;
        const v = window.prompt("备注", d.note || "");
        if (v === null) return;
        d.note = v.trim();
        render();
      },
      confirmPlan() {
        const wasEnrolled = S.enrolled;
        // 操作记录：资料 + 各类计划合成一条（真机 recordPlanConfirmed）
        const written = [
          ...(S.confirmDrafts || []).map((d) => ({ title: d.title, cat: d.cat })),
          ...(wasEnrolled ? confirmApptItems().map((a) => ({ title: a.title, cat: "appointment" })) : []),
        ];
        const replacing = wasEnrolled ? opPlanCounts(["用药", "复查"]) : {};
        const material = opMaterialChange();
        // 确认即提交：整批草稿落成计划（真机确认页 confirm → syncMedications / syncAppointments）
        commitConfirmDrafts();
        logOp(wasEnrolled ? "更新了用药与复查" : "完成了首次创建", wasEnrolled ? "健康计划" : entryPlace(), [
          ["资料", material],
          ...opPlanLines(written, replacing),
        ]);
        S.docStock = null;
        S.enrolled = true;
        if (!wasEnrolled) {
          // 首次入组：回首页点亮康复时钟
          finishGeneratedPlan("已确认计划");
          return;
        }
        // 已入组重走创建：关掉整段创建流，落回健康计划页（真机 closeFlow → onClose 只关 showAddTask）
        resetFlowFlags();
        while (S.frames.length > 1 && ["push", "cover"].includes(topFrame().how)) {
          const isModule = topFrame().how === "cover" && MODULE_COVERS.has(topFrame().id);
          if (isModule) break;
          S.frames.pop();
        }
        S.screen = topFrame().id;
        S.overlay = null;
        S.chatMenu = false;
        render();
        toast("已确认计划");
      },
      manualCreate() {
        S.addTitle = "添加计划";
        S.lockBlock = false;
        S.lockRecurrence = false;
        S.lockCategory = true;
        initDraft({ cat: "medication", h: 8, m: 0, title: "服用阿司匹林肠溶片", note: "按医嘱服用" });
        S.draft.cycle = true;
        if (S.enrolled) {
          // 已入组：加到本次草稿后回确认页
          S.draftReturn = S.screen;
          S.confirmEditIndex = null;
        } else {
          // 首次入组：添加后即入组回首页点亮时钟
          S.pendingManualEnroll = true;
        }
        go("task-add", "cover");
      },
      reparseCase() {
        S.captureMode = "intake";
        if (!popTo("ocr-capture")) replace("ocr-capture");
      },
      confirmExercise() {
        const written = (S.confirmDrafts || []).map((d) => ({ title: d.title, cat: "exercise" }));
        const replacing = opPlanCounts(["运动"]);
        commitConfirmDrafts("exercise");
        logOp("生成了运动计划", "健康计划", opPlanLines(written, replacing));
        finishGeneratedPlan("已写入运动计划");
      },
      newExerciseDraft() {
        S.draftReturn = S.screen;
        S.addTitle = "添加计划";
        S.lockBlock = false;
        S.lockRecurrence = false;
        S.lockCategory = true;
        initDraft({ cat: "exercise", h: 8, m: 0, title: "晨间散步", note: "匀速步行，心率 ≤ 110 bpm" });
        S.draft.cycle = true;
        go("task-add", "cover");
      },
      editConfirmDraft() {
        S.draftReturn = S.screen;
        // 记住改的是哪一条，保存时回写草稿列表（真机确认页草稿编辑回写 draftTasks）
        S.confirmEditIndex = el.dataset.i == null ? null : +el.dataset.i;
        S.addTitle = "添加计划";
        S.lockBlock = false;
        S.lockRecurrence = false;
        S.lockCategory = true;
        const cat = el.dataset.cat || "exercise";
        const time = el.dataset.time || "08:00";
        const hm = String(time).match(/(\d{1,2}):(\d{2})/);
        const existingNote = S.confirmEditIndex != null ? (S.confirmDrafts?.[S.confirmEditIndex]?.note || "") : "";
        initDraft({
          cat,
          h: hm ? +hm[1] : parseHour(time),
          m: hm ? +hm[2] : 0,
          title: el.dataset.title || "",
          note: existingNote,
        });
        S.draft.cycle = cat !== "appointment";
        if (cat === "appointment") S.draft.rule = "monthly";
        // 带着这条草稿原本的提醒设置回来，否则编辑一次就被重置成开
        S.draft.remind = S.confirmDrafts?.[S.confirmEditIndex]?.remind !== false;
        S.draft.muteFirst = !!S.confirmDrafts?.[S.confirmEditIndex]?.muteFirst;
        go("task-add", "cover");
      },
      delConfirmDraft() {
        const i = +el.dataset.i;
        if (!Number.isNaN(i) && S.confirmDrafts) S.confirmDrafts.splice(i, 1);
        render();
      },
      addRest() {
        S.restRows.push({ name: "早餐", t: "07:30" });
        render();
      },
      delRest() {
        S.restRows.splice(+el.dataset.i, 1);
        render();
      },
      editRestTime() {
        const i = +el.dataset.i;
        const r = S.restRows[i];
        const [h, m] = r.t.split(":").map(Number);
        openOverlay("time", { title: r.name, h, m: Math.round(m / 5) * 5 % 60, kind: "rest", i });
      },
      editRestName() { openOverlay("restPreset", { i: +el.dataset.i }); },
      pickRestName() {
        const name = el.dataset.name;
        const row = S.restRows[+S.overlayData.i];
        const preset = REST_PRESET.find((x) => x.name === name);
        row.name = name;
        if (preset) {
          if (preset.cat) row.cat = preset.cat;
          else delete row.cat;
          row.note = preset.note || "";
        }
        closeOverlay();
      },
      timeStep() { stepTime(el.dataset.unit, +el.dataset.dir); },
      timeDone() {
        const d = S.overlayData;
        if (d.kind === "rest") S.restRows[d.i].t = `${pad(d.h)}:${pad(d.m)}`;
        if (d.kind === "draft" && S.draft) { S.draft.hour = d.h; S.draft.min = d.m; }
        closeOverlay();
      },
      openScope() { openOverlay("scope"); },
      pickScope() { S.scheduleScope = el.dataset.s; closeOverlay(); },
      calPrev() { S.calOffset -= 1; render(); },
      calNext() { S.calOffset += 1; render(); },
      vitalsPrev() { S.vitalsOffset -= 1; render(); },
      vitalsNext() { S.vitalsOffset = Math.min(0, S.vitalsOffset + 1); render(); },
      stampPrev() { S.stampCalOffset -= 1; render(); },
      stampNext() { S.stampCalOffset += 1; render(); },
      // 集章日历选日：回写选中日并关弹窗（真机 StampCalendarPopup）
      pickStampDay() {
        if (!el.dataset.ymd) return;
        S.stampSelYMD = el.dataset.ymd;
        closeOverlay();
      },
      draftCat() {
        if (!S.draft || S.lockCategory) return;
        const prev = S.draft.cat;
        S.draft.cat = el.dataset.c;
        S.draft.customId = null;
        if (el.dataset.c === "monitoring" && prev !== "monitoring") {
          S.sys = null;
          S.dia = null;
          S.hr = null;
        }
        if (el.dataset.c === "appointment" && !S.lockRecurrence) {
          S.draft.cycle = true;
          S.draft.rule = "monthly";
          if (!S.draft.monthDays?.length) S.draft.monthDays = [11];
        }
        render();
      },
      draftCycle() {
        if (!S.draft || S.lockRecurrence) return;
        const orig = SEED.find((x) => x.id === S.taskId);
        const nextCycle = el.dataset.v === "1";
        S.draft.cycle = nextCycle;
        if (S.screen === "task-edit" && orig) {
          if (!nextCycle) {
            S.draft.onceDate = S.draft.occurrence || defaultNewPlanStartYmd(orig);
          } else {
            S.draft.occurrence = S.draft.onceDate || defaultNewPlanStartYmd(orig);
            S.draft.onceDate = orig.onceDate || toYMD(demoDate());
          }
        }
        if (S.draft.cycle) S.draft.rule = S.draft.cat === "appointment" ? "monthly" : (S.draft.rule || "daily");
        render();
      },
      editorGroup() {
        syncDraftInputs();
        const g = el.dataset.g;
        if (!g) return;
        const set = new Set(S.editorCollapsed || []);
        if (set.has(g)) set.delete(g); else set.add(g);
        S.editorCollapsed = [...set];
        render();
      },
      v02PickMod() {
        syncDraftInputs();
        S.v02Mod = Math.max(0, Math.min(2, +el.dataset.m || 0));
        render();
      },
      v02StepMod() {
        syncDraftInputs();
        const cur = S.v02Mod ?? 0;
        const next = Math.max(0, Math.min(2, cur + (+el.dataset.dir || 0)));
        if (next === cur) return;
        S.v02Mod = next;
        render();
      },
      draftRule() { if (S.draft) { S.draft.rule = el.dataset.r; S.draft.duration = "oneYear"; S.draft.endDate = null; S.draft.customDays = null; render(); } },
      draftWeek() {
        if (!S.draft) return;
        const n = +el.dataset.w;
        const set = new Set(S.draft.weekdays || []);
        if (set.has(n)) { if (set.size > 1) set.delete(n); }
        else set.add(n);
        S.draft.weekdays = [...set];
        render();
      },
      draftDur() {
        if (S.draft) {
          S.draft.duration = el.dataset.d;
          S.draft.endDate = null;
          S.draft.customDays = null;
          S.draft.touchedDuration = true;
          render();
        }
      },
      openCustomCat() {
        if (S.taskMode === "view" && S.screen === "task-view") return;
        S.customFromType = false;
        // 同一个弹层两用，新建前必须清掉改名态，否则会残留成「编辑类别」
        S.catRenameId = null;
        S.customDraft = { name: "" };
        openOverlay("customCat");
      },
      openTypeCustom() {
        S.customFromType = true;
        S.catRenameId = null;
        S.customDraft = { name: "" };
        openOverlay("customCat");
      },
      saveCustomCat() {
        const name = flushCustomCatName();
        if (!name) { toast("请填写类别名称"); return; }
        const cat = { id: S.customSeq++, name: name.slice(0, 6), icon: UNIFIED_CUSTOM_ICON, color: "blue" };
        S.customCats.push(cat);
        const fromType = S.customFromType || S.screen === "select-type";
        S.customFromType = false;
        if (fromType) {
          enterCustomTask(cat);
          return;
        }
        if (S.draft) {
          S.draft.cat = "custom";
          S.draft.customId = cat.id;
        }
        closeOverlay();
      },
      pickCustomCat() {
        if (!S.draft || (S.lockCategory && S.draft.cat !== "custom")) return;
        S.draft.cat = "custom";
        S.draft.customId = +el.dataset.id;
        render();
      },
      typeCustom() {
        const cat = S.customCats.find((x) => x.id === +el.dataset.id);
        if (!cat) return;
        enterCustomTask(cat);
      },

      // MARK: 类别管理（真机 CategoryManageView）
      openCatManage() {
        go("category-manage", "push");
      },
      openCatRename() {
        const cat = S.customCats.find((x) => x.id === +el.dataset.id);
        if (!cat) return;
        S.catRenameId = cat.id;
        S.customDraft = { name: cat.name };
        openOverlay("customCat");
      },
      saveCatRename() {
        const name = flushCustomCatName();
        if (!name) { toast("请填写类别名称"); return; }
        const cat = S.customCats.find((x) => x.id === S.catRenameId);
        if (cat) cat.name = name;
        S.catRenameId = null;
        closeOverlay();
      },
      openCatRemoval() {
        const cat = S.customCats.find((x) => x.id === +el.dataset.id);
        if (!cat) return;
        S.catRemovalId = cat.id;
        S.catDiscardConfirm = false;
        if (catUsage(cat.id)) {
          openOverlay("catRemoval");
        } else {
          // 无存量：删除无副作用，一句确认即可
          openOverlay("confirm", {
            title: `删除「${cat.name}」？`,
            body: "该类别下暂无计划，删除后不可恢复。",
            ok: "删除",
            danger: true,
            action: "doRemoveEmptyCat",
          });
        }
      },
      doRemoveEmptyCat() {
        S.customCats = S.customCats.filter((x) => x.id !== S.catRemovalId);
        S.catRemovalId = null;
        closeOverlay();
      },
      catDiscardAsk() {
        S.catDiscardConfirm = true;
        render();
      },
      catDiscardBack() {
        S.catDiscardConfirm = false;
        render();
      },
      doDiscardCatPlans() {
        const id = S.catRemovalId;
        // 连同该类别下的计划一起删（真机 RehabPlanStore.deleteTasks(inCustomCategory:)）
        for (let i = SEED.length - 1; i >= 0; i -= 1) {
          if (SEED[i].customId === id) SEED.splice(i, 1);
        }
        S.customCats = S.customCats.filter((x) => x.id !== id);
        S.catRemovalId = null;
        S.catDiscardConfirm = false;
        closeOverlay();
      },
      pickCatMigrate() {
        const id = S.catRemovalId;
        const to = el.dataset.c;
        const toCustomId = el.dataset.id ? +el.dataset.id : null;
        // 计划改判到目标类别（真机 migrateCustomCategory）
        SEED.forEach((t) => {
          if (t.customId !== id) return;
          t.cat = to;
          if (to === "custom") t.customId = toCustomId;
          else delete t.customId;
        });
        S.customCats = S.customCats.filter((x) => x.id !== id);
        S.catRemovalId = null;
        closeOverlay();
      },
      openCustomDur() {
        if (!S.draft || S.taskMode === "view" && S.screen === "task-view") return;
        const rule = S.draft.rule;
        S.customDurDays = Math.max(
          S.draft.customDays || defaultCustomDays(rule),
          customDurMinDays(rule)
        );
        openOverlay("customDur");
      },
      customDurStep() {
        const rule = S.draft?.rule || "daily";
        const next = customDurCount(S.customDurDays, rule) + (+el.dataset.dir);
        if (next < 1) return;
        const days = daysFromCount(next, rule);
        const minDays = customDurMinDays(rule);
        if (days < minDays) return;
        if (days === S.customDurDays && +el.dataset.dir > 0) return;
        S.customDurDays = days;
        render();
      },
      openCustomDurCal() {
        const rule = S.draft?.rule || "daily";
        const days = Math.max(S.customDurDays || 30, customDurMinDays(rule));
        const end = toYMD(demoDate(days - 1));
        openOverlay("datePick", { selected: end, month: end, kind: "customDur" });
      },
      saveCustomDur() {
        if (!S.draft) { closeOverlay(); return; }
        S.draft.duration = "custom";
        S.draft.customDays = S.customDurDays;
        closeOverlay();
      },
      draftMonthDay() {
        if (!S.draft) return;
        const n = +el.dataset.d;
        const set = new Set(S.draft.monthDays || []);
        if (set.has(n)) { if (set.size > 1) set.delete(n); }
        else set.add(n);
        const nums = [...set].filter((x) => x !== 0).sort((a, b) => a - b);
        S.draft.monthDays = set.has(0) ? nums.concat(0) : nums;
        render();
      },
      openOnceDate() {
        if (!S.draft || S.lockRecurrence) return;
        const ymd = S.draft.onceDate || toYMD(demoDate());
        const floor = S.screen === "task-edit" ? toYMD(demoDate()) : null;
        openOverlay("datePick", { selected: ymd, month: ymd, minYmd: floor });
      },
      openOccurrenceDate() {
        if (!S.draft) return;
        const orig = SEED.find((x) => x.id === S.taskId);
        const floor = toYMD(demoDate());
        const ymd = S.draft.occurrence || defaultNewPlanStartYmd(orig);
        openOverlay("datePick", { selected: ymd, month: ymd, kind: "occurrence", minYmd: floor });
      },
      openSeriesEnd() {
        if (!S.draft) return;
        const showOcc = S.screen === "task-edit" && S.draft.cycle;
        const anchor = showOcc ? (S.draft.occurrence || S.draft.onceDate) : S.draft.onceDate;
        const ymd = resolvedDraftEndYmd(S.draft, anchor);
        openOverlay("datePick", { selected: ymd, month: ymd, kind: "seriesEnd", minYmd: anchor });
      },
      pickCalDay() {
        if (!S.overlayData) return;
        S.overlayData.selected = el.dataset.ymd;
        S.overlayData.month = el.dataset.ymd;
        if (S.overlayData.kind === "customDur") {
          const diff = Math.round((parseYMD(el.dataset.ymd) - seriesStartDate()) / 86400000) + 1;
          const minDays = customDurMinDays(S.draft?.rule || "daily");
          S.customDurDays = Math.min(365, Math.max(minDays, diff));
        } else if (S.overlayData.kind === "occurrence" && S.draft) {
          const nextOcc = el.dataset.ymd;
          S.draft.occurrence = nextOcc;
          const orig = SEED.find((x) => x.id === S.taskId);
          if (orig && orig.endDate && !S.draft.touchedDuration && nextOcc >= orig.endDate) {
            S.draft.endDate = null;
            S.draft.duration = "oneYear";
            S.draft.customDays = null;
          }
        } else if (S.overlayData.kind === "seriesEnd" && S.draft) {
          S.draft.endDate = el.dataset.ymd;
          S.draft.duration = null;
          S.draft.touchedDuration = true;
        } else if (S.overlayData.kind === "opDay") {
          S.opDay = el.dataset.ymd;
        } else if (S.draft) S.draft.onceDate = el.dataset.ymd;
        render();
      },
      calMonth() {
        if (!S.overlayData) return;
        S.overlayData.month = shiftMonthYMD(S.overlayData.month, +el.dataset.dir);
        render();
      },
      calToday() {
        // 操作记录按真实「今天」算（记录按真实时间写入）
        const rawToday = S.overlayData.kind === "opDay" ? toYMD(new Date()) : toYMD(demoDate());
        const ymd = S.overlayData.minYmd && S.overlayData.minYmd > rawToday ? S.overlayData.minYmd : rawToday;
        if (S.overlayData.kind === "opDay") {
          S.overlayData.selected = ymd;
          S.overlayData.month = ymd;
          S.opDay = ymd;
        } else if (S.overlayData.kind === "customDur") {
          const minDays = customDurMinDays(S.draft?.rule || "daily");
          if (minDays > 1) return;
          S.overlayData.selected = ymd;
          S.overlayData.month = ymd;
          S.customDurDays = 1;
        } else if (S.overlayData.kind === "occurrence" && S.draft) {
          S.overlayData.selected = ymd;
          S.overlayData.month = ymd;
          S.draft.occurrence = ymd;
          const orig = S.tasks.find(t => t.id === S.draft.id);
          if (orig && orig.endDate && !S.draft.touchedDuration) {
            const minDays = customDurMinDays(S.draft.rule || "daily");
            const remDays = Math.floor((parseYMD(orig.endDate) - parseYMD(ymd)) / 86400000) + 1;
            if (ymd >= orig.endDate || remDays < minDays) {
              S.draft.endDate = null;
              S.draft.duration = 1;
            }
          }
        } else if (S.overlayData.kind === "seriesEnd" && S.draft) {
          S.overlayData.selected = ymd;
          S.overlayData.month = ymd;
          S.draft.endDate = ymd;
          S.draft.duration = null;
          S.draft.touchedDuration = true;
        } else {
          S.overlayData.selected = ymd;
          S.overlayData.month = ymd;
          if (S.draft) S.draft.onceDate = ymd;
        }
        render();
      },
      calDone() {
        if (S.overlayData.kind === "customDur") { openOverlay("customDur"); return; }
        if (S.overlayData.kind === "basisDate") {
          // 选完先落草稿（真机：选日期只进草稿箱，点这一块的「确认」才写回）
          if (S.overlayData.selected) {
            stashBasisDraft(`appt-date-${S.overlayData.i}`, S.overlayData.selected);
          }
          closeOverlay();
          return;
        }
        closeOverlay();
      },
      // 依据页来源日期：点开万年历（真机 BasisDateField + CalendarDatePickerView）
      basisDate() {
        const hit = el.dataset.id.match(/^appt-date-(\d+)$/);
        if (!hit) return;
        const a = liveAppts()[+hit[1]];
        if (!a) return;
        const picked = basisDraftFor(el.dataset.id) ?? a.sourceYMD;
        openOverlay("datePick", { kind: "basisDate", i: +hit[1], selected: picked, month: picked });
      },
      draftBlock() {
        if (!S.draft || S.lockBlock) return;
        const b = +el.dataset.b;
        S.draft.block = b;
        const blk = BLOCKS[b];
        if (blk && (S.draft.hour < blk.start || S.draft.hour >= blk.end)) {
          S.draft.hour = b === 1 ? 8 : blk.start;
          S.draft.min = 0;
        }
        render();
      },
      editDraftTime() {
        if (!S.draft) return;
        openOverlay("time", { title: "提醒时间", h: S.draft.hour, m: S.draft.min, kind: "draft", block: S.draft.block });
      },
      // 查看计划 · 本次提醒：只压提醒，不动任务与打卡（对齐 RehabPlanStore.setMuted）
      // 总闸关着时拨不开：弹窗引导去个人中心，而不是留一行小字（真机 blockIfGateClosed）
      muteToday() {
        if (blockedByGate()) return;
        const id = S.taskId;
        S.mutedToday[id] = !S.mutedToday[id];
        render();
      },
      // 添加 / 编辑计划 · 到点提醒：写进草稿，随「添加 / 确认」一起落库
      // 总闸关着时拨不开：弹窗引导去个人中心，而不是留一行小字（真机 blockIfGateClosed）
      // 添加 / 编辑计划 · 本次提醒：只压这一次，同样写进草稿
      draftMuteToday() {
        if (!S.draft) return;
        const cat = taskCatKey(S.draft);
        // 显示为关（已被静音、或总闸关着）时点它＝想打开
        const shown = gateOpen(cat) && !S.draft.muteFirst;
        if (!shown && blockedByGate(cat)) return;
        // 开关方向是「开 = 会提醒」，而 muteFirst 记的是反过来的「静音」
        S.draft.muteFirst = shown;
        render();
      },
      // 查看计划 · 家属通知：系列级一档（V10.52）。闸＝通知家属 × 已绑定 × 类别；
      // 未绑定先去填写（填完自动进打卡通知页），总闸关着引导去个人中心
      famNotify() {
        const t = SEED.find((x) => x.id === S.taskId);
        const shown = familyGateOpen(taskCatKey(t)) && !S.famOff[S.taskId];
        if (!shown && blockedByFamilyGate(taskCatKey(t))) return;
        S.famOff[S.taskId] = !S.famOff[S.taskId];
        render();
      },
      // 添加 / 编辑计划 · 家属通知：写进草稿，随「添加 / 确认」一起落库
      draftFamNotify() {
        if (!S.draft) return;
        const cat = taskCatKey(S.draft);
        const shown = familyGateOpen(cat) && S.draft.famNotify !== false;
        if (!shown && blockedByFamilyGate(cat)) return;
        S.draft.famNotify = !shown;
        render();
      },
      goNotify() { closeOverlay(); go("notify", "cover"); },
      // 查看计划 · 取消本次打卡：解禁提醒与删除（真机 store.toggleCompletion 的反向）
      undoCheckIn() { delete S.completed[S.taskId]; unmarkProxy(S.taskId); render(); },
      sendChat() {
        const v = (S.chatDraft || "").trim();
        if (!v && !S.pendingImage) return;
        S.consultOpen = true;
        const photo = S.pendingImage ? "（图片）" : "";
        const hadImage = !!S.pendingImage;
        const userText = `${photo}${v || "请帮我看看这张图片"}`;
        S.messages.push({ who: "user", t: userText });
        if (!genHasVip()) {
          S.messages.push({ who: "vip", t: "需购买 VIP 才能使用哈宝问诊" });
        } else {
          const routed = routeFreeConsultTurn(v || "请帮我看看这张图片", hadImage);
          S.messages.push({ who: "ai", t: routed.reply });
        }
        S.chatDraft = "";
        S.pendingImage = false;
        S.inputMode = "voice";
        S.consultKeyboard = false;
        render();
      },
      toggleInput() {
        const toText = S.inputMode !== "text";
        S.inputMode = toText ? "text" : "voice";
        S.plusPanel = false;
        S.consultKeyboard = toText;
        render();
        if (toText) {
          setTimeout(() => { document.getElementById("chat-draft")?.focus(); }, 20);
        }
      },
      uploadDischarge() { S.captureMode = "intake"; seedDocGroups(0); replace("ocr-capture"); },
      ocrConfirm() {
        if (!canSubmitCapture()) {
          const empty = S.docGroups.find((g) => g.cat === "dischargeRecord" && !g.pages)
            || S.docGroups.find((g) => g.cat === "dischargeRecord");
          if (empty) S.activeGroup = empty.id;
          toast(submitBlockedHint());
          return;
        }
        go("ocr-detail", "push");
      },
      ocrParse() {
        if (!canSubmitCapture()) { toast(submitBlockedHint()); return; }
        go("confirm-plan", "push");
      },
      ocrSubmit() {
        if (!canSubmitCapture()) { toast(submitBlockedHint()); return; }
        toast("已保存资料");
        finishArchive();
      },
      addDocGroup() {
        if (isVisitCapture()) { startNewDocGroup("reviewReport"); render(); return; }
        S.catPickerMode = "newGroup";
        S.pendingCat = "dischargeRecord";
        S.catPickerGroup = null;
        openOverlay("catPick");
      },
      pickDocCat() { S.pendingCat = el.dataset.c; render(); },
      confirmDocCat() {
        if (S.catPickerMode === "change") {
          const g = S.docGroups.find((x) => x.id === S.catPickerGroup);
          if (g) g.cat = S.pendingCat;
        } else {
          startNewDocGroup(S.pendingCat);
        }
        closeOverlay();
      },
      selectDocGroup() {
        const id = +el.dataset.id;
        if (S.activeGroup === id) return;
        S.activeGroup = id;
        render();
      },
      delDocGroup() {
        const id = +el.dataset.id;
        const g = S.docGroups.find((x) => x.id === id);
        if (!g) return;
        if (!canDeleteDocGroup(g)) { toast(`${docCat(g.cat).t}为必传，至少保留一组`); return; }
        S.docGroups = S.docGroups.filter((x) => x.id !== id);
        if (S.activeGroup === id) S.activeGroup = S.docGroups[0]?.id || 0;
        if (S.screen === "ocr-detail" && !S.docGroups.some((x) => x.pages > 0)) {
          if (!popTo("ocr-capture")) replace("ocr-capture");
          return;
        }
        if (S.screen === "ocr-group" && !S.docGroups.some((x) => x.id === S.activeGroup)) {
          if (!popTo("ocr-capture")) replace("ocr-capture");
          return;
        }
        render();
      },
      delDocPage() {
        const g = S.docGroups.find((x) => x.id === +el.dataset.id);
        if (!g || g.pages <= 0) return;
        g.pages -= 1;
        render();
      },
      changeDocCat() {
        const g = S.docGroups.find((x) => x.id === +el.dataset.id);
        if (!g || isVisitCapture()) return;
        S.catPickerMode = "change";
        S.catPickerGroup = g.id;
        S.pendingCat = g.cat;
        openOverlay("catPick");
      },
      shutter() {
        if (!S.docGroups.length) {
          if (isVisitCapture()) { startNewDocGroup("reviewReport"); render(); return; }
          S.catPickerMode = "newGroup";
          S.pendingCat = "dischargeRecord";
          openOverlay("catPick");
          return;
        }
        const g = activeDoc();
        g.pages += 1;
        toast(`已加入${groupDisplayName(g)}`);
        render();
      },
      albumImport() {
        if (!S.docGroups.length) { act("addDocGroup"); return; }
        const g = activeDoc();
        g.pages += 1;
        toast(`已从相册加入${groupDisplayName(g)}`);
        render();
      },
      previewDocGroup() {
        if (!activeDoc()) return;
        go("ocr-group", "push");
      },
      ocrReshoot() {
        if ((S.screen === "ocr-detail" || S.screen === "ocr-group") && S.frames.some((f) => f.id === "ocr-capture")) {
          popTo("ocr-capture");
          return;
        }
        present("ocr-capture", S.captureMode === "archive" ? "push" : "replace");
      },
      toggleDone() { S.scheduleFilter = el.dataset.f; render(); },
      scope() { openOverlay("scope"); },
      calMode() { S.calMode = S.calMode === "week" ? "month" : "week"; render(); },
      pickDay() {
        if (el.dataset.ymd) S.calSelYMD = el.dataset.ymd;
        render();
      },
      today() { S.calSelYMD = toYMD(demoDate()); S.calOffset = 0; render(); },
      addPlan() { go("select-type", "cover"); },
      typeMed() {
        S.captureMode = "intake";
        seedDocGroups(3);
        // 载入的存量：确认时对比出这一趟资料改了什么
        S.docStock = S.docGroups.map((g) => ({ ...g }));
        // V10.98：有存量也直接进拍摄取景——存量组列在底部组轨道，不再先落资料详情
        replace("ocr-capture");
      },
      // 运动链独立草稿：先清空，进确认页时再种（避免沿用用药链的草稿）
      typeEx() { S.contra = false; S.confirmDrafts = null; replace("exercise-risk"); },
      typeDaily() {
        const presets = {
          monitoring: { title: "", note: "安静休息 5 分钟后测量，记录收缩压、舒张压与心率。", h: 7, m: 0 },
          diet: { title: "", note: "少盐少油，均衡搭配蔬菜、优质蛋白与主食。", h: 8, m: 0 },
          rest: { title: "", note: "起床、午休与入睡保持规律，避免熬夜。", h: 7, m: 0 },
        };
        const cat = el.dataset.c || "monitoring";
        const p = presets[cat] || presets.monitoring;
        S.addTitle = "添加计划";
        S.lockBlock = false;
        S.lockRecurrence = false;
        S.lockCategory = true;
        initDraft({ cat, h: p.h, m: p.m, title: p.title, note: p.note });
        S.draft.cycle = false;
        replace("task-add");
      },
      editTask() {
        const orig = SEED.find((x) => x.id === S.taskId);
        initDraft(orig);
        if (S.draft) {
          const defaultStart = defaultNewPlanStartYmd(orig);
          S.draft.occurrence = defaultStart;
          if (!S.draft.cycle) S.draft.onceDate = defaultStart;
        }
        go("task-edit", "replace");
      },
      // 保存前回读输入框名称 / 备注；空名称拦下（真机 AddEditTaskView 空名校验）
      saveTask() {
        syncDraftInputs();
        if (!S.draft?.title) { toast("请填写事项名称"); return; }
        const risk = evaluatePlanRiskFor({
          personName: activePersonName(),
          cat: S.draft.cat,
          title: S.draft.title,
          hour: S.draft.hour,
          min: S.draft.min,
          cycle: !!S.draft.cycle,
          rule: S.draft.rule || "daily",
          editingTaskId: S.taskId,
          isProxyAction: false,
        });
        if (risk.hasHardBlock) {
          toast(risk.hardBlockMessage);
          return;
        }
        if (risk.hasWarning) {
          openOverlay("confirm", {
            title: risk.warningTitle,
            body: risk.warningMessage,
            cancel: "先去调整",
            ok: "继续保存",
            action: "proceedSaveTaskAfterRisk",
          });
          return;
        }
        map.proceedSaveTaskAfterRisk();
      },
      proceedSaveTaskAfterRisk() {
        closeOverlay();
        const orig = SEED.find((x) => x.id === S.taskId);
        const prompt = buildScheduleUpdatePrompt(orig, S.draft);
        if (prompt) {
          openOverlay("confirm", {
            title: "确认更新计划",
            planCompare: prompt,
            cancel: "返回",
            ok: "确认",
            action: "commitSaveTask",
          });
          return;
        }
        map.commitSaveTask();
      },
      commitSaveTask() {
        const orig = SEED.find((x) => x.id === S.taskId);
        const prompt = buildScheduleUpdatePrompt(orig, S.draft);
        closeOverlay();
        let splitLine = null;
        if (prompt && prompt.splitsSeries && orig && S.draft) {
          const today = toYMD(demoDate());
          const origStart = orig.onceDate || today;
          const origEnd = resolvedTaskEndYmd(orig);
          const truncates = orig.cycle !== false && origEnd >= prompt.newStartYmd;
          const cutEndYmd = truncates ? addDaysYMD(prompt.newStartYmd, -1) : origEnd;
          if (truncates) {
            orig.onceDate = origStart;
            orig.endDate = cutEndYmd;
            orig.duration = null;
            orig.customDays = null;
          } else if (!orig.onceDate) {
            orig.onceDate = origStart;
          }
          splitLine = ["原计划", `${truncates ? "至" : "已在"}${yearMonthDayLabel(parseYMD(cutEndYmd))}结束`];
          const newId = nextTaskId();
          SEED.push({ ...orig, id: newId });
          S.draft.onceDate = prompt.newStartYmd;
          applyDraftToTask(newId, S.draft);
          const opened = S.taskOccurrence || today;
          S.taskId = opened >= prompt.newStartYmd ? newId : orig.id;
        } else {
          if (prompt && S.draft) {
            S.draft.onceDate = prompt.newStartYmd;
          }
          applyDraftToTask(S.taskId, S.draft);
        }
        const lines = [["计划", (S.draft && S.draft.title) || taskTitle(S.taskId)]];
        if (splitLine) lines.push(splitLine);
        if (S.draft && S.draft.cat === "monitoring" && S.sys && S.dia) {
          lines.push(["读数", `血压 ${S.sys}/${S.dia}${S.hr ? `，心率 ${S.hr} bpm` : ""}`]);
        }
        logOp("修改了计划", entryPlace(), lines);
        go("task-view", "replace");
      },
      cancelEdit() { go("task-view", "replace"); },
      cancelAdd() {
        if (S.draftReturn || S.pendingManualEnroll) {
          S.draftReturn = null;
          S.pendingManualEnroll = false;
          S.confirmEditIndex = null; // 否则下次 addTask 会回写错行
          dismissCover();
          return;
        }
        closeFlow();
      },
      addTask() {
        syncDraftInputs();
        if (!S.draft?.title) { toast("请填写事项名称"); return; }
        if (!S.pendingManualEnroll && !S.draftReturn) {
          const risk = evaluatePlanRiskFor({
            personName: activePersonName(),
            cat: S.draft.cat,
            title: S.draft.title,
            hour: S.draft.hour,
            min: S.draft.min,
            cycle: !!S.draft.cycle,
            rule: S.draft.rule || "daily",
            editingTaskId: null,
            isProxyAction: false,
          });
          if (risk.hasHardBlock) {
            toast(risk.hardBlockMessage);
            return;
          }
          if (risk.hasWarning) {
            openOverlay("confirm", {
              title: risk.warningTitle,
              body: risk.warningMessage,
              cancel: "先去调整",
              ok: "继续保存",
              action: "proceedAddTaskAfterRisk",
            });
            return;
          }
        }
        map.proceedAddTaskAfterRisk();
      },
      proceedAddTaskAfterRisk() {
        closeOverlay();
        if (S.pendingManualEnroll) {
          S.enrolled = true;
          S.pendingManualEnroll = false;
          finishGeneratedPlan("已添加并入组");
          return;
        }
        if (S.draftReturn) {
          const i = S.confirmEditIndex;
          S.draftReturn = null;
          S.confirmEditIndex = null;
          // 回写草稿列表（真机确认页编辑保存回写 draftTasks）
          if (S.confirmDrafts && S.draft) {
            const next = {
              title: S.draft.title,
              time: `${S.draft.hour}:${pad(S.draft.min)}`,
              cat: S.draft.cat,
              note: S.draft.note || "",
              cycle: !!S.draft.cycle,
              muteFirst: !!S.draft.muteFirst,
            };
            if (i != null && S.confirmDrafts[i]) S.confirmDrafts[i] = { ...S.confirmDrafts[i], ...next };
            else S.confirmDrafts.push(next);
          }
          dismissCover();
          toast("已更新草稿");
          return;
        }
        // 真机 AddEditTaskView 添加：落成一条新计划（首页 lane / 健康计划 / 集章同源可见）
        const d = S.draft;
        const id = nextTaskId();
        SEED.push({
          id,
          title: d.title,
          cat: d.cat,
          h: d.hour,
          m: d.min,
          note: d.note || "",
          cycle: !!d.cycle,
          customId: d.customId || undefined,
          onceDate: d.onceDate || toYMD(demoDate()),
        });
        // 添加页定的「本次提醒」「家属通知」随计划一起落库，查看计划里再改
        S.famOff[id] = d.famNotify === false;
        S.mutedToday[id] = !!d.muteFirst;
        S.completed[id] = false;
        delete S.completedBy[id];
        S.centerStage = id;
        logOp("新建了计划", entryPlace(), [["计划", d.title]]);
        closeFlow();
        toast("已添加");
      },
      // 单日计划：直接删；循环计划：仅删本次（skippedDays）或今起删除（splice）
      delTask() { logDrop(S.taskId); dropTask(S.taskId); dismissCover(); toast("已删除"); },
      delToday() { logDrop(S.taskId, true); addSkipped(toYMD(demoDate()), S.taskId); dismissCover(); toast("已删除本次计划"); },
      delAll() { logDrop(S.taskId); dropTask(S.taskId); dismissCover(); toast("已删除本次和后续计划"); },
      delCardToday() { logDrop(el.dataset.id, true); addSkipped(toYMD(demoDate()), el.dataset.id); toast("已仅删本次"); },
      delCardAll() { logDrop(el.dataset.id); dropTask(el.dataset.id); toast("已长期删除"); },
      delCardOnce() { logDrop(el.dataset.id); dropTask(el.dataset.id); toast("已删除"); },
      doDelTask() {
        const id = el.dataset.id || S.taskId;
        logDrop(id);
        dropTask(id);
        closeOverlay();
        toast("已删除");
        dismissCover();
      },
      logout() {
        openOverlay("confirm", {
          title: "退出登录",
          body: genIsV01()
            ? "退出后需重新登录才能继续使用；本机的档案、计划、照护记录和硬件绑定会保留，要清空请用「注销账号」。"
            : "退出后需重新登录才能继续使用；本机的档案和计划会保留，要清空请用「注销账号」。",
          ok: "退出登录",
          action: "doLogout",
        });
      },
      unregister() {
        openOverlay("confirm", {
          title: "注销账号",
          body: genIsV01()
            ? "注销将清空本机档案、入组状态、康复计划、家属绑定、操作记录、硬件绑定、问诊对话与 VIP 开通状态，且不可恢复。"
            : "注销将清空本机档案、入组状态、康复计划与问诊对话，且不可恢复。",
          ok: "确认注销",
          danger: true,
          action: "doUnregister",
        });
      },
      openHw() {
        const k = el.dataset.k || "bloodPressure";
        S.hwKind = k;
        const bound = !!(S.hw && S.hw[k]);
        if (hwTimer) { clearTimeout(hwTimer); hwTimer = null; }
        S.hwPhase = bound ? "bound" : "scan";
        go("hardware-scan");
        // 进扫码页即自动扫，不用再点「开始查找」
        if (!bound) act("hwScan", el);
      },
      hwScan() {
        const kind = S.hwKind || "bloodPressure";
        if (hwTimer) clearTimeout(hwTimer);
        S.hwPhase = "scan";
        render();
        hwTimer = setTimeout(() => {
          hwTimer = null;
          if (S.screen === "hardware-scan" && S.hwPhase === "scan" && S.hwKind === kind) {
            S.hwPhase = "found";
            render();
          }
        }, 1500);
      },
      hwBind() {
        const spec = hwSpec(S.hwKind);
        if (!spec || S.hwPhase !== "found") return;
        if (!S.hw) S.hw = {};
        S.hw[spec.k] = { name: spec.name, serial: spec.serial, at: Date.now() };
        S.hwPhase = "bound";
        dismissCover();
        toast(`已绑定${spec.name}`);
      },
      hwUnbindAsk() {
        const spec = hwSpec(S.hwKind);
        openOverlay("confirm", {
          title: "解除绑定",
          body: `解除后，这台${spec.title}不再记在本机。`,
          ok: "解除绑定",
          danger: true,
          action: "hwUnbind",
        });
      },
      hwUnbind() {
        if (S.hw) delete S.hw[S.hwKind];
        S.hwPhase = "idle";
        S.overlay = null;
        dismissCover();
        toast("已解除绑定");
      },
      // 退出登录：只退登录态，计划与记录全保留（真机 AccountStore.logout 只清 account）
      doLogout() {
        resetFlowFlags();
        S.loggedIn = false;
        S.overlay = null; // 从个人中心的确认弹层里触发，得一并收起
        S.frames = [{ id: "onboard-login", how: "root" }];
        S.screen = "onboard-login";
        S.enter = true;
        render();
        S.enter = false;
        toast("已退出登录");
      },
      // 注销：清空本机全部数据（真机注销会清各 Store）
      doUnregister() { resetAll(); setMode("login"); },
      askVip() {
        openOverlay("confirm", {
          title: "开通 VIP",
          body: "费用 ¥2400 / 年。这是演示，不会真实扣款。开通后可以使用家属管理、硬件管理、操作记录、哈宝医生专属服务，并享有支架保险理赔服务。",
          ok: "确认开通",
          action: "activateVip",
        });
      },
      activateVip() {
        ensureCareGraph();
        const curName = (S.currentPersonName || "李建国").trim();
        S.vipByPerson[curName] = true;
        const d = new Date();
        d.setFullYear(d.getFullYear() + 1);
        S.vip = true;
        S.vipUntil = d.getTime();
        if (S.gen === "0.0") S.gen = "0.1";
        S.overlay = null;
        render();
        toast("已开通 VIP");
      },
      askCancelVip() {
        openOverlay("confirm", {
          title: "取消订阅",
          body: "取消后当前账号变为免费用户，硬件管理、操作记录和哈宝医生服务会重新锁上，家属管理降级为受邀基础模式（不能主动发起绑定或新增代办计划），支架保险理赔服务同步终止。已经绑定的家属、记录和硬件还会留在手机里。",
          ok: "取消订阅",
          danger: true,
          action: "cancelVip",
        });
      },
      cancelVip() {
        ensureCareGraph();
        const curName = (S.currentPersonName || "李建国").trim();
        S.vipByPerson[curName] = false;
        S.vip = false;
        S.vipUntil = null;
        S.overlay = null;
        render();
        toast("已取消订阅，当前为免费用户");
      },
      openDemoPersonSheet() {
        ensureCareGraph();
        openOverlay("demoPersonSheet");
      },
      openHomeTargetSheet() {
        ensureCareGraph();
        openOverlay("homeTargetSheet");
      },
      goProfileFromTargetSheet() {
        closeOverlay();
        go("profile", "cover");
        S.careSheetDraft = { name: "", phone: "", rel: "配偶" };
        openOverlay("addWardSheet");
      },
      selectHomeTarget() {
        ensureCareGraph();
        const wardNm = (el.dataset.ward || "").trim();
        const me = currentDemoPerson();
        if (!wardNm) {
          S.watchingWardName = null;
          S.role = "patient";
          S.actorId = null;
          syncLegacyListsFromBonds();
          syncActivePersonContext(me.name);
          closeOverlay();
          toast(`已切换至「${me.name}的一天」`);
          render();
          return;
        }
        const ward = S.demoPeople.find((p) => p.name === wardNm);
        if (!ward) return;
        S.watchingWardName = ward.name;
        S.role = "family";
        syncLegacyListsFromBonds();
        const famEntry = (S.family || [])[0] || { id: "f1", name: me.name, rel: "家属", phone: me.phone, phoneRaw: me.phoneRaw };
        S.actorId = famEntry.id;
        syncActivePersonContext(ward.name);
        closeOverlay();
        toast(`已切换至「${ward.name}的一天」`);
        render();
      },
      switchDemoPerson() {
        ensureCareGraph();
        const nm = el.dataset.name;
        const p = S.demoPeople.find((x) => x.name === nm);
        if (!p) return;
        S.currentPersonName = p.name;
        S.watchingWardName = null;
        S.role = "patient";
        S.actorId = null;
        S.phone = p.phoneRaw;
        S.selfProfile = {
          name: p.name,
          gender: p.gender,
          age: p.age || 58,
          height: p.height,
          weight: p.weight,
        };
        syncPersonVipState(p.name);
        syncLegacyListsFromBonds();
        syncActivePersonContext(p.name);
        closeOverlay();
        presentUnreadCareNoticeForPerson(p.name);
        render();
        toast(`已切换至「${p.name}」（${personHasVip(p.name) ? "VIP 会员" : "免费用户"}）`);
      },
      openAddGuardianSheet() {
        ensureCareGraph();
        S.careSheetDraft = { name: "", phone: "", rel: "配偶" };
        openOverlay("addGuardianSheet");
      },
      openAddWardSheet() {
        ensureCareGraph();
        S.careSheetDraft = { name: "", phone: "", rel: "配偶" };
        openOverlay("addWardSheet");
      },
      pickCareRel() {
        if (!S.careSheetDraft) S.careSheetDraft = { name: "", phone: "", rel: "配偶" };
        const nInp = $("input[name=cg_name]");
        const pInp = $("input[name=cg_phone]");
        if (nInp) S.careSheetDraft.name = nInp.value;
        if (pInp) S.careSheetDraft.phone = pInp.value;
        S.careSheetDraft.rel = el.dataset.r || "配偶";
        render();
      },
      submitAddGuardian() {
        ensureCareGraph();
        const name = ($("input[name=cg_name]")?.value ?? S.careSheetDraft?.name ?? "").trim();
        const phone = ($("input[name=cg_phone]")?.value ?? S.careSheetDraft?.phone ?? "").replace(/\D/g, "");
        const rel = S.careSheetDraft?.rel || "配偶";
        const me = currentDemoPerson();
        if (!name) { toast("请填写守护人姓名"); return; }
        if (phone.length !== 11) { toast("请填写 11 位手机号"); return; }
        if (name === me.name || phone === me.phoneRaw) { toast("不能添加自己为守护人"); return; }
        const myG = myGuardiansList(me.name);
        if (myG.length >= 5) { toast("最多添加 5 位守护人"); return; }
        if (myG.some((b) => b.guardianName === name || b.guardianPhoneRaw === phone)) {
          toast("该守护人已在名单中");
          return;
        }
        ensureDemoPersonExists(name, phone, rel === "配偶" && me.gender === "男" ? "女" : "男", 55);
        const masked = phone.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
        const bond = {
          id: `b${Date.now()}`,
          guardianName: name,
          guardianPhone: masked,
          guardianPhoneRaw: phone,
          wardName: me.name,
          wardPhone: me.phone,
          wardPhoneRaw: me.phoneRaw,
          relation: rel,
          confirmed: false,
          initiatedBy: "ward",
        };
        S.careBonds.push(bond);
        syncLegacyListsFromBonds();
        closeOverlay();
        deliverCareNotice({
          kind: "bindRequest",
          badgeText: "添加申请",
          senderName: me.name,
          receiverLabel: "",
          recipientPerson: name,
          bondId: bond.id,
          bindDecision: "pending",
          title: `${me.name}（${rel}）邀请你成为守护人`,
          detail: "同意后可查看TA的每日计划与康复进展，并提醒或帮TA打卡。请在哈宝医生中选择同意或不同意。",
          target: "consult",
        });
        render();
      },
      submitAddWard() {
        ensureCareGraph();
        const name = ($("input[name=cg_name]")?.value ?? S.careSheetDraft?.name ?? "").trim();
        const phone = ($("input[name=cg_phone]")?.value ?? S.careSheetDraft?.phone ?? "").replace(/\D/g, "");
        const rel = S.careSheetDraft?.rel || "配偶";
        const me = currentDemoPerson();
        if (!name) { toast("请填写姓名"); return; }
        if (phone.length !== 11) { toast("请填写 11 位手机号"); return; }
        if (name === me.name || phone === me.phoneRaw) { toast("不能添加自己"); return; }
        const myW = myWardsList(me.name);
        if (myW.length >= 5) { toast("最多添加 5 人"); return; }
        if (myW.some((b) => b.wardName === name || b.wardPhoneRaw === phone)) {
          toast("已在名单中");
          return;
        }
        ensureDemoPersonExists(name, phone, rel === "配偶" && me.gender === "男" ? "女" : "女", 58);
        const masked = phone.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
        const bond = {
          id: `b${Date.now()}`,
          guardianName: me.name,
          guardianPhone: me.phone,
          guardianPhoneRaw: me.phoneRaw,
          wardName: name,
          wardPhone: masked,
          wardPhoneRaw: phone,
          relation: rel,
          confirmed: false,
          initiatedBy: "guardian",
        };
        S.careBonds.push(bond);
        syncLegacyListsFromBonds();
        closeOverlay();
        deliverCareNotice({
          kind: "bindRequest",
          badgeText: "添加申请",
          senderName: me.name,
          receiverLabel: "",
          recipientPerson: name,
          bondId: bond.id,
          bindDecision: "pending",
          title: `${me.name}（${rel}）申请守护你`,
          detail: "同意后TA可查看你的每日计划与康复进展，并提醒或帮你打卡。请在哈宝医生中选择同意或不同意。",
          target: "consult",
        });
        render();
      },
      acceptCareBond() {
        ensureCareGraph();
        const bid = el.dataset.id || (S.overlayData && S.overlayData.bondId);
        const bond = S.careBonds.find((b) => String(b.id) === String(bid)) || pendingIncomingBondFor(S.currentPersonName);
        if (!bond) { closeOverlay(); render(); return; }
        if (confirmedFamilyBondsFor(bond.guardianName).length >= 5 || confirmedFamilyBondsFor(bond.wardName).length >= 5) {
          toast("每个人最多只能有 5 个家属");
          return;
        }
        bond.confirmed = true;
        bond.status = "confirmed";
        bond.hasUnreadAcceptReturn = true;
        syncLegacyListsFromBonds();
        const requester = bond.initiatedByName || bond.wardName;
        toast(`已同意绑定，与${requester}现已互为家属`);
        render();
      },
      rejectCareBond() {
        ensureCareGraph();
        const bid = el.dataset.id || (S.overlayData && S.overlayData.bondId);
        const bond = S.careBonds.find((b) => String(b.id) === String(bid)) || pendingIncomingBondFor(S.currentPersonName);
        if (!bond) { closeOverlay(); render(); return; }
        const requester = bond.initiatedByName || bond.wardName;
        bond.confirmed = false;
        bond.status = "rejected";
        bond.hasUnreadAcceptReturn = false;
        syncLegacyListsFromBonds();
        toast(`已返回「不同意」给${requester}`);
        render();
      },
      ackCareReturn() {
        ensureCareGraph();
        const bid = el.dataset.id;
        const idx = S.careBonds.findIndex((b) => String(b.id) === String(bid));
        if (idx === -1) return;
        if (S.careBonds[idx].status === "rejected") {
          S.careBonds.splice(idx, 1);
        } else {
          S.careBonds[idx].hasUnreadAcceptReturn = false;
        }
        syncLegacyListsFromBonds();
        render();
      },
      fillFamPreset() {
        ensureCareGraph();
        const nm = el.dataset.name || "";
        const ph = el.dataset.phone || "";
        const rel = el.dataset.rel || "配偶";
        S.famDraftName = nm;
        S.famDraftPhone = ph;
        S.famRel = rel;
        render();
      },
      askRemoveCareBond() {
        ensureCareGraph();
        const bid = el.dataset.id;
        const bond = S.careBonds.find((b) => String(b.id) === String(bid));
        if (!bond) return;
        const other = bondOtherName(bond, S.currentPersonName);
        const isPending = bond.status === "pending";
        openOverlay("confirm", {
          title: isPending ? "撤回绑定请求" : "解除家属关系",
          body: isPending
            ? `确定撤回向「${other}」发送的家属绑定请求吗？`
            : `确定解除与「${other}」的家属关系吗？解除后双方将不再互为家属。`,
          ok: isPending ? "确认撤回" : "确认解除",
          danger: true,
          action: "doRemoveCareBond",
          bondId: bond.id,
        });
      },
      doRemoveCareBond() {
        ensureCareGraph();
        const bid = S.overlayData && S.overlayData.bondId;
        const bond = S.careBonds.find((b) => String(b.id) === String(bid));
        if (!bond) { closeOverlay(); return; }
        const actor = S.currentPersonName;
        const other = bondOtherName(bond, actor);
        const isPending = bond.status === "pending";
        S.careBonds = S.careBonds.filter((b) => String(b.id) !== String(bond.id));
        syncLegacyListsFromBonds();
        S.overlay = null;
        toast(isPending ? `已撤回向${other}发送的绑定请求` : `已与${other}解除家属关系`);
        render();
      },
      openFamilyProxyView() {
        ensureCareGraph();
        const famName = el.dataset.name;
        if (!famName) return;
        S.famCol = "operate";
        S.famIsAdding = false;
        S.selectedProxyFamilyName = famName;
        S.proxyEditorDraft = null;
        render();
      },
      pickFamCol() {
        ensureCareGraph();
        S.famCol = el.dataset.col || "operate";
        S.proxyEditorDraft = null;
        render();
      },
      selectActiveFam() {
        ensureCareGraph();
        const famName = el.dataset.name;
        if (!famName) return;
        S.famIsAdding = false;
        S.selectedProxyFamilyName = famName;
        S.proxyEditorDraft = null;
        render();
      },
      toggleAddFamForm() {
        ensureCareGraph();
        S.famIsAdding = !S.famIsAdding;
        S.proxyEditorDraft = null;
        render();
      },
      askVipForFamily() {
        openOverlay("confirm", {
          title: "需开通 VIP",
          body: "你当前正在使用已绑定家属共享的照护通道。如需主动发起绑定新的家属（最多 5 人），请先开通本人 VIP 会员。",
          cancel: "暂不开通",
          ok: "去开通 VIP",
          action: "goVipFromFamily",
        });
      },
      goVipFromFamily() {
        closeOverlay();
        go("vip", "cover");
      },
      closeFamilyProxyView() {
        if (S.proxyEditorDraft) {
          S.proxyEditorDraft = null;
          render();
          return;
        }
        S.activeProxyFamilyName = null;
        render();
      },
      sendProxyRemind() {
        ensureCareGraph();
        const me = currentDemoPerson();
        const famName = resolvedSelectedFamilyNameFor(me.name);
        const tid = el.dataset.id;
        if (!famName || !tid) return;
        const bucket = ensurePersonStore(famName);
        const task = (bucket.tasks || []).find((t) => String(t.id) === String(tid));
        if (!task) return;
        sendProxyRequestFor({
          senderName: me.name,
          recipientName: famName,
          kind: "remind",
          targetTaskId: task.id,
          taskSnapshot: task,
          summaryNote: "按时提醒",
        });
        toast(`已向${famName}发送提醒通知，待对方接受`);
        render();
      },
      sendProxyCheckIn() {
        ensureCareGraph();
        const me = currentDemoPerson();
        const famName = resolvedSelectedFamilyNameFor(me.name);
        const tid = el.dataset.id;
        if (!famName || !tid) return;
        const bucket = ensurePersonStore(famName);
        const task = (bucket.tasks || []).find((t) => String(t.id) === String(tid));
        if (!task) return;
        sendProxyRequestFor({
          senderName: me.name,
          recipientName: famName,
          kind: "checkIn",
          targetTaskId: task.id,
          taskSnapshot: task,
          summaryNote: "代为完成打卡",
        });
        toast(`已向${famName}发送代打卡通知，待对方接受`);
        render();
      },
      withdrawProxyReq() {
        ensureCareGraph();
        const rid = el.dataset.id;
        const req = (S.careProxyRequests || []).find((r) => String(r.id) === String(rid));
        if (!req) return;
        S.careProxyRequests = S.careProxyRequests.filter((r) => String(r.id) !== String(rid));
        toast(`已撤回「${proxyActionLabel(req.kind)}」请求`);
        render();
      },
      acceptProxyReq() {
        ensureCareGraph();
        const rid = el.dataset.id;
        const req = (S.careProxyRequests || []).find((r) => String(r.id) === String(rid));
        if (!req || req.status !== "pending") return;
        applyAcceptedProxyMutationInStore(req);
        req.status = "accepted";
        req.senderAcknowledged = false;
        toast(`已接受${req.senderName}的${proxyActionLabel(req.kind)}，并通知对方`);
        render();
      },
      rejectProxyReq() {
        ensureCareGraph();
        const rid = el.dataset.id;
        const req = (S.careProxyRequests || []).find((r) => String(r.id) === String(rid));
        if (!req || req.status !== "pending") return;
        req.status = "rejected";
        req.senderAcknowledged = false;
        toast(`已返回「不接受」给${req.senderName}`);
        render();
      },
      ackProxyReturn() {
        ensureCareGraph();
        const rid = el.dataset.id;
        S.careProxyRequests = (S.careProxyRequests || []).filter((r) => String(r.id) !== String(rid));
        render();
      },
      openProxyTaskEditor() {
        ensureCareGraph();
        const me = currentDemoPerson();
        const famName = resolvedSelectedFamilyNameFor(me.name);
        if (!famName) return;
        const tid = el.dataset.id;
        const bucket = ensurePersonStore(famName);
        const existing = tid ? (bucket.tasks || []).find((t) => String(t.id) === String(tid)) : null;
        if (existing) {
          S.proxyEditorDraft = {
            mode: "edit",
            taskId: existing.id,
            cat: existing.cat || "monitoring",
            title: existing.title || "",
            hour: existing.h ?? 8,
            min: existing.m ?? 0,
            cycle: existing.cycle !== false,
            rule: existing.rule || "daily",
            note: existing.note || "",
          };
        } else {
          S.proxyEditorDraft = {
            mode: "add",
            taskId: null,
            cat: "monitoring",
            title: "起床测血压",
            hour: 8,
            min: 0,
            cycle: true,
            rule: "daily",
            note: "",
          };
        }
        render();
      },
      closeProxyTaskEditor() {
        S.proxyEditorDraft = null;
        render();
      },
      pickProxyCat() {
        if (!S.proxyEditorDraft) return;
        const titleInput = $("input[name=proxyTitle]");
        const noteInput = $("input[name=proxyNote]");
        if (titleInput) S.proxyEditorDraft.title = titleInput.value;
        if (noteInput) S.proxyEditorDraft.note = noteInput.value;
        const nextCat = el.dataset.cat || "monitoring";
        const defaults = {
          monitoring: "起床测血压",
          medication: "按医嘱服药",
          exercise: "户外散步 20 分钟",
          diet: "低盐清淡饮食",
          rest: "午间静卧休息",
          appointment: "心内科门诊复查",
        };
        const prevDefault = defaults[S.proxyEditorDraft.cat];
        S.proxyEditorDraft.cat = nextCat;
        if (!S.proxyEditorDraft.title.trim() || S.proxyEditorDraft.title === prevDefault) {
          S.proxyEditorDraft.title = defaults[nextCat] || "康复计划";
        }
        if (nextCat === "appointment" && S.proxyEditorDraft.mode === "add") {
          S.proxyEditorDraft.cycle = false;
        }
        render();
      },
      pickProxyCycle() {
        if (!S.proxyEditorDraft) return;
        const titleInput = $("input[name=proxyTitle]");
        const noteInput = $("input[name=proxyNote]");
        if (titleInput) S.proxyEditorDraft.title = titleInput.value;
        if (noteInput) S.proxyEditorDraft.note = noteInput.value;
        S.proxyEditorDraft.cycle = el.dataset.v === "1";
        render();
      },
      pickProxyRule() {
        if (!S.proxyEditorDraft) return;
        const titleInput = $("input[name=proxyTitle]");
        const noteInput = $("input[name=proxyNote]");
        if (titleInput) S.proxyEditorDraft.title = titleInput.value;
        if (noteInput) S.proxyEditorDraft.note = noteInput.value;
        S.proxyEditorDraft.rule = el.dataset.r || "daily";
        render();
      },
      pickProxyHour() {
        if (!S.proxyEditorDraft) return;
        const titleInput = $("input[name=proxyTitle]");
        const noteInput = $("input[name=proxyNote]");
        if (titleInput) S.proxyEditorDraft.title = titleInput.value;
        if (noteInput) S.proxyEditorDraft.note = noteInput.value;
        S.proxyEditorDraft.hour = Number(el.dataset.h ?? 8);
        render();
      },
      pickProxyMin() {
        if (!S.proxyEditorDraft) return;
        const titleInput = $("input[name=proxyTitle]");
        const noteInput = $("input[name=proxyNote]");
        if (titleInput) S.proxyEditorDraft.title = titleInput.value;
        if (noteInput) S.proxyEditorDraft.note = noteInput.value;
        S.proxyEditorDraft.min = Number(el.dataset.m ?? 0);
        render();
      },
      submitProxyTaskEditor() {
        ensureCareGraph();
        const me = currentDemoPerson();
        const famName = resolvedSelectedFamilyNameFor(me.name);
        if (!S.proxyEditorDraft || !famName) return;
        const titleInput = $("input[name=proxyTitle]");
        const noteInput = $("input[name=proxyNote]");
        if (titleInput) S.proxyEditorDraft.title = titleInput.value;
        if (noteInput) S.proxyEditorDraft.note = noteInput.value;
        const d = S.proxyEditorDraft;
        const cleanTitle = String(d.title || "").trim();
        if (!cleanTitle) {
          toast("请填写计划名称");
          return;
        }
        const risk = evaluatePlanRiskFor({
          personName: famName,
          cat: d.cat,
          title: cleanTitle,
          hour: d.hour,
          min: d.min,
          cycle: !!d.cycle,
          rule: d.rule || "daily",
          editingTaskId: d.taskId,
          isProxyAction: true,
        });
        if (risk.hasHardBlock) {
          toast(risk.hardBlockMessage);
          return;
        }
        if (risk.hasWarning) {
          openOverlay("confirm", {
            title: risk.warningTitle,
            body: risk.warningMessage,
            cancel: "取消",
            ok: "继续创建",
            action: "confirmProxyTaskRisk",
          });
          return;
        }
        map.confirmProxyTaskRisk();
      },
      confirmProxyTaskRisk() {
        closeOverlay();
        const me = currentDemoPerson();
        const famName = resolvedSelectedFamilyNameFor(me.name);
        if (!S.proxyEditorDraft || !famName) return;
        const d = S.proxyEditorDraft;
        const isEdit = d.mode === "edit" && d.taskId;
        const taskSnap = {
          id: isEdit ? d.taskId : `proxy_${Date.now()}`,
          title: String(d.title || "").trim(),
          cat: d.cat,
          h: d.hour,
          m: d.min,
          cycle: !!d.cycle,
          rule: d.cycle ? (d.rule || "daily") : "once",
          note: String(d.note || "").trim(),
        };
        sendProxyRequestFor({
          senderName: me.name,
          recipientName: famName,
          kind: isEdit ? "updatePlan" : "createPlan",
          targetTaskId: isEdit ? d.taskId : taskSnap.id,
          taskSnapshot: taskSnap,
          summaryNote: isEdit
            ? `修改为 ${pad(d.hour)}:${pad(d.min)} · ${d.cycle ? "循环" : "单日"}`
            : `新增 ${pad(d.hour)}:${pad(d.min)} · ${d.cycle ? "循环" : "单日"}`,
        });
        S.proxyEditorDraft = null;
        toast(isEdit ? `已向${famName}发送修改计划通知，待对方接受` : `已向${famName}发送新增计划通知，待对方接受`);
        render();
      },
      askProxyDeleteTask() {
        const me = currentDemoPerson();
        const famName = resolvedSelectedFamilyNameFor(me.name);
        if (!S.proxyEditorDraft || !famName || !S.proxyEditorDraft.taskId) return;
        openOverlay("confirm", {
          title: "删除家属计划",
          body: `确定申请删除${famName}的「${S.proxyEditorDraft.title}」吗？需对方在「家属管理」点击接受后才会正式删除。`,
          cancel: "取消",
          ok: "发送删除请求",
          danger: true,
          action: "doProxyDeleteTask",
        });
      },
      doProxyDeleteTask() {
        closeOverlay();
        const me = currentDemoPerson();
        const famName = resolvedSelectedFamilyNameFor(me.name);
        if (!S.proxyEditorDraft || !famName || !S.proxyEditorDraft.taskId) return;
        const d = S.proxyEditorDraft;
        const taskSnap = {
          id: d.taskId,
          title: String(d.title || "").trim(),
          cat: d.cat,
          h: d.hour,
          m: d.min,
          cycle: !!d.cycle,
          note: String(d.note || "").trim(),
        };
        sendProxyRequestFor({
          senderName: me.name,
          recipientName: famName,
          kind: "deletePlan",
          targetTaskId: d.taskId,
          taskSnapshot: taskSnap,
          summaryNote: "申请删除该计划",
        });
        S.proxyEditorDraft = null;
        toast(`已向${famName}发送删除计划通知，待对方接受`);
        render();
      },
      askForceContinueExercise() {
        const reason = el.dataset.reason || "contra";
        openOverlay("confirm", {
          title: reason === "contra" ? "罕见病与禁忌症提醒" : "量表未达标提醒",
          body: reason === "contra"
            ? "当前存在绝对禁忌症或罕见心血管疾病（室颤、心衰Ⅲ级及以上），强行开展有氧运动存在心血管事件风险。建议由家属协同看护并遵循医嘱，确定仍要继续创建运动计划吗？"
            : "当前体测或主观劳累度（Borg 量表）未达安全标准，或伴有罕见病/高危因素。强行创建运动计划可能增加心血管负荷，建议由家属协同看护并降低运动强度。确定仍要继续创建运动计划吗？",
          cancel: "暂不创建",
          ok: "继续创建",
          action: "doForceContinueExercise",
        });
      },
      doForceContinueExercise() {
        closeOverlay();
        seedExerciseDrafts();
        go("confirm-exercise", "replace");
      },
      toggleWatchWard() {
        ensureCareGraph();
        const wardNm = el.dataset.ward;
        const me = currentDemoPerson();
        if (!wardNm || S.watchingWardName === wardNm) {
          S.watchingWardName = null;
          S.role = "patient";
          S.actorId = null;
          syncActivePersonContext(me.name);
          toast(`已切回「${me.name}（我）的一天」`);
          render();
          return;
        }
        const ward = S.demoPeople.find((p) => p.name === wardNm);
        if (!ward) return;
        S.watchingWardName = ward.name;
        S.role = "family";
        syncLegacyListsFromBonds();
        const famEntry = (S.family || [])[0] || { id: "f1", name: me.name, rel: "家属", phone: me.phone, phoneRaw: me.phoneRaw };
        S.actorId = famEntry.id;
        syncActivePersonContext(ward.name);
        toast(`已切换至「${ward.name}（我看护的人）的一天」`);
        render();
      },
      roleSwitch() {
        ensureCareGraph();
        openOverlay("demoPersonSheet");
      },
      closeCareNotice() {
        S.careNoticePopup = null;
        S.sysPushBanner = null;
        render();
      },
      closeSysPush() {
        const n = S.sysPushBanner;
        S.sysPushBanner = null;
        if (n) {
          if (n.recipientPerson && n.recipientPerson !== S.currentPersonName) {
            const p = (S.demoPeople || []).find((x) => x.name === n.recipientPerson);
            if (p) {
              S.currentPersonName = p.name;
              S.watchingWardName = null;
              S.role = "patient";
              S.actorId = null;
              S.phone = p.phoneRaw;
              syncActivePersonContext(p.name);
            }
          }
          if (n.kind === "bindRequest" || n.kind === "bindConfirmed" || n.kind === "bindRejected" || n.kind === "bindRemoved") {
            go("consult");
            return;
          }
          if (n.target === "vitals") { go("vitals"); return; }
          if (n.target === "report") { go("report"); return; }
          if (n.target === "schedule") { go("schedule"); return; }
        }
        render();
      },
      dismissHomeNotice() {
        ensureCareGraph();
        const nid = el.dataset.id;
        const cur = S.currentPersonName || "李建国";
        const list = S.pendingPersonPopups[cur] || [];
        if (nid) {
          S.pendingPersonPopups[cur] = list.filter((x) => String(x.id) !== String(nid));
        } else {
          S.pendingPersonPopups[cur] = list.slice(1);
        }
        render();
      },
      tapHomeNotice() {
        const list = currentHomeNotices();
        if (!list.length) return;
        const n = list[0];
        if (n.kind === "bindRequest" || n.kind === "bindConfirmed" || n.kind === "bindRejected" || n.kind === "bindRemoved") {
          go("profile");
          return;
        }
        if (n.target === "vitals") { go("vitals"); return; }
        if (n.target === "report") { go("report"); return; }
        if (n.target === "schedule") { go("schedule"); return; }
      },
      openCareNoticeConsult() {
        const n = S.careNoticePopup || S.sysPushBanner;
        S.careNoticePopup = null;
        S.sysPushBanner = null;
        if (n && n.recipientPerson && n.recipientPerson !== S.currentPersonName) {
          const p = (S.demoPeople || []).find((x) => x.name === n.recipientPerson);
          if (p) {
            S.currentPersonName = p.name;
            S.watchingWardName = null;
            S.role = "patient";
            S.actorId = null;
            S.phone = p.phoneRaw;
            S.selfProfile = { name: p.name, gender: p.gender, age: p.age || 58, height: p.height, weight: p.weight };
            syncLegacyListsFromBonds();
            syncActivePersonContext(p.name);
          }
        }
        go("consult", "cover");
      },
      openDebug() { openOverlay("debugMenu"); },
      // 设计版本（真机 DesignGenerationStore.select）：V0.0 对应非 VIP 状态，V0.1 对应已开通 VIP 状态，方便直接对比 UI。
      debugGen() {
        S.gen = el.dataset.gen;
        if (S.gen === "0.0") {
          S.vip = false;
          S.vipUntil = null;
        } else {
          syncPersonVipState(S.currentPersonName);
        }
        closeOverlay();
        toast(`设计版本 V${S.gen}｜${genIsV01() && S.vip ? "VIP 已开通状态" : "免费用户状态（点按购买横幅或加锁项进入 VIP 购买界面）"}`);
      },
      // 真机 V10.52 起调试菜单不再切方案（TodaySchemeFourView 只留文件、不再是首页），
      // 本原型的入口已撤，渲染与状态留档——要临时预览方案四，把开发菜单那两行加回来即可。
      debugScheme() {
        S.scheme = ((S.scheme ?? 0) + 1) % SCHEMES.length;
        closeOverlay();
        // 本原型只渲染方案一，所以把「这个方案是什么」讲出来，否则只看到一个序号
        toast(`方案 ${S.scheme + 1} · ${SCHEMES[S.scheme].name}｜${SCHEMES[S.scheme].desc}`);
      },
      // 真机「生成 Demo」：填档案 + applyDemoEnrollment + seedTestTasks + seedDemoVitals + 30 天打卡史
      debugSeed() {
        const sim = S.sim;
        const hw = S.hw;
        resetAll();
        S.sim = sim;
        S.hw = hw || {};
        S.loggedIn = true;
        S.enrolled = true;
        S.sys = 126; S.dia = 78; S.hr = 72; // seedDemoVitals：给「今日血压」一条读数
        closeOverlay();
        go("home", "root");
        toast("已生成 Demo 数据");
      },
      // 真机「重新生成」：enrollment.reset + 清计划 / 体征 / 散步 / 问诊，但保留档案姓名
      debugRegenerate() {
        const sim = S.sim;
        const hw = S.hw;
        resetAll();
        S.sim = sim;
        S.hw = hw || {};
        S.enrolled = false;
        SEED.length = 0; // store.clearAll()
        S.completed = {};
        S.completedBy = {};
        S.sys = null; S.dia = null; S.hr = null;
        WALK_RECORDS.forEach((d) => d.items.forEach((it) => { S.walkDeleted[it.key] = true; }));
        S.messages = [];
        // V0.1 方案随计划一起清空（计划都没了，期与期章不再有意义）
        S.plan = { seq: 0, cur: null, history: [] };
        S.rx = {};
        S.rxCards = {};
        S.rxChat = [];
        S.rxArchive = [];
        closeOverlay();
        go("home", "root");
        toast("已清空计划与记录（保留档案姓名）");
      },
      // ── V0.1 方案演示（开发菜单）：自动切到 V0.1 并开通 VIP ──
      // 模拟一期结束：本期起始日挪到 7 天前（6 满日 1 部分 → 金章），回首页即弹期末反馈
      debugRxEnd() {
        rxEnsureVip();
        if (!S.plan.cur) rxStartDemoPeriod();
        const p = S.plan.cur;
        p.start = addDaysYMD(rxToday(), -7);
        p.addedOn = {};
        p.fbPrompted = false;
        p.marks = {};
        ["full", "full", "part", "full", "full", "full", "full"].forEach((m, i) => { p.marks[addDaysYMD(p.start, i)] = m; });
        S.overlay = null;
        goHome();
      },
      // 推送新方案卡：同时最多一张；手上有一期时先把它定格进期章墙（演示用，正式只在没有进行中的一期时推）
      debugRxPush() {
        rxEnsureVip();
        S.overlay = null;
        const pend = rxPendingCard("plan");
        if (pend) {
          act("rxGoCard", { dataset: { card: pend.id } });
          toast("已有一张待采纳的方案卡（同时最多一张）");
          return;
        }
        const finalized = S.plan.cur ? S.plan.cur.no : null;
        const prev = S.plan.cur ? rxFinalizeCur("", "") : (S.plan.history[0] || null);
        const card = rxNewCard(rxBuildPlanCard(Math.max(S.plan.seq || 0, prev ? prev.no : 0) + 1, prev, prev ? prev.stats.full : 0, prev ? prev.feeling : ""));
        S.plan.seq = card.no;
        S.rxChat.push({
          who: "ai",
          t: prev ? `医生看了你最近的打卡、血压和复查，为你制定了第 ${card.no} 期康复方案，医生已审核：` : "你已开通 VIP，我以你现在的计划为底，制定了第 1 期康复方案，医生已审核：",
          card: card.id,
        });
        act("rxGoCard", { dataset: { card: card.id } });
        toast(finalized ? `已推送第 ${card.no} 期方案卡（第 ${finalized} 期先定格）` : `已推送第 ${card.no} 期方案卡`);
      },
      // 从第 1 期开始：清空方案与期章，推第 1 期方案卡（刚开通 VIP 的情形）
      debugRxFresh() {
        rxEnsureVip();
        S.plan = { seq: 0, cur: null, history: [] };
        S.rx = {};
        S.rxCards = {};
        S.rxChat = [];
        S.rxArchive = [];
        act("debugRxPush");
      },
      // 真机「测试登录步骤」：重置首次进入隐私弹窗 + accountStore.logout()——计划与记录全部保留
      debugTestLogin() {
        resetFlowFlags();
        S.loggedIn = false;
        S.privacyAccepted = false;
        S.loginTermsChecked = false;
        S.privacyDeclinedStep = false;
        S.privacyExitedNotice = false;
        closeOverlay();
        S.frames = [{ id: "onboard-login", how: "root" }];
        S.screen = "onboard-login";
        S.enter = true;
        render();
        S.enter = false;
        toast("已回到首次进入隐私保护提示与登录页，计划与记录保留");
      },
      pickGenderEdit() {
        if (!S.origPatient) S.origPatient = { name: S.name, gender: S.gender };
        S.gender = el.dataset.g;
        render();
      },
      // 患者信息保存：写回档案再返回（真机 HealthRecordView save → profileStore.save → dismiss）
      savePatient() {
        const name = $("input[name=pname]")?.value?.trim();
        if (!name) { toast("请填写姓名"); return; }
        const curP = currentDemoPerson();
        const prev = S.origPatient || { name: curP.name, gender: curP.gender };
        const changed = [];
        if (prev.name !== name) changed.push(`姓名 ${prev.name}→${name}`);
        if (prev.gender !== S.gender) changed.push(`性别 ${prev.gender}→${S.gender}`);
        const oldName = curP.name;
        curP.name = name;
        curP.gender = S.gender;
        curP.height = S.height;
        curP.weight = S.weight;
        S.currentPersonName = name;
        if (oldName !== name) {
          (S.careBonds || []).forEach((b) => {
            if (b.guardianName === oldName) b.guardianName = name;
            if (b.wardName === oldName) b.wardName = name;
          });
        }
        S.name = name;
        S.selfProfile = {
          name: S.name,
          gender: S.gender,
          age: S.age || 58,
          height: S.height,
          weight: S.weight,
        };
        S.origPatient = null;
        logOp("修改了患者信息", "健康档案", [["改动", changed.length ? changed.join("、") : "本次未动"]]);
        back();
      },
      toggleSelf() {
        const label = "通知自己";
        const curOn = !!(S.notifySelf && anyCatOn());
        const next = !curOn;
        S.notifySelf = next;
        if (next && !anyCatOn()) {
          Object.keys(CAT).forEach((c) => { S.cats[c] = true; });
          (S.customCats || []).forEach((c) => { S.cats[c.id] = true; });
        }
        logOp("改了到点提醒", "打卡通知", [["提醒", `${label} 已${next ? "打开" : "关闭"}`]]);
        render();
      },
      // 全部打卡总开关：全开时点按全关，否则全开；上岛全关时点按自动开启通知自己
      toggleAll() {
        const canNotifyGuardian = hasConfirmedGuardiansForCurrentPerson();
        const gateActive = !!(S.notifySelf || (genHasFamily() && canNotifyGuardian && S.notifyFamily));
        const curOn = gateActive && allCatsOn();
        const next = !curOn;
        if (next && !gateActive) {
          S.notifySelf = true;
        }
        Object.keys(CAT).forEach((c) => { S.cats[c] = next; });
        (S.customCats || []).forEach((c) => { S.cats[c.id] = next; });
        logOp("改了到点提醒", "打卡通知", [["提醒", `全部打卡 已${next ? "打开" : "关闭"}`]]);
        render();
      },
      toggleCat() {
        const c = el.dataset.cat;
        if (!c) return;
        const canNotifyGuardian = hasConfirmedGuardiansForCurrentPerson();
        const gateActive = !!(S.notifySelf || (genHasFamily() && canNotifyGuardian && S.notifyFamily));
        const curOn = gateActive && !!S.cats[c];
        const next = !curOn;
        if (next && !gateActive) {
          S.notifySelf = true;
        }
        S.cats[c] = next;
        const nm = (CAT[c] && CAT[c].name) || ((S.customCats || []).find((x) => x.id === c) || {}).name || "类别";
        logOp("改了到点提醒", "打卡通知", [["提醒", `${nm} 已${S.cats[c] ? "打开" : "关闭"}`]]);
        render();
      },
      toggleFam() {
        const famLabel = "通知守护我的人";
        if (!hasConfirmedGuardiansForCurrentPerson()) {
          openOverlay("confirm", {
            title: "请先添加守护我的人",
            body: "开启「通知守护我的人」前，请先添加并确认至少一位守护你的人。",
            ok: "去添加",
            action: "openAddGuardianSheet",
          });
          return;
        }
        const curOn = !!(S.notifyFamily && anyCatOn());
        const next = !curOn;
        S.notifyFamily = next;
        if (next && !anyCatOn()) {
          Object.keys(CAT).forEach((c) => { S.cats[c] = true; });
          (S.customCats || []).forEach((c) => { S.cats[c.id] = true; });
        }
        logOp("改了到点提醒", "打卡通知", [["提醒", `${famLabel} 已${next ? "打开" : "关闭"}`]]);
        render();
      },
      goFamily() {
        closeOverlay();
        S.careSheetDraft = { name: "", phone: "", rel: "配偶" };
        openOverlay("addGuardianSheet");
      },
      // 计划页「去添加」：弹出「添加守护我的人」底部表单
      goFamilyFromTask() {
        S.famFillJump = true;
        closeOverlay();
        S.careSheetDraft = { name: "", phone: "", rel: "配偶" };
        openOverlay("addGuardianSheet");
      },
      // 解除绑定按人删除（真机 FamilyMemberStore.remove(id)）
      unbind() {
        const id = el.dataset.id;
        const f = S.family.find((x) => String(x.id) === String(id));
        openOverlay("confirm", {
          title: "取消绑定",
          body: `取消后不再向${f ? f.name : "该家属"}发送提醒。`,
          ok: "取消绑定", danger: true, action: "doUnbind", memberId: id,
        });
      },
      doUnbind() {
        const id = S.overlayData.memberId;
        S.family = S.family.filter((x) => String(x.id) !== String(id));
        closeOverlay();
      },
      pickRel() { S.famRel = el.dataset.r; render(); },
      pickMyFamRel() {
        const inp = $("input[name=myFamName]");
        if (inp) S.myFamNameDraft = inp.value;
        S.myFamRelDraft = el.dataset.r;
        render();
      },
      saveMyFamIdentity() {
        const cur = activeFamMember();
        const rawName = ($("input[name=myFamName]")?.value ?? S.myFamNameDraft ?? cur.name).trim();
        if (!rawName) { toast("请填写姓名"); return; }
        const rel = S.myFamRelDraft || cur.rel || "配偶";
        const target = (S.family || []).find((x) => String(x.id) === String(cur.id));
        if (target) {
          target.name = rawName;
          target.rel = rel;
        } else {
          S.family = [{ id: cur.id || "f1", name: rawName, rel, phone: cur.phone || "139****2210", phoneRaw: cur.phoneRaw || "13900132210" }];
        }
        S.actorId = cur.id || "f1";
        S.myFamNameDraft = undefined;
        S.myFamRelDraft = undefined;
        render();
        toast("已更新我的守护身份");
      },
      quitGuard() {
        const cur = activeFamMember();
        openOverlay("confirm", {
          title: "退出守护",
          body: `退出后，你的手机号（${cur.phone}）将与${S.name}的康复档案解除关联，不再接收打卡提醒。`,
          ok: "确认退出",
          danger: true,
          action: "doQuitGuard",
        });
      },
      doQuitGuard() {
        const cur = activeFamMember();
        S.family = (S.family || []).filter((x) => String(x.id) !== String(cur.id));
        S.myFamNameDraft = undefined;
        S.myFamRelDraft = undefined;
        S.overlay = null;
        if (S.family.length) {
          S.actorId = S.family[0].id;
          render();
        } else {
          S.role = "patient";
          S.actorId = null;
          if (S.screen === "family") dismissCover();
          else render();
        }
        toast("已退出守护");
      },
      unbindPatient() {
        const id = el.dataset.id;
        const p = (S.guardedPatients || []).find((x) => String(x.id) === String(id));
        openOverlay("confirm", {
          title: "取消绑定",
          body: `取消后将不再守护${p ? p.name : "该患者"}的康复档案。`,
          ok: "取消绑定",
          danger: true,
          action: "doUnbindPatient",
          patientId: id,
        });
      },
      doUnbindPatient() {
        const id = S.overlayData.patientId;
        S.guardedPatients = (S.guardedPatients || []).filter((x) => String(x.id) !== String(id));
        closeOverlay();
        if (S.guardedPatients.length) {
          syncProfileForRole("family");
          render();
        } else {
          S.role = "patient";
          S.actorId = null;
          syncProfileForRole("patient");
          if (S.screen === "family") dismissCover();
          else render();
        }
        toast("已取消绑定");
      },
      bindPatient() {
        const name = $("input[name=fname]")?.value?.trim();
        const phone = $("input[name=fphone]")?.value?.trim();
        if (!name) { toast("请填写患者姓名"); return; }
        if (!phone || phone.length !== 11) { toast("请填写手机号"); return; }
        if (phone === S.phone) { toast("不能绑定自己的手机号"); return; }
        if (!S.guardedPatients) S.guardedPatients = [];
        if (S.guardedPatients.some((p) => p.phoneRaw === phone)) { toast("该手机号已绑定"); return; }
        if (S.guardedPatients.length >= 5) { toast("最多绑定 5 位患者"); return; }
        const preset = name === "李建国"
          ? { gender: "男", age: 58, height: 170, weight: 75 }
          : (name === "张桂兰" ? { gender: "女", age: 56, height: 160, weight: 61 } : { gender: "男", age: 60, height: 168, weight: 68 });
        const newP = {
          id: `p${Date.now()}`,
          name,
          gender: preset.gender,
          age: preset.age,
          height: preset.height,
          weight: preset.weight,
          rel: S.famRel || "配偶",
          phone: phone.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2"),
          phoneRaw: phone,
        };
        S.guardedPatients.unshift(newP);
        S.activePatientId = newP.id;
        S.name = newP.name;
        S.gender = newP.gender;
        S.age = newP.age;
        S.height = newP.height;
        S.weight = newP.weight;
        render();
        toast(`已绑定患者${name}，当前正在守护`);
      },
      // 绑定校验：姓名 / 手机号 / 不能绑自己 / 已绑定 / 最多 5 位（真机 FamilyMemberStore）
      bindFam() {
        ensureCareGraph();
        const name = ($("input[name=fname]")?.value ?? S.famDraftName ?? "").trim();
        const phone = ($("input[name=fphone]")?.value ?? S.famDraftPhone ?? "").replace(/\D/g, "");
        const rel = S.famRel || "配偶";
        const me = currentDemoPerson();
        if (!name) { toast("请填写家属姓名"); return; }
        if (!phone || phone.length !== 11) { toast("请填写 11 位手机号"); return; }
        if (name === me.name || phone === me.phoneRaw) { toast("不能绑定本人自己的手机号"); return; }

        // 清理此前被拒绝的同人记录
        S.careBonds = S.careBonds.filter((b) => !(
          b.status === "rejected" &&
          bondInvolves(b, me.name) &&
          (bondOtherName(b, me.name) === name || bondOtherPhoneRaw(b, me.name) === phone)
        ));

        const activeForMe = S.careBonds.filter((b) => b.status !== "rejected" && bondInvolves(b, me.name));
        if (activeForMe.some((b) => bondOtherName(b, me.name) === name || bondOtherPhoneRaw(b, me.name) === phone)) {
          toast("该家属已在列表中，无需重复发送");
          return;
        }
        if (occupiedFamilySlotsFor(me.name) >= 5) {
          toast("每个人最多只能有 5 个家属");
          return;
        }
        const isNewlyCreated = !(S.demoPeople || []).some((p) => p.name === name);
        const targetP = ensureDemoPersonExists(name, phone, rel === "配偶" && me.gender === "男" && name !== "陈建华" ? "女" : "男", 55);
        // 新绑定的用户默认设为免费用户（未购买 VIP）
        if (isNewlyCreated && targetP.name !== "李建国") {
          S.vipByPerson[targetP.name] = false;
        } else if (S.vipByPerson[targetP.name] === undefined && targetP.name !== "李建国") {
          S.vipByPerson[targetP.name] = false;
        }
        if (confirmedFamilyBondsFor(targetP.name).length >= 5) {
          toast("对方已满 5 个家属，无法继续绑定");
          return;
        }
        const masked = phone.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
        S.careBonds.unshift({
          id: `b${Date.now()}`,
          guardianName: targetP.name,
          guardianPhone: masked,
          guardianPhoneRaw: phone,
          wardName: me.name,
          wardPhone: me.phone,
          wardPhoneRaw: me.phoneRaw,
          relation: rel,
          confirmed: false,
          status: "pending",
          initiatedByName: me.name,
          initiatedBy: "ward",
          hasUnreadAcceptReturn: false,
        });
        S.famDraftName = "";
        S.famDraftPhone = "";
        S.famIsAdding = false;
        syncLegacyListsFromBonds();
        render();
        toast(`已向${name}发送绑定请求，请切至对方测试身份点击同意/不同意`);
      },
      acceptFamInvite() {
        const mid = S.overlayData && S.overlayData.memberId;
        const target = (S.family || []).find((x) => String(x.id) === String(mid)) || activeFamMember();
        if (target) target.confirmed = true;
        closeOverlay();
        presentUnreadCareNoticeForRole("family");
        render();
        toast(`已开启对${S.name}的康复守护`);
      },
      rejectFamInvite() {
        const mid = S.overlayData && S.overlayData.memberId;
        const target = (S.family || []).find((x) => String(x.id) === String(mid)) || activeFamMember();
        if (target) {
          S.family = (S.family || []).filter((x) => String(x.id) !== String(target.id));
        }
        S.overlay = null;
        if (S.pureFamilyLogin) {
          S.pureFamilyLogin = false;
          S.loggedIn = false;
          S.role = "patient";
          S.actorId = null;
          S.frames = [{ id: "onboard-login", how: "root" }];
          S.screen = "onboard-login";
          render();
        } else {
          S.role = "patient";
          S.actorId = null;
          syncProfileForRole("patient");
          render();
        }
        toast("已拒绝守护并解除绑定");
      },
      call120() { openOverlay("e120"); },
      dial120() { toast("Demo 演示，将拨打 120"); closeOverlay(); },
      newChat() {
        if (genIsConsultV2()) {
          // V0.1 单页连续对话：旧对话归档进历史，待采纳的卡跟着新对话走
          const keep = S.rxChat.filter((m) => m.card && S.rxCards[m.card] && (S.rxCards[m.card].status === "pending" || S.rxCards[m.card].status === "deferred"));
          if (S.rxChat.length) S.rxArchive.unshift({ at: Date.now(), msgs: S.rxChat.slice() });
          S.rxChat = keep;
          S.rxCaseOn = false;
          S.rxCaseStep = null;
          S.chatMenu = false;
          S.chatDraft = "";
          render();
          return;
        }
        S.messages = [];
        S.consultOpen = false;
        S.chatMenu = false;
        S.caseMenu = false;
        S.caseMode = false;
        S.activeCaseId = null;
        S.caseStep = null;
        S.consultModule = null;
        S.pendingImage = false;
        S.plusPanel = false;
        S.consultKeyboard = false;
        S.inputMode = "voice";
        S.chatDraft = "";
        render();
      },
      toggleMenu() {
        S.chatMenu = !S.chatMenu;
        S.caseMenu = false;
        S.consultKeyboard = false;
        S.plusPanel = false;
        render();
      },
      toggleCaseMode() {
        S.caseMode = !S.caseMode;
        S.chatMenu = false;
        S.caseMenu = false;
        S.consultKeyboard = false;
        S.plusPanel = false;
        if (S.caseMode) {
          const cat = S.consultModule || S.caseCat || "plan";
          const hit = CONSULT_CASES.find((c) => c.cat === cat) || CONSULT_CASES[0];
          if (hit) applyConsultCase(hit, false);
        } else {
          S.activeCaseId = null;
          S.caseStep = null;
          S.messages = [];
          S.chatDraft = "";
        }
        render();
      },
      toggleCaseMenu() {
        act("toggleCaseMode");
      },
      closeCaseMenu() {
        S.caseMenu = false;
        S.chatMenu = false;
        render();
      },
      pickCaseCat() {
        const cat = el.dataset.cat || "plan";
        const hit = CONSULT_CASES.find((c) => c.cat === cat);
        if (hit) applyConsultCase(hit, S.caseStep != null);
        render();
      },
      loadConsultCase() {
        const cid = el.dataset.case;
        const item = CONSULT_CASES.find((x) => x.id === cid);
        if (!item) return;
        applyConsultCase(item, S.caseStep != null);
        render();
      },
      toggleCaseStepMode() {
        const item = CONSULT_CASES.find((x) => x.id === S.activeCaseId);
        if (!item) return;
        applyConsultCase(item, S.caseStep == null);
        render();
      },
      applyCaseAction() {
        const cid = el.dataset.case;
        const item = CONSULT_CASES.find((x) => x.id === cid);
        const card = (item && item.card) || (S.freeCards && S.freeCards[cid]);
        if (!card) return;
        if (S.appliedCaseActions[cid]) return;
        S.appliedCaseActions[cid] = true;
        const eff = card.effect;
        if (eff && eff.kind === "plan") {
          const existing = SEED.find((t) => t.title === eff.title)
            || SEED.find((t) => t.cat === eff.cat && (
              (eff.title.includes("阿司匹林") && t.title.includes("阿司匹林"))
              || (eff.title === "户外散步" && t.title.includes("散步"))
            ));
          if (existing) {
            existing.h = eff.h;
            existing.m = eff.m;
            existing.note = eff.note;
            logOp("修改了计划", "健康计划", existing.title);
          } else {
            SEED.push({
              id: `case_${cid}`,
              title: eff.title,
              cat: eff.cat,
              h: eff.h,
              m: eff.m,
              cycle: true,
              rec: eff.rec || "每日",
              durPreset: "一年",
              note: eff.note || "",
            });
            logOp("新建了计划", "健康计划", eff.title);
          }
          toast("已同步至健康计划");
        } else if (eff && eff.kind === "pausePlan") {
          const targetTasks = SEED.filter((t) => (eff.title && t.title === eff.title) || (eff.cat && t.cat === eff.cat));
          if (eff.pauseTodayOnly) {
            targetTasks.forEach((t) => { delete S.completed[t.id]; });
            logOp("删除了单次计划", "健康计划", eff.title || "今日运动计划");
            toast("已删除今日该项计划");
          } else {
            for (let i = SEED.length - 1; i >= 0; i--) {
              if ((eff.title && SEED[i].title === eff.title) || (eff.cat && SEED[i].cat === eff.cat)) {
                SEED.splice(i, 1);
              }
            }
            logOp("删除了后续计划", "健康计划", eff.title || "运动类计划");
            toast("已删除后续运动计划");
          }
        } else if (eff && eff.kind === "checkInPlan") {
          if (eff.sys && eff.dia && eff.hr) {
            S.sys = eff.sys;
            S.dia = eff.dia;
            S.hr = eff.hr;
          }
          const hit = SEED.find((t) => !S.completed[t.id] && ((eff.title && t.title === eff.title) || (eff.cat && t.cat === eff.cat)))
            || SEED.find((t) => !S.completed[t.id]);
          if (hit) {
            S.completed[hit.id] = true;
            logOp("打卡了", "健康计划", hit.title);
          } else {
            logOp("打卡了", "健康计划", eff.title || "今日康复计划");
          }
          toast("已完成今日打卡");
        } else if (eff && eff.kind === "vitals") {
          S.sys = eff.sys;
          S.dia = eff.dia;
          S.hr = eff.hr;
          logOp("记录了读数", "血压监测", `血压 ${eff.sys}/${eff.dia} mmHg · 心率 ${eff.hr} bpm`);
          // 顺带完成当日待打卡的「测血压」计划
          const pendingBp = SEED.find((t) => t.cat === "monitoring" && !S.completed[t.id]);
          if (pendingBp) {
            S.completed[pendingBp.id] = true;
            logOp("打卡了", "健康计划", `${pendingBp.title}（血压 ${eff.sys}/${eff.dia}，心率 ${eff.hr} bpm）`);
          }
          if (eff.alsoRemind && !SEED.some((t) => t.cat === "monitoring" && t.h >= 18)) {
            SEED.push({
              id: `case_bp_${cid}`,
              title: "晚间复测血压",
              cat: "monitoring",
              h: 20,
              m: 0,
              cycle: true,
              rec: "每日",
              durPreset: "一年",
              note: "静坐 5 分钟后复测血压与心率",
            });
          }
          toast("已记入血压监测");
        } else if (eff && eff.kind === "report") {
          S.consultReportOverall = eff.overall || "";
          if (!S.consultReportSub) S.consultReportSub = {};
          S.consultReportSub[eff.source] = eff.sub || "";
          logOp(eff.act || "更新了报告解读", eff.place || "身体报告", eff.how || "");
          toast("已更新身体报告结论");
        } else if (eff && eff.kind === "archiveImages") {
          const isReview = eff.target === "review";
          const pages = eff.pages || 1;
          if (isReview) {
            ARCHIVE_DEMO.review.groups.push({ title: eff.groupTitle || "复查报告", pages });
            if (eff.overall) S.consultReportOverall = eff.overall;
            if (!S.consultReportSub) S.consultReportSub = {};
            if (eff.sub) S.consultReportSub.review = eff.sub;
            const doneAppts = completeTodayAppointments();
            logOp("上传了复查资料", "复查报告", [
              ["资料", `${cnOrdinal(ARCHIVE_DEMO.review.groups.length)}次复查 ${pages} 页`],
              doneAppts.length ? ["打卡", `${opNames(doneAppts)} 已完成`] : ["计划", "本次未动"],
            ]);
            toast("已归入复查报告并联动完成今日复查计划");
          } else {
            ARCHIVE_DEMO.baseline.groups.push({ title: eff.groupTitle || "检查报告", pages });
            if (eff.overall) S.consultReportOverall = eff.overall;
            if (!S.consultReportSub) S.consultReportSub = {};
            if (eff.sub) S.consultReportSub.baseline = eff.sub;
            logOp("上传了资料", "基础报告", `${eff.groupTitle || "检查报告"} ${pages} 页`);
            toast("已归入基础报告");
          }
        } else if (eff && eff.kind === "emergency") {
          if (eff.sys && eff.dia && eff.hr) {
            S.sys = eff.sys;
            S.dia = eff.dia;
            S.hr = eff.hr;
            logOp("记录了读数", "血压监测", `危急读数：血压 ${eff.sys}/${eff.dia} mmHg · 心率 ${eff.hr} bpm`);
          }
          openOverlay("e120");
          return;
        }
        render();
      },
      openCaseTarget() {
        const target = el.dataset.target || "schedule";
        go(target, "cover");
      },
      togglePlus() {
        const opening = !S.plusPanel;
        S.plusPanel = opening;
        S.consultKeyboard = false;
        S.caseMenu = false;
        S.chatMenu = false;
        render();
      },
      consultCamera() {
        S.plusPanel = false;
        S.pendingImage = true;
        S.inputMode = "text";
        toast("已拍照，补充一句再发送");
        render();
      },
      consultAlbum() {
        S.plusPanel = false;
        S.pendingImage = true;
        S.inputMode = "text";
        toast("已从相册选了一张，补充一句再发送");
        render();
      },
      // 聊天框上方三枚胶囊：案例模式下直接切换对应模块问诊案例（再点当前 Tab 切同模块另一例）；自由问诊下把对应存量挂进当前问诊
      consultPlan() {
        if (S.caseMode) { switchCaseByBottomTab("plan"); render(); return; }
        S.consultModule = S.consultModule === "plan" ? null : "plan";
        render();
      },
      consultVitals() {
        if (S.caseMode) { switchCaseByBottomTab("vitals"); render(); return; }
        S.consultModule = S.consultModule === "vitals" ? null : "vitals";
        render();
      },
      consultReport() {
        if (S.caseMode) { switchCaseByBottomTab("report"); render(); return; }
        S.consultModule = S.consultModule === "report" ? null : "report";
        render();
      },
      consultImage() { openOverlay("consultImage"); },
      pickConsultPhoto() {
        S.pendingImage = true;
        S.inputMode = "text";
        closeOverlay();
        toast("已添加图片，补充一句再发送");
      },
      consultCall() { openOverlay("aiCall"); },
      // ── V0.1 哈宝医生：案例面板 / 方案卡 / 调整卡 / 置顶方案条 / 期末反馈 ──
      rxToggleCase() {
        S.plusPanel = false;
        S.consultKeyboard = false;
        if (S.rxCaseOn) {
          S.rxCaseOn = false;
          S.rxCaseStep = null;
          S.chatDraft = "";
          render();
          return;
        }
        if (applyRxCase(RX_CASES.find((c) => c.id === S.rxCaseId) || RX_CASES[0], false)) { openOverlay("e120"); return; }
        render();
      },
      rxLoadCase() {
        const item = RX_CASES.find((c) => c.id === el.dataset.case);
        if (!item) return;
        if (applyRxCase(item, S.rxCaseStep != null)) { openOverlay("e120"); return; }
        render();
      },
      rxCaseMode() {
        const item = RX_CASES.find((c) => c.id === S.rxCaseId) || RX_CASES[0];
        if (applyRxCase(item, el.dataset.mode === "step")) { openOverlay("e120"); return; }
        render();
      },
      rxCaseFold() { S.rxCaseFold = !S.rxCaseFold; render(); },
      rxFirstPlan() {
        if ((S.plan && S.plan.cur) || rxPendingCard("plan")) return;
        const no = Math.max((S.plan && S.plan.seq) || 0, 0) + 1;
        const rows = [];
        if (!SEED.some((t) => t.title.includes("泡脚"))) rows.push(rxAddRow("soak"));
        liveTasks().slice(0, 5).forEach((t) => rows.push(rxRowOf("keep", t)));
        const c = rxNewCard({
          kind: "plan", no, rows, demo: true,
          why: "以你现在的计划为底，先把每天吃药、测血压稳住；7 天一期，做完我们一起复盘。",
        });
        S.rxCaseOn = true;
        S.rxCaseId = "rx0";
        S.rxCaseStep = null;
        S.rxCaseMsgs = [
          { who: "user", t: "帮我制定第 1 期康复方案" },
          { who: "ai", t: "好，我先按你现在的吃药、测血压和日常安排起草第 1 期 7 天方案。医生审核后，你点下面的「采纳方案」就能开始，采纳当天算第 1 天：" },
          { who: "ai", t: `第 ${no} 期康复方案已经制定好，医生已审核：`, card: c.id },
        ];
        S.chatDraft = "";
        render();
      },
      // 采纳：整张一键采纳，真实写入健康计划（带医嘱标）并记 1 条操作记录；重复点不重复写
      rxAdopt() {
        const c = S.rxCards[el.dataset.card];
        if (!c || c.status === "adopted" || c.status === "expired") return;
        if (c.kind === "plan") {
          rxAdoptPlan(c);
          toast(`已采纳第 ${c.no} 期方案，今天是第 1 天`);
        } else {
          rxAdoptAdjust(c);
          toast("已采纳调整，健康计划已更新");
        }
      },
      rxAsk() {
        S.chatDraft = "关于这份方案我想问：";
        S.plusPanel = false;
        S.rxFocus = true;
        render();
      },
      rxDefer() {
        const c = S.rxCards[el.dataset.card];
        if (!c) return;
        c.status = "deferred";
        c.deferredOn = rxToday();
        c.open = false;
        render();
      },
      rxCardOpen() { const c = S.rxCards[el.dataset.card]; if (c) { c.open = true; render(); } },
      rxCardClose() { const c = S.rxCards[el.dataset.card]; if (c) { c.open = false; render(); } },
      rxKeepToggle() { const c = S.rxCards[el.dataset.card]; if (c) { c.keepOpen = !c.keepOpen; render(); } },
      rxGoStamps() { S.stampSelYMD = rxToday(); go("stamps", "cover"); },
      rxGoSchedule() { go("schedule", "cover"); },
      rxPinToggle() { S.rxPinOpen = !S.rxPinOpen; render(); },
      // 置顶条「去看看」/ 集章「去采纳」：进哈宝医生并滚到那张方案卡
      rxGoCard() {
        const id = el.dataset.card;
        const c = S.rxCards[id];
        if (!c) return;
        if (!S.rxChat.some((m) => m.card === id)) S.rxChat.push({ who: "ai", t: `第 ${c.no} 期康复方案在这里：`, card: id });
        if (c.status === "deferred") c.open = true;
        S.rxCaseOn = false;
        S.rxCaseStep = null;
        S.rxScrollTo = id;
        if (S.screen === "consult") render();
        else go("consult", "cover");
      },
      rxFocusInput() {
        S.rxCaseOn = false;
        S.rxCaseStep = null;
        S.rxFocus = true;
        render();
      },
      rxOpenFeedback() {
        if (!S.plan.cur || !rxCurEnded()) return;
        S.plan.cur.fbPrompted = true;
        openOverlay("rxFeedback", {});
      },
      rxPickFeeling() { S.overlayData.feeling = el.dataset.f; render(); },
      rxSubmitFeedback() {
        const f = S.overlayData.feeling;
        if (!f) { toast("先选一项这一期的感受"); return; }
        const next = rxDoSubmitFeedback(f);
        S.overlay = null;
        if (!next) { render(); return; }
        if (S.screen === "consult") render();
        else go("consult", "cover");
        toast("已交给哈宝医生");
      },
      rxLater() { closeOverlay(); },
      rxStampPlanToggle() { S.rxStampPlanOpen = !S.rxStampPlanOpen; render(); },
      rxPeriodSummary() { openOverlay("rxPeriod", { no: el.dataset.no }); },
      hangUpCall() {
        closeOverlay();
        if (genIsConsultV2()) {
          S.rxCaseOn = false;
          S.rxCaseStep = null;
          S.rxChat.push({ who: "user", t: "（AI电话）走路有点喘" });
          S.rxChat.push({ who: "ai", t: "已收到这段通话。走路有点喘的话先放慢速度、走走停停；如果休息后还喘、或者胸口发闷，请马上告诉我。你可以继续打字补充，我再一起看。" });
          S.rxScrollBottom = true;
          render();
          return;
        }
        S.messages.push({ who: "user", t: "（AI电话）走路有点喘" });
        S.messages.push({ who: "ai", t: "已记下这次通话。你可以继续打字补充，我再一起看。" });
        render();
      },
      shareStamp() { openOverlay("share"); },
      openCal() { openOverlay("stampCal"); },
      opDel() {
        S.ops = (S.ops || []).filter((op) => op.id !== el.dataset.id);
        closeOverlay();
        render();
      },
      opReassign() { openOverlay("opActor", { id: el.dataset.id }); },
      opPickActor() {
        const op = (S.ops || []).find((x) => x.id === S.overlayData.id);
        const id = el.dataset.id;
        const name = el.dataset.name;
        if (op) {
          if (id) {
            op.actor = name || op.actor;
            op.actorId = id;
            op.role = "family";
          } else {
            op.actor = name || S.currentPersonName || S.name || "我";
            op.actorId = null;
            op.role = "patient";
          }
        }
        closeOverlay();
        render();
      },
      // 操作记录换日（V10.113）：日历里只到今天、最早到第一条记录那天
      openOpCal() {
        const ymd = S.opDay || toYMD(new Date());
        openOverlay("datePick", { kind: "opDay", selected: ymd, month: ymd });
      },
      demoShare() { toast("Demo 演示，未接入 SDK"); },
      savedAlbum() { toast("已保存到相册"); },
      qPick() {
        const q = QUESTIONS[S.qIndex];
        if (q.kind === "multi") {
          const cur = new Set(S.answers[q.id] || []);
          if ((q.exclusive || []).includes(el.dataset.v)) S.answers[q.id] = [el.dataset.v];
          else {
            cur.delete((q.exclusive || [])[0]);
            if (cur.has(el.dataset.v)) cur.delete(el.dataset.v); else cur.add(el.dataset.v);
            S.answers[q.id] = [...cur];
          }
        } else S.answers[q.id] = el.dataset.v;
        render();
      },
      qNext() {
        if (S.qIndex < QUESTIONS.length - 1) S.qIndex += 1;
        else { S.qDone = true; logOp("提交了问卷", "问卷随访", []); }
        renderTop();
      },
      qPrev() { if (S.qIndex > 0) S.qIndex -= 1; renderTop(); },
      // V10.50：题号矩阵由贴底 sheet 改成全屏「答题进度」页（章节分卡 + 6 列圆号）
      openQGrid() { present("q-progress", "cover"); },
      qJump() { S.qIndex = +el.dataset.i; scrollResetOnce = true; back(); },
      shareVitals() { openOverlay("reportPoster", { kind: "vitals" }); },
      shareAnalysis() { openOverlay("reportPoster", { kind: "report" }); },
      qFinish() {
        S.qDone = false;
        S.qIndex = 0;
        dismissCover();
      },
      restartFollowup() {
        S.answers = {};
        S.qIndex = 0;
        S.qDone = false;
        go("questionnaire", "cover");
      },
      openReport() {
        S.reportKind = el.dataset.kind || "baseline";
        S.reportPane = "insight";
        go("report-sub", "cover");
      },
      // V10.50：报告页顶部分页（AI 解读 / 资料合集），页内就地切换
      setReportPane() {
        S.reportPane = el.dataset.p === "archive" ? "archive" : "insight";
        render();
      },
      // V10.61：资料合集已在本页 Tab，底栏不论有无存量都直接进拍摄
      addArchive() {
        S.apptCapture = false;
        S.archivePlace = S.reportKind === "visit" ? "复查报告" : "基础报告";
        startArchive("capture");
      },
      // V10.49：复诊打卡形态的次钮，收起报告页回首页
      reportHome() { dismissCover(); },
      // V10.49：复诊打卡形态的导航「返回」——按胶囊自身的承诺落身体报告模块页
      reportBack() { replace("report"); },
      uploadHealth() { openOverlay("archivePick"); },
      // 健康档案：分区折叠 + 缩略图全屏预览（真机 HealthRecordView）
      toggleHr() {
        const k = el.dataset.k;
        S.hrExpanded[k] = !S.hrExpanded[k];
        render();
      },
      previewPage() { openOverlay("archivePreview", { title: el.dataset.t }); },
      closePreview() { closeOverlay(); },
      pickArchive() {
        S.reportKind = el.dataset.kind || "baseline";
        S.overlay = null;
        S.apptCapture = false;
        S.archivePlace = "健康档案";
        startArchive("capture");
      },
      archiveFromAnalysis() {
        S.reportKind = el.dataset.kind || "baseline";
        S.apptCapture = false;
        S.archivePlace = "身体报告";
        startArchive("capture");
      },
      contra() { S.contra = !S.contra; render(); },
      // 体测前导：指南弹窗 → 3-2-1 倒计时 → 运行页（真机 BodyTestRunView）
      openGuide() {
        if (S.contra) return;
        S.testMode = el.dataset.m === "sit" ? "sit" : "walking";
        const p = TEST_PARAMS[S.testMode];
        S.testCadence = p.start; S.testElapsed = 0; S.testReps = 0;
        S.testTotal = p.total;
        openOverlay("testGuide");
      },
      // 3-2-1 自动倒数后进运行页（真机 BodyTestRunView 倒计时卡）
      beginCountdown() {
        openOverlay("testCountdown", { n: 3 });
        stopCountdown();
        countdownTimer = setInterval(() => {
          const n = (S.overlayData.n ?? 3) - 1;
          if (n <= 0) { stopCountdown(); S.testRunning = true; closeOverlay(); go("body-test", "replace"); return; }
          S.overlayData.n = n;
          render();
        }, 800);
      },
      exitTest() { closeOverlay(); closeFlow(); },
      cadenceUp() {
        const p = TEST_PARAMS[S.testMode];
        S.testCadence = Math.min(p.max, S.testCadence + p.step);
        render();
      },
      cadenceDown() {
        const p = TEST_PARAMS[S.testMode];
        S.testCadence = Math.max(p.min, S.testCadence - p.step);
        render();
      },
      startTest() { closeOverlay(); S.testRunning = true; go("body-test", "replace"); },
      finishTest() { S.testRunning = false; captureBodyTest(); go("borg", "push"); },
      setTalk() { S.talk = el.dataset.v; render(); },
      setSym() {
        const v = el.dataset.v;
        if (v === "无不适") { S.symptoms = ["无不适"]; }
        else {
          S.symptoms = S.symptoms.filter((x) => x !== "无不适");
          S.symptoms = S.symptoms.includes(v) ? S.symptoms.filter((x) => x !== v) : [...S.symptoms, v];
        }
        render();
      },
      borgOk() {
        if (!S.talk) { toast("请选择测试中能否正常说话"); return; }
        const high = S.borg > 7 || S.symptoms.some((x) => ["胸痛", "胸闷", "气促", "头晕", "心悸"].includes(x));
        go(high ? "risk-result" : "confirm-exercise", "push");
      },
      sys(d) { markManualVitalsStep(); S.sys = stepOrSeed(S.sys, d, 120, 70, 220); render(); },
      dia(d) { markManualVitalsStep(); S.dia = stepOrSeed(S.dia, d, 78, 40, 140); render(); },
      hr(d) { markManualVitalsStep(); S.hr = stepOrSeed(S.hr, d, 72, 40, 180); render(); },
      confirmOk() {
        const a = S.overlayData.action;
        if (a && map[a]) map[a]();
        else closeOverlay();
      },
    };
    // 血压 / 心率步进 ±1（真机 AddEditTaskView / VitalsInputSheet 同款）
    const run = () => {
      if (name === "sys+" ) return map.sys(1);
      if (name === "sys-") return map.sys(-1);
      if (name === "dia+") return map.dia(1);
      if (name === "dia-") return map.dia(-1);
      if (name === "hr+") return map.hr(1);
      if (name === "hr-") return map.hr(-1);
      if (map[name]) map[name]();
    };
    run();
    // V0.1 期末反馈：第 7 天当天最后一项方案计划打卡后立刻弹出（不用等到 24:00）
    if (!S.overlay && rxShouldPrompt(true)) {
      S.plan.cur.fbPrompted = true;
      openOverlay("rxFeedback", {});
    }
    // 首页打卡等路径走 refreshHomeSoft 局部重绘、不经过 render，这里补一次结算，
    // 否则真机模拟面板不会更新
    if (S.sim?.on) { simEval(); renderSpec(); }
  }

  function drawDial() {
    const svg = $("#dial");
    const bite = $("#bite");
    if (!svg || !bite) return;
    const geo = homeGeo(bite.clientWidth, bite.clientHeight);
    const D = geo.D;
    const cx = D / 2;
    const cy = D / 2;
    const R = D / 2;
    const plateR = geo.plateR;
    const inner = plateR * 0.30;
    const outer = plateR * 0.97;
    const face = currentFace();
    const rad = (deg) => (deg * Math.PI) / 180;
    const polar = (ang, rr) => [cx + rr * Math.sin(rad(ang)), cy - rr * Math.cos(rad(ang))];
    const pointed = nearestBlockFacing(face);
    const readingTarget = (L.reading - face + 3600) % 360;
    const prox = (i) => {
      const d = angDist(blockCenterAngle(i), readingTarget);
      return Math.max(0, 1 - d / (L.sector * 0.85));
    };

    let segs = "";
    for (let i = 0; i < 7; i++) {
      const a0 = blockStartAngle(i);
      const a1 = blockStartAngle(i + 1);
      const [x0, y0] = polar(a0, outer);
      const [x1, y1] = polar(a1, outer);
      const [xi1, yi1] = polar(a1, inner);
      const [xi0, yi0] = polar(a0, inner);
      const green = zoneCleared(i);
      const even = i % 2 === 0;
      const base = green ? (even ? 0.14 : 0.09) : (even ? 0.08 : 0.05);
      const op = base + (green ? 0.14 : 0.10) * prox(i);
      const color = green ? "#1AA64A" : "#1054E0";
      segs += `<path d="M${x0.toFixed(2)} ${y0.toFixed(2)} A${outer.toFixed(2)} ${outer.toFixed(2)} 0 0 0 ${x1.toFixed(2)} ${y1.toFixed(2)} L${xi1.toFixed(2)} ${yi1.toFixed(2)} A${inner.toFixed(2)} ${inner.toFixed(2)} 0 0 1 ${xi0.toFixed(2)} ${yi0.toFixed(2)} Z" fill="${color}" fill-opacity="${op.toFixed(3)}"/>`;
    }

    let ticks = "";
    for (let i = 0; i < 7; i++) {
      for (let k = 0; k < 4; k++) {
        const ang = blockStartAngle(i) - (k / 4) * L.sector;
        const isBound = k === 0;
        const isMid = k === 2;
        const len = isBound ? Math.max(11, D * 0.048) : isMid ? Math.max(7, D * 0.032) : Math.max(4, D * 0.018);
        const w = isBound ? Math.max(1.8, D * 0.0065) : isMid ? Math.max(1.3, D * 0.0045) : Math.max(0.9, D * 0.003);
        const op = isBound ? 0.42 : isMid ? 0.26 : 0.12;
        let green = zoneCleared(i);
        if (isBound && i > 0 && zoneCleared(i - 1)) green = true;
        if (isBound && i === 0 && zoneCleared(6)) green = true;
        const color = green ? "#1AA64A" : "#1054E0";
        const orbit = R * L.tickOrbit;
        const [x1, y1] = polar(ang, orbit);
        const [x2, y2] = polar(ang, orbit - len);
        ticks += `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="${color}" stroke-opacity="${op}" stroke-width="${w.toFixed(2)}" stroke-linecap="round"/>`;
      }
    }

    const titleSize = Math.max(21, D * 0.062) * 0.93;
    const metaSize = Math.max(11, D * 0.032) * 0.93;
    let labels = "";
    BLOCKS.forEach((b, i) => {
      const screen = blockCenterAngle(i) + face;
      const facing = Math.max(0, -Math.sin(rad(screen)));
      const [lx, ly] = polar(screen, R * L.labelOrbit);
      const green = zoneCleared(i);
      const color = green ? "#1AA64A" : "#1054E0";
      const meta = green ? "#1AA64A" : "#828EA5";
      const tOp = 0.40 + 0.55 * facing;
      const mOp = 0.28 + 0.48 * facing;
      labels += `<text x="${lx.toFixed(2)}" y="${(ly - 6).toFixed(2)}" text-anchor="middle" fill="${color}" fill-opacity="${tOp.toFixed(3)}" font-size="${titleSize.toFixed(1)}" font-weight="700" font-family="SF Pro Rounded, PingFang SC, sans-serif">${b.title}</text>`;
      labels += `<text x="${lx.toFixed(2)}" y="${(ly + 14).toFixed(2)}" text-anchor="middle" fill="${meta}" fill-opacity="${mOp.toFixed(3)}" font-size="${metaSize.toFixed(1)}" font-weight="600" font-variant-numeric="tabular-nums" font-family="SF Pro Rounded, PingFang SC, sans-serif">${b.range}</text>`;
    });

    const handGreen = zoneCleared(pointed);
    const pColor = handGreen ? "#1AA64A" : "#1054E0";
    const tipOrbit = R * L.handTip;
    const shaftW = Math.max(4.5, D * 0.015);
    const tipLen = Math.max(12, D * 0.036);
    const tipH = Math.max(shaftW * 1.55, D * 0.022);
    const tipX = cx - tipOrbit;
    const baseX = tipX + tipLen;
    const pivot = Math.max(11, D * 0.032);
    const pointer = `<path d="M${tipX.toFixed(2)} ${cy.toFixed(2)} L${baseX.toFixed(2)} ${(cy - tipH).toFixed(2)} L${cx.toFixed(2)} ${(cy - shaftW / 2).toFixed(2)} L${cx.toFixed(2)} ${(cy + shaftW / 2).toFixed(2)} L${baseX.toFixed(2)} ${(cy + tipH).toFixed(2)} Z" fill="${pColor}" filter="url(#handSh)"/>`;

    svg.setAttribute("viewBox", `0 0 ${D} ${D}`);
    svg.innerHTML = `
      <defs>
        <filter id="ds"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#1054E0" flood-opacity="0.06"/></filter>
        <filter id="handSh"><feDropShadow dx="-1" dy="1" stdDeviation="2" flood-color="${pColor}" flood-opacity="0.20"/></filter>
      </defs>
      <circle cx="${cx}" cy="${cy}" r="${plateR}" fill="#fff" filter="url(#ds)"/>
      <g transform="rotate(${face.toFixed(3)} ${cx} ${cy})" data-face="on">${segs}${ticks}</g>
      ${labels}
      ${pointer}
      <circle cx="${cx}" cy="${cy}" r="${pivot / 2}" fill="${pColor}"/>
      <circle cx="${cx}" cy="${cy}" r="${(pivot * 0.38) / 2}" fill="#fff"/>
    `;
  }

  /* ───────────────── 首页方案四：时段泳道 + 底部扇形拨盘 ─────────────────
     与真机 TodaySchemeFourView 同构：横向泳道一屏一栏、整栏吸附；
     底部扇形拨盘与泳道双向联动，320ms 联动锁防对打。
     只服务 S.scheme === 3，方案一（S.scheme === 0）的渲染与状态一律不动。 */

  /// 时段图标：真机 DialTimeBlock.icon（moon.zzz.fill / sunrise.fill / … / moon.stars.fill）
  const S4_ICONS = ["moonZzz", "sunrise", "sun", "noon", "haze", "set", "moonStars"];
  /// 拨盘几何：弧顶固定在本视图顶缘下 6，扇形只向下铺（真机 BottomFanDial.arcTopInset）
  const S4_FAN_H = 132;
  const S4_ARC_TOP = 6;
  const S4_SWEEP = 140;
  const S4_BAND = 44;
  /// 单段圆心角：7 段均分 140°（真机 fanDegrees / (blocks.count - 1)）
  const S4_SEG = S4_SWEEP / 6;
  /// 横滑多少 pt 换一段（真机 spanPx）
  const S4_DRAG_PX = 48;

  /// 问候语：真机 greetingPrefix 的同一套切分
  function s4Greeting(h) {
    if (h < 6) return "夜深了";
    if (h < 9) return "早上好";
    if (h < 12) return "上午好";
    if (h < 14) return "中午好";
    if (h < 18) return "下午好";
    if (h < 21) return "傍晚好";
    return "晚上好";
  }
  /// 范围文案：真机 timeRangeLabel，小时不补零、夜间写 24:00
  function s4Range(id) { return `${BLOCKS[id].start}:00~${BLOCKS[id].end}:00`; }
  /// 当前选中时段：没手动选过就按「现在」落段（真机 selectedBlock 初值）
  function s4Cur() {
    const v = S.s4Block;
    return v == null || v < 0 || v > 6 ? blockOf(demoNowHM().h).id : v;
  }
  /// 打卡时刻：真机 completionEndDate → wallClockLabel，没有就不写时刻
  function s4DoneClock(id) {
    const at = S.s4DoneAt && S.s4DoneAt[id];
    return at ? `${at.h}:${pad(at.m)}` : "";
  }
  function s4DotsHTML(cur) {
    return BLOCKS.map((b) => `<i class="${b.id === cur ? "on" : ""}"></i>`).join("");
  }
  function s4CapHTML(cur) {
    return `${I[S4_ICONS[cur]]}<span>${BLOCKS[cur].title} ${s4Range(cur)}</span>`;
  }

  // ── 泳道卡（真机 LaneTaskCard）──

  function s4CardHTML(t) {
    const done = !!S.completed[t.id];
    const clock = s4DoneClock(t.id);
    return `
      <div class="s4-card ${done ? "done" : ""} ${t.cat === "appointment" ? "appt" : ""}">
        <span class="s4-badge">${done ? "已完成" : "未完成"}</span>
        <button class="s4-more" data-act="detail" data-id="${t.id}" type="button">查看详情${I.chevR}</button>
        <div class="s4-card-main">
          <div class="s4-card-l">
            <h3 class="s4-card-t">${t.title}</h3>
            <p class="s4-card-plan">计划时间：${blockOf(t.h).title}${t.h}:${pad(t.m)}</p>
            <p class="s4-card-dates">${taskDateRangeLabel(t)}</p>
          </div>
          <span class="s4-art">${(CAT_ICON[t.cat] || CAT_ICON.rest)()}</span>
        </div>
        ${done ? `
          <div class="s4-done-row">
            <span class="s4-praise">${I.check}${clock ? `已在${clock}完成，真棒！` : "已完成，真棒！"}</span>
            <button class="s4-undo" data-act="s4Checkin" data-id="${t.id}" type="button">取消</button>
          </div>` : `
          <button class="s4-check" data-act="s4Checkin" data-id="${t.id}" type="button">
            ${t.cat === "medication" ? I.pills : I.tap}打卡
          </button>`}
      </div>`;
  }

  // ── 空时段（真机 emptyLane）──

  function s4EmptyHTML(b) {
    return `
      <div class="s4-empty">
        ${S.enrolled ? `
          <button class="s4-add" data-act="s4AddToday" data-b="${b.id}" type="button">
            <span class="s4-add-plus">${I.plus}</span>
            <span class="s4-add-t">添加${b.title}计划</span>
          </button>` : `
          <button class="s4-first" data-act="firstCreate" type="button">首次创建计划</button>`}
        <div class="s4-none">
          <span class="s4-none-mark">${I.calLarge}</span>
          <span class="s4-none-t">暂无计划</span>
        </div>
      </div>`;
  }

  // ── 泳道栏（真机 laneColumn）──

  function s4LaneHTML(b, i) {
    const tasks = S.enrolled ? liveTasks().filter((t) => blockOf(t.h).id === b.id) : [];
    return `
      <div class="s4-lane" data-b="${b.id}">
        <div class="s4-lane-head">
          <span class="s4-lane-ico">${I[S4_ICONS[b.id]]}</span>
          <span class="s4-lane-t">${b.title}</span>
          <span class="s4-lane-r">${s4Range(b.id)}</span>
          <span class="s4-dots">${s4DotsHTML(s4Cur())}</span>
        </div>
        <div class="s4-lane-body">
          ${tasks.length ? `<div class="s4-cards">${tasks.map((t, k) => `
            <div class="s4-row">
              <span class="s4-rail${k === 0 ? " first" : ""}${k === tasks.length - 1 ? " last" : ""}"><i></i></span>
              ${s4CardHTML(t)}
            </div>`).join("")}</div>` : s4EmptyHTML(b)}
        </div>
      </div>`;
  }

  // ── 底部扇形拨盘（真机 BottomFanDial）──

  /// 0° = 正上方，左负右正（真机 BottomFanDial.point）
  function s4FanGeo() {
    const el = document.getElementById("s4-fan");
    const w = Math.round(el?.clientWidth || document.querySelector(".phone-screen")?.clientWidth || 393);
    const r = Math.max(w * 0.62, 200);
    return { w, r, cx: w / 2, cy: r + S4_ARC_TOP };
  }
  function s4FanPt(g, radius, deg) {
    const a = (deg * Math.PI) / 180;
    return [g.cx + Math.sin(a) * radius, g.cy - Math.cos(a) * radius];
  }
  function s4FanArc(g, radius, d0, d1) {
    const [x0, y0] = s4FanPt(g, radius, d0);
    const [x1, y1] = s4FanPt(g, radius, d1);
    return `M${x0.toFixed(2)} ${y0.toFixed(2)}A${radius.toFixed(2)} ${radius.toFixed(2)} 0 ${Math.abs(d1 - d0) > 180 ? 1 : 0} ${d1 > d0 ? 1 : 0} ${x1.toFixed(2)} ${y1.toFixed(2)}`;
  }
  function s4FanHTML() {
    const g = s4FanGeo();
    const half = S4_SWEEP / 2;
    const inner = g.r - S4_BAND;
    const band = `${s4FanArc(g, g.r, -half, half)}L${s4FanPt(g, inner, half).map((n) => n.toFixed(2)).join(" ")}${s4FanArc(g, inner, half, -half).slice(1)}Z`;
    const ticks = Array.from({ length: 13 }, (_, i) => {
      const deg = -half + (i / 12) * S4_SWEEP;
      const major = i % 2 === 0;
      const [ax, ay] = s4FanPt(g, g.r - 5, deg);
      const [bx, by] = s4FanPt(g, g.r - (major ? 17 : 11), deg);
      return `<path d="M${ax.toFixed(2)} ${ay.toFixed(2)}L${bx.toFixed(2)} ${by.toFixed(2)}" stroke="#1054E0" stroke-opacity="${major ? 0.35 : 0.18}" stroke-width="${major ? 2 : 1}"/>`;
    }).join("");
    return `
      <svg class="s4-fan-svg" id="s4-fan-svg" viewBox="0 0 ${g.w} ${S4_FAN_H}" fill="none">
        <defs>
          <linearGradient id="s4-fan-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stop-color="#1054E0" stop-opacity="0.20"/>
            <stop offset="1" stop-color="#1054E0" stop-opacity="0.08"/>
          </linearGradient>
        </defs>
        <path d="${band}" fill="url(#s4-fan-grad)"/>
        <path d="${s4FanArc(g, g.r, -half, half)}" stroke="#1054E0" stroke-opacity="0.32" stroke-width="2.5"/>
        ${ticks}
        <path id="s4-hl" d="${s4FanArc(g, g.r - 9, -S4_SEG / 2 + 1, S4_SEG / 2 - 1)}" stroke="#1054E0" stroke-opacity="0.6" stroke-width="7" stroke-linecap="round"/>
      </svg>
      <div class="s4-cap" id="s4-cap">${s4CapHTML(s4Cur())}</div>`;
  }

  // ── 双向联动（真机 selectBlockFromDial / lockSync）──

  let s4LockTimer = 0;
  let s4ScrollTimer = 0;
  let s4Tween = 0;
  function s4Lock(driver) {
    S.s4Driver = driver;
    clearTimeout(s4LockTimer);
    s4LockTimer = setTimeout(() => { S.s4Driver = "idle"; }, 320);
  }
  function s4PaintSel(cur) {
    document.querySelectorAll(".s4-dots").forEach((d) => { d.innerHTML = s4DotsHTML(cur); });
    const cap = document.getElementById("s4-cap");
    if (cap) cap.innerHTML = s4CapHTML(cur);
  }
  function s4ScrollTo(id, animate) {
    const sc = document.getElementById("s4-lanes");
    const lane = sc && sc.querySelector(".s4-lane");
    if (!sc || !lane) return;
    const to = id * (lane.offsetWidth + 20);
    cancelAnimationFrame(s4Tween);
    if (!animate) { sc.scrollLeft = to; return; }
    const from = sc.scrollLeft;
    const t0 = performance.now();
    sc.style.scrollSnapType = "none"; // 补间期间让开吸附，否则每帧被拉回
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / 280);
      const e = t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2;
      sc.scrollLeft = from + (to - from) * e;
      if (t < 1) s4Tween = requestAnimationFrame(tick);
      else sc.style.scrollSnapType = "";
    };
    s4Tween = requestAnimationFrame(tick);
  }
  function s4Select(id, driver) {
    const next = Math.max(0, Math.min(6, id));
    s4Lock(driver);
    S.s4Block = next;
    s4PaintSel(next);
    if (driver === "dial") s4ScrollTo(next, true);
  }
  function s4PhoneScale() {
    const m = /scale\(([\d.]+)\)/.exec(document.getElementById("phone-wrap")?.style.transform || "");
    return m ? +m[1] : 1;
  }
  function bindScheme4() {
    const sc = document.getElementById("s4-lanes");
    if (sc) {
      s4ScrollTo(s4Cur(), false);
      sc.onscroll = () => {
        if (S.s4Driver === "dial") return; // 拨盘在驱动，别对打
        const lane = sc.querySelector(".s4-lane");
        if (!lane) return;
        const id = Math.max(0, Math.min(6, Math.round(sc.scrollLeft / (lane.offsetWidth + 20))));
        // 选中段跟手落状态：中途若有重绘（toast、打卡），泳道不会跳回旧栏
        if (id !== s4Cur()) S.s4Block = id;
        clearTimeout(s4ScrollTimer);
        s4ScrollTimer = setTimeout(() => {
          if (S.s4Driver === "dial") return;
          s4Lock("list");
          s4PaintSel(s4Cur()); // 停稳后再换胶囊文案与圆点
        }, 90);
      };
    }
    const fan = document.getElementById("s4-fan");
    if (!fan) return;
    const hl = document.getElementById("s4-hl");
    const g = s4FanGeo();
    const paint = (deg) => {
      if (hl) hl.setAttribute("d", s4FanArc(g, g.r - 9, deg - S4_SEG / 2 + 1, deg + S4_SEG / 2 - 1));
    };
    let x0 = 0;
    let base = 0;
    let dragging = false;
    fan.onpointerdown = (e) => {
      dragging = true;
      x0 = e.clientX;
      base = s4Cur();
      try { fan.setPointerCapture(e.pointerId); } catch { /* 探针合成的 pointer 捕不了，不影响拖动 */ }
    };
    fan.onpointermove = (e) => {
      if (!dragging) return;
      // 右滑 → 更早时段；高亮弧跟手反向偏移（真机 dragOffsetDegrees）
      paint((-(e.clientX - x0) / s4PhoneScale() / S4_DRAG_PX) * S4_SEG);
    };
    const end = (e) => {
      if (!dragging) return;
      dragging = false;
      paint(0); // 松手瞬间回正到顶部正中
      const next = base - Math.round((e.clientX - x0) / s4PhoneScale() / S4_DRAG_PX);
      s4Select(next, "dial");
    };
    fan.onpointerup = end;
    fan.onpointercancel = end;
  }

  /// 方案四整屏：品牌行 + 问候头 + 三入口 + 泳道区 + 底部扇形拨盘
  function scheme4Home() {
    const now = demoNowHM();
    const entries = [["schedule", I.cal, "健康计划"], ["vitals", I.ecg, "血压监测"], ["report", I.doc, "身体报告"]];
    return `
      <div class="page s4-page">
        <div class="s4-brand">
          <img src="${A.logo}" alt="" />
          <span>哈宝</span>
        </div>
        <div class="s4-greet">
          <div class="s4-greet-txt">
            <h2 class="s4-hello"><span>${s4Greeting(now.h)}，</span>${S.name}</h2>
            <p class="s4-weather">今天天气很凉爽，气温26~18度</p>
          </div>
          <button class="circle-btn lg dbg-btn" data-act="openDebug" type="button" aria-label="开发菜单">${I.ellipsis}</button>
          <button class="circle-btn lg" data-go="profile" type="button" aria-label="个人中心">${I.person}</button>
        </div>
        <div class="s4-entries">
          ${entries.map(([go, ico, label]) => `
            <button class="s4-entry" data-go="${go}" type="button">
              <span class="s4-entry-ico">${ico}</span>
              <span class="s4-entry-t">${label}</span>
            </button>`).join("")}
        </div>
        <div class="s4-stage">
          <div class="s4-lanes" id="s4-lanes">${BLOCKS.map(s4LaneHTML).join("")}</div>
          <div class="s4-fan" id="s4-fan">${s4FanHTML()}</div>
        </div>
      </div>`;
  }

  const HW_KINDS = [
    { k: "bloodPressure", title: "血压计", name: "哈宝血压计", serial: "3086", qrTip: "二维码在机身底部或包装盒上。", icon: "ecg" },
    { k: "watch", title: "手表", name: "哈宝手表", serial: "1172", qrTip: "二维码在表盒背面或包装上。", icon: "watch" },
  ];
  var hwTimer = null;
  var sheetHwTimer = null;
  var monitorHwTimer = null;
  const BP_HW_PRESETS = [
    { sys: 122, dia: 76, hr: 68 },
    { sys: 124, dia: 78, hr: 70 },
    { sys: 120, dia: 74, hr: 66 },
    { sys: 126, dia: 78, hr: 71 },
    { sys: 118, dia: 74, hr: 67 },
  ];
  function simulatedBPReading(step = 0) {
    return BP_HW_PRESETS[Math.abs(step) % BP_HW_PRESETS.length];
  }
  function hasBoundBPMonitor() {
    return false;
  }
  function demoNowHMText() {
    const hm = demoNowHM();
    return `${pad(hm.h)}:${pad(hm.m)}`;
  }
  function markManualVitalsStep() {
    if (sheetHwTimer) { clearTimeout(sheetHwTimer); sheetHwTimer = null; }
    S.vitalsFromHw = false;
    if (S.overlay === "vitals" && hasBoundBPMonitor()) {
      S.vitalsSyncPhase = "manualAdjusted";
    }
    if (S.screen === "task-edit" && S.taskId && S.taskVitalsHw) {
      S.taskVitalsHw[S.taskId] = false;
    }
  }
  function startSheetHwSync() {
    if (sheetHwTimer) { clearTimeout(sheetHwTimer); sheetHwTimer = null; }
    S.vitalsSyncPhase = "syncing";
    S.vitalsFromHw = false;
    const step = S.vitalsSyncStep || 0;
    S.vitalsSyncStep = step + 1;
    render();
    sheetHwTimer = setTimeout(() => {
      sheetHwTimer = null;
      if (S.overlay !== "vitals") return;
      const r = simulatedBPReading(step);
      S.sys = r.sys;
      S.dia = r.dia;
      S.hr = r.hr;
      S.vitalsFromHw = true;
      S.vitalsSyncPhase = "synced";
      render();
    }, 1200);
  }
  function startMonitorHwSync() {
    if (monitorHwTimer) { clearTimeout(monitorHwTimer); monitorHwTimer = null; }
    S.monitorHwPhase = "syncing";
    const step = S.monitorHwStep || 0;
    S.monitorHwStep = step + 1;
    render();
    monitorHwTimer = setTimeout(() => {
      monitorHwTimer = null;
      const r = simulatedBPReading(step);
      S.sys = r.sys;
      S.dia = r.dia;
      S.hr = r.hr;
      S.vitalsOffset = 0;
      if (VITALS_WEEK.length) {
        VITALS_WEEK[VITALS_WEEK.length - 1] = { day: "日", sys: r.sys, dia: r.dia, hr: r.hr };
      }
      S.vitalsLog = S.vitalsLog || [];
      S.vitalsLog.unshift({ time: demoNowHMText(), sys: r.sys, dia: r.dia, hr: r.hr, hw: true });
      const pendingTask = SEED.find((t) => t.cat === "monitoring" && t.title !== "测心率" && !S.completed[t.id]);
      if (pendingTask) {
        S.completed[pendingTask.id] = true;
        S.taskVitalsHw = S.taskVitalsHw || {};
        S.taskVitalsHw[pendingTask.id] = true;
        markProxy(pendingTask.id, null, true);
        S.monitorHwDetail = `刚刚 · 血压 ${r.sys}/${r.dia} mmHg，心率 ${r.hr} bpm · 已完成「${pendingTask.title}」打卡`;
        logOp("打卡了", "血压监测", [["计划", pendingTask.title], ["读数", `哈宝血压计，血压 ${r.sys}/${r.dia}，心率 ${r.hr} bpm`]]);
      } else {
        S.monitorHwDetail = `刚刚 · 血压 ${r.sys}/${r.dia} mmHg，心率 ${r.hr} bpm · 已更新本周评估与曲线`;
        logOp("同步了血压", "血压监测", [["读数", `哈宝血压计（血压 ${r.sys}/${r.dia}，心率 ${r.hr} bpm）`]]);
      }
      S.monitorHwPhase = "synced";
      render();
    }, 1200);
  }
  function vitalsHardwareCardHTML() {
    const dev = hwBound("bloodPressure");
    if (!dev) {
      return `<div class="island-card mb12" style="padding:16px">
        <div class="flex between gap12">
          <div class="flex gap12" style="min-width:0">
            <div style="width:44px;height:44px;border-radius:50%;background:rgba(16,84,224,.10);color:#1054E0;display:grid;place-items:center;flex-shrink:0">${I.ecg}</div>
            <div style="min-width:0">
              <div class="flex gap6" style="align-items:center">
                <span class="s16 fb t">哈宝血压计</span>
                <span style="font-size:11px;font-weight:700;color:#62708A;background:rgba(16,84,224,.08);padding:2px 7px;border-radius:99px">未绑定</span>
              </div>
              <div class="s13 t-sec mt4">绑定血压计后，测完自动同步读数并完成今日打卡</div>
            </div>
          </div>
          <button class="cap" data-go="hardware" type="button" style="flex-shrink:0">去绑定 ›</button>
        </div>
      </div>`;
    }
    const phase = S.monitorHwPhase || "idle";
    const isSyncing = phase === "syncing";
    const isSynced = phase === "synced";
    const tint = isSynced ? "#1AA64A" : "#1054E0";
    const latestHw = (S.vitalsLog || []).find((x) => x.hw);
    const subText = isSyncing
      ? "正在接收哈宝血压计测完上传的血压与心率数据"
      : isSynced
        ? S.monitorHwDetail
        : latestHw
          ? `最近同步：今天 ${latestHw.time} · 血压 ${latestHw.sys}/${latestHw.dia} mmHg`
          : "设备已就绪 · 血压计测完后数据自动同步至此";
    return `<div class="island-card mb12" style="padding:16px;${isSynced ? "border:1.5px solid rgba(26,166,74,.28)" : ""}">
      <div class="flex between gap10">
        <div class="flex gap12" style="min-width:0;flex:1">
          <div style="position:relative;width:44px;height:44px;border-radius:50%;background:${isSynced ? "rgba(26,166,74,.12)" : "rgba(16,84,224,.12)"};color:${tint};display:grid;place-items:center;flex-shrink:0">
            ${isSyncing ? I.waves : isSynced ? I.check : I.ecg}
            ${isSyncing ? "" : `<i style="position:absolute;right:0;bottom:0;width:11px;height:11px;border-radius:50%;background:#1AA64A;border:2px solid #fff"></i>`}
          </div>
          <div style="min-width:0;flex:1">
            <div class="flex gap6" style="align-items:center;flex-wrap:wrap">
              <span class="s16 fb" style="color:${tint}">${isSyncing ? "正在同步血压计数据…" : isSynced ? "已同步最新血压计读数" : `${dev.name} · ${dev.serial}`}</span>
              ${isSyncing ? "" : `<span style="font-size:11px;font-weight:700;color:#1AA64A;background:rgba(26,166,74,.12);padding:2px 7px;border-radius:99px">${isSynced ? `${dev.name} · ${dev.serial}` : "已连接"}</span>`}
            </div>
            <div class="s13 t-sec mt4" style="line-height:1.4">${subText}</div>
          </div>
        </div>
        ${isSyncing ? "" : `<button data-act="monitorHwSync" type="button" style="border:0;cursor:pointer;flex-shrink:0;padding:8px 12px;border-radius:99px;font-size:13px;font-weight:700;background:${isSynced ? "rgba(26,166,74,.14)" : "#1054E0"};color:${isSynced ? "#1AA64A" : "#fff"}">${isSynced ? "再次同步" : "同步数据"}</button>`}
      </div>
    </div>`;
  }
  function hwSpec(k) {
    return HW_KINDS.find((x) => x.k === k) || HW_KINDS[0];
  }
  function hwBound(k) {
    return (S.hw || {})[k] || null;
  }
  function hwCaption() {
    const names = HW_KINDS.filter((x) => hwBound(x.k)).map((x) => x.title);
    if (!names.length) return "尚未绑定";
    if (names.length === HW_KINDS.length) return "两台都已绑定";
    return "已绑定" + names.join("、");
  }
  function hwDay(at) {
    const d = new Date(at);
    return `${d.getMonth() + 1}月${d.getDate()}日`;
  }
  function hwIcon(name) {
    if (name === "watch") return I.watch;
    if (name === "waves") return I.waves;
    return I.ecg;
  }
  function hwScanHTML() {
    const spec = hwSpec(S.hwKind);
    const device = hwBound(spec.k);
    const phase = device ? "bound" : (S.hwPhase === "found" ? "found" : "scan");
    if (phase === "bound") {
      return `<div class="page">
        ${navBar(cap(I.chevL, "返回"), spec.title)}
        <div class="scroll px20" style="padding-top:8px">
          <div class="hw-hero"><div class="hw-orb">${hwIcon(spec.icon)}</div><span class="hw-badge">${I.check}</span></div>
          <div class="ta-c" style="margin-top:4px">
            <div class="s22 fb t">${spec.name}</div>
            <div class="s16 fb t-green" style="margin:8px 28px 0">已绑定</div>
            <div class="s15 fm t-sec mono" style="margin-top:6px">编号 ${device.serial} · 绑定于 ${hwDay(device.at)}</div>
          </div>
        </div>
        <div class="px20" style="padding-bottom:28px">
          <button class="cta-danger" data-act="hwUnbindAsk" type="button">解除绑定</button>
        </div>
      </div>`;
    }
    const found = phase === "found";
    const tips = found
      ? `<div class="hw-scanhint">识别到一台设备</div><div class="hw-scantip2">确认是你的，再绑定。</div>`
      : `<div class="hw-scanhint">对准「${spec.name}」包装上的二维码</div><div class="hw-scantip2">${spec.qrTip}</div>`;
    const card = found
      ? `<div class="hw-found"><div class="well">${hwIcon(spec.icon)}</div><div class="grow"><div class="s18 fb t">${spec.name}</div><div class="s14 fm t-sec mono">编号 ${spec.serial}</div></div></div>`
      : "";
    const dock = found
      ? `<button class="cta" data-act="hwBind" type="button">绑定这台</button><button class="cta-darkghost mt8" data-act="hwScan" type="button">重新扫描</button>`
      : `<button class="cta-darkghost" data-act="back" type="button">取消</button>`;
    return `<div class="page hw-scanpage">
      <div class="hw-scanbar">
        <button class="hw-scanback" data-act="back" type="button" aria-label="返回">${I.chevL}</button>
        <span class="hw-scantitle">扫描二维码</span>
      </div>
      <div class="hw-scancol">
        <div class="hw-frame ${found ? "ok" : ""}">
          <span class="hw-qr">${I.qr}</span>
          <div class="hw-laserbox"><div class="hw-laser"></div></div>
          <span class="hw-corner tl"></span><span class="hw-corner tr"></span><span class="hw-corner bl"></span><span class="hw-corner br"></span>
        </div>
        <div class="ta-c">${tips}</div>
        <div class="w100">${card}</div>
      </div>
      <div class="px20" style="padding-bottom:28px">${dock}</div>
    </div>`;
  }

  const screens = {
    "onboard-login": () => `
      <div class="page px24" style="padding-top:78px">
        ${dotsHTML(1)}
        <h2 class="s28 fb t page-title">欢迎使用哈宝</h2>
        <p class="s14 fm t-sec mt8 page-sub">手机号登录，未注册将自动创建账号</p>
        <div class="col center" style="margin:26px 0 16px">
          <img class="brand-logo" src="${A.logo}" width="86" height="86" alt="" />
          <p class="login-welcome s28 fb t">欢迎使用哈宝</p>
          <p class="brand-slogan s14 fm t-sec mt12">让哈宝，陪你恢复健康</p>
        </div>
        <div class="field-label">手机号</div>
        <input class="field" name="phone" maxlength="11" placeholder="11 位手机号" value="${S.phone}" />
        <div class="field-label mt16">验证码</div>
        <div class="flex gap8">
          <input class="field" name="code" maxlength="6" placeholder="6 位验证码" value="123456" />
          <button class="cta-ghost" style="width:96px;padding:0;height:52px;font-size:13px" data-act="sendCode" type="button">获取验证码</button>
        </div>
        <div style="display:flex;align-items:center;gap:6px;margin-top:16px;padding:4px 0;font-size:14px;flex-wrap:wrap">
          <button type="button" data-act="toggleLoginTerms" style="display:inline-flex;align-items:center;gap:8px;border:0;background:none;padding:0;cursor:pointer;font-family:inherit;color:var(--sec)">
            <span style="width:22px;height:22px;border-radius:7px;background:${S.loginTermsChecked ? "var(--blue)" : "#fff"};border:1.6px solid ${S.loginTermsChecked ? "var(--blue)" : "rgba(16,84,224,.32)"};display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:800;flex-shrink:0">${S.loginTermsChecked ? "✓" : ""}</span>
            <span style="font-size:14px;font-weight:500;color:var(--sec)">我已阅读并同意</span>
          </button>
          <button type="button" data-act="openAgreementModal" data-kind="service" style="border:0;background:none;padding:0;cursor:pointer;font-family:inherit;font-size:14px;font-weight:700;color:var(--blue)">《服务协议》</button>
          <span style="color:var(--sec);font-size:14px">和</span>
          <button type="button" data-act="openAgreementModal" data-kind="privacy" style="border:0;background:none;padding:0;cursor:pointer;font-family:inherit;font-size:14px;font-weight:700;color:var(--blue)">《隐私协议》</button>
        </div>
        <button class="cta mt16" data-act="login" type="button">登录</button>
      </div>`,

    "onboard-profile": () => `
      <div class="page px24" style="padding-top:78px">
        ${dotsHTML(2)}
        <h2 class="s28 fb t">完善你的信息</h2>
        <p class="s14 fm t-sec mt8">用于生成康复建议，可随时在个人中心修改</p>
        <div class="scroll" style="margin-top:20px">
          <div class="field-label">姓名</div>
          <input class="field" name="pname" placeholder="患者姓名" value="${S.name}" />
          <div class="field-label mt16">性别</div>
          <div class="chips">
            <button class="chip ${S.gender === "男" ? "on" : ""}" data-act="pickGender" data-g="男" type="button">男</button>
            <button class="chip ${S.gender === "女" ? "on" : ""}" data-act="pickGender" data-g="女" type="button">女</button>
          </div>
          <div class="field-label mt16">生日</div>
          <div class="field flex center" style="justify-content:flex-start">${S.birthday}</div>
          <div class="flex gap12 mt16">
            <div class="grow"><div class="field-label">身高</div><div class="field">${S.height} cm</div></div>
            <div class="grow"><div class="field-label">体重</div><div class="field">${S.weight} kg</div></div>
          </div>
        </div>
        <div class="flex gap12" style="padding:16px 0 32px">
          <button class="cta-ghost" data-act="back" type="button">上一步</button>
          <button class="cta" data-act="enter" type="button">进入哈宝</button>
        </div>
      </div>`,

    home: () => {
      if (S.scheme === 3) return scheme4Home(); // 方案四：时段泳道 + 底部扇形拨盘
      const mh = homeModuleHeight(S.enrolled);
      const headerTitleHTML = `<h2>${esc(homeHeaderTitle())}</h2>`;
      return `
        <div class="page home-page">
          <div class="welcome">
            <div class="titles" style="min-width:0;flex:1;margin-right:8px">
              ${headerTitleHTML}
              <p>${greeting()}</p>
            </div>
            <div class="flex gap10 center">
              <button class="circle-btn dbg-btn" data-act="openDebug" type="button" aria-label="开发菜单">${I.ellipsis}</button>
              <button class="circle-btn" data-go="profile" type="button">${I.person}</button>
            </div>
          </div>
          <div class="entry-strip">
            <div class="entry" data-go="schedule"><div class="ico">${I.cal}</div><span>健康计划</span></div>
            <div class="entry" data-go="vitals"><div class="ico">${I.ecg}</div><span>血压监测</span></div>
            <div class="entry" data-go="report"><div class="ico">${I.doc}</div><span>身体报告</span></div>
          </div>
          <div class="clock-stack">
            <div class="bite" id="bite" style="height:${mh}px;flex-basis:${mh}px">
              <div class="dial-host" id="dial-host">
                <svg id="dial" class="dial-svg" viewBox="0 0 520 520"></svg>
              </div>
              <div class="lane">
                ${S.enrolled ? `<div class="add-slot hug" data-act="addToday" data-hug="16">
                  <svg class="hug-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path class="hug-path" fill="rgba(255,255,255,.55)"/>
                    <path class="hug-stroke" fill="none" stroke="rgba(16,84,224,.42)" stroke-width="1.6" stroke-dasharray="7 5" vector-effect="non-scaling-stroke"/>
                  </svg>
                  <div class="hug-inner">
                    <div class="add-plus">${I.plus}</div>
                    <span id="add-slot-title">添加${BLOCKS[S.block].title}计划</span>
                  </div>
                </div>` : ""}
                ${laneBodyHTML()}
              </div>
              <div class="scrub" id="scrub"></div>
            </div>
            ${S.enrolled ? "" : `<button class="first-create" data-act="firstCreate" type="button">首次创建计划 ${I.tap}</button>`}
          </div>
          <div class="dock">
            <div class="orb" data-go="walk">${I.walk}<span>运动</span></div>
            ${consultOrbHTML()}
            <div class="orb" data-go="stamps">${I.share}<span>分享</span></div>
          </div>
        </div>`;
    },

    schedule: () => {
      const green = S.scheduleFilter === "done";
      const todayYMD = toYMD(demoDate());
      const hist = S.calSelYMD < todayYMD;
      // 子计划过滤：总计划 = 全部，其余按分类集合
      const scopeCats = {
        "运动计划": ["exercise"],
        "用药计划": ["medication"],
        "其他计划": Object.keys(CAT).filter((c) => !["exercise", "medication"].includes(c)),
      }[S.scheduleScope];
      const scoped = liveTasks(S.calSelYMD).filter((t) => !scopeCats || scopeCats.includes(t.cat));
      // 计数随子计划过滤（与真机一致：未完成 / 已完成按当前 tab 统计）
      const todoCount = scoped.filter((t) => !S.completed[t.id]).length;
      const doneCount = scoped.filter((t) => S.completed[t.id]).length;
      const list = scoped.filter((t) => green ? S.completed[t.id] : !S.completed[t.id]);
      const groups = PERIODS.map((p) => ({
        ...p,
        items: list.filter((t) => (t.h >= p.from && t.h < p.to) || (p.title === "夜间" && (t.h >= 21 || t.h < 6))),
      })).filter((g) => g.items.length);
      return `
        <div class="page">
          ${navBar(cap(I.chevL, "返回", green ? "green" : ""), `<span data-act="openScope">${S.scheduleScope} ▾</span>`,
            `<button class="cap ${green ? "green" : ""}" data-act="calMode" type="button">${I.cal}${S.calMode === "week" ? "月图" : "周图"}</button>`)}
          <div class="scroll px20" style="padding-top:8px">
            <div class="cal-island ${green ? "green" : ""}" id="cal-swipe">
              <div class="cal-head">
                <button class="cal-nav" data-act="calPrev" type="button">${I.chevL}</button>
                <div class="s17 fb t ${green ? "t-green" : ""}">${calHeadTitle()}</div>
                <button class="cal-nav" data-act="calNext" type="button">${I.chevR}</button>
              </div>
              <div class="weekdays">${"日一二三四五六".split("").map((d) => `<span>${d}</span>`).join("")}</div>
              <div class="days">${calDays(green)}</div>
            </div>
            ${hist ? `<div class="hist-bar mt12">${I.eye}${monthDayLabel(parseYMD(S.calSelYMD)).split(" ")[0]} · 历史记录，仅可查看</div>` : ""}
            <div class="filter ${green ? "green" : ""} mt12">
              <button class="${!green ? "on" : ""}" data-act="toggleDone" data-f="todo" type="button">未完成 ${todoCount}</button>
              <button class="${green ? "on" : ""}" data-act="toggleDone" data-f="done" type="button">已完成 ${doneCount}</button>
            </div>
            ${groups.length ? groups.map((g) => `
              <div class="period-h">${I[g.icon] || ""}${g.title}<span class="s12 t-sec">${g.items.length} 项</span></div>
              <div class="col gap10">${g.items.map((t) => actionCard({
                cat: t.cat, title: t.title, time: `${pad(t.h)}:${pad(t.m)}`,
                date: yearMonthDayLabel(parseYMD(S.calSelYMD)),
                done: !!S.completed[t.id], hist, id: t.id, toggle: !hist,
                cycle: t.cycle !== false,
                note: t.note || "",
              })).join("")}</div>
            `).join("") : `<div class="island-card ta-c t-sec s15" style="padding:16px;margin-top:16px">${emptyPlanText()}</div>`}
          </div>
          <button class="fab ${green ? "" : ""}" style="${green ? "background:#1AA64A" : ""}" data-act="${hist ? "today" : "addPlan"}" type="button">
            ${hist ? `${I.undo}回到今天` : `${I.plus}添加健康计划`}
          </button>
        </div>`;
    },

    "task-view": () => taskEditor("view"),
    "task-edit": () => taskEditor("edit"),
    "task-add": () => taskEditor("add"),

    "select-type": () => `
      <div class="page">
        ${navBar(`<button class="cap" data-act="later" type="button">${I.chevL}返回</button>`, "选择类型",
          `<button class="cap" data-act="openCatManage" type="button">${I.slider}管理</button>`)}
        <div class="scroll px20" style="padding-top:16px;padding-bottom:30px">
          ${typeGroup("专业康复计划", "按病例与体测生成", { icon: I.steth }, [
            ["用药与复查", "根据资料覆盖更新用药与复查", "medication", "typeMed", { special: true }],
            ["运动", "完成运动前风险提示与体测评估", "exercise", "typeEx"],
          ])}
          ${typeGroup("普通日常计划", "", { icon: I.bell, includeCustom: true }, [
            ["测血压", "记录每日血压与心率", "monitoring", "typeDaily"],
            ["饮食", "创建饮食提醒", "diet", "typeDaily"],
            ["作息", "创建起床、午休与入睡提醒", "rest", "typeDaily"],
          ])}
        </div>
      </div>`,

    // 自建类别纯管理页：只做改与删，新建仍在选择类型页底部（真机 CategoryManageView）
    "category-manage": () => {
      const cats = S.customCats || [];
      const body = cats.length
        ? `<div class="type-island">${cats.map((c) => {
            const n = catUsage(c.id);
            return `
          <div class="type-row">
            <div class="b48 badge" style="background:${UNIFIED_CUSTOM_COLOR}">${I[UNIFIED_CUSTOM_ICON]}</div>
            <div class="grow">
              <h4>${c.name}</h4>
              <p class="${n ? "" : "dim"}">${n ? `${n} 个计划` : "暂无计划"}</p>
            </div>
            <button class="ico-btn edit" data-act="openCatRename" data-id="${c.id}" type="button" aria-label="编辑${c.name}">${I.pencil}</button>
            <button class="ico-btn del" data-act="openCatRemoval" data-id="${c.id}" type="button" aria-label="删除${c.name}">${I.trash}</button>
          </div>`;
          }).join("")}</div>`
        : `<div class="white-island ta-c" style="padding:34px 20px">
            <div style="color:var(--secondary);opacity:.4;margin-bottom:12px">${I[UNIFIED_CUSTOM_ICON]}</div>
            <div class="s15 fb t">还没有自建类别</div>
            <div class="s13 t-sec" style="margin-top:6px">在「选择类型」页底部点「新建类别」即可创建</div>
          </div>`;
      return `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "管理类别")}
        <div class="scroll px20" style="padding-top:16px;padding-bottom:30px">${body}</div>
      </div>`;
    },

    "first-rest": () => `
      <div class="page">
        ${navBar(`<button class="nav-text" data-act="later" type="button">稍后</button>`, "基础作息",
          `<button class="nav-text blue" data-act="addRest" type="button">添加</button>`)}
        <div class="scroll pad-16" style="padding-top:16px">
          <div class="white-island" style="padding:4px 16px">
            ${S.restRows.length ? S.restRows.map((r, i) => `
              <div class="rest-row">
                <span class="minus" data-act="delRest" data-i="${i}">${I.minus}</span>
                <div class="rest-name" data-act="editRestName" data-i="${i}">${r.name} <span class="t-sec" style="opacity:.45">${I.chevUD}</span></div>
                <button class="time-cap" data-act="editRestTime" data-i="${i}" type="button">${r.t}</button>
              </div>`).join("") : `<div class="ta-c t-sec s15" style="padding:28px 4px">暂无计划，点右上角添加</div>`}
          </div>
        </div>
        <div class="pad-16" style="padding-bottom:36px">
          <button class="cta h64" data-act="uploadDischarge" type="button">${I.cam}拍照上传病历</button>
        </div>
      </div>`,

    "ocr-capture": () => {
      if (!S.docGroups) seedDocGroups(0);
      const g = activeDoc();
      const hint = g ? docCat(g.cat).hint : "点快门或新建组开始拍摄";
      const ready = canSubmitCapture();
      const pages = g?.pages || 0;
      return `
      <div class="page" style="background:#111">
        ${navBar(`<button class="nav-text nav-hit t-white" data-act="laterCapture" type="button">稍后</button>`,
          `<span style="color:#fff">上传资料</span>`,
          `<button class="nav-text nav-hit ${ready ? "t-white" : "nav-wait"}" ${ready ? 'data-act="ocrConfirm"' : "disabled"} type="button">确认</button>`)}
        <div class="grow rel" style="margin:8px 0;background:#1a1a1a">
          <div class="abs t-sec ta-c" style="left:16px;right:16px;top:40%;color:#9aa">${hint}</div>
        </div>
        ${S.docGroups.length ? `
        <div class="doc-track">
          <button class="doc-add" data-act="addDocGroup" type="button"><span>＋</span>新建组</button>
          ${S.docGroups.map((x) => `
            <div class="doc-chip ${x.id === S.activeGroup ? "on" : ""}">
              <button class="doc-chip-main" data-act="selectDocGroup" data-id="${x.id}" type="button">
                <b>${groupDisplayName(x)}</b>
                <small>${x.pages ? `${x.pages} 页` : "待拍摄"}</small>
              </button>
              ${canDeleteDocGroup(x) ? `<button class="doc-chip-x" data-act="delDocGroup" data-id="${x.id}" type="button">×</button>` : ""}
            </div>`).join("")}
        </div>` : ""}
        <div class="flex center" style="justify-content:space-around;padding:16px 24px 36px;background:#111">
          <button class="doc-tool" data-act="previewDocGroup" type="button">${pages ? `<i>${pages}</i>` : ""}${I.doc}</button>
          <button class="doc-shutter" data-act="shutter" type="button"><span></span></button>
          <button class="doc-tool blue" data-act="albumImport" type="button">${I.cam}</button>
        </div>
      </div>`;
    },

    "ocr-group": () => {
      const g = activeDoc();
      const name = g ? groupDisplayName(g) : "文档组";
      const pages = g?.pages || 0;
      return `
      <div class="page">
        ${navBar(`<button class="nav-text blue" data-act="ocrReshoot" type="button">${I.chevL}拍摄</button>`, name,
          `<button class="nav-text blue" data-act="albumImport" type="button">${I.cam}相册</button>`)}
        <div class="scroll px20" style="padding-top:16px">
          ${pages ? `
            <div class="doc-pages">
              ${Array.from({ length: pages }, (_, i) => `
                <button class="doc-page" data-act="delDocPage" data-id="${g.id}" data-p="${i}" type="button">第${i + 1}页<span>×</span></button>`).join("")}
            </div>` : `<div class="ta-c t-sec s15" style="padding:48px 8px">暂无照片</div>`}
        </div>
      </div>`;
    },

    "ocr-detail": () => {
      if (!S.docGroups) seedDocGroups(3);
      const filled = S.docGroups.filter((g) => g.pages > 0);
      const ready = canSubmitCapture();
      const right = S.captureMode === "archive"
        ? `<button class="nav-text ${ready ? "blue" : "dim"}" ${ready ? 'data-act="ocrSubmit"' : "disabled"} type="button">${I.check}提交</button>`
        : `<button class="nav-text ${ready ? "blue" : "dim"}" ${ready ? 'data-act="ocrParse"' : "disabled"} type="button">${I.spark}解析</button>`;
      return `
      <div class="page">
        ${navBar(`<button class="nav-text blue" data-act="ocrReshoot" type="button">${I.chevL}拍摄</button>`, "资料详情", right)}
        <div class="scroll px20" style="padding-top:12px">
          ${filled.length ? filled.map((g) => `
            <div class="flex between mb8"><div class="s24 fb t">${groupDisplayName(g)}</div>
              <div class="flex gap8">
                ${isVisitCapture() ? "" : `<button class="cap" data-act="changeDocCat" data-id="${g.id}" type="button">类别</button>`}
                ${canDeleteDocGroup(g) ? `<button class="cap red" data-act="delDocGroup" data-id="${g.id}" type="button">删除</button>` : ""}
              </div>
            </div>
            <div class="doc-pages">
              ${Array.from({ length: g.pages }, (_, i) => `
                <button class="doc-page" data-act="delDocPage" data-id="${g.id}" data-p="${i}" type="button">第${i + 1}页<span>×</span></button>`).join("")}
            </div>`).join("") : `<div class="ta-c" style="padding:44px 8px">
              <div class="s16 fb t-sec">暂无可提交的资料</div>
            </div>`}
        </div>
      </div>`;
    },

    "confirm-plan": () => {
      if (!S.confirmDrafts) seedConfirmDrafts();
      const daily = S.confirmDrafts.map((x, i) => ({ ...x, i, h: parseHour(x.time) }));
      const groups = groupByPeriod(daily, (x) => x.h);
      const appts = confirmApptItems();
      return `
      <div class="page">
        ${navBar(`<button class="nav-text nav-hit" data-act="later" type="button">稍后</button>`, "确认计划",
          `<button class="nav-text blue nav-hit" data-act="confirmPlan" type="button">确认</button>`)}
        <div class="scroll px20" style="padding-top:12px;padding-bottom:120px">
          ${groups.map((g) => `
            <div class="confirm-period">
              ${sectionHead(I[g.icon], g.title, g.items.length)}
              <div class="col gap10">${g.items.map((x) => {
                const rawNote = x.cat === "medication"
                  ? (x.note != null ? x.note : confirmMedNote(x.title))
                  : (x.note || "");
                return actionCard({
                  cat: x.cat, title: x.title, time: x.time, draft: true, cycle: true, idx: x.i,
                  dose: x.cat === "medication" ? medDose(x.title) : "",
                  note: rawNote || "可编辑备注",
                  noteEmpty: !rawNote,
                });
              }).join("")}</div>
            </div>`).join("")}
          <div class="confirm-period">
            ${sectionHead(I.cal, "复查计划", appts.length, true)}
            <div class="col gap10">${appts.map((a) => actionCard({
              cat: "appointment", title: a.title, time: a.time, appt: true, draft: true, cycle: true,
              note: a.note,
            })).join("")}</div>
          </div>
        </div>
        <div class="px20 col gap10" style="padding-bottom:28px">
          <button class="cta h52" data-act="reparseCase" type="button">${I.cam}重新拍照解析</button>
        </div>
      </div>`;
    },

    "exercise-risk": () => S.contra ? `
      <div class="page px24" style="padding-top:72px">
        ${navBar(`<button class="nav-text" data-act="later" type="button">稍后</button>`, "运动前风险提示")}
        <div class="col center grow">
          <div style="width:104px;height:104px;border-radius:50%;background:rgba(242,153,74,.16);display:grid;place-items:center;color:#F2994A;font-size:42px">!</div>
          <h2 class="s22 fb t-amber mt16">检测到绝对禁忌症或罕见病风险</h2>
          <p class="s15 fm t-sec ta-c mt12">依据出院诊断，当前存在绝对禁忌症或罕见心血管病风险，建议暂缓创建运动计划。<br>如医嘱允许且有家属看护，可确认后继续创建。</p>
          <div class="flex gap8 mt16"><span class="cap red">室颤</span><span class="cap red">心衰Ⅲ级及以上</span></div>
          <button class="cta amber mt16" data-act="later" type="button">暂不创建运动计划</button>
          <button class="cta-line mt12" data-act="askForceContinueExercise" data-reason="contra" type="button">仍要继续创建</button>
        </div>
      </div>` : `
      <div class="page">
        ${navBar(`<button class="nav-text" data-act="later" type="button">稍后</button>`, "运动前风险提示")}
        <div class="scroll px24" style="padding-top:12px">
          <p class="s14 t-sec ta-c">运动测试存在一定风险，请先阅读以下须知</p>
          ${[
            ["近 30 天出现以下情况，请勿评估", "不稳定心绞痛、静息胸痛、心衰加重、严重心律失常、晕厥"],
            ["医嘱明确可进行有氧运动", "近 3 个月内有就医记录，且医生建议有氧运动的，建议评估。"],
            ["日常能连续步行 10 分钟以上", "平时可独立完成的，建议进行评估。"],
            ["选择安全平整的场地", "户外选空旷无遮挡处，室内备一把稳固座椅，避免摔倒或数据不准。"],
          ].map((x, i) => `
            <div class="flex gap12 mt16">
              <div style="width:30px;height:30px;border-radius:50%;background:#1054E0;color:#fff;display:grid;place-items:center" class="s14 fb">${i + 1}</div>
              <div><div class="s16 fb t">${x[0]}</div><div class="s13 t-sec mt8">${x[1]}</div></div>
            </div>`).join("")}
          <button class="cta mt16" data-act="openGuide" data-m="walking" type="button">${I.walk}户外步行<br><span class="s13 fb" style="opacity:.8">原地踏步三分钟，评估耐量</span></button>
          <button class="cta mt12" data-act="openGuide" data-m="sit" type="button">室内坐立<br><span class="s13 fb" style="opacity:.8">1 分钟坐立，居家可测</span></button>
          <button class="cta-line mt12" data-act="later" type="button">退出评估</button>
          <label class="flex gap8 mt16 t-amber s14 pointer"><input type="checkbox" ${S.contra ? "checked" : ""} data-act="contra" /> 演示：模拟命中绝对禁忌症</label>
        </div>
      </div>`,

    // 体测运行页：散步（原地踏步 3 分钟）/ 坐立（1 分钟）两套同构布局
    "body-test": () => {
      const sit = S.testMode === "sit";
      const p = TEST_PARAMS[sit ? "sit" : "walking"];
      const target = sitStandTarget(58, S.gender);
      const reps = S.testReps;
      const reached = target > 0 && reps >= target;
      // 节奏越界（例如刚从另一模式切过来）时回落到本模式默认值
      const cadence = S.testCadence >= p.min && S.testCadence <= p.max ? S.testCadence : p.start;
      const total = sit ? 60 : 180;
      const remaining = Math.max(0, total - S.testElapsed);
      const mmss = (s) => `${Math.floor(s / 60)}:${pad(s % 60)}`;
      const warn = sit ? "如果您起坐时需要他人扶助，请勿独自进行评估" : "如果您因为任何原因不能独立行走，请勿进行评估";
      return `
      <div class="page">
        ${navBar(`<button class="nav-text" data-act="later" type="button">稍后</button>`, sit ? "坐立体测" : "散步体测")}
        <div class="px24 grow col">
          <div class="s13 fb mt8" style="color:#F05A6E">
            <span class="flex gap6">${I.warn}<span>测试中如有不适，请立即长按停止</span></span>
          </div>
          ${sit ? `
            <div class="flex between mt16" style="align-items:baseline">
              <div class="s40 fh t mono">${reps}<span class="s15 fm t-sec"> 次</span></div>
              <!-- 坐立次数由计时器按当前节奏累计（真机 BodyTestRunView 实时读数） -->
              <div class="s24 fb t mono">${mmss(remaining)}</div>
            </div>
            <div class="progress-bar mt12"><i style="width:${Math.round((S.testElapsed / total) * 100)}%"></i></div>
            <div class="flex center gap6 mt8 s12 fsb ${reached ? "t-green" : "t-sec"}">
              ${reached ? I.check : I.scope}<span>${reached ? `已达到同龄参考（${target} 次）` : `同龄参考 ${target} 次，保持节奏`}</span>
            </div>
            <div class="island-card ta-c" style="padding:24px;margin-top:16px">
              <svg viewBox="0 0 130 100" class="w100" height="118" fill="none" stroke="#1054E0" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 84h106" stroke-width="3"/>
                <path d="M88 84V38" stroke-width="3"/>
                <path d="M62 56h26" stroke-width="3"/>
                <path d="M64 84V56" stroke-width="3"/>
                <g class="sit-figure">
                  <circle cx="42" cy="24" r="8.5"/>
                  <path d="M42 33v22"/>
                  <path d="M42 40l13 6M42 40l-13 6"/>
                  <path d="M42 55l-9 22M42 55l13 14"/>
                </g>
              </svg>
              <div class="s13 t-sec mt8">跟随动画起立 · 坐下</div>
            </div>` : `
            <div class="flex between mt16" style="align-items:baseline">
              <div class="s28 fb t mono">${testDistance()} <span class="s15 fm t-sec">m</span></div>
              <div class="s28 fb t mono">${mmss(remaining)}</div>
            </div>
            <div class="progress-bar mt12"><i style="width:${Math.round((S.testElapsed / total) * 100)}%"></i></div>`}
          <div class="grow"></div>
          <div class="s13 t-sec ta-c">${sit ? "当前坐立节奏" : "当前踏步频率"}</div>
          <div class="s28 fb t ta-c mono">${cadence} <span class="s15 fm t-sec">${sit ? "次/分钟" : "步/分钟"}</span></div>
          <div class="flex gap12 mt12">
            <button class="cta-line ${cadence <= p.min ? "off" : ""}" data-act="cadenceDown" type="button">${sit ? "放慢节奏" : "降低步频"}</button>
            <button class="cta-line ${cadence >= p.max ? "off" : ""}" data-act="cadenceUp" type="button">${sit ? "加快节奏" : "提高步频"}</button>
          </div>
          <button class="cta red mt16 hold-fill" data-hold="2000" data-act="finishTest" data-hold-hint="长按 2 秒停止测试" type="button"><i></i><span>长按 2 秒停止测试</span></button>
        </div>
      </div>`;
    },

    borg: () => {
      const high = S.borg > 7 || S.symptoms.some((x) => ["胸痛", "胸闷", "气促", "头晕", "心悸"].includes(x));
      return `
      <div class="page">
        ${navBar(`<button class="nav-text" data-act="later" type="button">稍后</button>`, "感受问卷")}
        <div class="scroll px24" style="padding-top:12px">
          ${borgSummaryIsland()}
          <div class="sec-label">整体用力程度</div>
          <div class="s38 fh t ta-c">${S.borg}</div>
          <input class="w100" type="range" min="1" max="10" value="${S.borg}" oninput="window.__borg(this.value)" />
          <div class="flex between s12 t-sec"><span>1 · 不费力</span><span>10 · 尽力</span></div>
          <div class="sec-label">测试中身体反应　<span class="fm">选填</span></div>
          ${["无不适", "胸痛", "胸闷", "气促", "头晕", "心悸", "其他"].map((s) =>
            `<button class="q-opt ${S.symptoms.includes(s) ? "on" : ""}" data-act="setSym" data-v="${s}" type="button">${s}</button>`).join("")}
          <div class="sec-label">测试中能否正常说话</div>
          ${["能正常说话", "只能说短句", "难以说话"].map((s) =>
            `<button class="q-opt ${S.talk === s ? "on" : ""}" data-act="setTalk" data-v="${s}" type="button">${s}</button>`).join("")}
          <div class="s14 ${high ? "t-amber" : "t-green"} mt8">${high ? "评估暂不合适，将不生成运动计划" : "评估合适，将为你生成运动计划"}</div>
          <button class="cta ${high ? "amber" : ""} mt12" data-act="borgOk" type="button">${high ? "完成评估" : "生成运动计划"}</button>
        </div>
      </div>`;
    },

    "confirm-exercise": () => {
      // 与确认计划同构：渲染真实草稿，编辑 / 删除即时可见（原先硬编码 4 项，改了看不到）
      if (!S.confirmDrafts) seedExerciseDrafts();
      const items = S.confirmDrafts.map((x, i) => ({ ...x, i, h: parseHour(x.time) }));
      const groups = groupByPeriod(items, (x) => x.h);
      return `
      <div class="page">
        ${navBar(`<button class="nav-text nav-hit" data-act="later" type="button">稍后</button>`, "确认计划",
          `<button class="nav-text blue nav-hit" data-act="confirmExercise" type="button">确认</button>`)}
        <div class="scroll px20" style="padding-top:12px">
          ${sectionHead(I.walk, "运动计划", items.length)}
          ${groups.map((g) => `
            <div class="confirm-period tight">
              ${periodHead(g, g.items.length)}
              <div class="col gap10">${g.items.map((x) => actionCard({ cat: "exercise", title: x.title, time: x.time, draft: true, cycle: true, idx: x.i })).join("")}</div>
            </div>`).join("")}
        </div>
        <div class="px20" style="padding-bottom:28px">
          <button class="cta h52" data-act="newExerciseDraft" type="button">${I.plus}自主新建计划</button>
        </div>
      </div>`;
    },

    "risk-result": () => `
      <div class="page px24 col center" style="padding-top:90px">
        <div style="width:104px;height:104px;border-radius:50%;background:rgba(242,153,74,.16);display:grid;place-items:center;color:#F2994A;font-size:42px">!</div>
        <h2 class="s22 fb t-amber mt16">建议人工评估</h2>
        <p class="s15 t-sec ta-c mt12">当前体测或劳累度量表未达标，建议暂缓创建运动计划。<br>如已在医生或家属看护下确认安全，也可继续创建。</p>
        <button class="cta amber mt16" data-act="later" type="button">完成评估</button>
        <button class="cta-line mt12" data-act="askForceContinueExercise" data-reason="scale" type="button">仍要继续创建</button>
      </div>`,

    vitals: () => {
      const wk = vitalsWeekData();
      const avg = vitalsWeekAvg();
      const sum = vitalsSummary();
      const badgeStyles = {
        green: "color:#15803d;background:rgba(34,197,94,.12)",
        amber: "color:#d97706;background:rgba(245,158,11,.14)",
        red: "color:#e11d48;background:rgba(240,90,110,.14)",
        blue: "color:#1054E0;background:rgba(16,84,224,.10)",
      };
      const bpColor = sum.bpStat === "触及告警" ? "#F05A6E" : "#1054E0";
      const bpBg = sum.bpStat === "触及告警" ? "rgba(240,90,110,.06)" : "rgba(16,84,224,.06)";
      return `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "血压监测", `<button class="cap" data-go="vitals-detail" type="button">${I.list}明细</button>`)}
        <div class="flex between px20 s17 fb t" style="padding:8px 20px 12px" id="vitals-swipe">
          <button class="cal-nav" data-act="vitalsPrev" type="button">${I.chevL}</button>
          <span>${vitalsWeekLabel()}</span>
          <button class="cal-nav ${S.vitalsOffset >= 0 ? "off" : ""}" data-act="vitalsNext" type="button">${I.chevR}</button>
        </div>
        <div class="scroll px20">
          <div class="island-card" style="padding:18px">
            <div class="flex between center"><div class="s19 fb t">整体AI评估</div><span class="cap" style="${badgeStyles[sum.tone] || badgeStyles.blue}">${sum.badge}</span></div>
            <p class="s16 t mt12" style="line-height:1.45">${sum.text}</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px">
              <div style="padding:12px;border-radius:13px;background:${bpBg}">
                <div class="s13 fb t-sec">平均血压</div>
                <div style="margin-top:6px;display:flex;align-items:baseline;gap:3px">
                  <span class="s20 fb mono" style="color:${bpColor}">${avg.sys}/${avg.dia}</span>
                  <span class="s12 fb" style="color:${bpColor};opacity:.7">mmHg</span>
                </div>
                <div class="s13 fb" style="margin-top:6px;color:${bpColor};opacity:.85">${sum.bpStat}</div>
              </div>
              <div style="padding:12px;border-radius:13px;background:rgba(240,90,110,.06)">
                <div class="s13 fb t-sec">平均心率</div>
                <div style="margin-top:6px;display:flex;align-items:baseline;gap:3px">
                  <span class="s20 fb mono" style="color:#F05A6E">${avg.hr}</span>
                  <span class="s12 fb" style="color:#F05A6E;opacity:.7">bpm</span>
                </div>
                <div class="s13 fb" style="margin-top:6px;color:#F05A6E;opacity:.85">${sum.hrStat}</div>
              </div>
            </div>
            <p class="s12 t-sec mt12">仅依据当前记录提供康复参考，不替代医生诊断</p>
          </div>
          <div class="island-card mt12" style="padding:18px">
            <div class="flex between" style="align-items:baseline">
              <div class="s20 fb t">${I.heartSq}平均血压</div>
              <div class="s15 fb t mono">${vitalsWeekAvg().sys}/${vitalsWeekAvg().dia} <span class="s11 t-sec">mmHg</span></div>
            </div>
            ${lineChart(
              [{ values: wk.map((d) => d.sys), color: "#1054E0" }, { values: wk.map((d) => d.dia), color: "#1EBED6" }],
              niceDomain(wk.flatMap((d) => [d.sys, d.dia]), 15, 40, 40),
              wk.map((d) => d.day))}
            <div class="flex gap16 s12 t-sec mt4"><span style="color:#1054E0">● 收缩压</span><span style="color:#1EBED6">● 舒张压</span></div>
          </div>
          <div class="island-card mt12" style="padding:18px">
            <div class="flex between" style="align-items:baseline">
              <div class="s20 fb t-heart">${I.ecg}平均心率</div>
              <div class="s15 fb t-heart mono">${vitalsWeekAvg().hr} <span class="s11 t-sec">bpm</span></div>
            </div>
            ${lineChart(
              [{ values: wk.map((d) => d.hr), color: "#F05A6E" }],
              niceDomain(wk.map((d) => d.hr), 10, 30, 30),
              wk.map((d) => d.day))}
          </div>
        </div>
        <div class="px20" style="padding-bottom:20px">
          ${consultCtaHTML()}
        </div>
      </div>`;
    },

    "vitals-detail": () => {
      const rows = S.vitalsLog || [
        { time: "07:12", sys: 126, dia: 78, hr: 72, hw: true },
        { time: "19:40", sys: 132, dia: 82, hr: 76, hw: true },
      ];
      const showHwTag = false;
      return `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "指标明细", `<button class="cap" data-act="shareVitals" type="button">分享${I.share}</button>`)}
        <div class="px20 s17 fb t" style="padding:8px 20px">‹　本周　›</div>
        <div class="scroll px20">
          <div class="s15 fb t mb8">今天</div>
          ${rows.map((r) => `
            <div class="plan-row mb8 flex between" style="align-items:center">
              <div class="grow">
                <div class="s15 fb t mono">${r.time}</div>
                <div class="s13 t-sec">血压 ${r.sys}/${r.dia} mmHg　心率 ${r.hr} bpm</div>
              </div>
              ${showHwTag && r.hw ? `<span style="font-size:12px;font-weight:700;color:#1054E0;background:rgba(16,84,224,.10);padding:4px 9px;border-radius:99px;flex-shrink:0">📡 哈宝血压计</span>` : ""}
            </div>`).join("")}
        </div>
      </div>`;
    },

    report: () => {
      const rep = activePersonStore().report;
      return `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "身体报告", `<button class="cap" data-go="analysis" type="button">${I.list}明细</button>`)}
        <div class="px20 grow col" style="padding-top:16px">
          <div class="island-card grow" style="padding:18px;display:flex;flex-direction:column">
            <div class="flex gap10 s19 fb t report-h">${I.doc}综合结论</div>
            <div class="scroll grow mt12 s21 fm t" style="line-height:1.45">${esc(rep.overall)}${S.consultReportOverall ? `<div class="mt12 s16 fb" style="color:#1054E0;background:rgba(16,84,224,.07);padding:10px 12px;border-radius:12px;line-height:1.45">【哈宝医生问诊补充结论】${S.consultReportOverall}</div>` : ""}</div>
          </div>
          <div class="island-card flex" style="margin:12px 0 4px;padding:8px;border-radius:18px">
            ${[
              ["基础报告", "openReport", "baseline"],
              ["复查报告", "openReport", "visit"],
              ["问卷随访", "go", "followup"],
            ].map(([t, actName, extra]) =>
              `<button class="grow ta-c" style="border:0;background:none;padding:12px 4px;cursor:pointer" ${actName === "go" ? `data-go="${extra}"` : `data-act="${actName}" data-kind="${extra}"`} type="button">
                <div class="report-tile">${I.doc}</div>
                <div class="s15 fsb t">${t}</div>
              </button>`).join("")}
          </div>
          ${consultCtaHTML("margin-bottom:20px")}
        </div>
      </div>`;
    },

    "report-sub": () => {
      const rep = activePersonStore().report;
      return `
      <div class="page">
        ${navBar(cap(I.chevL, "返回", "", S.reportReturnHome ? "reportBack" : "back"), S.reportKind === "visit" ? "复查报告" : "基础报告")}
        <div class="px20" style="padding-top:12px; flex:1; min-height:0; display:flex">
          <div class="island-card" style="flex:1; min-height:0; display:flex; flex-direction:column; padding:14px 18px">
            ${reportPaneTabs()}
            <div class="scroll" style="margin-top:14px">
              ${S.reportPane === "archive" ? reportArchivePane() : `
                <p class="s21 fm t">${esc(S.reportKind === "visit" ? rep.visit : rep.baseline)}</p>
                ${S.reportKind === "visit" && S.consultReportSub?.review ? `<div class="mt12 s16 fb" style="color:#1054E0;background:rgba(16,84,224,.07);padding:10px 12px;border-radius:12px;line-height:1.45">【哈宝医生跨期对照解读】${S.consultReportSub.review}</div>` : ""}
                ${S.reportKind === "baseline" && S.consultReportSub?.baseline ? `<div class="mt12 s16 fb" style="color:#1054E0;background:rgba(16,84,224,.07);padding:10px 12px;border-radius:12px;line-height:1.45">【哈宝医生基线报告解读】${S.consultReportSub.baseline}</div>` : ""}`}
            </div>
          </div>
        </div>
        <div class="px20 col gap10" style="padding-top:12px; padding-bottom:20px">
          <button class="cta" data-act="addArchive" type="button">${I.cam}新增报告资料</button>
          ${S.reportReturnHome ? `<button class="cta white" data-act="reportHome" type="button">${I.house}返回首页</button>` : ""}
        </div>
      </div>`;
    },

    followup: () => {
      const rep = activePersonStore().report;
      return `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "问卷随访")}
        <div class="scroll px20" style="padding-top:12px">
          <div class="island-card" style="padding:18px">
            <div class="s13 t-sec">上次填写时间</div>
            <div class="s18 fb t">${esc(rep.followupDate)}　${S.qDone ? "已完成" : "草稿"}</div>
            <div class="s14 t-sec mt8">已答 ${Object.keys(S.answers).length} / ${QUESTIONS.length} 题</div>
          </div>
          <div class="island-card mt12" style="padding:18px">
            <div class="s18 fb t">${esc(rep.followupPrevDate)}</div>
            <p class="s15 t-sec mt8">${esc(rep.followupPrevSummary)}</p>
            ${S.consultReportSub?.followUp ? `<div class="mt12 s15 fb" style="color:#1054E0;background:rgba(16,84,224,.07);padding:10px 12px;border-radius:12px;line-height:1.45">【哈宝医生随访身心复评】${S.consultReportSub.followUp}</div>` : ""}
          </div>
        </div>
        <div class="px20 col gap10" style="padding-bottom:28px">
          <button class="cta" data-go="questionnaire" type="button">继续填写问卷</button>
          <button class="cta-line" data-act="restartFollowup" type="button">重新开始随访</button>
        </div>
      </div>`;
    },

    questionnaire: () => {
      if (S.qDone) {
        return `
      <div class="page px24 col center" style="padding-top:90px">
        <div style="width:104px;height:104px;border-radius:50%;background:rgba(26,166,74,.14);display:grid;place-items:center;color:#1AA64A">${I.check}</div>
        <h2 class="s24 fb t mt16">已提交，感谢填写</h2>
        <p class="s15 t-sec ta-c mt12">可返回身体报告查看，或在「记录」中回顾</p>
        <button class="cta mt16" data-act="qFinish" type="button">返回身体报告</button>
      </div>`;
      }
      const q = QUESTIONS[S.qIndex];
      const ans = S.answers[q.id];
      const selected = Array.isArray(ans) ? ans : ans ? [ans] : [];
      // 必答门禁：未作答不能「下一步」；滚轮题有默认分，恒可过
      const answered = q.kind === "wheel" || selected.length > 0;
      return `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "随访问卷", `<button class="cap" data-act="openQGrid" type="button">${I.grid}题号</button>`)}
        <div class="px20 grow col" style="padding-top:8px" id="q-swipe">
          <div class="flex between s15 t"><span>第 ${S.qIndex + 1} / 共 51</span><span class="cap">${q.section}</span></div>
          <div class="progress-bar mt8"><i style="width:${((S.qIndex + 1) / 51) * 100}%"></i></div>
          ${q.group ? `<p class="s13 t-sec mt12">${q.group}</p>` : ""}
          <h2 class="s22 fb t mt12">${q.title}</h2>
          <div class="scroll grow mt12">
            ${q.kind === "wheel" ? `<div class="s38 fh t ta-c" id="q-wheel-val">${ans || 70} 分</div><input class="w100" type="range" min="0" max="100" value="${ans || 70}" oninput="window.__qnum(this.value)" />` :
              q.options.map((o) => `<button class="q-opt ${selected.includes(o) ? "on" : ""}" data-act="qPick" data-v="${o.replace(/"/g, "&quot;")}" type="button">${o}</button>`).join("")}
          </div>
          <div class="flex gap12" style="padding:12px 0 28px">
            <button class="cta-ghost" ${S.qIndex === 0 ? "disabled" : `data-act="qPrev"`} type="button">上一步</button>
            <button class="cta" ${answered ? `data-act="qNext"` : "disabled"} type="button">${S.qIndex === 50 ? "提交" : "下一步"}</button>
          </div>
        </div>
      </div>`;
    },

    // V10.50：答题进度（真机 FollowUpQuestionMatrixView）——按题库顺序把连续同章节切成一卡，
    // 6 列圆号，当前题实蓝 / 已答绿 / 未答淡蓝，点号跳题并关页；本页无统计行、无图例、不自动滚到当前题
    "q-progress": () => {
      const done = (q) => {
        const a = S.answers[q.id];
        return q.kind === "wheel" ? a != null : Array.isArray(a) ? a.length > 0 : a != null && a !== "";
      };
      const cards = [];
      QUESTIONS.forEach((q, i) => {
        const last = cards[cards.length - 1];
        if (last && last.section === q.section) last.items.push(i);
        else cards.push({ section: q.section, items: [i] });
      });
      return `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "答题进度")}
        <div class="scroll px20" style="padding-top:8px;padding-bottom:32px">
          ${cards.map((c) => `
            <div class="q-card">
              <div class="q-card-title">${c.section}</div>
              <div class="q-grid">
                ${c.items.map((i) => `<button class="q-cell ${i === S.qIndex ? "on" : ""} ${done(QUESTIONS[i]) ? "done" : ""}" data-act="qJump" data-i="${i}" type="button">${i + 1}</button>`).join("")}
              </div>
            </div>`).join("")}
        </div>
      </div>`;
    },

    analysis: () => {
      const rep = activePersonStore().report;
      return `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "明细分析", `<button class="cap" data-act="shareAnalysis" type="button">分享${I.share}</button>`)}
        <div class="scroll px20" style="padding-top:8px">
          ${[
            ["基础报告", rep.analysisBaseline, "去上传", "archiveFromAnalysis", "baseline"],
            ["复查报告", rep.analysisVisit, "去上传", "archiveFromAnalysis", "visit"],
            ["问卷随访", rep.analysisFollowup, "去填写", "go", "followup"],
          ].map(([t, d, b, actName, extra]) => `
            <div class="island-card mb16" style="padding:18px">
              <div class="flex between"><div class="flex gap8 s19 fb t"><div class="well" style="width:36px;height:36px">${I.doc}</div>${t}</div>
                <button class="cap" ${actName === "go" ? `data-go="${extra}"` : `data-act="${actName}" data-kind="${extra}"`} type="button">${b}</button></div>
              <p class="s16 t mt12">${esc(d)}</p>
            </div>`).join("")}
        </div>
      </div>`;
    },

    walk: () => {
      const isFam = shownRole() === "family";
      const recentWalk = activePersonStore().recentWalkText || "0.68 公里 · 12 分钟 · 920 步";
      if (isFam) {
        const exTasks = liveTasks().filter((t) => t.cat === "exercise");
        const pendingEx = exTasks.filter((t) => !S.completed[t.id]);
        const allExDone = exTasks.length > 0 && pendingEx.length === 0;
        const isReminded = !!(S.remindedWalkToday || exTasks.some((t) => S.remindedTasks && S.remindedTasks[t.id]));
        const nextTask = pendingEx[0];
        const doneTask = exTasks[0];
        const statusBadge = allExDone
          ? `<span style="font-size:12px;font-weight:700;color:#1AA64A;background:rgba(26,166,74,.12);padding:4px 9px;border-radius:999px;white-space:nowrap">✓ 今日已完成</span>`
          : pendingEx.length
            ? `<span style="font-size:12px;font-weight:700;color:var(--blue);background:rgba(16,84,224,.10);padding:4px 9px;border-radius:999px;white-space:nowrap">待运动 ${pendingEx.length} 项</span>`
            : "";
        const taskRowHTML = nextTask
          ? `<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:12px;background:rgba(16,84,224,.06);margin-top:10px">
               <div style="min-width:0;flex:1">
                 <div class="s14 fb" style="color:#1E293B;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">今日计划：${pad(nextTask.h)}:${pad(nextTask.m)} ${nextTask.title}</div>
                 <div class="s12 t-sec" style="margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">完成后可代为打卡，或点底部按钮提醒TA运动</div>
               </div>
               <button data-act="familyWalkProxyDone" data-id="${nextTask.id}" type="button" style="border:0;background:var(--blue);color:#fff;font-size:13px;font-weight:700;padding:7px 12px;border-radius:999px;cursor:pointer;white-space:nowrap;flex-shrink:0">✓ 代为打卡</button>
             </div>`
          : doneTask
            ? `<div style="display:flex;align-items:center;gap:6px;padding:8px 10px;border-radius:10px;background:rgba(26,166,74,.08);margin-top:10px;color:#1AA64A;font-size:13.5px;font-weight:700">✓ 今日「${doneTask.title}」已完成打卡</div>`
            : "";
        return `
        <div class="page" style="padding-top:0">
          <div class="welcome">
            <div class="titles"><h2>散散步，散散心</h2></div>
            <button class="circle-btn lg" data-act="goHome" type="button">${I.house}</button>
          </div>
          <div class="map walk-map" style="position:relative">
            ${mapArt({ route: true })}
            <div style="position:absolute;top:14px;left:14px;right:14px;padding:14px;border-radius:18px;background:rgba(255,255,255,.95);border:1px solid rgba(16,84,224,.12);box-shadow:0 6px 18px rgba(16,84,224,.12);z-index:5">
              <div style="display:flex;align-items:center;gap:8px">
                <span style="color:var(--blue);display:inline-flex">${I.walk}</span>
                <span class="s16 fb" style="color:var(--blue);white-space:nowrap">${S.name} · 今日运动</span>
                <span class="grow"></span>
                ${statusBadge}
              </div>
              ${taskRowHTML}
              <div class="s12 fsb t-sec" style="margin-top:9px;display:flex;align-items:center;gap:6px;white-space:nowrap">
                <span style="color:var(--blue)">●</span>最近散步：${esc(recentWalk)}
              </div>
            </div>
            <div class="walk-dock">
              <button class="walk-side" data-go="walk-records" type="button">${I.hist}<span>记录</span></button>
              <button class="walk-main" data-act="familyWalkRemind" type="button">${I.bell}${isReminded ? "再次提醒TA运动" : "提醒TA运动"}</button>
              <button class="walk-side" data-act="walkShare" type="button">${I.share}<span>分享</span></button>
            </div>
          </div>
        </div>`;
      }
      return `
      <div class="page" style="padding-top:0">
        <div class="welcome">
          <div class="titles"><h2>散散步，散散心</h2></div>
          <button class="circle-btn lg" data-act="goHome" type="button">${I.house}</button>
        </div>
        <div class="map walk-map">
          ${mapArt({ route: S.walking || S.walkSaved })}
          <div class="walk-dock">
            <button class="walk-side" data-go="walk-records" type="button">${I.hist}<span>记录</span></button>
            <button class="walk-main ${S.walking && !S.walkSaved ? "ghost" : ""}" data-act="${S.walkSaved ? "walkSave" : S.walking ? "walkResume" : "walkStart"}" type="button">${S.walkSaved ? "保存并打卡" : S.walking ? `${I.chevL}返回运动` : `${I.walk}开始运动`}</button>
            <button class="walk-side" data-act="walkShare" type="button">${I.share}<span>分享</span></button>
          </div>
        </div>
      </div>`;
    },

    "walk-session": () => walkSessionHTML(),

    "walk-records": () => {
      const f = S.walkFilter;
      const personWalkRecords = activePersonStore().walkRecords || WALK_RECORDS;
      const days = personWalkRecords
        .map((d) => ({
          ...d,
          items: d.items.filter((it) => !(S.walkDeleted || {})[it.key])
            .filter((it) => !f || (d.ymd >= f.from && d.ymd <= f.to)),
        }))
        .filter((d) => d.items.length);
      return `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "散步记录", `<button class="cap" data-act="openWalkFilter" type="button">筛选</button>`)}
        <div class="scroll px20" style="padding-top:14px;padding-bottom:28px">
          ${f ? `<div class="range-bar">${I.cal}${parseYMD(f.from).getMonth() + 1}月${parseYMD(f.from).getDate()}日 – ${parseYMD(f.to).getMonth() + 1}月${parseYMD(f.to).getDate()}日<button data-act="clearWalkFilter" type="button">${I.x}</button></div>` : ""}
          ${days.length ? days.map((d) => `
            <div class="walk-day">
              <div class="walk-day-h">
                <div class="s22 fb t">${d.label}</div>
                <div class="walk-km day"><b>${d.items.reduce((s, it) => s + Number(it.card[0]), 0).toFixed(2)}</b><small>km</small></div>
              </div>
              <div class="walk-fall">${d.items.map((it) => walkRecordCard(it.card)).join("")}</div>
            </div>`).join("")
            : `<div class="island-card ta-c" style="padding:40px 20px">
                 <div class="s16 fb t-sec">${f ? "这段时间还没有散步记录" : "还没有散步记录"}</div>
                 <div class="s13 t-sec mt8">${f ? "换个时间段看看" : "出门走一段，这里会留下路径"}</div>
               </div>`}
        </div>
      </div>`;
    },

    // 纯粹的对话问诊页：空态只有 Logo 问候，下方一条输入框（点按打字，长按把语音流进框里）和一枚加号（拍照 / 相册 / AI电话）。
    consult: () => {
      ensureCareGraph();
      ensureSeededCareNotices();
      const canSend = consultCanSend();
      const inText = S.inputMode === "text";
      const curPerson = S.currentPersonName || "李建国";
      if (!S.unreadConsultByPerson) S.unreadConsultByPerson = {};
      S.unreadConsultByPerson[curPerson] = false;
      const visibleMessages = S.messages.filter(
        (m) => !m.isCareBubble && m.who !== "notice"
      );
      const plusItem = (act, icon, label) =>
        `<button class="plus-item" type="button" data-act="${act}"><span>${icon}</span>${label}</button>`;
      return `
      <div class="page rel${S.consultKeyboard ? " consult-kb" : ""}${S.plusPanel ? " consult-panel" : ""}">
        ${navBar(cap(I.chevL, "返回"), `<span class="flex center gap6"><img src="${A.logo}" width="24" height="24" alt="" />哈宝医生</span>`)}
        <div class="scroll px20 grow">
          ${!visibleMessages.length ? `
            <div class="island-card ta-c" style="padding:16px;margin-top:12px;margin-bottom:10px">
              <img src="${A.logo}" width="64" height="64" alt="" />
              <h2 class="s21 fb t mt8">你好，这里是哈宝医生</h2>
              <p class="s16 t-sec">有不适或用药疑问，都可以问我</p>
            </div>
          ` : ""}
          ${visibleMessages.map((m) => (m.who === "vip" ? `
            <div class="chat-msg-row ai">
              <div class="chat-avatar ai" aria-label="哈宝医生头像"><img src="${A.logo}" alt="哈宝医生" /></div>
              ${genHasVip() ? `<div class="bubble ai">${CONSULT_VIP_GREETING}</div>` : consultVipCardHTML()}
            </div>
          ` : m.who === "user" ? `
            <div class="chat-msg-row user">
              <div class="bubble user">${m.t}</div>
              <div class="chat-avatar user" aria-label="我的头像">${I.person}</div>
            </div>
          ` : `
            <div class="chat-msg-row ai">
              <div class="chat-avatar ai" aria-label="哈宝医生头像"><img src="${A.logo}" alt="哈宝医生" /></div>
              <div class="bubble ai">${m.t}</div>
            </div>
          `)).join("")}
        </div>
        ${S.pendingImage ? `<div class="consult-pending">已选 1 张图片，补充一句再发送</div>` : ""}
        <div class="listen-hint" id="listen-hint" hidden></div>
        <div class="chat-row">
          <button class="chat-mode" data-act="toggleInput" type="button" aria-label="${inText ? "切换为长按说话" : "切换为文字输入"}">${inText ? I.mic : I.kbd}</button>
          ${inText ? `
          <div class="chat-well">
            <input class="chat-text" id="chat-draft" placeholder="输入问题" value="${S.chatDraft.replace(/"/g, "&quot;")}" />
            <button class="chat-send" id="consult-send" type="button" data-act="sendChat"${canSend ? "" : " hidden"}>发送</button>
          </div>` : `
          <button class="chat-hold" id="chat-hold" type="button">${I.mic}<span>长按说话</span></button>`}
          <button class="chat-plus" data-act="togglePlus" type="button" aria-label="${S.plusPanel ? "关闭功能" : "更多功能"}">${S.plusPanel ? I.x : I.plus}</button>
        </div>
        <div class="dock-slot">
          <div class="fake-kb dock-face" aria-hidden="true">
            ${[10, 9, 7].map((n) => `<div class="kb-row">${"<i></i>".repeat(n)}</div>`).join("")}
            <div class="kb-row"><i class="wide"></i></div>
          </div>
          <div class="plus-panel dock-face">
            ${plusItem("consultCamera", I.camLine, "拍照")}
            ${plusItem("consultAlbum", I.folder, "相册")}
          </div>
        </div>
      </div>`;
    },

    // 历史记录：按日期归档、只读、不可删（真机 ConsultHistoryView）。V10.56 起不预置样例对话——
    // 只有本人问过的才出现在「今天」，没问过给空态。
    "consult-history": () => {
      if (genIsConsultV2()) return rxHistoryHTML();
      ensureCareGraph();
      ensureSeededCareNotices();
      const curPerson = S.currentPersonName || "李建国";
      const histMessages = S.messages.filter(
        (m) => !m.isCareBubble && m.who !== "notice"
      );
      return `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "历史记录")}
        ${histMessages.length ? `
        <div class="scroll px20" style="padding-top:8px">
          <div class="s18 fb t mb8">今天</div>
          ${histMessages.map((m) => `<div class="bubble ${m.who === "vip" ? "ai" : m.who}">${m.who === "vip" && genHasVip() ? CONSULT_VIP_GREETING : m.t}</div>`).join("")}
        </div>` : `
        <div class="grow col center" style="padding:0 28px">
          <div class="hist-empty-ico">${I.clock}</div>
          <div class="s21 fb t mt16">还没有历史记录</div>
          <p class="s16 t-sec ta-c mt8">问过的话会按日期自动出现在这里，一直保留</p>
        </div>`}
      </div>`;
    },

    stamps: () => {
      const todayYMD = toYMD(demoDate());
      const sel = S.stampSelYMD || todayYMD;
      const isToday = sel === todayYMD;
      const selDate = parseYMD(sel);
      // 今日取真实打卡态；过去日按 Demo 采样（与日历格同源），只读
      const doneSet = stampDoneSet(sel);
      const doneN = doneSet.size;
      const dayTasks = liveTasks(sel);
      const dayN = Math.max(1, dayTasks.length);
      const pct = Math.round((doneN / dayN) * 100);
      const empty = doneSet.size === 0;
      // 本月汇总：整月从入组首日累加到今天（与选中哪天无关，真机 emptyMonthStrip 同口径）
      let mDone = 0; let mTotal = 0;
      for (let d = 1; d <= parseYMD(todayYMD).getDate(); d++) {
        const ymd = `2026-09-${String(d).padStart(2, "0")}`;
        if (ymd < STAMP_FIRST_YMD) continue;
        mDone += stampDoneSet(ymd).size;
        mTotal += liveTasks(ymd).length;
      }
      const byP = PERIODS.map((p) => ({
        ...p,
        items: dayTasks.filter((t) => (t.h >= p.from && t.h < p.to) || (p.title === "夜间" && (t.h >= 21 || t.h < 6))),
      }));
      return `
      <div class="page" style="padding-top:0">
        <div class="welcome stamps-bar">
          <div class="titles stamps-title">
            <h2>${isToday ? "今日集章进度" : `${selDate.getMonth() + 1}月${selDate.getDate()}日集章进度`}</h2>
            <div class="stamp-ring ${doneN === dayTasks.length && dayTasks.length ? "done" : ""}">
              <svg viewBox="0 0 36 36">
                <circle class="bg" cx="18" cy="18" r="15"/>
                <circle class="fg" cx="18" cy="18" r="15" style="stroke-dasharray:94.2;stroke-dashoffset:${(94.2 * (1 - pct / 100)).toFixed(1)}"/>
              </svg>
              <span>${pct}%</span>
            </div>
          </div>
          <button class="circle-btn lg" data-act="openCal" type="button">${I.cal}</button>
        </div>
        <div class="scroll px24 grow" style="padding-top:16px">
          ${rxStampSectionHTML(sel)}
          ${empty ? `<div class="stamp-empty">
            <div class="empty-hero"><img src="${A.stamp.bloom}" width="104" alt="" /></div>
            <div class="s18 fb t mt8">${isToday ? "今天还没有计划" : "这一天还没有计划"}</div>
            <div class="stamp-grid ghost-grid mt16">${Object.keys(CAT).map((c) => `<div class="stamp ghost"><img src="${A.stamp[c]}" alt="" /></div>`).join("")}</div>
            ${mTotal ? `<div class="month-strip">本月已集 <b>${mDone}</b>/${mTotal} · ${Math.round((mDone / mTotal) * 100)}%</div>` : ""}
          </div>` : ""}
          ${empty ? "" : byP.filter((p) => p.items.length).map((p) => {
            const d = p.items.filter((t) => doneSet.has(t.id)).length;
            const allP = d === p.items.length;
            return `<div class="stamp-sec-card">
              <div class="stamp-sec-head">
                <div class="stamp-period">${I[p.icon] || ""}</div>
                <div class="s17 fb t grow">${p.title}</div>
                <span class="stamp-sec-pill${allP ? " done" : ""}">${allP ? "✓ " : ""}已集 ${d}/${p.items.length}</span>
              </div>
              <div class="stamp-grid">${p.items.map((t) => `
                <div><div class="stamp ${doneSet.has(t.id) ? "" : "ghost"}"><img src="${A.stamp[t.cat]}" alt="" /></div><div class="stamp-cap">${t.title}</div></div>`).join("")}</div>
            </div>`;
          }).join("")}
          ${doneN === dayTasks.length && dayTasks.length ? `<div class="bloom-badge">
            <img src="${A.stamp.bloom}" width="42" height="42" alt="" />
            <div><div class="s17 fb t-green">${isToday ? "今日全达标" : "当日全达标"}</div><div class="s13 t-sec">每一枚章都已收下</div></div>
          </div>` : ""}
        </div>
        <div class="dock-pair" style="padding-bottom:28px">
          <button class="dock-cap ghost" data-act="goHome" type="button">${I.chevL}返回</button>
          <button class="dock-cap primary" data-act="shareStamp" type="button">一键分享 ${I.share}</button>
        </div>
      </div>`;
    },

    activity: () => {
      const all = opVisibleOps();
      const todayYMD = toYMD(new Date());
      const q = (S.opQuery || "").trim();
      const sel = S.opDay || (all.length ? toYMD(new Date(all[0].at)) : todayYMD);
      const dayTitle = opDayTitle(sel, todayYMD);
      const dayOps = all.filter((op) => toYMD(new Date(op.at)) === sel).sort((a, b) => b.at - a.at);
      const earliestYMD = all.length ? toYMD(new Date(all[all.length - 1].at)) : todayYMD;
      const inner = !all.length
        ? `<div class="op-empty" style="font-size:calc(16px * var(--fs))">还没有操作记录</div>`
        : q
          ? opSearchBody(q)
          : dayOps.length
            ? dayOps.map((op) => opBlockHTML(op, false)).join("")
              + (sel === earliestYMD && S.opDropped ? `<div class="op-foot-note">更早的记录不再保留（最多 300 条）</div>` : "")
            : `<div class="op-empty">这一天没有操作记录</div>`;
      const calBtn = all.length ? cap(I.cal, dayTitle, "", "openOpCal") : "";
      const searchRow = all.length ? `
        <div class="op-search-row px20" style="margin-top:6px">
          <div class="op-search">${I.search}<input id="op-search" placeholder="搜记录内容" value="${escAttr(S.opQuery || "")}" /></div>
        </div>` : "";
      return `<div class="page">
        ${navBar(cap(I.chevL, "返回"), "操作记录", calBtn)}
        ${searchRow}
        <div class="scroll px20" style="padding-top:6px"><div id="op-body"><div id="op-results">${inner}</div></div></div>
      </div>`;
    },

    vip: () => {
      const isFam = shownRole() === "family";
      const on = isFam ? true : !!S.vip;
      const benefitSections = [
        {
          ico: I.steth,
          title: "哈宝医生",
          tag: "真人专家 + AI 协同",
          subtitle: "采用真人医生团队与 AI 智能结合的服务方式，全天候守护您的院外康复",
          subs: [
            ["真人医生服务", "心内科主诊与多学科团队 · 个性化康复随访管理", "由心内科主诊医生团队联合哈瑞特医疗院外康复管理团队（专科医生、康复治疗师、健康管理师、营养师等多学科成员）共同参与患者管理，将疾病康复从院内延伸至院外；结合住院数据设定动态化危险因素管控目标（如低密度脂蛋白等），全程开展个性化康复随访、动态临床评估、主动症状管理、精准药物管理与生活方式干预。"],
            ["AI 智能服务", "全年不限次在线问诊 · 康复计划制定与推送", "提供全年不限次数的在线问诊咨询，支持文字、图文、语音及 AI 电话咨询（400-1666199），覆盖检查报告解读、用药咨询、病情咨询、饮食与心理指导；并结合病历资料、体测评估与日常监测数据，为您智能制定、调整并按时推送每日康复计划。"],
          ],
        },
        {
          ico: I.shieldCheck,
          title: "支架保险理赔服务",
          tag: "中国人民保险承保",
          subtitle: "术后再狭窄介入自费报销与住院津贴双重保障",
          subs: [
            ["专属理赔保障", "最高 2万元/次 再梗补助 · 100元/天 住院津贴", "管理期间，若发生支架内（不含老支架）再狭窄需要介入治疗的，自费部分由中国人民保险予以报销，全年不限次数，单次最高可获得2万元再梗补助。住院期间，还可获得100元/天的住院津贴。（注：仅限购买哈瑞特医疗院外管理2400元/年服务包的支架术后客户，详见理赔须知）"],
          ],
        },
        {
          ico: I.two,
          title: "家属管理",
          tag: "最多绑定 5 名家属",
          subtitle: "医生、患者、家属三方共管，多端实时同步照护",
          subs: [
            ["多端协同照护", "病情实时同步 · 代为打卡与到点提醒", "支持绑定最多5名家属参与管理，实时多端同步患者病情，支持代为打卡照护与到点提醒家属，医生、患者、家属三方共管，患者安心，家属放心。"],
          ],
        },
        {
          ico: I.waves,
          title: "硬件管理",
          tag: "智能血压计 + 手表",
          subtitle: "居家测量自动上传，异常指标智能预警与干预",
          subs: [
            ["远程实时监测", "数据趋势追踪 · 异常指标智能预警", "配备并绑定可穿戴智能监测设备（血压计和手表），患者居家测量后实时上传管理中心，医生和家属均可远程实时监测数据（血压和心率），记录数据变化趋势，智能预警，及时干预异常指标，降低不良事件发生率。"],
          ],
        },
        {
          ico: I.clock,
          title: "操作记录",
          tag: "全流程照护留痕",
          subtitle: "患者与家属每一次操作清晰可查，随时核对",
          subs: [
            ["照护操作留痕", "健康计划、监测、报告与问诊全程记录", "全程记录患者与家属在健康计划、血压监测、身体报告及问诊中的每一次操作，谁在什么时候做了什么一目了然，方便家属与医生随时核对。"],
          ],
        },
      ];
      return `<div class="page">
        ${navBar(cap(I.chevL, "返回"), "VIP 会员")}
        <div class="scroll px20" style="padding-top:8px;padding-bottom:16px">
          <div class="hero">
            <div class="hero-top">
              <div class="hero-crown-circle">${I.crown}</div>
              <div>
                <div class="s18 fb">哈宝 VIP</div>
                <div class="s13" style="opacity:.85">哈宝医生、支架保险理赔、家属共管、智能硬件及操作记录</div>
              </div>
            </div>
            <div class="frost"></div>
            <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px;flex-wrap:wrap">
              <div class="s22 fb">¥2400 <span class="s16" style="font-weight:600;opacity:.85">/ 年</span></div>
              ${on ? `<span class="s13 fb" style="padding:4px 10px;border-radius:999px;background:rgba(255,255,255,.18);color:rgba(255,255,255,.95)">已开通 · 有效期至 ${vipExpiryText()}</span>` : ""}
            </div>
          </div>

          ${benefitSections.map((sec) => `
            <div class="vip-special-card mt16">
              <div class="vip-special-head">
                <div class="vip-special-icon">${sec.ico}</div>
                <div class="grow">
                  <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                    <h4 class="s19 fb" style="color:var(--blue);margin:0">${sec.title}</h4>
                    <span class="vip-badge-pill">${sec.tag}</span>
                  </div>
                  <p class="s13 fm t-sec" style="margin:3px 0 0">${sec.subtitle}</p>
                </div>
              </div>
              ${sec.subs.map(([badge, subTitle, detail], idx) => `
                <div class="vip-sub-block ${idx === 0 ? "mt12" : "mt10"}">
                  <div><span class="vip-sub-tag">${badge}</span></div>
                  <div class="s15 fb" style="color:var(--blue);margin-top:6px;line-height:1.4">${subTitle}</div>
                  <p class="s14 fm t-sec" style="margin:6px 0 0;line-height:1.55">${detail}</p>
                </div>
              `).join("")}
            </div>
          `).join("")}

          <p class="s14 fm t-sec mt16 ta-c">本机演示开通，不会真实扣款。</p>
        </div>
        <div class="px20" style="padding-top:10px;padding-bottom:28px">
          ${on
            ? `<button class="cta-ghost" data-act="askCancelVip" type="button">取消订阅</button>`
            : `<button class="cta" data-act="askVip" type="button">立即开通</button>`}
        </div>
      </div>`;
    },

    profile: () => {
      ensureCareGraph();
      syncPersonVipState(S.currentPersonName);
      const isVip = genHasVip();
      const curPerson = currentDemoPerson();
      const myGuardians = myGuardiansList(curPerson.name);
      const myWards = myWardsList(curPerson.name);
      const curBmi = ((curPerson.weight || 70) / Math.pow((curPerson.height || 170) / 100, 2)).toFixed(1);
      const otherUnread = (S.demoPeople || [])
        .filter((p) => p.name !== curPerson.name)
        .reduce((sum, p) => sum + pendingFamilyEventCountFor(p.name), 0);
      const guardianRowsHTML = myGuardians.length ? myGuardians.map((b) => {
        const needsMyConfirm = !b.confirmed && b.initiatedBy === "guardian";
        const badgeText = b.confirmed ? "" : (needsMyConfirm ? "待我确认" : "待对方确认");
        const badgeBg = needsMyConfirm ? "rgba(255,220,110,.28)" : "rgba(251,146,60,.32)";
        const badgeColor = needsMyConfirm ? "#FFDC6E" : "#FED7AA";
        return `
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:6px 10px;border-radius:10px;background:rgba(255,255,255,.08);margin-top:5px">
            <div style="display:flex;align-items:center;gap:6px;min-width:0;flex:1">
              <span style="font-size:14.5px;font-weight:700;color:#fff">${esc(b.guardianName)}</span>
              <span style="font-size:11px;font-weight:600;color:rgba(255,255,255,.92);background:rgba(255,255,255,.18);padding:1.5px 6px;border-radius:999px">${esc(b.relation)}</span>
              ${badgeText ? `<span style="font-size:10.5px;font-weight:700;color:${badgeColor};background:${badgeBg};padding:1.5px 6px;border-radius:999px">${badgeText}</span>` : ""}
            </div>
            <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
              ${needsMyConfirm ? `
                <button type="button" data-act="acceptCareBond" data-id="${b.id}" style="border:0;background:#fff;color:var(--blue);font-size:11.5px;font-weight:700;padding:4px 9px;border-radius:999px;cursor:pointer;font-family:inherit">同意</button>
                <button type="button" data-act="rejectCareBond" data-id="${b.id}" style="border:0;background:rgba(255,255,255,.18);color:#fff;font-size:11.5px;font-weight:700;padding:4px 9px;border-radius:999px;cursor:pointer;font-family:inherit">不同意</button>
              ` : `
                <button type="button" data-act="askRemoveCareBond" data-id="${b.id}" style="border:0;background:rgba(255,255,255,.15);color:rgba(255,255,255,.88);font-size:11px;font-weight:600;padding:4px 8px;border-radius:999px;cursor:pointer;font-family:inherit">解除</button>
              `}
            </div>
          </div>`;
      }).join("") : "";
      const wardRowsHTML = myWards.length ? myWards.map((b) => {
        const needsMyConfirm = !b.confirmed && b.initiatedBy === "ward";
        const badgeText = !b.confirmed ? (needsMyConfirm ? "待我确认" : "待对方确认") : "";
        const badgeBg = needsMyConfirm ? "rgba(255,220,110,.28)" : "rgba(251,146,60,.32)";
        const badgeColor = needsMyConfirm ? "#FFDC6E" : "#FED7AA";
        return `
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:6px 10px;border-radius:10px;background:rgba(255,255,255,.08);margin-top:5px">
            <div style="display:flex;align-items:center;gap:6px;min-width:0;flex:1">
              <span style="font-size:14.5px;font-weight:700;color:#fff">${esc(b.wardName)}</span>
              <span style="font-size:11px;font-weight:600;color:rgba(255,255,255,.92);background:rgba(255,255,255,.18);padding:1.5px 6px;border-radius:999px">${esc(b.relation)}</span>
              ${badgeText ? `<span style="font-size:10.5px;font-weight:700;color:${badgeColor};background:${badgeBg};padding:1.5px 6px;border-radius:999px">${badgeText}</span>` : ""}
            </div>
            <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
              ${needsMyConfirm ? `
                <button type="button" data-act="acceptCareBond" data-id="${b.id}" style="border:0;background:#fff;color:var(--blue);font-size:11.5px;font-weight:700;padding:4px 9px;border-radius:999px;cursor:pointer;font-family:inherit">同意</button>
                <button type="button" data-act="rejectCareBond" data-id="${b.id}" style="border:0;background:rgba(255,255,255,.18);color:#fff;font-size:11.5px;font-weight:700;padding:4px 9px;border-radius:999px;cursor:pointer;font-family:inherit">不同意</button>
              ` : `
                <button type="button" data-act="askRemoveCareBond" data-id="${b.id}" style="border:0;background:rgba(255,255,255,.15);color:rgba(255,255,255,.88);font-size:11px;font-weight:600;padding:4px 8px;border-radius:999px;cursor:pointer;font-family:inherit">解除</button>
              `}
            </div>
          </div>`;
      }).join("") : "";
      const embeddedCareSectionHTML = "";
      const vipTitle = isVip ? "VIP 专属全维守护中" : "开通 VIP 享全维守护";
      const vipSub = isVip ? `有效期至 ${vipExpiryText()}` : "¥2400 / 年 · 全家同享";
      const vipBtn = isVip ? "已购买 ›" : "购买 ›";
      return `<div class="page">
        ${navBar(cap(I.chevL, "返回"), "个人中心",
          `<button class="cap" data-act="openDemoPersonSheet" type="button" title="切换测试身份（当前使用App的主角）">测试身份：${esc(curPerson.name)} ▾${otherUnread > 0 ? `<span style="margin-left:3px;padding:0 5px;border-radius:999px;background:#EF4444;color:#fff;font-size:10px;font-weight:800">${otherUnread}</span>` : ""}</button>`)}
        <div class="scroll px20" style="padding-top:8px">
          <div class="hero">
            <div class="pointer" data-go="health-record" role="button" style="cursor:pointer">
              <div class="hero-top">
                <div class="avatar">${esc(curPerson.name.slice(0, 1))}</div>
                <div style="min-width:0">
                  <div style="display:flex;align-items:center;gap:6px;white-space:nowrap">
                    <span class="s18 fb">${esc(curPerson.name)}</span>
                    ${isVip
                      ? `<span class="vip-badge-pill" style="color:#FFDC6E;background:rgba(255,255,255,.24)">${I.crown} VIP</span>`
                      : (genIsV01() ? `<span class="vip-badge-pill" style="color:rgba(255,255,255,.95);background:rgba(255,255,255,.22)">免费用户</span>` : "")}
                  </div>
                  <div style="display:flex;align-items:center;gap:6px;margin-top:5px;white-space:nowrap">
                    <span style="font-size:12px;font-weight:600;color:rgba(255,255,255,.92);background:rgba(255,255,255,.18);padding:2.5px 8px;border-radius:999px">${esc(curPerson.gender)}</span>
                    <span style="font-size:12px;font-weight:600;color:rgba(255,255,255,.92);background:rgba(255,255,255,.18);padding:2.5px 8px;border-radius:999px">我</span>
                  </div>
                </div>
                <button class="view-cap" data-go="health-record" type="button">点击查看</button>
              </div>
              <div class="frost"></div>
              <div class="metrics">
                <div><span>年龄</span><b>${curPerson.age || 58}</b></div>
                <div><span>身高</span><b>${curPerson.height || 170}</b></div>
                <div><span>体重</span><b>${curPerson.weight || 70}</b></div>
                <div><span>BMI</span><b>${curBmi}</b></div>
              </div>
            </div>
            ${embeddedCareSectionHTML}
            <div class="frost" style="margin-top:12px;margin-bottom:12px"></div>
            <div class="hero-vip-row" data-go="vip" role="button" style="cursor:pointer">
              <div class="hero-crown-circle">${I.crown}</div>
              <div style="min-width:0;flex:1">
                <div class="s18 fb" style="color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${vipTitle}</div>
                <div class="s14 fsb" style="color:${isVip ? "rgba(255,255,255,.88)" : "#FFE282"};margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${vipSub}</div>
              </div>
              <button class="view-cap ${isVip ? "vip-bought" : ""}" data-go="vip" type="button">${vipBtn}</button>
            </div>
            ${isVip ? `
            <div class="hero-capsules-grid">
              ${[
                [I.steth, "哈宝医生"],
                [I.shieldCheck, "支架保险"],
                [I.two, "家属共管"],
                [I.waves, "智能硬件"],
                [I.clock, "照护记录"],
              ].map(([ico, txt]) => `
                <button class="hero-benefit-capsule active" data-go="vip" type="button">
                  ${ico}<span>${txt}</span>
                </button>
              `).join("")}
            </div>` : ""}
          </div>
          <div class="list-island mt16">
            ${[
              ["family", I.two, "家属管理", familyManageCaptionFor(curPerson.name)],
              ["hardware", I.waves, "硬件管理", hwCaption()],
              ["activity", I.clock, "操作记录", (S.ops && S.ops[0]) ? opHeadlineHTML(S.ops[0]) : "还没有记录"],
            ].map(([id, ico, t, s]) => vipFeatureRowHTML(id, ico, t, s)).join("")}
            <button class="list-row base-feature-row" data-go="notify" type="button">
              <div class="well neutral-well">${I.bell}</div>
              <div class="grow"><h4 class="neutral-title">打卡通知</h4><p>${notifyCaption()}</p></div>
              <span class="neutral-chev">${I.chevR}</span>
            </button>
            <button class="list-row base-feature-row" data-go="privacy" type="button">
              <div class="well neutral-well">${I.shieldCheck}</div>
              <div class="grow"><h4 class="neutral-title">隐私协议</h4><p>了解数据如何被保护</p></div>
              <span class="neutral-chev">${I.chevR}</span>
            </button>
            <button class="list-row base-feature-row" data-go="service-terms" type="button">
              <div class="well neutral-well">${I.doc}</div>
              <div class="grow"><h4 class="neutral-title">服务协议</h4><p>使用条款与说明</p></div>
              <span class="neutral-chev">${I.chevR}</span>
            </button>
          </div>
          <button class="cta-ghost mt16" data-act="logout" type="button">退出登录</button>
          <button class="w100" style="border:0;background:none;color:#828EA5;padding:12px;font-size:16px;cursor:pointer" data-act="unregister" type="button">注销账号</button>
        </div>
      </div>`;
    },

    privacy: () => `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "隐私协议")}
        <div class="scroll px20" style="padding-top:12px;padding-bottom:32px;display:flex;flex-direction:column;gap:16px">
          <div style="padding:18px;border-radius:20px;background:rgba(16,84,224,.07)">
            <div style="display:flex;align-items:center;gap:8px;color:var(--blue);font-size:20px;font-weight:800">
              ${I.shieldCheck}<span>哈宝隐私保护政策</span>
            </div>
            <div style="font-size:13px;font-weight:600;color:var(--sec);margin-top:6px">生效日期：2026年10月29日 · 适用端：iOS / Android 通用</div>
            <div style="font-size:15px;font-weight:500;color:#1E293B;line-height:1.55;margin-top:8px">哈宝深知个人健康与医疗信息对您的重要性。我们严格遵循《个人信息保护法》及 iOS App Store、Android 各大应用商店隐私合规标准，采用「最小必要、本地优先、全程加密、按需授权」原则保护您的个人信息。</div>
          </div>
          ${[
            ["一、收集与使用", "我们如何收集和使用您的信息", "1. 账号注册与身份识别：当您注册或登录哈宝时，我们需要收集您的手机号码及短信验证码，用于创建账号、识别患者本人或守护家属身份。<br>2. 康复档案与日常监测：为向您提供个性化的康复计划、血压心率趋势分析与身体报告管理，您可自主填写姓名、性别、出生日期、身高、体重，以及录入血压、心率、散步记录和随访问卷。<br>3. 病历与报告识别（OCR）：当您使用「拍照上传病历/复查报告」功能时，我们会根据您的主动上传，解析出院诊断、用药医嘱与复查时间，帮您一键生成提醒计划。"],
            ["二、设备权限（iOS & Android 通用）", "系统权限调用遵循「用时方申请」原则", "在您同意本隐私政策时，我们不会提前索取任何系统敏感权限；仅在您实际触发对应功能时，才会向系统发起动态权限申请，且拒绝授权不影响其他功能正常使用：<br>• 相机与相册权限：仅在您拍摄或从相册导入出院记录、检查化验单及在哈宝医生发送图片时调用。<br>• 位置信息与运动权限：仅在您开启「户外散步」记录运动距离、步数与轨迹路线时调用。<br>• 麦克风与语音识别权限：仅在您于「哈宝医生」按住说话语音提问时调用。<br>• 蓝牙与本地网络权限：仅在您扫码绑定或同步哈宝智能血压计、智能手表读数时调用。<br>• 通知推送权限：用于向您及已绑定的守护人/被守护人发送服药、测血压、复查与打卡提醒。"],
            ["三、存储、加密与家属共享", "数据安全保护与家庭协同规则", "1. 全程加密与脱敏：您的手机号在界面默认脱敏显示（如 138****5678），通信传输全程采用 TLS 加密，核心健康档案在云端加密存储。<br>2. 家属共管授权：仅在您与家人双向确认建立「守护人 / 被守护人」绑定关系后，授权对方查看您的康复计划、血压监测与身体报告进展；您可随时在「个人中心」一键解除守护关系，解除后立即停止数据共享。<br>3. 分享脱敏保护：您生成的今日集章海报、血压周报或散步海报均自动隐藏操作人敏感身份及具体医疗隐私细节，方便安心转发。"],
            ["四、您的权利", "查询、更正、撤回同意与注销账号", "1. 查阅与更正：您可随时在「个人中心 → 健康档案」查阅、修改您的个人资料与病历照片。<br>2. 撤回权限授权：您可随时在手机系统「设置 → 隐私/应用权限管理」中关闭相机、定位、麦克风、蓝牙或通知权限。<br>3. 注销账号：您可通过「个人中心 → 注销账号」申请永久注销。注销后，我们将立即清空或不可逆匿名化您的个人档案、入组记录、康复计划、操作记录及硬件绑定信息。"],
          ].map(([badge, title, body]) => `
            <div class="island-card" style="padding:18px;border-radius:20px">
              <span style="display:inline-block;padding:4px 10px;border-radius:999px;background:rgba(16,84,224,.10);color:var(--blue);font-size:12.5px;font-weight:700">${badge}</span>
              <div style="font-size:18px;font-weight:800;color:#1E293B;margin-top:10px">${title}</div>
              <div style="font-size:15px;color:#334155;line-height:1.62;margin-top:8px">${body}</div>
            </div>
          `).join("")}
        </div>
      </div>`,

    "service-terms": () => `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "服务协议")}
        <div class="scroll px20" style="padding-top:12px;padding-bottom:32px;display:flex;flex-direction:column;gap:16px">
          <div style="padding:18px;border-radius:20px;background:rgba(16,84,224,.07)">
            <div style="display:flex;align-items:center;gap:8px;color:var(--blue);font-size:20px;font-weight:800">
              ${I.doc}<span>哈宝用户服务协议</span>
            </div>
            <div style="font-size:13px;font-weight:600;color:var(--sec);margin-top:6px">生效日期：2026年10月29日 · 适用端：iOS / Android 通用</div>
            <div style="font-size:15px;font-weight:500;color:#1E293B;line-height:1.55;margin-top:8px">欢迎您使用哈宝院外心肺康复管理软件及相关服务。本协议由您与哈瑞特医疗（哈宝团队）共同缔结，适用于 iOS 与 Android 客户端。请在使用前仔细阅读以下条款，特别是健康安全免责声明与账号管理规则。</div>
          </div>
          ${[
            ["一、服务内容", "哈宝院外康复管理服务范围", "哈宝为心血管及慢病康复人群提供院外日程提醒（服药、测血压、运动、饮食、作息、复查）、体征记录、病历归档、集章鼓励以及 VIP 专属服务（哈宝医生在线咨询、家属多端共管、智能硬件互联、操作记录留痕与支架保险理赔协助）。"],
            ["二、医疗安全提示", "非急诊诊疗声明与紧急呼救准则", "1. 辅助康复属性：哈宝及「哈宝医生」提供的健康建议、报告解读与康复计划旨在协助您执行出院医嘱与日常健康管理，不能替代医院急诊或线下面诊处置。<br>2. 危急症状立即呼救：若您或被守护患者出现剧烈胸痛、胸口压榨感不缓解、严重呼吸困难、大汗淋漓、晕厥、黑便或血压触发危急报警值（如 ≥180/110 mmHg），请立即停止一切活动并拨打 120 急救电话或前往就近医院急诊就医。"],
            ["三、账号与家庭守护", "实名手机号登录与守护人协同规范", "1. 账号使用：您应使用本人合法拥有的手机号码注册登录，妥善保管短信验证码。<br>2. 家庭守护规范：添加「守护我的人」或「被我守护的人」须征得家人知情同意。代为打卡、代录血压或发起提醒将如实记录在「操作记录」中，便于家庭成员与康复团队协同核对。"],
            ["四、VIP 会员与权益说明", "服务订阅、共享与退订机制", "1. VIP 随患者档案生效：开通 VIP 会员后，绑定确认的守护家属在看护该患者时可自动共享家属共管、哈宝医生等协同权益，无需重复付费。<br>2. 随时管理：您可在「个人中心 → VIP 会员」查看权益详情与有效期。即使取消订阅或到期，您本机已建立的健康档案、计划与历史记录仍完好保留。"],
          ].map(([badge, title, body]) => `
            <div class="island-card" style="padding:18px;border-radius:20px">
              <span style="display:inline-block;padding:4px 10px;border-radius:999px;background:rgba(16,84,224,.10);color:var(--blue);font-size:12.5px;font-weight:700">${badge}</span>
              <div style="font-size:18px;font-weight:800;color:#1E293B;margin-top:10px">${title}</div>
              <div style="font-size:15px;color:#334155;line-height:1.62;margin-top:8px">${body}</div>
            </div>
          `).join("")}
        </div>
      </div>`,

    hardware: () => `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "硬件管理")}
        <div class="scroll px20" style="padding-top:12px">
          <p class="s15 fm t-sec" style="margin:0 4px 12px">血压计、手表各绑一台。绑定时扫包装上的二维码。</p>
          <div class="col" style="gap:14px">
            ${HW_KINDS.map((spec) => {
              const d = hwBound(spec.k);
              const sub = d
                ? `<span class="t-green">已绑定</span><span class="t-sec"> · 编号 ${d.serial}</span>`
                : `<span class="t-sec">未绑定</span>`;
              const tail = d ? I.chevR : `<span class="hw-chip">${I.qr}<span>扫码绑定</span></span>`;
              return `<button class="hw-card" data-act="openHw" data-k="${spec.k}" type="button">
                <div class="well">${hwIcon(spec.icon)}</div>
                <div class="grow"><h4 class="s18 fb t">${spec.title}</h4><p class="s14 fm">${sub}</p></div>
                ${tail}
              </button>`;
            }).join("")}
          </div>
        </div>
      </div>`,

    "hardware-scan": () => hwScanHTML(),

    "health-record": () => {
      const age = S.age || 58;
      // 注意 bmi() 返回的是已格式化字符串，这里要数值做分档
      const bmiVal = S.weight / ((S.height / 100) ** 2);
      const bmiWord = bmiVal < 18.5 ? "偏瘦" : bmiVal < 24 ? "正常" : bmiVal < 28 ? "偏胖" : "肥胖";
      const bmiOk = bmiWord === "正常";
      const section = (key) => {
        const src = ARCHIVE_DEMO[key];
        const expanded = !!S.hrExpanded[key];
        const count = src.groups.reduce((s, g) => s + g.pages, 0);
        return `<div class="hr-src">
          <button class="hr-src-head" data-act="toggleHr" data-k="${key}" type="button">
            <span class="s18 fb t">${src.title}</span>
            ${count ? `<span class="s13 fm t-sec mono">${count} 张</span>` : ""}
            <span class="grow"></span>
            <span class="hr-chev ${expanded ? "open" : ""}">${I.chevD}</span>
          </button>
          ${expanded ? (src.groups.length ? src.groups.map((g) => `
            <div class="hr-group">
              <div class="flex between" style="align-items:baseline">
                <span class="s16 fsb t">${g.title}</span>
                <span class="s13 fm t-sec mono">${g.pages} 张</span>
              </div>
              <div class="hr-grid">
                ${Array.from({ length: g.pages }, (_, i) => `
                  <button class="hr-thumb" data-act="previewPage" data-t="${g.title} 第${i + 1}页" type="button">
                    <span class="hr-thumb-inner">${I.doc}</span>
                    <span class="hr-page-tag">第${i + 1}页</span>
                  </button>`).join("")}
              </div>
            </div>`).join("") : `<p class="s15 fm t-sec">${src.empty}</p>`) : ""}
        </div>`;
      };
      return `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "健康档案", `<button class="cap" data-go="patient-edit" type="button">${I.pencil}编辑</button>`)}
        <div class="scroll px20" style="padding-top:8px;padding-bottom:110px">
          <div class="hero" style="border-radius:22px 22px 0 0">
            <div class="hero-top">
              <div class="avatar lg">${S.name.slice(0, 1)}</div>
              <div><div class="s24 fb">${S.name}</div><div class="s13" style="opacity:.85">我　${S.gender}</div></div>
            </div>
            <div class="frost"></div>
            <div class="metrics">
              <div><span>年龄</span><b>${age}<i>岁</i></b></div>
              <div><span>身高</span><b>${S.height}<i>cm</i></b></div>
              <div><span>体重</span><b>${S.weight}<i>kg</i></b></div>
              <div><span>BMI</span><b class="${bmiOk ? "" : "t-amber"}">${bmiVal.toFixed(1)}<i>${bmiWord}</i></b></div>
            </div>
          </div>
          <div class="island-card" style="margin-top:0;border-radius:0 0 22px 22px;padding:18px;box-shadow:0 12px 20px rgba(16,84,224,.08)">
            ${section("baseline")}
            <div style="height:14px"></div>
            ${section("review")}
          </div>
        </div>
        <div class="hr-dock">
          <div class="hr-dock-blur"></div>
          <button class="cta hr-upload" data-act="uploadHealth" type="button">${I.cam}上传报告资料</button>
        </div>
      </div>`;
    },

    "patient-edit": () => `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "患者信息", `<button class="cap" data-act="savePatient" type="button">${I.check}保存</button>`)}
        <div class="scroll px24" style="padding-top:20px">
          <div class="field-label">姓名</div>
          <input class="field" name="pname" value="${S.name}" />
          <div class="field-label mt16">性别</div>
          <div class="chips">
            ${["男", "女"].map((g) => `<button class="chip ${S.gender === g ? "on" : ""}" data-act="pickGenderEdit" data-g="${g}" type="button">${g}</button>`).join("")}
          </div>
          <div class="field-label mt16">生日</div>
          <div class="field">${S.birthday}</div>
          <div class="flex gap12 mt16">
            <div class="grow"><div class="field-label">身高</div><div class="field">${S.height} cm</div></div>
            <div class="grow"><div class="field-label">体重</div><div class="field">${S.weight} kg</div></div>
          </div>
        </div>
      </div>`,

    family: () => {
      ensureCareGraph();
      const me = currentDemoPerson();
      const col = S.famCol || "operate";
      const incoming = incomingBindRequestsFor(me.name);
      const incomingProxy = incomingProxyRequestsFor(me.name);
      const returnedProxy = returnedProxyResultsFor(me.name);
      const rejectedReturns = rejectedReturnedRequestsFor(me.name);
      const outgoing = outgoingPendingRequestsFor(me.name);
      const confirmed = confirmedFamilyBondsFor(me.name);
      const occupied = occupiedFamilySlotsFor(me.name);
      const canSendMore = occupied < 5;
      const totalNotices = incoming.length + incomingProxy.length + returnedProxy.length + rejectedReturns.length;

      const isSelfVip = genHasVip();
      const selectedBond = resolvedSelectedFamilyBondFor(me.name);
      const selectedFamName = selectedBond ? bondOtherName(selectedBond, me.name) : null;
      const showingBindForm = col === "operate" && (S.famIsAdding || !confirmed.length) && canSendMore;

      if (col === "operate" && S.proxyEditorDraft && selectedFamName) {
        const d = S.proxyEditorDraft;
        const isEdit = d.mode === "edit";
        const catOpts = [
          ["monitoring", "测血压"],
          ["medication", "服药"],
          ["exercise", "运动"],
          ["diet", "饮食"],
          ["rest", "作息"],
          ["appointment", "复查"],
        ];
        const hourOpts = [6, 7, 8, 9, 10, 12, 13, 15, 18, 19, 20, 21, 22];
        const minOpts = [0, 15, 30, 45];
        return `
        <div class="page">
          ${navBar(cap(I.chevL, "返回", "", "closeProxyTaskEditor"), isEdit ? "编辑计划" : "添加计划")}
          <div class="scroll px24" style="padding-top:20px;padding-bottom:24px">
            <div class="field-label">计划类别</div>
            <div class="chips">${catOpts.map(([k, lab]) => `<button class="chip ${d.cat === k ? "on" : ""}" data-act="pickProxyCat" data-cat="${k}" type="button">${lab}</button>`).join("")}</div>
            <div class="field-label mt16">计划名称</div>
            <input class="field" name="proxyTitle" placeholder="输入计划名称" value="${esc(d.title || "")}" />
            <div class="field-label mt16">计划时间（${pad(d.hour)}:${pad(d.min)}）</div>
            <div class="chips">${hourOpts.map((h) => `<button class="chip ${Number(d.hour) === h ? "on" : ""}" data-act="pickProxyHour" data-h="${h}" type="button">${pad(h)}时</button>`).join("")}</div>
            <div class="chips" style="margin-top:8px">${minOpts.map((m) => `<button class="chip ${Number(d.min) === m ? "on" : ""}" data-act="pickProxyMin" data-m="${m}" type="button">${pad(m)}分</button>`).join("")}</div>
            <div class="field-label mt16">执行周期</div>
            <div class="chips">
              <button class="chip ${d.cycle ? "on" : ""}" data-act="pickProxyCycle" data-v="1" type="button">循环计划</button>
              <button class="chip ${!d.cycle ? "on" : ""}" data-act="pickProxyCycle" data-v="0" type="button">单日计划</button>
            </div>
            ${d.cycle ? `
              <div class="chips" style="margin-top:8px">
                ${[["daily", "每日"], ["weekly", "每周"], ["monthly", "每月"]].map(([r, lab]) => `<button class="chip ${(d.rule || "daily") === r ? "on" : ""}" data-act="pickProxyRule" data-r="${r}" type="button">${lab}</button>`).join("")}
              </div>
            ` : ""}
            <div class="field-label mt16">备注说明</div>
            <input class="field" name="proxyNote" placeholder="选填：剂量、时长或注意事项" value="${esc(d.note || "")}" />
            ${isEdit ? `
              <button class="cta-line mt16" data-act="askProxyDeleteTask" type="button" style="color:#DC3C3C;border-color:rgba(220,60,60,.25);background:rgba(220,60,60,.08)">删除该计划（需对方接受）</button>
            ` : ""}
          </div>
          <div class="px24 flex gap8" style="padding-bottom:28px">
            <button class="cta grow" data-act="submitProxyTaskEditor" type="button">${isEdit ? `发送修改给${esc(selectedFamName)}确认` : `发送给${esc(selectedFamName)}确认`}</button>
          </div>
        </div>`;
      }

      const columnSwitcherHTML = `
        <div class="flex gap10">
          <button type="button" data-act="pickFamCol" data-col="operate" style="flex:1;height:50px;border-radius:16px;border:0;background:${col === "operate" ? "var(--blue)" : "#fff"};color:${col === "operate" ? "#fff" : "var(--blue)"};font-size:17px;font-weight:700;cursor:pointer;font-family:inherit;box-shadow:0 4px 12px rgba(16,84,224,${col === "operate" ? ".18" : ".05"})">帮家属操作</button>
          <button type="button" data-act="pickFamCol" data-col="notices" style="flex:1;height:50px;border-radius:16px;border:0;background:${col === "notices" ? "var(--blue)" : "#fff"};color:${col === "notices" ? "#fff" : "var(--blue)"};font-size:17px;font-weight:700;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 4px 12px rgba(16,84,224,${col === "notices" ? ".18" : ".05"})">
            <span>收家属通知</span>
            ${totalNotices > 0 ? `<span style="font-size:12px;font-weight:800;padding:2px 7px;border-radius:999px;background:${col === "notices" ? "#fff" : "#D97706"};color:${col === "notices" ? "var(--blue)" : "#fff"}">${totalNotices}</span>` : ""}
          </button>
        </div>`;

      let operateBodyHTML = "";
      if (col === "operate") {
        const isAddingExpanded = !!S.famIsAdding;
        const selectorStripHTML = confirmed.length ? `
          <div style="display:flex;gap:10px;overflow-x:auto;padding-bottom:2px;margin-top:14px">
            ${confirmed.map((b) => {
              const other = bondOtherName(b, me.name);
              const rel = bondRelationForViewer(b, me.name);
              const on = !isAddingExpanded && selectedFamName === other;
              const bStore = ensurePersonStore(other);
              const bTasks = bStore.tasks || [];
              const bDone = bTasks.filter((x) => !!(bStore.completed || {})[x.id]).length;
              return `<button type="button" data-act="selectActiveFam" data-name="${esc(other)}" style="flex-shrink:0;white-space:nowrap;height:44px;padding:0 14px 0 10px;border-radius:15px;border:${on ? "0" : "0.8px solid rgba(16,84,224,.12)"};background:${on ? "var(--blue)" : "#fff"};color:${on ? "#fff" : "var(--blue)"};font-size:15.5px;font-weight:700;cursor:pointer;font-family:inherit;display:inline-flex;align-items:center;gap:7px;box-shadow:0 3px 10px rgba(16,84,224,${on ? ".20" : ".05"})">
                <span style="width:26px;height:26px;border-radius:50%;background:${on ? "rgba(255,255,255,.22)" : "rgba(16,84,224,.10)"};color:${on ? "#fff" : "var(--blue)"};font-size:13px;font-weight:800;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0">${esc(other.slice(0, 1))}</span>
                <span>${esc(other)}</span>
                <span style="font-size:11.5px;font-weight:600;padding:2px 6px;border-radius:999px;background:${on ? "rgba(255,255,255,.20)" : "rgba(16,84,224,.08)"}">${esc(rel)}</span>
                <span style="font-size:11.5px;font-weight:700;opacity:${on ? ".92" : ".65"};font-variant-numeric:tabular-nums">${bDone}/${bTasks.length}</span>
              </button>`;
            }).join("")}
            ${canSendMore ? `
              <button type="button" data-act="toggleAddFamForm" style="flex-shrink:0;white-space:nowrap;height:44px;padding:0 14px;border-radius:15px;border:${isAddingExpanded ? "0" : "0.8px solid rgba(16,84,224,.12)"};background:${isAddingExpanded ? "var(--blue)" : "#fff"};color:${isAddingExpanded ? "#fff" : "var(--blue)"};font-size:15px;font-weight:700;cursor:pointer;font-family:inherit;display:inline-flex;align-items:center;gap:5px;box-shadow:0 3px 10px rgba(16,84,224,${isAddingExpanded ? ".18" : ".05"})">
                <span>${isAddingExpanded ? "× 收起绑定" : "+ 绑定家属"}</span>
                ${!isSelfVip ? `<span style="padding:1.5px 6px;border-radius:999px;background:${isAddingExpanded ? "#fff" : "#FEF3C7"};color:${isAddingExpanded ? "var(--blue)" : "#B45309"};font-size:10.5px;font-weight:800;display:inline-flex;align-items:center;gap:2px">👑 VIP</span>` : ""}
              </button>
            ` : ""}
          </div>` : "";

        const outgoingRowsHTML = outgoing.map((b) => {
          const other = bondOtherName(b, me.name);
          const rel = bondRelationForViewer(b, me.name);
          const ph = bondOtherPhone(b, me.name);
          return `
            <div class="plan-row mt12" style="border-radius:20px;border:0.8px solid rgba(16,84,224,.16);padding:14px">
              <div style="width:40px;height:40px;border-radius:50%;background:rgba(16,84,224,.10);color:var(--blue);font-size:16px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">${esc(other.slice(0, 1))}</div>
              <div class="grow" style="min-width:0">
                <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                  <span class="s17 fb t">${esc(other)}</span>
                  <span style="font-size:11px;font-weight:700;color:#D97706;background:rgba(245,158,11,.14);padding:2px 8px;border-radius:999px;white-space:nowrap">待对方确认</span>
                </div>
                <div class="s13 t-sec" style="margin-top:3px">${esc(rel)}　${esc(ph)}</div>
              </div>
              <button class="cap blue" data-act="askRemoveCareBond" data-id="${b.id}" type="button" style="flex-shrink:0;white-space:nowrap">撤回</button>
            </div>`;
        }).join("");

        const vipBindBannerHTML = !isSelfVip ? `
          <div data-go="vip" role="button" style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:16px;background:#fff;border:1px solid rgba(245,158,11,.32);box-shadow:0 4px 12px rgba(16,84,224,.06);margin-top:16px;cursor:pointer">
            <div style="width:44px;height:44px;border-radius:999px;background:#FEF3C7;color:#B45309;font-size:18px;display:flex;align-items:center;justify-content:center;flex-shrink:0">👑</div>
            <div style="min-width:0;flex:1">
              <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
                <span class="s18 fb t">主动添加家属</span>
                <span style="padding:2px 8px;border-radius:999px;background:#FEF3C7;color:#B45309;font-size:11px;font-weight:800;white-space:nowrap">👑 VIP 专属</span>
              </div>
              <div class="s13 t-sec" style="margin-top:4px;line-height:1.45">免费用户可接受家属绑定并与已绑定家属互助；主动添加新家属（最多 5 人）需开通 VIP 会员。</div>
            </div>
            <span style="padding:6px 11px;border-radius:999px;background:var(--blue);color:#fff;font-size:12.5px;font-weight:700;flex-shrink:0;white-space:nowrap">去开通 ›</span>
          </div>` : "";

        if (showingBindForm) {
          operateBodyHTML = `
            ${selectorStripHTML}
            ${outgoingRowsHTML}
            ${vipBindBannerHTML}
            <div style="margin-top:16px">
              <div class="field-label">姓名</div>
              <input class="field" name="fname" placeholder="姓名" value="${esc(S.famDraftName || "")}" />
              <div class="field-label mt16">关系</div>
              <div class="chips">${["配偶", "子女", "父母", "其他"].map((r) => `<button class="chip ${(S.famRel || "配偶") === r ? "on" : ""}" data-act="pickRel" data-r="${r}" type="button">${r}</button>`).join("")}</div>
              <div class="field-label mt16">手机号</div>
              <input class="field" name="fphone" maxlength="11" placeholder="11 位手机号" value="${esc(S.famDraftPhone || "")}" />
            </div>`;
        } else if (selectedBond && selectedFamName) {
          const rel = bondRelationForViewer(selectedBond, me.name);
          const ph = bondOtherPhone(selectedBond, me.name);
          const pendingCreates = outgoingPendingProxyFor(me.name, selectedFamName).filter((r) => r.kind === "createPlan");
          const bucket = ensurePersonStore(selectedFamName);
          const famTasks = (bucket.tasks || []).slice().sort((a, b) => a.h * 60 + a.m - (b.h * 60 + b.m));
          const compMap = bucket.completed || {};
          const doneCount = famTasks.filter((t) => !!compMap[t.id]).length;
          const totalCount = famTasks.length;
          const pendingProxyCount = pendingCreates.length + famTasks.filter((t) => !!pendingProxyRequestForTask(t.id, me.name, selectedFamName)).length;
          const pct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;

          const renderFamilyPlanCard = (t, { isPendingCreate = false, createReq = null } = {}) => {
            const kind = t.cat === "appointment" ? "appointment" : (t.cat || "monitoring");
            const done = !isPendingCreate && !!compMap[t.id];
            const pendingReq = isPendingCreate ? createReq : pendingProxyRequestForTask(t.id, me.name, selectedFamName);
            const cls = done ? "done" : kind === "appointment" ? "appt" : "";
            const chip = CAT[kind]?.name || CAT[kind]?.chip || "事项";
            const isCycle = t.cycle !== false;
            const hm = `${pad(t.h ?? 8)}:${pad(t.m ?? 0)} - ${pad(((t.h ?? 8) + 1) % 24)}:${pad(t.m ?? 0)}`;
            const rangeText = taskDateRangeLabel({ ...t, cycle: isCycle });
            const notes = t.note ? `<div class="act-notes">${cardNote(I.alignLeft, esc(t.note))}</div>` : "";

            let pendingPill = "";
            if (isPendingCreate) {
              pendingPill = `<span style="font-size:11px;font-weight:700;color:#D97706;background:rgba(245,158,11,.15);padding:2px 8px;border-radius:999px;white-space:nowrap">新增待接受</span>`;
            } else if (pendingReq) {
              pendingPill = `<span style="font-size:11px;font-weight:700;color:#D97706;background:rgba(245,158,11,.15);padding:2px 8px;border-radius:999px;white-space:nowrap">${esc(proxyActionLabel(pendingReq.kind))}待接受</span>`;
            }

            let rightCircle = "";
            if (done) {
              rightCircle = `<span class="act-check on" style="cursor:default">${I.check}</span>`;
            } else if (pendingReq) {
              rightCircle = `<span style="width:32px;height:32px;border-radius:50%;flex:0 0 32px;background:rgba(245,158,11,.14);color:#D97706;display:grid;place-items:center">${I.clock}</span>`;
            } else {
              rightCircle = `<button class="act-check" data-act="sendProxyCheckIn" data-id="${t.id}" type="button" title="帮${esc(selectedFamName)}打卡"></button>`;
            }

            let barHTML = "";
            if (pendingReq) {
              const withdrawLabel = isPendingCreate ? "撤回新增计划请求" : `撤回${esc(proxyActionLabel(pendingReq.kind))}通知`;
              barHTML = `
                <div class="act-card-bar" style="background:rgba(245,158,11,.08)">
                  <button type="button" data-act="withdrawProxyReq" data-id="${pendingReq.id}" style="color:#D97706;white-space:nowrap">${I.undo}${withdrawLabel}</button>
                </div>`;
            } else if (done) {
              barHTML = `
                <div class="act-card-bar">
                  <button type="button" data-act="openProxyTaskEditor" data-id="${t.id}" style="white-space:nowrap">${I.pencil}编辑计划</button>
                </div>`;
            } else {
              barHTML = `
                <div class="act-card-bar triple">
                  <button type="button" data-act="sendProxyRemind" data-id="${t.id}" style="white-space:nowrap">${I.bell}提醒</button>
                  <button type="button" data-act="sendProxyCheckIn" data-id="${t.id}" style="font-weight:700;white-space:nowrap">${I.check}打卡</button>
                  <button type="button" data-act="openProxyTaskEditor" data-id="${t.id}" style="white-space:nowrap">${I.pencil}编辑</button>
                </div>`;
            }

            const borderOverride = pendingReq && !done ? ' style="border-color:rgba(245,158,11,.38)"' : "";
            return `
              <div class="act-card ${cls}"${borderOverride}>
                <div class="act-card-main">
                  <div class="badge b40 ${cls}"><img src="${A.task[kind] || A.task.monitoring}" alt="" /></div>
                  <div class="grow" style="min-width:0">
                    <div class="s15 fb ${done ? "t-green" : kind === "appointment" ? "t-appt" : "t"}" style="line-height:1.35;word-break:break-word">${esc(t.title || "新计划")}</div>
                    <div class="act-info">
                      <span class="tm">${hm}</span>
                      <span class="act-chip">${isCycle ? "循环" : "单日"}</span>
                      <span class="act-chip">${esc(chip)}</span>
                      ${pendingPill}
                    </div>
                    <div class="act-dates">${rangeText}</div>
                  </div>
                  ${rightCircle}
                </div>
                ${notes}
                ${barHTML}
              </div>`;
          };

          const pendingCreateSectionHTML = pendingCreates.length ? `
            <div style="margin-bottom:14px">
              <div class="period-h" style="margin-top:2px;color:#D97706">${I.clock}新增待对方接受<span class="s12 t-sec">${pendingCreates.length} 项</span></div>
              <div class="col gap10">
                ${pendingCreates.map((r) => renderFamilyPlanCard(r.taskSnapshot || {}, { isPendingCreate: true, createReq: r })).join("")}
              </div>
            </div>` : "";

          const groups = groupByPeriod(famTasks, (t) => t.h ?? 8);
          const groupedTasksHTML = groups.map((g, gi) => `
            <div class="period-h" style="${gi === 0 && !pendingCreates.length ? "margin-top:2px" : ""}">${I[g.icon] || ""}${g.title}<span class="s12 t-sec">${g.items.length} 项</span></div>
            <div class="col gap10">
              ${g.items.map((t) => renderFamilyPlanCard(t)).join("")}
            </div>
          `).join("");

          const unifiedCabinHTML = `
            <div style="margin-top:14px;border-radius:24px;overflow:hidden;border:1px solid rgba(16,84,224,.16);box-shadow:0 6px 18px rgba(16,84,224,.08);background:rgba(238,244,255,.88)">
              <div style="padding:16px 16px 14px;background:linear-gradient(135deg,#2268F2 0%,#1054E0 100%);color:#fff">
                <div style="display:flex;align-items:center;gap:12px">
                  <div style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,.20);border:1.2px solid rgba(255,255,255,.36);display:flex;align-items:center;justify-content:center;font-size:19px;font-weight:800;color:#fff;flex-shrink:0">${esc(selectedFamName.slice(0, 1))}</div>
                  <div style="min-width:0;flex:1">
                    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
                      <span style="font-size:19px;font-weight:800;color:#fff;white-space:nowrap">${esc(selectedFamName)}</span>
                      <span style="font-size:11.5px;font-weight:700;padding:2px 8px;border-radius:999px;background:rgba(255,255,255,.20);color:#fff;white-space:nowrap">${esc(rel)}</span>
                      <span style="font-size:11px;font-weight:700;padding:2px 8px;border-radius:999px;background:rgba(255,255,255,.16);color:#fff;display:inline-flex;align-items:center;gap:4px;white-space:nowrap"><i style="width:6px;height:6px;border-radius:50%;background:#4ADE80;display:inline-block"></i>已绑定</span>
                    </div>
                    <div style="font-size:13px;font-weight:500;color:rgba(255,255,255,.84);margin-top:4px;font-variant-numeric:tabular-nums">手机号 ${esc(ph)}</div>
                  </div>
                  <button type="button" data-act="askRemoveCareBond" data-id="${selectedBond.id}" style="flex-shrink:0;white-space:nowrap;padding:7px 12px;border-radius:999px;background:rgba(255,255,255,.18);border:0.8px solid rgba(255,255,255,.28);color:#fff;font-size:13.5px;font-weight:700;cursor:pointer;font-family:inherit">解除</button>
                </div>
                <div style="height:1px;background:rgba(255,255,255,.18);margin:12px 0"></div>
                <div style="display:flex;align-items:center;gap:8px;flex-wrap:nowrap">
                  <span style="font-size:13.5px;font-weight:700;color:#fff;white-space:nowrap">${esc(selectedFamName)}的今日计划</span>
                  <span style="font-size:12.5px;font-weight:600;color:rgba(255,255,255,.88);font-variant-numeric:tabular-nums;white-space:nowrap">已完成 ${doneCount}/${totalCount}</span>
                  ${pendingProxyCount > 0 ? `<span style="font-size:11px;font-weight:700;padding:2px 7px;border-radius:999px;background:#FEF3C7;color:#B45309;white-space:nowrap">${pendingProxyCount}项待接受</span>` : ""}
                  <div style="flex:1"></div>
                  <div style="width:56px;height:7px;border-radius:999px;background:rgba(255,255,255,.22);overflow:hidden;flex-shrink:0">
                    <div style="width:${pct}%;height:100%;border-radius:999px;background:${doneCount === totalCount && totalCount > 0 ? "#4ADE80" : "#fff"}"></div>
                  </div>
                </div>
              </div>
              <div style="padding:12px">
                ${pendingCreateSectionHTML}
                ${groupedTasksHTML}
              </div>
            </div>`;

          operateBodyHTML = `
            ${selectorStripHTML}
            ${outgoingRowsHTML}
            ${unifiedCabinHTML}
          `;
        } else if (!isSelfVip) {
          operateBodyHTML = `
            ${outgoingRowsHTML}
            <div class="plan-row mt12">
              <div class="grow">
                <div style="display:flex;align-items:center;gap:8px">
                  <span class="s18 fb t">尚未绑定家属</span>
                  <span style="font-size:11px;font-weight:700;color:#D97706;background:rgba(245,158,11,.14);padding:2px 8px;border-radius:999px">需 VIP 发起</span>
                </div>
                <div class="s14 t-sec" style="margin-top:6px;line-height:1.5">开通 VIP 后最多可主动绑定 5 位家属；若家属已开通 VIP 并向你发起绑定，可在「收家属通知」中直接同意并互助照护，无需重复购买 VIP。</div>
              </div>
            </div>
          `;
        }
      }

      let noticesBodyHTML = "";
      if (col === "notices") {
        const incomingRows = incoming.map((b) => {
          const other = bondOtherName(b, me.name);
          const rel = bondRelationForViewer(b, me.name);
          const ph = bondOtherPhone(b, me.name);
          return `
            <div class="act-card mt12">
              <div class="act-card-main">
                <div style="width:42px;height:42px;border-radius:50%;background:rgba(16,84,224,.10);color:var(--blue);font-size:17px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">${esc(other.slice(0, 1))}</div>
                <div class="grow" style="min-width:0">
                  <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                    <span class="s17 fb t">${esc(other)}</span>
                    <span style="font-size:11px;font-weight:700;color:#D97706;background:rgba(245,158,11,.14);padding:2px 8px;border-radius:999px;white-space:nowrap">绑定待确认</span>
                  </div>
                  <div class="s13 t-sec" style="margin-top:4px">${esc(rel)}　${esc(ph)}</div>
                </div>
              </div>
              <div class="act-card-bar">
                <button type="button" data-act="rejectCareBond" data-id="${b.id}" style="color:var(--secondary);white-space:nowrap">不同意</button>
                <button type="button" data-act="acceptCareBond" data-id="${b.id}" style="font-weight:700;white-space:nowrap">${I.check}同意绑定</button>
              </div>
            </div>`;
        }).join("");

        const incomingProxyRows = incomingProxy.map((r) => {
          const snap = r.taskSnapshot || {};
          const kind = snap.cat === "appointment" ? "appointment" : (snap.cat || "monitoring");
          const chip = CAT[kind]?.name || CAT[kind]?.chip || "事项";
          const isCycle = snap.cycle !== false;
          const hm = `${pad(snap.h ?? 8)}:${pad(snap.m ?? 0)} - ${pad(((snap.h ?? 8) + 1) % 24)}:${pad(snap.m ?? 0)}`;
          const notes = snap.note ? `<div class="act-notes">${cardNote(I.alignLeft, esc(snap.note))}</div>` : "";
          return `
            <div class="act-card mt12">
              <div class="act-card-main">
                <div class="badge b40"><img src="${A.task[kind] || A.task.monitoring}" alt="" /></div>
                <div class="grow" style="min-width:0">
                  <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:3px">
                    <span class="s13 fb t">${esc(r.senderName)}</span>
                    <span style="font-size:11px;font-weight:700;color:#D97706;background:rgba(245,158,11,.14);padding:2px 8px;border-radius:999px;white-space:nowrap">${esc(proxyActionLabel(r.kind))}</span>
                  </div>
                  <div class="s15 fb t" style="line-height:1.35;word-break:break-word">${esc(snap.title || proxyDetailLine(r))}</div>
                  <div class="act-info">
                    <span class="tm">${hm}</span>
                    <span class="act-chip">${isCycle ? "循环" : "单日"}</span>
                    <span class="act-chip">${esc(chip)}</span>
                  </div>
                </div>
              </div>
              ${notes}
              <div class="act-card-bar">
                <button type="button" data-act="rejectProxyReq" data-id="${r.id}" style="color:var(--secondary);white-space:nowrap">不接受</button>
                <button type="button" data-act="acceptProxyReq" data-id="${r.id}" style="font-weight:700;white-space:nowrap">${I.check}接受</button>
              </div>
            </div>`;
        }).join("");

        const returnedProxyRows = returnedProxy.map((r) => {
          const isAcc = r.status === "accepted";
          const badgeFg = isAcc ? "#1AA64A" : "#DC3C3C";
          const badgeBg = isAcc ? "rgba(26,166,74,.12)" : "rgba(220,60,60,.12)";
          const snap = r.taskSnapshot || {};
          const kind = snap.cat === "appointment" ? "appointment" : (snap.cat || "monitoring");
          return `
            <div class="plan-row mt12" style="border-radius:20px;border:0.8px solid rgba(16,84,224,.16);padding:14px">
              <div class="badge b40 ${isAcc ? "done" : ""}"><img src="${A.task[kind] || A.task.monitoring}" alt="" /></div>
              <div class="grow" style="min-width:0">
                <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                  <span class="s16 fb t">${esc(r.recipientName)}</span>
                  <span style="font-size:11px;font-weight:700;color:${badgeFg};background:${badgeBg};padding:2px 8px;border-radius:999px;white-space:nowrap">${isAcc ? "对方已接受" : "对方不接受"}</span>
                </div>
                <div class="s14 t-sec" style="margin-top:4px;line-height:1.4;word-break:break-word">${esc(proxyActionLabel(r.kind))} · ${esc(proxyDetailLine(r))}</div>
              </div>
              <button class="cap blue" data-act="ackProxyReturn" data-id="${r.id}" type="button" style="flex-shrink:0;white-space:nowrap">删除</button>
            </div>`;
        }).join("");

        const rejectedRows = rejectedReturns.map((b) => {
          const other = bondOtherName(b, me.name);
          const rel = bondRelationForViewer(b, me.name);
          const ph = bondOtherPhone(b, me.name);
          return `
            <div class="plan-row mt12" style="border-radius:20px;border:0.8px solid rgba(16,84,224,.16);padding:14px">
              <div style="width:40px;height:40px;border-radius:50%;background:rgba(16,84,224,.10);color:var(--blue);font-size:16px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">${esc(other.slice(0, 1))}</div>
              <div class="grow" style="min-width:0">
                <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                  <span class="s17 fb t">${esc(other)}</span>
                  <span style="font-size:11px;font-weight:700;color:#DC3C3C;background:rgba(220,60,60,.12);padding:2px 8px;border-radius:999px;white-space:nowrap">对方不同意</span>
                </div>
                <div class="s13 t-sec" style="margin-top:4px">${esc(rel)}　${esc(ph)}</div>
              </div>
              <button class="cap blue" data-act="ackCareReturn" data-id="${b.id}" type="button" style="flex-shrink:0;white-space:nowrap">删除</button>
            </div>`;
        }).join("");

        const allNoticeRows = incomingRows + incomingProxyRows + returnedProxyRows + rejectedRows;
        noticesBodyHTML = allNoticeRows || `
          <div class="plan-row mt12">
            <div class="grow"><div class="s16 fb t-sec">暂无家属通知</div></div>
          </div>`;
      }

      let bottomDockHTML = "";
      if (col === "operate") {
        if (showingBindForm) {
          if (isSelfVip) {
            bottomDockHTML = `
              <div class="px24 flex gap8" style="padding-bottom:28px">
                <button class="cta grow" data-act="bindFam" type="button">点击绑定</button>
              </div>`;
          } else {
            bottomDockHTML = `
              <div class="px24 flex gap8" style="padding-bottom:28px">
                <button class="cta grow" data-act="askVipForFamily" type="button" style="display:flex;align-items:center;justify-content:center;gap:8px"><span style="color:#FFDC6E;display:inline-flex">${I.crown}</span><span>开通 VIP 绑定家属</span><span style="padding:2px 7px;border-radius:999px;background:rgba(255,255,255,.22);color:#FFDC6E;font-size:11px;font-weight:800">VIP</span></button>
              </div>`;
          }
        } else if (selectedFamName) {
          bottomDockHTML = `
            <div class="px24 flex gap8" style="padding-bottom:28px">
              <button class="cta grow" data-act="openProxyTaskEditor" type="button">为${esc(selectedFamName)}添加计划</button>
            </div>`;
        } else if (!confirmed.length && !isSelfVip) {
          bottomDockHTML = `
            <div class="px24 flex gap8" style="padding-bottom:28px">
              <button class="cta grow" data-act="askVipForFamily" type="button" style="display:flex;align-items:center;justify-content:center;gap:8px"><span style="color:#FFDC6E;display:inline-flex">${I.crown}</span><span>开通 VIP 绑定家属</span><span style="padding:2px 7px;border-radius:999px;background:rgba(255,255,255,.22);color:#FFDC6E;font-size:11px;font-weight:800">VIP</span></button>
            </div>`;
        }
      }

      return `
      <div class="page">
        ${navBar(cap(I.chevL, "返回", "", "backFamily"), "家属管理")}
        <div class="scroll px24" style="padding-top:16px;padding-bottom:24px">
          ${columnSwitcherHTML}
          ${col === "operate" ? operateBodyHTML : noticesBodyHTML}
        </div>
        ${bottomDockHTML}
      </div>`;
    },

    notify: () => {
      const canNotifyGuardian = hasConfirmedGuardiansForCurrentPerson();
      const guardianNames = confirmedGuardianNamesSummaryForCurrentPerson();
      const anyCat = anyCatOn();
      const selfTitle = "通知自己";
      const selfSub = "计划到点提醒自己";
      const famTitle = "通知守护我的人";
      const famSub = canNotifyGuardian
        ? `到点与完成打卡时通知：${esc(guardianNames)}`
        : "尚未添加守护我的人，点按去添加";
      const gateActive = !!(S.notifySelf || (genHasFamily() && canNotifyGuardian && S.notifyFamily));
      return `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "打卡通知")}
        <div class="scroll px20" style="padding-top:12px;padding-bottom:24px">
          <div class="list-island">
            ${rowToggle(selfTitle, !!(S.notifySelf && anyCat), "toggleSelf", notifySys(I.bell), "", selfSub)}
            ${genHasFamily() ? rowToggle(famTitle, !!(canNotifyGuardian && S.notifyFamily && anyCat), "toggleFam", notifySys(I.two), "", famSub) : ""}
          </div>
          <div class="list-island mt16" style="opacity:${gateActive ? "1" : "0.56"}">
            ${rowToggle("全部打卡", gateActive && allCatsOn(), "toggleAll", notifySys(I.check, true))}
            ${[
              ["服药", "medication"],
              ["运动", "exercise"],
              ["测血压", "monitoring"],
              ["作息", "rest"],
              ["饮食", "diet"],
              ["复查", "appointment"],
            ].map(([t, cat]) => rowToggle(t, gateActive && !!S.cats[cat], "toggleCat", notifyCat(cat), cat)).join("")}
            ${(S.customCats || []).map((c) =>
              rowToggle(c.name, gateActive && !!S.cats[c.id], "toggleCat", notifySys(I[UNIFIED_CUSTOM_ICON], true), c.id)).join("")}
          </div>
        </div>
      </div>`;
    },
  };

  /// 本周 Demo 读数：均值与评估卡一致（血压 126/78、心率 58）
  const VITALS_WEEK = [
    { day: "一", sys: 124, dia: 76, hr: 57 },
    { day: "二", sys: 130, dia: 80, hr: 59 },
    { day: "三", sys: 126, dia: 78, hr: 58 },
    { day: "四", sys: 122, dia: 74, hr: 56 },
    { day: "五", sys: 128, dia: 78, hr: 59 },
    { day: "六", sys: 124, dia: 76, hr: 58 },
    { day: "日", sys: 128, dia: 82, hr: 60 },
  ];
  /// 按周偏移生成该周读数：本周为基线；上一周（o === -1）演示缺测 2 天（已测均达标/已测较平稳）；上两周（o === -2）演示缺测 4 天（记录偏少/多日未测）
  function vitalsWeekData() {
    const baseWeek = (activePersonStore().vitalsWeek || VITALS_WEEK);
    const o = S.vitalsOffset || 0;
    if (!o) return baseWeek;
    if (o === -1) {
      return baseWeek.filter((_, i) => i !== 1 && i !== 4);
    }
    if (o === -2) {
      return baseWeek.filter((_, i) => i === 0 || i === 3 || i === 6);
    }
    const drift = -o * 1.9;
    return baseWeek.map((d, i) => {
      const w = Math.sin((i + 1) * (o * 1.7)) * 6 + Math.cos(o * 2.3 + i) * 3;
      return {
        day: d.day,
        sys: Math.round(d.sys + w + drift),
        dia: Math.round(d.dia + w * 0.55 + drift * 0.5),
        hr: Math.round(d.hr + w * 0.8 + drift * 0.4),
      };
    });
  }
  function vitalsWeekAvg() {
    const w = vitalsWeekData();
    if (!w.length) return { sys: 0, dia: 0, hr: 0 };
    const avg = (k) => Math.round(w.reduce((s, d) => s + d[k], 0) / w.length);
    return { sys: avg("sys"), dia: avg("dia"), hr: avg("hr") };
  }

  /// 折线图：一条线 + 圆点（真机 RecordsView.lineAndPoint：线宽 3 圆头圆角、线性插值、symbolSize 60）
  /// 坐标轴与真机 styledChart 同构：左侧虚线网格 + 右对齐 Y 刻度、底部 X 刻度、顶部留白 6。
  function niceDomain(values, pad, floorFloor, minSpan) {
    if (!values.length) return [floorFloor, floorFloor + minSpan];
    let lo = Math.max(floorFloor, Math.floor((Math.min(...values) - pad) / 10) * 10);
    let hi = Math.ceil((Math.max(...values) + pad) / 10) * 10;
    if (hi - lo < minSpan) hi = lo + minSpan;
    return [lo, hi];
  }

  function lineChart(series, domain, xLabels) {
    // 绘图区用 viewBox 拉伸填满，刻度文字走 HTML —— 避免 preserveAspectRatio="none" 把字压变形
    const W = 300; const TOP = 4; const BOT = 4; const SPAN = 100 - TOP - BOT;
    const [lo, hi] = domain;
    const n = xLabels.length;
    const frac = (v) => (hi === lo ? 0.5 : (v - lo) / (hi - lo));
    const yAt = (v) => TOP + SPAN * (1 - frac(v));
    const xAt = (i) => 4 + (292 * (n <= 1 ? 0.5 : i / (n - 1)));

    const STEPS = 4;
    let grid = "";
    let yLabs = "";
    for (let i = 0; i <= STEPS; i++) {
      const v = lo + ((hi - lo) * i) / STEPS;
      const y = yAt(v).toFixed(2);
      grid += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke-width="0.8" stroke-dasharray="4 4"/>`;
      yLabs += `<span style="top:${y}%">${Math.round(v)}</span>`;
    }

    const paths = series.map((s) => {
      const pts = s.values.map((v, i) => `${xAt(i).toFixed(1)},${yAt(v).toFixed(2)}`).join(" ");
      return `<polyline points="${pts}" fill="none" stroke="${s.color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        ${s.values.map((v, i) => `<circle cx="${xAt(i).toFixed(1)}" cy="${yAt(v).toFixed(2)}" r="4.3" fill="${s.color}"/>`).join("")}`;
    }).join("");

    return `<div class="chart-plot">
      <svg viewBox="0 0 ${W} 100" class="chart-svg" preserveAspectRatio="none">
        <g class="chart-grid" stroke="${series[0].color}">${grid}</g>
        ${paths}
      </svg>
      <div class="chart-ylabs">${yLabs}</div>
    </div>
    <div class="chart-xlabs">${xLabels.map((t) => `<span>${t}</span>`).join("")}</div>`;
  }

  /// 确认页草稿种子：首次入组带作息区；测血压由解析补入（Demo 出院诊断含高血压）。已入组重走用药复查只有用药（真机 showsRestSection = restItems != nil）
  function seedConfirmDrafts() {
    const rest = S.enrolled ? [] : [
      ...S.restRows.map((r) => ({
        title: r.name,
        time: r.t,
        cat: r.cat || "rest",
        srcTitle: r.name,
        note: r.cat === "monitoring" ? confirmMonitorNote(r.name) : (r.note || ""),
        cycle: true, muteFirst: false,
      })),
      ...liveBPs().map((b) => ({
        title: b.title,
        time: b.time,
        cat: "monitoring",
        srcTitle: b.src,
        note: confirmMonitorNote(b.title),
        cycle: true, muteFirst: false,
      })),
    ];
    S.confirmDrafts = [
      ...liveMeds().map((m) => ({
        title: m.name, time: m.time, cat: "medication",
        srcTitle: m.src,
        note: confirmMedNote(m.name),
        cycle: true, muteFirst: false,
      })),
      ...rest,
    ];
  }

  function parsedBloodPressureRows() {
    const hasBP = (S.restRows || []).some((r) => r.cat === "monitoring" || /血压/.test(r.name || ""));
    return hasBP ? [] : BP_FROM_PARSE.map((x) => ({ ...x }));
  }
  // 运动评估链的确认草稿（与用药链分开，避免串味）
  function seedExerciseDrafts() {
    S.confirmDrafts = [
      { title: "晨间散步", time: "09:00", cat: "exercise", cycle: true, muteFirst: false },
      { title: "上肢康复操", time: "10:00", cat: "exercise", cycle: true, muteFirst: false },
      { title: "下午散步", time: "15:00", cat: "exercise", cycle: true, muteFirst: false },
      { title: "晚间散步", time: "19:00", cat: "exercise", cycle: true, muteFirst: false },
    ];
  }

  /// 同龄同性别坐立参考达标次数（与真机 SitToStandNorm 同一张表）
  const SIT_STAND_BANDS = [
    [5, 59, 58], [8, 59, 60], [11, 57, 57], [14, 55, 53], [17, 52, 50],
    [20, 50, 47], [25, 48, 45], [30, 46, 43], [35, 44, 41], [40, 42, 39],
    [45, 40, 37], [50, 38, 35], [55, 36, 33], [60, 34, 31], [65, 32, 29],
    [70, 31, 28], [75, 30, 27], [80, 10, 10],
  ];
  function sitStandTarget(age, gender) {
    if (age == null || age < 5) return 0;
    let band = SIT_STAND_BANDS[0];
    SIT_STAND_BANDS.forEach((b) => { if (age >= b[0]) band = b; });
    return gender === "女" ? band[2] : band[1];
  }

  /// 体测模式参数（与真机 BodyTestRunView 同源）
  const TEST_PARAMS = {
    walking: { total: 180, min: 30, max: 90, step: 5, start: 90 },
    sit: { total: 60, min: 12, max: 40, step: 2, start: 24 },
  };

  function applyTestMode(mode) {
    S.testMode = mode === "sit" ? "sit" : "walking";
    const p = TEST_PARAMS[S.testMode];
    S.testCadence = p.start;
    S.testElapsed = 0;
    S.testReps = 0;
    S.testRunning = false;
    S.bodyTest = null;
  }

  /// 体测实时读数：步行距离按已走时间 × 当前步频推算（步幅 0.55 m，与真机 BodyTestRunView 一致；90 步/分 × 3 分 → 149 m）
  function walkCadence() {
    const p = TEST_PARAMS.walking;
    const cad = S.testCadence;
    return cad >= p.min && cad <= p.max ? cad : p.start;
  }
  function testDistance(elapsed) {
    const t = elapsed == null ? S.testElapsed : elapsed;
    return Math.round((t * walkCadence() / 60) * 0.55);
  }
  /// 与真机 BodyTestRecord.durationLabel 同一套：「N 秒」/「N 分钟」/「N 分 N 秒」
  function testDurationLabel(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    if (m === 0) return `${s} 秒`;
    if (s === 0) return `${m} 分钟`;
    return `${m} 分 ${s} 秒`;
  }
  /// 锁定本次体测（真机 BodyTestRunView.finishTest → BodyTestRecord.testKind）
  function captureBodyTest() {
    const sit = S.testMode === "sit";
    const p = TEST_PARAMS[sit ? "sit" : "walking"];
    const cad = S.testCadence >= p.min && S.testCadence <= p.max ? S.testCadence : p.start;
    const elapsed = S.testElapsed || p.total;
    S.bodyTest = {
      kind: sit ? "sit" : "walking",
      duration: elapsed,
      distance: sit ? 0 : testDistance(elapsed),
      cadence: cad,
      reps: sit ? (S.testReps || Math.round((elapsed / 60) * cad)) : 0,
    };
    return S.bodyTest;
  }
  /// 感受问卷顶部摘要岛（真机 BorgQuestionnaireView.bodyTestSummary：户外三栏 / 坐立两栏）
  function borgSummaryIsland() {
    const rec = S.bodyTest || captureBodyTest();
    const sit = rec.kind === "sit";
    const duration = testDurationLabel(rec.duration);
    const cells = sit
      ? [[duration, "测试时长"], [`${rec.reps} 次`, "完成次数"]]
      : [[duration, "步行时间"], [`${rec.distance} m`, "步行距离"], [`${rec.cadence} 步/分`, "平均步频"]];
    return `<div class="borg-sum">${cells.map((c, i) =>
      `${i ? '<i class="borg-sum-div"></i>' : ""}<div class="borg-sum-cell"><b>${c[0]}</b><span>${c[1]}</span></div>`
    ).join("")}</div>`;
  }
  /// 体测计时器：由 render() 自愈式启停（进运行页走秒，离开即停，不会泄漏）
  let testTicker = null;
  function syncTestTicker() {
    const want = S.screen === "body-test" && S.testRunning && !S.overlay;
    if (!want) {
      if (testTicker) { clearInterval(testTicker); testTicker = null; }
      return;
    }
    if (testTicker) return;
    testTicker = setInterval(() => {
      const p = TEST_PARAMS[S.testMode === "sit" ? "sit" : "walking"];
      if (S.screen !== "body-test" || S.overlay || S.testElapsed >= p.total) {
        clearInterval(testTicker); testTicker = null;
        if (S.screen === "body-test" && !S.overlay && S.testElapsed >= p.total) {
          S.testRunning = false;
          captureBodyTest();
          go("borg", "push");
        }
        return;
      }
      S.testElapsed = Math.min(p.total, S.testElapsed + 1);
      if (S.testMode === "sit") S.testReps = Math.round((S.testElapsed / 60) * S.testCadence);
      if (S.testElapsed >= p.total) {
        clearInterval(testTicker); testTicker = null;
        S.testRunning = false;
        captureBodyTest();
        go("borg", "push");
        return;
      }
      render();
    }, 1000);
  }

  /// 保存前把输入框里的名称 / 备注回读进草稿（重渲染会冲掉未提交的输入）
  function syncDraftInputs() {
    if (!S.draft) return;
    const t = $("input[name=taskTitle]");
    const n = $("textarea[name=taskNote]");
    if (t) S.draft.title = t.value.trim();
    if (n) S.draft.note = n.value;
  }

  /// 本周评估卡：与真机 VitalsPeriodAssessment 完全同构（五档区间总评 + 八档分项状态 + 测量覆盖度/达标/趋势话术）
  function vitalsSummary() {
    const wk = vitalsWeekData();
    const total = wk.length;
    if (!total) {
      return {
        badge: "等待记录",
        tone: "blue",
        bpStat: "暂无记录",
        hrStat: "暂无记录",
        text: "完成血压或心率记录后，将结合当前统计区间生成评估。",
      };
    }
    const expectedDays = 7;
    const measuredDays = new Set(wk.map((d) => d.day)).size;
    const unmeasuredDays = Math.max(0, expectedDays - measuredDays);
    const age = S.age || 58;
    const bpStatuses = wk.map((d) => VITAL.bpStatus(d.sys, d.dia, age));
    const hrStatuses = wk.map((d) => VITAL.hrStatus(d.hr));
    const bpInRange = bpStatuses.filter((st) => st === "inTarget").length;
    const hrInRange = hrStatuses.filter((st) => st === "inTarget").length;
    const bpAlerts = bpStatuses.filter((st) => st === "alertHigh" || st === "alertLow").length;
    const hrAlerts = hrStatuses.filter((st) => st === "alertHigh" || st === "alertLow").length;

    const sysVals = wk.map((d) => d.sys);
    const diaVals = wk.map((d) => d.dia);
    const hrVals = wk.map((d) => d.hr);
    const sysSpan = Math.max(...sysVals) - Math.min(...sysVals);
    const diaSpan = Math.max(...diaVals) - Math.min(...diaVals);
    const hrSpan = Math.max(...hrVals) - Math.min(...hrVals);
    const bpHasBoth = bpStatuses.includes("aboveTarget") && bpStatuses.includes("belowTarget");
    const hrHasBoth = hrStatuses.includes("aboveTarget") && hrStatuses.includes("belowTarget");
    const bpVolatile = total >= 2 && (sysSpan >= 20 || diaSpan >= 15 || bpHasBoth);
    const hrVolatile = total >= 2 && (hrSpan >= 15 || hrHasBoth);

    const bpOutside = total - bpInRange;
    const hrOutside = total - hrInRange;

    const bpStat = bpAlerts > 0
      ? "触及告警"
      : bpVolatile
      ? "波动较大"
      : bpOutside * 2 >= total && bpOutside > 0
      ? "多次超出目标"
      : bpOutside > 0
      ? "偶有超出目标"
      : unmeasuredDays >= 3
      ? "多日未测"
      : unmeasuredDays > 0
      ? "已测均达标"
      : "均在目标内";

    const hrStat = hrAlerts > 0
      ? "触及告警"
      : hrVolatile
      ? "波动较大"
      : hrOutside * 2 >= total && hrOutside > 0
      ? "多次超出目标"
      : hrOutside > 0
      ? "偶有波动"
      : unmeasuredDays >= 3
      ? "多日未测"
      : unmeasuredDays > 0
      ? "已测较平稳"
      : "整体平稳";

    let badge = "整体平稳";
    let tone = "green";
    if (bpAlerts > 0 || hrAlerts > 0) {
      badge = "危急告警";
      tone = "red";
    } else if (bpOutside > 0 || hrOutside > 0 || bpVolatile || hrVolatile) {
      badge = "建议关注";
      tone = "amber";
    } else if (unmeasuredDays >= 3) {
      badge = "记录偏少";
      tone = "amber";
    }

    const parts = [];
    if (unmeasuredDays >= 3) {
      parts.push(`区间内有 ${unmeasuredDays} 天未测量（仅记录 ${measuredDays} 天）`);
    } else if (unmeasuredDays > 0) {
      parts.push(`区间内有 ${unmeasuredDays} 天未测量`);
    }

    if (bpAlerts > 0) {
      parts.push(`有 ${bpAlerts} 次血压触及报警线`);
    } else if (bpOutside === 0) {
      parts.push(unmeasuredDays > 0 ? "已测血压均在康复目标内" : "血压记录均在康复目标内");
    } else {
      parts.push(`有 ${bpOutside} 次血压超出康复目标 ${VITAL.bpTargetText(age)}`);
    }

    if (hrAlerts > 0) {
      parts.push(`有 ${hrAlerts} 次心率触及报警线`);
    } else if (hrOutside === 0) {
      parts.push(unmeasuredDays > 0 ? "已测静息心率均在目标内" : "静息心率均在目标内");
    } else {
      parts.push(`有 ${hrOutside} 次心率超出目标 55–60`);
    }

    if (unmeasuredDays >= 3 || total < 4) {
      parts.push("建议坚持每日规律测量以形成完整趋势");
    } else {
      const mid = Math.floor(total / 2);
      const early = wk.slice(0, mid);
      const recent = wk.slice(mid);
      const avgOf = (arr, k) => Math.round(arr.reduce((s, d) => s + d[k], 0) / arr.length);
      const bpDelta = avgOf(recent, "sys") - avgOf(early, "sys");
      const hrDelta = avgOf(recent, "hr") - avgOf(early, "hr");
      if (bpVolatile) parts.push("近期血压波动较大");
      else if (bpDelta >= 5) parts.push("近期血压较前段略有上升");
      else if (bpDelta <= -5) parts.push("近期血压较前段有所回落");
      else parts.push("血压趋势较平稳");

      if (hrVolatile) parts.push("近期心率波动较大");
      else if (hrDelta >= 4) parts.push("心率较前段略有上升");
      else if (hrDelta <= -4) parts.push("心率较前段有所回落");
      else parts.push("心率趋势较平稳");
    }

    return { badge, tone, bpStat, hrStat, text: `${parts.join("，")}。` };
  }

  /// 录入面板动态提示：逐项判档，取更严重的一档作为整条底色（真机 VitalsInputSheet 五档）
  function vitalsStatus() {
    const age = S.age ?? 58;
    const sys = S.sys; const dia = S.dia; const hr = S.hr;
    if (sys == null || dia == null || hr == null) {
      return { level: "none", text: "录入收缩压 / 舒张压 / 心率后自动判档" };
    }
    const bp = VITAL.bpStatus(sys, dia, age);
    const st = VITAL.hrStatus(hr);
    const level = VITAL_RANK[st] > VITAL_RANK[bp] ? st : bp;
    return {
      level,
      text: `血压 ${sys}/${dia} ${VITAL_LAB[bp]}（目标 ${VITAL.bpTargetText(age)}）；心率 ${hr} ${VITAL_LAB[st]}（目标 55–60）`,
    };
  }

  /// 输入框里有字，或已经选了图，右端才出现「发送」
  function consultCanSend() {
    return !!(S.chatDraft || "").trim() || !!S.pendingImage;
  }

  function syncConsultSend() {
    const send = document.getElementById("consult-send");
    if (!send) return;
    send.hidden = !consultCanSend();
  }

  /// 问诊三模块带入的存量机械字段（真机 ConsultLaunchContext：外层统一顶栏，内部按各模块自身特色排列机械字段）
  function consultModuleNote() {
    const activeCase = S.caseMode ? CONSULT_CASES.find((x) => x.id === S.activeCaseId) : null;
    if (activeCase && activeCase.cat === S.consultModule) {
      return {
        kind: activeCase.cat,
        title: activeCase.ctxTitle,
        badge: activeCase.ctxBadge || "",
        tone: activeCase.ctxTone || "blue",
        planRows: activeCase.planRows || null,
        vitalsData: activeCase.vitalsData || null,
        reportRows: activeCase.reportRows || null,
        body: activeCase.ctxSummary,
      };
    }
    const catNameMap = { exercise: "运动", medication: "用药", monitoring: "监测", checkup: "复查" };
    if (S.consultModule === "plan") {
      const all = SEED.slice();
      const todayList = liveTasks();
      const todayIds = new Set(todayList.map((t) => t.id));
      const doneCount = todayList.filter((t) => S.completed[t.id]).length;
      const planRows = all.slice(0, 5).map((t) => {
        const freq = t.cycle === false ? "单次" : (t.rec || "每日");
        const time = `${String(t.h).padStart(2, "0")}:${String(t.m).padStart(2, "0")}`;
        const isToday = todayIds.has(t.id);
        const isDone = isToday && !!S.completed[t.id];
        return {
          cat: catNameMap[t.cat] || "计划",
          title: t.title,
          schedule: `${freq} ${time}`,
          status: isDone ? "已打卡" : (isToday ? "待执行" : freq),
          done: isDone,
        };
      });
      return {
        kind: "plan",
        title: "已带入健康计划",
        badge: todayList.length ? `共 ${all.length} 项 · 今日 ${doneCount}/${todayList.length}` : `共 ${all.length} 项`,
        tone: "blue",
        planRows,
        body: "",
      };
    }
    if (S.consultModule === "vitals") {
      const avg = vitalsWeekAvg();
      const s = vitalsSummary();
      const tone = s.tone || (s.badge === "整体平稳" ? "green" : "amber");
      return {
        kind: "vitals",
        title: "已带入血压监测",
        badge: `${vitalsWeekLabel()} · ${s.badge}`,
        tone,
        vitalsData: {
          bpValue: `${avg.sys}/${avg.dia}`,
          bpStatus: s.bpStat || "均在目标内",
          hrValue: `${avg.hr}`,
          hrStatus: s.hrStat || "整体平稳",
          focusLabel: s.badge === "危急告警" ? "单次报警" : "区间重点",
          focusText: s.text,
          danger: s.badge === "危急告警",
        },
        body: s.text,
      };
    }
    if (S.consultModule === "report") {
      const basePages = (S.docGroups || []).reduce((n, g) => n + (g.pages || 0), 0) || 4;
      const visitCount = (S.visits || []).length || 2;
      const followCount = (S.followUps || []).length || 1;
      return {
        kind: "report",
        title: "已带入身体报告",
        badge: "基础 · 复查 · 随访",
        tone: "blue",
        reportRows: [
          { source: "基础报告", value: "冠心病术后基线 · 心超与出院小结", badge: `${basePages} 张` },
          { source: "复查报告", value: "近期门诊复查 · 未见新发缺血改变", badge: `${visitCount} 次` },
          { source: "问卷随访", value: "规律服药 · 日常温和散步恢复平稳", badge: `${followCount} 次` },
        ],
        body: "",
      };
    }
    return null;
  }

  function consultContextCardHTML(note) {
    const toneColors = {
      blue: { fg: "var(--blue)", bg: "rgba(16,84,224,.10)" },
      green: { fg: "#15803d", bg: "rgba(34,197,94,.14)" },
      amber: { fg: "#b45309", bg: "rgba(245,158,11,.15)" },
      red: { fg: "#dc2626", bg: "rgba(220,38,38,.14)" },
    };
    const tc = toneColors[note.tone] || toneColors.blue;
    let bodyHTML = "";
    if (note.kind === "plan" && note.planRows && note.planRows.length) {
      bodyHTML = `<div style="display:flex;flex-direction:column;gap:6px;margin-top:10px">` +
        note.planRows.map((r) => `
          <div class="flex center gap8" style="padding:7px 10px;border-radius:11px;background:rgba(16,84,224,.04)">
            <span style="padding:2px 7px;border-radius:6px;background:rgba(16,84,224,.09);color:var(--blue);font-size:11px;font-weight:700;flex-shrink:0">${r.cat}</span>
            <span class="s13 fb grow" style="color:var(--blue);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r.title}</span>
            <span class="s12 fm t-sec" style="font-variant-numeric:tabular-nums;flex-shrink:0">${r.schedule}</span>
            <span style="padding:2px 7px;border-radius:999px;background:${r.done ? "rgba(34,197,94,.14)" : "rgba(16,84,224,.08)"};color:${r.done ? "#15803d" : "rgba(16,84,224,.78)"};font-size:11px;font-weight:700;flex-shrink:0">${r.status}</span>
          </div>
        `).join("") + `</div>`;
    } else if (note.kind === "vitals" && note.vitalsData) {
      const v = note.vitalsData;
      const bpFg = v.danger ? "#dc2626" : "var(--blue)";
      const bpBg = v.danger ? "rgba(220,38,38,.06)" : "rgba(16,84,224,.05)";
      const focusFg = v.danger ? "#dc2626" : "var(--blue)";
      const focusBg = v.danger ? "rgba(220,38,38,.05)" : "rgba(16,84,224,.04)";
      bodyHTML = `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px">
          <div style="padding:8px 10px;border-radius:11px;background:${bpBg}">
            <div class="flex between center">
              <span class="s11 fb t-sec">平均血压</span>
              <span style="font-size:11px;font-weight:700;color:${bpFg}">${v.bpStatus}</span>
            </div>
            <div style="margin-top:3px;display:flex;align-items:baseline;gap:3px">
              <span style="font-size:17px;font-weight:800;color:${bpFg};font-variant-numeric:tabular-nums">${v.bpValue}</span>
              <span style="font-size:11px;font-weight:600;color:${bpFg};opacity:.72">mmHg</span>
            </div>
          </div>
          <div style="padding:8px 10px;border-radius:11px;background:rgba(225,29,72,.05)">
            <div class="flex between center">
              <span class="s11 fb t-sec">平均心率</span>
              <span style="font-size:11px;font-weight:700;color:#e11d48">${v.hrStatus}</span>
            </div>
            <div style="margin-top:3px;display:flex;align-items:baseline;gap:3px">
              <span style="font-size:17px;font-weight:800;color:#e11d48;font-variant-numeric:tabular-nums">${v.hrValue}</span>
              <span style="font-size:11px;font-weight:600;color:#e11d48;opacity:.72">bpm</span>
            </div>
          </div>
        </div>
        <div class="flex center gap8" style="margin-top:6px;padding:7px 10px;border-radius:11px;background:${focusBg}">
          <span style="padding:2px 7px;border-radius:6px;background:${v.danger ? "rgba(220,38,38,.12)" : "rgba(16,84,224,.10)"};color:${focusFg};font-size:11px;font-weight:700;flex-shrink:0">${v.focusLabel || "区间重点"}</span>
          <span class="s12 fm grow" style="color:rgba(16,84,224,.88);line-height:1.35">${v.focusText}</span>
        </div>
      `;
    } else if (note.kind === "report" && note.reportRows && note.reportRows.length) {
      bodyHTML = `<div style="display:flex;flex-direction:column;gap:6px;margin-top:10px">` +
        note.reportRows.map((r) => `
          <div class="flex center gap8" style="padding:7px 10px;border-radius:11px;background:rgba(16,84,224,.04)">
            <span style="padding:2px 7px;border-radius:6px;background:rgba(16,84,224,.09);color:var(--blue);font-size:11px;font-weight:700;flex-shrink:0">${r.source}</span>
            <span class="s12 fm grow" style="color:rgba(16,84,224,.88);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r.value}</span>
            <span style="padding:2px 7px;border-radius:999px;background:rgba(16,84,224,.07);color:var(--t-sec);font-size:11px;font-weight:700;font-variant-numeric:tabular-nums;flex-shrink:0">${r.badge}</span>
          </div>
        `).join("") + `</div>`;
    } else {
      bodyHTML = `<div style="margin-top:8px;padding:9px 11px;border-radius:11px;background:rgba(16,84,224,.04);color:rgba(16,84,224,.86);font-size:12.5px;line-height:1.45">${note.body || ""}</div>`;
    }
    return `
      <div class="consult-ctx" style="margin-top:8px;margin-bottom:10px;background:rgba(255,255,255,.96);border:1px solid rgba(16,84,224,.12);border-radius:18px;padding:12px 13px;box-shadow:0 5px 12px rgba(16,84,224,.05)">
        <div class="flex between center gap8">
          <div class="flex center gap8">
            <img src="${A.logo}" width="26" height="26" alt="" />
            <div class="s15 fb" style="color:var(--blue)">${note.title}</div>
          </div>
          ${note.badge ? `<span style="padding:3px 9px;border-radius:999px;background:${tc.bg};color:${tc.fg};font-size:11px;font-weight:700;font-variant-numeric:tabular-nums">${note.badge}</span>` : ""}
        </div>
        ${bodyHTML}
      </div>
    `;
  }

  const CONSULT_CASE_CATS = [
    { id: "plan", title: "健康计划", steps: ["① 带入健康计划", "② 聊症状与日常安排", "③ 修改 / 新增 / 暂停 / 打卡"] },
    { id: "vitals", title: "血压监测", steps: ["① 带入血压监测", "② 休息重测或风险判断", "③ 记录血压 / 危急呼叫"] },
    { id: "report", title: "身体报告", steps: ["① 带入身体报告", "② 对比出院·复查·问卷", "③ 更新报告解读 / 保存照片"] },
  ];

  const CONSULT_CASES = [
    // ───────── 模块一：健康计划（4 种常见操作，次按钮统一「查看健康计划」） ─────────
    {
      id: "plan_medication",
      cat: "plan",
      catTitle: "健康计划",
      tag: "修改计划",
      title: "早起吃药反酸 · 修改吃药时间",
      inputLabel: "带入：健康计划（已有每日 07:30 阿司匹林计划）",
      outputLabel: "结果：把吃药时间改到 08:30 早饭后 → 查看健康计划",
      ctxTitle: "已带入健康计划",
      ctxBadge: "共 4 项 · 今日 2/4",
      ctxDetail: "健康计划 · 运动 / 用药 / 监测与复查",
      ctxSummary: "当前共有 4 项日常计划：每日 06:30 早晨测血压（已打卡）、每日 07:30 阿司匹林肠溶片（已打卡）、每日 12:00 户外散步 30 分钟（待执行）、每日 20:00 阿托伐他汀钙片（待执行）。",
      planRows: [
        { cat: "监测", title: "早晨测血压", schedule: "每日 06:30", status: "已打卡", done: true },
        { cat: "用药", title: "阿司匹林肠溶片", schedule: "每日 07:30", status: "已打卡", done: true },
        { cat: "运动", title: "户外散步 30 分钟", schedule: "每日 12:00", status: "待执行", done: false },
        { cat: "用药", title: "阿托伐他汀钙片", schedule: "每日 20:00", status: "待执行", done: false },
      ],
      turns: [
        { who: "user", t: "哈宝医生，我每天早上 7 点半空腹吃阿司匹林，最近一上午胃里都有点反酸烧心，后面的药还能按原计划时间吃吗？" },
        { who: "ai", t: "我看了您的「健康计划」，里面有每日 07:30 服用阿司匹林肠溶片（今天已打卡）。如果早上空腹吃总是反酸，需要先排查一下胃部情况。请问最近大便颜色正常吗？有没有黑便或者剧烈胃痛？" },
        { who: "user", t: "没有黑便也不痛，就是一大早刚起床空腹吃有点反酸，能不能改到早饭后，顺便把提醒时间也改一下？" },
        { who: "ai", t: "没有黑便和剧痛可以先放心。建议您把早上吃阿司匹林的时间改到早饭后半小时（08:30）温水送服，下次复查时再让医生看看要不要配护胃药。点下面按钮就能直接修改这条计划的时间：", caseId: "plan_medication" },
      ],
      card: {
        badge: "健康计划 · 修改计划",
        title: "修改计划：服用阿司匹林肠溶片",
        lines: [
          "修改内容：提醒时间从 07:30 改到 08:30（早饭后半小时）",
          "记录保留：以前的打卡记录照常保留，从今天起按新时间提醒",
          "补充备注：餐后 30 分钟温水送服，留意反酸是否好转",
        ],
        primaryBtn: "确认修改计划",
        appliedBtn: "已修改健康计划",
        secondaryBtn: "查看健康计划",
        target: "schedule",
        effect: { kind: "plan", title: "服用阿司匹林肠溶片", cat: "medication", h: 8, m: 30, rec: "每日", note: "餐后 30 分钟温水送服，留意反酸是否好转" },
      },
    },
    {
      id: "plan_exercise",
      cat: "plan",
      catTitle: "健康计划",
      tag: "新增计划",
      title: "晚上入睡困难 · 新增睡前泡脚计划",
      inputLabel: "带入：健康计划（目前只有吃药、散步、测血压，无助眠作息计划）",
      outputLabel: "结果：新加每晚 21:30 睡前温水泡脚计划 → 查看健康计划",
      ctxTitle: "已带入健康计划",
      ctxBadge: "共 4 项 · 今日 3/4",
      ctxDetail: "健康计划 · 运动 / 用药 / 监测与复查",
      ctxSummary: "当前共有 4 项日常计划：每日 06:30 早晨测血压（已打卡）、每日 08:00 阿司匹林肠溶片（已打卡）、每日 15:00 户外散步 30 分钟（已打卡）、每日 20:00 阿托伐他汀钙片（待执行），目前还没有睡前作息计划。",
      planRows: [
        { cat: "监测", title: "早晨测血压", schedule: "每日 06:30", status: "已打卡", done: true },
        { cat: "用药", title: "阿司匹林肠溶片", schedule: "每日 08:00", status: "已打卡", done: true },
        { cat: "运动", title: "户外散步 30 分钟", schedule: "每日 15:00", status: "已打卡", done: true },
        { cat: "用药", title: "阿托伐他汀钙片", schedule: "每日 20:00", status: "待执行", done: false },
      ],
      turns: [
        { who: "user", t: "哈宝医生，我最近晚上躺下总是翻来覆去睡不着，白天也没精神，有什么办法能帮我睡好一点吗？" },
        { who: "ai", t: "睡不好确实容易让第二天血压波动。为了安全起见先问一下：您半夜会有喘不上气憋醒、胸口发闷，或者必须垫高枕头才能睡着的情况吗？" },
        { who: "user", t: "那倒没有，呼吸很顺畅，就是晚上脚有点凉、脑子静不下来，很难入睡。" },
        { who: "ai", t: "没有半夜憋醒和胸闷，说明心脏供血是平稳的。我看您的健康计划里还没有晚间助眠安排，建议每晚 21:30 用 40℃ 左右的温水泡脚 15 分钟、放下手机准备入睡。点下面按钮就能把这条新计划加进健康计划：", caseId: "plan_exercise" },
      ],
      card: {
        badge: "健康计划 · 新增计划",
        title: "新增计划：睡前温水泡脚 15 分钟",
        lines: [
          "提醒时间：每晚 21:30（作息 · 每天重复）",
          "计划备注：40℃ 左右温水泡脚 15 分钟，放松助眠",
          "保存效果：在健康计划里新加这一条，并开启到点提醒",
        ],
        primaryBtn: "一键加入健康计划",
        appliedBtn: "已加入健康计划",
        secondaryBtn: "查看健康计划",
        target: "schedule",
        effect: { kind: "plan", title: "睡前温水泡脚 15 分钟", cat: "rest", h: 21, m: 30, rec: "每日", note: "40℃ 左右温水泡脚 15 分钟，放松助眠" },
      },
    },
    {
      id: "plan_pause",
      cat: "plan",
      catTitle: "健康计划",
      tag: "删除计划",
      title: "感冒浑身乏力 · 删除今天散步计划",
      inputLabel: "带入：健康计划（今日 15:00 下午散步待执行）",
      outputLabel: "结果：删除今天这一次散步（明天照常恢复，也可删后续计划）→ 查看健康计划",
      ctxTitle: "已带入健康计划",
      ctxBadge: "共 4 项 · 今日 2/4",
      ctxDetail: "健康计划 · 运动 / 用药 / 监测与复查",
      ctxSummary: "当前共有 4 项日常计划：每日 06:30 早晨测血压（已打卡）、每日 08:00 阿司匹林肠溶片（已打卡）、每日 15:00 下午散步 30 分钟（待执行）、每日 21:00 阿托伐他汀钙片（待执行）。",
      planRows: [
        { cat: "监测", title: "早晨测血压", schedule: "每日 06:30", status: "已打卡", done: true },
        { cat: "用药", title: "阿司匹林肠溶片", schedule: "每日 08:00", status: "已打卡", done: true },
        { cat: "运动", title: "下午散步 30 分钟", schedule: "每日 15:00", status: "待执行", done: false },
        { cat: "用药", title: "阿托伐他汀钙片", schedule: "每日 21:00", status: "待执行", done: false },
      ],
      turns: [
        { who: "user", t: "哈宝医生，我昨晚有点着凉感冒、浑身酸软没力气，今天下午 3 点的散步计划还能去走吗？" },
        { who: "ai", t: "感冒没力气的时候千万别勉强运动，否则会加重心脏负担！请问现在有没有发烧、胸闷或者心跳明显变快？" },
        { who: "user", t: "体温正常也没有胸闷，就是人很困乏，只想在家歇一天，能只把今天这次散步删掉、不影响明天以后的计划吗？" },
        { who: "ai", t: "完全可以！健康计划支持「删除本次计划」和「删除本次和后续计划」两种删除方式。您今天只是感冒乏力，只需要删掉今天这一次——今天不再提醒，明天起照常恢复。点下面按钮即可删除今天这次散步：", caseId: "plan_pause" },
      ],
      card: {
        badge: "健康计划 · 删除计划",
        title: "删除本次计划：今日下午散步",
        lines: [
          "删除方式：只删除今天这一次，明天起照常恢复（若需长期停用可删本次和后续）",
          "提醒变化：取消今天下午的散步提醒，首页今日待办同步移出",
          "操作记录：记入「在 [健康计划] 删除了单次计划」",
        ],
        primaryBtn: "删除今天这次散步",
        appliedBtn: "已删除今天散步",
        secondaryBtn: "查看健康计划",
        target: "schedule",
        effect: { kind: "pausePlan", title: "", cat: "exercise", pauseTodayOnly: true },
      },
    },
    {
      id: "plan_checkin",
      cat: "plan",
      catTitle: "健康计划",
      tag: "完成打卡",
      title: "晚上的药已吃 · 直接完成打卡",
      inputLabel: "带入：健康计划（21:00 阿托伐他汀钙片还未打卡）",
      outputLabel: "结果：直接在聊天里把今晚这顿药打上卡 → 查看健康计划",
      ctxTitle: "已带入健康计划",
      ctxBadge: "共 4 项 · 今日 3/4",
      ctxDetail: "健康计划 · 运动 / 用药 / 监测与复查",
      ctxSummary: "当前共有 4 项日常计划：今日已完成 3 项，仅剩 21:00 阿托伐他汀钙片待打卡。",
      planRows: [
        { cat: "监测", title: "早晨测血压", schedule: "每日 06:30", status: "已打卡", done: true },
        { cat: "用药", title: "阿司匹林肠溶片", schedule: "每日 08:00", status: "已打卡", done: true },
        { cat: "运动", title: "下午散步 30 分钟", schedule: "每日 15:00", status: "已打卡", done: true },
        { cat: "用药", title: "阿托伐他汀钙片", schedule: "每日 21:00", status: "待打卡", done: false },
      ],
      turns: [
        { who: "user", t: "哈宝医生，晚上的阿托伐他汀钙片我刚才已经用温水吃过了，顺便问下吃他汀期间能吃柚子吗？" },
        { who: "ai", t: "幸亏您先问了一句！吃阿托伐他汀期间不能吃西柚（葡萄柚），因为它会影响药物在肝脏里的代谢，容易引起肌肉酸痛。请问您刚才吃药时吃柚子了吗？" },
        { who: "user", t: "还没吃呢，正好家里买了先问问你，那我不吃了！另外刚才那粒他汀我已经吃完了。" },
        { who: "ai", t: "太好了，苹果、梨、香蕉都可以正常吃。既然今晚的阿托伐他汀钙片已经吃过了，点下面按钮就能直接帮您把今天这顿药打上卡（首页转盘和今日集章也会一起点亮）：", caseId: "plan_checkin" },
      ],
      card: {
        badge: "健康计划 · 完成打卡",
        title: "完成打卡：服用阿托伐他汀钙片",
        lines: [
          "打卡项目：21:00 服用阿托伐他汀钙片",
          "同步变化：取消今晚未响提醒 + 首页计划卡变绿 + 盖上今日集章",
          "操作记录：记入「在 [健康计划] 打卡了 [服用阿托伐他汀钙片]」",
        ],
        primaryBtn: "一键完成打卡",
        appliedBtn: "已完成打卡",
        secondaryBtn: "查看健康计划",
        target: "schedule",
        effect: { kind: "checkInPlan", title: "服用阿托伐他汀钙片", cat: "medication" },
      },
    },

    // ───────── 模块二：血压监测（3 种常见操作，次按钮统一「查看血压监测」） ─────────
    {
      id: "vitals_morning_bp",
      cat: "vitals",
      catTitle: "血压监测",
      tag: "记录血压",
      title: "早上血压偏高 · 休息重测后记入血压",
      inputLabel: "带入：血压监测（近期 3 次早上偏高，平均 144/88）",
      outputLabel: "结果：记入重测读数 134/82 并顺带完成今日测血压打卡 → 查看血压监测",
      ctxTitle: "已带入血压监测",
      ctxBadge: "建议关注",
      ctxTone: "amber",
      ctxDetail: "血压监测 · 趋势评估与测量明细",
      ctxSummary: "近期有 3 次早上血压高于康复目标 <140/90 mmHg，平均血压 144/88 mmHg，平均心率 70 次/分（平稳），未超过 ≥180/110 的危险报警线。",
      vitalsData: {
        bpValue: "144/88",
        bpStatus: "偶有超出目标",
        hrValue: "58",
        hrStatus: "整体平稳",
        focusLabel: "近期重点",
        focusText: "3 次早上血压偏高，未超过 ≥180/110 危险线",
        danger: false,
      },
      turns: [
        { who: "user", t: "哈宝医生，帮我看看最近的血压监测，好几天早上量都在 145/90 左右，是不是降压药压不住了？" },
        { who: "ai", t: "我看了您的「血压监测」：最近平均血压 144/88 mmHg，确实比康复目标（<140/90 mmHg）略高一点，但离 ≥180/110 的危险线还很远，心率 70 次/分也很稳。早上刚起床或者憋尿时量血压容易偏高，您先去趟洗手间，安静坐 10 分钟再重测一次看看？" },
        { who: "user", t: "刚安静坐了 10 分钟又量了一次，降到 134/82 了，心率 66！" },
        { who: "ai", t: "安静重测降到 134/82 mmHg、心率 66 次/分，已经回到达标范围（<140/90）里了！说明降压药是管用的，前面只是刚起床活动引起的短暂波动。点下面按钮就能把这次读数记进「血压监测」，如果今天还有测血压计划没打卡，也会顺带帮您打上卡：", caseId: "vitals_morning_bp" },
      ],
      card: {
        badge: "血压监测 · 记录血压",
        title: "记入血压：134/82 mmHg · 心率 66 次/分",
        lines: [
          "本次读数：高压 134 / 低压 82 mmHg · 心率 66 次/分",
          "达标情况：已在目标范围内（<140/90），状态平稳",
          "顺带完成：写入血压监测更新曲线，并完成今日测血压计划打卡",
        ],
        primaryBtn: "记入血压监测",
        appliedBtn: "已记入血压监测",
        secondaryBtn: "查看血压监测",
        target: "vitals",
        effect: { kind: "vitals", sys: 134, dia: 82, hr: 66 },
      },
    },
    {
      id: "vitals_heart_rate",
      cat: "vitals",
      catTitle: "血压监测",
      tag: "记录并加提醒",
      title: "下午心跳偏快 · 记入读数并加晚间测压提醒",
      inputLabel: "带入：血压监测（血压达标，下午有 2 次心率偏快）",
      outputLabel: "结果：记入平复后读数 124/76 并加每晚 20:00 测压提醒 → 查看血压监测",
      ctxTitle: "已带入血压监测",
      ctxBadge: "建议关注",
      ctxTone: "amber",
      ctxDetail: "血压监测 · 趋势评估与测量明细",
      ctxSummary: "近期平均血压 126/78 mmHg（达标），平均心率 76 次/分（有 2 次下午超出 55–60 的静息目标），未超过危险报警线。",
      vitalsData: {
        bpValue: "126/78",
        bpStatus: "均在目标内",
        hrValue: "76",
        hrStatus: "偶有波动",
        focusLabel: "近期重点",
        focusText: "2 次下午心率偏快，血压保持达标",
        danger: false,
      },
      turns: [
        { who: "user", t: "这两天下午总觉得心跳有点快、心里发慌，刚才看心率有 86 次/分，要不要紧？" },
        { who: "ai", t: "我看了一下您的「血压监测」：血压 126/78 很达标；冠心病稳定期安静时理想心率是 55–60 次/分，86 次/分偏快但还没超过 100 次/分的危险报警线。请问今天控制心率的药（比如倍他乐克）按时吃了吗？下午有没有喝浓茶或咖啡？" },
        { who: "user", t: "哎呀，今天中午忙忘了吃药，下午还喝了两杯绿茶！我现在歇了会儿量是血压 124/76，心率降到 62 了。" },
        { who: "ai", t: "原因找到了：忘吃药加上喝绿茶让心跳加快了。现在休息后心率已经降回 62 次/分，下次按正常时间吃药就行，千万不要一次吃两倍的量！点下面按钮可以把这次读数记进「血压监测」，并顺手帮您加上每晚 20:00 的测血压提醒：", caseId: "vitals_heart_rate" },
      ],
      card: {
        badge: "血压监测 · 记录并加提醒",
        title: "记入血压：124/76 mmHg · 心率 62 次/分",
        lines: [
          "本次读数：高压 124 / 低压 76 mmHg · 心率 62 次/分",
          "恢复情况：血压达标，心率已从 86 次/分平复下来",
          "顺带安排：记入血压监测，并开启每晚 20:00 测血压提醒",
        ],
        primaryBtn: "记入读数并加晚间提醒",
        appliedBtn: "已记入血压监测",
        secondaryBtn: "查看血压监测",
        target: "vitals",
        effect: { kind: "vitals", sys: 124, dia: 76, hr: 62, alsoRemind: true },
      },
    },
    {
      id: "vitals_emergency",
      cat: "vitals",
      catTitle: "血压监测",
      tag: "危急值报警",
      title: "血压飙升伴胸闷 · 记录危急读数并呼叫 120",
      inputLabel: "带入：血压监测（突发血压 186/112 mmHg、心率 104 伴胸闷）",
      outputLabel: "结果：记录红色危急读数并弹出 120 急救呼叫 → 查看血压监测",
      ctxTitle: "已带入血压监测",
      ctxBadge: "危急告警",
      ctxTone: "red",
      ctxDetail: "血压监测 · 趋势评估与测量明细",
      ctxSummary: "突发危险读数：高压 186 / 低压 112 mmHg，心率 104 次/分，已超过高压 ≥180、低压 ≥110、心率 >100 的危险报警线，伴头晕胸闷。",
      vitalsData: {
        bpValue: "186/112",
        bpStatus: "触及告警",
        hrValue: "104",
        hrStatus: "触及告警",
        focusLabel: "单次报警",
        focusText: "血压和心率同时越过危险线，伴胸闷头晕",
        danger: true,
      },
      turns: [
        { who: "user", t: "哈宝医生，我刚才生气后觉得头晕、胸口发闷，一量血压飙到了 186/112，心率 104，我现在该再吃一粒降压药出去散步消消气吗？" },
        { who: "ai", t: "⚠️ 绝对不能去散步，也不要自己随便加吃降压药！您的血压 186/112、心率 104 已经超过危险报警线（≥180/110 且心率 >100），还伴有头晕胸闷。请问胸口闷痛有没有串到后背或左肩膀？身边有家人在吗？" },
        { who: "user", t: "已经在沙发上半躺着了，老伴在旁边，胸口还是有点发紧。" },
        { who: "ai", t: "请继续半躺着别动、解开领口保持呼吸顺畅，千万不要自己走路或开车去医院！点下面红色按钮会把这次危险读数记进「血压监测」（标红方便急诊医生查看），并马上帮您拨打 120：", caseId: "vitals_emergency" },
      ],
      card: {
        isEmergency: true,
        badge: "血压监测 · 危急值报警",
        title: "危急报警：记录 186/112 并呼叫 120",
        lines: [
          "危险读数：血压 186/112 mmHg · 心率 104 次/分，伴胸闷头晕",
          "安全第一：请原地半卧休息、家人陪同，切勿自行起身或开车",
          "记录与急救：在血压监测中标红记下这次读数，并弹出 120 呼叫确认",
        ],
        primaryBtn: "记下危急读数并呼叫 120",
        appliedBtn: "已记录并拉起 120",
        secondaryBtn: "查看血压监测",
        target: "vitals",
        effect: { kind: "emergency", sys: 186, dia: 112, hr: 104 },
      },
    },

    // ───────── 模块三：身体报告（3 种常见操作，次按钮统一「查看身体报告」） ─────────
    {
      id: "report_lipid_review",
      cat: "report",
      catTitle: "身体报告",
      tag: "更新复查解读",
      title: "复查血脂好转想停药 · 更新复查报告解读",
      inputLabel: "带入：身体报告（出院时血脂 2.8 → 这次复查降到 1.7）",
      outputLabel: "结果：把复查对比解读补充进身体报告 → 查看身体报告",
      ctxTitle: "已带入身体报告",
      ctxBadge: "基础 · 复查 · 随访",
      ctxDetail: "身体报告 · 基础 / 复查 / 问卷随访",
      ctxSummary: "已汇总 4 张基础报告、2 次复查报告与 1 次问卷随访：出院时为冠心病支架术后，LVEF 58%，低密度脂蛋白（LDL-C）2.8 mmol/L；这次复查降到 1.7 mmol/L，心电图正常。",
      reportRows: [
        { source: "基础报告", value: "支架术后 · 心超 LVEF 58% · 出院血脂 2.8", badge: "4 张" },
        { source: "复查报告", value: "复查血脂 1.7 mmol/L · 心电图正常", badge: "2 次" },
        { source: "问卷随访", value: "按时服药 · 恢复平稳", badge: "1 次" },
      ],
      turns: [
        { who: "user", t: "哈宝医生，结合我的身体报告看看，这次复查化验单上低密度脂蛋白（LDL-C）降到 1.7 了，没有向上的箭头了，晚上的他汀可以减半或者停药吗？" },
        { who: "ai", t: "千万不能自己减量或停药！我对比了您的「基础报告」和「复查报告」：您做过心脏支架手术，低密度脂蛋白从出院时的 2.8 降到 1.7，正是每天按时吃他汀的效果。但化验单上 <3.4 的参考值是给普通健康人看的，支架术后患者必须降到 <1.4 mmol/L 才算达标。" },
        { who: "user", t: "原来不带箭头也还没到 1.4 的标准！那可以把这条解读记到我的身体报告里吗，免得我和家里人忘了又想停药？" },
        { who: "ai", t: "没问题！我已经帮您整理好这次复查血脂和出院时的对比结论，点下面按钮就能直接写进「身体报告」的综合结论和复查报告解读里，方便您和家人随时查看：", caseId: "report_lipid_review" },
      ],
      card: {
        badge: "身体报告 · 更新复查解读",
        title: "更新解读：复查血脂对比与用药说明",
        lines: [
          "更新位置：身体报告「综合结论」+「复查报告 AI 解读」",
          "指标对比：出院时 2.8 → 这次复查 1.7 mmol/L（支架术后目标 <1.4）",
          "用药提醒：肝功能和肌酶正常，请继续按原剂量吃他汀，不要自己停药",
        ],
        primaryBtn: "更新到身体报告",
        appliedBtn: "已更新到身体报告",
        secondaryBtn: "查看身体报告",
        target: "report",
        effect: {
          kind: "report",
          source: "review",
          overall: "复查低密度脂蛋白（LDL-C）1.7 mmol/L，比出院时（2.8 mmol/L）明显下降，但离支架术后 <1.4 mmol/L 的目标还差 0.3 mmol/L；肝肾功能与肌酶正常，请继续按原剂量服用他汀，切勿自行减停。",
          sub: "本次复查化验单 LDL-C 1.7 mmol/L（化验单默认参考值针对普通人，支架术后需控制在 <1.4 mmol/L），较出院时 2.8 mmol/L 已稳步好转；转氨酶与肌酶正常，请继续维持当前他汀方案。",
          place: "复查报告",
          act: "更新了报告解读",
          how: "复查血脂对比解读（出院 2.8 → 复查 1.7 mmol/L，目标 <1.4）",
        },
      },
    },
    {
      id: "report_image_archive",
      cat: "report",
      catTitle: "身体报告",
      tag: "保存报告照片",
      title: "拍照发复查单 · 存入复查报告并完成打卡",
      inputLabel: "带入：身体报告 + 在聊天里拍了门诊复查心电图和化验单",
      outputLabel: "结果：照片存进复查报告资料合集 + 顺带完成今日复查打卡 → 查看身体报告",
      ctxTitle: "已带入身体报告",
      ctxBadge: "基础 · 复查 · 随访",
      ctxDetail: "身体报告 · 基础 / 复查 / 问卷随访",
      ctxSummary: "已汇总 4 张基础报告、2 次复查报告与 1 次问卷随访：支架术后恢复平稳，今天有 1 项待打卡的「心内科复查」计划。",
      reportRows: [
        { source: "基础报告", value: "支架术后 · 心超 LVEF 58%", badge: "4 张" },
        { source: "复查报告", value: "今天刚拍门诊复查单（待保存）", badge: "2 次" },
        { source: "问卷随访", value: "按时服药 · 恢复平稳", badge: "1 次" },
      ],
      turns: [
        { who: "user", t: "（图片）哈宝医生，我今天去心内科门诊复查了，刚拍了这张复查心电图和血常规化验单，帮我看看正常吗？" },
        { who: "ai", t: "我看完您拍的复查单了：这次心电图是正常窦性心律（64 次/分），和出院时相比没有新的心肌缺血；血常规里的血小板和血红蛋白也都正常。请问今天门诊医生有没有改您的药量？" },
        { who: "user", t: "医生说恢复得挺好，药量不变，让我把这次复查单留好就行。" },
        { who: "ai", t: "太好了！为了免得照片留在聊天记录里以后不好找，点下面按钮就能把刚才拍的复查单直接存进「身体报告 → 复查报告」的资料合集里，同时更新报告解读，并顺带帮您把今天的「复查」计划打上卡：", caseId: "report_image_archive" },
      ],
      card: {
        badge: "身体报告 · 保存报告照片",
        title: "保存照片到「复查报告」并完成复查打卡",
        lines: [
          "保存位置：身体报告 → 复查报告 · 资料合集（健康档案里也能看）",
          "解读更新：同步更新身体报告「综合结论」和「复查报告 AI 解读」",
          "顺带完成：自动把今天还没打卡的「复查」计划标为已完成",
        ],
        primaryBtn: "保存照片并完成复查打卡",
        appliedBtn: "已存入身体报告并打卡",
        secondaryBtn: "查看身体报告",
        target: "report",
        effect: {
          kind: "archiveImages",
          target: "review",
          groupTitle: "复查报告",
          pages: 1,
          overall: "最新门诊复查单已保存：复查心电图窦性心律 64 次/分、无新发心肌缺血，血常规血小板与血红蛋白正常，继续维持原有用药方案。",
          sub: "问诊上传门诊复查单（心电图+血常规）：与出院时相比恢复平稳，各项指标正常，已顺带完成今日复查计划打卡。",
        },
      },
    },
    {
      id: "report_sleep_followup",
      cat: "report",
      catTitle: "身体报告",
      tag: "更新随访解读",
      title: "填完问卷担心支架移位 · 更新随访问卷解读",
      inputLabel: "带入：身体报告（心脏超声 LVEF 58% + 复查心电图正常 + 51题随访问卷）",
      outputLabel: "结果：把支架安全说明和睡眠建议补充进身体报告 → 查看身体报告",
      ctxTitle: "已带入身体报告",
      ctxBadge: "基础 · 复查 · 随访",
      ctxDetail: "身体报告 · 基础 / 复查 / 问卷随访",
      ctxSummary: "已汇总 4 张基础报告、2 次复查报告与 1 次问卷随访：基础心脏超声 LVEF 58% 心功能良好，复查心电图正常；本月 51 题问卷反映半夜容易醒、担心支架移位。",
      reportRows: [
        { source: "基础报告", value: "心脏超声 LVEF 58% · 心功能良好", badge: "4 张" },
        { source: "复查报告", value: "心电图正常 · 无心肌缺血", badge: "2 次" },
        { source: "问卷随访", value: "51 题问卷：半夜易醒 · 担心支架", badge: "1 次" },
      ],
      turns: [
        { who: "user", t: "刚填完这个月的 51 题随访问卷，里面问到睡眠和情绪，我最近确实半夜容易醒、总担心翻身会让心脏支架移位，结合我的身体报告看看要紧吗？" },
        { who: "ai", t: "我对照了您的「基础报告 + 复查报告 + 问卷随访」：请您完全放宽心！您的心脏超声射血分数（LVEF）58%，近期复查心电图也很正常；而且心脏支架装好后早就牢牢贴在血管壁上了，平时翻身、走路绝对不会移位或掉下来！" },
        { who: "user", t: "听您拿超声和心电图报告这么一讲，我心里这块大石头总算落地了！能把这条说明记进我的身体报告里吗？" },
        { who: "ai", t: "当然可以！点下面按钮就能把「心功能正常、支架稳固不会移位」的结论补充进「身体报告」的综合结论和问卷随访解读里，让您和家人看着更安心：", caseId: "report_sleep_followup" },
      ],
      card: {
        badge: "身体报告 · 更新随访解读",
        title: "更新随访解读：支架安全说明与睡眠建议",
        lines: [
          "更新位置：身体报告「综合结论」+「问卷随访 AI 解读」",
          "检查依据：心脏超声 LVEF 58% + 复查心电图正常，心脏供血稳定",
          "安心结论：支架牢靠不会因翻身移位，半夜易醒属于术后常见紧张反应",
        ],
        primaryBtn: "更新到身体报告",
        appliedBtn: "已更新到身体报告",
        secondaryBtn: "查看身体报告",
        target: "report",
        effect: {
          kind: "report",
          source: "followUp",
          overall: "结合基础心脏超声（LVEF 58%）与复查心电图（无心肌缺血），心脏供血稳定、支架十分牢靠，日常翻身和散步不会移位；本月随访问卷反映的半夜易醒主要是术后担心引起的，放宽心规律作息即可。",
          sub: "针对随访问卷中「半夜易醒、担心支架移位」的疑问：对照心脏超声与心电图确认心功能良好、支架稳固，消除不必要的焦虑，建议保持规律作息。",
          place: "问卷随访",
          act: "提交了问卷",
          how: "补充随访问卷解读（确认心功能良好、支架稳固不移位）",
        },
      },
    },
  ];

  function applyConsultCase(item, stepByStep) {
    if (!item) return;
    S.caseMode = true;
    S.activeCaseId = item.id;
    S.caseCat = item.cat;
    S.consultModule = item.cat;
    S.caseMenu = false;
    S.chatMenu = false;
    S.plusPanel = false;
    S.consultKeyboard = false;
    S.pendingImage = false;
    if (stepByStep) {
      S.caseStep = 0;
      S.messages = [];
      S.chatDraft = item.turns[0] ? item.turns[0].t : "";
    } else {
      S.caseStep = null;
      S.messages = item.turns.map((t) => ({ ...t }));
      S.chatDraft = "";
    }
  }

  function switchCaseByBottomTab(cat) {
    const list = CONSULT_CASES.filter((c) => c.cat === cat);
    if (!list.length) return;
    if (S.consultModule === cat && S.activeCaseId && list.some((c) => c.id === S.activeCaseId)) {
      const idx = list.findIndex((c) => c.id === S.activeCaseId);
      const next = list[(idx + 1) % list.length];
      applyConsultCase(next, S.caseStep != null);
    } else {
      applyConsultCase(list[0], S.caseStep != null);
    }
  }

  function consultCaseFlowBannerHTML(item) {
    const siblings = CONSULT_CASES.filter((c) => c.cat === item.cat);
    const applied = !!S.appliedCaseActions[item.id];
    const turnsShown = S.messages.length;
    const isStepping = S.caseStep != null && turnsShown < item.turns.length;
    const loopSteps = [
      { label: `① 带入资料`, cls: "on" },
      { label: "② 问答沟通", cls: turnsShown >= 2 ? "on" : "" },
      { label: "③ 一键保存", cls: applied ? "done" : (turnsShown >= item.turns.length ? "on" : "") },
      { label: "④ 去模块查看", cls: applied ? "done" : "" },
    ];
    return `<div class="case-flow-banner" style="padding:12px;gap:10px">
      <div class="flex between center" style="gap:8px">
        <div class="s16 fb t" style="color:var(--blue)">${item.catTitle}</div>
        <button class="case-switch-btn" data-act="toggleCaseStepMode" type="button" style="white-space:nowrap;flex-shrink:0;padding:5px 10px;font-size:12px;font-weight:700;border-radius:999px;background:${isStepping ? "rgba(22,163,74,.12)" : "rgba(16,84,224,.09)"};color:${isStepping ? "var(--green-deep)" : "var(--blue)"};border:1px solid ${isStepping ? "rgba(22,163,74,.25)" : "rgba(16,84,224,.18)"}">
          ${isStepping ? "看完整对话" : "逐步模拟提问"}
        </button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        ${siblings.map((sib, idx) => {
          const isCur = sib.id === item.id;
          return `<button data-act="loadConsultCase" data-case="${sib.id}" type="button" style="display:flex;align-items:center;gap:6px;padding:7px 10px;border-radius:10px;border:1px solid ${isCur ? "transparent" : "rgba(16,84,224,.12)"};background:${isCur ? "var(--blue)" : "rgba(16,84,224,.06)"};color:${isCur ? "#fff" : "var(--blue)"};cursor:pointer;font-family:inherit;text-align:left">
            <span style="display:inline-flex;align-items:center;justify-content:center;width:17px;height:17px;border-radius:50%;background:${isCur ? "#fff" : "rgba(16,84,224,.85)"};color:${isCur ? "var(--blue)" : "#fff"};font-size:10.5px;font-weight:700">${idx + 1}</span>
            <span style="font-size:12px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1">${sib.tag}</span>
            ${isCur ? `<span style="font-size:10px;font-weight:700">✓</span>` : ""}
          </button>`;
        }).join("")}
      </div>
      <div class="case-pipe-row" style="background:transparent;padding:0;gap:3px">
        ${loopSteps.map((st, idx) => `<span class="case-loop-step ${st.cls}" style="flex:1;text-align:center;padding:4px 3px;font-size:10.5px;font-weight:600;border-radius:6px">${st.label}</span>${idx < loopSteps.length - 1 ? `<i class="case-pipe-arr" style="font-size:8px;color:rgba(16,84,224,.35)">›</i>` : ""}`).join("")}
      </div>
    </div>`;
  }

  function consultCaseActionHTML(caseId) {
    const item = CONSULT_CASES.find((x) => x.id === caseId);
    const c = (item && item.card) || (S.freeCards && S.freeCards[caseId]);
    if (!c) return "";
    const applied = !!S.appliedCaseActions[caseId];
    const emStyle = c.isEmergency && !applied
      ? ` style="border-color:rgba(240,90,110,.55);background:linear-gradient(180deg,rgba(240,90,110,.11),rgba(240,90,110,.04))"`
      : "";
    const priStyle = c.isEmergency && !applied
      ? ` style="background:#F05A6E;color:#fff"`
      : "";
    return `<div class="case-action-card${applied ? " done" : ""}"${emStyle}>
      <div class="flex between center">
        <span class="case-act-badge"${c.isEmergency && !applied ? ` style="background:rgba(240,90,110,.16);color:#F05A6E"` : ""}>${c.badge}</span>
        <span class="case-act-state"${c.isEmergency && !applied ? ` style="color:#F05A6E"` : ""}>${applied ? "已生效" : (c.isEmergency ? "紧急优先" : "待执行")}</span>
      </div>
      <div class="s16 fb mt6 ${applied ? "t-green" : "t"}"${c.isEmergency && !applied ? ` style="color:#D83A52"` : ""}>${c.title}</div>
      <div class="case-act-lines">
        ${c.lines.map((l) => `<div class="case-act-line"><i${c.isEmergency && !applied ? ` style="background:#F05A6E"` : ""}></i><span>${l}</span></div>`).join("")}
      </div>
      <div class="case-act-btns">
        <button class="case-btn-pri${applied ? " done" : ""}"${priStyle} data-act="applyCaseAction" data-case="${caseId}" type="button">
          ${applied ? `✓ ${c.appliedBtn}` : `${c.isEmergency ? "🚨" : "⚡"} ${c.primaryBtn}`}
        </button>
        <button class="case-btn-sec${applied ? " done" : ""}" data-act="openCaseTarget" data-target="${c.target}" type="button">
          ${c.secondaryBtn} ›
        </button>
      </div>
    </div>`;
  }

  /// 自由问诊模式：结合患者提问生成三大模块操作卡（次按钮统一回到对应模块页面）
  function routeFreeConsultTurn(text, hasImage) {
    const q = (text || "").trim();
    const id = `free_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    const hasAny = (words) => words.some((w) => q.includes(w));
    const bpMatch = q.match(/(\d{2,3})\s*[/／]\s*(\d{2,3})/);
    const sys = bpMatch ? parseInt(bpMatch[1], 10) : null;
    const dia = bpMatch ? parseInt(bpMatch[2], 10) : null;
    const hrMatch = q.match(/心率\s*(\d{2,3})|(\d{2,3})\s*(?:bpm|次\/分)/i);
    const hr = hrMatch ? parseInt(hrMatch[1] || hrMatch[2], 10) : 76;

    // 1. 血压监测 · 危急值报警 → 次按钮「查看血压监测」
    const isCriticalVitals = (sys && (sys >= 180 || sys < 90)) || (dia && dia >= 110) || hr > 100 || hr < 50;
    const isRedFlag = hasAny(["胸口压榨", "胸痛不缓解", "冷汗", "黑便", "柏油便", "呕血", "晕厥", "眼前发黑", "呼吸困难", "180/", "190/"]);
    if (isRedFlag || isCriticalVitals) {
      const sVal = sys || 186;
      const dVal = dia || 112;
      return {
        reply: "⚠️ 危险提醒：您描述的情况或读数已经超过危险报警线！请马上停止活动、原地半卧或坐下休息，千万不要自己开车去医院。点下面红色按钮记下这次危险读数并呼叫 120：",
        card: {
          id,
          isEmergency: true,
          badge: "血压监测 · 危急值报警",
          title: "危急报警：记录读数并呼叫 120",
          lines: [
            "安全第一：原地半卧休息，保持呼吸顺畅，通知家人陪同",
            `记录与急救：在血压监测中标红记下读数（${sVal}/${dVal} mmHg · 心率 ${hr} 次/分）并拉起 120`,
          ],
          primaryBtn: "记下危急读数并呼叫 120",
          appliedBtn: "已记录并拉起 120",
          secondaryBtn: "查看血压监测",
          target: "vitals",
          effect: { kind: "emergency", sys: sVal, dia: dVal, hr },
        },
      };
    }

    // 2. 身体报告 · 保存报告照片 → 次按钮「查看身体报告」
    if (!S.plan.cur && !rxPendingCard("plan") && has(["制定", "方案", "计划", "怎么安排", "安排一下"])) {
      return { reply: "好，我先按你现在的吃药、测血压和日常安排，起草第 1 期 7 天康复方案。医生审核后，你点下面的「采纳方案」就能开始，采纳当天算第 1 天：", card: rxFirstPlanSpec() };
    }
    if (hasImage) {
      const isBaseline = hasAny(["出院", "住院", "手术", "冠脉造影", "支架记录"]);
      return {
        reply: isBaseline
          ? "我看完您拍的住院/出院资料了，点下面按钮就能把照片存进「身体报告 → 基础报告」的资料合集里，并更新报告解读："
          : "我看完您拍的复查单了。点下面按钮就能把照片存进「身体报告 → 复查报告」的资料合集里，如果今天有待打卡的复查计划也会顺带帮您打上卡：",
        card: {
          id,
          badge: "身体报告 · 保存报告照片",
          title: isBaseline ? "保存照片到「基础报告」并更新解读" : "保存照片到「复查报告」并完成复查打卡",
          lines: [
            `保存位置：${isBaseline ? "身体报告 → 基础报告·资料合集" : "身体报告 → 复查报告·资料合集"}`,
            isBaseline
              ? "解读更新：同步更新基础报告 AI 解读与身体报告综合结论"
              : "顺带完成：更新复查报告解读，并自动完成今天待打卡的「复查」计划",
          ],
          primaryBtn: isBaseline ? "保存到基础报告" : "保存照片并完成复查打卡",
          appliedBtn: isBaseline ? "已存入身体报告" : "已存入身体报告并打卡",
          secondaryBtn: "查看身体报告",
          target: "report",
          effect: {
            kind: "archiveImages",
            target: isBaseline ? "baseline" : "review",
            groupTitle: isBaseline ? "检查报告" : "复查报告",
            pages: 1,
            overall: isBaseline
              ? "已补充保存出院资料：冠脉支架植入术后血管通畅，心功能稳定，请继续按时吃药。"
              : "最新复查化验单已保存：各项指标平稳，低密度脂蛋白持续好转。",
            sub: isBaseline
              ? "问诊补传出院检查单：确认术后心功能良好。"
              : "问诊上传复查单：指标比出院时稳步好转，建议维持当前用药方案。",
          },
        },
      };
    }

    // 3. 健康计划 · 删除计划（删除本次计划 / 删除本次和后续计划） → 次按钮「查看健康计划」
    if (hasAny(["胸口发紧", "运动后胸闷", "走几步就喘", "禁忌", "暂停运动", "今天不运动", "腿疼", "感冒", "没力气", "删除", "删掉"])) {
      const stopAll = hasAny(["胸口发紧", "运动后胸闷", "走几步就喘", "禁忌", "以后都不", "全部删", "后续"]);
      return {
        reply: stopAll
          ? "⚠️ 您出现了运动后胸口发紧或明显喘不上气，不适合继续运动！建议先把今天及后面的运动计划删掉（以前的打卡记录保留），等门诊复查医生评估安全后再恢复："
          : "身体感冒或没力气的时候不要勉强去散步。您可以只删除今天这一次散步计划，明天起日常散步照常恢复：",
        card: {
          id,
          badge: "健康计划 · 删除计划",
          title: stopAll ? "删除本次和后续计划：运动计划" : "删除本次计划：今日散步计划",
          lines: [
            stopAll
              ? "删除范围：以前的打卡记录保留，从今天起删除后续运动计划"
              : "删除范围：只删除今天这一次，明天起照常恢复提醒",
            `操作记录：记入「在 [健康计划] ${stopAll ? "删除了后续计划" : "删除了单次计划"}」`,
          ],
          primaryBtn: stopAll ? "删除本次和后续运动计划" : "删除今天这次散步",
          appliedBtn: stopAll ? "已删除后续运动计划" : "已删除今天散步",
          secondaryBtn: "查看健康计划",
          target: "schedule",
          effect: { kind: "pausePlan", title: "", cat: "exercise", pauseTodayOnly: !stopAll },
        },
      };
    }

    // 4. 健康计划 · 完成打卡 → 次按钮「查看健康计划」
    if (hasAny(["吃过了", "吃了药", "刚吃完", "打完卡", "走完了", "散完步"])) {
      const isWalk = hasAny(["走完", "散完步"]);
      const title = isWalk ? "晨间散步" : "服用阿司匹林肠溶片";
      return {
        reply: `按时完成计划对恢复很有帮助！点下面按钮就能直接在聊天里把今天的「${title}」打上卡（首页转盘和今日集章也会一起点亮）：`,
        card: {
          id,
          badge: "健康计划 · 完成打卡",
          title: `完成打卡：${title}`,
          lines: [
            `打卡项目：今日待完成的「${title}」`,
            "同步变化：取消未响提醒 + 首页计划卡变绿 + 盖上今日集章",
          ],
          primaryBtn: "一键完成打卡",
          appliedBtn: "已完成打卡",
          secondaryBtn: "查看健康计划",
          target: "schedule",
          effect: { kind: "checkInPlan", title, cat: isWalk ? "exercise" : "medication" },
        },
      };
    }

    // 5. 血压监测 · 记录血压 / 记录并加提醒 → 次按钮「查看血压监测」
    if (sys && dia) {
      const alsoRemind = sys >= 140 || dia >= 90 || hasAny(["波动", "心慌", "偏高"]);
      return {
        reply: `收到您刚才报出的读数（血压 ${sys}/${dia} mmHg，心率 ${hr} 次/分）。点下面按钮可以直接记进「血压监测」，如果今天有还没打卡的测血压计划也会顺带完成打卡：`,
        card: {
          id,
          badge: alsoRemind ? "血压监测 · 记录并加提醒" : "血压监测 · 记录血压",
          title: `记入血压 ${sys}/${dia} mmHg · 心率 ${hr} 次/分`,
          lines: [
            `本次读数：高压 ${sys} / 低压 ${dia} mmHg，心率 ${hr} 次/分`,
            alsoRemind
              ? "顺带安排：完成今日测血压打卡，并开启每晚 20:00 测血压提醒"
              : "顺带完成：若今日有未打卡的「测血压」计划，将自动完成打卡",
          ],
          primaryBtn: alsoRemind ? "记入读数并加晚间提醒" : "记入血压监测",
          appliedBtn: "已记入血压监测",
          secondaryBtn: "查看血压监测",
          target: "vitals",
          effect: { kind: "vitals", sys, dia, hr, alsoRemind },
        },
      };
    }

    // 6. 健康计划 · 修改计划（改已有吃药时间，或把已有散步改短） → 次按钮「查看健康计划」
    if (hasAny(["反酸", "烧心", "阿司匹林", "改时间", "顺延", "餐后", "气喘", "走30分钟", "改短"])) {
      const isExerciseModify = hasAny(["气喘", "走30分钟", "改短"]);
      if (isExerciseModify) {
        return {
          reply: "走 20 分钟就气喘说明原来的运动量偏大了。建议把您现有的散步计划改到傍晚 17:30、缩短为慢走 15 分钟（以前的打卡记录照常保留，从今天起按新时间提醒）：",
          card: {
            id,
            badge: "健康计划 · 修改计划",
            title: "修改计划：晨间散步（改到 17:30 · 15 分钟）",
            lines: [
              "修改内容：提醒时间改到傍晚 17:30，时长缩短为慢走 15 分钟",
              "记录保留：以前的打卡记录照常保留，从今天起按新时间提醒",
            ],
            primaryBtn: "确认修改计划",
            appliedBtn: "已修改健康计划",
            secondaryBtn: "查看健康计划",
            target: "schedule",
            effect: { kind: "plan", title: "晨间散步", cat: "exercise", h: 17, m: 30, rec: "每日", note: "慢走 15 分钟，保持微汗能说话节奏" },
          },
        };
      }
      return {
        reply: "排除黑便与剧烈胃痛后，如果早上空腹吃阿司匹林反酸，建议把「服用阿司匹林肠溶片」改到早饭后半小时（08:30）温水送服：",
        card: {
          id,
          badge: "健康计划 · 修改计划",
          title: "修改计划：服用阿司匹林肠溶片（改到 08:30）",
          lines: [
            "修改内容：提醒时间从 07:30 改到 08:30（早饭后半小时）",
            "记录保留：以前的打卡记录照常保留，从今天起按新时间提醒",
          ],
          primaryBtn: "确认修改计划",
          appliedBtn: "已修改健康计划",
          secondaryBtn: "查看健康计划",
          target: "schedule",
          effect: { kind: "plan", title: "服用阿司匹林肠溶片", cat: "medication", h: 8, m: 30, rec: "每日", note: "餐后 30 分钟温水送服，留意反酸是否好转" },
        },
      };
    }

    // 7. 身体报告 · 更新随访解读 → 次按钮「查看身体报告」
    if (hasAny(["随访", "问卷", "51题", "心理", "half", "半夜醒", "支架移位"])) {
      return {
        reply: "结合您的基础心脏超声（LVEF 58%）与复查心电图（无心肌缺血），您的支架非常稳固，翻身绝不会移位！点下面按钮可以把这条说明补充进「身体报告」：",
        card: {
          id,
          badge: "身体报告 · 更新随访解读",
          title: "更新随访解读：支架安全说明与睡眠建议",
          lines: [
            "检查依据：心脏超声 LVEF 58% + 复查心电图正常，排除支架异常",
            "更新位置：同步写入「身体报告·综合结论」与「问卷随访·AI 解读」",
          ],
          primaryBtn: "更新到身体报告",
          appliedBtn: "已更新到身体报告",
          secondaryBtn: "查看身体报告",
          target: "report",
          effect: {
            kind: "report",
            source: "followUp",
            overall: "结合基础心脏超声 LVEF 58% 与复查心电图无心肌缺血，支架十分牢靠，翻身和散步不会移位；51 题问卷反映的半夜易醒属于术后常见担心反应。",
            sub: "针对问卷反映的「入睡困难与术后担忧」，对照超声与心电图确认心脏供血稳定、支架稳固。",
            place: "问卷随访",
            act: "提交了问卷",
            how: "补充随访问卷解读（确认心功能良好、支架稳固不移位）",
          },
        },
      };
    }

    // 8. 默认按当前选中的三模块胶囊生成对应卡片
    if (S.consultModule === "vitals") {
      return {
        reply: "结合您最近的血压和心率趋势，建议把安静重测的读数记下来，并开启每晚 20:00 的测血压提醒：",
        card: {
          id,
          badge: "血压监测 · 记录并加提醒",
          title: "记入读数并加每晚 20:00 测压提醒",
          lines: [
            "本次读数：血压 132/80 mmHg · 心率 66 次/分（安静重测）",
            "顺带安排：写入「血压监测」并开启每晚 20:00 测血压提醒",
          ],
          primaryBtn: "记入读数并加晚间提醒",
          appliedBtn: "已记入血压监测",
          secondaryBtn: "查看血压监测",
          target: "vitals",
          effect: { kind: "vitals", sys: 132, dia: 80, hr: 66, alsoRemind: true },
        },
      };
    }
    if (S.consultModule === "report") {
      return {
        reply: "我已经结合您的基础报告、复查报告和随访问卷整理了最新解读，点下面按钮就能补充进「身体报告」：",
        card: {
          id,
          badge: "身体报告 · 更新复查解读",
          title: "更新解读到「身体报告」",
          lines: [
            "更新位置：身体报告「综合结论」与「复查报告·AI 解读」",
            "重点结论：心功能与支架状态稳定，请坚持按时服药、少盐饮食与温和散步",
          ],
          primaryBtn: "更新到身体报告",
          appliedBtn: "已更新到身体报告",
          secondaryBtn: "查看身体报告",
          target: "report",
          effect: {
            kind: "report",
            source: "review",
            overall: "哈宝医生问诊补充：结合基础报告与近期复查指标，当前心功能与冠脉供血稳定；请继续按时服药，按期复查血脂与肝肾功能。",
            sub: "问诊复查对比：各项指标走势平稳，未见新的心肌缺血。",
            place: "复查报告",
            act: "更新了报告解读",
            how: "补充复查报告对比解读",
          },
        },
      };
    }
    return {
      reply: "收到您的提问。结合您当前的健康计划，建议每晚 21:30 用温水泡脚 15 分钟帮助放松助眠，点下面按钮就能把这条新计划加进「健康计划」：",
      card: {
        id,
        badge: "健康计划 · 新增计划",
        title: "新增计划：睡前温水泡脚 15 分钟（每晚 21:30）",
        lines: [
          "提醒时间：每晚 21:30（作息 · 每天重复）",
          "计划备注：40℃ 左右温水泡脚 15 分钟，放松助眠",
        ],
        primaryBtn: "一键加入健康计划",
        appliedBtn: "已加入健康计划",
        secondaryBtn: "查看健康计划",
        target: "schedule",
        effect: { kind: "plan", title: "睡前温水泡脚 15 分钟", cat: "rest", h: 21, m: 30, rec: "每日", note: "40℃ 左右温水泡脚 15 分钟，放松助眠" },
      },
    };
  }

  /// 向哈宝医生发一条并挂 AI 回复（快捷问 / 底坞三功能共用）
  function askConsult(userText, aiText) {
    S.consultOpen = true;
    S.messages.push({ who: "user", t: userText });
    S.messages.push({ who: "ai", t: aiText });
    render();
  }

  /* ═════════════ V0.1 哈宝医生：问诊 + 计划制定（方案卡 / 调整卡 / 期末反馈 / 期章） ═════════════
     只在设计版本 V0.1 生效（genIsConsultV2）；V0.2 / V0.0 仍走上面的三模块联动案例与落点卡，两套数据互不串。
     数据全在 S（冷启动随 S0 复位）：
       plan.cur      进行中（或已过第 7 天、待交反馈）的一期：{ no, start(采纳当天 = 第 1 天), ids, rows, why, marks, addedOn, selfEdited, fbPrompted }
       plan.history  已定格的期（新的在前）：在 cur 基础上多 end / stats（定格那一刻）/ feeling / review
       rxCards       方案卡 / 调整卡：{ kind: plan|adjust, status: pending|adopted|deferred|expired, rows, why, no, demo(案例演示卡) }
       rx            医嘱来源标：任务 id → true（采纳写入或改过的计划）
       rxChat        V0.1 真实对话（案例演示不写）；rxArchive = 归档的旧对话
     过去日的方案打卡按 marks（full / part / none，缺省 full）给演示数据，今天读真实打卡 S.completed。
     哈宝医生只读血压监测 / 身体报告，不再写回读数、报告结论、照片或打卡。 */
  function genIsConsultV2() { return false; }
  function rxOn() { return genIsConsultV2() && !!S.vip; }
  const RX_OP = { adjust: "调整", add: "新增", keep: "保留", stop: "停用", pause: "暂停今天" };
  const RX_MEDAL = { gold: "金章", silver: "银章", bronze: "铜章", none: "" };
  const RX_FEELINGS = [["轻松", "😊"], ["刚好", "🙂"], ["有点吃力", "😮‍💨"]];
  const RX_DEFAULT_IDS = ["t1", "t4", "t5", "t15", "t16"];
  const RX_CARD_STATE = { pending: "待采纳", adopted: "已采纳", deferred: "已暂缓", expired: "已替代" };
  function rxToday() { return toYMD(demoDate()); }
  function rxEnd(p) { return p.end || addDaysYMD(p.start, 6); }
  function rxTask(id) { return SEED.find((t) => t.id === id) || null; }
  function rxFind(kw) { return SEED.find((t) => t.title.includes(kw)) || null; }
  function rxHM(h, m) { return `${pad(h)}:${pad(m)}`; }
  function rxTimeText(t) { return t ? `每日 ${rxHM(t.h, t.m)}` : ""; }
  function rxMD(ymd) { const d = parseYMD(ymd); return `${d.getMonth() + 1}月${d.getDate()}日`; }
  function rxRangeText(start) { return `${rxMD(start)} – ${rxMD(addDaysYMD(start, 6))}`; }
  function rxShort(title) { return String(title || "").replace(/^服用/, "").replace(/(肠溶片|缓释片|钙片)$/, ""); }
  function rxDayIndex(p, ymd) { return Math.round((parseYMD(ymd) - parseYMD(p.start)) / 86400000) + 1; }
  function rxEnsureVip() {
    S.gen = "0.1";
    if (S.vip) return;
    const d = new Date();
    d.setFullYear(d.getFullYear() + 1);
    S.vip = true;
    S.vipUntil = d.getTime();
  }

  /// 某天本期方案里排到的计划：仍在健康计划里、当天没被删本次 / 停用；期内经调整卡新增的从次日起计
  function rxScheduled(p, ymd) {
    const live = new Set(liveTasks(ymd).map((t) => t.id));
    const added = p.addedOn || {};
    return (p.ids || []).filter((id) => live.has(id) && !(added[id] && ymd <= added[id]));
  }
  function rxDoneIds(p, ymd, sched) {
    const today = rxToday();
    if (ymd > today) return [];
    if (ymd === today) return sched.filter((id) => S.completed[id]);
    const mark = (p.marks || {})[ymd] || "full";
    if (mark === "full") return sched.slice();
    if (mark === "part") return sched.slice(0, Math.min(sched.length - 1, Math.max(1, Math.ceil(sched.length * 0.6))));
    return [];
  }
  function rxMedal(full, anyDone) { return full >= 6 ? "gold" : full >= 4 ? "silver" : anyDone ? "bronze" : "none"; }
  /// 一期 7 格：满日（全部打卡）/ 部分 / 空 / 休（当天没排方案计划，算满日）/ 未到；本期已集 X/Y（未来日计入 Y）
  function rxStats(p) {
    if (p.stats) return p.stats;
    const today = rxToday();
    let full = 0; let done = 0; let total = 0; let anyDone = false;
    const days = Array.from({ length: 7 }, (_, i) => {
      const ymd = addDaysYMD(p.start, i);
      const sched = rxScheduled(p, ymd);
      const ids = rxDoneIds(p, ymd, sched);
      total += sched.length;
      done += ids.length;
      if (ids.length) anyDone = true;
      let state;
      if (!sched.length) state = "rest";
      else if (ymd > today) state = "future";
      else if (ids.length === sched.length) state = "full";
      else state = ids.length ? "part" : "none";
      if ((state === "full" || state === "rest") && ymd <= today) full += 1;
      return { ymd, state, n: sched.length, d: ids.length };
    });
    return { days, full, done, total, anyDone, medal: rxMedal(full, anyDone) };
  }
  /// 本期已结束：第 7 天过完；或第 7 天当天方案计划已全部打卡（不用等到 24:00）
  function rxCurEnded() {
    const p = S.plan && S.plan.cur;
    if (!p) return false;
    const today = rxToday();
    const end = rxEnd(p);
    if (today > end) return true;
    if (today < end) return false;
    const s = rxScheduled(p, today);
    return s.length > 0 && s.every((id) => S.completed[id]);
  }
  function rxCurActive() { return !!(S.plan && S.plan.cur) && !rxCurEnded(); }
  /// 真实对话里还没采纳的卡（案例演示卡不算）
  function rxPendingCard(kind) {
    return Object.values(S.rxCards || {}).find((c) => !c.demo && (c.status === "pending" || c.status === "deferred") && (!kind || c.kind === kind)) || null;
  }
  /// 首页圆钮红点：有待采纳的卡（暂缓后 3 天内仍算），或本期已结束待交反馈
  function rxNeedsDot() {
    if (!rxOn() || !S.plan) return false;
    if (S.plan.cur && rxCurEnded()) return true;
    const today = rxToday();
    return Object.values(S.rxCards || {}).some((c) => !c.demo && (c.status === "pending"
      || (c.status === "deferred" && addDaysYMD(c.deferredOn || today, 3) > today)));
  }
  function rxPeriodOf(ymd) {
    if (!S.plan) return null;
    return [S.plan.cur, ...(S.plan.history || [])].filter(Boolean)
      .find((p) => ymd >= p.start && ymd <= rxEnd(p)) || null;
  }
  /// 集章过去日：方案计划的打卡按本期演示数据覆盖采样，保证集章页、章卡、满日三处一致
  function rxOverlayPastDone(ymd, base) {
    if (!rxOn()) return base;
    const p = rxPeriodOf(ymd);
    if (!p) return base;
    const sched = rxScheduled(p, ymd);
    sched.forEach((id) => base.delete(id));
    rxDoneIds(p, ymd, sched).forEach((id) => base.add(id));
    return base;
  }
  function rxMostMissed(p) {
    const today = rxToday();
    const miss = {};
    for (let i = 0; i < 7; i++) {
      const ymd = addDaysYMD(p.start, i);
      if (ymd > today) break;
      const sched = rxScheduled(p, ymd);
      const done = new Set(rxDoneIds(p, ymd, sched));
      sched.forEach((id) => { if (!done.has(id)) miss[id] = (miss[id] || 0) + 1; });
    }
    const top = Object.keys(miss).sort((a, b) => miss[b] - miss[a])[0];
    return top ? rxTask(top) : null;
  }

  /* ── 卡片条目 ── */
  function rxRowOf(op, t, extra) { return { op, id: t.id, cat: t.cat, title: t.title, change: "", time: rxTimeText(t), ...(extra || {}) }; }
  const RX_ADD = {
    soak: { cat: "rest", title: "睡前温水泡脚", change: "15 分钟", h: 21, m: 30, note: "40℃ 左右温水泡脚 15 分钟，放下手机准备入睡", sum: "新增睡前温水泡脚" },
    breath: { cat: "rest", title: "睡前腹式呼吸", change: "5 分钟", h: 21, m: 45, note: "躺平，鼻子慢慢吸气让肚子鼓起，再用嘴慢慢呼出，做 5 分钟", sum: "新增睡前腹式呼吸" },
    nightBp: { cat: "monitoring", title: "晚上测血压", change: "血压 + 心率", h: 20, m: 0, note: "静坐 5 分钟后测血压和心率，复诊时带给医生看", sum: "新增每晚 20:00 测血压" },
  };
  function rxAddRow(key) {
    const a = RX_ADD[key];
    return {
      op: "add", cat: a.cat, title: a.title, change: a.change, time: `每日 ${rxHM(a.h, a.m)}`, sum: a.sum,
      task: { title: a.title, cat: a.cat, h: a.h, m: a.m, note: a.note },
    };
  }
  function rxAspirinRow() {
    const t = rxFind("阿司匹林");
    if (!t) return null;
    return rxRowOf("adjust", t, {
      change: `${rxHM(t.h, t.m)} 空腹 → 08:30 早饭后`, time: "每日 08:30", sum: "阿司匹林改到 08:30",
      patch: { h: 8, m: 30, note: "早饭后半小时温水送服，留意反酸是否好转" },
    });
  }
  function rxPauseWalkRow() {
    const t = rxFind("晚间散步") || liveTasks().find((x) => x.cat === "exercise");
    if (!t) return null;
    return rxRowOf("pause", t, { change: "只停今天这一次，明天照常", sum: `暂停今天${t.title}` });
  }
  function rxAdjustSpec(rows) {
    const list = rows.filter(Boolean);
    return list.length ? { kind: "adjust", rows: list } : null;
  }
  function rxNewCard(spec) {
    if (!S.rxCards) S.rxCards = {};
    const id = spec.id || `rxc${Date.now().toString(36)}${Math.random().toString(36).slice(2, 5)}`;
    if (S.rxCards[id]) return S.rxCards[id];
    S.rxCards[id] = { status: "pending", ...spec, id };
    return S.rxCards[id];
  }
  function rxBaseTasks(prev) {
    const todayIds = new Set(liveTasks().map((t) => t.id));
    const ids = prev && prev.ids && prev.ids.length ? prev.ids : RX_DEFAULT_IDS;
    return ids.filter((id) => todayIds.has(id)).map(rxTask).filter(Boolean);
  }
  /// 下一期怎么调（AI 起草方向，医生审核）：满日 ≥6 且不吃力 → 适度加量（有运动禁忌不加运动）；4–5 或吃力 → 维持；≤3 → 减压
  function rxBuildPlanCard(no, prev, full, feeling) {
    const base = rxBaseTasks(prev);
    const rows = [];
    const has = (kw) => SEED.some((t) => t.title.includes(kw));
    const hits = contraindicationHits();
    const contraText = hits.length ? (hits.find((h) => h !== CONTRA_AGE_ITEM) ? `病历里有${hits.find((h) => h !== CONTRA_AGE_ITEM)}` : "年龄超过 70 岁") : "";
    const relax = !has("泡脚") ? "soak" : !has("腹式呼吸") ? "breath" : null;
    let why;
    if (!prev) {
      if (relax) rows.push(rxAddRow(relax));
      why = `以你现在的计划为底，先把每天吃药、测血压稳住${relax ? "，再加一项睡前放松" : ""}；7 天一期，做完我们一起复盘。`;
    } else if (full >= 6 && feeling !== "有点吃力") {
      const walk = base.find((t) => t.cat === "exercise");
      if (walk && !hits.length) {
        rows.push(rxRowOf("adjust", walk, { change: "慢走 20 → 25 分钟", sum: `${walk.title}加到 25 分钟`, patch: { note: "饭后半小时慢走 25 分钟，微微出汗、还能说话的节奏" } }));
        why = `上期满日 ${full}/7，感觉${feeling || "不错"}，散步后没有胸闷，可以加一点量。`;
      } else {
        if (relax) rows.push(rxAddRow(relax));
        why = `上期满日 ${full}/7，感觉${feeling || "不错"}。${contraText ? `${contraText}，运动量先不加；` : ""}${relax ? "这一期加一项睡前放松，帮助睡得更稳。" : "这一期维持原样，继续保持。"}`;
      }
    } else if (full >= 4 || feeling === "有点吃力") {
      why = `上期满日 ${full}/7${feeling === "有点吃力" ? "，你说有点吃力" : ""}，这一期先维持原量，把节奏稳住。`;
    } else {
      const miss = (prev && rxMostMissed(prev)) || base.find((t) => t.title.includes("阿托伐他汀"));
      if (miss && !(miss.h === 20 && miss.m === 0)) {
        rows.push(rxRowOf("adjust", miss, { change: `${rxHM(miss.h, miss.m)} → 20:00 晚饭后`, time: "每日 20:00", sum: `${rxShort(miss.title)}改到 20:00`, patch: { h: 20, m: 0 } }));
      }
      why = `上期满日 ${full}/7，这一期少一点压力：把最常漏的那项挪到更容易做到的时间。`;
    }
    const touched = new Set(rows.map((r) => r.id).filter(Boolean));
    base.filter((t) => !touched.has(t.id)).forEach((t) => rows.push(rxRowOf("keep", t)));
    return { kind: "plan", no, rows, why };
  }

  /* ── 采纳：与手动建计划走同一套健康计划数据，带「医嘱」来源标；只记 1 条操作记录 ── */
  function rxApplyRow(r) {
    const today = rxToday();
    const t = r.id ? rxTask(r.id) : null;
    if (r.op === "keep") return t ? t.id : null;
    if (r.op === "adjust") {
      if (!t) return null;
      Object.assign(t, r.patch || {});
      S.rx[t.id] = true;
      sortSeed();
      return t.id;
    }
    if (r.op === "add") {
      const same = SEED.find((x) => x.title === r.task.title);
      if (same) {
        Object.assign(same, r.task);
        S.rx[same.id] = true;
        r.id = same.id;
        sortSeed();
        return same.id;
      }
      const id = nextTaskId();
      SEED.push({ id, cycle: true, rule: "daily", duration: "oneYear", onceDate: today, ...r.task });
      S.rx[id] = true;
      r.id = id;
      sortSeed();
      return id;
    }
    if (!t) return null;
    // 暂停今天 = 删除本次计划；停用 = 删除本次和后续（以前的打卡保留）
    if (r.op === "pause") { addSkipped(today, t.id); delete S.completed[t.id]; delete S.completedBy[t.id]; return t.id; }
    if (r.op === "stop") { t.endDate = addDaysYMD(today, -1); delete S.completed[t.id]; delete S.completedBy[t.id]; return t.id; }
    return null;
  }
  function rxFinalizeCur(feeling, review) {
    const p = S.plan.cur;
    if (!p) return null;
    const stats = JSON.parse(JSON.stringify(rxStats(p)));
    const entry = { ...p, end: rxEnd(p), stats, feeling: feeling || "", review: review || "", at: Date.now() };
    S.plan.history.unshift(entry);
    S.plan.cur = null;
    return entry;
  }
  function rxAdoptPlan(card) {
    if (!card || card.status === "adopted") return;
    const today = rxToday();
    // 案例 8 / 开发菜单演示：新一期开始前把手上这一期定格进期章墙
    if (S.plan.cur) rxFinalizeCur(card.carryFeeling || "", "");
    const ids = [];
    const cnt = { adjust: 0, add: 0, stop: 0 };
    card.rows.forEach((r) => {
      const id = rxApplyRow(r);
      if (id && r.op !== "stop" && r.op !== "pause") ids.push(id);
      if (cnt[r.op] != null) cnt[r.op] += 1;
    });
    S.plan.cur = {
      no: card.no, start: today, ids: [...new Set(ids)],
      rows: card.rows.filter((r) => r.op !== "stop" && r.op !== "pause").map((r) => ({ op: r.op, id: r.id, cat: r.cat, title: r.title, change: r.change || "", time: r.time || "" })),
      why: card.why || "", marks: {}, addedOn: {}, selfEdited: {}, fbPrompted: false,
    };
    S.plan.seq = Math.max(S.plan.seq || 0, card.no);
    card.status = "adopted";
    card.start = today;
    // 同时最多一张方案卡：其余没采纳的方案卡作废
    Object.values(S.rxCards).forEach((c) => { if (c !== card && c.kind === "plan" && c.status !== "adopted") c.status = "expired"; });
    const parts = [cnt.adjust && `调整 ${cnt.adjust}`, cnt.add && `新增 ${cnt.add}`, cnt.stop && `停用 ${cnt.stop}`].filter(Boolean);
    logOp("采纳了方案", "哈宝医生", `第 ${card.no} 期康复方案${parts.length ? `（${parts.join("，")}）` : ""}`);
  }
  /// 调整卡：只改本期几项、不重新计期；新增并入本期从明天起计满日；没有进行中的一期时只改健康计划
  function rxAdoptAdjust(card) {
    if (!card || card.status === "adopted") return;
    const p = S.plan.cur;
    const active = rxCurActive();
    const today = rxToday();
    card.rows.forEach((r) => {
      const id = rxApplyRow(r);
      if (id && active && r.op === "add" && !p.ids.includes(id)) {
        p.ids.push(id);
        (p.addedOn = p.addedOn || {})[id] = today;
      }
    });
    card.status = "adopted";
    const first = card.rows[0];
    logOp("采纳了调整", "哈宝医生", `${first.sum || first.title}${card.rows.length > 1 ? ` 等 ${card.rows.length} 项` : ""}`);
  }
  function rxReviewText(p, st, feeling) {
    const miss = rxMostMissed(p);
    const lead = st.medal === "none"
      ? "这一期还没有集到章，没关系，身体要紧，下一期我们一起把节奏找回来。"
      : `这一期集到${RX_MEDAL[st.medal]}，7 天里 ${st.full} 天全部完成，一共集了 ${st.done}/${st.total} 枚章，做得很好！`;
    const mid = miss ? `「${miss.title}」漏得相对多一点，可以把到点提醒开着，或者请家人到点提醒一声。` : "每一项都做得很稳。";
    const feel = feeling === "有点吃力" ? "你说有点吃力，下一期不加量。" : feeling ? `你说这期感觉${feeling}。` : "";
    return `${lead}${mid}${feel}下一期怎么调，我写在下面的方案里了。`;
  }
  /// 期末反馈：期章进期章墙 → 聊天流依次出现反馈卡（用户侧）→ 复盘回复 → 下一期方案卡
  function rxDoSubmitFeedback(feeling) {
    const p = S.plan.cur;
    if (!p) return null;
    const st = rxStats(p);
    const bp = vitalsWeekAvg();
    const fb = {
      no: p.no, medal: st.medal, full: st.full, done: st.done, total: st.total, feeling,
      bp: bp && bp.sys ? `${bp.sys}/${bp.dia}` : "",
      self: Object.keys(p.selfEdited || {}).map(rxTask).filter(Boolean).map((t) => t.title),
    };
    const review = rxReviewText(p, st, feeling);
    const first = (review.match(/^[^。！]*[。！]/) || [review])[0];
    const entry = rxFinalizeCur(feeling, first);
    logOp("提交了反馈", "哈宝医生", `第 ${p.no} 期 · ${RX_MEDAL[st.medal] || "未集章"} · ${feeling}`);
    const next = rxNewCard(rxBuildPlanCard(Math.max(S.plan.seq || 0, p.no) + 1, entry, st.full, feeling));
    S.plan.seq = next.no;
    S.rxChat.push({ who: "fb", fb });
    S.rxChat.push({ who: "ai", t: review });
    S.rxChat.push({ who: "ai", t: `第 ${next.no} 期康复方案已经制定好，医生已审核。采纳当天就是第 1 天：`, card: next.id });
    S.rxCaseOn = false;
    S.rxCaseStep = null;
    S.rxScrollTo = next.id;
    return next;
  }
  /// 演示：没有进行中的一期时起一期（有待采纳的方案卡就直接采纳它）
  function rxStartDemoPeriod() {
    const pend = rxPendingCard("plan");
    if (pend) { rxAdoptPlan(pend); return; }
    const prev = S.plan.history[0] || null;
    const base = rxBaseTasks(prev);
    const no = Math.max(S.plan.seq || 0, prev ? prev.no : 0) + 1;
    S.plan.cur = {
      no, start: rxToday(), ids: base.map((t) => t.id),
      rows: base.map((t) => ({ op: "keep", id: t.id, cat: t.cat, title: t.title, change: "", time: rxTimeText(t) })),
      why: "按上一期的节奏继续。", marks: {}, addedOn: {}, selfEdited: {}, fbPrompted: false,
    };
    S.plan.seq = no;
  }
  /// 期末反馈自动弹：第 7 天过完后首次回到首页；或第 7 天当天最后一项方案计划打卡后（dayEndOnly，act 尾部检查）
  function rxShouldPrompt(dayEndOnly) {
    if (!rxOn() || !S.enrolled || !S.loggedIn || !S.plan) return false;
    const p = S.plan.cur;
    if (!p || p.fbPrompted || !rxCurEnded()) return false;
    return dayEndOnly ? rxToday() === rxEnd(p) : true;
  }

  /* ── 自由问诊（V0.1）：只答问题、必要时挂调整卡；不记读数、不改报告、不存照片、不打卡 ── */
  function rxFirstPlanSpec() {
    const no = Math.max((S.plan && S.plan.seq) || 0, 0) + 1;
    const rows = [];
    if (!SEED.some((t) => t.title.includes("泡脚"))) rows.push(rxAddRow("soak"));
    liveTasks().slice(0, 5).forEach((t) => rows.push(rxRowOf("keep", t)));
    return {
      kind: "plan", no, rows, demo: false,
      why: "以你现在的计划为底，先把每天吃药、测血压稳住；7 天一期，做完我们一起复盘。",
    };
  }
  function rxRoute(text, hasImage) {
    const q = String(text || "");
    const has = (ws) => ws.some((w) => q.includes(w));
    const bp = q.match(/(\d{2,3})\s*[/／]\s*(\d{2,3})/);
    const sys = bp ? +bp[1] : null;
    const dia = bp ? +bp[2] : null;
    const hrM = q.match(/心率\s*(\d{2,3})|(\d{2,3})\s*(?:bpm|次\/分|次每分)/i);
    const hr = hrM ? +(hrM[1] || hrM[2]) : null;
    const critical = (sys && (sys >= 180 || sys < 90)) || (dia && dia >= 110) || (hr && (hr > 100 || hr < 50));
    if (critical || has(["胸痛", "胸口压", "胸口疼", "冷汗", "晕厥", "眼前发黑", "呼吸困难", "喘不上气"])) {
      return { e120: true, reply: "⚠️ 这很危险！请马上停止一切活动，靠坐休息，叫家人过来，不要自己开车去医院。我先帮你呼叫 120。这次说的读数不会记进血压监测，以测血压打卡或血压计上传为准。" };
    }
    if (q.startsWith("关于这份方案我想问")) {
      return { reply: "方案里每一项都是按你上一期的打卡、血压和感受定的，医生已经审核过。哪一项觉得做不到、时间不顺手，直接告诉我，我帮你出一张调整卡。" };
    }
    if (hasImage) {
      return { reply: "图片我看过了，已经对照着帮你理解上面的内容。这张图只用来回答问题，不会存进身体报告；想把这张单子存进报告，请到身体报告上传。" };
    }
    if (has(["反酸", "烧心", "胃不舒服", "阿司匹林"])) {
      return { reply: "先排除黑便、呕血和剧烈胃痛——如果都没有，多半是空腹吃阿司匹林刺激了胃。建议改到早饭后半小时（08:30）温水送服：", card: rxAdjustSpec([rxAspirinRow()]) };
    }
    if (has(["睡不着", "失眠", "入睡", "睡不好"])) {
      return { reply: "如果没有半夜憋醒、胸口发闷，可以先试试睡前放松：每晚 21:30 用 40℃ 左右的温水泡脚 15 分钟，放下手机准备入睡：", card: rxAdjustSpec([rxAddRow("soak")]) };
    }
    if (has(["感冒", "乏力", "没力气", "发烧"])) {
      return { reply: "身体没力气时别勉强运动。没有胸闷、心跳不快的话，今天好好休息、多喝温水，只暂停今天这一次散步，明天照常：", card: rxAdjustSpec([rxPauseWalkRow()]) };
    }
    if (has(["心慌", "心悸", "晚上测", "倍他乐克", "美托洛尔"])) {
      return { reply: "漏吃的美托洛尔（倍他乐克）不要补双倍，下一顿按时吃。只测早上看不到晚上的变化，建议每晚 20:00 再测一次血压和心率：", card: rxAdjustSpec([rxAddRow("nightBp")]) };
    }
    if (has(["停药", "血脂", "他汀", "低密度"])) {
      return { reply: "装过支架的话，低密度脂蛋白要低于 1.4 mmol/L，没达标前他汀不能停，继续每晚按时吃；肝功能复查时一起看就行。计划不用改。" };
    }
    if (has(["支架", "移位", "问卷", "紧张", "焦虑"])) {
      return { reply: "从你的身体报告看，心脏彩超和复查心电图都正常，支架早已贴牢血管壁，翻身、走路不会移位。紧张时可以试试睡前腹式呼吸：", card: rxAdjustSpec([rxAddRow("breath")]) };
    }
    if (sys && dia) {
      return { reply: `${sys}/${dia} 这个读数我参考了。这里不会替你记进血压监测，请在首页测血压计划打卡时录入，或用绑定的血压计自动上传。` };
    }
    return { reply: "收到。我结合你的计划、打卡和最近的血压看了一下，目前不用改计划，照常打卡就好。哪里不舒服或哪一项做起来吃力，随时告诉我。" };
  }

  /* ── 案例演示（V0.1）：8 个场景；案例对话不写聊天历史，但点卡片「采纳」同样真实生效 ── */
  const RX_CASES = [
    {
      id: "rx1", chip: "早起吃药反酸", out: "调整卡 · 阿司匹林改到早饭后",
      turns: [
        { who: "user", t: "哈宝医生，我每天早上空腹吃阿司匹林，最近一上午胃里都有点反酸烧心，这样要紧吗？" },
        { who: "ai", t: "先确认几件事：最近大便颜色正常吗？有没有黑便、呕血，或者剧烈胃痛？" },
        { who: "user", t: "都没有，就是刚起床空腹吃完有点反酸。" },
        { who: "ai", t: "没有黑便、呕血和剧痛，可以先放心。阿司匹林空腹吃容易刺激胃，建议改到早饭后半小时（08:30）温水送服，下次复查再请医生看看要不要配护胃药。我把它整理成了一张调整卡：", card: true },
      ],
      card: () => rxAdjustSpec([rxAspirinRow()]),
    },
    {
      id: "rx2", chip: "晚上睡不着", out: "调整卡 · 新增睡前温水泡脚",
      turns: [
        { who: "user", t: "最近晚上躺下总是翻来覆去睡不着，白天也没精神，有什么办法吗？" },
        { who: "ai", t: "睡不好容易让血压波动。先问一下：半夜会不会喘不上气憋醒、胸口发闷，或者必须垫高枕头才能睡？" },
        { who: "user", t: "那倒没有，呼吸挺顺的，就是脚凉、脑子静不下来。" },
        { who: "ai", t: "没有夜里憋醒和胸闷，心脏这块是平稳的。建议每晚 21:30 用 40℃ 左右的温水泡脚 15 分钟，放下手机准备入睡。可以把它加进本期计划：", card: true },
      ],
      card: () => rxAdjustSpec([rxAddRow("soak")]),
    },
    {
      id: "rx3", chip: "感冒浑身乏力", out: "调整卡 · 暂停今天散步",
      turns: [
        { who: "user", t: "昨晚着凉感冒了，浑身没力气，今天傍晚的散步还要去吗？" },
        { who: "ai", t: "感冒乏力时别勉强运动。现在有没有发烧、胸闷，或者心跳明显变快？" },
        { who: "user", t: "体温正常，也不胸闷，就是困乏，想在家歇一天。" },
        { who: "ai", t: "普通感冒、没有胸闷，今天就好好休息，多喝温水。只暂停今天这一次散步，明天照常；今天的满日也不再要求这一项：", card: true },
      ],
      card: () => rxAdjustSpec([rxPauseWalkRow()]),
    },
    {
      id: "rx4", chip: "下午心慌", out: "调整卡 · 新增每晚 20:00 测血压",
      turns: [
        { who: "user", t: "这两天下午有点心慌，我只在早上测血压，早上都挺正常。昨天早上还忘了吃倍他乐克。" },
        { who: "ai", t: "漏吃的那次不要补双倍，下一顿按时吃就行。心慌一次持续多久？有没有胸痛、头晕或者眼前发黑？" },
        { who: "user", t: "一阵一阵的，几分钟就好，没有胸痛也不头晕。" },
        { who: "ai", t: "只测早上看不到下午和晚上的血压变化。建议每晚 20:00 再测一次血压和心率，下次复诊带给医生看：", card: true },
      ],
      card: () => rxAdjustSpec([rxAddRow("nightBp")]),
    },
    {
      id: "rx5", chip: "血脂好转想停药", out: "纯问诊，不出卡",
      turns: [
        { who: "user", t: "上周复查血脂，低密度脂蛋白降到 1.7 了，比出院时好多了，阿托伐他汀能停了吗？" },
        { who: "ai", t: "进步很明显！不过你装过支架，低密度脂蛋白的目标是低于 1.4 mmol/L，现在 1.7 还没达标。" },
        { who: "user", t: "那我还要一直吃吗？会不会伤肝？" },
        { who: "ai", t: "现在不能停，继续每晚按时吃。他汀的肝功能指标复查时一起查，有异常医生会调整。计划不用改，照常打卡就好。" },
      ],
    },
    {
      id: "rx6", chip: "担心支架移位", out: "调整卡 · 新增睡前腹式呼吸",
      turns: [
        { who: "user", t: "刚填完随访问卷，我最近半夜容易醒，总担心翻身会让支架移位。" },
        { who: "ai", t: "我看了你的身体报告：心脏彩超射血分数 58%，复查心电图也正常。支架装好后早已贴牢血管壁，翻身、走路都不会移位。" },
        { who: "user", t: "听你这么说放心多了，就是躺下还是有点紧张。" },
        { who: "ai", t: "紧张时可以试试腹式呼吸：躺平，用鼻子慢慢吸气让肚子鼓起，再用嘴慢慢呼出，做 5 分钟。可以加进睡前计划：", card: true },
      ],
      card: () => rxAdjustSpec([rxAddRow("breath")]),
    },
    {
      id: "rx7", chip: "血压飙升伴胸痛", out: "不出卡，弹 120 确认",
      turns: [
        { who: "user", t: "我刚量血压 186/112，胸口压着疼，还冒冷汗！" },
        { who: "ai", t: "⚠️ 这很危险！请马上停止一切活动，靠坐休息，叫家人过来，不要自己开车去医院。我现在帮你呼叫 120。", e120: true },
        { who: "user", t: "好，家里人在旁边。" },
        { who: "ai", t: "等救护车时保持坐着、松开衣领，别再走动。这次的读数不会记进血压监测，到医院后以医生测量为准。" },
      ],
    },
    {
      id: "rx8", chip: "期末复盘", out: "期末反馈卡 → 复盘回复 → 下一期方案卡",
      turns: () => {
        const base = S.plan.cur || S.plan.history[0];
        const no = base ? base.no : 1;
        const bp = vitalsWeekAvg();
        return [
          { who: "fb", t: `交第 ${no} 期反馈`, fb: { no, medal: "gold", full: 6, done: 33, total: 35, feeling: "刚好", bp: bp && bp.sys ? `${bp.sys}/${bp.dia}` : "", self: [] } },
          { who: "ai", t: "这一期集到金章，7 天里 6 天全部完成，一共集了 33/35 枚章，做得很好！只有一天晚上的他汀漏了，可以请家人到点提醒一声。散步后没有胸闷，血压也稳在目标里。下一期怎么调，我写在下面的方案里了。" },
          { who: "ai", t: `第 ${no + 1} 期康复方案已经制定好，医生已审核：`, card: true },
        ];
      },
      card: () => {
        const base = S.plan.cur || S.plan.history[0] || null;
        const no = (base ? base.no : 1) + 1;
        return { ...rxBuildPlanCard(no, base || { ids: RX_DEFAULT_IDS }, 6, "刚好"), carryFeeling: "刚好" };
      },
    },
  ];
  function rxCaseTurns(item) {
    const turns = typeof item.turns === "function" ? item.turns() : item.turns;
    const cid = `case_${item.id}`;
    return turns.map((t) => (t.card ? { ...t, card: S.rxCards[cid] ? cid : undefined } : { ...t }));
  }
  /// 载入案例：已采纳过的案例卡保持「已采纳」；没采纳的按当前计划重新起草。返回是否需要弹 120
  function applyRxCase(item, stepByStep) {
    if (!item) return false;
    const cid = `case_${item.id}`;
    if (item.card && (!S.rxCards[cid] || S.rxCards[cid].status !== "adopted")) {
      delete S.rxCards[cid];
      const spec = item.card();
      if (spec) rxNewCard({ ...spec, id: cid, demo: true });
    }
    S.rxCaseOn = true;
    S.rxCaseId = item.id;
    S.plusPanel = false;
    S.consultKeyboard = false;
    S.pendingImage = false;
    S.rxPinOpen = false;
    const turns = rxCaseTurns(item);
    if (stepByStep) {
      S.rxCaseStep = 0;
      S.rxCaseMsgs = [];
      S.chatDraft = turns[0] ? turns[0].t : "";
      return false;
    }
    S.rxCaseStep = null;
    S.rxCaseMsgs = turns;
    S.chatDraft = "";
    return turns.some((t) => t.e120);
  }
  function rxSend() {
    const v = (S.chatDraft || "").trim();
    if (!v && !S.pendingImage) return;
    S.consultOpen = true;
    const item = S.rxCaseOn ? RX_CASES.find((c) => c.id === S.rxCaseId) : null;
    if (item && S.rxCaseStep != null) {
      // 模拟提问：每点一次「发送」走一轮（用户这句 + 其后哈宝医生的回复）
      const turns = rxCaseTurns(item);
      let i = S.rxCaseStep;
      const u = turns[i];
      if (u) S.rxCaseMsgs.push(u.who === "fb" ? u : { ...u, t: v || u.t });
      i += 1;
      let e120 = false;
      while (i < turns.length && turns[i].who !== "user" && turns[i].who !== "fb") {
        S.rxCaseMsgs.push(turns[i]);
        if (turns[i].e120) e120 = true;
        i += 1;
      }
      if (i < turns.length) { S.rxCaseStep = i; S.chatDraft = turns[i].t; } else { S.rxCaseStep = null; S.chatDraft = ""; }
      S.pendingImage = false;
      S.rxScrollBottom = true;
      if (e120) openOverlay("e120"); else render();
      return;
    }
    // 自由问诊：写进真实对话（离开案例演示）
    S.rxCaseOn = false;
    S.rxCaseStep = null;
    const hadImage = !!S.pendingImage;
    const text = v || "请帮我看看这些图片";
    S.rxChat.push({ who: "user", t: `${hadImage ? "（图片）" : ""}${text}` });
    const r = rxRoute(text, hadImage);
    const card = r.card ? rxNewCard(r.card) : null;
    S.rxChat.push({ who: "ai", t: r.reply, card: card ? card.id : undefined, e120: r.e120 || undefined });
    S.chatDraft = "";
    S.pendingImage = false;
    S.rxScrollBottom = true;
    if (r.e120) openOverlay("e120"); else render();
  }
  /// 进哈宝医生（V0.1）：从血压监测 / 身体报告进来先归档旧对话、新对话首行灰字「已参考：…」；
  /// 已有真实对话 → 自由提问；没有对话 → 默认打开案例
  function ensureRxOnEnter(prev) {
    S.plusPanel = false;
    S.consultKeyboard = false;
    S.rxPinOpen = false;
    const fromVitals = prev === "vitals" || prev === "vitals-detail";
    const fromReport = ["report", "report-sub", "followup", "analysis"].includes(prev);
    if (fromVitals || fromReport) {
      const keep = S.rxChat.filter((m) => m.card && S.rxCards[m.card] && (S.rxCards[m.card].status === "pending" || S.rxCards[m.card].status === "deferred"));
      if (S.rxChat.some((m) => m.who !== "ref")) S.rxArchive.unshift({ at: Date.now(), msgs: S.rxChat.slice() });
      S.rxChat = [{ who: "ref", t: fromVitals ? "已参考：本周血压评估" : "已参考：身体报告综合结论" }, ...keep];
      S.rxCaseOn = false;
      S.rxCaseStep = null;
      S.chatDraft = "";
      return;
    }
    if (S.rxChat.length) { S.rxCaseOn = false; S.rxCaseStep = null; return; }
    if (!S.rxCaseOn || (!S.rxCaseMsgs.length && S.rxCaseStep == null)) {
      applyRxCase(RX_CASES.find((c) => c.id === S.rxCaseId) || RX_CASES[0], false);
    }
  }
  function rxAfterRender() {
    if (S.screen !== "consult") return;
    const sc = app().querySelector(".rx-chat");
    if (sc && S.rxScrollTo) {
      const el = document.getElementById(`rxcard-${S.rxScrollTo}`);
      if (el) {
        const scale = sc.getBoundingClientRect().width / Math.max(sc.clientWidth, 1) || 1;
        sc.scrollTop += (el.getBoundingClientRect().top - sc.getBoundingClientRect().top) / scale - 8;
      }
    } else if (sc && S.rxScrollBottom) {
      sc.scrollTop = sc.scrollHeight;
    }
    S.rxScrollTo = null;
    S.rxScrollBottom = false;
    if (S.rxFocus) {
      S.rxFocus = false;
      const d = document.getElementById("chat-draft");
      if (d) {
        d.focus();
        const n = d.value.length;
        try { d.setSelectionRange(n, n); } catch (_) { /* 部分输入法不支持 */ }
      }
    }
  }

  /* ── 渲染（V0.1） ── */
  function rxIco(cat) {
    return `<span class="rx-ico${cat === "appointment" ? " appt" : ""}"><img src="${A.task[cat] || A.task.monitoring}" alt="" /></span>`;
  }
  function rxMedalHTML(medal, size) {
    const s = size || 40;
    const on = medal && medal !== "none";
    return `<span class="rx-medal ${on ? medal : "none"}" style="width:${s}px;height:${s}px">${on ? `<img src="${A.stamp.bloom}" alt="${RX_MEDAL[medal]}" />` : ""}</span>`;
  }
  function rxRowHTML(r) {
    return `<div class="rx-row">
      <span class="rx-tag ${r.op}">${RX_OP[r.op]}</span>
      ${rxIco(r.cat)}
      <span class="rx-name"><b>${esc(r.title)}</b>${r.change ? `<em>${esc(r.change)}</em>` : ""}</span>
      ${r.time ? `<span class="rx-time">${r.time}</span>` : ""}
    </div>`;
  }
  function rxCardHTML(c) {
    if (!c) return "";
    const isPlan = c.kind === "plan";
    const name = isPlan ? `第 ${c.no} 期康复方案` : "计划调整";
    if (c.status === "expired") {
      return `<div class="rx-card-fold" id="rxcard-${c.id}"><span class="grow">${name} · 已由新一期替代</span></div>`;
    }
    if (c.status === "deferred" && !c.open) {
      return `<div class="rx-card-fold" id="rxcard-${c.id}"><span class="grow">${name} · 已暂缓</span><button class="rx-link" data-act="rxCardOpen" data-card="${c.id}" type="button">展开 ›</button></div>`;
    }
    const adopted = c.status === "adopted";
    const changes = c.rows.filter((r) => r.op !== "keep");
    const keeps = c.rows.filter((r) => r.op === "keep");
    const keepNames = keeps.slice(0, 3).map((r) => rxShort(r.title)).join("、");
    const keepHTML = !keeps.length ? "" : c.keepOpen
      ? `${keeps.map(rxRowHTML).join("")}<button class="rx-link rx-keep-fold" data-act="rxKeepToggle" data-card="${c.id}" type="button">收起</button>`
      : `<div class="rx-row keep"><span class="rx-tag keep">保留</span><span class="rx-name"><b>${esc(keepNames)}${keeps.length > 3 ? " 等" : " 共"} ${keeps.length} 项</b></span><button class="rx-link" data-act="rxKeepToggle" data-card="${c.id}" type="button">展开 ›</button></div>`;
    const sub = isPlan ? `<div class="rx-card-sub">7 天 · ${rxRangeText(c.start || rxToday())} · 医生已审核</div>` : "";
    const foot = isPlan
      ? `<div class="rx-why"><b>为什么这样调：</b>${esc(c.why || "")}</div>`
      : `<div class="rx-why plain">从今天起生效 · 以前的打卡记录不变</div>`;
    const btns = adopted
      ? `<div class="rx-btns"><button class="rx-pri done" type="button" disabled>${I.tick}已采纳</button><button class="rx-sec" data-act="${isPlan ? "rxGoStamps" : "rxGoSchedule"}" type="button">${isPlan ? "去看集章" : "去看计划"} ›</button></div>`
      : `<div class="rx-btns"><button class="rx-pri" data-act="rxAdopt" data-card="${c.id}" type="button">${isPlan ? "采纳方案" : "采纳调整"}</button><button class="rx-sec" data-act="rxAsk" data-card="${c.id}" type="button">问问医生</button></div>
        ${isPlan ? `<button class="rx-link rx-later-link" data-act="${c.status === "deferred" ? "rxCardClose" : "rxDefer"}" data-card="${c.id}" type="button">${c.status === "deferred" ? "收起" : "暂不采纳"}</button>` : ""}`;
    return `<div class="rx-card${adopted ? " done" : ""}" id="rxcard-${c.id}">
      <div class="rx-card-head"><img src="${A.logo}" width="24" height="24" alt="" /><span class="grow">哈宝医生 · ${name}</span><span class="rx-state ${c.status}">${RX_CARD_STATE[c.status] || ""}</span></div>
      ${sub}
      <div class="rx-rows">${changes.map(rxRowHTML).join("")}${keepHTML}</div>
      ${foot}
      ${btns}
    </div>`;
  }
  function rxFbCardHTML(fb) {
    if (!fb) return "";
    const items = [
      ["期章", fb.medal && fb.medal !== "none" ? RX_MEDAL[fb.medal] : "未集章"],
      ["满日", `${fb.full}/7`],
      ["打卡", `已集 ${fb.done}/${fb.total} 章`],
      ["感受", fb.feeling || "未作答"],
      fb.bp ? ["本期血压均值", `${fb.bp} mmHg`] : null,
      fb.self && fb.self.length ? ["自行调整过", fb.self.join("、")] : null,
    ].filter(Boolean);
    return `<div class="rx-fb">
      <div class="rx-fb-head">${rxMedalHTML(fb.medal, 34)}<b>第 ${fb.no} 期反馈</b></div>
      <div class="rx-fb-list">${items.map(([k, v]) => `<div><span>${k}</span><b>${esc(v)}</b></div>`).join("")}</div>
    </div>`;
  }
  function rxMsgHTML(m) {
    if (m.who === "ref") return `<div class="rx-ref">${esc(m.t)}</div>`;
    if (m.who === "fb") return rxFbCardHTML(m.fb);
    if (m.who === "user") return `<div class="bubble user">${esc(m.t)}</div>`;
    return `<div class="bubble ai">${esc(m.t)}</div>
      ${m.e120 ? `<button class="rx-e120" data-act="call120" type="button">${I.phone}呼叫 120</button>` : ""}
      ${m.card ? rxCardHTML(S.rxCards[m.card]) : ""}`;
  }
  /// 本期计划清单：withToday = 置顶条（带今日打卡态）；否则集章页（带医嘱标）
  function rxPlanListHTML(p, withToday) {
    const today = rxToday();
    const sched = new Set(rxScheduled(p, today));
    const rows = (p.rows || []).slice();
    (p.ids || []).forEach((id) => {
      if (rows.some((r) => r.id === id)) return;
      const t = rxTask(id);
      if (t) rows.push({ op: "add", id, cat: t.cat, title: t.title, time: rxTimeText(t) });
    });
    return rows.map((r) => {
      const t = r.id ? rxTask(r.id) : null;
      const title = t ? t.title : r.title;
      const time = t ? rxTimeText(t) : r.time;
      const tail = withToday
        ? (!t || !sched.has(t.id) ? `<span class="rx-st off">今天不排</span>` : S.completed[t.id] ? `<span class="rx-st done">${I.tick}已打卡</span>` : `<span class="rx-st">未打卡</span>`)
        : (t && S.rx && S.rx[t.id] ? `<span class="rx-chip">医嘱</span>` : "");
      return `<div class="rx-plan-row"><span class="rx-tag ${r.op}">${RX_OP[r.op]}</span>${rxIco(r.cat)}<span class="rx-name"><b>${esc(title)}</b><em>${time || ""}</em></span>${tail}</div>`;
    }).join("");
  }
  function rxPinHTML() {
    const p = S.plan && S.plan.cur;
    const today = rxToday();
    if (p && rxCurEnded()) {
      return `<div class="rx-pin-wrap"><button class="rx-pin" data-act="rxOpenFeedback" type="button"><span class="rx-pin-emo">🏅</span><b class="grow">第 ${p.no} 期已结束，说说这期感觉</b><span class="rx-pin-go">交反馈</span></button></div>`;
    }
    if (p) {
      const st = rxStats(p);
      const dots = st.days.map((d) => `<i class="${d.state}${d.ymd === today ? " today" : ""}"></i>`).join("");
      return `<div class="rx-pin-wrap${S.rxPinOpen ? " open" : ""}">
        <button class="rx-pin" data-act="rxPinToggle" type="button">
          <span class="rx-pin-emo">🩺</span>
          <span class="grow rx-pin-main"><b>第 ${p.no} 期康复方案 · 第 ${rxDayIndex(p, today)} 天</b><span class="rx-pin-sub">满日 ${st.full}/7<span class="rx-dots">${dots}</span></span></span>
          <span class="rx-pin-chev">${S.rxPinOpen ? I.chevU : I.chevD}</span>
        </button>
        ${S.rxPinOpen ? `<div class="rx-pin-list">${rxPlanListHTML(p, true)}<button class="rx-link rx-pin-more" data-act="rxGoStamps" type="button">去看集章 ›</button></div>` : ""}
      </div>`;
    }
    const pend = rxPendingCard("plan");
    if (pend) {
      return `<div class="rx-pin-wrap"><button class="rx-pin" data-act="rxGoCard" data-card="${pend.id}" type="button"><span class="rx-pin-emo">📮</span><b class="grow">第 ${pend.no} 期康复方案待采纳</b><span class="rx-pin-go">去看看</span></button></div>`;
    }
    return `<div class="rx-pin-wrap"><button class="rx-pin muted" data-act="rxFocusInput" type="button"><span class="rx-pin-emo">🩺</span><b class="grow">还没有康复方案 · 和哈宝医生聊聊</b></button></div>`;
  }
  function rxCasePanelHTML() {
    const isFirst = S.rxCaseId === "rx0";
    const item = isFirst
      ? { id: "rx0", chip: "制定第 1 期", out: "方案卡 · 第 1 期康复方案" }
      : (RX_CASES.find((c) => c.id === S.rxCaseId) || RX_CASES[0]);
    const idx = RX_CASES.indexOf(item);
    const curLabel = idx >= 0 ? `${idx + 1} · ${item.chip}` : item.chip;
    const step = S.rxCaseStep != null;
    const fold = !!S.rxCaseFold;
    return `<div class="rx-case-panel${fold ? " fold" : ""}">
      <div class="rx-case-head">
        <b>问诊案例</b>
        ${fold
          ? `<span class="rx-case-cur grow">${curLabel}</span>`
          : `<div class="rx-seg"><button class="${step ? "" : "on"}" data-act="rxCaseMode" data-mode="all" type="button">全部展现</button><button class="${step ? "on" : ""}" data-act="rxCaseMode" data-mode="step" type="button">模拟提问</button></div>`}
        <button class="rx-fold" data-act="rxCaseFold" type="button" aria-label="${fold ? "展开案例" : "收起案例"}">${fold ? I.chevD : I.chevU}</button>
      </div>
      ${fold ? "" : `${!S.plan.cur && !rxPendingCard("plan") ? `<button class="rx-first-plan" data-act="rxFirstPlan" type="button">${I.docPlus || "＋"}<span>还没有方案 · 制定第 1 期康复方案</span><b>去制定 ›</b></button>` : ""}<div class="rx-case-chips">${RX_CASES.map((c, i) => `<button class="${c.id === item.id ? "on" : ""}" data-act="rxLoadCase" data-case="${c.id}" type="button"><i>${i + 1}</i>${c.chip}</button>`).join("")}</div>
      <div class="rx-case-out">产出：${item.out}</div>`}
    </div>`;
  }
  function rxConsultHTML() {
    const caseOn = !!S.rxCaseOn;
    const msgs = caseOn ? (S.rxCaseMsgs || []) : (S.rxChat || []);
    const canSend = consultCanSend();
    const plusItem = (act, icon, label) =>
      `<button class="plus-item" type="button" data-act="${act}"><span>${icon}</span>${label}</button>`;
    const rightCaps = `<div class="flex center gap6">
      <button class="cap${caseOn ? " on-blue" : ""}" data-act="rxToggleCase" type="button" style="padding:0 11px;gap:4px">✦案例</button>
    </div>`;
    const empty = caseOn
      ? `<div class="island-card ta-c" style="padding:14px 16px;margin-top:8px">
          <div class="s15 fb t">已就绪：点输入框右侧「发送」开始第 1 轮提问</div>
          <div class="s13 t-sec mt4">输入框里已预填患者的第 1 句话</div>
        </div>`
      : `<div class="island-card ta-c" style="padding:16px;margin-top:12px">
          <img src="${A.logo}" width="64" height="64" alt="" />
          <h2 class="s21 fb t mt8">你好，这里是哈宝医生</h2>
          <p class="s16 t-sec">有不适、用药疑问，或想调整计划，都可以问我</p>
        </div>`;
    return `
      <div class="page rel${S.consultKeyboard ? " consult-kb" : ""}${S.plusPanel ? " consult-panel" : ""}">
        ${navBar(cap(I.chevL, "返回"), `<span class="flex center gap6"><img src="${A.logo}" width="24" height="24" alt="" />哈宝医生</span>`, rightCaps)}
        ${rxPinHTML()}
        ${caseOn ? rxCasePanelHTML() : ""}
        <div class="scroll px20 grow rx-chat">
          ${msgs.length ? msgs.map(rxMsgHTML).join("") : empty}
        </div>
        ${S.pendingImage ? `<div class="consult-pending">已选 1 张图片，补充一句再发送</div>` : ""}
        <div class="listen-hint" id="listen-hint" hidden></div>
        <div class="chat-row rx-chat-row">
          <button class="chat-mode" data-act="toggleInput" type="button" aria-label="${S.inputMode === "text" ? "切换为长按说话" : "切换为文字输入"}">${S.inputMode === "text" ? I.mic : I.kbd}</button>
          ${S.inputMode === "text" ? `
          <div class="chat-well">
            <input class="chat-text" id="chat-draft" placeholder="输入问题" value="${S.chatDraft.replace(/"/g, "&quot;")}" />
            <button class="chat-send" id="consult-send" type="button" data-act="sendChat"${canSend ? "" : " hidden"}>发送</button>
          </div>` : `
          <button class="chat-hold" id="chat-hold" type="button">${I.mic}<span>长按说话</span></button>`}
          <button class="chat-plus" data-act="togglePlus" type="button" aria-label="${S.plusPanel ? "关闭功能" : "更多功能"}">${S.plusPanel ? I.x : I.plus}</button>
        </div>
        <div class="dock-slot">
          <div class="fake-kb dock-face" aria-hidden="true">
            ${[10, 9, 7].map((n) => `<div class="kb-row">${"<i></i>".repeat(n)}</div>`).join("")}
            <div class="kb-row"><i class="wide"></i></div>
          </div>
          <div class="plus-panel dock-face">
            ${plusItem("consultCamera", I.camLine, "拍照")}
            ${plusItem("consultAlbum", I.folder, "相册")}
          </div>
        </div>
      </div>`;
  }
  function rxHistoryHTML() {
    const all = [...(S.rxArchive || []).slice().reverse().flatMap((a) => a.msgs), ...(S.rxChat || [])].filter((m) => m.who !== "ref");
    const text = (m) => (m.who === "fb" ? `【期末反馈】第 ${m.fb.no} 期 · ${RX_MEDAL[m.fb.medal] || "未集章"} · ${m.fb.feeling || "未作答"}` : m.t);
    return `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "历史记录")}
        ${all.length ? `
        <div class="scroll px20" style="padding-top:8px">
          <div class="s18 fb t mb8">今天</div>
          ${all.map((m) => {
            const c = m.card && S.rxCards[m.card];
            return `<div class="bubble ${m.who === "ai" ? "ai" : "user"}">${esc(text(m))}${c ? `<div class="s13 mt4">【${c.kind === "plan" ? `第 ${c.no} 期康复方案` : "计划调整"} · ${RX_CARD_STATE[c.status] || ""}】</div>` : ""}</div>`;
          }).join("")}
        </div>` : `
        <div class="grow col center" style="padding:0 28px">
          <div class="hist-empty-ico">${I.clock}</div>
          <div class="s21 fb t mt16">还没有历史记录</div>
          <p class="s16 t-sec ta-c mt8">问过的话会按日期自动出现在这里，一直保留</p>
        </div>`}
      </div>`;
  }

  /* ── 今日集章：方案章卡 / 期章墙 / 海报一行 ── */
  function rxCheerText(st) {
    const today = rxToday();
    const open = st.days.filter((d) => d.ymd > today || (d.ymd === today && d.state !== "full" && d.state !== "rest")).length;
    if (st.full >= 6) return "本期金章已到手，继续保持";
    if (6 - st.full <= open) return `再集满 ${6 - st.full} 天，本期拿「金章」`;
    if (st.full >= 4) return "本期银章已到手，继续保持";
    if (4 - st.full <= open) return `再集满 ${4 - st.full} 天拿「银章」`;
    return st.anyDone ? "本期铜章已到手，继续加油" : "今天打一次卡，本期就有「铜章」";
  }
  /// mode：live 进行中 / fb 已结束待交反馈 / next 已交反馈、下一期待采纳 / past 看历史日
  function rxPeriodCardHTML(p, sel, mode, pend) {
    const st = rxStats(p);
    const today = rxToday();
    const wk = "日一二三四五六";
    const cells = st.days.map((d) => {
      const dt = parseYMD(d.ymd);
      const ico = d.state === "full" ? `<img src="${A.stamp.bloom}" alt="满日" />`
        : d.state === "part" ? `<i class="rx-half"></i>`
        : d.state === "rest" ? `<span class="rx-rest">休</span>`
        : `<i class="rx-empty"></i>`;
      const can = d.ymd <= today && d.ymd >= STAMP_FIRST_YMD;
      return `<button class="rx-day${d.ymd === today ? " today" : ""}${d.ymd === sel ? " sel" : ""}" type="button"${can ? ` data-act="pickStampDay" data-ymd="${d.ymd}"` : " disabled"}>
        <span class="wk">${wk[dt.getDay()]}</span><span class="ic">${ico}</span><span class="dt">${dt.getMonth() + 1}/${dt.getDate()}</span>
      </button>`;
    }).join("");
    let foot;
    if (mode === "live") {
      foot = `<div class="rx-sc-foot">
          <span class="grow rx-cheer">${rxCheerText(st)}</span>
          <button class="rx-link" data-act="rxStampPlanToggle" type="button">本期计划 ${S.rxStampPlanOpen ? I.chevU : "›"}</button>
        </div>
        ${S.rxStampPlanOpen ? `<div class="rx-sc-plan">${rxPlanListHTML(p, false)}</div>` : ""}`;
    } else {
      const label = st.medal === "none" ? "这一期没有集到章" : `拿到「${RX_MEDAL[st.medal]}」`;
      const sub = mode === "fb" ? "本期已结束，说说这期感觉" : `满日 ${st.full}/7${p.feeling ? ` · 感受：${esc(p.feeling)}` : ""}`;
      foot = `<div class="rx-sc-foot">
          ${rxMedalHTML(st.medal, 38)}
          <span class="grow rx-sc-medal"><b>${label}</b><span>${sub}</span></span>
          ${mode === "fb" ? `<button class="rx-pri sm" data-act="rxOpenFeedback" type="button">交反馈</button>` : ""}
        </div>
        ${mode === "next" && pend ? `<button class="rx-sc-next" data-act="rxGoCard" data-card="${pend.id}" type="button"><span class="grow">📮 下一期方案已送达</span><b>去看看 ›</b></button>` : ""}`;
    }
    return `<div class="rx-sc${mode === "live" ? "" : " frozen"}">
      <div class="rx-sc-head"><span class="rx-pin-emo">🩺</span><b class="grow">第 ${p.no} 期康复方案</b><span class="rx-sc-count">本期已集 <b>${st.done}</b>/${st.total} 章</span></div>
      <div class="rx-days">${cells}</div>
      ${foot}
    </div>`;
  }
  function rxWallHTML() {
    const list = (S.plan && S.plan.history) || [];
    if (!list.length) return "";
    return `<div class="rx-wall">
      <div class="rx-wall-head">
        <span class="stamp-period">🏅</span>
        <div class="rx-wall-title grow">我的期章</div>
        <span class="stamp-sec-pill">共 ${list.length} 期</span>
      </div>
      <div class="rx-wall-row">${list.map((h) => {
        const mTitle = RX_MEDAL[h.stats.medal] || "未获章";
        const feel = h.feeling ? ` · 感受：${esc(h.feeling)}` : "";
        return `<button class="rx-wall-item" data-act="rxPeriodSummary" data-no="${h.no}" type="button">
          ${rxMedalHTML(h.stats.medal, 40)}
          <div class="rx-wall-meta">
            <b>第 ${h.no} 期 · ${mTitle}</b>
            <span>满日 ${h.stats.full}/7${feel}</span>
          </div>
          <i class="rx-wall-arr">›</i>
        </button>`;
      }).join("")}</div>
    </div>`;
  }
  /// 集章页顶部（标题行下方、集章内容之上）：VIP 且有方案时出现；看历史日显示该日所在那一期
  function rxStampSectionHTML(sel) {
    if (!rxOn() || !S.plan) return "";
    const today = rxToday();
    const cur = S.plan.cur;
    const inP = (p) => p && sel >= p.start && sel <= rxEnd(p);
    let card = "";
    if (cur && inP(cur) && sel <= today) {
      card = rxPeriodCardHTML(cur, sel, rxCurEnded() ? "fb" : "live");
    } else if (sel === today) {
      const pend = rxPendingCard("plan");
      if (cur && rxCurEnded()) card = rxPeriodCardHTML(cur, sel, "fb");
      else if (pend) {
        card = S.plan.history[0]
          ? rxPeriodCardHTML(S.plan.history[0], sel, "next", pend)
          : `<button class="rx-sc rx-invite" data-act="rxGoCard" data-card="${pend.id}" type="button"><span class="rx-pin-emo">📮</span><b class="grow">哈宝医生为你制定了第 ${pend.no} 期方案</b><span class="rx-link">去采纳 ›</span></button>`;
      }
    } else if (sel >= STAMP_FIRST_YMD) {
      const h = (S.plan.history || []).find(inP);
      if (h) card = rxPeriodCardHTML(h, sel, "past");
    }
    return card + rxWallHTML();
  }
  function rxPosterLine(sel) {
    if (!rxOn()) return "";
    const p = rxPeriodOf(sel);
    if (!p || sel > rxToday() || sel < STAMP_FIRST_YMD) return "";
    const st = rxStats(p);
    const full = st.days.filter((d) => d.ymd <= sel && (d.state === "full" || d.state === "rest")).length;
    const ended = !!p.stats || (p === S.plan.cur && rxCurEnded());
    return `<div class="rx-poster-line">第 ${p.no} 期康复方案 · 第 ${rxDayIndex(p, sel)} 天 · 满日 ${full}/7${ended && st.medal !== "none" ? rxMedalHTML(st.medal, 22) : ""}</div>`;
  }

  function notifySys(svg, onBlue) {
    return `<div class="notify-ico ${onBlue ? "on" : ""}">${svg}</div>`;
  }
  function notifyCat(cat) {
    return `<div class="badge b40 ${cat === "appointment" ? "appt" : ""}"><img src="${A.task[cat]}" alt="" /></div>`;
  }
  function rowToggle(title, on, actName, iconHTML, dataAttr, subtitle) {
    const subHTML = subtitle
      ? `<div style="font-size:12.5px;font-weight:500;color:var(--sec);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${subtitle}</div>`
      : "";
    return `<div class="list-row" style="min-height:58px;padding-top:${subtitle ? "6px" : "0"};padding-bottom:${subtitle ? "6px" : "0"}">
      ${iconHTML || notifySys(I.bell)}
      <div class="grow" style="min-width:0">
        <div class="s20 fb t" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${title}</div>
        ${subHTML}
      </div>
      <button class="toggle ${on ? "on" : ""}" data-act="${actName}"${dataAttr ? ` data-cat="${dataAttr}"` : ""} type="button"><i></i></button>
    </div>`;
  }
  /// 全部打卡 = 六类（含自定义）全开；关一类即显示为关
  function allCatsOn() {
    const ids = Object.keys(CAT).concat((S.customCats || []).map((c) => c.id));
    return ids.length > 0 && ids.every((id) => !!S.cats[id]);
  }
  /// 任一类别开着即算「在通知」；全关才写「已关闭」
  function anyCatOn() {
    const ids = Object.keys(CAT).concat((S.customCats || []).map((c) => c.id));
    return ids.some((id) => !!S.cats[id]);
  }
  /// 到点提醒总闸：通知自己 × 该类别开关。到点提醒串联在这道闸之后
  /// （同 TaskNotificationService 的 gate 判据；未取到类别时不拦，避免误报）
  function gateOpen(cat) {
    if (!cat) return true;
    return S.notifySelf && !!S.cats[cat];
  }
  /// V0.1 / V0.2 出现个人中心 VIP 与哈宝问诊的入口。除个人中心页外，其他地方交互恢复为与 V0.0 一致。
  function genIsV01() { return S.gen === "0.1" || S.gen === "0.2"; }
  function genIsV02() { return S.gen === "0.2"; }
  function genHasVip() { return genIsV01() && !!S.vip; }
  /// 守护人概念重构中：除个人中心页外，其他地方不启用守护人/家属交互分流与通知
  function genHasFamily() { return false; }
  function vipExpiryText() {
    if (!S.vipUntil) return "2027年10月28日";
    const d = new Date(S.vipUntil);
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  }
  function vipCardHTML() {
    const on = !!S.vip;
    const sub = on ? `有效期至 ${vipExpiryText()}` : "¥2400 / 年";
    const cap = on ? "已开通" : "立即开通";
    return `<button class="vip-card" data-go="vip" type="button">
      <div class="well vip-head-well">${I.crown}</div>
      <div class="grow">
        <div style="display:flex;align-items:center;gap:6px">
          <h4>VIP 会员</h4>
          <span class="vip-badge-pill">VIP专享</span>
        </div>
        <p>${sub}</p>
      </div>
      <span class="vip-cap${on ? " on" : ""}">${cap}</span>
    </button>`;
  }
  /// VIP 专区功能行（家属管理 / 硬件管理 / 操作记录）：纯正蓝色视觉设计；未开通时不可点击（家属管理除外：对非 VIP 亦开放进入以接收邀请和互助）
  function vipFeatureRowHTML(id, ico, title, caption) {
    const isFamily = id === "family";
    const locked = !genHasVip() && !isFamily;
    const sub = locked
      ? "开通 VIP 后可用"
      : isFamily && !genHasVip()
        ? hasAnyFamilyOrNoticeFor(S.currentPersonName)
          ? `${caption} · 添加家属需 VIP`
          : "开通 VIP 后可绑定家属"
        : caption;
    const subMuted = locked || (isFamily && !genHasVip() && !hasAnyFamilyOrNoticeFor(S.currentPersonName));
    const tail = locked ? `<span class="vip-lock">${I.crown}</span>` : `<span class="vip-chev">${I.chevR}</span>`;
    const tag = locked ? "div" : "button";
    const attrs = locked
      ? `class="list-row vip-feature-row locked"`
      : `class="list-row vip-feature-row" data-go="${id}" type="button"`;
    return `<${tag} ${attrs}>
      <div class="well vip-well">${ico}</div>
      <div class="grow">
        <div style="display:flex;align-items:center;gap:6px">
          <h4 class="vip-title">${title}</h4>
          <span class="vip-badge-pill">VIP</span>
        </div>
        <p class="${subMuted ? "t-blue-muted" : ""}">${sub}</p>
      </div>
      ${tail}
    </${tag}>`;
  }
  /// 家属管理 / 操作记录 / 硬件管理：未开通时硬件/操作记录不可点击，家属管理始终可进入。
  function profileFeatureRow(id, ico, title, caption) {
    const locked = genIsV01() && !S.vip && (id === "activity" || id === "hardware");
    const sub = locked ? "开通 VIP 后可用" : caption;
    const tail = locked ? `<span class="vip-lock">${I.crown}</span>` : I.chevR;
    if (locked) {
      return `<div class="list-row locked">
        <div class="well">${ico}</div><div class="grow"><h4>${title}</h4><p>${sub}</p></div>${tail}
      </div>`;
    }
    return `<button class="list-row" data-go="${id}" type="button">
      <div class="well">${ico}</div><div class="grow"><h4>${title}</h4><p>${sub}</p></div>${tail}
    </button>`;
  }
  function consultOrbHTML() {
    ensureCareGraph();
    ensureSeededCareNotices();
    return `<div class="orb ai" data-go="consult" style="position:relative"><img src="${A.logo}" alt="哈宝医生" /></div>`;
  }
  function consultCtaHTML(extraStyle) {
    const style = extraStyle ? `${extraStyle};` : "";
    return `<button class="cta" style="${style}" data-go="consult" type="button"><img src="${A.logo}" width="30" height="30" alt="" />进入哈宝医生</button>`;
  }
  const CONSULT_VIP_GREETING = "你好，我是哈宝医生！有身体不适、用药疑问或检查报告需要解读，现在都可以直接发消息问我，请问有什么可以帮您？";
  function consultVipCardHTML() {
    const isVip = genHasVip();
    return `
      <div class="consult-vip-card">
        <div class="consult-vip-head">
          <span class="consult-vip-ico">${I.crown}</span>
          <span class="consult-vip-tag">哈宝 VIP 专属服务</span>
          <span class="consult-vip-state${isVip ? " on" : ""}">${isVip ? "已开通" : "未开通"}</span>
        </div>
        <div class="consult-vip-title">需购买 VIP 才能使用哈宝问诊</div>
        <div class="consult-vip-desc">哈宝医生提供全年不限次数的在线问诊、用药与不适解答及报告解读服务。请先购买 VIP 会员（¥2400 / 年）后再使用哈宝问诊。</div>
        <button class="consult-vip-btn${isVip ? " on" : ""}" data-go="vip" type="button">${I.crown}<span>${isVip ? "已开通 VIP · 查看权益 ›" : "去购买 VIP 会员 ›"}</span></button>
      </div>`;
  }
  /* ── 家属代操作归属（V10.57）─────────────────────────────
     写入那一刻的身份 = 这条记录的操作人；只有 V0.1 有家属身份，故标记只在这一代际成立。
     本人写入不落键（与存量 / 种子数据字节一致），标记是「读记录」而不是「读界面」。 */
  /* V10.147 操作记录：5W1H 大一统规则字段（真机 ActivityLog.record(_:at:how:)）。
     When = at；Who = actor；Where = place；What = action；How = how（具体对象与变化结果，一句话呈现）。 */
  function opNormalizeHow(action, howOrLines) {
    if (typeof howOrLines === "string") return howOrLines.trim();
    const clean = (howOrLines || []).filter((l) => l && l[1]);
    if (!clean.length) return action === "提交了问卷" ? "随访问卷" : "";
    if (clean.length === 1) {
      return clean[0][0] === "计划" && clean[0][1] === "本次未动" ? "计划本次未动" : clean[0][1];
    }
    if (clean[0][0] === "计划") {
      const extras = clean.slice(1).map(([k, v]) => (k === "原计划" ? `原计划${v}` : v));
      return `${clean[0][1]}（${extras.join("，")}）`;
    }
    if (clean.length === 2 && clean[0][0] === "散步" && clean[1][0] === "打卡") {
      return `${clean[0][1]}（${clean[1][1]}）`;
    }
    if (clean.length === 2 && clean[0][0] === "资料" && (clean[1][0] === "计划" || clean[1][0] === "打卡")) {
      const suffix = clean[1][0] === "计划" && clean[1][1] === "本次未动" ? "计划本次未动" : clean[1][1];
      return `${clean[0][1]}（${suffix}）`;
    }
    if (action === "生成了运动计划") return clean.map(([, v]) => v).join("；");
    return clean.map(([k, v]) => `${k}：${v}`).join("；");
  }
  function logOp(action, place, howOrLines) {
    if (!S.ops) S.ops = [];
    ensureCareGraph();
    const normalizedAction = (action === "提醒了患者" || action === "提醒患者") ? "提醒了" : action;
    const curPerson = S.currentPersonName || S.name || "李建国";
    const targetPerson = isProfileContextScreen(S.screen)
      ? curPerson
      : (activePersonName() || curPerson);
    const isProxyOrRemind = (curPerson !== targetPerson) || (genHasFamily() && S.role === "family") || normalizedAction === "提醒了";
    let actor = curPerson;
    let actorId = null;
    if (isProxyOrRemind) {
      const bond = (S.careBonds || []).find((b) => b.confirmed && (
        (b.guardianName === curPerson && b.wardName === targetPerson) ||
        (b.guardianName === actor)
      ));
      if (bond) actorId = bond.id;
      else {
        const member = (S.family || []).find((m) => m.id === S.actorId || m.name === curPerson) || (S.family || [])[0];
        if (member) { actorId = member.id; }
      }
    }
    const role = isProxyOrRemind ? "family" : "patient";
    const how = opNormalizeHow(normalizedAction, howOrLines);
    // 取消打卡覆盖当天那条同计划的「打卡了」，不新增一条（V10.113）
    if (normalizedAction === "取消了打卡" && how) {
      const hit = S.ops.find((op) => op.action === "打卡了"
        && toYMD(new Date(op.at)) === toYMD(new Date())
        && (!op.targetName || op.targetName === targetPerson)
        && (op.how === how || String(op.how || "").indexOf(`${how}（`) === 0));
      if (hit) {
        hit.action = normalizedAction;
        hit.at = Date.now();
        hit.place = place || "";
        hit.role = role;
        hit.actor = actor;
        hit.actorId = actorId;
        hit.targetName = targetPerson;
        hit.how = how;
        hit.notifiedNames = [];
        S.ops.sort((a, b) => b.at - a.at);
        const mirrorNames = new Set([actor, targetPerson]);
        mirrorNames.forEach((pName) => {
          if (!pName || pName === S.boundPersonKey) return;
          const b = ensurePersonStore(pName);
          const mHit = (b.ops || []).find((x) => x.id === hit.id);
          if (mHit) {
            Object.assign(mHit, { ...hit });
            b.ops.sort((x, y) => y.at - x.at);
          }
        });
        return;
      }
    }
    const notifiedNames = pushConsultNoticeFromOp(role, actor, targetPerson, normalizedAction, place || "", how) || [];
    const opItem = {
      id: `op${Date.now()}${Math.random().toString(36).slice(2, 6)}`,
      at: Date.now(),
      role,
      actor,
      actorId,
      targetName: targetPerson,
      action: normalizedAction,
      place: place || "",
      how,
      notifiedNames,
    };
    S.ops.unshift(opItem);
    if (S.ops.length > 300) { S.ops.length = 300; S.opDropped = true; }
    const mirrorTargets = new Set([actor, targetPerson, ...(notifiedNames || [])]);
    mirrorTargets.forEach((pName) => {
      if (!pName || pName === S.boundPersonKey) return;
      const myBucket = ensurePersonStore(pName);
      if (!myBucket.ops) myBucket.ops = [];
      myBucket.ops = myBucket.ops.filter((x) => x.id !== opItem.id);
      myBucket.ops.unshift({ ...opItem });
      if (myBucket.ops.length > 300) myBucket.ops.length = 300;
    });
  }
  function pushConsultNoticeFromOp(role, actor, targetName, action, place, how) {
    return [];
  }
  function allowsOpByCategoryAndTaskGate(action, place, subject, requireTaskFamilyFlag) {
    const cats = S.cats || {};
    if (action === "打卡了") {
      const baseTitle = String(subject || "").split("（")[0].trim();
      const matched = SEED.find((t) => t.title === baseTitle || String(subject || "").indexOf(t.title) === 0);
      if (matched) {
        if (requireTaskFamilyFlag && S.famOff && S.famOff[matched.id]) return false;
        const catKey = taskCatKey(matched);
        return catKey ? cats[catKey] !== false : true;
      }
      if (place === "血压监测" || /血压/.test(subject)) return cats.monitoring !== false;
      if (place === "运动" || /散步|运动/.test(subject)) return cats.exercise !== false;
      if (/复查/.test(subject)) return cats.appointment !== false;
      return cats.medication !== false;
    }
    if (action === "同步了血压" || action === "记录了读数") return cats.monitoring !== false;
    if (action === "完成了散步") return cats.exercise !== false;
    if (action === "上传了复查资料" || action === "上传了资料" || action === "提交了问卷") return cats.appointment !== false;
    return true;
  }
  /// 操作记录换日（V10.109）：在「今天 → 最早一条记录那天」之间移动，真机同日翻页手势
  function opStepDay(delta) {
    const ops = S.ops || [];
    const todayYMD = toYMD(new Date());
    const earliestYMD = toYMD(new Date(ops.length ? ops[ops.length - 1].at : new Date()));
    const next = addDaysYMD(S.opDay || todayYMD, delta);
    if (next < earliestYMD || next > todayYMD) return;
    S.opDay = next;
    render();
  }
  /// 用户从哪发起：栈里有健康计划就记「健康计划」，否则「首页」
  function entryPlace() {
    return S.screen === "schedule" || S.frames.some((f) => f.id === "schedule") ? "健康计划" : "首页";
  }
  function taskTitle(id) {
    const t = SEED.find((x) => x.id === id);
    return t ? t.title : "计划";
  }
  /// 最多写 3 个名字，多了写「等 N 项」；同名只写一次，写「共 N 项」
  function opNames(titles) {
    const list = titles.filter(Boolean);
    const unique = [...new Set(list)];
    if (unique.length > 3) return `${unique.slice(0, 3).join("、")} 等 ${list.length} 项`;
    return list.length > unique.length ? `${unique.join("、")} 共 ${list.length} 项` : unique.join("、");
  }
  /// 成批计划按类汇总；replacing = 每类被整批换掉的旧条数
  function opPlanLines(tasks, replacing) {
    const group = (cat) => (cat === "medication" ? "用药" : cat === "appointment" ? "复查" : cat === "exercise" ? "运动" : "日常");
    return ["用药", "复查", "日常", "运动"].map((g) => {
      const titles = tasks.filter((t) => group(t.cat) === g).map((t) => t.title);
      const old = (replacing || {})[g] || 0;
      if (!titles.length) return old ? [g, `已清空原来 ${old} 项`] : null;
      return [g, old ? `${opNames(titles)}，替换原来 ${old} 项` : opNames(titles)];
    }).filter(Boolean);
  }
  function opPlanCounts(groups) {
    const out = {};
    SEED.forEach((t) => {
      const g = t.cat === "medication" ? "用药" : t.cat === "appointment" ? "复查" : t.cat === "exercise" ? "运动" : "日常";
      if (groups.includes(g)) out[g] = (out[g] || 0) + 1;
    });
    return out;
  }
  function opHowText(op) {
    const raw = typeof op.how === "string" ? op.how : opNormalizeHow(op.action || op.kind || "", op.lines);
    if (!genHasFamily()) return raw;
    if (/已通知|已发送/.test(raw)) return raw;
    const viewer = S.currentPersonName || S.name || "李建国";
    const isRemind = op.action === "提醒了" || op.action === "提醒了患者" || op.kind === "提醒患者";
    if (isRemind) {
      const target = opResolvedTarget(op) || viewer;
      const who = target === viewer ? "我" : target;
      return raw ? `${raw}（已通知${who}）` : `已通知${who}`;
    }
    const notified = (op.notifiedNames || []).map((n) => String(n || "").trim()).filter(Boolean);
    if (!notified.length) return raw;
    const mapped = [...new Set(notified.map((n) => (n === viewer ? "我" : n)))];
    const note = `已通知${mapped.join("、")}`;
    return raw ? `${raw}（${note}）` : note;
  }
  function opActorName(op) {
    return String(op.actor || op.actorName || "我").trim();
  }
  function opActionName(op) {
    const a = String(op.action || op.kind || "").trim();
    if (a === "提醒了患者" || a === "提醒患者") return "提醒了";
    if (a === "完成打卡") return "打卡了";
    if (a === "测血压打卡") return "打卡了";
    return a;
  }
  function opIdentityFor(personName, op) {
    ensureCareGraph();
    const viewer = S.currentPersonName || S.name || "李建国";
    const clean = String(personName || "").trim();
    if (!clean || clean === viewer || clean === "本人" || clean === "我") return "我";
    if (myGuardiansList(viewer).some((b) => b.guardianName === clean)) return "守护我的人";
    if (myWardsList(viewer).some((b) => b.wardName === clean)) return "被我守护的人";
    if (op) {
      const t = String(op.targetName || "").trim();
      const a = opActorName(op);
      if (t === viewer && a === clean) return "守护我的人";
      if (a === viewer && t === clean) return "被我守护的人";
      if ((op.notifiedNames || []).includes(viewer) && a === clean) return "被我守护的人";
    }
    return op && op.role === "family" ? "守护我的人" : "我";
  }
  function opResolvedTarget(op) {
    const actor = opActorName(op);
    const rawTarget = String(op.targetName || "").trim();
    const viewer = S.currentPersonName || S.name || "李建国";
    const act = opActionName(op);
    if (act === "提醒了") {
      if (rawTarget) return rawTarget;
      if (actor === viewer) {
        const w = myWardsList(viewer)[0];
        return w ? w.wardName : "李建国";
      }
      return viewer;
    }
    if (rawTarget && rawTarget !== actor) return rawTarget;
    return "";
  }
  function opPersonChipHTML(name, op) {
    const roleTag = genHasFamily()
      ? `<span class="op-role-tag">${esc(opIdentityFor(name, op))}</span>`
      : "";
    return `<span class="op-name">${I.person}<span>${esc(name)}</span>${roleTag}</span>`;
  }
  function opSentence(op) {
    const actor = opActorName(op);
    const act = opActionName(op);
    const target = genHasFamily() ? opResolvedTarget(op) : "";
    let headline = "";
    if (act === "提醒了" && target) {
      headline = op.place ? `${actor}在${op.place}${act}${target}` : `${actor}${act}${target}`;
    } else if (target) {
      headline = op.place ? `${actor}在${op.place}帮${target}${act}` : `${actor}帮${target}${act}`;
    } else {
      headline = op.place ? `${actor}在${op.place}${act}` : `${actor}${act}`;
    }
    const how = opHowText(op);
    return { headline, how, summary: how ? `${headline} ${how}` : headline };
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }
  /// 5W1H 一句话特殊化
  function opHeadlineHTML(op) {
    const actor = opActorName(op);
    const act = opActionName(op);
    const viewer = S.currentPersonName || S.name || "李建国";
    const unbound = genHasFamily() && op.actorId
      && actor !== viewer
      && !(S.careBonds || []).some((b) => b.confirmed && (b.guardianName === actor || b.wardName === actor || String(b.id) === String(op.actorId)))
      && !(S.family || []).some((m) => String(m.id) === String(op.actorId));
    const name = `${opPersonChipHTML(actor, op)}${unbound ? `<span class="op-unbound">已解绑</span>` : ""}`;
    const placePart = op.place ? `<span class="op-plain">在</span><span class="op-place">${esc(op.place)}</span>` : "";
    const target = genHasFamily() ? opResolvedTarget(op) : "";
    let middlePart = `<span class="op-plain">${esc(act)}</span>`;
    if (act === "提醒了" && target) {
      middlePart = `<span class="op-plain">${esc(act)}</span>${opPersonChipHTML(target, op)}`;
    } else if (target) {
      middlePart = `<span class="op-plain">帮</span>${opPersonChipHTML(target, op)}<span class="op-plain">${esc(act)}</span>`;
    }
    const how = opHowText(op);
    const howBadge = how ? `<span class="op-how">${esc(how)}</span>` : "";
    return `${name}${placePart}${middlePart}${howBadge}`;
  }
  function opText(op) {
    const actor = opActorName(op);
    const actorRole = genHasFamily() ? `（${opIdentityFor(actor, op)}）` : "";
    const act = opActionName(op);
    const target = genHasFamily() ? opResolvedTarget(op) : "";
    const targetRole = target && genHasFamily() ? `（${opIdentityFor(target, op)}）` : "";
    const placePart = op.place ? `在${op.place}` : "";
    const how = opHowText(op);
    if (act === "提醒了" && target) {
      return `${actor}${actorRole}${placePart}${act}${target}${targetRole} ${how}`;
    }
    if (target) {
      return `${actor}${actorRole}${placePart}帮${target}${targetRole}${act} ${how}`;
    }
    return `${actor}${actorRole}${placePart}${act} ${how}`;
  }
  function opHM(at) {
    const d = new Date(at);
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  }
  function opDayTitle(sel, todayYMD) {
    if (sel === todayYMD) return "今天";
    if (sel === toYMD(addDaysYMD(todayYMD, -1))) return "昨天";
    const d = parseYMD(sel);
    return `${d.getMonth() + 1}月${d.getDate()}日`;
  }
  function opBlockHTML(op, withDay) {
    const head = withDay ? `${opDayTitle(toYMD(new Date(op.at)), toYMD(new Date()))} ${opHM(op.at)}` : opHM(op.at);
    return `<div class="op-block">
      <div class="op-block-head"><span class="op-block-time">${head}</span><i></i></div>
      <div class="op-card" data-op-id="${op.id}"><h4>${opHeadlineHTML(op)}</h4></div>
    </div>`;
  }
  function opVisibleOps() {
    const showsFamily = genHasFamily();
    const viewer = S.currentPersonName || S.name || "李建国";
    return (S.ops || []).filter((op) => {
      if (showsFamily) return true;
      return !op.actorId && op.role !== "family" && (!op.targetName || op.targetName === viewer);
    });
  }
  function opSearchBody(q) {
    const hits = opVisibleOps().filter((op) => opText(op).indexOf(q) >= 0);
    return `<div class="s13 t-sec" style="padding:2px 4px 12px">${hits.length ? `找到 ${hits.length} 条` : "没有找到相关的记录"}</div>`
      + hits.map((op) => opBlockHTML(op, true)).join("");
  }
  /// 长按一条 → 删除 / 改归属（真机 contextMenu 同款）
  function bindOpHold() {
    document.querySelectorAll(".op-card").forEach((card) => {
      let timer = null;
      const open = () => { openOverlay("opCard", { id: card.dataset.opId }); };
      const start = () => { timer = setTimeout(open, 550); };
      const end = () => { if (timer) { clearTimeout(timer); timer = null; } };
      card.onpointerdown = start;
      card.onpointerup = end;
      card.onpointerleave = end;
      card.onpointercancel = end;
      card.oncontextmenu = (e) => { e.preventDefault(); open(); };
    });
  }
  /// 搜索只换结果区，不整屏重绘（重绘会把输入框焦点弄丢）
  function bindOpSearch() {
    const input = document.getElementById("op-search");
    if (!input) return;
    input.oninput = () => {
      S.opQuery = input.value;
      const box = document.getElementById("op-results");
      if (!box) return;
      box.innerHTML = opSearchBody(S.opQuery.trim());
      bindClicks(box);
    };
  }
  /// silent：顺带完成的打卡，由发起那件事写一条汇总
  function markProxy(id, place, silent) {
    if (!id) return;
    if (genHasFamily() && S.role === "family") S.completedBy[id] = "family";
    else delete S.completedBy[id];
    if (silent) return;
    logOp("打卡了", place || entryPlace(), [["计划", taskTitle(id)]]);
  }
  function unmarkProxy(id) {
    if (!id) return;
    delete S.completedBy[id];
    logOp("取消了打卡", entryPlace(), [["计划", taskTitle(id)]]);
  }
  function logDrop(id, onlyToday) {
    if (!id) return;
    logOp(onlyToday ? "删除了这一次" : "删除了计划", entryPlace(), [["计划", taskTitle(id)]]);
  }
  /// 身份展示：V0.0 一律按患者本人；V0.1+ 下同一个账号 ID 始终支持在「本人」与「家属」间切换（真机 ServiceView.displayedRole）
  function shownRole() { return "patient"; }
  /// 当前登录账号「本人」姓名（用于切换为家属身份时展示「{本人}（我）守护中」）
  function mySelfName() {
    if (!S.selfProfile) {
      S.selfProfile = {
        name: S.name || "李建国",
        gender: S.gender || "男",
        age: S.age || 58,
        height: S.height || 170,
        weight: S.weight || 75,
      };
    }
    return S.selfProfile.name || "李建国";
  }
  /// 根据身份同步当前展示的档案：本人视角展示 selfProfile，家属视角展示被守护的患者档案（若当前选中患者与本人同名，自动切换到另一位被守护患者）
  function syncProfileForRole(targetRole) {
    if (!S.selfProfile) {
      S.selfProfile = {
        name: S.name || "李建国",
        gender: S.gender || "男",
        age: S.age || 58,
        height: S.height || 170,
        weight: S.weight || 75,
      };
    }
    if (targetRole === "patient") {
      S.name = S.selfProfile.name;
      S.gender = S.selfProfile.gender;
      S.age = S.selfProfile.age || 58;
      S.height = S.selfProfile.height;
      S.weight = S.selfProfile.weight;
      return;
    }
    if (!S.guardedPatients || !S.guardedPatients.length) {
      S.guardedPatients = [
        { id: "p1", name: "李建国", gender: "男", age: 58, height: 170, weight: 75, rel: "配偶", phone: "138****5678", phoneRaw: "13800135678" },
        { id: "p2", name: "张桂兰", gender: "女", age: 56, height: 160, weight: 61, rel: "配偶", phone: "137****9021", phoneRaw: "13700139021" },
      ];
    }
    const selfNm = S.selfProfile.name;
    let cur = S.guardedPatients.find((p) => String(p.id) === String(S.activePatientId));
    if (!cur || cur.name === selfNm) {
      cur = S.guardedPatients.find((p) => p.name !== selfNm) || S.guardedPatients[0];
    }
    if (cur) {
      S.activePatientId = cur.id;
      S.name = cur.name;
      S.gender = cur.gender;
      S.age = cur.age || 58;
      S.height = cur.height;
      S.weight = cur.weight;
    }
  }
  /// 当前家属登录视角对应的家属成员（与真机 ServiceView.activeFamilyMember 同源）
  function activeFamMember() {
    const list = S.family || [];
    const found = list.find((m) => String(m.id) === String(S.actorId))
      || list[0]
      || { id: "f1", name: mySelfName(), rel: "配偶", phone: "139****2210", phoneRaw: "13900132210" };
    if (shownRole() === "family" && !S.pureFamilyLogin) {
      return { ...found, name: mySelfName() };
    }
    return found;
  }
  /// 首次进入步骤点：固定两步（短信登录 → 完善你的信息）
  function dotsHTML(active) {
    const total = 2;
    return `<div class="dots">${Array.from({ length: total }, (_, i) => `<i class="dot ${i + 1 === active ? "on" : ""}"></i>`).join("")}</div>`;
  }
  function notifyCaption() {
    const famLabel = "通知守护我的人";
    const famOn = genHasFamily() && hasConfirmedGuardiansForCurrentPerson() && S.notifyFamily;
    if (!anyCatOn() || (!S.notifySelf && !famOn)) return "已关闭";
    if (S.notifySelf && famOn) return `到点提醒与${famLabel}`;
    if (S.notifySelf) return "到点提醒";
    return famLabel;
  }
  /// 计划所属的总闸键：自定义类别按 id 判（打卡通知页的自定义行也按 id 存）
  function taskCatKey(t) {
    return (t && (t.customId || t.cat)) || null;
  }
  /// 当前查看任务所属类别（打卡通知总闸按它判；自定义任务用 customId）
  function currentTaskCat() {
    return taskCatKey(SEED.find((x) => x.id === S.taskId));
  }
  /// 总闸关着时弹窗拦下并引导去个人中心；返回 true 表示已拦下。
  /// `catOverride` 给添加 / 编辑态用——那时还没有落库的任务，按草稿的类别判
  function blockedByGate(catOverride) {
    const cat = catOverride || currentTaskCat();
    if (gateOpen(cat)) return false;
    const isWatchingWard = !!(genHasFamily() && S.watchingWardName && S.watchingWardName !== S.currentPersonName);
    const selfLabel = isWatchingWard ? `通知${activePersonName()}` : "通知自己";
    const isSelfOff = !S.notifySelf;
    openOverlay("confirm", {
      title: isSelfOff ? `请先打开${selfLabel}` : `请先打开${catName(cat)}通知`,
      body: isSelfOff
        ? `个人中心已关闭「${selfLabel}」，在这里开启也不会响。要收到提醒，请先到打卡通知打开总开关。`
        : `个人中心已关闭「${catName(cat)}」通知，在这里开启也不会响。要收到提醒，请先到打卡通知打开总开关。`,
      ok: "去设置",
      action: "goNotify",
    });
    return true;
  }
  /// 守护人通道总闸：通知守护我的人 × 已确认的守护我的人 × 该类别开关
  function familyGateOpen(cat) {
    if (!genHasFamily()) return false;
    if (!S.notifyFamily || !hasConfirmedGuardiansForActivePerson()) return false;
    if (!cat) return true;
    return !!S.cats[cat];
  }
  /// 守护人通道关着时弹窗拦下：未添加守护人去添加；已添加未开总闸或未开该类别去打卡通知页。返回 true 表示已拦下。
  function blockedByFamilyGate(catOverride) {
    const cat = catOverride || currentTaskCat();
    if (familyGateOpen(cat)) return false;
    const isWatchingWard = !!(genHasFamily() && S.watchingWardName && S.watchingWardName !== S.currentPersonName);
    const targetNm = activePersonName();
    const famLabel = isWatchingWard ? "通知守护TA的人" : "通知守护我的人";
    if (!hasConfirmedGuardiansForActivePerson()) {
      openOverlay("confirm", {
        title: isWatchingWard ? "请先添加守护TA的人" : "请先添加守护我的人",
        body: isWatchingWard
          ? `开启「通知守护TA的人」前，请先添加并确认至少一位守护${targetNm}的人。`
          : "开启「通知守护我的人」前，请先添加并确认至少一位守护你的人。",
        ok: "去添加",
        action: "goFamilyFromTask",
      });
      return true;
    }
    const isFamOff = !S.notifyFamily;
    openOverlay("confirm", {
      title: isFamOff ? `请先打开${famLabel}` : `请先打开${catName(cat)}通知`,
      body: isFamOff
        ? `个人中心已关闭「${famLabel}」，在这里开启也不会发。请先到打卡通知打开总开关。`
        : `个人中心已关闭「${catName(cat)}」通知，在这里开启也不会发。请先到打卡通知打开总开关。`,
      ok: "去设置",
      action: "goNotify",
    });
    return true;
  }
  /// 类别展示名：自定义类别按 id 反查
  function catName(id) {
    const c = (S.customCats || []).find((x) => String(x.id) === String(id));
    return c ? c.name : CAT[id] ? CAT[id].name : "该类";
  }

  function taskCard(t, focus) {
    const done = !!S.completed[t.id];
    const appt = t.cat === "appointment" && !done;
    const stroke = done ? "#1AA64A" : "rgba(16,84,224,.10)";
    const sw = done ? 1.2 : 0.8;
    return `<div class="task-card hug ${done ? "done" : ""} ${appt ? "appt" : ""} ${focus ? "focus" : ""}" id="task-${t.id}" data-hug="18">
      <svg class="hug-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path class="hug-path" fill="#fff"/>
        <path class="hug-stroke" fill="none" stroke="${stroke}" stroke-width="${sw}" vector-effect="non-scaling-stroke"/>
      </svg>
      <div class="hug-inner">
        <div class="task-top">
          ${badge(t.cat, done)}
          ${rxOn() && S.rx && S.rx[t.id] ? `<span class="rx-chip">医嘱</span>` : ""}
          <div class="task-status">${done ? `${I.check}<span>已完成</span>` : `${I.clock}<span>${spoken(t.h, t.m)}</span>`}</div>
        </div>
        <div class="task-body">
          <h3 class="task-title">${t.title}</h3>
          <div class="task-dates">${taskDateRangeLabel(t)}</div>
        </div>
        <div class="task-ops">
          <button class="btn-check" data-act="checkin" data-id="${t.id}" type="button">${done ? `${I.undo}取消` : `${I.tap}打卡`}</button>
          <button class="btn-detail" data-act="detail" data-id="${t.id}" type="button">详情 ${I.chevR}</button>
        </div>
      </div>
    </div>`;
  }

  function planRow(t, hist, green) {
    const done = !!S.completed[t.id];
    return `<div class="plan-row" data-act="detail" data-id="${t.id}">
      <div class="badge b40 ${done ? "done" : t.cat === "appointment" ? "appt" : ""}"><img src="${A.task[t.cat]}" width="26" height="26" alt="" /></div>
      <div class="grow">
        <div class="s15 fb ${done ? "t-green" : t.cat === "appointment" ? "t-appt" : "t"}">${t.title}</div>
        <div class="s12 t-sec">${spoken(t.h, t.m)}　${CAT[t.cat].name}${done ? "" : "　未打卡"}</div>
      </div>
      ${hist ? `<span class="view-link">${I.eye}查看</span>` : ""}
    </div>`;
  }

  function mapArt(opts = {}) {
    const route = opts.route
      ? `<path d="M118 470 C150 420 168 390 198 348 S248 290 292 248" fill="none" stroke="#1054E0" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round"/>
         <circle cx="118" cy="470" r="5.5" fill="#fff"/><circle cx="118" cy="470" r="4" fill="#1AA64A"/>
         <circle cx="292" cy="248" r="5.5" fill="#fff"/><circle cx="292" cy="248" r="4" fill="#F0644A"/>`
      : "";
    return `
      <svg class="map-art" viewBox="0 0 430 760" preserveAspectRatio="xMidYMid slice">
        <rect width="430" height="760" fill="#EEEBE3"/>
        <path d="M0 168 H430" stroke="#F7F5EE" stroke-width="26"/>
        <path d="M0 512 H430" stroke="#F7F5EE" stroke-width="20"/>
        <path d="M78 0 V760" stroke="#F7F5EE" stroke-width="18"/>
        <path d="M348 0 V760" stroke="#F7F5EE" stroke-width="16"/>
        <path d="M0 338 H430" stroke="#F4F1E8" stroke-width="12"/>
        <ellipse cx="214" cy="338" rx="148" ry="118" fill="#C5D9B0"/>
        <ellipse cx="236" cy="318" rx="62" ry="36" fill="#D4E4C2"/>
        <ellipse cx="198" cy="332" rx="26" ry="14" fill="#B5D0DC"/>
        <text x="16" y="162" fill="#9AA094" font-size="11">南京东路</text>
        <text x="356" y="162" fill="#9AA094" font-size="11">黄浦</text>
        <text x="16" y="506" fill="#9AA094" font-size="11">武胜路</text>
        <text x="300" y="506" fill="#9AA094" font-size="11">延安东路</text>
        ${route}
      </svg>
      <div class="map-pin">
        <div class="map-dot">${I.walk}</div>
        <div class="map-here">当前位置</div>
      </div>`;
  }

  function walkSessionHTML() {
    const src = MUSIC.find((m) => m.id === S.musicSrc) || MUSIC[0];
    const track = TRACKS[S.track % TRACKS.length];
    const srcIco = src.icon === "radio" ? I.radio : I.note;
    const companion = `
      <div class="sess-comp">
        <div class="sess-comp-top">
          <button class="src-chip" data-act="toggleMusicMenu" type="button">${srcIco}${src.title}${I.chevD}</button>
          <button class="ai-chip ${S.aiOn ? "on" : ""}" data-act="toggleAi" type="button">${I.wave}AI 语音</button>
        </div>
        ${S.musicMenu ? `<div class="src-menu">
          <div class="src-lab">音乐</div>
          ${MUSIC.filter((m) => m.id !== "ximalaya").map((m) =>
            `<button type="button" data-act="setMusic" data-src="${m.id}">${S.musicSrc === m.id ? I.check : I.note}${m.title}</button>`).join("")}
          <div class="src-lab">广播</div>
          <button type="button" data-act="setMusic" data-src="ximalaya">${S.musicSrc === "ximalaya" ? I.check : I.radio}喜马拉雅</button>
        </div>` : ""}
        <div class="sess-music">
          <div class="sess-cover ${S.musicOn ? "on" : ""}">${srcIco}</div>
          <div class="grow">
            <div class="s17 fb t">${track[0]}</div>
            <div class="s13 t-sec">${track[1]}</div>
          </div>
          <div class="sess-play">
            <button class="play-btn sm" data-act="skipTrack" data-d="-1" type="button">${I.prev}</button>
            <button class="play-btn lg" data-act="toggleMusic" type="button">${S.musicOn ? I.pause : I.play}</button>
            <button class="play-btn sm" data-act="skipTrack" data-d="1" type="button">${I.next}</button>
          </div>
        </div>
      </div>
      <div class="sess-div"></div>`;
    const metrics = `
      <div class="sess-metrics">
        <div><div class="val">0.42<small>km</small></div><div class="lab">总距离</div></div>
        <i></i>
        <div><div class="val">08:12</div><div class="lab">总时长</div></div>
        <i></i>
        <div><div class="val">96<small>步/分</small></div><div class="lab">步频</div></div>
      </div>`;
    const running = `
      ${S.walkSheet ? companion : ""}
      ${metrics}
      <div class="sess-acts">
        <button class="sess-side" data-act="walkReturn" type="button">返回</button>
        <button class="sess-pause" data-act="walkPause" type="button">${I.pause}</button>
        <button class="sess-120" data-act="call120" type="button"><b>120</b><span>急救</span></button>
      </div>`;
    const paused = `
      <div class="sess-pause-h">
        <div class="sess-pause-t">${I.pause}已暂停</div>
        <div class="sess-pause-read"><b>0.42</b><small>km</small><b class="dur">08:12</b></div>
      </div>
      <div class="hold-track"><span id="hold-hint">长按「结束」2 秒结束运动</span><i></i></div>
      <div class="sess-acts">
        <button class="sess-pause sm" data-act="walkPause" type="button">${I.play}<em>继续</em></button>
        <button class="sess-end" data-hold="2000" data-act="walkEnd" data-hold-hint="松开手指可取消" type="button">结束</button>
        <button class="sess-120" data-act="call120" type="button"><b>120</b><span>急救</span></button>
      </div>`;
    return `
      <div class="page sess-page">
        <div class="map sess-map">${mapArt({ route: true })}</div>
        <div class="walk-title">${I.walk}户外散步</div>
        <div class="sess-stack">
          <button class="sess-scope" data-act="sessRecenter" type="button">${I.scope}</button>
          <div class="sess-sheet ${S.paused ? "paused" : ""} ${S.walkSheet ? "open" : "mini"}">
            <div class="grab wide" data-act="toggleWalkSheet"></div>
            ${S.paused ? paused : running}
          </div>
        </div>
      </div>`;
  }

  const WALK_ROUTES = [
    { d: "M12 70 22 58 34 62 48 40 62 48 78 22 88 28", s: [12, 70], e: [88, 28] },
    { d: "M14 64 28 50 40 56 52 32 70 38 86 20", s: [14, 64], e: [86, 20] },
    { d: "M10 72 24 60 38 66 50 44 66 50 84 26", s: [10, 72], e: [84, 26] },
    { d: "M16 68 30 54 44 58 58 36 74 42 88 24", s: [16, 68], e: [88, 24] },
  ];

  /// 散步记录 Demo 数据（按天分组，供删除 / 筛选工作）
  const WALK_RECORDS = [
    { ymd: "2026-09-11", label: "今天", items: [
      { key: "0.68|15:56 – 16:08", card: ["0.68", "920", "15:56 – 16:08", 0] },
      { key: "1.24|10:05 – 10:24", card: ["1.24", "1680", "10:05 – 10:24", 1] },
    ] },
    { ymd: "2026-09-10", label: "昨天", items: [
      { key: "0.51|18:31 – 18:40", card: ["0.51", "700", "18:31 – 18:40", 2] },
      { key: "1.05|08:58 – 09:15", card: ["1.05", "1420", "08:58 – 09:15", 3] },
    ] },
  ];

  function walkRecordCard([km, steps, time, pathI]) {
    const routes = WALK_ROUTES;
    const r = routes[pathI % 4];
    return `<div class="walk-card">
      <div class="walk-card-top">
        <div class="walk-km"><b>${km}</b><small>km</small></div>
        <div class="walk-meta">${I.shoe}${steps} 步</div>
        <div class="walk-meta">${I.clock}${time}</div>
      </div>
      <div class="walk-cover">
        <svg class="walk-route" viewBox="0 0 100 88" preserveAspectRatio="xMidYMid meet">
          <path d="${r.d}" fill="none" stroke="#1054E0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="${r.s[0]}" cy="${r.s[1]}" r="6" fill="#fff"/><circle cx="${r.s[0]}" cy="${r.s[1]}" r="4.5" fill="#1AA64A"/>
          <circle cx="${r.e[0]}" cy="${r.e[1]}" r="6" fill="#fff"/><circle cx="${r.e[0]}" cy="${r.e[1]}" r="4.5" fill="#F0644A"/>
        </svg>
      </div>
      <div class="walk-acts">
        <button class="walk-act" data-act="shareWalk" data-km="${km}" data-steps="${steps}" data-time="${time}" data-path="${pathI}" type="button">${I.share}分享</button>
        <button class="walk-act del" data-act="delWalk" data-km="${km}" data-time="${time}" type="button">${I.trash}删除</button>
      </div>
    </div>`;
  }

  /// 自建类别下的计划数（真机 RehabPlanStore.customCategoryUsage().planCount）
  function catUsage(id) {
    return SEED.filter((t) => t.customId === id).length;
  }

  /// 可承接的迁移目标：内置日常三类 + 其它自建类别（真机 CustomCategoryRemoval.targets）。
  /// 服药 / 运动 / 复查不开放 —— 迁进去会让计划在首页入口不可编辑。
  function catMigrationTargets(excludeId) {
    const builtins = [
      { cat: "monitoring", name: "测血压" },
      { cat: "rest", name: "作息" },
      { cat: "diet", name: "饮食" },
    ];
    const customs = (S.customCats || [])
      .filter((c) => c.id !== excludeId)
      .map((c) => ({ cat: "custom", name: c.name, id: c.id }));
    return builtins.concat(customs);
  }

  function typeGroup(title, sub, opts, rows) {
    const red = !!opts.red;
    const icon = opts.icon || I.steth;
    const chev = `<span class="type-chev">${I.chevR}</span>`;
    const rowHTML = rows.map((row) => {
      const [t, d, cat, actName, flags] = row;
      const special = !!(flags && flags.special);
      return `
          <button class="type-row${special ? " special" : ""}" data-act="${actName}" data-c="${cat}" type="button">
            <div class="b48 badge ${special || red ? "appt" : ""}"><img src="${A.task[cat]}" alt="" /></div>
            <div class="grow"><h4>${t}</h4><p>${d}</p></div>
            ${chev}
          </button>`;
    }).join("");
    const saved = (S.customCats || []).map((c) => `
          <button class="type-row" data-act="typeCustom" data-id="${c.id}" type="button">
            <div class="b48 badge" style="background:${UNIFIED_CUSTOM_COLOR}">${I[UNIFIED_CUSTOM_ICON]}</div>
            <div class="grow"><h4>${c.name}</h4><p>自建类别</p></div>
            ${chev}
          </button>`).join("");
    const customRow = opts.includeCustom ? `${saved}
          <button class="type-row" data-act="openTypeCustom" type="button">
            <div class="b48 dash">${I.plus}</div>
            <div class="grow"><h4>新建类别</h4></div>
          </button>` : "";
    return `<div class="type-group">
      <div class="type-h ${red ? "red" : ""}">${icon}${title}</div>
      ${sub ? `<div class="type-sub">${sub}</div>` : ""}
      <div class="type-island ${red ? "red" : ""}">${rowHTML}${customRow}</div>
    </div>`;
  }

  function parseHour(t) {
    const m = String(t).match(/^(\d{1,2})/);
    return m ? +m[1] : 8;
  }
  function groupByPeriod(items, hourFn) {
    return PERIODS.map((p) => ({
      ...p,
      items: items.filter((x) => {
        const h = hourFn(x);
        return p.title === "夜间" ? (h >= 21 || h < 6) : (h >= p.from && h < p.to);
      }),
    })).filter((g) => g.items.length);
  }
  function sectionHead(icon, title, count, red) {
    return `<div class="type-h ${red ? "red" : ""}">${icon || ""}${title}${count ? `<span class="count-pill ${red ? "red" : ""}">${count}</span>` : ""}</div>`;
  }
  function periodHead(p, count) {
    return `<div class="period-h">${I[p.icon] || ""}${p.title}<span class="s12 t-sec">${count} 项</span></div>`;
  }
  function cardNote(icon, text, actName, idx, isMuted) {
    const inner = `${icon}<span${isMuted ? ' style="opacity:.6"' : ""}>${text}</span>`;
    return actName
      ? `<button class="act-note tappable" data-act="${actName}" data-i="${idx}" type="button">${inner}</button>`
      : `<div class="act-note">${inner}</div>`;
  }

  function actionCard({ cat, title, time, date, appt, done, hist, id, toggle, draft, cycle, idx, dose, note, noteEmpty }) {
    const kind = appt || cat === "appointment" ? "appointment" : cat;
    const cls = done ? "done" : kind === "appointment" ? "appt" : "";
    const chip = CAT[kind]?.name || "";
    const isCycle = !!cycle;
    const editLab = "查看";
    const editIco = I.eye;
    const check = toggle
      ? `<button class="act-check ${done ? "on" : ""}" data-act="checkin" data-id="${id}" type="button">${done ? I.check : ""}</button>`
      : hist
        ? `<span class="act-ro ${done ? "done" : ""}">${done ? `<i>${I.check}</i>` : `<i></i><em>未打卡</em>`}</span>`
        : "";
    const titleAttr = String(title || "").replace(/"/g, "&quot;");
    const timeAttr = String(time || "").replace(/"/g, "&quot;");
    const idxAttr = idx == null ? "" : ` data-i="${idx}"`;
    const idAttr = id ? ` data-id="${id}"` : "";
    const editBtn = draft
      ? `<button type="button" data-act="editConfirmDraft" data-title="${titleAttr}" data-cat="${kind}" data-time="${timeAttr}"${idxAttr}>${I.pencil}编辑</button>`
      : `<button type="button"${id ? ` data-act="detail" data-id="${id}"` : ""}>${editIco}${editLab}</button>`;
    // 今日之前、以及该日已打卡：删除不出现。确认页草稿仍可删。
    const showDelete = !hist && (!done || draft);
    let delBtn = "";
    if (showDelete) {
      if (draft) {
        delBtn = `<button class="del" type="button" data-act="delConfirmDraft"${idxAttr}>${I.trash}删除</button>`;
      } else if (isCycle) {
        delBtn = `<button class="del" type="button" data-act="delCardToday"${idAttr}>${I.trash}仅删本次</button>
        <button class="del" type="button" data-act="delCardAll"${idAttr}>${I.trash}长期删除</button>`;
      } else {
        delBtn = `<button class="del" type="button" data-act="delCardOnce"${idAttr}>${I.trash}删除</button>`;
      }
    }
    const barCls = showDelete && !draft && isCycle ? " triple" : "";
    const notes = note
      ? cardNote(I.alignLeft, note, idx == null ? null : "editNote", idx, noteEmpty)
      : "";
    const seedTask = id ? SEED.find((x) => x.id === id) : null;
    const rangeText = seedTask ? taskDateRangeLabel(seedTask) : taskDateRangeLabel({ cycle: isCycle });
    return `<div class="act-card ${cls}">
      <div class="act-card-main">
        <div class="badge b40 ${cls}"><img src="${A.task[kind]}" alt="" /></div>
        <div class="grow">
          <div class="s15 fb ${done ? "t-green" : kind === "appointment" ? "t-appt" : "t"}">${title}</div>
          <div class="act-info"><span class="tm">${time}</span>${dose ? `<span class="act-chip">${dose}</span>` : ""}<span class="act-chip">${isCycle ? "循环" : "单日"}</span><span class="act-chip">${chip}</span></div>
          <div class="act-dates">${rangeText}</div>
        </div>
        ${check}
      </div>
      ${notes ? `<div class="act-notes">${notes}</div>` : ""}
      <div class="act-card-bar${barCls}">
        ${editBtn}
        ${delBtn}
      </div>
    </div>`;
  }

  function editorVitalsBlock(d, mode, done, accent) {
    if (d.cat !== "monitoring") return "";
    const canStep = mode === "edit" && done;
    const sys = done ? S.sys : null;
    const dia = done ? S.dia : null;
    const hr = done ? S.hr : null;
    const isHw = false;
    const hwBadgeColor = done ? "#1AA64A" : "#1054E0";
    return `<div class="flex between" style="align-items:center">
        <div class="sec-label" style="margin-bottom:0">今日血压</div>
        ${isHw ? `<span style="font-size:12px;font-weight:700;color:${hwBadgeColor};background:${done ? "rgba(26,166,74,.12)" : "rgba(16,84,224,.12)"};padding:3px 8px;border-radius:99px">📡 哈宝血压计同步</span>` : ""}
      </div>
      <div class="vitals-island flex mt8" style="background:${accent.muted}">
        ${editorVitCol("收缩压", "mmHg", sys, "sys", done ? "#1AA64A" : "#1054E0", canStep)}
        <div class="vitals-div"></div>
        ${editorVitCol("舒张压", "mmHg", dia, "dia", done ? "#1AA64A" : "#1EBED6", canStep)}
        <div class="vitals-div"></div>
        ${editorVitCol("心率", "bpm", hr, "hr", done ? "#1AA64A" : "#F05A6E", canStep)}
      </div>`;
  }

  function stepOrSeed(cur, d, seed, lo, hi) {
    const next = cur == null ? seed : cur + d;
    return Math.min(hi, Math.max(lo, next));
  }

  function editorVitCol(title, unit, val, key, color, canStep) {
    const empty = val == null;
    return `<div class="vitals-col">
      <div class="s12 t-sec">${title}</div>
      <div class="s20 fb mono" style="color:${empty ? "#828EA5" : color}">${empty ? "—" : val}</div>
      <div class="s11 t-sec">${unit}</div>
      ${canStep ? `<div class="flex center gap8 mt8">
        <button class="circle-btn" data-act="${key}-" type="button">−</button>
        <button class="circle-btn" data-act="${key}+" type="button">＋</button>
      </div>` : ""}
    </div>`;
  }

  /// 查看计划 · 到点提醒：只有一档「本次提醒」——压的是正在看的那一天，
  /// 任务照常出现、照常可打卡；开关方向与个人中心总闸一致：**开 = 会提醒**。
  function reminderSwitches(d, done, accent) {
    const id = S.taskId;
    const rows = [];
    const gate = gateOpen(taskCatKey(d));
    const muted = !!S.mutedToday[id];
    // 总闸关着时开关显示关、也拨不开——点它弹窗引导去个人中心（不留小字）
    rows.push(reminderRow(
      "本次提醒",
      done ? "本次已打卡，提醒已锁定"
        : muted ? "这一次不响铃，下次出现照常提醒" : "关闭只压这一次，下次出现照常响铃",
      done ? false : (gate && !muted),
      "muteToday",
      done, accent.fg));
    // 家属通知（V10.52 · 真机同款）：系列级一档；家属通道 = 通知家属 × 已绑定 × 类别，已打卡同锁。
    // V0.0 没有家属通道，整行不出现（真机 AddEditTaskView 按 includesFamily 决定排不排这颗开关）
    if (genHasFamily()) {
      const isWatchingWard = !!(S.watchingWardName && S.watchingWardName !== S.currentPersonName);
      const famTitle = isWatchingWard ? "通知守护TA的人" : "通知守护我的人";
      const gNames = confirmedGuardianNamesSummaryForActivePerson();
      const famCap = done
        ? "本次已打卡，提醒已锁定"
        : (gNames ? `到点与完成打卡时通知：${gNames}` : (isWatchingWard ? "尚未添加守护TA的人" : "尚未添加守护我的人"));
      rows.push(reminderRow(famTitle,
        famCap,
        done ? false : (familyGateOpen(taskCatKey(d)) && !S.famOff[id]),
        "famNotify", done, accent.fg, false));
    }

    return `<div class="sec-label">到点提醒</div>
      <div class="list-island">${rows.join("")}</div>`;
  }

  /// 添加 / 编辑计划 · 到点提醒：与查看计划同款一档「本次提醒」。
  /// 「本次」= 系列里的第一次（新建的循环计划从起始日开始，那一次就是它的「本次」）。
  /// 切换写进草稿，随「添加 / 确认」一起落库。
  function draftReminderSwitch(d, accent) {
    const gate = gateOpen(taskCatKey(d));
    const rows = [];
    rows.push(reminderRow(
      "本次提醒",
      d.muteFirst ? "这一次不响铃，下次出现照常提醒" : "关闭只压这一次，下次出现照常响铃",
      gate && !d.muteFirst, "draftMuteToday", false, accent.fg));
    // 通知守护我的人 / 通知守护TA的人（V10.191）：写进草稿随「添加 / 确认」落库；闸关着时拨不开、弹层引导。V0.0 不出现
    if (genHasFamily()) {
      const isWatchingWard = !!(S.watchingWardName && S.watchingWardName !== S.currentPersonName);
      const famTitle = isWatchingWard ? "通知守护TA的人" : "通知守护我的人";
      const gNames = confirmedGuardianNamesSummaryForActivePerson();
      const famCap = gNames ? `到点与完成打卡时通知：${gNames}` : (isWatchingWard ? "尚未添加守护TA的人" : "尚未添加守护我的人");
      rows.push(reminderRow(famTitle, famCap,
        familyGateOpen(taskCatKey(d)) && d.famNotify !== false,
        "draftFamNotify", false, accent.fg, false));
    }

    return `<div class="sec-label">到点提醒</div>
      <div class="list-island">${rows.join("")}</div>`;
  }

  /// `on` = 会提醒（与个人中心总闸同向）。铃铛跟随页面主色：会提醒 = 主色，已静音 = 次级灰。
  function reminderRow(title, caption, on, actName, disabled, fg) {
    const icoSize = 18;
    const ico = `<span style="display:grid;place-items:center;width:${icoSize}px;height:${icoSize}px;flex:0 0 ${icoSize}px;color:${on ? fg : "var(--secondary)"}">${on ? I.bell : I.bellSlash}</span>`;
    const cap = caption ? `<div class="s13 t-sec" style="margin-top:2px">${caption}</div>` : "";
    const row = `<div class="list-row" style="min-height:56px;gap:12px">
      ${ico}
      <div class="grow">
        <div class="s16 fb t">${title}</div>
        ${cap}
      </div>
      <button class="toggle ${on ? "on" : ""}" ${disabled ? 'disabled style="pointer-events:none;cursor:default"' : `data-act="${actName}"`} type="button"><i></i></button>
    </div>`;
    // 禁用时整行压暗（已打卡锁定）
    const dim = disabled ? "opacity:.4;" : "";
    return `<div style="${dim}">${row}</div>`;
  }

  /// 今日已打卡时页尾的出口：取消后提醒开关和删除重新出现（真机 store.toggleCompletion 的反向）
  function cancelCheckInBlock(accent) {
    return `<div class="s12 t-sec" style="margin-top:14px">本次已打卡，先取消打卡才能更新</div>
      <button class="cta-ghost" style="margin-top:8px;color:${accent.fg};background:${accent.muted}" data-act="undoCheckIn" type="button">${I.undo}取消本次打卡</button>`;
  }

  /// 今日之前和已打卡不进这里（同真机 showsDeleteButton）
  function deletePlanButtons(d) {
    if (d.cycle) {
      return `<div class="col gap10 mt16">
        <button class="cta-ghost" style="color:#F05A6E;background:rgba(240,90,110,.08)" data-act="delToday" type="button">${I.trash}删除本次计划</button>
        <button class="cta-ghost" style="color:#F05A6E;background:rgba(240,90,110,.08)" data-act="delAll" type="button">${I.trash}删除本次和后续计划</button>
      </div>`;
    }
    return `<button class="cta-ghost mt16" style="color:#F05A6E;background:rgba(240,90,110,.08)" data-act="delTask" type="button">${I.trash}删除计划</button>`;
  }

  function taskEditor(mode) {
    const t = SEED.find((x) => x.id === S.taskId) || SEED[0] || { id: "", cat: "monitoring", h: 8, m: 0, title: "", note: "" };
    if (mode !== "view" && !S.draft) initDraft(mode === "edit" ? t : null);
    const d = mode === "view" ? taskDraftFromSeed(t) : S.draft;
    const editable = mode !== "view";
    const viewing = !editable;
    const title = mode === "view" ? "查看计划" : mode === "edit" ? "更新计划" : S.addTitle;
    const left = mode === "edit" ? cap(I.x, "取消") : cap(I.chevL, "返回");
    const done = !!S.completed[t.id] && mode !== "add";
    const past = mode !== "add" && (S.taskOccurrence || toYMD(demoDate())) < toYMD(demoDate());
    // 今日之前、以及该日已打卡：到点提醒和删除都不出现
    const hideRemindDelete = viewing && (past || done);
    // 今日之前、以及该日已打卡：更新置灰禁用
    const updateLocked = past || done;
    const right = mode === "view"
      ? (updateLocked
          ? `<button class="cap" type="button" style="opacity:.35" disabled aria-label="${past ? "历史计划，更新已锁定" : "本次已打卡，更新已锁定"}">${I.pencil}更新</button>`
          : `<button class="cap" data-act="editTask" type="button">${I.pencil}更新</button>`)
      : `<button class="cap" data-act="${mode === "add" ? "addTask" : "saveTask"}" type="button">${I.check}${mode === "add" ? "添加" : "确认"}</button>`;
    const accent = editorAccent(d, done);
    const lockTime = S.lockBlock && mode === "add";
    const lockRec = S.lockRecurrence && mode === "add";
    const chip = (opts) => optChip({ ...opts, viewing, accent });
    const weekdays = [[2, "一"], [3, "二"], [4, "三"], [5, "四"], [6, "五"], [7, "六"], [1, "日"]];
    // 两大类：事项 / 时间与提醒。标题行可点折叠，默认全展开（折叠只影响看不看得见）
    const groupOpen = (g) => !(S.editorCollapsed || []).includes(g);
    const groupHead = (g, lab) => `<button class="ed-group-head" data-act="editorGroup" data-g="${g}" type="button" style="color:${accent.fg}">
        <span>${lab}</span>
        <span class="ed-group-chev ${groupOpen(g) ? "open" : ""}" style="color:${accent.fg}">${I.chevD}</span>
      </button>`;
    const nameBlock = `
        <div class="sec-label" style="margin-top:0">事项名称</div>
        ${editable
          ? `<input class="voice-box w100" name="taskTitle" style="color:${accent.fg};border:0" placeholder="填写事项名称" value="${String(d.title || "").replace(/"/g, "&quot;")}" />`
          : `<div class="voice-box" style="color:${accent.fg}">${d.title}</div>`}
        <div class="sec-label">补充备注</div>
        ${editable
          ? `<textarea class="voice-box tall w100" name="taskNote" style="color:${accent.fg};border:0;resize:none;font-family:inherit" placeholder="补充说明，例如剂量 / 注意事项">${d.note || ""}</textarea>`
          : `<div class="voice-box tall" style="color:${accent.fg}">${d.note}</div>`}
        ${editorVitalsBlock(d, mode, done, accent)}
        <div class="sec-label">事项分类</div>
        <div class="grid3">${Object.keys(CAT).map((c) =>
          chip({ selected: c === d.cat, label: CAT[c].chip, icon: CAT_ICON[c](), act: "draftCat", extra: `data-c="${c}"`,
            locked: (S.lockCategory && mode === "add") || (S.lockProfessional && mode === "add" && PROFESSIONAL.has(c)) })).join("")}
          ${(S.customCats || []).map((c) =>
            chip({ selected: d.cat === "custom" && d.customId === c.id, label: c.name, icon: I[UNIFIED_CUSTOM_ICON], act: "pickCustomCat", extra: `data-id="${c.id}"`, locked: S.lockCategory && mode === "add" })).join("")}
          ${!(S.lockCategory && mode === "add") && mode !== "view" ? chip({ selected: false, label: "自定义", icon: I.plus, dash: true, act: "openCustomCat" }) : ""}
        </div>`;
    // 已保存计划在循环态下：查看态展示「今天日期」，更改态展示「新开始日期」；点「更新」锁定开始日期为「原开始日期」。首页虚框仍锁定当天。
    const showOcc = mode !== "add" && d.cycle;
    const lockStart = lockRec || (mode === "edit" && showOcc);
    const dateRow = (label, ymd, act, locked) => {
      const on = editable && !locked;
      // 查看态三个日期都不可改，整条置灰；更新态只把锁定的开始日期压灰
      const muted = !editable || locked;
      return `
        <div class="sec-label">${label}</div>
        <button class="date-row" style="background:${muted ? "rgba(130,142,165,.10)" : accent.muted};color:${muted ? "rgba(130,142,165,.72)" : accent.fg}" ${on ? `data-act="${act}"` : ""} type="button"${muted ? " disabled" : ""}>
          <span>${planDateLabel(ymd, d.cycle || label !== "日期")}</span>
          ${on ? `<span class="dim">${I.chevUD}</span>` : ""}
        </button>`;
    };
    const anchor = mode === "edit" && showOcc ? (d.occurrence || d.onceDate) : d.onceDate;
    const endYmd = resolvedDraftEndYmd(d, anchor);
    const occLabel = viewing ? "今天日期" : "新开始日期";
    const occYmd = viewing ? toYMD(demoDate()) : (d.occurrence || defaultNewPlanStartYmd(t));
    const occurrenceRow = showOcc
      ? dateRow(occLabel, occYmd, "openOccurrenceDate", false)
      : "";
    const schedPrompt = mode === "edit" ? buildScheduleUpdatePrompt(t, d) : null;
    const splitNote = schedPrompt
      ? `<div class="month-day-hint">${esc(schedPrompt.inlineMessage)}</div>`
      : "";
    const startLabel = (mode === "edit" && showOcc) ? "原开始日期" : (d.cycle ? "开始日期" : "日期");
    const dateBlock = `
        <div class="sec-label" style="margin-top:0">计划类型</div>
        <div class="flex gap8">
          ${chip({ selected: !d.cycle, label: "单日计划", icon: I.cal, act: "draftCycle", extra: 'data-v="0"', locked: lockRec })}
          ${chip({ selected: d.cycle, label: "循环计划", icon: I.cycle, act: "draftCycle", extra: 'data-v="1"', locked: lockRec })}
        </div>
        ${dateRow(startLabel, d.onceDate, "openOnceDate", lockStart)}
        ${occurrenceRow}
        ${splitNote}`;
    const cycleBlock = `
        <div class="sec-label">循环规则</div>
        <div class="grid3 tight">${[["daily", "每日"], ["weekly", "每周"], ["monthly", "每月"]].map(([r, lab]) =>
          chip({ selected: d.rule === r, label: lab, act: "draftRule", extra: `data-r="${r}"` })).join("")}</div>
        ${d.rule === "weekly" ? `<div class="flex gap6 mt10">${weekdays.map(([n, lab]) =>
          chip({ selected: (d.weekdays || []).includes(n), label: lab, act: "draftWeek", extra: `data-w="${n}"`, compact: true })).join("")}</div>` : ""}
        ${d.rule === "monthly" ? `<div class="month-day-grid mt10">${Array.from({ length: 31 }, (_, i) => i + 1).map((day) =>
          chip({ selected: (d.monthDays || []).includes(day), label: String(day), act: "draftMonthDay", extra: `data-d="${day}"`, compact: true })).join("")}
          ${chip({ selected: (d.monthDays || []).includes(0), label: "月末", act: "draftMonthDay", extra: 'data-d="0"', compact: true })}</div>
          ${monthDayHints(d.monthDays || []).map((h) => `<div class="month-day-hint">${h}</div>`).join("")}` : ""}
        <div class="sec-label">持续时长</div>
        <div class="grid3 tight">${durationOpts(d.rule).map(([id, lab]) =>
          chip({ selected: d.duration === id, label: lab, act: "draftDur", extra: `data-d="${id}"`, compact: true })).join("")}</div>
        ${dateRow("结束时间", endYmd, "openSeriesEnd", false)}`;
    const momentBlock = `
        <div class="sec-label">时间段</div>
        <div class="grid3 tight">${BLOCKS.map((b) =>
          `<button class="opt-chip block-chip ${b.id === d.block ? "on" : ""}" style="background:${b.id === d.block ? accent.fg : (viewing || lockTime) ? "rgba(130,142,165,.10)" : accent.muted};color:${b.id === d.block ? "#fff" : (viewing || lockTime) ? "rgba(130,142,165,.50)" : accent.fg}" ${editable && !lockTime ? `data-act="draftBlock" data-b="${b.id}"` : ""} type="button"><b>${b.title}</b><small>${b.range}</small></button>`
        ).join("")}</div>
        <div class="flex gap12 mt16">
          <div class="grow">
            <div class="sec-label" style="margin-top:0">提醒时间</div>
            <button class="time-pill" style="background:${accent.muted};color:${accent.fg}" ${editable ? 'data-act="editDraftTime"' : ""} type="button">${d.hour}:${pad(d.min)}${editable ? I.chevUD : ""}</button>
          </div>
          <div class="grow">
            <div class="sec-label" style="margin-top:0">打卡时间</div>
            ${done
              ? `<button class="time-pill" style="background:${accent.muted};color:${accent.fg}" type="button">07:18</button>`
              : `<span class="time-pill idle">未打卡</span>`}
          </div>
        </div>
        ${hideRemindDelete ? "" : (viewing ? reminderSwitches(d, done, accent) : draftReminderSwitch(d, accent))}
        ${mode === "view" && !hideRemindDelete ? deletePlanButtons(d) : ""}
        ${viewing && done && !past ? cancelCheckInBlock(accent) : ""}`;
    // 计划详情页（V0.0–V0.2 全代际统一同步）：无滚动「三联动态磁贴 + 单屏模块舞台」切换架构（事项内容 / 时刻与提醒 / 周期与日期）
    const modIdx = Math.max(0, Math.min(2, S.v02Mod ?? 0));
      const blkObj = BLOCKS.find((b) => b.id === d.block) || BLOCKS[0];
      const vitalsHTML = editorVitalsBlock(d, mode, done, accent);

      const catLabel = d.cat === "custom"
        ? ((S.customCats || []).find((x) => x.id === d.customId)?.name || "自定义")
        : (CAT[d.cat]?.chip || "事项");
      const contentPrimary = (d.title || "").trim() || catLabel;
      const timePrimary = `${pad(d.hour)}:${pad(d.min)}`;
      const ruleMap = { daily: "每日", weekly: "每周", monthly: "每月", custom: "自定义" };
      const schedPrimary = d.cycle ? (ruleMap[d.rule] || "每日") : "单日计划";
      const durLabel = (() => {
        if (!d.cycle) {
          const dt = parseYMD(d.onceDate || toYMD(demoDate()));
          return `${dt.getMonth() + 1}月${dt.getDate()}日`;
        }
        const opt = durationOpts(d.rule).find(([id]) => id === d.duration);
        return opt ? opt[1] : "一年";
      })();

      const liveTile = (idx, ico, label, val) => {
        const on = modIdx === idx;
        const bg = on ? accent.fg : "rgba(255,255,255,.92)";
        const border = on ? "transparent" : `${accent.fg}24`;
        const shadow = on ? `0 6px 14px ${accent.fg}36` : "0 2px 6px rgba(0,0,0,.03)";
        const topFg = on ? "rgba(255,255,255,.92)" : "var(--secondary)";
        const icoFg = on ? "rgba(255,255,255,.92)" : accent.fg;
        const valFg = on ? "#fff" : accent.fg;
        return `<button class="v02-live-tile ${on ? "on" : ""}" style="background:${bg};border-color:${border};box-shadow:${shadow}" data-act="v02PickMod" data-m="${idx}" type="button">
          <div class="t-top" style="color:${topFg}"><span style="color:${icoFg};display:inline-flex">${ico}</span><span>${label}</span></div>
          <div class="t-val" style="color:${valFg}">${esc(val)}</div>
        </button>`;
      };

      const liveSwitcher = `
        <div class="v02-live-tiles">
          ${liveTile(0, I.doc, "事项内容", contentPrimary)}
          ${liveTile(1, I.bell, "时刻与提醒", timePrimary)}
          ${liveTile(2, I.cal, "周期与日期", schedPrimary)}
        </div>`;

      const modHead = (ico, text) => `
        <div class="v02-mod-head">
          <span class="v02-mod-ico" style="background:${accent.muted};color:${accent.fg}">${ico}</span>
          <span class="v02-mod-title" style="color:${accent.fg}">${text}</span>
        </div>`;

      // 模块一：事项内容（事项名称 + 补充备注 + 今日血压 + 事项分类）
      const isCatLocked = viewing || (S.lockCategory && mode === "add");
      const catIcoHTML = d.cat === "custom" ? I[UNIFIED_CUSTOM_ICON] : (CAT_ICON[d.cat] ? CAT_ICON[d.cat]() : I.doc);
      const catKindBadge = PROFESSIONAL.has(d.cat) ? "专业康复日程" : "日常健康管理";
      const trimmedNote = String(d.note || "").trim();
      const visibleCatKeys = Object.keys(CAT).filter((c) => !(S.lockProfessional && mode === "add" && PROFESSIONAL.has(c)));

      const contentCard = `
        <div class="v02-editor-card">
          ${modHead(I.doc, mode !== "add" && rxOn() && S.rx && S.rx[t.id] ? `事项内容<span class="rx-chip" style="margin-left:8px">医嘱</span>` : "事项内容")}
          <div class="sec-label" style="margin-top:0">事项名称</div>
          ${editable
            ? `<input class="voice-box w100" name="taskTitle" style="color:${accent.fg};border:0;font-size:calc(16px * var(--fs));font-weight:600;min-height:${d.cat === "monitoring" ? "42px" : "46px"}" placeholder="填写事项名称" value="${String(d.title || "").replace(/"/g, "&quot;")}" />`
            : `<div class="v02-ro-box" style="background:${accent.muted};color:${accent.fg};font-size:calc(16px * var(--fs));font-weight:600;min-height:${d.cat === "monitoring" ? "42px" : "46px"}">${esc(contentPrimary)}</div>`}
          <div class="sec-label">补充备注</div>
          ${editable
            ? `<textarea class="voice-box w100" name="taskNote" style="color:${accent.fg};border:0;resize:none;font-family:inherit;font-size:calc(16px * var(--fs));font-weight:600;min-height:${d.cat === "monitoring" ? "42px" : "46px"}" placeholder="补充说明，例如剂量 / 注意事项">${d.note || ""}</textarea>`
            : `<div class="v02-ro-box note" style="background:${accent.muted};color:${trimmedNote ? accent.fg : "var(--secondary)"};opacity:${trimmedNote ? 1 : 0.78};font-size:calc(16px * var(--fs));font-weight:600;min-height:${d.cat === "monitoring" ? "42px" : "46px"}">${trimmedNote ? esc(trimmedNote) : "暂无补充备注"}</div>`}
          ${vitalsHTML}
          <div class="sec-label">事项分类</div>
          ${isCatLocked
            ? `<div class="v02-active-chip" style="background:${accent.muted};color:${accent.fg}">
                <span style="display:inline-flex;opacity:.85">${catIcoHTML}</span>
                <span style="font-size:calc(15px * var(--fs));font-weight:600">${esc(catLabel)}</span>
              </div>`
            : `<div class="grid3 tight">${visibleCatKeys.map((c) =>
                chip({ selected: c === d.cat, label: CAT[c].chip, icon: CAT_ICON[c](), act: "draftCat", extra: `data-c="${c}"` })).join("")}
                ${(S.customCats || []).map((c) =>
                  chip({ selected: d.cat === "custom" && d.customId === c.id, label: c.name, icon: I[UNIFIED_CUSTOM_ICON], act: "pickCustomCat", extra: `data-id="${c.id}"` })).join("")}
                ${chip({ selected: false, label: "自定义", icon: I.plus, act: "openCustomCat" })}
              </div>`}
        </div>`;

      // 模块二：时刻与提醒（1:1 对称「提醒时间 & 打卡时间」+ 醒目「时间段」+「到点提醒」）
      const periodChip = (b) => {
        const sel = b.id === d.block;
        const lkd = viewing || lockTime;
        const bg = sel ? accent.fg : lkd ? "rgba(130,142,165,.10)" : accent.muted;
        const fg = sel ? "#fff" : lkd ? "rgba(130,142,165,.55)" : accent.fg;
        const subFg = sel ? "rgba(255,255,255,.95)" : lkd ? "rgba(130,142,165,.50)" : accent.fg;
        const dis = lkd && !sel;
        return `<button class="v02-period-chip" style="background:${bg};color:${fg}" ${!dis && editable && !lockTime ? `data-act="draftBlock" data-b="${b.id}"` : "disabled"} type="button">
          <span class="p-name">${b.title}</span>
          <span class="p-range" style="color:${subFg};opacity:${sel ? 1 : 0.88}">${b.range}</span>
        </button>`;
      };

      const v02SwitchRows = [];
      if (!hideRemindDelete) {
        const gate = gateOpen(taskCatKey(d));
        const id = S.taskId || "t1";
        const muted = viewing ? !!S.mutedToday[id] : !!d.muteFirst;
        const on = done ? false : (gate && !muted);
        v02SwitchRows.push(reminderRow("本次提醒", "", on, viewing ? "muteToday" : "draftMuteToday", done, accent.fg));
        if (genHasFamily()) {
          const isWatchingWard = !!(S.watchingWardName && S.watchingWardName !== S.currentPersonName);
          const famTitle = isWatchingWard ? "通知守护TA的人" : "通知守护我的人";
          const famOn = done ? false : (familyGateOpen(taskCatKey(d)) && (viewing ? !S.famOff[id] : d.famNotify !== false));
          v02SwitchRows.push(`<div class="v02-date-sep" style="background:${accent.muted};margin:0"></div>` + reminderRow(famTitle, "", famOn, viewing ? "famNotify" : "draftFamNotify", done, accent.fg));
        }
      }

      const lockedRemindStatusHTML = (viewing && hideRemindDelete)
        ? `<div class="sec-label">到点提醒</div>
           <div class="v02-ro-row" style="background:${accent.muted};padding:14px">
             <span class="v02-ro-ico" style="background:${accent.muted};color:${accent.fg}">${done ? I.check : I.bellSlash}</span>
             <div style="display:flex;flex-direction:column;gap:3px">
               <span style="font-size:calc(16px * var(--fs));font-weight:700;color:${accent.fg}">${done ? "今日已完成打卡，本次提醒已结束" : "历史日程记录，提醒已结束"}</span>
               <span style="font-size:calc(13px * var(--fs));font-weight:500;color:var(--secondary)">${done && !past ? "如需调整提醒或更新计划，请先在底部取消本次打卡" : "历史日期仅作记录回顾，不会触发响铃提醒"}</span>
             </div>
           </div>`
        : "";

      const timeAndRemindCard = `
        <div class="v02-editor-card">
          ${modHead(I.bell, "时刻与提醒")}
          <div class="v02-twin-times">
            <button class="v02-time-box" style="background:${accent.muted};color:${accent.fg}" ${editable ? 'data-act="editDraftTime"' : "disabled"} type="button">
              <div class="v02-time-top">
                <span class="ico" style="color:${accent.fg};opacity:.75">${I.bell}</span>
                <span class="lab">提醒时间</span>
                ${editable ? `<span class="chev" style="color:${accent.fg}">${I.chevUD}</span>` : ""}
              </div>
              <div class="v02-time-val" style="color:${accent.fg}">${pad(d.hour)}:${pad(d.min)}</div>
            </button>
            <div class="v02-time-box ${done ? "" : "idle"}" style="${done ? `background:${accent.muted};color:${accent.fg}` : ""}">
              <div class="v02-time-top">
                <span class="ico" style="color:${done ? accent.fg : "var(--secondary)"};opacity:.75">${done ? I.check : I.clock}</span>
                <span class="lab">打卡时间</span>
                ${done && editable ? `<span class="chev" style="color:${accent.fg}">${I.chevUD}</span>` : ""}
              </div>
              ${done
                ? `<div class="v02-time-val" style="color:${accent.fg}">07:18</div>`
                : `<div class="v02-time-val idle-txt">未打卡</div>`}
            </div>
          </div>
          <div class="sec-label">时间段</div>
          ${(viewing || lockTime)
            ? `<div class="v02-active-chip" style="background:${accent.muted};color:${accent.fg}">
                <span style="display:inline-flex;opacity:.85">${I.clock}</span>
                <span style="font-size:calc(15px * var(--fs));font-weight:700">${blkObj.title}</span>
                <span style="font-size:calc(14px * var(--fs));font-weight:600;font-variant-numeric:tabular-nums;opacity:.85">${blkObj.range}</span>
              </div>`
            : `<div class="v02-grid4 tight">${BLOCKS.map(periodChip).join("")}</div>`}
          ${v02SwitchRows.length ? `
            <div class="sec-label">到点提醒</div>
            <div class="v02-remind-box" style="background:${accent.muted}">${v02SwitchRows.join("")}</div>` : lockedRemindStatusHTML}
        </div>`;

      // 模块三：周期与日期（计划类型 + 执行日期/起止日期 + 持续时长 + 循环规则）
      const alignedDateRow = (label, ymd, act, locked) => {
        const on = editable && !locked;
        const valColor = viewing ? accent.fg : (locked ? `${accent.fg}BF` : accent.fg);
        const padStyle = viewing ? "11px 16px" : (d.cycle && d.rule === "monthly" ? "11px 16px" : "14px 16px");
        return `<button class="v02-date-row" style="padding:${padStyle}" ${on ? `data-act="${act}"` : "disabled"} type="button">
          <span class="lab">${label}</span>
          <span class="val" style="color:${valColor}">
            <span>${planDateLabel(ymd, true)}</span>
            ${on ? I.chevUD : ""}
          </span>
        </button>`;
      };
      const dateSep = `<div class="v02-date-sep" style="background:${accent.muted}"></div>`;

      let datesRowsHTML = "";
      if (!d.cycle) {
        datesRowsHTML = viewing
          ? `${alignedDateRow("执行日期", d.onceDate, "openOnceDate", true)}
             ${dateSep}
             ${alignedDateRow("今天日期", occYmd, "openOccurrenceDate", true)}`
          : alignedDateRow("日期", d.onceDate, "openOnceDate", lockStart);
      } else if (mode === "edit" && showOcc) {
        datesRowsHTML = `
          ${alignedDateRow("原开始日期", d.onceDate, "openOnceDate", true)}
          ${dateSep}
          ${alignedDateRow("新开始日期", occYmd, "openOccurrenceDate", false)}
          ${dateSep}
          ${alignedDateRow("结束时间", endYmd, "openSeriesEnd", false)}`;
      } else if (viewing && showOcc) {
        datesRowsHTML = `
          ${alignedDateRow("开始日期", d.onceDate, "openOnceDate", true)}
          ${dateSep}
          ${alignedDateRow("今天日期", occYmd, "openOccurrenceDate", true)}
          ${dateSep}
          ${alignedDateRow("结束时间", endYmd, "openSeriesEnd", true)}`;
      } else {
        datesRowsHTML = `
          ${alignedDateRow("开始日期", d.onceDate, "openOnceDate", lockStart)}
          ${dateSep}
          ${alignedDateRow("结束时间", endYmd, "openSeriesEnd", false)}`;
      }

      const viewDurationSummary = (() => {
        if (!d.cycle) return "1天（单日）";
        const totalDays = Math.max(1, Math.floor((parseYMD(endYmd) - parseYMD( anchor || d.onceDate || toYMD(demoDate()) )) / 86400000) + 1);
        const opt = durationOpts(d.rule).find(([id]) => id === d.duration);
        if (opt) {
          return opt[1].endsWith("天") ? `共 ${opt[1]}` : `${opt[1]}（${totalDays}天）`;
        }
        return `共 ${totalDays}天`;
      })();

      const viewRecurrenceSummary = (() => {
        if (!d.cycle) return "仅执行当日一次（不循环）";
        if (d.rule === "daily") return "每日重复执行";
        if (d.rule === "weekly") {
          const picked = weekdays.filter(([n]) => (d.weekdays || []).includes(n)).map(([, lab]) => `周${lab}`);
          if (picked.length === 7) return "每周（周一至周日）";
          return picked.length ? `每周（${picked.join("、")}）` : "每周重复执行";
        }
        if (d.rule === "monthly") {
          const days = (d.monthDays || []).filter((x) => x > 0).sort((a, b) => a - b).map((x) => `${x}日`);
          if ((d.monthDays || []).includes(0)) days.push("月末");
          return days.length ? `每月${days.join("、")}` : "每月重复执行";
        }
        return "自定义间隔重复执行";
      })();

      const planTypeHTML = (viewing || lockRec)
        ? `<div class="v02-active-chip" style="background:${accent.muted};color:${accent.fg}">
            <span style="display:inline-flex;opacity:.85">${d.cycle ? I.cycle : I.cal}</span>
            <span style="font-size:calc(15px * var(--fs));font-weight:700">${d.cycle ? "循环计划" : "单日计划"}</span>
          </div>`
        : `<div class="flex gap8">
            ${chip({ selected: !d.cycle, label: "单日计划", icon: I.cal, act: "draftCycle", extra: 'data-v="0"', locked: lockRec })}
            ${chip({ selected: d.cycle, label: "循环计划", icon: I.cycle, act: "draftCycle", extra: 'data-v="1"', locked: lockRec })}
          </div>`;

      const durationHTML = viewing
        ? `<div class="v02-active-chip" style="background:${accent.muted};color:${accent.fg}">
            <span style="display:inline-flex;opacity:.85">${I.clock}</span>
            <span style="font-size:calc(15px * var(--fs));font-weight:700;font-variant-numeric:tabular-nums">${esc(viewDurationSummary)}</span>
          </div>`
        : `<div class="grid3 tight">${durationOpts(d.rule).map(([id, lab]) =>
            chip({ selected: d.duration === id, label: lab, act: "draftDur", extra: `data-d="${id}"`, compact: true })).join("")}</div>`;

      const recurrenceHTML = viewing
        ? `<div class="v02-active-chip" style="background:${accent.muted};color:${accent.fg}">
            <span style="display:inline-flex;opacity:.85">${I.cycle}</span>
            <span style="font-size:calc(15px * var(--fs));font-weight:700">${esc(viewRecurrenceSummary)}</span>
          </div>`
        : `<div class="v02-grid4">${[["daily", "每日"], ["weekly", "每周"], ["monthly", "每月"]].map(([r, lab]) =>
            chip({ selected: d.rule === r, label: lab, act: "draftRule", extra: `data-r="${r}"`, compact: true })).join("")}
            ${chip({ selected: d.rule === "custom", label: "自定义", act: "draftRule", extra: 'data-r="daily"', compact: true })}
          </div>
          ${d.rule === "weekly" ? `<div class="flex gap6 mt10">${weekdays.map(([n, lab]) =>
            chip({ selected: (d.weekdays || []).includes(n), label: lab, act: "draftWeek", extra: `data-w="${n}"`, compact: true })).join("")}</div>` : ""}
          ${d.rule === "monthly" ? `<div class="month-day-grid mt8">${Array.from({ length: 31 }, (_, i) => i + 1).map((day) =>
            chip({ selected: (d.monthDays || []).includes(day), label: String(day), act: "draftMonthDay", extra: `data-d="${day}"`, compact: true })).join("")}
            ${chip({ selected: (d.monthDays || []).includes(0), label: "月末", act: "draftMonthDay", extra: 'data-d="0"', compact: true })}</div>` : ""}`;

      const scheduleCard = `
        <div class="v02-editor-card">
          ${modHead(I.cal, "周期与日期")}
          <div class="sec-label" style="margin-top:0">计划类型</div>
          ${planTypeHTML}
          <div class="sec-label">${d.cycle ? "起止日期" : "执行日期"}</div>
          <div class="v02-dates-list" style="background:${accent.muted}">
            ${datesRowsHTML}
          </div>
          ${d.cycle ? `
            <div class="sec-label" style="display:flex;align-items:center;justify-content:space-between">
              <span>持续时长</span>
              ${!viewing && !durationOpts(d.rule).some(([id]) => id === d.duration) ? `<span style="color:${accent.fg};font-size:calc(12px * var(--fs));font-weight:700">${esc(viewDurationSummary)}</span>` : ""}
            </div>
            ${durationHTML}
            <div class="sec-label">循环规则</div>
            ${recurrenceHTML}
          ` : ""}
        </div>`;

      const activeStageHTML = modIdx === 0 ? contentCard : modIdx === 1 ? timeAndRemindCard : scheduleCard;

      let bottomDockHTML = "";
      if (mode === "view" && !hideRemindDelete) {
        const persisted = SEED.find((x) => x.id === S.taskId);
        const isRec = persisted ? persisted.cycle !== false : !!d.cycle;
        bottomDockHTML = `<div class="v02-bottom-dock">${isRec
          ? `<div class="duo-del-col">
              <button class="del-plan" style="margin-top:0;width:100%" data-act="deleteThisPlan" type="button">${I.trash}删除本次计划</button>
              <button class="del-plan" style="margin-top:0;width:100%" data-act="deleteFuturePlans" type="button">${I.trash}删除本次和后续计划</button>
            </div>`
          : `<button class="del-plan" style="margin-top:0;width:100%" data-act="deletePlan" type="button">${I.trash}删除计划</button>`}</div>`;
      } else if (viewing && done && !past) {
        bottomDockHTML = `<div class="v02-bottom-dock"><button class="cta-ghost" style="color:${accent.fg};background:${accent.muted};margin-top:0" data-act="undoCheckIn" type="button">${I.undo}取消本次打卡</button></div>`;
      }

      return `<div class="page editor-page" style="--accent:${accent.fg}">
        ${navBar(left.replace('data-act="back"', mode === "edit" ? 'data-act="cancelEdit"' : mode === "add" ? 'data-act="cancelAdd"' : 'data-act="back"'), title, right)}
        <div class="v02-stage-page" id="v02-stage-swipe">
          ${liveSwitcher}
          ${activeStageHTML}
          ${bottomDockHTML}
        </div>
      </div>`;
    }

  function calDays(green) {
    const todayYMD = toYMD(demoDate());
    const APPT_YMD = "2026-09-06";
    // 每格：选中由 S.calSelYMD 驱动；过去日未选中略淡；复查日红；今日带状态点
    const cell = (d) => {
      const ymd = toYMD(d);
      const isToday = ymd === todayYMD;
      const selected = ymd === S.calSelYMD;
      const past = ymd < todayYMD;
      const appt = ymd === APPT_YMD;
      const cls = [selected ? "on" : "", appt ? "appt" : "", green && selected ? "green" : "", past && !selected && !appt ? "dim" : ""]
        .filter(Boolean).join(" ");
      const dot = appt ? "appt" : (isToday || appt) ? "done" : "";
      return `<div class="day-cell" data-act="pickDay" data-ymd="${ymd}" data-day="d">
        <div class="day-num ${cls}">${d.getDate()}</div>
        <div class="day-dot ${dot}"></div>
      </div>`;
    };
    const cells = [];
    if (S.calMode === "month") {
      const month = new Date(2026, 8 + S.calOffset, 1);
      const padN = month.getDay();
      const last = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
      for (let i = 0; i < padN; i++) cells.push(`<div class="day-cell"></div>`);
      for (let day = 1; day <= last; day++) cells.push(cell(new Date(month.getFullYear(), month.getMonth(), day)));
      return cells.join("");
    }
    const start = weekStart(S.calOffset);
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      cells.push(cell(d));
    }
    return cells.join("");
  }

  /// 健康档案 Demo 归档：按来源分组，复查为空走空态文案
  const ARCHIVE_DEMO = {
    baseline: { title: "基础报告", empty: "还没有基础报告", groups: [
      { title: "出院记录", pages: 3 },
      { title: "检查报告", pages: 2 },
    ] },
    review: { title: "复查报告", empty: "还没有复查报告", groups: [] },
  };
  /// 复查批次是运行时累积的（提交复查资料后并入「资料合集」），复位时回初始快照
  const ARCHIVE_DEMO0 = { review: ARCHIVE_DEMO.review.groups.slice() };

  /// 集章选中日的完成集合：今日取真实打卡态，过去日按 Demo 采样（日历格与页面共用，保证两处一致）
  /// Demo：入组首日之前没有计划，用来走空态
  const STAMP_FIRST_YMD = "2026-09-07";
  function stampDoneSet(ymd) {
    if (ymd < STAMP_FIRST_YMD) return new Set();
    if (ymd === toYMD(demoDate())) {
      return new Set(liveTasks(ymd).filter((t) => S.completed[t.id]).map((t) => t.id));
    }
    return rxOverlayPastDone(ymd, new Set(liveTasks(ymd).filter((t, i) => i % 3 !== 2).map((t) => t.id)));
  }

  function stampCalDays() {
    const month = new Date(2026, 8 + S.stampCalOffset, 1);
    const padN = month.getDay();
    const last = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    const today = demoDate();
    const cells = [];
    for (let i = 0; i < padN; i++) cells.push(`<div class="day-cell"></div>`);
    for (let day = 1; day <= last; day++) {
      const d = new Date(month.getFullYear(), month.getMonth(), day);
      const ymd = toYMD(d);
      const isToday = d.getTime() === today.getTime();
      const future = ymd > toYMD(today);
      const selected = ymd === S.stampSelYMD;
      // 未来日不可选；今日用真实集章数，过去日给 Demo 采样数
      const tot = liveTasks(ymd).length;
      const score = future || !tot ? "" : `${stampDoneSet(ymd).size}/${tot}`;
      cells.push(`<div class="day-cell" ${future ? "" : `data-act="pickStampDay" data-ymd="${ymd}"`} data-day="d"${future ? ' aria-disabled="true"' : ""}>
        <div class="day-num ${selected ? "on" : ""} ${future ? "dim" : ""}">${day}</div>
        <div class="s12 t-sec">${score}</div>
      </div>`);
    }
    return cells.join("");
  }

  /// 首页方案（真机 TodayScheme，仅 Debug 菜单驱动）——本原型渲染方案一与方案四，
  /// 中间两套在此仅作状态与说明，方便对照真机知道共有几套、各是什么
  const SCHEMES = [
    { name: "康复时钟", desc: "拖拽打卡康复时钟 + 底坞三圆（正式默认）" },
    { name: "打卡圆钮", desc: "以「点击打卡」圆钮为视觉中心，多任务左右滑动分页" },
    { name: "方圆角底坞", desc: "复刻时钟主体，底坞改方形圆角、哈宝居中主视觉" },
    { name: "时段泳道", desc: "横向时段泳道 + 底部扇形拨盘" },
  ];

  const overlays = {
    // 开发菜单（真机 #if DEBUG 的 TodayView.debugMenu，正式环境隐藏）
    debugMenu: () => `
      <div class="scrim dbg-scrim" data-act="close">
        <div class="dbg-menu" onclick="event.stopPropagation()">
          <button class="dbg-row" data-act="debugSeed" type="button">${I.spark}<span>生成 Demo</span></button>
          <button class="dbg-row danger" data-act="debugRegenerate" type="button">${I.undo}<span>重新生成</span></button>
          <button class="dbg-row" data-act="debugTestLogin" type="button">${I.person}<span>测试登录步骤</span></button>
          <div class="dbg-sep"></div>
          ${["0.0", "0.1", "0.2"].map((v) => `
            <button class="dbg-row" data-act="debugGen" data-gen="${v}" type="button">
              ${S.gen === v ? I.check : `<span style="width:19px;height:19px;flex:0 0 19px"></span>`}
              <span>设计版本 V${v}<em>${S.gen === v ? "当前" : ""}</em></span>
            </button>`).join("")}
        </div>
      </div>`,
    // 指标 / 分析分享海报（真机 RecordsView 与 FollowUpAnalysisView 的分享出口）
    reportPoster: () => {
      const kind = S.overlayData.kind || "vitals";
      const avg = vitalsWeekAvg();
      const rows = kind === "vitals"
        ? [["平均血压", `${avg.sys}/${avg.dia} mmHg`], ["平均心率", `${avg.hr} bpm`], ["记录天数", `${vitalsWeekData().length} 天`]]
        : [["基础报告", "出院小结已解析"], ["复查报告", "尚无复查批次"], ["问卷随访", "轻度活动受限"]];
      return `
      <div class="scrim bottom" data-act="close">
        <div class="sheet ta-c" onclick="event.stopPropagation()">
          <div class="grab"></div>
          <div class="poster-full">
            <div class="poster-head"><img src="${A.logo}" width="30" height="30" alt="" /><span>哈宝 · 康复打卡</span></div>
            <div class="poster-title">${kind === "vitals" ? "血压监测周报" : "身体报告小结"}</div>
            <div class="col gap10 mt12">
              ${rows.map(([k, v]) => `<div class="flex between s15" style="padding:10px 14px;background:#F4F7FC;border-radius:12px"><span class="t-sec">${k}</span><span class="fb t">${v}</span></div>`).join("")}
            </div>
          </div>
          <div class="flex center gap16">
            ${[["微信", "demoShare", "#07C160"], ["小红书", "demoShare", "#FF2442"], ["保存图片", "savedAlbum", "#1054E0"], ["取消", "close", "#828EA5"]]
              .map(([t, a, c]) => `<button class="share-ch" data-act="${a}" type="button" style="--ch:${c}"><i></i><span>${t}</span></button>`).join("")}
          </div>
        </div>
      </div>`;
    },
    exercise: () => `
      <div class="scrim bottom" data-act="close">
        <div class="sheet" style="min-height:400px" onclick="event.stopPropagation()">
          <div class="grab"></div>
          <div class="s18 fsb t ta-c" style="padding:6px 8px 8px">${(SEED.find((t) => t.id === S.overlayData.id) || {}).title || "晨间散步"}</div>
          <div class="col gap16" style="margin-top:12px;padding:16px 6px 24px">
            <button class="ex-choice primary" data-act="exerciseGo" type="button"><span class="ico">${I.walk}</span>进入运动，开始散步</button>
            <button class="ex-choice secondary" data-act="exerciseDone" type="button"><span class="ico">${I.check}</span>我已完成散步，直接打卡</button>
            <button class="ex-choice secondary" data-act="close" type="button"><span class="ico">${I.x}</span>暂不打卡</button>
          </div>
        </div>
      </div>`,
    familyCheckin: () => {
      const t = SEED.find((x) => x.id === S.overlayData.id) || {};
      const isAppt = t.cat === "appointment";
      const isVitals = t.cat === "monitoring" && t.title !== "测心率";
      const isHr = t.cat === "monitoring" && t.title === "测心率";
      const isEx = t.cat === "exercise";
      const primaryLabel = isVitals
        ? "已测血压，代为录入"
        : isHr
          ? "已测心率，代为打卡"
          : isEx
            ? "已完成散步，代为打卡"
            : isAppt
              ? "已完成复查，代为打卡"
              : "已完成，代为打卡";
      const primaryIco = isVitals ? I.ecg : I.check;
      const alreadyReminded = !!(S.remindedTasks && S.remindedTasks[t.id]);
      const remindLabel = alreadyReminded ? "未完成，再次发送提醒" : "未完成，发送提醒";
      return `
      <div class="scrim bottom" data-act="close">
        <div class="sheet" style="min-height:400px" onclick="event.stopPropagation()">
          <div class="grab"></div>
          <div class="s18 fsb ${isAppt ? "t-appt" : "t"} ta-c" style="padding:6px 8px 8px">${t.title || "康复计划"}</div>
          <div class="col gap16" style="margin-top:12px;padding:16px 6px 24px">
            <button class="ex-choice ${isAppt ? "appt" : "primary"}" data-act="familyConfirmDone" type="button"><span class="ico">${primaryIco}</span>${primaryLabel}</button>
            <button class="ex-choice secondary ${isAppt ? "appt-sec" : ""}" data-act="familyRemindTask" type="button"><span class="ico">${I.bell}</span>${remindLabel}</button>
            <button class="ex-choice secondary ${isAppt ? "appt-sec" : ""}" data-act="close" type="button"><span class="ico">${I.x}</span>暂不打卡</button>
          </div>
        </div>
      </div>`;
    },
    appointment: () => `
      <div class="scrim bottom" data-act="close">
        <div class="sheet" style="min-height:400px" onclick="event.stopPropagation()">
          <div class="grab"></div>
          <div class="s18 fsb t-appt ta-c" style="padding:6px 8px 8px">${(SEED.find((t) => t.id === S.overlayData.id) || {}).title || "心内科复查"}</div>
          <div class="col gap16" style="margin-top:12px;padding:16px 6px 24px">
            <button class="ex-choice appt" data-act="appointmentGo" type="button"><span class="ico">${I.cam}</span>上传复查资料</button>
            <button class="ex-choice secondary appt-sec" data-act="appointmentDone" type="button"><span class="ico">${I.check}</span>已完成复查，直接打卡</button>
            <button class="ex-choice secondary appt-sec" data-act="close" type="button"><span class="ico">${I.x}</span>暂不打卡</button>
          </div>
        </div>
      </div>`,
    vitals: () => {
      // 有上次读数就预填、没有就空态（真机 VitalsInputSheet 预填最近读数）
      const vSys = S.sys; const vDia = S.dia; const vHr = S.hr;
      const tTitle = (SEED.find((t) => t.id === S.overlayData.id) || {}).title || "起床测血压";
      const bpDev = hasBoundBPMonitor() ? hwBound("bloodPressure") : null;
      const syncPhase = S.vitalsSyncPhase || "idle";
      const isSyncing = bpDev && syncPhase === "syncing";
      const isSynced = bpDev && syncPhase === "synced" && S.vitalsFromHw;
      const bannerTint = isSynced ? "#1AA64A" : "#1054E0";
      const bannerBg = isSynced ? "rgba(26,166,74,.08)" : "rgba(16,84,224,.08)";
      const bannerBorder = isSynced ? "rgba(26,166,74,.20)" : "rgba(16,84,224,.18)";
      const bannerTitle = isSyncing
        ? "正在同步血压计数据…"
        : isSynced
          ? "已同步血压计读数"
          : "已手动微调读数";
      const bannerSub = isSyncing
        ? "正在接收哈宝血压计最新测量结果，请稍候"
        : isSynced
          ? `刚刚测量 · 血压 ${vSys}/${vDia} mmHg，心率 ${vHr} bpm`
          : "当前为手动修改值，点右侧可重新恢复血压计读数";
      const hwSyncBadge = isSynced
        ? `<span style="font-size:12px;font-weight:700;color:#1AA64A;background:rgba(26,166,74,.12);padding:3px 8px;border-radius:99px">📡 硬件已同步</span>`
        : `<div class="s12 t-sec">康复目标 ${VITAL.bpTargetText(VIT_AGE)}</div>`;
      const hrSyncBadge = isSynced
        ? `<span style="font-size:12px;font-weight:700;color:#1AA64A;background:rgba(26,166,74,.12);padding:3px 8px;border-radius:99px">📡 硬件已同步</span>`
        : `<div class="s12 t-sec">目标 55–60</div>`;
      return `
      <div class="scrim bottom" data-act="close">
        <div class="sheet" style="max-height:90%" onclick="event.stopPropagation()">
          <div class="grab"></div>
          <div class="flex between"><button class="nav-text" data-act="close" type="button">取消</button><h3 class="s17">${tTitle}</h3><span style="width:48px"></span></div>
          ${bpDev ? `<div class="mt12 flex between gap10" style="padding:12px 14px;border-radius:18px;background:${bannerBg};border:1px solid ${bannerBorder}">
            <div class="flex gap10" style="min-width:0;flex:1">
              <div style="width:38px;height:38px;border-radius:50%;background:${isSynced ? "rgba(26,166,74,.14)" : "rgba(16,84,224,.14)"};color:${bannerTint};display:grid;place-items:center;flex-shrink:0">
                ${isSyncing ? I.waves : isSynced ? I.check : I.ecg}
              </div>
              <div style="min-width:0;flex:1">
                <div class="flex gap6" style="align-items:center;flex-wrap:wrap">
                  <span class="s15 fb" style="color:${bannerTint}">${bannerTitle}</span>
                  <span style="font-size:11px;font-weight:700;color:${bannerTint};background:${isSynced ? "rgba(26,166,74,.12)" : "rgba(16,84,224,.12)"};padding:2px 7px;border-radius:99px">${bpDev.name} · ${bpDev.serial}</span>
                </div>
                <div class="s12 t-sec mt4" style="line-height:1.35">${bannerSub}</div>
              </div>
            </div>
            ${isSyncing ? "" : `<button data-act="sheetHwResync" type="button" style="border:0;cursor:pointer;flex-shrink:0;padding:6px 10px;border-radius:99px;font-size:12px;font-weight:700;background:#fff;color:#1054E0;box-shadow:0 2px 4px rgba(16,84,224,.10)">重新同步</button>`}
          </div>` : ""}
          <div class="island-card" style="padding:18px;margin-top:12px">
            <div class="flex between">
              <div class="s15 fb t sheet-sec">${I.heartSq}血压</div>
              ${hwSyncBadge}
            </div>
            <div class="flex gap16 mt12">
              ${vitCol("收缩压", vSys, "sys", "#1054E0", "mmHg", [VITAL.systolicLower, VITAL.bpTarget(VIT_AGE).sys - 1], [70, 220], VITAL.bpStatus(vSys, vDia, VIT_AGE))}
              ${vitCol("舒张压", vDia, "dia", "#1EBED6", "mmHg", [VITAL.diastolicLower, VITAL.bpTarget(VIT_AGE).dia - 1], [40, 140], VITAL.bpStatus(vSys, vDia, VIT_AGE))}
            </div>
          </div>
          <div class="island-card" style="padding:16px;margin-top:12px">
            <div class="flex between">
              <div class="s15 fb t-heart sheet-sec">${I.ecg}心率</div>
              ${hrSyncBadge}
            </div>
            <div class="ecg-strip"><svg viewBox="0 0 300 40" preserveAspectRatio="none" height="30"><path class="line-path" d="M0 24h34l6-14 6 26 6-12h40l6-14 6 26 6-12h40l6-14 6 26 6-12h40l6-14 6 26 6-12h40"/></svg></div>
            <div class="flex gap16 mt12">
              ${vitCol("静息心率", vHr, "hr", "#F05A6E", "bpm", [VITAL.hrBand[0], VITAL.hrBand[1]], [40, 180], VITAL.hrStatus(vHr), true)}
            </div>
          </div>
          <div class="hist-bar mt12 s13" style="${(() => {
            const s = vitalsStatus();
            if (s.level === "none") return "color:var(--secondary)";
            return VITAL_RANK[s.level] === 0 ? "" : `background:${VITAL_COLOR[s.level]}1a;color:${VITAL_COLOR[s.level]}`;
          })()}">${vitalsStatus().level === "none" ? I.scope : I.check}${vitalsStatus().text}</div>
          <button class="cta mt16 ${isSyncing ? "off" : ""}" data-act="vitalsSave" type="button">${isSyncing ? "正在同步血压计…" : "保存并打卡"}</button>
        </div>
      </div>`;
    },
    confirm: () => {
      const cmp = S.overlayData.planCompare;
      const content = cmp ? `
        <div class="plan-cmp-list">
          <div class="plan-cmp-card">
            <div class="plan-cmp-head">当前计划</div>
            <div class="plan-cmp-rows">
              <div class="plan-cmp-row"><span class="lbl">开始日期：</span><span class="val mono">${esc(cmp.currentStartText)}</span></div>
              <div class="plan-cmp-row"><span class="lbl">结束日期：</span><span class="val mono">${esc(cmp.currentEndText)}</span></div>
              <div class="plan-cmp-row"><span class="lbl">持续时长：</span><span class="val mono">${esc(cmp.currentDurationText)}</span></div>
              <div class="plan-cmp-row"><span class="lbl">循环规则：</span><span class="val mono">${esc(cmp.currentRuleText)} ${esc(cmp.currentTimeText)}</span></div>
            </div>
          </div>
          <div class="plan-cmp-card primary">
            <div class="plan-cmp-head">新计划</div>
            <div class="plan-cmp-rows">
              <div class="plan-cmp-row"><span class="lbl">开始日期：</span><span class="val mono">${esc(cmp.newStartText)}</span></div>
              <div class="plan-cmp-row"><span class="lbl">结束日期：</span><span class="val mono">${esc(cmp.newEndText)}</span></div>
              <div class="plan-cmp-row"><span class="lbl">持续时长：</span><span class="val mono">${esc(cmp.newDurationText)}</span></div>
              <div class="plan-cmp-row"><span class="lbl">循环规则：</span><span class="val mono">${esc(cmp.newRuleText)} ${esc(cmp.newTimeText)}</span></div>
            </div>
          </div>
        </div>` : `<p>${S.overlayData.body || ""}</p>`;
      return `
      <div class="scrim center" data-act="close">
        <div class="popup" onclick="event.stopPropagation()">
          <h3>${S.overlayData.title || "确认"}</h3>
          ${content}
          <div class="duo">
            <button class="cancel" data-act="close" type="button">${S.overlayData.cancel || "取消"}</button>
            <button class="${S.overlayData.danger ? "danger" : "ok"}" data-act="confirmOk" type="button">${S.overlayData.ok || "确定"}</button>
          </div>
        </div>
      </div>`;
    },
    privacyGate: () => {
      if (S.privacyDeclinedStep) {
        return `
        <div class="scrim center" style="background:rgba(0,0,0,.42)">
          <div class="popup" style="max-width:348px;border-radius:26px;padding:24px;text-align:left" onclick="event.stopPropagation()">
            <h3 style="font-size:21px;font-weight:800;color:var(--blue);margin:0;text-align:center">用户隐私保护提示</h3>
            <div style="margin-top:16px;display:flex;flex-direction:column;gap:10px;font-size:15px;color:#1E293B;line-height:1.6">
              <div>1. 若您不同意《服务协议》与《隐私协议》，我们将无法为您提供登录及康复管理服务；</div>
              <div>2. 同意前我们不会收集您的任何个人信息或开启任何系统权限。</div>
              ${S.privacyExitedNotice ? `<div style="color:var(--blue);font-weight:600">3. 已暂停进入应用，您可随时点击「同意并使用」继续。</div>` : ""}
            </div>
            <div style="display:flex;gap:12px;margin-top:20px">
              <button type="button" data-act="exitAfterDeclinePrivacy" style="flex:1;height:50px;border-radius:16px;border:0;background:#F1F5F9;color:var(--sec);font-size:16px;font-weight:700;cursor:pointer;font-family:inherit">不同意并退出</button>
              <button type="button" data-act="acceptInitialPrivacy" style="flex:1;height:50px;border-radius:16px;border:0;background:var(--blue);color:#fff;font-size:17px;font-weight:700;cursor:pointer;font-family:inherit">同意并使用</button>
            </div>
          </div>
        </div>`;
      }
      return `
      <div class="scrim center" style="background:rgba(0,0,0,.42)">
        <div class="popup" style="max-width:348px;border-radius:26px;padding:24px;text-align:left" onclick="event.stopPropagation()">
          <h3 style="font-size:21px;font-weight:800;color:var(--blue);margin:0;text-align:center">用户隐私保护提示</h3>
          <div style="margin-top:16px;display:flex;flex-direction:column;gap:10px;font-size:15px;color:#1E293B;line-height:1.6">
            <div>1. 为帮助您管理康复计划、记录血压与身体报告，我们会收集必要的个人及健康信息；</div>
            <div>2. 相机、位置、麦克风、蓝牙与通知等权限不会默认开启，仅在您使用对应功能时才按需询问；</div>
            <div>3. 您的健康档案全程加密存储，未经您本人授权不会向任何第三方提供；</div>
            <div>4. 详情请阅读<button type="button" data-act="openAgreementModal" data-kind="service" style="border:0;background:none;padding:0;color:var(--blue);font-size:15px;font-weight:700;cursor:pointer;font-family:inherit">《服务协议》</button>与<button type="button" data-act="openAgreementModal" data-kind="privacy" style="border:0;background:none;padding:0;color:var(--blue);font-size:15px;font-weight:700;cursor:pointer;font-family:inherit">《隐私协议》</button>。</div>
          </div>
          <div style="display:flex;gap:12px;margin-top:20px">
            <button type="button" data-act="declineInitialPrivacy" style="flex:1;height:50px;border-radius:16px;border:0;background:#F1F5F9;color:var(--sec);font-size:17px;font-weight:700;cursor:pointer;font-family:inherit">不同意</button>
            <button type="button" data-act="acceptInitialPrivacy" style="flex:1;height:50px;border-radius:16px;border:0;background:var(--blue);color:#fff;font-size:17px;font-weight:700;cursor:pointer;font-family:inherit">同意并继续</button>
          </div>
        </div>
      </div>`;
    },
    loginTermsConfirm: () => `
      <div class="scrim center" data-act="close">
        <div class="popup" style="max-width:348px;border-radius:26px;padding:24px 22px;text-align:center" onclick="event.stopPropagation()">
          <h3 style="font-size:21px;margin:0;color:var(--blue)">请阅读并同意协议</h3>
          <p style="font-size:15px;color:var(--sec);line-height:1.5;margin:10px 0 14px">为保障您的合法权益与健康数据安全，请先阅读并同意以下协议后继续登录：</p>
          <div style="display:flex;gap:10px;margin-bottom:16px">
            <button type="button" data-act="openAgreementModal" data-kind="service" style="flex:1;padding:9px 10px;border-radius:12px;border:0;background:rgba(16,84,224,.08);color:var(--blue);font-size:15px;font-weight:700;cursor:pointer;font-family:inherit">《服务协议》</button>
            <button type="button" data-act="openAgreementModal" data-kind="privacy" style="flex:1;padding:9px 10px;border-radius:12px;border:0;background:rgba(16,84,224,.08);color:var(--blue);font-size:15px;font-weight:700;cursor:pointer;font-family:inherit">《隐私协议》</button>
          </div>
          <div class="duo" style="gap:12px">
            <button class="cancel" data-act="close" type="button">取消</button>
            <button class="ok" data-act="agreeAndLogin" type="button">同意并登录</button>
          </div>
        </div>
      </div>`,
    homeTargetSheet: () => {
      ensureCareGraph();
      const me = currentDemoPerson();
      const isSelf = !S.watchingWardName;
      const confirmedWards = myWardsList(me.name).filter((b) => b.confirmed);
      const totalCards = 1 + Math.max(1, confirmedWards.length);
      const sheetMinHeight = 176 + totalCards * 108;
      return `
      <div class="scrim bottom" data-act="close">
        <div class="sheet" onclick="event.stopPropagation()" style="padding:20px 22px 26px;min-height:${sheetMinHeight}px;display:flex;flex-direction:column;border-top-left-radius:30px;border-top-right-radius:30px">
          <div class="grab"></div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:4px;margin-bottom:18px">
            <div style="font-size:21px;font-weight:800;color:var(--blue);letter-spacing:-.2px">走进谁的一天</div>
            <button type="button" data-act="close" aria-label="关闭" style="width:32px;height:32px;border-radius:999px;border:0;background:rgba(16,84,224,.08);color:var(--sec);font-size:15px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;cursor:pointer">✕</button>
          </div>
          <div style="display:flex;flex-direction:column;gap:18px;flex:1">
            <div style="display:flex;flex-direction:column;gap:10px;flex:1">
              <div style="font-size:13.5px;font-weight:700;color:var(--sec);padding:0 4px">我的</div>
              <button type="button" data-act="selectHomeTarget" data-ward="" style="flex:1;min-height:88px;display:flex;align-items:center;gap:16px;padding:18px 22px;border-radius:24px;border:${isSelf ? "1.8px solid rgba(16,84,224,.42)" : "1px solid rgba(16,84,224,.08)"};background:${isSelf ? "linear-gradient(135deg,rgba(16,84,224,.11),rgba(16,84,224,.04))" : "#FFFFFF"};box-shadow:0 4px 12px ${isSelf ? "rgba(16,84,224,.08)" : "rgba(16,84,224,.04)"};cursor:pointer;text-align:left;font-family:inherit;width:100%">
                <div style="width:56px;height:56px;border-radius:999px;background:${isSelf ? "var(--blue)" : "rgba(16,84,224,.10)"};color:${isSelf ? "#fff" : "var(--blue)"};font-size:22px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:${isSelf ? "0 4px 10px rgba(16,84,224,.22)" : "none"}">${esc(me.name.slice(0, 1))}</div>
                <div style="display:flex;align-items:center;gap:10px;flex:1;min-width:0">
                  <span style="font-size:20px;font-weight:800;color:var(--blue);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(me.name)}的一天</span>
                  <span style="font-size:12.5px;font-weight:700;color:${isSelf ? "#fff" : "var(--blue)"};background:${isSelf ? "rgba(16,84,224,.85)" : "rgba(16,84,224,.10)"};padding:4px 10px;border-radius:999px;flex-shrink:0">我</span>
                </div>
                <span style="width:36px;height:36px;border-radius:999px;background:${isSelf ? "var(--blue)" : "rgba(16,84,224,.08)"};color:${isSelf ? "#fff" : "var(--blue)"};font-size:15px;font-weight:800;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0">${isSelf ? "✓" : "→"}</span>
              </button>
            </div>
            <div style="display:flex;flex-direction:column;gap:10px;flex:${Math.max(1, confirmedWards.length)}">
              <div style="font-size:13.5px;font-weight:700;color:var(--sec);padding:0 4px">我守护的人</div>
              <div style="display:flex;flex-direction:column;gap:12px;flex:1">
                ${confirmedWards.map((b) => {
                  const isWatching = S.watchingWardName === b.wardName;
                  return `
                    <button type="button" data-act="selectHomeTarget" data-ward="${esc(b.wardName)}" style="flex:1;min-height:88px;display:flex;align-items:center;gap:16px;padding:18px 22px;border-radius:24px;border:${isWatching ? "1.8px solid rgba(16,84,224,.42)" : "1px solid rgba(16,84,224,.08)"};background:${isWatching ? "linear-gradient(135deg,rgba(16,84,224,.11),rgba(16,84,224,.04))" : "#FFFFFF"};box-shadow:0 4px 12px ${isWatching ? "rgba(16,84,224,.08)" : "rgba(16,84,224,.04)"};cursor:pointer;text-align:left;font-family:inherit;width:100%">
                      <div style="width:56px;height:56px;border-radius:999px;background:${isWatching ? "var(--blue)" : "rgba(16,84,224,.10)"};color:${isWatching ? "#fff" : "var(--blue)"};font-size:22px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:${isWatching ? "0 4px 10px rgba(16,84,224,.22)" : "none"}">${esc(b.wardName.slice(0, 1))}</div>
                      <div style="display:flex;align-items:center;gap:10px;flex:1;min-width:0">
                        <span style="font-size:20px;font-weight:800;color:var(--blue);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(b.wardName)}的一天</span>
                        <span style="font-size:12.5px;font-weight:700;color:${isWatching ? "#fff" : "var(--blue)"};background:${isWatching ? "rgba(16,84,224,.85)" : "rgba(16,84,224,.10)"};padding:4px 10px;border-radius:999px;flex-shrink:0">${esc(b.relation)}</span>
                      </div>
                      <span style="width:36px;height:36px;border-radius:999px;background:${isWatching ? "var(--blue)" : "rgba(16,84,224,.08)"};color:${isWatching ? "#fff" : "var(--blue)"};font-size:15px;font-weight:800;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0">${isWatching ? "✓" : "→"}</span>
                    </button>`;
                }).join("")}
                ${!confirmedWards.length ? `
                  <button type="button" data-act="goProfileFromTargetSheet" style="flex:1;min-height:88px;display:flex;align-items:center;gap:16px;padding:18px 22px;border-radius:24px;border:1.2px dashed rgba(16,84,224,.22);background:rgba(255,255,255,.85);cursor:pointer;text-align:left;font-family:inherit;width:100%">
                    <div style="width:56px;height:56px;border-radius:999px;background:rgba(16,84,224,.09);color:var(--blue);font-size:22px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">+</div>
                    <span style="font-size:19px;font-weight:800;color:var(--blue);flex:1">添加我守护的人</span>
                    <span style="width:36px;height:36px;border-radius:999px;background:rgba(16,84,224,.08);color:var(--blue);font-size:15px;font-weight:800;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0">→</span>
                  </button>
                ` : ""}
              </div>
            </div>
          </div>
        </div>
      </div>`;
    },
    demoPersonSheet: () => {
      ensureCareGraph();
      return `
      <div class="scrim bottom" data-act="close">
        <div class="sheet" onclick="event.stopPropagation()">
          <div class="grab"></div>
          <div style="display:flex;align-items:center;justify-content:space-between">
            <div>
              <div class="s20 fb t">切换测试身份</div>
              <div class="s13 t-sec" style="margin-top:2px">仅用于 Demo 测试：切换当前使用 App 的主角（「我」），个人中心始终以所选主角为第一人称展示</div>
            </div>
            <button class="cap" data-act="close" type="button">关闭</button>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;margin-top:14px">
            ${S.demoPeople.map((p) => {
              const isCur = p.name === S.currentPersonName;
              const unread = pendingFamilyEventCountFor(p.name);
              const famCount = confirmedFamilyBondsFor(p.name).length;
              const pVip = personHasVip(p.name);
              return `
                <button type="button" data-act="switchDemoPerson" data-name="${esc(p.name)}" style="display:flex;align-items:center;gap:12px;padding:13px 14px;border-radius:16px;border:${isCur ? "1.5px solid rgba(16,84,224,.32)" : "1px solid transparent"};background:${isCur ? "rgba(16,84,224,.10)" : "#F5F8FF"};cursor:pointer;text-align:left;font-family:inherit;width:100%">
                  <div style="width:42px;height:42px;border-radius:999px;background:${isCur ? "var(--blue)" : "rgba(16,84,224,.12)"};color:${isCur ? "#fff" : "var(--blue)"};font-size:17px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${esc(p.name.slice(0, 1))}</div>
                  <div style="min-width:0;flex:1">
                    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
                      <span class="s17 fb t">${esc(p.name)}</span>
                      <span style="font-size:12px;font-weight:600;color:var(--sec)">${esc(p.gender)} · ${p.age}岁</span>
                      ${pVip
                        ? `<span style="padding:2px 7px;border-radius:999px;background:#FEF3C7;color:#B45309;font-size:10.5px;font-weight:700">👑 VIP</span>`
                        : `<span style="padding:2px 7px;border-radius:999px;background:#F1F5F9;color:#475569;font-size:10.5px;font-weight:700">免费用户</span>`}
                      ${isCur ? `<span style="padding:2px 7px;border-radius:999px;background:var(--blue);color:#fff;font-size:11px;font-weight:700">当前主角</span>` : ""}
                      ${unread > 0 ? `<span style="padding:2px 7px;border-radius:999px;background:#EF4444;color:#fff;font-size:11px;font-weight:700">${unread} 条待处理</span>` : ""}
                    </div>
                    <div style="display:flex;align-items:center;gap:8px;margin-top:3px">
                      <span style="font-size:12.5px;font-weight:500;color:var(--sec)">${esc(p.phone)}</span>
                      <span style="font-size:12px;font-weight:700;color:var(--blue)">互为家属 ${famCount}/5</span>
                    </div>
                  </div>
                  ${isCur ? `<span style="color:var(--blue);font-weight:800;font-size:16px">✓</span>` : `<span class="neutral-chev">${I.chevR}</span>`}
                </button>`;
            }).join("")}
          </div>
        </div>
      </div>`;
    },
    addGuardianSheet: () => {
      ensureCareGraph();
      const d = S.careSheetDraft || { name: "", phone: "", rel: "配偶" };
      const rels = ["配偶", "子女", "父母", "亲属"];
      const targetNm = S.currentPersonName || "李建国";
      return `
      <div class="scrim bottom" data-act="close">
        <div class="sheet" onclick="event.stopPropagation()">
          <div class="grab"></div>
          <div style="display:flex;align-items:center;justify-content:space-between">
            <div>
              <div class="s20 fb t">添加守护我的人</div>
              <div class="s13 t-sec" style="margin-top:3px">邀请家人守护「${esc(targetNm)}」，对方可接收打卡完成动态并发送康复提醒</div>
            </div>
            <button class="cap" data-act="close" type="button">取消</button>
          </div>
          <div style="display:flex;flex-direction:column;gap:12px;margin-top:14px">
            <div>
              <div class="s13 fb t-sec" style="margin-bottom:6px">对方姓名</div>
              <input class="field" name="cg_name" placeholder="请输入守护我的人姓名（如：王芳）" value="${esc(d.name || "")}" />
            </div>
            <div>
              <div class="s13 fb t-sec" style="margin-bottom:6px">对方是我的（关系）</div>
              <div class="grid4">
                ${rels.map((r) => `<button type="button" class="chip ${d.rel === r ? "on" : ""}" data-act="pickCareRel" data-r="${r}">${r}</button>`).join("")}
              </div>
            </div>
            <div>
              <div class="s13 fb t-sec" style="margin-bottom:6px">对方手机号</div>
              <input class="field mono" name="cg_phone" placeholder="11 位手机号（如：13900138899）" maxlength="11" value="${esc(d.phone || "")}" />
            </div>
            <div style="display:flex;align-items:flex-start;gap:8px;padding:11px 12px;border-radius:12px;background:rgba(16,84,224,.06);font-size:12.5px;color:var(--sec);line-height:1.45">
              <span style="color:var(--blue);flex-shrink:0">${I.bell}</span>
              <span>点击确认后，系统将向对方发送手机系统通知；对方点击「同意」后，你也会收到系统通知。</span>
            </div>
            <button class="cta" data-act="submitAddGuardian" type="button">${I.plus}发送守护邀请并添加</button>
          </div>
        </div>
      </div>`;
    },
    addWardSheet: () => {
      ensureCareGraph();
      const d = S.careSheetDraft || { name: "", phone: "", rel: "配偶" };
      const rels = ["配偶", "父母", "子女", "亲属"];
      return `
      <div class="scrim bottom" data-act="close">
        <div class="sheet" onclick="event.stopPropagation()">
          <div class="grab"></div>
          <div style="display:flex;align-items:center;justify-content:space-between">
            <div>
              <div class="s20 fb t">添加被我守护的人</div>
              <div class="s13 t-sec" style="margin-top:3px">添加需要「${esc(S.currentPersonName)}」守护的家人，绑定后可在首页切换查看TA的一天并发起提醒</div>
            </div>
            <button class="cap" data-act="close" type="button">取消</button>
          </div>
          <div style="display:flex;flex-direction:column;gap:12px;margin-top:14px">
            <div>
              <div class="s13 fb t-sec" style="margin-bottom:6px">对方姓名</div>
              <input class="field" name="cg_name" placeholder="请输入被我守护的人姓名（如：张桂兰）" value="${esc(d.name || "")}" />
            </div>
            <div>
              <div class="s13 fb t-sec" style="margin-bottom:6px">对方是我的（关系）</div>
              <div class="grid4">
                ${rels.map((r) => `<button type="button" class="chip ${d.rel === r ? "on" : ""}" data-act="pickCareRel" data-r="${r}">${r}</button>`).join("")}
              </div>
            </div>
            <div>
              <div class="s13 fb t-sec" style="margin-bottom:6px">对方手机号</div>
              <input class="field mono" name="cg_phone" placeholder="11 位手机号（如：13700136688）" maxlength="11" value="${esc(d.phone || "")}" />
            </div>
            <div style="display:flex;align-items:flex-start;gap:8px;padding:11px 12px;border-radius:12px;background:rgba(16,84,224,.06);font-size:12.5px;color:var(--sec);line-height:1.45">
              <span style="color:var(--blue);flex-shrink:0">${I.bell}</span>
              <span>点击确认后，系统将向对方发送手机系统通知；对方点击「同意」后，你也会收到系统通知。</span>
            </div>
            <button class="cta" data-act="submitAddWard" type="button">${I.plus}发送守护申请并添加</button>
          </div>
        </div>
      </div>`;
    },
    consultImage: () => `
      <div class="scrim bottom" data-act="close">
        <div class="sheet" onclick="event.stopPropagation()">
          <div class="grab"></div>
          <div class="s20 fb t">发送图片</div>
          <p class="s15 t-sec" style="margin:6px 0 14px">拍一张，或从相册选一张，挂到这条消息上。</p>
          <button class="cta" data-act="pickConsultPhoto" type="button">${I.cam}拍照</button>
          <button class="cta-line mt8" data-act="pickConsultPhoto" type="button">${I.folder}从相册选择</button>
        </div>
      </div>`,
    aiCall: () => `
      <div class="ai-call">
        <img src="${A.logo}" width="84" height="84" alt="" />
        <h2>哈宝医生</h2>
        <div class="status">通话中</div>
        <div class="timer">0:12</div>
        <div class="said">走路有点喘</div>
        <button class="ai-hang" data-act="hangUpCall" type="button"><i>${I.phone}</i>挂断</button>
      </div>`,
    e120: () => `
      <div class="scrim center" style="background:rgba(0,0,0,.4)" data-act="close">
        <div class="popup e120-card" onclick="event.stopPropagation()">
          <div class="e120-body">
            <div class="e120-ico">${I.phone}</div>
            <h3>拨打 120？</h3>
            <p>如出现胸痛、严重气促或意识改变，请立即呼救</p>
          </div>
          <div class="e120-duo">
            <button type="button" data-act="close">取消</button>
            <button class="go" type="button" data-act="dial120">拨打 120</button>
          </div>
        </div>
      </div>`,
    // V0.1 期末反馈弹窗（首页 / 集章章卡「交反馈」/ 哈宝医生置顶条三处可开）：期章 + 一题感受
    rxFeedback: () => {
      const p = S.plan && S.plan.cur;
      if (!p) return "";
      const st = rxStats(p);
      const f = S.overlayData.feeling || "";
      const got = st.medal !== "none";
      return `
      <div class="scrim center" data-act="close">
        <div class="popup rx-fb-pop" onclick="event.stopPropagation()">
          <div class="rx-fb-medal">${rxMedalHTML(st.medal, 104)}</div>
          <h3>${got ? `第 ${p.no} 期 · 拿到「${RX_MEDAL[st.medal]}」` : "这一期没有集到章，下一期再一起加油"}</h3>
          <p>满日 ${st.full}/7 · 本期已集 ${st.done}/${st.total} 章</p>
          <div class="rx-fb-sep"></div>
          <div class="rx-fb-q">这一期感觉怎么样？</div>
          <div class="rx-feel">${RX_FEELINGS.map(([k, e]) => `<button class="${f === k ? "on" : ""}" data-act="rxPickFeeling" data-f="${k}" type="button"><i>${e}</i><span>${k}</span></button>`).join("")}</div>
          <button class="cta mt16${f ? "" : " rx-dim"}" data-act="rxSubmitFeedback" type="button">交给哈宝医生</button>
          <button class="rx-later" data-act="rxLater" type="button">稍后再说</button>
        </div>
      </div>`;
    },
    // V0.1 期章墙：点某枚期章看该期小结（只读）
    rxPeriod: () => {
      const h = ((S.plan && S.plan.history) || []).find((x) => String(x.no) === String(S.overlayData.no));
      if (!h) return "";
      const st = h.stats;
      const rows = [
        ["起止日期", `${rxMD(h.start)} – ${rxMD(rxEnd(h))}`],
        ["满日", `${st.full}/7`],
        ["本期已集", `${st.done}/${st.total} 章`],
        ["当时的感受", h.feeling || "未作答"],
        ["哈宝医生复盘", h.review || "—"],
      ];
      return `
      <div class="scrim center" data-act="close">
        <div class="popup rx-fb-pop" onclick="event.stopPropagation()">
          <div class="rx-fb-medal still">${rxMedalHTML(st.medal, 80)}</div>
          <h3>第 ${h.no} 期${st.medal !== "none" ? ` · ${RX_MEDAL[st.medal]}` : ""}</h3>
          <div class="rx-sum">${rows.map(([k, v]) => `<div><span>${k}</span><b>${esc(v)}</b></div>`).join("")}</div>
          <button class="cta-ghost w100 mt16" data-act="close" type="button">知道了</button>
        </div>
      </div>`;
    },
    opCard: () => {
      const op = (S.ops || []).find((x) => x.id === S.overlayData.id) || {};
      return `
      <div class="scrim center" data-act="close">
        <div class="popup" style="padding:8px 0 12px" onclick="event.stopPropagation()">
          <div class="s13 t-sec ta-c" style="padding:6px 16px 10px">${esc(opActorName(op))}${esc(opActionName(op))}</div>
          <button class="op-actor-row" data-act="opReassign" data-id="${op.id}" type="button"><span>改归属</span></button>
          <button class="op-actor-row" data-act="opDel" data-id="${op.id}" type="button"><span style="color:var(--appt)">删除这条记录</span></button>
          <button class="op-actor-row" data-act="close" type="button"><span style="color:var(--secondary)">取消</span></button>
        </div>
      </div>`;
    },
    opActor: () => {
      const op = (S.ops || []).find((x) => x.id === S.overlayData.id) || {};
      ensureCareGraph();
      const me = S.currentPersonName || S.name || "李建国";
      const guardians = myGuardiansList(me).filter((b) => b.confirmed);
      const wards = myWardsList(me).filter((b) => b.confirmed);
      const rows = [{ id: "", name: me, rel: "我" }]
        .concat(guardians.map((b) => ({ id: b.id, name: b.guardianName, rel: `守护我的人 · ${b.relation || "家人"}` })))
        .concat(wards.map((b) => ({ id: b.id, name: b.wardName, rel: `被我守护的人 · ${b.relation || "家人"}` })));
      const none = (guardians.length || wards.length) ? "" : `<div class="s15 t-sec" style="padding:6px 16px 0">还没有添加守护我的人或被我守护的人</div>`;
      const curActor = opActorName(op);
      return `
      <div class="scrim bottom" data-act="close">
        <div class="sheet" onclick="event.stopPropagation()">
          <div class="grab"></div>
          <div class="s20 fb t" style="margin:2px 16px 12px">这条记录算谁的</div>
          ${rows.map((r) => `<button class="op-actor-row${curActor === r.name ? " on" : ""}" data-act="opPickActor" data-id="${r.id}" data-name="${escAttr(r.name)}" type="button"><span>${esc(r.name)}</span><span class="s13 t-sec">${esc(r.rel)}</span></button>`).join("")}
          ${none}
        </div>
      </div>`;
    },
    stampCal: () => `
      <div class="scrim center" data-act="close">
        <div class="popup" onclick="event.stopPropagation()" style="padding:18px 18px 16px">
          <div class="flex between s26 fb t"><span>本月已集 12/19</span><span>63%</span></div>
          <div style="height:1px;background:rgba(16,84,224,.12);margin:12px 0"></div>
          <div class="flex between s17 fsb t mb8"><span>${stampMonthTitle()}</span><span class="flex gap8"><button class="cal-nav" data-act="stampPrev" type="button">${I.chevL}</button><button class="cal-nav" data-act="stampNext" type="button">${I.chevR}</button></span></div>
          <div id="stamp-cal-swipe">
          <div class="weekdays">${"日一二三四五六".split("").map((d) => `<span>${d}</span>`).join("")}</div>
          <div class="days">${stampCalDays()}</div>
          </div>
          <div style="height:1px;background:rgba(16,84,224,.12);margin:12px 0"></div>
          <button class="cta-ghost w100" data-act="close" type="button">取消</button>
        </div>
      </div>`,
    time: () => {
      const d = S.overlayData;
      // 时段胶囊跟随编辑页语义色（复查红 / 完成绿 / 其余信任蓝）
      const acc = editorAccent(S.draft || { cat: "monitoring" }, false);
      return `
      <div class="scrim center" data-act="close">
        <div class="popup" style="border-radius:28px;padding:22px 22px 20px;max-width:380px" onclick="event.stopPropagation()">
          <h3 class="s26 fb t ta-c">${d.title || "提醒时间"}</h3>
          ${d.block != null ? `<div class="time-band" style="background:${acc.muted};color:${acc.fg}">${BLOCKS[d.block].title}　${BLOCKS[d.block].range}</div>` : ""}
          <div class="time-cols" id="time-cols">
            <div class="time-col" data-unit="h">
              <button class="step" ${timeCanStep(d, "h", 1) ? `data-act="timeStep" data-unit="h" data-dir="1"` : "disabled"} type="button">${I.chevU}</button>
              <div class="num">${pad(d.h ?? 8)}</div>
              <button class="step" ${timeCanStep(d, "h", -1) ? `data-act="timeStep" data-unit="h" data-dir="-1"` : "disabled"} type="button">${I.chevD}</button>
            </div>
            <div class="time-colon">:</div>
            <div class="time-col" data-unit="m">
              <button class="step" ${timeCanStep(d, "m", 1) ? `data-act="timeStep" data-unit="m" data-dir="1"` : "disabled"} type="button">${I.chevU}</button>
              <div class="num">${pad(d.m ?? 0)}</div>
              <button class="step" ${timeCanStep(d, "m", -1) ? `data-act="timeStep" data-unit="m" data-dir="-1"` : "disabled"} type="button">${I.chevD}</button>
            </div>
          </div>
          <div class="duo" style="margin-top:16px">
            <button class="cancel" data-act="close" type="button">取消</button>
            <button class="ok" data-act="timeDone" type="button">完成</button>
          </div>
        </div>
      </div>`;
    },
    scope: () => `
      <div class="scrim center" data-act="close">
        <div class="popup" style="padding:8px 0 12px" onclick="event.stopPropagation()">
          <div class="scope-list">
            ${["健康计划", "运动计划", "用药计划", "其他计划"].map((s) =>
              `<button data-act="pickScope" data-s="${s}" type="button" class="${S.scheduleScope === s ? "on" : ""}">${s}</button>`).join("")}
          </div>
        </div>
      </div>`,
    restPreset: () => `
      <div class="scrim center" data-act="close">
        <div class="popup" style="padding:8px 0 12px" onclick="event.stopPropagation()">
          <div class="scope-list">
            ${REST_PRESET.map((r) =>
              `<button data-act="pickRestName" data-name="${r.name}" type="button" class="${S.restRows[S.overlayData.i]?.name === r.name ? "on" : ""}">${r.name}</button>`).join("")}
          </div>
        </div>
      </div>`,
    datePick: () => {
      const selected = S.overlayData.selected || toYMD(demoDate());
      const month = S.overlayData.month || selected;
      const todayBlocked = S.overlayData.kind === "customDur"
        && customDurMinDays(S.draft?.rule || "daily") > 1;
      return `
      <div class="scrim center" data-act="close">
        <div class="popup date-pick" onclick="event.stopPropagation()">
          <div class="dp-head">
            <div class="dp-title">选择日期</div>
            <div class="dp-sub">${chineseDateLabel(parseYMD(selected))}</div>
          </div>
          <div class="dp-switch">
            <button class="dp-nav" data-act="calMonth" data-dir="-1" type="button">${I.chevL}</button>
            <div class="dp-month">${monthTitleLabel(parseYMD(month))}</div>
            <button class="dp-nav" data-act="calMonth" data-dir="1" type="button">${I.chevR}</button>
          </div>
          <div id="date-pick-swipe">
            <div class="dp-week">${"日一二三四五六".split("").map((d) => `<span>${d}</span>`).join("")}</div>
            <div class="dp-grid">${datePickGrid(month, selected)}</div>
          </div>
          <div class="dp-foot">
            <button type="button" data-act="calToday"${todayBlocked ? " disabled" : ""}>回到今天</button>
            <button class="ok" type="button" data-act="calDone">完成</button>
          </div>
        </div>
      </div>`;
    },
    customCat: () => {
      const d = S.customDraft || { name: "" };
      const preview = (d.name || "").trim() || "类别名称";
      // 同一个弹层承担新建与改名：改名态没有删除按钮（删除在管理页行上），
      // 但多一条影响提示 —— 改名不改归属，可引用处会同步换名字
      const renaming = S.catRenameId != null;
      const n = renaming ? catUsage(S.catRenameId) : 0;
      const hint = renaming
        ? `<div class="cat-hint">${I.info}<span>${n
            ? `改名后，${n} 个计划和它们的打卡记录会同步显示新名称`
            : "该类别下还没有计划，改名不影响任何记录"}</span></div>`
        : "";
      return `
      <div class="scrim bottom" data-act="close">
        <div class="sheet" onclick="event.stopPropagation()">
          <div class="grab"></div>
          <div class="flex between" style="padding:0 2px 8px">
            <button class="nav-text nav-hit" data-act="close" type="button">取消</button>
            <h3 class="s17" style="margin:0">${renaming ? "编辑类别" : "新建类别"}</h3>
            <button class="nav-text blue nav-hit" data-act="${renaming ? "saveCatRename" : "saveCustomCat"}" type="button">保存</button>
          </div>
          <div class="cat-list">
            <div class="custom-preview">
              <div class="custom-badge" style="background:${UNIFIED_CUSTOM_COLOR}">${I[UNIFIED_CUSTOM_ICON]}</div>
              <div><div class="s20 fb t" id="custom-cat-preview">${preview}</div><div class="s13 t-sec">自建类别</div></div>
            </div>
            <div class="sec-label">类别名称</div>
            <input class="field" id="custom-cat-name" maxlength="6" placeholder="例如：喝水、体重" value="${(d.name || "").replace(/"/g, "&quot;")}" />
            <div class="s12 t-sec">最多 6 个字</div>
            ${hint}
          </div>
        </div>
      </div>`;
    },
    // 删除自建类别：先安顿存量计划。有存量给迁移目标列表，
    // 或走「连同 N 个计划一起删除」（该路径再要一道二次确认）
    catRemoval: () => {
      const c = (S.customCats || []).find((x) => x.id === S.catRemovalId);
      if (!c) return "";
      const n = catUsage(c.id);

      if (S.catDiscardConfirm) {
        return `
      <div class="scrim bottom" data-act="close">
        <div class="sheet" onclick="event.stopPropagation()">
          <div class="grab"></div>
          <div style="padding:0 2px 16px">
            <h3 class="s20 fb" style="color:var(--appt)">确认删除这些计划？</h3>
            <div class="s13" style="color:var(--secondary);font-weight:600;margin-top:4px">${n} 个计划及其全部打卡记录会被永久删除，无法恢复</div>
          </div>
          <div class="cat-list">
            <button class="big-danger solid" data-act="doDiscardCatPlans" type="button">永久删除</button>
            <button class="link-back" data-act="catDiscardBack" type="button">返回选择迁移分类</button>
          </div>
          <div class="cat-list" style="flex:0 0 auto;padding-top:14px">
            <button class="cancel-pill" data-act="close" type="button">取消</button>
          </div>
        </div>
      </div>`;
      }

      return `
      <div class="scrim bottom" data-act="close">
        <div class="sheet" onclick="event.stopPropagation()">
          <div class="grab"></div>
          <div style="padding:0 2px 16px">
            <h3 class="s20 fb t">删除「${c.name}」？</h3>
            <div class="s13" style="color:var(--secondary);font-weight:600;margin-top:4px">${n} 个计划将转到所选分类</div>
          </div>
          <div class="cat-list">
            ${catMigrationTargets(c.id).map((tg) => `
              <button class="cat-row" data-act="pickCatMigrate" data-c="${tg.cat}"${tg.id ? ` data-id="${tg.id}"` : ""} type="button">
                ${tg.cat === "custom"
                  ? `<span class="mig-badge" style="background:${UNIFIED_CUSTOM_COLOR}">${I[UNIFIED_CUSTOM_ICON]}</span>`
                  : `<span class="mig-badge"><img src="${A.task[tg.cat]}" alt="" /></span>`}
                <span class="grow ta-l"><b>${tg.name}</b></span>
                <span class="type-chev">${I.chevR}</span>
              </button>`).join("")}
          </div>
          <div class="cat-list" style="flex:0 0 auto;padding-top:14px">
            <button class="big-danger" data-act="catDiscardAsk" type="button">${I.trash}连同 ${n} 个计划一起删除</button>
          </div>
          <div class="cat-list" style="flex:0 0 auto;padding-top:10px">
            <button class="cancel-pill" data-act="close" type="button">取消</button>
          </div>
        </div>
      </div>`;
    },

    customDur: () => {
      const rule = S.draft?.rule || "daily";
      const days = Math.max(S.customDurDays || defaultCustomDays(rule), customDurMinDays(rule));
      const end = monthDayLabel(demoDate(days - 1));
      const accent = editorAccent(S.draft || { cat: "monitoring" }, false).fg;
      const count = customDurCount(days, rule);
      const canDown = count > 1 && daysFromCount(count - 1, rule) >= customDurMinDays(rule);
      // 到顶后步进本来就会静默停住，按钮一并置灰（与 − 同款，别让用户以为点了没反应）
      const canUp = daysFromCount(count + 1, rule) !== days;
      return `
      <div class="scrim center" data-act="close">
        <div class="popup" style="border-radius:28px;padding:20px 20px 18px;max-width:380px" onclick="event.stopPropagation()">
          <h3 class="s22 fb ta-c" style="color:${accent}">自定义时长</h3>
          <div class="custom-dur-step" style="--accent:${accent}">
            <button class="circle-btn" data-act="customDurStep" data-dir="-1" type="button"${canDown ? "" : " disabled"}>−</button>
            <div class="s28 fb mono" style="color:${accent}">${customDurLabel(days, rule)}</div>
            <button class="circle-btn" data-act="customDurStep" data-dir="1" type="button"${canUp ? "" : " disabled"}>＋</button>
          </div>
          <button class="date-row" style="background:${accent}14;color:${accent};margin-top:12px" data-act="openCustomDurCal" type="button">
            <span>${I.cal}至 ${end}</span><span class="dim">${I.chevUD}</span>
          </button>
          <div class="duo" style="margin-top:16px">
            <button class="cancel" data-act="close" type="button">取消</button>
            <button class="ok" data-act="saveCustomDur" type="button">保存</button>
          </div>
        </div>
      </div>`;
    },
    catPick: () => `
      <div class="scrim bottom" data-act="close">
        <div class="sheet large" onclick="event.stopPropagation()">
          <div class="grab"></div>
          <div class="flex between" style="padding:0 2px 8px">
            <button class="nav-text" data-act="close" type="button">取消</button>
            <h3 class="s17" style="margin:0">选择类别</h3>
            <button class="nav-text blue" data-act="confirmDocCat" type="button">确认</button>
          </div>
          <div class="cat-list">
            ${DOC_CATS.map((c) => `
              <button class="cat-row ${S.pendingCat === c.id ? "on" : ""}" data-act="pickDocCat" data-c="${c.id}" type="button">
                <span class="cat-ico">${I.doc}</span>
                <span class="grow ta-l"><b>${c.t}</b>${c.req ? `<i>必传</i>` : ""}</span>
                ${S.pendingCat === c.id ? `<span class="cat-check">${I.check}</span>` : ""}
              </button>`).join("")}
          </div>
        </div>
      </div>`,
    archivePick: () => `
      <div class="scrim center" data-act="close">
        <div class="popup" onclick="event.stopPropagation()">
          <h3>上传报告资料</h3>
          <p>选择基础资料或复查报告</p>
          <div class="col gap10" style="margin-top:8px">
            <button class="cta h52" data-act="pickArchive" data-kind="baseline" type="button">基础报告</button>
            <button class="cta h52" data-act="pickArchive" data-kind="visit" type="button">复查报告</button>
            <button class="cta-ghost" data-act="close" type="button">取消</button>
          </div>
        </div>
      </div>`,
    // 体测前指南弹窗（真机 BodyTestRunView overlayCard：320×360 白卡）
    testGuide: () => {
      const sit = S.testMode === "sit";
      const warn = sit ? "如果您起坐时需要他人扶助，请勿独自进行评估" : "如果您因为任何原因不能独立行走，请勿进行评估";
      const guides = sit
        ? ["坐在椅子中央，双脚平放地面，双手交叉抱胸", "以自己舒适的节奏反复起立-坐下，跟随动画", "座椅稳固靠墙防滑，感到不适请立即停止"]
        : ["全程保持匀速原地踏步，跟随动画节奏", "感到胸闷、气促或头晕请立即停止", "在平整空旷处进行，注意脚下安全"];
      return `
      <div class="scrim center test-dim">
        <div class="test-card" onclick="event.stopPropagation()">
          <h3 class="s20 fb t ta-c">${sit ? "1 分钟坐立实验" : "原地踏步三分钟"}</h3>
          <div class="col gap12 mt16">
            <div class="flex gap10" style="align-items:flex-start">
              ${I.warn.replace("<svg ", '<svg style="width:22px;height:22px;color:#F05A6E" ')}
              <div class="s14 fsb" style="color:#F05A6E">${warn}</div>
            </div>
            ${guides.map((g, i) => `
              <div class="flex gap10" style="align-items:flex-start">
                <span class="test-num">${i + 1}</span>
                <div class="s14 fm" style="color:rgba(16,84,224,.82)">${g}</div>
              </div>`).join("")}
          </div>
          <button class="cta mt20" data-act="beginCountdown" type="button">准备好了，立即开始</button>
          <button class="cta-ghost mt10" style="background:transparent;color:var(--secondary)" data-act="exitTest" type="button">退出评估</button>
        </div>
      </div>`;
    },
    // 3-2-1 倒计时（同一张白卡，148pt 大数字）
    testCountdown: () => `
      <div class="scrim center test-dim">
        <div class="test-card ta-c" onclick="event.stopPropagation()">
          <div class="count-num">${S.overlayData.n ?? 3}</div>
          <button class="cta mt20" data-act="startTest" type="button">开始测试</button>
        </div>
      </div>`,
    // 散步记录筛选：月历圈选起止日（真机 WalkRecordsView 贴底月历面板）
    walkFilter: () => {
      const { from = null, to = null } = S.overlayData || {};
      const month = new Date(2026, 8, 1);
      const padN = month.getDay();
      const last = new Date(2026, 9, 0).getDate();
      const todayYMD = toYMD(demoDate());
      const cells = [];
      for (let i = 0; i < padN; i++) cells.push(`<div class="day-cell"></div>`);
      for (let day = 1; day <= last; day++) {
        const ymd = `2026-09-${String(day).padStart(2, "0")}`;
        const future = ymd > todayYMD;
        const inRange = from && to && ymd >= from && ymd <= to;
        const edge = ymd === from || ymd === to;
        const personWalkRecords = activePersonStore().walkRecords || WALK_RECORDS;
        const has = personWalkRecords.some((d) => d.ymd === ymd && d.items.some((it) => !(S.walkDeleted || {})[it.key]));
        cells.push(`<div class="day-cell" ${future ? "" : `data-act="${!from || (from && to) ? "pickWalkFrom" : "pickWalkTo"}" data-ymd="${ymd}"`}>
          <div class="day-num ${edge ? "on" : inRange ? "range" : ""} ${future ? "dim" : ""}">${day}</div>
          <div class="day-dot ${has ? "done" : ""}"></div>
        </div>`);
      }
      return `
      <div class="scrim bottom" data-act="close">
        <div class="sheet" onclick="event.stopPropagation()">
          <div class="grab"></div>
          <div class="flex between" style="padding:2px 4px 10px">
            <button class="nav-text" data-act="clearWalkFilter" type="button">清除筛选</button>
            <h3 class="s17">筛选时间段</h3>
            <button class="nav-text" data-act="pickWalkRange" type="button">完成</button>
          </div>
          <div class="cal-island">
            <div class="cal-head"><span></span><div class="s17 fb t">2026年9月</div><span></span></div>
            <div class="weekdays">${"日一二三四五六".split("").map((d) => `<span>${d}</span>`).join("")}</div>
            <div class="days">${cells.join("")}</div>
          </div>
          <p class="s13 t-sec ta-c mt12">${from && to ? `${parseYMD(from).getMonth() + 1}月${parseYMD(from).getDate()}日 – ${parseYMD(to).getMonth() + 1}月${parseYMD(to).getDate()}日` : from ? "再点一天作为结束日" : "点一天作为开始日"}</p>
        </div>
      </div>`;
    },
    // 散步路径海报（真机 WalkRecordsView / WalkView：图钉胶囊 + 完整日期 + 白卡路径 + 三栏读数）
    walkPoster: () => {
      const d = S.overlayData || {};
      const r = WALK_ROUTES[Number(d.path || 0) % 4];
      const date = d.date || "2026年9月11日";
      return `
      <div class="scrim bottom" data-act="close">
        <div class="sheet ta-c" onclick="event.stopPropagation()">
          <div class="grab"></div>
          <div class="poster-card">
            <div class="poster-pin">${I.walk}<span>散步打卡</span></div>
            <div class="poster-date">${date}</div>
            <div class="poster-route">
              <svg viewBox="0 0 100 88" preserveAspectRatio="xMidYMid meet">
                <path d="${r.d}" fill="none" stroke="#1054E0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="${r.s[0]}" cy="${r.s[1]}" r="6" fill="#fff"/><circle cx="${r.s[0]}" cy="${r.s[1]}" r="4.5" fill="#1AA64A"/>
                <circle cx="${r.e[0]}" cy="${r.e[1]}" r="6" fill="#fff"/><circle cx="${r.e[0]}" cy="${r.e[1]}" r="4.5" fill="#F0644A"/>
              </svg>
            </div>
            <div class="poster-stats">
              <div><b>${d.km || "0.68"}</b><small>km 距离</small></div>
              <div><b>${d.dur || "12:34"}</b><small>时长</small></div>
              <div><b>${d.steps || "920"}</b><small>步数</small></div>
            </div>
          </div>
          <div class="flex center gap16">
            ${[["微信", "demoShare", "#07C160"], ["小红书", "demoShare", "#FF2442"], ["保存图片", "savedAlbum", "#1054E0"], ["取消", "close", "#828EA5"]]
              .map(([t, a, c]) => `<button class="share-ch" data-act="${a}" type="button" style="--ch:${c}"><i></i><span>${t}</span></button>`).join("")}
          </div>
        </div>
      </div>`;
    },
    // 档案整页预览：黑底 + 关闭胶囊 + 标题（真机 HealthRecordView 全屏预览）
    archivePreview: () => `
      <div class="preview-full" data-act="closePreview">
        <div class="preview-bar" onclick="event.stopPropagation()">
          <h3 class="s17 fb t-white">${S.overlayData.title || "档案"}</h3>
          <button class="preview-close" data-act="closePreview" type="button">${I.x}</button>
        </div>
        <div class="preview-body"><span class="preview-page">${I.doc}</span></div>
      </div>`,
    // 集章分享：竖版全尺寸海报预览 + 56pt 渠道圆钮（真机 TodayStampShareView sharePoster）
    share: () => {
      const sel = S.stampSelYMD || toYMD(demoDate());
      const d = parseYMD(sel);
      const doneSet = stampDoneSet(sel);
      const doneN = doneSet.size;
      const dayTasks = liveTasks(sel);
      const dayN = Math.max(1, dayTasks.length);
      const allDone = dayTasks.length > 0 && doneN === dayTasks.length;
      return `
      <div class="scrim bottom" data-act="close">
        <div class="sheet ta-c" onclick="event.stopPropagation()">
          <div class="grab"></div>
          <div class="poster-full">
            <div class="poster-head">
              <img src="${A.logo}" width="30" height="30" alt="" />
              <span>哈宝 · 康复打卡</span>
            </div>
            <div class="poster-title">${d.getMonth() + 1}月${d.getDate()}日集章</div>
            ${rxPosterLine(sel)}
            <div class="poster-ring">
              <div class="stamp-ring ${allDone ? "done" : ""}" style="transform:scale(1.5)">
                <svg viewBox="0 0 36 36">
                  <circle class="bg" cx="18" cy="18" r="15"/>
                  <circle class="fg" cx="18" cy="18" r="15" style="stroke-dasharray:94.2;stroke-dashoffset:${(94.2 * (1 - doneN / dayN)).toFixed(1)}"/>
                </svg>
                <span>${Math.round((doneN / dayN) * 100)}%</span>
              </div>
            </div>
            ${allDone ? `<img src="${A.stamp.bloom}" width="76" alt="" />` : ""}
            <div class="stamp-grid poster-grid">
              ${Object.keys(CAT).map((c) => `<div class="stamp ${doneSet.has(dayTasks.find((t) => t.cat === c)?.id) ? "" : "ghost"}"><img src="${A.stamp[c]}" alt="" /></div>`).join("")}
            </div>
            <div class="poster-foot">已收下 ${doneN} / ${dayTasks.length} 枚健康章</div>
          </div>
          <div class="flex center gap16">
            ${[["微信", "demoShare", "#07C160"], ["小红书", "demoShare", "#FF2442"], ["保存图片", "savedAlbum", "#1054E0"], ["取消", "close", "#828EA5"]]
              .map(([t, a, c]) => `<button class="share-ch" data-act="${a}" type="button" style="--ch:${c}"><i></i><span>${t}</span></button>`).join("")}
          </div>
        </div>
      </div>`;
    },
  };

  /// 液位柱：轨道 + 达标带浅底 + 液面高光 + 刻度；液色按档位取（真机 VitalPressureColumn）
  function vitCol(label, val, key, color, unit, band, range, status, short) {
    const [lo, hi] = range;
    const span = hi - lo;
    // 未录入（val == null）不画液面、读数显「—」，避免把回落值伪装成已填
    const empty = val == null;
    const pct = empty ? 0 : Math.max(0, Math.min(1, (val - lo) / span));
    const fill = empty ? "#B9C4D4" : status === "inTarget" ? color : VITAL_COLOR[status];
    const bandLo = Math.max(0, (band[0] - lo) / span);
    const bandHi = Math.min(1, (band[1] - lo) / span);
    return `<div class="grow vcol">
      <div class="vcol-title">${label}</div>
      <div class="vcol-track${short ? " short" : ""}">
        <div class="vcol-band" style="bottom:${(bandLo * 100).toFixed(1)}%;height:${((bandHi - bandLo) * 100).toFixed(1)}%;background:${color}1f"></div>
        ${empty ? "" : `<div class="vcol-fill" style="height:${Math.max(8, pct * 100).toFixed(1)}%;background:linear-gradient(180deg, ${fill}, ${fill}8c);box-shadow:0 -2px 8px ${fill}47">
          <i></i>
        </div>`}
        ${[1 / 3, 2 / 3, 0.92].map((t) => `<span class="vcol-tick" style="bottom:${(t * 100).toFixed(1)}%"></span>`).join("")}
      </div>
      <div class="vcol-val mono" style="color:${fill}">${empty ? "—" : val}</div>
      <div class="vcol-unit">${unit}</div>
      <div class="flex center gap8 mt8">
        <button class="circle-btn" data-act="${key}-" type="button">−</button>
        <button class="circle-btn" data-act="${key}+" type="button">＋</button>
      </div>
    </div>`;
  }

  window.__borg = (v) => { S.borg = +v; render(); };
  // 滚轮题只在本地刷新读数，不整屏重绘（否则拖动会被打断）
  window.__qnum = (v) => {
    S.answers[QUESTIONS[S.qIndex].id] = +v;
    const el = document.getElementById("q-wheel-val");
    if (el) el.textContent = `${v} 分`;
  };

  function setMode(m) {
    // 模拟态下点三态按钮 = 换态冷启动（重置后 S.sim 已清空，不会递归）
    if (S.sim?.on) return coldStart(m);
    document.querySelectorAll(".mode-row button").forEach((b) => b.classList.remove("on"));
    if (m === "login") {
      $("#mode-login").classList.add("on");
      resetFlowFlags();
      S.loggedIn = false;
      S.enrolled = false;
      S.privacyAccepted = false;
      S.loginTermsChecked = false;
      S.privacyDeclinedStep = false;
      S.privacyExitedNotice = false;
      jump("onboard-login");
    } else if (m === "new") {
      $("#mode-new").classList.add("on");
      resetFlowFlags(); S.loggedIn = true; S.enrolled = false; S.privacyAccepted = true; S.loginTermsChecked = true; jump("home");
    } else {
      $("#mode-demo").classList.add("on");
      resetFlowFlags(); S.loggedIn = true; S.enrolled = true; S.privacyAccepted = true; S.loginTermsChecked = true; jump("home");
    }
  }

  document.addEventListener("click", (e) => {
    // 真机模拟：左树空降一律拦下（否则链路验证没意义）
    if (S.sim?.on) {
      const blocked = e.target.closest(".studio-nav [data-go]");
      if (blocked) { e.preventDefault(); e.stopPropagation(); return; }
    }
    const goEl = e.target.closest("[data-go]");
    if (goEl && goEl.closest(".studio-nav")) {
      jump(goEl.dataset.go);
    }
  });
  $("#nav-search").addEventListener("input", renderNav);
  $("#mode-login").onclick = () => setMode("login");
  $("#mode-new").onclick = () => setMode("new");
  $("#mode-demo").onclick = () => setMode("demo");
  $("#mode-sim").onclick = () => (S.sim?.on ? exitSim() : coldStart("demo"));
  // 模拟面板在 .studio-spec 内，不在 bindClicks 的作用域，改用委托
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-sim]");
    if (!el || !S.sim) return;
    e.preventDefault();
    e.stopPropagation();
    const k = el.dataset.sim;
    if (k === "exit") exitSim();
    else if (k === "reset") coldStart(S.sim.mode || "demo");
    else if (k === "cold") coldStart(el.dataset.mode);
    else if (k === "focus") {
      S.sim.focus = S.sim.focus === el.dataset.flow ? null : el.dataset.flow;
      render();
    }
  });

  window.addEventListener("resize", scalePhone);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { if (S.overlay) closeOverlay(); else back(); } });

  render();
})();
