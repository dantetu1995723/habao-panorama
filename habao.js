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
    person: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a4.2 4.2 0 1 0-4.2-4.2A4.2 4.2 0 0 0 12 12Zm0 2.2c-3.6 0-8 1.8-8 5.4V21h16v-1.4c0-3.6-4.4-5.4-8-5.4Z"/></svg>`,
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
    hist: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4a8 8 0 1 1-7.4 4.9l1.8.7A6.2 6.2 0 1 0 12 5.8V8l3.4-3.2L12 1.6V4Zm-.8 4.4h1.6v4.1l3 1.8-.8 1.4-3.8-2.3V8.4Z"/></svg>`,
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
    { id: "t1", title: "起床测血压", h: 6, m: 30, cat: "monitoring", note: "静坐 5 分钟后测量" },
    { id: "t2", title: "晨起温水", h: 7, m: 0, cat: "diet", note: "200–300 ml 温水" },
    { id: "t3", title: "早餐", h: 7, m: 30, cat: "diet", note: "低盐低脂，搭配粗粮" },
    { id: "t4", title: "服用阿司匹林肠溶片", h: 8, m: 0, cat: "medication", note: "100 mg · 早餐后" },
    { id: "t5", title: "服用美托洛尔缓释片", h: 8, m: 30, cat: "medication", note: "47.5 mg · 早餐后" },
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
    { id: "t16", title: "服用阿托伐他汀钙片", h: 21, m: 0, cat: "medication", note: "20 mg · 睡前" },
    { id: "t17", title: "放松冥想", h: 21, m: 30, cat: "rest", note: "深呼吸练习 · 478 呼吸法" },
    { id: "t18", title: "准备入睡", h: 22, m: 0, cat: "rest", note: "关闭屏幕，调暗灯光" },
    { id: "t19", title: "心内科复查", h: 9, m: 0, cat: "appointment", note: "每月提醒 · 带齐近期血压/心率记录" },
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
    { name: "起床", t: "07:00", note: "醒后先在床边坐一会，再慢慢起身" },
    { name: "早餐", t: "07:30", note: "低盐低脂，搭配粗粮" },
    { name: "午餐", t: "12:00", note: "每日盐摄入 < 5g · 多蔬菜" },
    { name: "午休", t: "13:00", note: "保持安静环境，避免手机" },
    { name: "晚餐", t: "18:00", note: "七分饱 · 少油少盐" },
    { name: "上床睡觉", t: "22:00", note: "关闭屏幕，调暗灯光" },
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
    return (MEDS.find((x) => x.name === title) || {}).dose || "";
  }

  /// 补充备注 = 来源依据（与真机 PlanBasisNarrative.supplementaryNote 同句，不含日程）
  function confirmMedNote(title) {
    const m = MEDS.find((x) => x.name === title);
    if (!m) return `${title}，来源出院记录的用药。`;
    const parsed = [m.dose, m.freq, m.usage].filter(Boolean).join(" ");
    return parsed ? `${title} ${parsed}，来源出院记录的用药。` : `${title}，来源出院记录的用药。`;
  }

  /// 顶部依据段：活卡片日程 + 来源（与真机 PlanBasisNarrative.scheduleBoundNote 同句）
  function confirmMedBasis(d) {
    const m = MEDS.find((x) => x.name === d.title);
    const time = d.time || (m && m.time) || "";
    const scene = m && m.scene ? ` ${m.scene}` : "";
    const stamp = `${time}${scene}`.trim();
    const parsed = m ? [m.dose, m.freq, m.usage].filter(Boolean).join(" ") : "";
    const named = stamp ? `${d.title} ${stamp}` : d.title;
    if (parsed) return `${named}，${parsed}，来源出院记录的用药。`;
    return `${named}，来源出院记录的用药。`;
  }

  function confirmApptBasis(a) {
    const cut = a.note.indexOf("，");
    const source = cut >= 0 ? a.note.slice(cut + 1) : a.note;
    return `${a.title} ${a.time}，${source}`;
  }

  function confirmApptItems() {
    return [
      { title: "心内科复查", time: "每月24日 09:00", note: "心内科复查，来源出院记录的出院日期 2026年9月17日。" },
      { title: "心内科复查", time: "每月8日 09:00", note: "心内科复查，来源手术记录的手术日期 2026年9月8日。" },
    ];
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

  // V10.50：资料合集页只读——与健康档案同源（基础报告列入组存量，复查报告按次归档），
  // 点缩略图开全屏预览；拍 / 删仍走底栏「新增报告资料」
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
    return `${title}，来源出院记录的出院诊断 高血压3级。`;
  }

  function confirmMonitorBasis(d) {
    const time = d.time || "";
    const named = time ? `${d.title} ${time}` : d.title;
    return `${named}，来源出院记录的出院诊断 高血压3级。`;
  }

  const DISEASE_INFO = ["冠心病", "不稳定型心绞痛", "PCI术后", "高血压3级", "2型糖尿病"];

  function confirmBasisParagraph() {
    const diseaseHTML = `<div class="basis-sec"><div class="basis-sec-title">疾病信息</div><p>${DISEASE_INFO.join("、")}。</p>${basisOriginPhotos(["dischargeRecord"])}</div>`;
    const meds = (S.confirmDrafts || []).filter((d) => d.cat === "medication");
    const medHTML = meds.length
      ? `<div class="basis-sec"><div class="basis-sec-title">用药计划</div>${meds.map((d) => `<p>${confirmMedBasis(d)}</p>`).join("")}${basisOriginPhotos(["dischargeRecord"])}</div>`
      : "";
    const monitors = (S.confirmDrafts || []).filter((d) => d.cat === "monitoring");
    const monHTML = monitors.length
      ? `<div class="basis-sec"><div class="basis-sec-title">测血压计划</div>${monitors.map((d) => `<p>${confirmMonitorBasis(d)}</p>`).join("")}${basisOriginPhotos(["dischargeRecord"])}</div>`
      : "";
    const appts = confirmApptItems();
    const apptHTML = `<div class="basis-sec"><div class="basis-sec-title">复查计划</div>${appts.map((a) => `<p>${confirmApptBasis(a)}</p>`).join("")}${basisOriginPhotos(["dischargeRecord", "surgeryRecord"])}</div>`;
    return diseaseHTML + medHTML + monHTML + apptHTML;
  }

  /// 依据各段后附着对应来源资料缩略图；没拍过该类型就不占位
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
    "onboard-login>onboard-role": "push",
    "onboard-role>onboard-profile": "push",
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
    "select-type>ocr-detail": "replace",
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
      { id: "onboard-role", t: "请选择你的身份", code: "OnboardingFlowView", how: "push" },
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
    ]},
    { g: "同 Cover 替换", items: [
      { id: "ocr-capture", t: "上传资料", code: "IntakeCaptureView", how: "replace" },
      { id: "exercise-risk", t: "运动前风险提示", code: "BodyTestRunView", how: "replace" },
      { id: "body-test", t: "散步体测", code: "BodyTestRunView", how: "replace" },
      { id: "body-test-sit", t: "坐立体测", code: "BodyTestRunView", how: "replace" },
      { id: "task-edit", t: "编辑计划", code: "AddEditTaskView", how: "replace" },
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
    "onboard-login": { code: "OnboardingFlowView", note: "短信登录 Demo 不校验。11 位手机 + 6 位验证码后「登录」可点。聚焦后口号改「欢迎使用哈宝」。" },
    "onboard-role": { code: "OnboardingFlowView", note: "家属也是管理患者的成员，填写的都是患者信息。大卡单选。" },
    "onboard-profile": { code: "PatientProfileFormFields", note: "姓名必填；「进入哈宝」始终可点，空姓名顶部 toast「请填写姓名」。" },
    home: { code: "TodayView + HomeClockSection", note: "唯一一级页。左栏跟手变焦 182–192，焦点卡带转盘；拨转 0.68°/pt 最短弧吸附。散步打卡后居中舞台。复查打卡弹三选一：上传资料 / 直接打卡 / 暂不打卡。左栏顶虚框直开当天该时段添加页：默认测血压，服药 / 运动 / 复查置灰禁用。" },
    schedule: { code: "RehabPanoramaView", note: "选中日驱动整页：周图标题写该周起止区间（周日起始，翻周才变、点选周内某天不动），列表与「未完成 / 已完成」计数随子计划过滤，历史日提示条日期动态、过去日号略淡。周/月图左右滑翻页。列表操作卡：勾选 + 底栏查看/删除；有补充备注时收进卡内，用药 / 复查与其它类型同一套脚注（空不占行）。副行在时刻前标选中日完整年月日（2026年9月16日 13:00），元信息标单日/循环；循环两钮「仅删本次 / 长期删除」，单日一钮删除。点查看先进查看计划，右上编辑才进编辑。历史日只读「查看」。切「已完成」整页绿白。" },
    vitals: { code: "HealthMonitorModuleView", note: "只按周翻页（不可到未来）。底栏进入哈宝医生带本周评估。" },
    report: { code: "FollowUpModuleView", note: "综合结论 + 三等分入口 + 底栏哈宝医生。" },
    "report-sub": { code: "BodyReportSubReportView", note: "V10.50：顶栏两枚 Tab「AI 解读 / 资料合集」（同构确认计划「计划 / 解析依据」，字号适老档），默认落 AI 解读；资料合集只读——基础报告列入组存量、复查报告按次归档，点缩略图开全屏预览，空态只留文案（拍 / 删仍走底栏「新增报告资料」→ 资料详情）。底栏两页共用；复诊打卡形态在「新增报告资料」下多一颗「返回首页」。" },
    walk: { code: "WalkView", note: "大标题 + 44 回首页（dismiss cover，不压栈）。地图主卡底浮层：60 圆钮记录/分享 + 60 主胶囊。三态：开始运动 / 返回运动 / 保存并打卡。首页运动打卡先进本页再自动开会话。保存归属：计划入口完成原任务，自由入口按开始时刻新建「自主散步」，不猜测也不占用存量计划。" },
    "walk-session": { code: "OutdoorWalkSessionView", note: "全屏地图 + 可提拉毛玻璃 sheet。展开：音源菜单+AI+封面曲名+三键播放；读数 38+单位在上；圆钮返回/暂停/120。暂停：已暂停横排 + 长按条 + 继续/结束/120。返回只收会话，不新开散步页。" },
    "walk-records": { code: "WalkRecordsSheet", note: "按天双列瀑布流。卡顶距离+步数/时段，路径区宽高比 0.88，底部分享/删除胶囊。分享出路径海报（图钉胶囊 + 完整日期 + 白卡路径 + 距离/时长/步数），删除先确认；右上「筛选」开贴底月历圈选起止日，列表顶出范围胶囊可一键清除。" },
    stamps: { code: "TodayStampShareView", note: "标题旁 36 进度环 + 右 44 日历。DayPeriod 6 段。底栏返回 + 一键分享。" },
    consult: { code: "SmartConsultChatView", note: "按住说话；上滑超 70pt 立即发送。可切文字输入。底坞三功能：解读指标 / 解读报告带上下文，拍照问诊挂待发图。" },
    profile: { code: "ServiceView", note: "Hero 健康档案 + 家属/通知/协议。无 VIP。" },
    "ocr-capture": { code: "IntakeCaptureView", note: "组轨道：点组卡只选中当前组，不进组资料；＋新建组开类别 sheet（.large）；复查直建「第 N 次复查」。快门写入当前组；快门左侧相册进当前组已拍页。入组须先拍出院记录才能确认；未拍时点右上「确认」出提示并切到出院组。" },
    "ocr-group": { code: "IntakeCaptureView", note: "单组已拍页。左「拍摄」回取景；右「相册」导入写入本组。组轨道点卡不会进这一页。" },
    "ocr-detail": { code: "IntakeCaptureView", note: "按组分区预览。与首次上传、身体报告·基础报告共用同一份存量。入组可改类别 / 删组（必传出院记录至少留一组）；复查不改类别。右上入组「解析」、存档「提交」。无存量时空态只留文案，拍资料走左上「拍摄」，页内不再放「拍摄资料」钮。" },
    "first-rest": { code: "CreateScheduleFlowView", note: "点名称换预设；点时刻出居中「时刻调整」弹层（标题为事项名，双列时/分步进，分步长 5，取消 / 完成，点遮罩取消）。默认六项（起床 / 三餐 / 午休 / 睡觉，不含测血压）。「稍后」关整段创建流回首页；底栏「拍照上传病历」替换本页，不压栈。" },
    "confirm-plan": { code: "InfoWithScreeningHost", note: "schedulesOnly。顶栏「计划 / 解析依据」两枚 Tab（同构健康计划未完成/已完成），默认落计划；解析依据页先写疾病信息字段，再按用药 / 测血压 / 复查分段，结合卡片日程说明来源；各段正文后附着对应来源资料缩略图（疾病信息 / 用药 / 测血压 → 出院记录，复查 → 出院记录与手术记录），没拍过该类型就不占位。作息区按入口条件展示：首次入组才带作息 / 饮食 / 测血压，已入组重走用药与复查只有用药 + 复查；复查置底标红。操作卡底栏编辑/删除，改动回写本次草稿。改时刻走编辑页，确认页不拖卡片改时段。「确认」首次入组回首页点亮时钟、已入组落回健康计划页；「稍后」关整段流回进入处；重新解析回到拍摄；自主新建未入组时添加即入组回首页、已入组时追加进本次草稿并回本页。" },
    "confirm-exercise": { code: "ExerciseScheduleConfirmView", note: "运动计划数量角标 + 时段「n 项」+ 操作卡。右上「确认」回首页点亮时钟；「稍后」放弃并关评估流回进入处；自主新建 / 卡片编辑开草稿后回到本页。" },
    "select-type": { code: "CreateScheduleFlowView", note: "专业听诊器 14 / 日常铃。两组岛：用药与复查标复查红（特殊），进与首次上传 / 基础报告同一份资料详情，确认后覆盖更新用药+复查；运动走体测。新建类别并进日常岛。首页虚框不经本页（首页「添加今日计划」第一层也不放右上「管理」，保持快捷路径轻量）。选类型后替换本页；返回关整段创建 cover。右上「管理」推入管理类别（仅两处「选择类型」页有）。" },
    "category-manage": { code: "CategoryManageView", note: "纯管理页，不放新建（新建仍在选择类型页底部虚框）。被 push 而非 cover，故不自带导航栈，沿用父栈导航栏。每行：徽标 + 名称 + 副标 + 铅笔 + 垃圾桶，无 chevron。副标就是两类分界：有存量写「N 个计划」，没有写「暂无计划」且压淡。铅笔进改名弹层（只改名，无删除按钮，带影响提示）；垃圾桶进删除流程：无存量一句确认，有存量给迁移面板 —— 选一个类别承接，或走「连同 N 个计划一起删除」（该路径再要一道二次确认，是本流程唯一不可逆的一步，会连打卡历史一起没）。零类别时空态引导回选择类型页新建。" },
    "task-add": { code: "AddEditTaskView", note: "两大类折叠（不分页）：一条滚动里「事项」「时间与提醒」两组，标题行点一下收起、再点一下展开，进页两组都展开。「事项」：名称、备注、今日血压、分类。「时间与提醒」：计划类型 → 日期 / 开始日期（同一字段；单日读「日期」、循环读「开始日期」，过去日不可选；首页虚框锁定当天；切成循环计划不跳页，循环规则与持续时长就在下方就地出现）→ 循环规则（每日 / 每周 / 每月 + 自定义间隔，每月 1–31 与「月末」同格）→ 持续时长（预设不含 1天 / 1周 / 1个月、最长一年，末尾通栏「自定义」）→ 时间段 → 当日时刻 → 「到点提醒」（总开关在上、仅本次缩进在下；单日一档）＋「家属通知」（V10.52：家属通道串联，未绑定先去填写、填完自动进打卡通知页；总闸关着弹「去设置」）→ 查看态删除 / 取消打卡。折叠只影响看不看得见，右上「添加」随时可保存。" },
    "task-edit": { code: "AddEditTaskView", note: "同两大类折叠。只改字段，底部无删除。已保存计划的「日期 / 开始日期」禁用不可改（新建仍可改，首页虚框仍锁定当天）。改动随「确认」落库，左「取消」放弃改动时提醒一并回退。该日已打卡时「本次及后续提醒」与「仅本次提醒」都显示为关并置灰，取消打卡后按原值恢复。「家属通知」与到点提醒同构，随「确认」落库、取消回退。" },
    "task-view": { code: "AddEditTaskView", note: "同两大类折叠、只读（标题行仍可点折叠）。「时间与提醒」组底部按已保存类型删除：循环「删除本次计划 / 删除本次和后续计划」，单日「删除计划」。到点提醒两档与「家属通知」即时生效（家属通道 = 通知家属 × 已绑定 × 类别开关）。" },
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
    role: "patient",
    name: "李建国",
    gender: "男",
    height: 170,
    weight: 75,
    phone: "13800138013",
    birthday: "1968年3月12日",
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
    hrExpanded: { baseline: true, review: false },
    hrPreview: null,
    // 确认页草稿：首次入组带作息区，已入组重走用药复查只有用药 + 复查
    confirmDrafts: null,
    confirmEditIndex: null,
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
    chatDraft: "",
    completed: { t1: true, t2: true },
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
    famRel: "配偶",
    notifySelf: true,
    notifyFamily: false,
    // 计划页「去填写 → 填完自动进打卡通知页」的链路标记（V10.52）
    famFillJump: false,
    notifyAll: true,
    cats: { medication: true, exercise: true, monitoring: true, diet: true, rest: true, appointment: true },
    // 计划「到点提醒」：remindOff = 本次及后续提醒关；mutedToday = 本次提醒关（按任务 id 记）
    remindOff: {},
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
    { id: "login", label: "未登录 · 登录 → 完善信息", cold: "login", steps: [
      { screen: "onboard-login", label: "欢迎使用哈宝" },
      { act: "sendCode", label: "获取验证码", hint: "登录页点「获取验证码」" },
      { act: "login", label: "填 11 位手机号 + 6 位验证码后登录" },
      { screen: "onboard-role", label: "请选择你的身份" },
      { act: "pickRole", label: "选本人 / 家属" },
      { act: "nextRole", label: "下一步" },
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
      { screen: "ocr-detail", label: "资料详情（载入存量）" },
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
    { id: "consult", label: "已入组 · 哈宝医生", cold: "demo", steps: [
      { screen: "consult", label: "底坞中钮 / 血压监测 / 身体报告三入口" },
      { act: "sendQuick", label: "点快捷问句" },
      { act: "sendChat", label: "发送文字", optional: true },
      { act: "newChat", label: "新对话", optional: true },
      { screen: "consult-history", label: "「对话」→ 历史记录", optional: true },
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
      { act: "shareStamp", label: "一键分享" },
      { act: "demoShare", label: "海报选渠道", optional: true },
    ]},
    // 开发菜单（真机 #if DEBUG）：三项语义差得远，最容易搞混「重新生成」与「测试登录步骤」
    { id: "debug-menu", label: "开发菜单 · 生成 / 重置 / 测试登录", cold: "demo", steps: [
      { act: "openDebug", label: "首页右上「…」打开开发菜单" },
      { act: "debugSeed", optional: true, label: "生成 Demo（铺满档案 + 计划 + 体征）" },
      { act: "debugRegenerate", optional: true, label: "重新生成（清计划与记录，留档案姓名）" },
      { act: "debugScheme", optional: true, label: "切换方案 1/2/3/4（仅状态，布局只复刻方案一）" },
      { act: "debugTestLogin", label: "测试登录步骤（只退登录态）" },
      { screen: "onboard-login", label: "回登录向导，计划与记录仍在" },
    ]},
    { id: "profile", label: "已入组 · 个人中心三件套", cold: "demo", steps: [
      { screen: "profile", label: "个人中心" },
      { act: "savePatient", label: "患者信息保存写回", optional: true },
      { act: "bindFam", label: "家属绑定（最多 5 位）", optional: true },
      { act: "toggleCat", label: "打卡通知分类开关", optional: true },
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
    const today = demoDate();
    const selected = parseYMD(selectedYmd);
    const kind = S.overlayData?.kind;
    const rule = S.draft?.rule || "daily";
    const minStart = kind === "customDur"
      ? Math.max(startDay(today), startDay(customDurEarliestEnd(rule)))
      : startDay(today);
    return daysInGrid(parseYMD(monthYmd)).map((d) => {
      if (!d) return `<div class="dp-cell"></div>`;
      const ymd = toYMD(d);
      const blocked = startDay(d) < minStart;
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
  function badge(cat, done) {
    const cls = done ? "done" : cat === "appointment" ? "appt" : "";
    return `<div class="badge ${cls}"><img src="${A.task[cat]}" alt="" /></div>`;
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

  const L = {
    minH: 300, maxH: 560, stripH: 56, stripGap: 10,
    overflow: 1.06, centerPast: 0.38, hugPad: 5, plate: 0.96,
    scrubMin: 64, scrubMaxR: 0.26,
    addH: 76, rowGap: 12, cardBase: 182, cardFocus: 192,
    labelOrbit: 0.66, tickOrbit: 0.935, handTip: 0.48,
    reading: 270, degPerPt: 0.68, sector: 360 / 7,
    titleArc: 16, actionArc: 22,
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
  function liveTasks(ymd = toYMD(demoDate())) {
    const skip = skippedOn(ymd);
    return SEED.filter((t) => !skip.includes(t.id));
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
      customId: d.customId || undefined,
      onceDate: d.onceDate || undefined,
    });
    // 「到点提醒」也随「确认」落库（真机 notificationEnabled → TaskNotificationService 重排）
    S.remindOff[id] = d.remind === false;
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
  // 确认页提交：整批草稿落成计划（真机 confirmMedications + syncMedications / syncAppointments）
  function commitConfirmDrafts() {
    const drafts = S.confirmDrafts || [];
    if (!drafts.length) return 0;
    // 已入组重走：用药 / 复查按本次确认整表覆盖，其它日常与运动不动
    if (S.enrolled) {
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
      S.remindOff[id] = x.remind === false;
      S.mutedToday[id] = x.muteFirst === true;
    });
    if (S.enrolled) {
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
      weekdays: [6],
      monthDays: [11],
      duration: "oneYear",
      customId: t.customId || null,
      customDays: null,
      block: blockOf(t.h).id,
      hour: t.h,
      min: t.m,
      title: t.title,
      remind: !S.remindOff[t.id],
      // 家属通知（V10.52）
      famNotify: !S.famOff[t.id],
      // 「本次提醒」的静音日（查看 / 编辑共用同一张 S.mutedToday）
      muteFirst: !!S.mutedToday[t.id],
      note: t.note || "",
      onceDate: t.onceDate || toYMD(demoDate()),
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
      remind: true,
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
    // 不提供 1天 / 1周 / 1个月；短于预设走末尾通栏「自定义」
    if (rule === "weekly") return [["weeks4", "4周"], ["weeks8", "8周"], ["weeks12", "12周"], ["halfYear", "半年"], ["oneYear", "一年"]];
    if (rule === "monthly") return [["months3", "3个月"], ["months6", "6个月"], ["oneYear", "一年"]];
    return [["days25", "25天"], ["days30", "30天"], ["days90", "90天"], ["halfYear", "半年"], ["oneYear", "一年"]];
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
      el.style.setProperty("--h-trail", `${trailingInset(h * 0.08, h * 0.56, w, geo.hugR, local, L.titleArc)}px`);
      el.style.setProperty("--a-trail", `${trailingInset(h * 0.6, h - 4, w, geo.hugR, local, L.actionArc)}px`);
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
      "onboard-role": [...login, P("onboard-role")],
      "onboard-profile": [...login, P("onboard-role"), P("onboard-profile")],
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
      "health-record": [...home, C("profile"), C("health-record")],
      "patient-edit": [...home, C("profile"), C("health-record"), C("patient-edit")],
      family: [...home, C("profile"), C("family")],
      notify: [...home, C("profile"), C("notify")],
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
  function present(id, how) {
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
    S.enter = true;
    render();
    S.enter = false;
  }
  function jump(id) {
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
    // V10.02：单钮一律进资料汇总页；无存量落空态（拍资料走左上「拍摄」）
    present(open === "capture" ? "ocr-capture" : "ocr-detail", "cover");
  }
  /// 复查资料提交后完成当天未打卡的复查计划（真机 ReviewVisitCaptureHost）
  function completeTodayAppointments() {
    liveTasks().forEach((t) => {
      if (t.cat === "appointment") S.completed[t.id] = true;
    });
  }
  function finishArchive() {
    const visit = isVisitCapture();
    const fromCheckIn = visit && S.apptCapture;
    // 复查提交后把本批并入「资料合集」的复查报告 —— 否则上传完仍是写死的空态
    if (visit) {
      S.docGroups.filter((g) => g.pages > 0).forEach((g) => {
        ARCHIVE_DEMO.review.groups.push({ title: groupDisplayName(g), pages: g.pages });
      });
    }
    S.captureMode = "intake";
    seedDocGroups(0);
    if (fromCheckIn) completeTodayAppointments();
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
      <div class="tag">${S.role === "patient" ? "本人" : "家属"}</div>
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
    // toast 挂在 .phone-screen 而非 #app：`#app > *` 会覆盖 position/z-index，
    // 挂里面就浮不起来、还会被弹层（z-index 50）盖住
    const scr = document.querySelector(".phone-screen");
    scr.querySelector(".toast")?.remove();
    scr.insertAdjacentHTML("beforeend", toastHTML());
    overlay().className = "overlay-root" + (S.overlay ? " active" : "");
    overlay().innerHTML = S.overlay ? overlays[S.overlay]() : "";
    bind();
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
      el.onclick = () => go(el.dataset.go, el.dataset.how);
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
    bindLoginFocus();
    bindEdgeBack();
    bindWheelCols();
    const draft = document.getElementById("chat-draft");
    if (draft) {
      draft.oninput = () => { S.chatDraft = draft.value; };
      draft.onkeydown = (e) => { if (e.key === "Enter") { e.preventDefault(); act("sendChat"); } };
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
    const btn = document.getElementById("hold");
    if (!btn) return;
    let y0 = 0;
    let sent = false;
    const send = () => {
      if (sent) return;
      sent = true;
      S.consultOpen = true;
      S.messages.push({ who: "user", t: "（语音）今天血压有点高" });
      S.messages.push({ who: "ai", t: "先静坐复测。若连续高于 140/90 并伴头晕，建议联系医生。" });
      render();
    };
    btn.onpointerdown = (e) => {
      sent = false;
      y0 = e.clientY;
      btn.classList.add("pressing");
      btn.textContent = "正在聆听…";
      try { btn.setPointerCapture(e.pointerId); } catch (_) {}
    };
    btn.onpointermove = (e) => {
      if (!sent && y0 - e.clientY > 70) send();
    };
    btn.onpointerup = () => {
      btn.classList.remove("pressing");
      if (!sent) send();
      else btn.textContent = "按住 说话";
    };
    btn.onpointercancel = () => {
      btn.classList.remove("pressing");
      btn.textContent = "按住 说话";
    };
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
        go("onboard-role", "push");
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
          if (S.screen === "home") refreshHomeSoft(); else render();
          return;
        }
        if (t.cat === "exercise") { openOverlay("exercise", { id }); return; }
        if (t.cat === "appointment") { openOverlay("appointment", { id }); return; }
        if (t.cat === "monitoring" && t.title !== "测心率") {
          // 不预填全局 S.sys/dia/hr：那会把「面板展示值」写成真值，污染编辑页与下次录入
          // （录入面板 overlays.vitals 自带「未预填时回落最近读数」）
          openOverlay("vitals", { id });
          return;
        }
        S.completed[id] = true;
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
      detail() { S.taskId = el.dataset.id; S.taskMode = "view"; S.draft = null; S.editorCollapsed = []; go("task-view", "cover"); },
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
      walkStart() { S.walkTaskId = null; S.walkStartedAt = demoNowHM(); S.walking = true; S.paused = false; S.walkSheet = true; S.musicMenu = false; S.walkSaved = false; go("walk-session", "cover"); },
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
        // 散步分享 = 路径海报（不是集章名信片）
        if (S.walking || S.walkSaved) openOverlay("walkPoster", { date: "2026年9月11日" });
        else toast("还没有散步路径，先出门走一段吧");
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
        S.walking = true;
        S.paused = false;
        S.walkSheet = true;
        S.musicMenu = false;
        S.walkSaved = false;
        S.walkTaskId = id;
        S.walkStartedAt = demoNowHM();
        if (S.screen !== "walk") go("walk", "cover");
        go("walk-session", "cover");
      },
      exerciseDone() {
        S.completed[S.overlayData.id] = true;
        closeOverlay();
      },
      appointmentGo() {
        closeOverlay();
        S.reportKind = "visit";
        // V10.49：这条拍摄来自首页复查打卡，提交后接复查报告页而不是直接回首页
        S.apptCapture = true;
        startArchive("capture");
      },
      appointmentDone() {
        S.completed[S.overlayData.id] = true;
        closeOverlay();
      },
      vitalsSave() {
        // 三个读数缺一不可：未录入就打卡会把「—」当成一次测量记进去
        if (S.sys == null || S.dia == null || S.hr == null) {
          toast("请填写收缩压、舒张压与心率");
          return;
        }
        S.completed[S.overlayData.id] = true;
        closeOverlay();
      },
      // 确认页：计划 / 解析依据分页 / 改备注
      setConfirmPane() { S.confirmPane = el.dataset.p === "basis" ? "basis" : "plan"; render(); },
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
        // 确认即提交：整批草稿落成计划（真机确认页 confirm → syncMedications / syncAppointments）
        commitConfirmDrafts();
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
      confirmExercise() { commitConfirmDrafts(); finishGeneratedPlan("已写入运动计划"); },
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
        initDraft({
          cat,
          h: hm ? +hm[1] : parseHour(time),
          m: hm ? +hm[2] : 0,
          title: el.dataset.title || "",
          note: "",
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
        S.draft.cycle = el.dataset.v === "1";
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
      draftRule() { if (S.draft) { S.draft.rule = el.dataset.r; S.draft.duration = "oneYear"; S.draft.customDays = null; render(); } },
      draftWeek() {
        if (!S.draft) return;
        const n = +el.dataset.w;
        const set = new Set(S.draft.weekdays || []);
        if (set.has(n)) { if (set.size > 1) set.delete(n); }
        else set.add(n);
        S.draft.weekdays = [...set];
        render();
      },
      draftDur() { if (S.draft) { S.draft.duration = el.dataset.d; S.draft.customDays = null; render(); } },
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
        openOverlay("datePick", { selected: ymd, month: ymd });
      },
      pickCalDay() {
        if (!S.overlayData) return;
        S.overlayData.selected = el.dataset.ymd;
        S.overlayData.month = el.dataset.ymd;
        if (S.overlayData.kind === "customDur") {
          const diff = Math.round((parseYMD(el.dataset.ymd) - seriesStartDate()) / 86400000) + 1;
          const minDays = customDurMinDays(S.draft?.rule || "daily");
          S.customDurDays = Math.min(365, Math.max(minDays, diff));
        } else if (S.draft) S.draft.onceDate = el.dataset.ymd;
        render();
      },
      calMonth() {
        if (!S.overlayData) return;
        S.overlayData.month = shiftMonthYMD(S.overlayData.month, +el.dataset.dir);
        render();
      },
      calToday() {
        const ymd = toYMD(demoDate());
        if (S.overlayData.kind === "customDur") {
          const minDays = customDurMinDays(S.draft?.rule || "daily");
          if (minDays > 1) return;
          S.overlayData.selected = ymd;
          S.overlayData.month = ymd;
          S.customDurDays = 1;
        } else {
          S.overlayData.selected = ymd;
          S.overlayData.month = ymd;
          if (S.draft) S.draft.onceDate = ymd;
        }
        render();
      },
      calDone() {
        if (S.overlayData.kind === "customDur") { openOverlay("customDur"); return; }
        closeOverlay();
      },
      draftBlock() { if (S.draft && !S.lockBlock) { S.draft.block = +el.dataset.b; render(); } },
      editDraftTime() {
        if (!S.draft) return;
        openOverlay("time", { title: "提醒时间", h: S.draft.hour, m: S.draft.min, kind: "draft", block: S.draft.block });
      },
      // 查看计划 · 提醒：只压提醒，不动任务与打卡（对齐 RehabPlanStore.setMuted / setTaskNotificationEnabled）
      // 总闸关着时拨不开：弹窗引导去个人中心，而不是留一行小字（真机 blockIfGateClosed）
      muteToday() {
        if (blockedByGate()) return;
        const id = S.taskId;
        S.mutedToday[id] = !S.mutedToday[id];
        render();
      },
      remindOff() {
        // 总闸关着时这一档显示为关，点它＝想打开 → 拦住
        // （按**显示值**判，不能按 S.remindOff 的存值判：存的是开、总闸却关着时，
        //   显示已是关，照存值判会直接翻成关——既不弹窗也看不出变化）
        const shown = gateOpen(taskCatKey(SEED.find((x) => x.id === S.taskId))) && !S.remindOff[S.taskId];
        if (!shown && blockedByGate()) return;
        const id = S.taskId;
        S.remindOff[id] = !S.remindOff[id];
        render();
      },
      // 添加 / 编辑计划 · 到点提醒：写进草稿，随「添加 / 确认」一起落库
      // 总闸关着时拨不开：弹窗引导去个人中心，而不是留一行小字（真机 blockIfGateClosed）
      draftRemind() {
        if (!S.draft) return;
        const cat = taskCatKey(S.draft);
        const shown = gateOpen(cat) && S.draft.remind !== false;
        if (!shown && blockedByGate(cat)) return;
        S.draft.remind = !shown;
        render();
      },
      // 添加 / 编辑计划 · 本次提醒：只压系列里的第一次，同样写进草稿
      draftMuteToday() {
        if (!S.draft) return;
        const cat = taskCatKey(S.draft);
        // 显示为关（已被静音、或总闸关着）时点它＝想打开
        const shown = gateOpen(cat) && S.draft.remind !== false && !S.draft.muteFirst;
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
      undoCheckIn() { delete S.completed[S.taskId]; render(); },
      sendChat() {
        const v = (S.chatDraft || "").trim();
        if (!v) return;
        S.consultOpen = true;
        S.messages.push({ who: "user", t: v });
        S.messages.push({ who: "ai", t: "收到。结合你最近的血压和用药，我先帮你看一下可能原因与居家注意点。" });
        S.chatDraft = "";
        render();
      },
      toggleInput() { S.inputMode = S.inputMode === "voice" ? "text" : "voice"; render(); },
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
      typeMed() { S.captureMode = "intake"; seedDocGroups(3); replace("ocr-detail"); },
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
      editTask() { initDraft(SEED.find((x) => x.id === S.taskId)); go("task-edit", "replace"); },
      // 保存前回读输入框名称 / 备注；空名称拦下（真机 AddEditTaskView 空名校验）
      saveTask() {
        syncDraftInputs();
        if (!S.draft?.title) { toast("请填写事项名称"); return; }
        // 真机 AddEditTaskView 保存：回写该条计划（标题 / 类别 / 时刻 / 循环 / 备注）
        applyDraftToTask(S.taskId, S.draft);
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
              cycle: !!S.draft.cycle,
              remind: S.draft.remind !== false,
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
        // 添加页定的「到点提醒」「家属通知」随计划一起落库，查看计划里再改
        S.remindOff[id] = d.remind === false;
        S.famOff[id] = d.famNotify === false;
        S.mutedToday[id] = !!d.muteFirst;
        S.completed[id] = false;
        S.centerStage = id;
        closeFlow();
        toast("已添加");
      },
      // 单日计划：直接删；循环计划：仅删本次（skippedDays）或今起删除（splice）
      delTask() { dropTask(S.taskId); dismissCover(); toast("已删除"); },
      delToday() { addSkipped(toYMD(demoDate()), S.taskId); dismissCover(); toast("已删除本次计划"); },
      delAll() { dropTask(S.taskId); dismissCover(); toast("已删除本次和后续计划"); },
      delCardToday() { addSkipped(toYMD(demoDate()), el.dataset.id); toast("已仅删本次"); },
      delCardAll() { dropTask(el.dataset.id); toast("已长期删除"); },
      delCardOnce() { dropTask(el.dataset.id); toast("已删除"); },
      doDelTask() {
        dropTask(el.dataset.id || S.taskId);
        closeOverlay();
        toast("已删除");
        dismissCover();
      },
      logout() { openOverlay("confirm", { title: "退出登录", body: "退出后需重新登录才能继续使用。", ok: "退出登录", action: "doLogout" }); },
      unregister() { openOverlay("confirm", { title: "注销账号", body: "注销将清空本机档案、入组状态、康复计划、家属绑定与问诊对话，且不可恢复。", ok: "确认注销", danger: true, action: "doUnregister" }); },
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
      roleSwitch() { S.role = S.role === "patient" ? "family" : "patient"; render(); },
      openDebug() { openOverlay("debugMenu"); },
      // 真机 scheme = scheme.next：循环 1→2→3→4→1
      debugScheme() {
        S.scheme = ((S.scheme ?? 0) + 1) % SCHEMES.length;
        closeOverlay();
        // 本原型只渲染方案一，所以把「这个方案是什么」讲出来，否则只看到一个序号
        toast(`方案 ${S.scheme + 1} · ${SCHEMES[S.scheme].name}｜${SCHEMES[S.scheme].desc}`);
      },
      // 真机「生成 Demo」：填档案 + applyDemoEnrollment + seedTestTasks + seedDemoVitals + 30 天打卡史
      debugSeed() {
        const sim = S.sim;
        resetAll();
        S.sim = sim;
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
        resetAll();
        S.sim = sim;
        S.enrolled = false;
        SEED.length = 0; // store.clearAll()
        S.completed = {};
        S.sys = null; S.dia = null; S.hr = null;
        WALK_RECORDS.forEach((d) => d.items.forEach((it) => { S.walkDeleted[it.key] = true; }));
        S.messages = [];
        closeOverlay();
        go("home", "root");
        toast("已清空计划与记录（保留档案姓名）");
      },
      // 真机「测试登录步骤」：仅 accountStore.logout()——计划与记录全部保留
      debugTestLogin() {
        resetFlowFlags();
        S.loggedIn = false;
        closeOverlay();
        S.frames = [{ id: "onboard-login", how: "root" }];
        S.screen = "onboard-login";
        S.enter = true;
        render();
        S.enter = false;
        toast("已退出登录，计划与记录保留");
      },
      pickGenderEdit() { S.gender = el.dataset.g; render(); },
      // 患者信息保存：写回档案再返回（真机 HealthRecordView save → profileStore.save → dismiss）
      savePatient() {
        const name = $("input[name=pname]")?.value?.trim();
        if (!name) { toast("请填写姓名"); return; }
        S.name = name;
        back();
      },
      toggleSelf() { S.notifySelf = !S.notifySelf; render(); },
      // 全部打卡总开关：全开时点按全关，否则全开
      toggleAll() {
        const next = !allCatsOn();
        Object.keys(CAT).forEach((c) => { S.cats[c] = next; });
        (S.customCats || []).forEach((c) => { S.cats[c.id] = next; });
        render();
      },
      toggleCat() {
        const c = el.dataset.cat;
        if (!c) return;
        S.cats[c] = !S.cats[c];
        render();
      },
      toggleFam() {
        if (!S.family.length) { openOverlay("confirm", { title: "请先填写家属信息", body: "通知家属前请先绑定联系人", ok: "去填写", action: "goFamily" }); return; }
        S.notifyFamily = !S.notifyFamily; render();
      },
      goFamily() { closeOverlay(); go("family", "cover"); },
      // 计划页「去填写」：先记链路标记，家属页填完返回时自动进打卡通知页（真机 AddEditTaskView onDismiss）
      goFamilyFromTask() { S.famFillJump = true; closeOverlay(); go("family", "cover"); },
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
      // 绑定校验：姓名 / 手机号 / 不能绑自己 / 已绑定 / 最多 5 位（真机 FamilyMemberStore）
      bindFam() {
        const name = $("input[name=fname]")?.value?.trim();
        const phone = $("input[name=fphone]")?.value?.trim();
        if (!name) { toast("请填写姓名"); return; }
        if (!phone || phone.length !== 11) { toast("请填写手机号"); return; }
        if (phone === S.phone) { toast("不能绑定自己的手机号"); return; }
        if (S.family.some((f) => f.phoneRaw === phone)) { toast("该手机号已绑定"); return; }
        if (S.family.length >= 5) { toast("最多绑定 5 位家属"); return; }
        S.family.push({
          id: `f${Date.now()}`,
          name,
          rel: S.famRel || "配偶",
          phone: phone.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2"),
          phoneRaw: phone,
        });
        render();
      },
      call120() { openOverlay("e120"); },
      dial120() { toast("Demo 演示，将拨打 120"); closeOverlay(); },
      newChat() { S.messages = []; S.consultOpen = false; S.chatMenu = false; render(); },
      toggleMenu() { S.chatMenu = !S.chatMenu; render(); },
      // 底坞三功能：解读指标 / 解读报告带上下文，拍照问诊挂待发图（真机 SmartConsultChatView）
      consultVitals() { askConsult("本周血压与心率记录", "【当前解读上下文】本周血压评估"); },
      consultReport() { askConsult("身体报告综合结论", "【当前解读上下文】身体报告"); },
      consultPhoto() {
        S.pendingImage = true;
        askConsult("（照片）检查单", "已收到照片，我先看一下上面的关键指标。");
      },
      sendQuick() { askConsult(el.dataset.q, "收到。结合你最近的血压和用药，我先帮你看一下可能原因与居家注意点。"); },
      shareStamp() { openOverlay("share"); },
      openCal() { openOverlay("stampCal"); },
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
        else S.qDone = true;
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
      // V10.02：底栏单钮不论有无存量都进资料汇总页（复查尚无批次 → 空态，拍资料走左上「拍摄」）
      addArchive() {
        S.apptCapture = false;
        startArchive(S.reportKind === "visit" ? "empty" : "browse");
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
        startArchive("capture");
      },
      archiveFromAnalysis() {
        S.reportKind = el.dataset.kind || "baseline";
        S.apptCapture = false;
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
      sys(d) { S.sys = stepOrSeed(S.sys, d, 120, 70, 220); render(); },
      dia(d) { S.dia = stepOrSeed(S.dia, d, 78, 40, 140); render(); },
      hr(d) { S.hr = stepOrSeed(S.hr, d, 72, 40, 180); render(); },
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

  const screens = {
    "onboard-login": () => `
      <div class="page px24" style="padding-top:78px">
        <div class="dots"><i class="dot on"></i><i class="dot"></i><i class="dot"></i></div>
        <h2 class="s28 fb t page-title">欢迎使用哈宝</h2>
        <p class="s14 fm t-sec mt8 page-sub">手机号登录，未注册将自动创建账号</p>
        <div class="col center" style="margin:28px 0 18px">
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
        <button class="cta mt16" data-act="login" type="button">登录</button>
      </div>`,

    "onboard-role": () => `
      <div class="page px24" style="padding-top:78px">
        <div class="dots"><i class="dot"></i><i class="dot on"></i><i class="dot"></i></div>
        <h2 class="s28 fb t">请选择你的身份</h2>
        <p class="s14 fm t-sec mt8">家属也是管理患者的成员，填写的都是患者信息</p>
        <div class="col gap16" style="margin-top:24px">
          <div class="role-card ${S.role === "patient" ? "on" : ""}" data-act="pickRole" data-role="patient">
            <div class="role-ico">${I.person}</div>
            <div class="grow"><div class="s18 fb">我是患者</div><div class="s13 fm" style="opacity:.75">记录和管理自己的康复</div></div>
            ${S.role === "patient" ? I.check : `<span style="width:22px;height:22px;border:1.6px solid currentColor;border-radius:50%;opacity:.35"></span>`}
          </div>
          <div class="role-card ${S.role === "family" ? "on" : ""}" data-act="pickRole" data-role="family">
            <div class="role-ico">${I.two}</div>
            <div class="grow"><div class="s18 fb">我是家属</div><div class="s13 fm" style="opacity:.75">帮家人记录，同步康复进展</div></div>
            ${S.role === "family" ? I.check : `<span style="width:22px;height:22px;border:1.6px solid currentColor;border-radius:50%;opacity:.35"></span>`}
          </div>
        </div>
        <div class="flex gap12" style="margin-top:24px">
          <button class="cta-ghost" data-act="back" type="button">上一步</button>
          <button class="cta" data-act="nextRole" type="button">下一步</button>
        </div>
      </div>`,

    "onboard-profile": () => `
      <div class="page px24" style="padding-top:78px">
        <div class="dots"><i class="dot"></i><i class="dot"></i><i class="dot on"></i></div>
        <h2 class="s28 fb t">${S.role === "family" ? "填写患者信息" : "完善你的信息"}</h2>
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
      return `
        <div class="page home-page">
          <div class="welcome">
            <div class="titles">
              <h2>${S.name}的一天</h2>
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
            <div class="orb ai" data-go="consult"><img src="${A.logo}" alt="哈宝医生" /></div>
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
        <div class="px20" style="padding-top:12px">${confirmPaneTabs()}</div>
        <div class="scroll px20" style="padding-top:12px;padding-bottom:20px">
          ${S.confirmPane === "basis" ? basisCopy() : `
          ${groups.map((g) => `
            <div class="confirm-period">
              ${sectionHead(I[g.icon], g.title, g.items.length)}
              <div class="col gap10">${g.items.map((x) => actionCard({
                cat: x.cat, title: x.title, time: x.time, draft: true, cycle: true, idx: x.i,
                dose: x.cat === "medication" ? medDose(x.title) : "",
                note: x.cat === "medication"
                  ? (x.note != null ? x.note : confirmMedNote(x.title))
                  : (x.note || ""),
              })).join("")}</div>
            </div>`).join("")}
          <div class="confirm-period">
            ${sectionHead(I.cal, "复查计划", appts.length, true)}
            <div class="col gap10">${appts.map((a) => actionCard({
              cat: "appointment", title: a.title, time: a.time, appt: true, draft: true, cycle: true,
              note: a.note,
            })).join("")}</div>
          </div>`}
        </div>
        <div class="px20 col gap10" style="padding-bottom:28px">
          <button class="cta h52" data-act="reparseCase" type="button">${I.cam}重新解析病例</button>
          <button class="cta h52" data-act="manualCreate" type="button">${I.plus}自主新建计划</button>
        </div>
      </div>`;
    },

    "exercise-risk": () => S.contra ? `
      <div class="page px24" style="padding-top:72px">
        ${navBar(`<button class="nav-text" data-act="later" type="button">稍后</button>`, "运动前风险提示")}
        <div class="col center grow">
          <div style="width:104px;height:104px;border-radius:50%;background:rgba(242,153,74,.16);display:grid;place-items:center;color:#F2994A;font-size:42px">!</div>
          <h2 class="s22 fb t-amber mt16">检测到绝对禁忌症</h2>
          <p class="s15 fm t-sec ta-c mt12">依据出院诊断，你当前不适合进行运动康复。<br>暂不生成运动计划，可稍后重试。</p>
          <div class="flex gap8 mt16"><span class="cap red">室颤</span><span class="cap red">心衰Ⅲ级及以上</span></div>
          <button class="cta amber mt16" data-act="later" type="button">暂不创建运动计划</button>
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
        <p class="s15 t-sec ta-c mt12">评估显示当前更适合由专业人员介入。<br>暂不生成运动计划，可稍后重试。</p>
        <button class="cta amber mt16" data-act="later" type="button">完成评估</button>
      </div>`,

    vitals: () => {
      const wk = vitalsWeekData();
      const avg = vitalsWeekAvg();
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
            <div class="flex between"><div class="s19 fb t">整体AI评估</div><span class="cap">${vitalsSummary().badge}</span></div>
            <p class="s16 t mt12">${vitalsSummary().text}</p>
            <div class="flex between mt12 s15 t"><span>平均血压 ${avg.sys}/${avg.dia} <span class="t-sec">mmHg</span></span><span>平均心率 ${avg.hr} <span class="t-sec">bpm</span></span></div>
            <p class="s12 t-sec mt8">参考目标：血压 ${VITAL.bpTargetText(58)}，静息心率 55–60。仅依据当前记录提供康复参考，不替代医生诊断</p>
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
          <button class="cta" data-go="consult" type="button"><img src="${A.logo}" width="30" height="30" alt="" />进入哈宝医生</button>
        </div>
      </div>`;
    },

    "vitals-detail": () => `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "指标明细", `<button class="cap" data-act="shareVitals" type="button">分享${I.share}</button>`)}
        <div class="px20 s17 fb t" style="padding:8px 20px">‹　本周　›</div>
        <div class="scroll px20">
          <div class="s15 fb t mb8">今天</div>
          ${[["07:12", "126/78", "72"], ["19:40", "132/82", "76"]].map((r) => `
            <div class="plan-row mb8"><div class="grow"><div class="s15 fb t">${r[0]}</div><div class="s13 t-sec">血压 ${r[1]} mmHg　心率 ${r[2]} bpm</div></div></div>`).join("")}
        </div>
      </div>`,

    report: () => `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "身体报告", `<button class="cap" data-go="analysis" type="button">${I.list}明细</button>`)}
        <div class="px20 grow col" style="padding-top:16px">
          <div class="island-card grow" style="padding:18px;display:flex;flex-direction:column">
            <div class="flex gap10 s19 fb t report-h">${I.doc}综合结论</div>
            <div class="scroll grow mt12 s21 fm t" style="line-height:1.45">出院后用药规律，血压总体平稳。复查未见新发缺血改变。随访问卷提示日常活动轻度受限，建议保持散步节奏、低盐饮食，复查按每月 6 日执行。</div>
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
          <button class="cta" style="margin-bottom:20px" data-go="consult" type="button"><img src="${A.logo}" width="30" height="30" alt="" />进入哈宝医生</button>
        </div>
      </div>`,

    "report-sub": () => `
      <div class="page">
        ${navBar(cap(I.chevL, "返回", "", S.reportReturnHome ? "reportBack" : "back"), S.reportKind === "visit" ? "复查报告" : "基础报告")}
        <div class="px20" style="padding-top:12px; flex:1; min-height:0; display:flex">
          <div class="island-card" style="flex:1; min-height:0; display:flex; flex-direction:column; padding:14px 18px">
            ${reportPaneTabs()}
            <div class="scroll" style="margin-top:14px">
              ${S.reportPane === "archive" ? reportArchivePane() : `
                <p class="s21 fm t">${S.reportKind === "visit" ? "尚无复查批次。上传复查资料后，会按批次更新这段解读。" : "出院诊断为急性前壁心梗 PCI 术后。EF 约 52%。用药含抗血小板、他汀与β阻滞剂，与当前计划一致。"}</p>`}
            </div>
          </div>
        </div>
        <div class="px20 col gap10" style="padding-top:12px; padding-bottom:20px">
          <button class="cta" data-act="addArchive" type="button">${I.cam}新增报告资料</button>
          ${S.reportReturnHome ? `<button class="cta white" data-act="reportHome" type="button">${I.house}返回首页</button>` : ""}
        </div>
      </div>`,

    followup: () => `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "问卷随访")}
        <div class="scroll px20" style="padding-top:12px">
          <div class="island-card" style="padding:18px">
            <div class="s13 t-sec">上次填写时间</div>
            <div class="s18 fb t">2026年7月28日　${S.qDone ? "已完成" : "草稿"}</div>
            <div class="s14 t-sec mt8">已答 ${Object.keys(S.answers).length} / ${QUESTIONS.length} 题</div>
          </div>
          <div class="island-card mt12" style="padding:18px">
            <div class="s18 fb t">2026年6月25日</div>
            <p class="s15 t-sec mt8">总体健康尚可，轻度活动受限，建议继续规律散步。</p>
          </div>
        </div>
        <div class="px20 col gap10" style="padding-bottom:28px">
          <button class="cta" data-go="questionnaire" type="button">继续填写问卷</button>
          <button class="cta-line" data-act="restartFollowup" type="button">重新开始随访</button>
        </div>
      </div>`,

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

    analysis: () => `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "明细分析", `<button class="cap" data-act="shareAnalysis" type="button">分享${I.share}</button>`)}
        <div class="scroll px20" style="padding-top:8px">
          ${[
            ["基础报告", "出院小结已解析，用药与诊断齐全。", "去上传", "archiveFromAnalysis", "baseline"],
            ["复查报告", "尚无复查批次。", "去上传", "archiveFromAnalysis", "visit"],
            ["问卷随访", "最近一次随访提示轻度活动受限。", "去填写", "go", "followup"],
          ].map(([t, d, b, actName, extra]) => `
            <div class="island-card mb16" style="padding:18px">
              <div class="flex between"><div class="flex gap8 s19 fb t"><div class="well" style="width:36px;height:36px">${I.doc}</div>${t}</div>
                <button class="cap" ${actName === "go" ? `data-go="${extra}"` : `data-act="${actName}" data-kind="${extra}"`} type="button">${b}</button></div>
              <p class="s16 t mt12">${d}</p>
            </div>`).join("")}
        </div>
      </div>`,

    walk: () => `
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
      </div>`,

    "walk-session": () => walkSessionHTML(),

    "walk-records": () => {
      const f = S.walkFilter;
      const days = WALK_RECORDS
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

    consult: () => `
      <div class="page rel">
        ${navBar(cap(I.chevL, "返回"), `<span class="flex center gap6"><img src="${A.logo}" width="26" height="26" alt="" />哈宝医生</span>`,
          `<button class="cap" data-act="toggleMenu" type="button">${I.chat}对话</button>`)}
        ${S.chatMenu ? `<div class="menu-pop"><button data-go="consult-history" type="button">历史</button><button data-act="newChat" type="button">新对话</button></div>` : ""}
        <div class="scroll px20 grow">
          ${S.messages.length ? S.messages.map((m) => `<div class="bubble ${m.who}">${m.t}</div>`).join("") : `
            <div class="island-card ta-c" style="padding:16px;margin-top:12px">
              <img src="${A.logo}" width="64" height="64" alt="" />
              <h2 class="s21 fb t mt8">你好，这里是哈宝医生</h2>
              <p class="s16 t-sec">有不适或用药疑问，都可以问我</p>
            </div>
            <div class="mt16">
              ${["最近走路有点喘，正常吗？", "吃药后头晕怎么办？", "今天血压偏高要注意什么？", "可以开始轻度运动吗？"].map((q) =>
                `<button class="quick" data-act="sendQuick" data-q="${q}" type="button">${q}</button>`).join("")}
            </div>`}
        </div>
        <div class="dock3">
          <button type="button" data-act="consultVitals">解读指标</button>
          <button type="button" data-act="consultReport">解读报告</button>
          <button type="button" data-act="consultPhoto">拍照问诊</button>
        </div>
        <div class="chat-input">
          ${S.inputMode === "text" ? `
            <input class="chat-text" id="chat-draft" placeholder="输入问题…" value="${S.chatDraft.replace(/"/g, "&quot;")}" />
            <button class="send-orb" data-act="sendChat" type="button">${I.chevU}</button>
          ` : `<button class="hold" id="hold" type="button">按住 说话</button>`}
          <button class="circle-btn" data-act="toggleInput" type="button">${S.inputMode === "text" ? I.phone : I.chat}</button>
        </div>
      </div>`,

    "consult-history": () => `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "历史记录")}
        <div class="scroll px20" style="padding-top:8px">
          <div class="s18 fb t mb8">今天</div>
          <div class="bubble user">今天血压偏高要注意什么？</div>
          <div class="bubble ai">先静坐复测。若连续高于 140/90 并伴头晕，建议联系医生。</div>
          <div class="s18 fb t mt16 mb8">昨天</div>
          <div class="bubble user">吃药后头晕怎么办？</div>
          <div class="bubble ai">先坐下休息，记录血压心率。若持续或伴胸痛，请立即就医。</div>
        </div>
      </div>`,

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
        <div class="scroll px24 grow" style="padding-top:20px">
          ${empty ? `<div class="stamp-empty">
            <div class="empty-hero"><img src="${A.stamp.bloom}" width="104" alt="" /></div>
            <div class="s18 fb t mt8">${isToday ? "今天还没有计划" : "这一天还没有计划"}</div>
            <div class="stamp-grid ghost-grid mt16">${Object.keys(CAT).map((c) => `<div class="stamp ghost"><img src="${A.stamp[c]}" alt="" /></div>`).join("")}</div>
            ${mTotal ? `<div class="month-strip">本月已集 <b>${mDone}</b>/${mTotal} · ${Math.round((mDone / mTotal) * 100)}%</div>` : ""}
          </div>` : ""}
          ${empty ? "" : byP.filter((p) => p.items.length).map((p) => {
            const d = p.items.filter((t) => doneSet.has(t.id)).length;
            return `<div class="flex center mb8 gap8"><div class="stamp-period">${I[p.icon] || ""}</div><div class="s17 fb t">${p.title}</div><div class="grow" style="height:1.5px;margin:0 8px;background:linear-gradient(90deg,rgba(16,84,224,.14),transparent)"></div><div class="s14 fb ${d === p.items.length ? "t-green" : "t"}">${d}/${p.items.length}</div></div>
            <div class="stamp-grid mb16">${p.items.map((t) => `
              <div><div class="stamp ${doneSet.has(t.id) ? "" : "ghost"}"><img src="${A.stamp[t.cat]}" alt="" /></div><div class="stamp-cap">${t.title}</div></div>`).join("")}</div>`;
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

    profile: () => `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "个人中心",
          `<button class="cap" data-act="roleSwitch" type="button">${I.two}${S.role === "patient" ? "本人" : "家属"}</button>`)}
        <div class="scroll px20" style="padding-top:8px">
          <div class="hero pointer" data-go="health-record">
            <div class="hero-top">
              <div class="avatar">${S.name.slice(0, 1)}</div>
              <div>
                <div class="s18 fb">${S.name}</div>
                <div class="s13" style="opacity:.85">${S.role === "patient" ? "本人" : "守护中"}　${S.gender}</div>
              </div>
              <button class="view-cap" type="button">点击查看</button>
            </div>
            <div class="frost"></div>
            <div class="metrics">
              <div><span>年龄</span><b>58</b></div>
              <div><span>身高</span><b>${S.height}</b></div>
              <div><span>体重</span><b>${S.weight}</b></div>
              <div><span>BMI</span><b>${bmi()}</b></div>
            </div>
          </div>
          <div class="list-island mt16">
            ${[
              ["family", I.two, "家属管理", S.family.length ? `已绑定 ${S.family.length} 人` : "尚未绑定家属"],
              ["notify", I.bell, "打卡通知", notifyCaption()],
            ].map(([id, ico, t, s]) => `
              <button class="list-row" data-go="${id}" type="button">
                <div class="well">${ico}</div><div class="grow"><h4>${t}</h4><p>${s}</p></div>${I.chevR}
              </button>`).join("")}
            <div class="list-row"><div class="well">${I.doc}</div><div class="grow"><h4>隐私协议</h4><p>了解数据如何被保护</p></div>${I.chevR}</div>
            <div class="list-row"><div class="well">${I.doc}</div><div class="grow"><h4>服务协议</h4><p>使用条款与说明</p></div>${I.chevR}</div>
          </div>
          <button class="cta-ghost mt16" data-act="logout" type="button">退出登录</button>
          <button class="w100" style="border:0;background:none;color:#828EA5;padding:12px;font-size:16px;cursor:pointer" data-act="unregister" type="button">注销账号</button>
        </div>
      </div>`,

    "health-record": () => {
      const age = 58;
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
          <div class="hero">
            <div class="hero-top">
              <div class="avatar lg">${S.name.slice(0, 1)}</div>
              <div><div class="s24 fb">${S.name}</div><div class="s13" style="opacity:.85">${S.role === "patient" ? "本人" : "守护中"}　${S.gender}</div></div>
            </div>
            <div class="frost"></div>
            <div class="metrics">
              <div><span>年龄</span><b>${age}<i>岁</i></b></div>
              <div><span>身高</span><b>${S.height}<i>cm</i></b></div>
              <div><span>体重</span><b>${S.weight}<i>kg</i></b></div>
              <div><span>BMI</span><b class="${bmiOk ? "" : "t-amber"}">${bmiVal.toFixed(1)}<i>${bmiWord}</i></b></div>
            </div>
          </div>
          <div class="island-card" style="margin-top:-8px;border-radius:0 0 22px 22px;padding:18px">
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

    family: () => `
      <div class="page">
        ${navBar(cap(I.chevL, "返回", "", "backFamily"), "家属管理")}
        <div class="scroll px24" style="padding-top:20px">
          <div class="field-label">姓名</div>
          <input class="field" name="fname" placeholder="姓名" />
          <div class="field-label mt16">关系</div>
          <div class="chips">${["配偶", "子女", "父母", "其他"].map((r) => `<button class="chip ${(S.famRel || "配偶") === r ? "on" : ""}" data-act="pickRel" data-r="${r}" type="button">${r}</button>`).join("")}</div>
          <div class="field-label mt16">手机号</div>
          <input class="field" name="fphone" maxlength="11" placeholder="11 位手机号" />
          ${S.family.map((f) => `
            <div class="plan-row mt16">
              <div class="grow"><div class="s18 fb t">${f.name}</div><div class="s14 t-sec">${f.rel}　${f.phone}</div></div>
              <button class="cap blue" data-act="unbind" data-id="${f.id}" type="button">解除</button>
            </div>`).join("")}
        </div>
        <div class="px24 flex gap8" style="padding-bottom:28px">
          <button class="cta grow" data-act="bindFam" type="button">点击绑定</button>
        </div>
      </div>`,

    notify: () => `
      <div class="page">
        ${navBar(cap(I.chevL, "返回"), "打卡通知")}
        <div class="scroll px20" style="padding-top:12px;padding-bottom:24px">
          <div class="list-island">
            ${rowToggle("通知自己", S.notifySelf, "toggleSelf", notifySys(I.bell))}
            ${rowToggle("通知家属", S.notifyFamily, "toggleFam", notifySys(I.two))}
          </div>
          <div class="list-island mt16">
            ${rowToggle("全部打卡", allCatsOn(), "toggleAll", notifySys(I.check, true))}
            ${[
              ["服药", "medication"],
              ["运动", "exercise"],
              ["测血压", "monitoring"],
              ["作息", "rest"],
              ["饮食", "diet"],
              ["复查", "appointment"],
            ].map(([t, cat]) => rowToggle(t, !!S.cats[cat], "toggleCat", notifyCat(cat), cat)).join("")}
            ${(S.customCats || []).map((c) =>
              rowToggle(c.name, !!S.cats[c.id], "toggleCat", notifySys(I[UNIFIED_CUSTOM_ICON], true), c.id)).join("")}
          </div>
        </div>
      </div>`,
  };

  /// 本周 Demo 读数：均值与评估卡一致（血压 126/78、心率 72）
  const VITALS_WEEK = [
    { day: "一", sys: 124, dia: 76, hr: 70 },
    { day: "二", sys: 130, dia: 80, hr: 74 },
    { day: "三", sys: 126, dia: 78, hr: 72 },
    { day: "四", sys: 122, dia: 74, hr: 68 },
    { day: "五", sys: 128, dia: 78, hr: 74 },
    { day: "六", sys: 124, dia: 76, hr: 71 },
    { day: "日", sys: 128, dia: 82, hr: 75 },
  ];
  /// 按周偏移生成该周读数：本周为基线，往期整体略高（康复向好）+ 逐日确定性波动
  /// （只叠波动的话七天均值恰好抵消，翻页看不出变化，所以要有 drift）
  function vitalsWeekData() {
    const o = S.vitalsOffset || 0;
    if (!o) return VITALS_WEEK;
    const drift = -o * 1.9;
    return VITALS_WEEK.map((d, i) => {
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
        note: r.cat === "monitoring" ? confirmMonitorNote(r.name) : (r.note || ""),
        cycle: true, remind: true, muteFirst: false,
      })),
      ...parsedBloodPressureRows().map((r) => ({
        title: r.name,
        time: r.t,
        cat: "monitoring",
        note: confirmMonitorNote(r.name),
        cycle: true, remind: true, muteFirst: false,
      })),
    ];
    S.confirmDrafts = [
      ...MEDS.map((m) => ({
        title: m.name, time: m.time, cat: "medication",
        note: confirmMedNote(m.name),
        cycle: true, remind: true, muteFirst: false,
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
      { title: "晨间散步", time: "09:00", cat: "exercise", cycle: true, remind: true, muteFirst: false },
      { title: "上肢康复操", time: "10:00", cat: "exercise", cycle: true, remind: true, muteFirst: false },
      { title: "下午散步", time: "15:00", cat: "exercise", cycle: true, remind: true, muteFirst: false },
      { title: "晚间散步", time: "19:00", cat: "exercise", cycle: true, remind: true, muteFirst: false },
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

  /// 本周评估卡：按均值判档出一句结论（真机 RecordsView 空 / 稳 / 关注三级）
  function vitalsSummary() {
    const avgSys = 126; const avgDia = 78; const avgHr = 72;
    const bp = VITAL.bpStatus(avgSys, avgDia, 58);
    const hr = VITAL.hrStatus(avgHr);
    const bpOk = bp === "inTarget";
    const hrOk = hr === "inTarget";
    if (bpOk && hrOk) {
      return { badge: "整体平稳", text: `本周血压与静息心率均值都落在康复目标内（血压 ${VITAL.bpTargetText(58)}，心率 55–60），建议继续保持。` };
    }
    const bits = [];
    bits.push(bpOk
      ? `血压均值 ${avgSys}/${avgDia} 在目标 ${VITAL.bpTargetText(58)} 内`
      : `血压均值 ${avgSys}/${avgDia} ${VITAL_LAB[bp]}（目标 ${VITAL.bpTargetText(58)}）`);
    bits.push(hrOk
      ? `静息心率均值 ${avgHr} 落在目标 55–60`
      : `静息心率均值 ${avgHr} ${VITAL_LAB[hr]}（目标 55–60）`);
    return { badge: hrOk && bpOk ? "整体平稳" : "需要关注", text: `本周${bits.join("；")}。建议规律服药、晨起复测，并在复查时把记录带给医生。` };
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

  /// 向哈宝医生发一条并挂 AI 回复（快捷问 / 底坞三功能共用）
  function askConsult(userText, aiText) {
    S.consultOpen = true;
    S.messages.push({ who: "user", t: userText });
    S.messages.push({ who: "ai", t: aiText });
    render();
  }

  function notifySys(svg, onBlue) {
    return `<div class="notify-ico ${onBlue ? "on" : ""}">${svg}</div>`;
  }
  function notifyCat(cat) {
    return `<div class="badge b40 ${cat === "appointment" ? "appt" : ""}"><img src="${A.task[cat]}" alt="" /></div>`;
  }
  function rowToggle(title, on, actName, iconHTML, dataAttr) {
    return `<div class="list-row" style="min-height:58px">
      ${iconHTML || notifySys(I.bell)}
      <div class="grow s20 fb t">${title}</div>
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
  /// 个人中心副说明：同 CheckInNotificationStore.caption 口径（未绑定家属不算家属通道）
  function notifyCaption() {
    const famOn = S.family.length > 0 && S.notifyFamily;
    if (!anyCatOn() || (!S.notifySelf && !famOn)) return "已关闭";
    if (S.notifySelf && famOn) return "到点提醒家属";
    if (S.notifySelf) return "到点提醒";
    return "通知家属";
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
    openOverlay("confirm", {
      title: `请先打开${catName(cat)}通知`,
      body: `个人中心已关闭「${catName(cat)}」通知，在这里开启也不会响。要收到提醒，请先到个人中心打开总开关。`,
      ok: "去设置",
      action: "goNotify",
    });
    return true;
  }
  /// 家属通道总闸：通知家属 × 已绑定家属 × 该类别开关
  /// （同 CheckInNotificationPreference.allowsFamilyReminder；计划「家属通知」串联在这道闸之后）
  function familyGateOpen(cat) {
    if (!S.notifyFamily || !S.family.length) return false;
    if (!cat) return true;
    return !!S.cats[cat];
  }
  /// 家属通道关着时弹窗拦下：未绑定去填写；已绑定未开总闸去个人中心。返回 true 表示已拦下。
  function blockedByFamilyGate(catOverride) {
    const cat = catOverride || currentTaskCat();
    if (familyGateOpen(cat)) return false;
    if (!S.family.length) {
      openOverlay("confirm", {
        title: "请先填写家属信息",
        body: "通知家属前请先绑定联系人",
        ok: "去填写",
        action: "goFamilyFromTask",
      });
      return true;
    }
    openOverlay("confirm", {
      title: "请先打开通知家属",
      body: "个人中心已关闭「通知家属」，在这里开启也不会发。要通知家属，请先到个人中心打开总开关。",
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
        <div class="task-head">${badge(t.cat, done)}
          <div class="task-meta">
            <h3>${t.title}</h3>
            <div class="task-status">${done ? `已完成 ${I.check}` : spoken(t.h, t.m)}</div>
          </div>
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
  function cardNote(icon, text, actName, idx) {
    const inner = `${icon}<span>${text}</span>`;
    return actName
      ? `<button class="act-note tappable" data-act="${actName}" data-i="${idx}" type="button">${inner}</button>`
      : `<div class="act-note">${inner}</div>`;
  }

  function actionCard({ cat, title, time, date, appt, done, hist, id, toggle, draft, cycle, idx, dose, note }) {
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
    let delBtn = "";
    if (!hist) {
      if (draft) {
        delBtn = `<button class="del" type="button" data-act="delConfirmDraft"${idxAttr}>${I.trash}删除</button>`;
      } else if (isCycle) {
        delBtn = `<button class="del" type="button" data-act="delCardToday"${idAttr}>${I.trash}仅删本次</button>
        <button class="del" type="button" data-act="delCardAll"${idAttr}>${I.trash}长期删除</button>`;
      } else {
        delBtn = `<button class="del" type="button" data-act="delCardOnce"${idAttr}>${I.trash}删除</button>`;
      }
    }
    const barCls = !hist && !draft && isCycle ? " triple" : "";
    const notes = note
      ? cardNote(I.alignLeft, note, idx == null ? null : "editNote", idx)
      : "";
    return `<div class="act-card ${cls}">
      <div class="act-card-main">
        <div class="badge b40 ${cls}"><img src="${A.task[kind]}" alt="" /></div>
        <div class="grow">
          <div class="s15 fb ${done ? "t-green" : kind === "appointment" ? "t-appt" : "t"}">${title}</div>
          <div class="act-info">${date ? `<span class="dt">${date}</span>` : ""}<span class="tm">${time}</span>${dose ? `<span class="act-chip">${dose}</span>` : ""}<span class="act-chip">${isCycle ? "循环" : "单日"}</span><span class="act-chip">${chip}</span></div>
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
    return `<div class="sec-label">今日血压</div>
      <div class="vitals-island flex" style="background:${accent.muted}">
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

  /// 查看计划 · 提醒：**总开关在上、子开关缩进在下**——循环两档「本次及后续提醒（总）/ 仅本次提醒（子）」，
  /// 单日只有一档（那一档即总开关）。开关方向与个人中心总闸一致：**开 = 会提醒**。只压提醒，不动任务与打卡。
  function reminderSwitches(d, done, accent) {
    const id = S.taskId;
    const rows = [];
    // 开关方向与个人中心总闸一致：开 = 会提醒
    const seriesOn = !S.remindOff[id];
    const gate = gateOpen(taskCatKey(d));
    // 已打卡：两档都显示为关并禁用（总开关不再保持打开）
    const seriesShown = done ? false : (gate && seriesOn);
    const seriesCaption = !d.cycle ? ""
      : done ? "本次已打卡，提醒已锁定"
      : (seriesOn ? "关闭后整条计划都不再响铃" : "整条计划已关闭提醒");
    // 总闸关着时开关显示关、也拨不开——点它弹窗引导去个人中心（不留小字）
    rows.push(reminderRow(
      d.cycle ? "本次及后续提醒" : "本次提醒",
      seriesCaption,
      seriesShown, "remindOff", done, accent.fg, false));
    if (d.cycle) {
      rows.push(reminderRow("仅本次提醒", "",
        done ? false : (gate && seriesOn && !S.mutedToday[id]), "muteToday",
        done || (!seriesOn && gate), accent.fg, true));
    }
    // 家属通知（V10.52 · 真机同款）：系列级一档；家属通道 = 通知家属 × 已绑定 × 类别，已打卡同锁
    rows.push(reminderRow("家属通知",
      done ? "本次已打卡，提醒已锁定" : "同步通知已绑定的家属",
      done ? false : (familyGateOpen(taskCatKey(d)) && !S.famOff[id]),
      "famNotify", done, accent.fg, false));

    return `<div class="sec-label">到点提醒</div>
      <div class="list-island">${rows.join("")}</div>`;
  }

  /// 添加 / 编辑计划 · 到点提醒：与查看计划同款——总开关「本次及后续提醒」在上、子开关「仅本次提醒」缩进在下。
  /// 「本次」= 系列里的第一次（新建的循环计划从起始日开始，那一次就是它的「本次」）。
  /// 切换写进草稿，随「添加 / 确认」一起落库；标签跟当前计划类型走（改单日 / 循环即时换称）。
  function draftReminderSwitch(d, accent) {
    const gate = gateOpen(taskCatKey(d));
    const seriesOn = d.remind !== false;
    const rows = [];
    rows.push(reminderRow(
      d.cycle ? "本次及后续提醒" : "本次提醒",
      d.cycle ? (seriesOn ? "关闭后整条计划都不再响铃" : "整条计划已关闭提醒") : "",
      gate && seriesOn, "draftRemind", false, accent.fg, false));
    if (d.cycle) {
      rows.push(reminderRow("仅本次提醒", "",
        gate && seriesOn && !d.muteFirst, "draftMuteToday",
        !seriesOn && gate, accent.fg, true));
    }
    // 家属通知（V10.52）：写进草稿随「添加 / 确认」落库；闸关着时拨不开、弹层引导
    rows.push(reminderRow("家属通知", "同步通知已绑定的家属",
      familyGateOpen(taskCatKey(d)) && d.famNotify !== false,
      "draftFamNotify", false, accent.fg, false));

    return `<div class="sec-label">到点提醒</div>
      <div class="list-island">${rows.join("")}</div>`;
  }

  /// `on` = 会提醒（与个人中心总闸同向）。铃铛跟随页面主色：会提醒 = 主色，已静音 = 次级灰。
  /// `isSub` = 子开关：整行缩进一级 + 套一层浅语义底功能岛（无描边），图标与字号小总开关一档——
  /// 从属关系靠缩进 + 色块 + 字号读出来，不靠小字解释（对齐真机 §8.1）。
  function reminderRow(title, caption, on, actName, disabled, fg, isSub) {
    const icoSize = isSub ? 16 : 18;
    const ico = `<span style="display:grid;place-items:center;width:${icoSize}px;height:${icoSize}px;flex:0 0 ${icoSize}px;color:${on ? fg : "var(--secondary)"}">${on ? I.bell : I.bellSlash}</span>`;
    const cap = caption ? `<div class="s12 t-sec" style="margin-top:2px">${caption}</div>` : "";
    const row = `<div class="list-row" style="min-height:${isSub ? 52 : 56}px;gap:${isSub ? 10 : 12}px${isSub ? ";padding:12px 0" : ""}">
      ${ico}
      <div class="grow">
        <div class="${isSub ? "s15" : "s17"} fb t">${title}</div>
        ${cap}
      </div>
      <button class="toggle ${on ? "on" : ""}" ${disabled ? 'disabled style="pointer-events:none;cursor:default"' : `data-act="${actName}"`} type="button"><i></i></button>
    </div>`;
    const dim = disabled ? "opacity:.4;" : "";
    // 总开关禁用时整行压暗（已打卡锁定）；子开关再缩进一级套功能岛
    if (!isSub) return `<div style="${dim}">${row}</div>`;
    return `<div style="margin:2px 12px 12px;border-radius:12px;background:${fg}14;${dim}">${row}</div>`;
  }

  /// 已打卡时页尾的出口：取消本次打卡会一并解禁编辑 / 删除 / 提醒（真机 store.toggleCompletion 的反向）
  function cancelCheckInBlock(accent) {
    return `<div class="s12 t-sec" style="margin-top:14px">本次已打卡，编辑、删除与提醒开关已锁定</div>
      <button class="cta-ghost" style="margin-top:8px;color:${accent.fg};background:${accent.muted}" data-act="undoCheckIn" type="button">${I.undo}取消本次打卡</button>`;
  }

  /// 该日已打卡时整块锁住——删除会抹掉当天打卡记录（同 RehabPlanStore.endSeries / skipOccurrence）
  function deletePlanButtons(d, done) {
    const lock = done ? ';opacity:.4' : "";
    const act = (a) => (done ? "" : ` data-act="${a}"`);
    if (d.cycle) {
      return `<div class="col gap10 mt16">
        <button class="cta-ghost" style="color:#F05A6E;background:rgba(240,90,110,.08)${lock}"${act("delToday")} type="button">${I.trash}删除本次计划</button>
        <button class="cta-ghost" style="color:#F05A6E;background:rgba(240,90,110,.08)${lock}"${act("delAll")} type="button">${I.trash}删除本次和后续计划</button>
      </div>`;
    }
    return `<button class="cta-ghost mt16" style="color:#F05A6E;background:rgba(240,90,110,.08)${lock}"${act("delTask")} type="button">${I.trash}删除计划</button>`;
  }

  function taskEditor(mode) {
    const t = SEED.find((x) => x.id === S.taskId) || SEED[0] || { id: "", cat: "monitoring", h: 8, m: 0, title: "", note: "" };
    if (mode !== "view" && !S.draft) initDraft(mode === "edit" ? t : null);
    const d = mode === "view" ? taskDraftFromSeed(t) : S.draft;
    const editable = mode !== "view";
    const viewing = !editable;
    const title = mode === "view" ? "查看计划" : mode === "edit" ? "编辑计划" : S.addTitle;
    const left = mode === "edit" ? cap(I.x, "取消") : cap(I.chevL, "返回");
    const done = !!S.completed[t.id] && mode !== "add";
    // 该日已打卡：这一天算落定，编辑与删除、提醒开关一并锁住（真机 SecondaryNavToolbarItem.isEnabled）
    const right = mode === "view"
      ? (done
          ? `<button class="cap" type="button" style="opacity:.35" disabled aria-label="本次已打卡，编辑已锁定">${I.pencil}编辑</button>`
          : `<button class="cap" data-act="editTask" type="button">${I.pencil}编辑</button>`)
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
    // 已保存计划（编辑态）与首页虚框：日期 / 开始日期禁用不可改。查看态整页只读，仍保持语义色。
    const lockStart = lockRec || mode === "edit";
    const dateInteractive = editable && !lockStart;
    const dateMuted = lockStart && editable;
    const dateRow = (label, first) => `
        <div class="sec-label"${first ? ' style="margin-top:0"' : ""}>${label}</div>
        <button class="date-row" style="background:${dateMuted ? "rgba(130,142,165,.10)" : accent.muted};color:${dateMuted ? "rgba(130,142,165,.72)" : accent.fg}" ${dateInteractive ? 'data-act="openOnceDate"' : ""} type="button"${dateMuted ? " disabled" : ""}>
          <span>${planDateLabel(d.onceDate, d.cycle)}</span>
          ${dateInteractive ? `<span class="dim">${I.chevUD}</span>` : ""}
        </button>`;
    const dateBlock = `
        <div class="sec-label" style="margin-top:0">计划类型</div>
        <div class="flex gap8">
          ${chip({ selected: !d.cycle, label: "单日计划", icon: I.cal, act: "draftCycle", extra: 'data-v="0"', locked: lockRec })}
          ${chip({ selected: d.cycle, label: "循环计划", icon: I.cycle, act: "draftCycle", extra: 'data-v="1"', locked: lockRec })}
        </div>
        ${dateRow(d.cycle ? "开始日期" : "日期")}`;
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
        <div class="duration-custom-block">${chip({ selected: d.duration === "custom", label: d.duration === "custom" ? customDurDeadlineLabel(d.customDays, d.rule) : "自定义", icon: (d.duration !== "custom" && editable) ? I.plus : "", dash: d.duration !== "custom" && editable, compact: true, act: "openCustomDur" })}</div>`;
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
        ${viewing ? reminderSwitches(d, done, accent) : draftReminderSwitch(d, accent)}
        ${mode === "view" ? deletePlanButtons(d, done) : ""}
        ${viewing && done ? cancelCheckInBlock(accent) : ""}`;
    // 两组各包一层：标题行常显可点，字段随折叠隐现（字段与保存逻辑不受折叠影响）
    const body = `
      <div class="ed-group">
        ${groupHead("item", "事项")}
        ${groupOpen("item") ? `<div class="ed-group-body">${nameBlock}</div>` : ""}
      </div>
      <div class="ed-group">
        ${groupHead("schedule", "时间与提醒")}
        ${groupOpen("schedule") ? `<div class="ed-group-body">${dateBlock}${d.cycle ? cycleBlock : ""}${momentBlock}</div>` : ""}
      </div>`;
    return `<div class="page editor-page" style="--accent:${accent.fg}">
      ${navBar(left.replace('data-act="back"', mode === "edit" ? 'data-act="cancelEdit"' : mode === "add" ? 'data-act="cancelAdd"' : 'data-act="back"'), title, right)}
      <div class="scroll px20" style="padding-top:4px;padding-bottom:28px">${body}</div>
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
    return new Set(liveTasks(ymd).filter((t, i) => i % 3 !== 2).map((t) => t.id));
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
          <button class="dbg-row" data-act="debugScheme" type="button">${I.grid}<span>切换方案 ${S.scheme + 1}<em>${SCHEMES[S.scheme].name}</em></span></button>
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
      return `
      <div class="scrim bottom" data-act="close">
        <div class="sheet" style="max-height:90%" onclick="event.stopPropagation()">
          <div class="grab"></div>
          <div class="flex between"><button class="nav-text" data-act="close" type="button">取消</button><h3 class="s17">起床测血压</h3><span style="width:48px"></span></div>
          <div class="island-card" style="padding:18px;margin-top:12px">
            <div class="flex between">
              <div class="s15 fb t sheet-sec">${I.heartSq}血压</div>
              <div class="s12 t-sec">康复目标 ${VITAL.bpTargetText(VIT_AGE)}</div>
            </div>
            <div class="flex gap16 mt12">
              ${vitCol("收缩压", vSys, "sys", "#1054E0", "mmHg", [VITAL.systolicLower, VITAL.bpTarget(VIT_AGE).sys - 1], [70, 220], VITAL.bpStatus(vSys, vDia, VIT_AGE))}
              ${vitCol("舒张压", vDia, "dia", "#1EBED6", "mmHg", [VITAL.diastolicLower, VITAL.bpTarget(VIT_AGE).dia - 1], [40, 140], VITAL.bpStatus(vSys, vDia, VIT_AGE))}
            </div>
          </div>
          <div class="island-card" style="padding:16px;margin-top:12px">
            <div class="flex between">
              <div class="s15 fb t-heart sheet-sec">${I.ecg}心率</div>
              <div class="s12 t-sec">目标 55–60</div>
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
          <button class="cta mt16" data-act="vitalsSave" type="button">保存并打卡</button>
        </div>
      </div>`;
    },
    confirm: () => `
      <div class="scrim center" data-act="close">
        <div class="popup" onclick="event.stopPropagation()">
          <h3>${S.overlayData.title || "确认"}</h3>
          <p>${S.overlayData.body || ""}</p>
          <div class="duo">
            <button class="cancel" data-act="close" type="button">取消</button>
            <button class="${S.overlayData.danger ? "danger" : "ok"}" data-act="confirmOk" type="button">${S.overlayData.ok || "确定"}</button>
          </div>
        </div>
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
        const has = WALK_RECORDS.some((d) => d.ymd === ymd && d.items.some((it) => !(S.walkDeleted || {})[it.key]));
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
      resetFlowFlags(); S.loggedIn = false; S.enrolled = false; jump("onboard-login");
    } else if (m === "new") {
      $("#mode-new").classList.add("on");
      resetFlowFlags(); S.loggedIn = true; S.enrolled = false; jump("home");
    } else {
      $("#mode-demo").classList.add("on");
      resetFlowFlags(); S.loggedIn = true; S.enrolled = true; jump("home");
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
