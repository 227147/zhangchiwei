/* ═══════════ AI 工具志 · 刊物逻辑 ═══════════ */
"use strict";

/* ---------- 门类 ---------- */
const SECTIONS = {
  chat:       "对话",
  write:      "文翰",
  image:      "丹青",
  "image-tool": "图像",
  video:      "影像",
  audio:      "声律",
  code:       "码农",
  office:     "案牍",
  search:     "问津"
};

/* ---------- 条目 ---------- */
const ENTRIES = [
  { name: "ChatGPT", host: "chatgpt.com", sec: "chat", heat: 98, date: "2024-05", free: 1, hot: 1,
    mark: "G", desc: "OpenAI 旗下对话式助手，问答、写作、分析、编程样样精通，通用大模型之翘楚。" },
  { name: "Claude", host: "claude.ai", sec: "chat", heat: 92, date: "2025-02", free: 1, hot: 0,
    mark: "C", desc: "Anthropic 出品，长文理解与撰述俱佳，代码与案牍处理表现极优。" },
  { name: "Gemini", host: "gemini.google.com", sec: "chat", heat: 90, date: "2024-08", free: 1, hot: 0,
    mark: "双", desc: "Google 多模态大模型，图文音影混合输入，与 Google 全家桶深度融合。" },
  { name: "Kimi", host: "kimi.moonshot.cn", sec: "chat", heat: 88, date: "2024-10", free: 1, hot: 1,
    mark: "K", desc: "月之暗面出品，超长上下文，读论文、啃长卷之利器，中文理解出众。" },
  { name: "DeepSeek", host: "chat.deepseek.com", sec: "chat", heat: 94, date: "2025-01", free: 1, hot: 1,
    mark: "深", desc: "国产开源推理模型，数理与代码推演精深，深度思考免费开放。" },
  { name: "通义千问", host: "tongyi.aliyun.com", sec: "chat", heat: 82, date: "2024-03", free: 1, hot: 0,
    mark: "义", desc: "阿里大模型助手，中文多场景问答、文档解析与办公协作兼备。" },
  { name: "豆包", host: "doubao.com", sec: "chat", heat: 86, date: "2024-06", free: 1, hot: 0,
    mark: "豆", desc: "字节跳动助手，语音对话自然流畅，日常问答与创作皆宜。" },

  { name: "Notion AI", host: "notion.so", sec: "write", heat: 80, date: "2024-02", free: 0, hot: 0,
    mark: "N", desc: "笔记内置智能，自动撮要、润色、迻译、续写，知识管理良伴。" },
  { name: "秘塔写作猫", host: "xiezuocat.com", sec: "write", heat: 72, date: "2024-04", free: 1, hot: 0,
    mark: "猫", desc: "中文写作校订改写之器，语法纠错、公文润色、同义替换一炉冶之。" },
  { name: "copy.ai", host: "copy.ai", sec: "write", heat: 68, date: "2024-01", free: 1, hot: 0,
    mark: "c", desc: "营销文案生成器，广告语、社媒帖、邮件范本顷刻而成。" },
  { name: "彩云小译", host: "caiyunai.com", sec: "write", heat: 64, date: "2023-12", free: 1, hot: 0,
    mark: "译", desc: "同声传译与文档迻译，网页双语对照，阅读体验极佳。" },

  { name: "Midjourney", host: "midjourney.com", sec: "image", heat: 96, date: "2024-07", free: 0, hot: 1,
    mark: "帆", desc: "顶尖绘画之器，艺术质感与构图俱一流，设计师灵感所系。" },
  { name: "Stable Diffusion", host: "stability.ai", sec: "image", heat: 84, date: "2023-11", free: 1, hot: 0,
    mark: "S", desc: "开源文生图模型，本地部署自由无碍，社区模型生态浩繁。" },
  { name: "即梦", host: "jimeng.jianying.com", sec: "image", heat: 78, date: "2024-09", free: 1, hot: 0,
    mark: "梦", desc: "字节跳动绘画平台，中文提示词亲切，生图与影像一体。" },
  { name: "Canva AI", host: "canva.cn", sec: "image", heat: 76, date: "2024-06", free: 1, hot: 0,
    mark: "C", desc: "在线设计神器，一键成海报、演示、标识，范本海量。" },
  { name: "稿定 AI", host: "gaoding.com", sec: "image", heat: 62, date: "2024-03", free: 1, hot: 0,
    mark: "稿", desc: "电商设计场景繁盛，扩图、消除、商品图合成开箱即用。" },

  { name: "remove.bg", host: "remove.bg", sec: "image-tool", heat: 74, date: "2023-10", free: 1, hot: 0,
    mark: "剪", desc: "一键智能抠像，五秒去除背景，人像发丝级精微。" },
  { name: "Upscale.media", host: "upscale.media", sec: "image-tool", heat: 60, date: "2024-02", free: 1, hot: 0,
    mark: "放", desc: "图片无损放大，模糊旧照一键转高清。" },
  { name: "Restore Photos", host: "restorephotos.io", sec: "image-tool", heat: 52, date: "2023-09", free: 1, hot: 0,
    mark: "复", desc: "老照片修复上色，令泛黄记忆重焕新颜。" },
  { name: "Cleanup.pictures", host: "cleanup.pictures", sec: "image-tool", heat: 56, date: "2023-11", free: 1, hot: 0,
    mark: "拭", desc: "涂抹即消画面冗物，路人水印一抹即去。" },

  { name: "可灵 Kling", host: "klingai.com", sec: "video", heat: 89, date: "2024-11", free: 1, hot: 1,
    mark: "灵", desc: "快手大模型影像生成，画面稳定与物理真实感领先同侪。" },
  { name: "Runway", host: "runwayml.com", sec: "video", heat: 85, date: "2024-05", free: 0, hot: 0,
    mark: "R", desc: "影像生成与剪辑全家桶，文生视频、运动笔刷、绿幕抠像齐备。" },
  { name: "HeyGen", host: "heygen.com", sec: "video", heat: 70, date: "2024-04", free: 0, hot: 0,
    mark: "H", desc: "数字人影像平台，一键换面迻译，口型同步四十余种语言。" },
  { name: "剪映 AI", host: "jianying.com", sec: "video", heat: 83, date: "2024-01", free: 1, hot: 0,
    mark: "剪", desc: "国民剪辑之器，智能字幕、自动剪辑、图文成片零门槛。" },
  { name: "Pika", host: "pika.art", sec: "video", heat: 66, date: "2024-07", free: 1, hot: 0,
    mark: "P", desc: "创意影像生成，特效玩法繁多，令静图生动起来。" },

  { name: "Suno", host: "suno.com", sec: "audio", heat: 87, date: "2024-08", free: 1, hot: 1,
    mark: "乐", desc: "AI 谱曲成歌之神器，一句歌词即得全曲，人声质量惊艳。" },
  { name: "ElevenLabs", host: "elevenlabs.io", sec: "audio", heat: 79, date: "2024-03", free: 0, hot: 0,
    mark: "E", desc: "顶级配音平台，音色克隆与多语合成自然度业界标杆。" },
  { name: "魔音工坊", host: "moyin.com", sec: "audio", heat: 65, date: "2024-02", free: 1, hot: 0,
    mark: "魔", desc: "中文配音之器，磁性音色繁众，短视频配音首选。" },
  { name: "Adobe Podcast", host: "podcast.adobe.com", sec: "audio", heat: 58, date: "2023-12", free: 1, hot: 0,
    mark: "音", desc: "一语消除语音噪杂，会议录音立成录音棚品质。" },

  { name: "GitHub Copilot", host: "github.com/features/copilot", sec: "code", heat: 93, date: "2024-06", free: 0, hot: 1,
    mark: "码", desc: "程序员标配结对之伴，补全、重构、讲解随叫随到。" },
  { name: "Cursor", host: "cursor.com", sec: "code", heat: 91, date: "2024-12", free: 0, hot: 1,
    mark: "▲", desc: "AI 原生代码编辑器，跨文件通晓项目脉络，一语改码。" },
  { name: "通义灵码", host: "tongyi.aliyun.com/lingma", sec: "code", heat: 75, date: "2024-05", free: 1, hot: 0,
    mark: "灵", desc: "阿里编程助手，中文注释生成代码，个人版免费。" },
  { name: "Codeium", host: "codeium.com", sec: "code", heat: 71, date: "2024-01", free: 1, hot: 0,
    mark: "Co", desc: "免费代码补全，支持七十余种语言与主流编辑器。" },
  { name: "v0", host: "v0.app", sec: "code", heat: 69, date: "2024-09", free: 1, hot: 0,
    mark: "v0", desc: "Vercel 出品，述界面之貌即得 React 与 Tailwind 代码。" },

  { name: "Gamma", host: "gamma.app", sec: "office", heat: 77, date: "2024-04", free: 1, hot: 0,
    mark: "γ", desc: "一键生成精美演示与网页，永别排版苦役。" },
  { name: "WPS AI", host: "ai.wps.cn", sec: "office", heat: 73, date: "2024-02", free: 1, hot: 0,
    mark: "W", desc: "文档、表格、演示全场景智能，周报合同一键而成。" },
  { name: "讯飞听见", host: "iflyrec.com", sec: "office", heat: 67, date: "2023-12", free: 0, hot: 0,
    mark: "听", desc: "会议录音转写与纪要撮要，识别精准可倚。" },
  { name: "Otter.ai", host: "otter.ai", sec: "office", heat: 61, date: "2023-10", free: 1, hot: 0,
    mark: "O", desc: "英文会议实时转录与摘要，海外协作必备。" },

  { name: "Perplexity", host: "perplexity.ai", sec: "search", heat: 88, date: "2024-10", free: 1, hot: 1,
    mark: "P", desc: "AI 搜索引擎，直陈答案并附引据出处，治学利器。" },
  { name: "秘塔 AI 搜索", host: "metaso.cn", sec: "search", heat: 81, date: "2024-03", free: 1, hot: 0,
    mark: "索", desc: "无广告之中文 AI 搜索，纲目式答案与学术模式皆佳。" },
  { name: "Devv", host: "devv.ai", sec: "search", heat: 59, date: "2024-01", free: 1, hot: 0,
    mark: "dv", desc: "面向程序员之 AI 搜索，技术疑难直达优答。" }
];

/* ---------- 状态 ---------- */
let view = { sec: "all", kw: "", ord: "default", favMode: false };
let favs = new Set(JSON.parse(localStorage.getItem("aitools-zhi-favs") || "[]"));

const $ = (id) => document.getElementById(id);

/* ---------- 昼夜 ---------- */
const savedNight = localStorage.getItem("aitools-zhi-night");
if (savedNight === "1" || (!savedNight && matchMedia("(prefers-color-scheme: dark)").matches)) setNight(true);
$("dayNight").addEventListener("click", () =>
  setNight(!document.documentElement.classList.contains("night")));
function setNight(on) {
  document.documentElement.classList.toggle("night", on);
  $("dayNight").textContent = on ? "日间阅读" : "夜间阅读";
  localStorage.setItem("aitools-zhi-night", on ? "1" : "0");
}

/* ---------- 渲染条目 ---------- */
function entryHtml(e) {
  const kept = favs.has(e.name);
  return `
  <li class="entry" data-row="${e.name}">
    <span class="entry-no"></span>
    <span class="seal-mark" style="color:${pickInk(e.heat)}">${e.mark}</span>
    <div class="entry-body">
      <div class="entry-name-row">
        <a class="entry-name" href="https://${e.host}" target="_blank" rel="noopener">${e.name}</a>
        <span class="entry-host">${e.host}</span>
        ${e.free ? '<span class="entry-mark mk-free">免费</span>' : ""}
        ${e.hot ? '<span class="entry-mark mk-hot">热门</span>' : ""}
      </div>
      <p class="entry-desc">${e.desc}</p>
    </div>
    <div class="entry-side">
      <span class="entry-kicker">${SECTIONS[e.sec]} · 热度 <b>${e.heat}</b></span>
      <div class="entry-acts">
        <button class="fav-mark ${kept ? "on" : ""}" data-fav="${e.name}" title="纳入藏笥">${kept ? "◆" : "◇"}</button>
        <a class="go-mark" href="https://${e.host}" target="_blank" rel="noopener">进入 ↗</a>
      </div>
    </div>
  </li>`;
}

/* 印色随热度：朱红深浅 */
function pickInk(heat) {
  if (heat >= 90) return "var(--vermilion)";
  if (heat >= 75) return "var(--seal)";
  return "var(--ink-2)";
}

function render() {
  let list = ENTRIES.filter(e => {
    if (view.favMode && !favs.has(e.name)) return false;
    if (!view.favMode && view.sec !== "all" && e.sec !== view.sec) return false;
    const kw = view.kw.trim().toLowerCase();
    if (!kw) return true;
    return e.name.toLowerCase().includes(kw) || e.desc.includes(view.kw.trim()) ||
           e.host.includes(kw) || SECTIONS[e.sec].includes(view.kw.trim());
  });
  if (view.ord === "hot") list = [...list].sort((a, b) => b.heat - a.heat);
  else if (view.ord === "new") list = [...list].sort((a, b) => b.date.localeCompare(a.date));
  else if (view.ord === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name, "zh"));

  $("entries").innerHTML = list.map(entryHtml).join("");
  $("blank").hidden = list.length > 0 || view.favMode;
  $("favBlank").hidden = list.length > 0 || !view.favMode;

  const title = view.favMode ? "藏笥 · 私录" :
    (view.sec === "all" ? "卷首 · 全部工具" : `${SECTIONS[view.sec]} · ${view.sec === "chat" ? "对话助手" : view.sec === "write" ? "写作" : view.sec === "image" ? "绘画设计" : view.sec === "image-tool" ? "图像处理" : view.sec === "video" ? "视频生成" : view.sec === "audio" ? "音频" : view.sec === "code" ? "编程" : view.sec === "office" ? "办公" : "搜索"}`);
  $("sheetTitle").textContent = `${title}（${list.length} 条）`;
  $("nfav").textContent = favs.size;
}

/* ---------- 门类导航 ---------- */
$("sections").addEventListener("click", (ev) => {
  const a = ev.target.closest("a[data-sec]");
  if (!a) return;
  document.querySelectorAll(".sections a").forEach(x => x.classList.toggle("on", x === a));
  const sec = a.dataset.sec;
  view.favMode = sec === "fav";
  if (!view.favMode) view.sec = sec;
  render();
});

/* ---------- 检索 ---------- */
let timer;
$("lookupInput").addEventListener("input", (e) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    view.kw = e.target.value;
    $("lookupClear").hidden = !view.kw;
    render();
  }, 180);
});
$("lookupClear").addEventListener("click", () => {
  $("lookupInput").value = ""; view.kw = "";
  $("lookupClear").hidden = true; render();
});

/* ---------- 编排 ---------- */
document.querySelector(".order").addEventListener("click", (ev) => {
  const a = ev.target.closest("a[data-ord]");
  if (!a) return;
  document.querySelectorAll(".order a").forEach(x => x.classList.toggle("on", x === a));
  view.ord = a.dataset.ord;
  render();
});

/* ---------- 藏笥 ---------- */
$("entries").addEventListener("click", (ev) => {
  const btn = ev.target.closest(".fav-mark");
  if (!btn) return;
  const name = btn.dataset.fav;
  const kept = favs.has(name);
  if (kept) favs.delete(name); else favs.add(name);
  localStorage.setItem("aitools-zhi-favs", JSON.stringify([...favs]));
  btn.classList.toggle("on", !kept);
  btn.textContent = kept ? "◇" : "◆";
  /* 行内朱光一闪，代替弹窗提示 */
  const row = btn.closest(".entry");
  row.classList.remove("flash"); void row.offsetWidth; row.classList.add("flash");
  $("nfav").textContent = favs.size;
  if (view.favMode) setTimeout(render, 550);
});

/* ---------- 刊期日期 ---------- */
(function () {
  const d = new Date();
  const y = "二〇二六".replace(/\d/g, m => "〇一二三四五六七八九"[m]); /* 兜底 */
  const years = ["二〇二六", "二〇二七"];
  const cyc = "甲辰乙巳丙午丁未";
  $("mastDate").textContent = `${years[d.getFullYear() >= 2027 ? 1 : 0]} · ${d.getMonth() + 1} 月刊`;
})();

/* ---------- 计数 ---------- */
$("toolTotal").textContent = ENTRIES.length;
$("nAll").textContent = `(${ENTRIES.length})`;
for (const k of Object.keys(SECTIONS)) {
  const el = $("n" + k);
  if (el) el.textContent = `(${ENTRIES.filter(e => e.sec === k).length})`;
}

render();
