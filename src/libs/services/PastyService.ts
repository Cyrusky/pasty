import { inject, injectable } from "inversify";
import { makeAutoObservable } from "mobx";
import { ServiceNames, StoreNames } from "@/libs/constants";
import type { ApiService } from "@/libs/services/ApiService.ts";
import type { PasteListStore } from "@/libs/stores/PasteListStore.ts";
import type { PastyModel } from "@/types";

@injectable()
export class PastyService {
  constructor(
    @inject(ServiceNames.ApiService) private apiService: ApiService,
    @inject(StoreNames.PastListStore) private pastListStore: PasteListStore,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get hasPasty(): boolean {
    return this.pastListStore.pasty.length === 0;
  }

  async loadPasty() {
    // const result = await this.apiService.getAllPasty();
    const result = {
      status: true,
      data: [
        {
          id: 246,
          pastyType: "Rtf",
          hash: "86ec532bc2d638184fcd9dcf30faf08f",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red153\\green168\\blue186;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\nresult\\par}",
          createdAt: "2025-02-09T10:30:38.219486Z",
          updatedAt: "2025-02-09T10:30:38.219487Z",
        },
        {
          id: 245,
          pastyType: "Text",
          hash: "5ff8b12dffe4954fb365b7d1e861780c",
          thumbnail: "",
          content: "timeline-right",
          createdAt: "2025-02-09T10:27:53.006757Z",
          updatedAt: "2025-02-09T10:27:53.006771Z",
        },
        {
          id: 244,
          pastyType: "Text",
          hash: "d8e9db4f3caa610a785840ad0d485f61",
          thumbnail: "",
          content: "@types/ react-highligh",
          createdAt: "2025-02-09T10:20:45.031871Z",
          updatedAt: "2025-02-09T10:21:27.141354Z",
        },
        {
          id: 243,
          pastyType: "Rtf",
          hash: "78ad2080341e8ea5cc79885904398d64",
          thumbnail: "",
          content:
            '{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red195\\green123\\blue90;\\red203\\green170\\blue101;\\red89\\green158\\blue96;\\red185\\green101\\blue173;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\nreturn \\cf4\n\n<Highlight \\cf1\n\nclassName\\cf5\n\n="text"\\cf4\n\n>\\cf1\n\n\\{pasty.\\cf6\n\ncontent\\cf1\n\n\\}\\cf4\n\n</Highlight>\\cf1\n\n;\\par}',
          createdAt: "2025-02-09T10:20:23.471061Z",
          updatedAt: "2025-02-09T10:20:23.471069Z",
        },
        {
          id: 242,
          pastyType: "Html",
          hash: "5a7638e75f7ad3d0f04936efa804f272",
          thumbnail: "",
          content:
            '<meta charset=\'utf-8\'><div class="highlight highlight-source-js" style="box-sizing: border-box; background-color: rgb(240, 240, 240); color: rgb(0, 0, 0); margin-bottom: 16px; border-radius: 6px; font-family: &quot;Source Sans Pro&quot;, &quot;Lucida Grande&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><pre tabindex="0" style="box-sizing: border-box; font-family: monospace, monospace; font-size: 1em; margin-top: 0px; margin-bottom: 24px; padding: 13px 15px; background: var(--code-bg); border-radius: var(--code-box-radius); overflow-x: auto;"><span class="pl-k" style="box-sizing: border-box; color: rgb(213, 48, 66);">import</span> <span class="pl-v" style="box-sizing: border-box; color: rgb(227, 98, 9);">Highlight</span> <span class="pl-k" style="box-sizing: border-box; color: rgb(213, 48, 66);">from</span> <span class="pl-s" style="box-sizing: border-box; color: rgb(3, 47, 98);">\'react-highlight\'</span></pre></div><h4 style="box-sizing: border-box; margin: 16px 0px 4px; color: rgb(17, 17, 17); padding-bottom: 8px; font-weight: 600; line-height: 1.25; font-size: 1.125rem; letter-spacing: -0.03rem; border-bottom: 1px solid rgb(238, 238, 238); font-family: &quot;Source Sans Pro&quot;, &quot;Lucida Grande&quot;, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><a id="user-content-adding-styles" class="anchor" aria-hidden="true" href="https://www.npmjs.com/package/react-highlight#adding-styles" style="box-sizing: border-box; background-color: transparent; color: var(--wombat-red); text-decoration: none; font-size: 1em; font-weight: 700; float: left; margin-left: -20px; padding-right: 4px;"><svg aria-hidden="true" focusable="false" class="octicon octicon-link" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:middle;overflow:visible"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></h4><br class="Apple-interchange-newline">',
          createdAt: "2025-02-09T10:20:12.901881Z",
          updatedAt: "2025-02-09T10:20:12.901887Z",
        },
        {
          id: 241,
          pastyType: "Html",
          hash: "90c63c04726c51fbef497d1206ae55a8",
          thumbnail: "",
          content:
            '<meta charset=\'utf-8\'><pre tabindex="0" style="box-sizing: border-box; font-family: monospace, monospace; font-size: 16px; margin-top: 0px; margin-bottom: 24px; padding: 13px 15px; background: var(--code-bg); border-radius: var(--code-box-radius); overflow-x: auto; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">react-highlight</pre>',
          createdAt: "2025-02-09T10:18:25.965835Z",
          updatedAt: "2025-02-09T10:18:25.965836Z",
        },
        {
          id: 240,
          pastyType: "Rtf",
          hash: "49ab7955ee456c7df117414c54b25805",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red172\\green172\\blue172;\\red203\\green170\\blue101;\\red197\\green195\\blue255;\\red38\\green157\\blue169;\\red89\\green158\\blue96;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\n\\\n\\cf3\n\\f1\n\\i0\\b0\n\nwidth\\cf1\n\n: \\cf4\n\ncalc\\cf1\n\n(\\cf4\n\nvar\\cf1\n\n(\\cf4\n\n--dot-left\\cf1\n\n) - (\\cf5\n\n@var-dot-size \\cf1\n\n+ \\cf6\n\n30\\cf7\n\npx\\cf1\n\n) / \\cf6\n\n2\\cf1\n\n);\\par}",
          createdAt: "2025-02-09T09:53:41.612167Z",
          updatedAt: "2025-02-09T09:53:41.612170Z",
        },
        {
          id: 239,
          pastyType: "Rtf",
          hash: "824ee9e3f8106b1fca02277956fb7562",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red172\\green172\\blue172;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\n--dot-left\\par}",
          createdAt: "2025-02-09T09:53:12.421055Z",
          updatedAt: "2025-02-09T09:53:12.421058Z",
        },
        {
          id: 238,
          pastyType: "Text",
          hash: "6b332b1f09346f30e1e622c4b6032c19",
          thumbnail: "",
          content: "emptyRender.tsx",
          createdAt: "2025-02-09T09:47:48.733928Z",
          updatedAt: "2025-02-09T09:50:36.474617Z",
        },
        {
          id: 237,
          pastyType: "Rtf",
          hash: "10a4cbb9cd86498892754e6536025fe0",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red71\\green149\\blue242;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\nEmptyPreviewRender\\par}",
          createdAt: "2025-02-09T09:46:51.866721Z",
          updatedAt: "2025-02-09T09:46:51.866722Z",
        },
        {
          id: 236,
          pastyType: "Text",
          hash: "ed9604d7b23bcaac5bd353b1c5d6d441",
          thumbnail: "",
          content: "textRender.tsx",
          createdAt: "2025-02-09T09:46:12.049008Z",
          updatedAt: "2025-02-09T09:46:12.049011Z",
        },
        {
          id: 235,
          pastyType: "Rtf",
          hash: "8cd6bd140a2e5740170895f0049d3d15",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\f1\n\\i0\\b0\n\nonClick\\par}",
          createdAt: "2025-02-09T09:44:49.914731Z",
          updatedAt: "2025-02-09T09:44:49.914733Z",
        },
        {
          id: 234,
          pastyType: "Rtf",
          hash: "0a5157ec64503c22b9ca6fd7a59a5779",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\f1\n\\i0\\b0\n\nRenderProps\\par}",
          createdAt: "2025-02-09T09:39:02.915567Z",
          updatedAt: "2025-02-09T09:39:02.915570Z",
        },
        {
          id: 233,
          pastyType: "Rtf",
          hash: "baffa6efe2db1b7fd38339756415bbbb",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red195\\green123\\blue90;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\n\\\n\n  \\cf3\n\\f1\n\\i0\\b0\n\ndebugger\\cf1\n\n;\\par}",
          createdAt: "2025-02-09T09:33:58.650247Z",
          updatedAt: "2025-02-09T09:33:58.650249Z",
        },
        {
          id: 232,
          pastyType: "Text",
          hash: "0a4034537c27eebbbbc980d238bf7e57",
          thumbnail: "",
          content:
            "import dayJs from 'dayjs'\nimport relativeTime from 'dayjs/plugin/relativeTime'\nimport 'dayjs/locale/zh-cn' // +\ndayJs.locale('zh-cn') // +\ndayJs.extend(relativeTime)\r\n————————————————\r\n\n                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。\n                        \r\n原文链接：https://blog.csdn.net/Dark_programmer/article/details/122233258",
          createdAt: "2025-02-09T09:31:38.469848Z",
          updatedAt: "2025-02-09T09:31:38.469854Z",
        },
        {
          id: 231,
          pastyType: "Html",
          hash: "e997a3703cd0cce35dc88dd77f10925d",
          thumbnail: "",
          content:
            "<meta charset='utf-8'><span style=\"color: rgb(152, 103, 106); font-family: &quot;Source Code Pro&quot;, &quot;DejaVu Sans Mono&quot;, &quot;Ubuntu Mono&quot;, &quot;Anonymous Pro&quot;, &quot;Droid Sans Mono&quot;, Menlo, Monaco, Consolas, Inconsolata, Courier, monospace, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: pre; background-color: rgb(251, 235, 212); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">fromNow</span>",
          createdAt: "2025-02-09T09:30:55.848340Z",
          updatedAt: "2025-02-09T09:30:55.848343Z",
        },
        {
          id: 230,
          pastyType: "Rtf",
          hash: "eed9bb80a449a06e5d847bbac5e36fe0",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red153\\green168\\blue186;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\nupdatedAt\\par}",
          createdAt: "2025-02-09T09:30:39.780320Z",
          updatedAt: "2025-02-09T09:30:39.780325Z",
        },
        {
          id: 229,
          pastyType: "Rtf",
          hash: "c1c393fd5c632984b00170fb265ab4cb",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red71\\green149\\blue242;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\nsetYmd\\cf1\n\n()\\par}",
          createdAt: "2025-02-09T09:30:34.744771Z",
          updatedAt: "2025-02-09T09:30:34.744774Z",
        },
        {
          id: 228,
          pastyType: "Rtf",
          hash: "fc2f2364fc22153c6b77c08bad58f527",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red185\\green101\\blue173;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\nupdatedAt\\par}",
          createdAt: "2025-02-09T09:30:09.172105Z",
          updatedAt: "2025-02-09T09:30:09.172108Z",
        },
        {
          id: 227,
          pastyType: "Rtf",
          hash: "8815f42dd8031ce65233a911cd69aad9",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red195\\green123\\blue90;\\red153\\green168\\blue186;\\red185\\green101\\blue172;\\red185\\green101\\blue173;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\nconst \\cf4\n\ndate \\cf1\n\n= \\cf3\n\nnew \\cf5\n\\i\\b0\n\nDate\\cf1\n\\i0\\b0\n\n(pasty.\\cf6\n\nupdatedAt\\cf1\n\n);\\\n\\par}",
          createdAt: "2025-02-09T09:30:00.133327Z",
          updatedAt: "2025-02-09T09:30:00.133332Z",
        },
        {
          id: 226,
          pastyType: "Rtf",
          hash: "cc6ee2a974bb710f4512e2eaefd4860b",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red195\\green123\\blue90;\\red153\\green168\\blue186;\\red185\\green101\\blue172;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\n\\\n\\cf3\n\\f1\n\\i0\\b0\n\nconst \\cf4\n\nnow \\cf1\n\n= \\cf3\n\nnew \\cf5\n\\i\\b0\n\nDate\\cf1\n\\i0\\b0\n\n();\\\n\\cf3\n\nconst \\cf4\n\ntime \\cf1\n\n= dayjs(\\cf4\n\ndate\\cf1\n\n);\\par}",
          createdAt: "2025-02-09T09:28:44.690679Z",
          updatedAt: "2025-02-09T09:28:44.690682Z",
        },
        {
          id: 225,
          pastyType: "Rtf",
          hash: "46ac3dd84c5fac462e6b44734089e684",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red185\\green101\\blue173;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\n\\\n\n  \\cf3\n\\f1\n\\i0\\b0\n\nheight\\cf1\n\n:\\par}",
          createdAt: "2025-02-09T09:23:48.893750Z",
          updatedAt: "2025-02-09T09:23:48.893752Z",
        },
        {
          id: 224,
          pastyType: "Rtf",
          hash: "f085d210356c568be633d1a104bb643c",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red185\\green101\\blue173;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\f1\n\\i0\\b0\n\npasty\\cf1\n\n.\\cf3\n\nupdatedAt\\par}",
          createdAt: "2025-02-09T09:20:39.044516Z",
          updatedAt: "2025-02-09T09:20:39.044518Z",
        },
        {
          id: 223,
          pastyType: "Rtf",
          hash: "6670f01840db05e60e1932a40396dbeb",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red153\\green168\\blue186;\\red71\\green149\\blue242;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\ne\\cf1\n\n.\\cf4\n\nloadPasty\\cf1\n\n()\\par}",
          createdAt: "2025-02-09T09:19:41.068036Z",
          updatedAt: "2025-02-09T09:19:41.068038Z",
        },
        {
          id: 222,
          pastyType: "Rtf",
          hash: "4503e2df3e6946c29607d660a825e0e2",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red71\\green149\\blue242;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\nget_all_pasty\\par}",
          createdAt: "2025-02-09T09:19:14.367769Z",
          updatedAt: "2025-02-09T09:19:14.367814Z",
        },
        {
          id: 221,
          pastyType: "Text",
          hash: "4569a9bdae4b3c87f93ac120d772ccfd",
          thumbnail: "",
          content:
            "Squid Game (2024) S02E05 2160p NF WEB-DL [Korean DDPA 5.1+Eng+Hin+Tam+Tel] HDR H.265 (HHWEB-themoviesboss).mkv",
          createdAt: "2025-02-09T09:09:48.002095Z",
          updatedAt: "2025-02-09T09:09:50.026655Z",
        },
        {
          id: 220,
          pastyType: "Text",
          hash: "4c0cb443c2e9cfe3851b1981d433fa38",
          thumbnail: "",
          content:
            "Squid Game (2024) S02E04 2160p NF WEB-DL [Korean DDPA 5.1+Eng+Hin+Tam+Tel] HDR H.265 (HHWEB-themoviesboss).mkv",
          createdAt: "2025-02-09T09:09:43.477403Z",
          updatedAt: "2025-02-09T09:09:43.477406Z",
        },
        {
          id: 219,
          pastyType: "Rtf",
          hash: "3507b6b6152ecf67f0a46a2eb96db2f4",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red197\\green195\\blue255;\\red89\\green158\\blue96;\\red38\\green157\\blue169;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\n@default-transition\\cf1\n\n: \\cf4\n\nall \\cf5\n\n0.3\\cf4\n\ns ease\\cf1\n\n;\\\n\\par}",
          createdAt: "2025-02-09T09:06:07.208270Z",
          updatedAt: "2025-02-09T09:06:07.208275Z",
        },
        {
          id: 218,
          pastyType: "Rtf",
          hash: "a000fac7c6b3d485d9b17ed14e78725b",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red172\\green172\\blue172;\\red203\\green170\\blue101;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\nbackground-color\\cf1\n\n: \\cf4\n\nvar\\cf1\n\n(\\cf4\n\n--color-gray-2\\cf1\n\n);\\\n\\par}",
          createdAt: "2025-02-09T09:05:01.039320Z",
          updatedAt: "2025-02-09T09:05:01.039324Z",
        },
        {
          id: 217,
          pastyType: "Rtf",
          hash: "30378bbd2aeeadb58d6b0495a00d4ff7",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red203\\green170\\blue101;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\n--color-primary-2\\par}",
          createdAt: "2025-02-09T09:04:33.967349Z",
          updatedAt: "2025-02-09T09:04:33.967353Z",
        },
        {
          id: 216,
          pastyType: "Rtf",
          hash: "52b488049e2a9c78a50b21e2dd9d1e7c",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red172\\green172\\blue172;\\red38\\green157\\blue169;\\red203\\green170\\blue101;\\red197\\green195\\blue255;\\red89\\green158\\blue96;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\nbox-shadow\\cf1\n\n: \\cf4\n\n0 0 \\cf5\n\ncalc\\cf1\n\n((\\cf6\n\n@var-dot-size \\cf1\n\n- \\cf4\n\n2\\cf7\n\npx\\cf1\n\n) / \\cf4\n\n2\\cf1\n\n) \\cf5\n\nvar\\cf1\n\n(\\cf5\n\n--color-primary-2\\cf1\n\n);\\\n\\par}",
          createdAt: "2025-02-09T09:02:18.679677Z",
          updatedAt: "2025-02-09T09:03:08.288270Z",
        },
        {
          id: 215,
          pastyType: "Rtf",
          hash: "17e26aae9bc6107771b0c9a5bab2a7bb",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red89\\green158\\blue96;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\ntimeline-left\\par}",
          createdAt: "2025-02-09T08:59:55.341177Z",
          updatedAt: "2025-02-09T08:59:55.341181Z",
        },
        {
          id: 214,
          pastyType: "Rtf",
          hash: "e11fb7343a26a336c650faf473314f7a",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\f1\n\\i0\\b0\n\nindex\\par}",
          createdAt: "2025-02-09T08:59:33.247484Z",
          updatedAt: "2025-02-09T08:59:33.247487Z",
        },
        {
          id: 213,
          pastyType: "Rtf",
          hash: "b0779830c282ce66fc699d63e53ed058",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red89\\green158\\blue96;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\ntime\\par}",
          createdAt: "2025-02-09T08:53:37.854190Z",
          updatedAt: "2025-02-09T08:53:37.854194Z",
        },
        {
          id: 212,
          pastyType: "Rtf",
          hash: "1ece1cf2c9746d9902fb7e1725302485",
          thumbnail: "",
          content:
            '{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red203\\green170\\blue101;\\red153\\green168\\blue186;\\red71\\green149\\blue242;\\red89\\green158\\blue96;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\n\\\n\n  \\cf3\n\\f1\n\\i0\\b0\n\n<div>\\cf1\n\n\\{\\cf4\n\ntime\\cf1\n\n.\\cf5\n\nformat\\cf1\n\n(\\cf6\n\n"YYYY-MM-DD"\\cf1\n\n)\\}\\cf3\n\n</div>\\\n\n  <div>\\cf1\n\n\\{\\cf4\n\ntime\\cf1\n\n.\\cf5\n\nformat\\cf1\n\n(\\cf6\n\n"HH:mm:ss"\\cf1\n\n)\\}\\cf3\n\n</div>\\par}',
          createdAt: "2025-02-09T08:52:47.212365Z",
          updatedAt: "2025-02-09T08:52:47.212369Z",
        },
        {
          id: 211,
          pastyType: "Rtf",
          hash: "8e30631fbb45d9892e701892cfad4373",
          thumbnail: "",
          content:
            '{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red153\\green168\\blue186;\\red71\\green149\\blue242;\\red89\\green158\\blue96;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf1\n\\f1\n\\i0\\b0\n\n\\{\\cf3\n\ntime\\cf1\n\n.\\cf4\n\nformat\\cf1\n\n(\\cf5\n\n"HH:mm:ss"\\cf1\n\n)\\}\\par}',
          createdAt: "2025-02-09T08:52:36.675264Z",
          updatedAt: "2025-02-09T08:52:36.675266Z",
        },
        {
          id: 210,
          pastyType: "Rtf",
          hash: "4075370adf3c19185a13957bf2bc8eef",
          thumbnail: "",
          content:
            '{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red153\\green168\\blue186;\\red71\\green149\\blue242;\\red89\\green158\\blue96;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf1\n\\f1\n\\i0\\b0\n\n\\{\\cf3\n\ntime\\cf1\n\n.\\cf4\n\nformat\\cf1\n\n(\\cf5\n\n"YYYY-MM-DD"\\cf1\n\n)\\}\\par}',
          createdAt: "2025-02-09T08:52:33.656913Z",
          updatedAt: "2025-02-09T08:52:33.656918Z",
        },
        {
          id: 209,
          pastyType: "Html",
          hash: "8275dabb1579ace64163f24a5207fe24",
          thumbnail: "",
          content:
            "<meta charset='utf-8'><span style=\"color: rgb(77, 77, 77); font-family: -apple-system, &quot;SF UI Text&quot;, Arial, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: no-common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">YYYY-MM-DD HH : mm : ss</span>",
          createdAt: "2025-02-09T08:50:15.279116Z",
          updatedAt: "2025-02-09T08:50:15.279118Z",
        },
        {
          id: 208,
          pastyType: "Rtf",
          hash: "23553158b6d2700feea8c9e3c9a7ac47",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red172\\green172\\blue172;\\red197\\green195\\blue255;\\red38\\green157\\blue169;\\red89\\green158\\blue96;\\red203\\green170\\blue101;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\n\\\n\n  \\cf3\n\\f1\n\\i0\\b0\n\nwidth\\cf1\n\n: \\cf4\n\n@var-dot-size \\cf1\n\n+ \\cf5\n\n3\\cf6\n\npx\\cf1\n\n;\\\n\n  \\cf3\n\nheight\\cf1\n\n: \\cf4\n\n@var-dot-size \\cf1\n\n+ \\cf5\n\n3\\cf6\n\npx\\cf1\n\n;\\\n\n  \\cf3\n\nbackground-color\\cf1\n\n: \\cf6\n\nred\\cf1\n\n;\\\n\n  \\cf3\n\nbox-shadow\\cf1\n\n: \\cf5\n\n0 0 \\cf7\n\ncalc\\cf1\n\n((\\cf4\n\n@var-dot-size \\cf1\n\n- \\cf5\n\n2\\cf6\n\npx\\cf1\n\n) / \\cf5\n\n2\\cf1\n\n) \\cf6\n\nred\\cf1\n\n;\\\n\n  \\cf3\n\nborder\\cf1\n\n: \\cf5\n\n1\\cf6\n\npx solid white\\cf1\n\n;\\\n\n  \\cf3\n\nmargin-left\\cf1\n\n: \\cf7\n\ncalc\\cf1\n\n((\\cf4\n\n@var-dot-size \\cf1\n\n+ \\cf5\n\n3\\cf6\n\npx\\cf1\n\n) / -\\cf5\n\n2\\cf1\n\n);\\par}",
          createdAt: "2025-02-09T08:45:21.545684Z",
          updatedAt: "2025-02-09T08:45:21.545686Z",
        },
        {
          id: 207,
          pastyType: "Rtf",
          hash: "22b3f0264f7cc1d9925cc7280964fd87",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red203\\green170\\blue101;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf1\n\\f1\n\\i0\\b0\n\n.\\cf3\n\ntimeline-do\\par}",
          createdAt: "2025-02-09T08:45:08.008552Z",
          updatedAt: "2025-02-09T08:45:08.008556Z",
        },
        {
          id: 206,
          pastyType: "Rtf",
          hash: "7ed63ac0ba0a47e2b9bbb2a64147008b",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red203\\green170\\blue101;\\red172\\green172\\blue172;\\red197\\green195\\blue255;\\red38\\green157\\blue169;\\red89\\green158\\blue96;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\n&\\cf1\n\n:\\cf3\n\nhover \\cf1\n\n\\{\\\n\n  \\cf4\n\nwidth\\cf1\n\n: \\cf5\n\n@var-dot-size \\cf1\n\n+ \\cf6\n\n3\\cf7\n\npx\\cf1\n\n;\\\n\n  \\cf4\n\nheight\\cf1\n\n: \\cf5\n\n@var-dot-size \\cf1\n\n+ \\cf6\n\n3\\cf7\n\npx\\cf1\n\n;\\\n\n  \\cf4\n\nbackground-color\\cf1\n\n: \\cf7\n\nred\\cf1\n\n;\\\n\n  \\cf4\n\nbox-shadow\\cf1\n\n: \\cf6\n\n0 0 \\cf3\n\ncalc\\cf1\n\n((\\cf5\n\n@var-dot-size \\cf1\n\n- \\cf6\n\n2\\cf7\n\npx\\cf1\n\n) / \\cf6\n\n2\\cf1\n\n) \\cf7\n\nred\\cf1\n\n;\\\n\n  \\cf4\n\nborder\\cf1\n\n: \\cf6\n\n1\\cf7\n\npx solid white\\cf1\n\n;\\\n\n  \\cf4\n\nmargin-left\\cf1\n\n: \\cf3\n\ncalc\\cf1\n\n((\\cf5\n\n@var-dot-size \\cf1\n\n+ \\cf6\n\n3\\cf7\n\npx\\cf1\n\n) / -\\cf6\n\n2\\cf1\n\n);\\\n\n\\}\\par}",
          createdAt: "2025-02-09T08:45:02.983697Z",
          updatedAt: "2025-02-09T08:45:02.983701Z",
        },
        {
          id: 205,
          pastyType: "Rtf",
          hash: "f6b4e3cd06945ab0cdfd31ccb750582d",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red203\\green170\\blue101;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\nvar\\cf1\n\n(\\cf3\n\n--dot-left\\cf1\n\n)\\par}",
          createdAt: "2025-02-09T08:42:37.073266Z",
          updatedAt: "2025-02-09T08:42:37.073270Z",
        },
        {
          id: 204,
          pastyType: "Rtf",
          hash: "7a1b09af449a1e7cdc3aa2ca5de4e863",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red197\\green195\\blue255;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\n@var-dot-left\\par}",
          createdAt: "2025-02-09T08:41:52.468768Z",
          updatedAt: "2025-02-09T08:41:52.468774Z",
        },
        {
          id: 203,
          pastyType: "Rtf",
          hash: "f19d0b3cbf0f9ee7dda89aec04be9f63",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red197\\green195\\blue255;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\n@var-dot-size\\par}",
          createdAt: "2025-02-09T08:39:37.579351Z",
          updatedAt: "2025-02-09T08:39:37.579355Z",
        },
        {
          id: 202,
          pastyType: "Rtf",
          hash: "ee1b9a501839571be2cd98bae8d91e16",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red38\\green157\\blue169;\\red89\\green158\\blue96;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\n4\\cf4\n\npx\\par}",
          createdAt: "2025-02-09T08:36:33.146150Z",
          updatedAt: "2025-02-09T08:36:33.146152Z",
        },
        {
          id: 201,
          pastyType: "Rtf",
          hash: "e482a23c6501ca739a5ede9d9fa25229",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red38\\green157\\blue169;\\red89\\green158\\blue96;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf1\n\\f1\n\\i0\\b0\n\n-\\cf3\n\n3.5\\cf4\n\npx\\par}",
          createdAt: "2025-02-09T08:36:12.582896Z",
          updatedAt: "2025-02-09T08:36:12.582901Z",
        },
        {
          id: 200,
          pastyType: "Rtf",
          hash: "6a62a13f4ca28c01eb60c939e7ee156e",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red172\\green172\\blue172;\\red203\\green170\\blue101;\\red197\\green195\\blue255;\\red38\\green157\\blue169;\\red89\\green158\\blue96;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\n\\\n\\cf3\n\\f1\n\\i0\\b0\n\nmargin-left\\cf1\n\n: \\cf4\n\ncalc\\cf1\n\n((\\cf5\n\n@var-dot-size \\cf1\n\n+ \\cf6\n\n3\\cf7\n\npx\\cf1\n\n) / -\\cf6\n\n2\\cf1\n\n);\\par}",
          createdAt: "2025-02-09T08:36:08.059446Z",
          updatedAt: "2025-02-09T08:36:08.059450Z",
        },
        {
          id: 199,
          pastyType: "Rtf",
          hash: "2f03650b887cec8063e55013f08e5e9b",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red197\\green195\\blue255;\\red38\\green157\\blue169;\\red89\\green158\\blue96;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf1\n\\f1\n\\i0\\b0\n\n(\\cf3\n\n@var-dot-size \\cf1\n\n+ \\cf4\n\n3\\cf5\n\npx\\cf1\n\n) / \\cf4\n\n2\\par}",
          createdAt: "2025-02-09T08:35:53.019490Z",
          updatedAt: "2025-02-09T08:35:53.019493Z",
        },
        {
          id: 198,
          pastyType: "Rtf",
          hash: "fef51efa9f7120e179a3718253b300b0",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red197\\green195\\blue255;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\n@var-dot-size\\cf1\n\n;\\par}",
          createdAt: "2025-02-09T08:35:06.917449Z",
          updatedAt: "2025-02-09T08:35:06.917454Z",
        },
        {
          id: 197,
          pastyType: "Rtf",
          hash: "fe902fbaa8abafc42e4d9daf4dad4706",
          thumbnail: "",
          content:
            "{\\rtf1\\ansi\\deff0{\\colortbl;\\red174\\green176\\blue183;\\red23\\green23\\blue26;\\red89\\green158\\blue96;}\n{\\fonttbl{\\f1\\fmodern JetBrains Mono;}}\n\n\\s0\\box\\cbpat2\\cb2\\cf1\\fs30\n\\cf3\n\\f1\n\\i0\\b0\n\ntimeline\\par}",
          createdAt: "2025-02-09T08:33:14.648925Z",
          updatedAt: "2025-02-09T08:33:14.648930Z",
        },
      ],
      msg: "OK",
    };
    this.pastListStore.loadPasty(result.data as PastyModel[]);
  }
}
